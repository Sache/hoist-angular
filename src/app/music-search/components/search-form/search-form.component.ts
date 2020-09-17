import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators, ValidatorFn, Validator, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, filter } from 'rxjs/operators';

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
        console.log('Form subscribed with ' + control.value)

        const isInvalid = String(control.value).includes(badword)

        const handler = setTimeout(() => {
          console.log('Validation is ' + !isInvalid)
          
          observer.next(isInvalid ? {
            'censor': { badword: badword }
          } : null)
          observer.complete()
        }, 2000)

        // Teardown logic - called on UnSubscribe
        return () => { 
          console.log('Validation Canceled')
          clearTimeout(handler) }
      })
      // .subscribe({ next:()=>{ /* ... */}})
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
    const valueChanges = this.queryForm.get('query')?.valueChanges!;

    valueChanges.pipe(
      debounceTime(400),
      filter(q => q.length >= 3),
      distinctUntilChanged(),
    )
      .subscribe(query => {
        this.search(query)
      })

  }

  @Output() searchChange = new EventEmitter<string>();

  search(query: string) {
    // this.queryModel
    // console.log(query)
    this.searchChange.emit(query)
  }


  resetForm() {
    // this.queryForm.setValue({})
    // this.queryForm.patchValue({})
    // this.queryForm.reset({});
    // ng.applyChanges(ng.getContext($0))
  }

}
