import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {


  buildForm() {
    const fb = this.fb

    return fb.group({
      'query': ['batman', []],
      'extras': fb.group({
        'type': ['album'],
        'markets': fb.array([
          fb.group({
            code: ['GB']
          }),
          fb.group({
            code: ['GB']
          }),
          fb.group({
            code: ['GB']
          })
        ])
      })
    })
  }
  queryForm = this.buildForm()


  markets = this.queryForm.get('extras.markets') as FormArray

  addMarket() {
    this.markets.push(new FormGroup({
      code: new FormControl('')
    }))
  }
  removeMarket(market: AbstractControl) {
    const index = this.markets.controls.indexOf(market)
    if (index !== -1) {
      this.markets.removeAt(index)
    }
  }

  constructor(private fb: FormBuilder) {
    (window as any).form = this.queryForm
  }

  ngOnInit(): void {
  }

  @Output() searchChange = new EventEmitter<string>();

  search() {
    // this.queryModel
    // console.log(query)
    // this.searchChange.emit(this.query)
  }

}
