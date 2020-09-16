import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('queryElem')
  queryElem?: ElementRef<HTMLInputElement>

  ngAfterViewInit(){
    console.log(this.queryElem!)
    this.queryElem?.nativeElement.focus()
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchChange = new EventEmitter<string>();

  search(query: string) {
    // console.log(query)
    this.searchChange.emit(query)
  }

}
