import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgModel } from '@angular/forms';

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
