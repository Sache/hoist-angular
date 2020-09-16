import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/album';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() results: Album[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
