import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { debounceTime, distinct, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm = this.fb.group({
    // 'query': ['batman', []]
    // query: new FormControl('batman',{
    //   // updateOn:'blur'
    // })
    query: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ])
  })

  constructor(private fb: FormBuilder) {
    (window as any).form = this.queryForm
  }

  ngOnInit(): void {
    const valueChanges = this.queryForm.get('query')?.valueChanges!;

    valueChanges.pipe(
      debounceTime(400),
      filter(q => q.length >= 3 ),
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


  resetForm(){
    // this.queryForm.setValue({})
    // this.queryForm.patchValue({})
    // this.queryForm.reset({});
    // ng.applyChanges(ng.getContext($0))
  }

}
