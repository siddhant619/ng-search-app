import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageResult } from '../models/image-result.model';
import { VideoResult } from '../models/video-result.model';
import { WebResult } from '../models/web-result.model';
import { SearchService } from '../services/search.service';
import {result} from '../static/web-response';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string=''
  searchType: string=''
  result: WebResult[] | ImageResult[]  | VideoResult[]=[];
  webResult:WebResult[]=[]
  imageResult:ImageResult[]=[]
  videoResult:VideoResult[]=[]
  constructor(private route: ActivatedRoute, private searchSvc: SearchService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qparam=>{
      this.searchTerm=qparam['searchTerm']
      this.searchType=qparam['type']
     
      //CALL SEARCH SERVICE: search(term, type)
      switch(this.searchType){
        case "web":
          this.searchSvc.searchWeb(this.searchTerm).subscribe({
            next: (response: WebResult[])=>{
              //console.log('Response', response)
              this.webResult=response
            }
          })
          break;
        
        case "image":
          this.searchSvc.searchImage(this.searchTerm).subscribe({
            next: (response: ImageResult[])=>{
              //console.log('Response', response)
              this.imageResult=response
            }
          })
          break;

        case "video":
          this.searchSvc.searchVideo(this.searchTerm).subscribe({
            next: (response: VideoResult[])=>{
              //console.log('Response', response)
              this.videoResult=response
            }
          })
          break;
        default: 
          break; //display a error message
      }
    })
  }

}
