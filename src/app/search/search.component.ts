import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string=''
  searchType: string=''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qparam=>{
      this.searchTerm=qparam['searchTerm']
      this.searchType=qparam['type']
      console.log('in queryparam of search component', this.searchTerm, this.searchType);

      //CALL SEARCH SERVICE: search(term, type)
    })
  }

}
