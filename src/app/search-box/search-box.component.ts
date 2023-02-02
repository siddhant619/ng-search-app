import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch,faArrowUp, faClock, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  showHistory:boolean= false
  searchTerm: string=''
  faSearch=faSearch
  faClock=faClock
  faArrowUp=faArrowUp
  history:{id: number, text: string}[]=[
    {id: 1, text: 'Angular'},
    {id: 2, text: 'HTML'},
    {id: 3, text: 'MMA'},
    {id: 4, text: 'Marvel'},
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qparam=>{
      this.searchTerm=qparam['searchTerm']
    })
  }
  toggleHistory(){
    this.showHistory=!this.showHistory
  }
  onSubmit(f: NgForm){
    if(f.valid)
    { 
        this.router.navigate(['/search'], {queryParams: {searchTerm: f.value.searchTerm,type: "web" }})
    }
  }
  loadTerm(s: string){
    this.searchTerm=s;
  }
}
