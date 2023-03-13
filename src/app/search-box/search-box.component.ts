import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch,faArrowUp, faClock,faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  showHistory:boolean= false
  @Input() displaySearchButton: boolean= false;
  searchTerm: string=''
  faSearch=faSearch
  faClock=faClock
  faArrowUp=faArrowUp
  faXmark=faXmark
 /*  history:{id: number, text: string}[]=[
    {id: 1, text: 'Angular'},
    {id: 2, text: 'HTML'},
    {id: 3, text: 'MMA'},
    {id: 4, text: 'Marvel'},
  ] */
  history:string[]=[]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qparam=>{
      this.searchTerm=qparam['searchTerm']
    })
    this.history=JSON.parse(localStorage.getItem('searchHistory')|| '[]')
  }
  toggleHistory(){
    this.history=JSON.parse(localStorage.getItem('searchHistory')|| '[]')
    if(this.history.length>0)
    this.showHistory=!this.showHistory
  }
  insertSearchHistory(term: string){
    
    let currentHistory: string[]= JSON.parse(localStorage.getItem('searchHistory')|| '[]')
    //console.log(currentHistory)
    if(!currentHistory.includes(term)){
      currentHistory.unshift(term)
      localStorage.setItem('searchHistory', JSON.stringify(currentHistory))
    }
    
  }
  onSubmit(f: NgForm){
    //pconsole.log('in submit', f.value.searchTerm)
    if(f.valid)
    { 
        this.insertSearchHistory(this.searchTerm)
        this.router.navigate(['/search'], {queryParams: {searchTerm: this.searchTerm,type: "web" }})
    }
  }
  loadTerm(s: string, f:NgForm){
    this.searchTerm=s;
    this.onSubmit(f)
  }
  clearInput(f: NgForm){
    f.controls['searchTerm'].reset()
  }
}
