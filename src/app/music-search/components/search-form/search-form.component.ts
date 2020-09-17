import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm = new FormGroup({
    query: new FormControl('batman',[]),
    type: new FormControl('album')
  })

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchChange = new EventEmitter<string>();

  search() {
    // this.queryModel
    // console.log(query)
    // this.searchChange.emit(this.query)
  }

}
