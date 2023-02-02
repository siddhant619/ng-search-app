import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch,faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  faSearch=faSearch
  faImage=faImage
  faVideo=faVideo
  searchType:string=''
  searchTerm: string=''
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qparam=>{
      this.searchTerm=qparam['searchTerm']
      this.searchType=qparam['type']
    })
  }
  changeSearchType(type: string){
    this.router.navigate(['/search'], {queryParams: {searchTerm: this.searchTerm,type: type }})
  }
}
