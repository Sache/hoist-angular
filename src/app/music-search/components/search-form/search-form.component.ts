import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators, ValidatorFn, Validator, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { combineLatest, from, Observable, OperatorFunction, pipe, Subject } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, filter, map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  censor = (badword = 'batman'): ValidatorFn => //

    (control: AbstractControl): ValidationErrors | null => {
      const isInvalid = String(control.value).includes(badword)

      return isInvalid ? {
        'censor': { badword: badword }
      } : null
    }

  asyncCensor = (badword = 'batman'): AsyncValidatorFn => //
    (control: AbstractControl) => {
      // return this.http.post('/validate', control.value).pipe(/*  */)

      return new Observable((observer) => {
        // Called on Subscribe
        // console.log('Form subscribed with ' + control.value)

        const isInvalid = String(control.value).includes(badword)

        const handler = setTimeout(() => {
          // console.log('Validation is ' + !isInvalid)

          observer.next(isInvalid ? {
            'censor': { badword: badword }
          } : null)
          observer.complete()
        }, 2000)

        // Teardown logic - called on UnSubscribe
        return () => {
          // console.log('Validation Canceled')
          clearTimeout(handler)
        }
      })
      // .subscribe({ next:()=>{ /* ... */}})
    }

  // @Input() query = '';
  // ngOnChanges(changes:SimpleChanges){ changes['query'].currentValue }

  @Input()
  set query(query: string) {
    (this.queryForm.get('query') as FormControl)?.setValue(query, {
      emitEvent: false,
      // onlySelf:true,
    })
  }

  @HostBinding('style.border-bottom-width.px')
  get size() {
    return 12
  }

  queryForm = this.fb.group({
    query: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // this.censor('batman')
    ], [
      this.asyncCensor('batman')
    ])
  }, [/* group validators */])

  constructor(private fb: FormBuilder) {
    (window as any).form = this.queryForm
  }

  ngOnInit(): void {
    this.queryForm.markAsPristine();

    const valueChanges = this.queryForm.get('query')?.valueChanges!;
    const statusChanges = this.queryForm.get('query')?.statusChanges!;

    combineLatest([statusChanges, valueChanges]).pipe(
      filter(([status]) => status == "VALID"),
      map(([, value]) => value),
      distinctUntilChanged()
    )
      .subscribe(query => {
        this.search(query)
      })

  }

  @Output() searchChange = new EventEmitter<string>();

  buttonClicked = new Subject()

  search(query: string) {
    // this.queryModel
    // console.log(query)
    this.searchChange.emit(query)
  }

  buttonSearch() {
    this.buttonClicked.next()
  }


  resetForm() {
    // this.queryForm.setValue({})
    // this.queryForm.patchValue({})
    // this.queryForm.reset({});
    // ng.applyChanges(ng.getContext($0))
  }

}
