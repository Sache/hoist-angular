import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm = new FormGroup({
    'query': new FormControl('batman', []),
    'extras': new FormGroup({
      'type': new FormControl('album'),
      'markets': new FormArray([
        new FormGroup({
          code: new FormControl('GB')
        }),
        new FormGroup({
          code: new FormControl('PL')
        }),
        new FormGroup({
          code: new FormControl('FR')
        }),
      ])
    })
  })

  markets = this.queryForm.get('extras.markets') as FormArray

  addMarket() {
    this.markets.push(new FormGroup({
      code: new FormControl('')
    }))
  }
  removeMarket(market:AbstractControl){
   const index = this.markets.controls.indexOf(market)
   if(index !== -1){
     this.markets.removeAt(index)
   }
  }

  constructor() {
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
