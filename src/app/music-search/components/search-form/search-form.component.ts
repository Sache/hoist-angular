import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  query = ''

  @ViewChild('queryElem')
  queryElem?: ElementRef<HTMLInputElement>

  @ViewChild('queryElem', { read: NgModel })
  queryModel?: NgModel

  ngAfterViewInit() {
    console.log(this.queryModel!)
    this.queryElem?.nativeElement.focus()
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchChange = new EventEmitter<string>();

  search() {
    // this.queryModel
    // console.log(query)
    this.searchChange.emit(this.query)
  }

}
