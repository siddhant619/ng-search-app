import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { result } from '../static/web-response';
import {imageResult} from '../static/image-response'
import {videoResult} from '../static/youtube-response'
import { WebResult } from '../models/web-result.model';
import { ImageResult } from '../models/image-result.model';
import { VideoResult } from '../models/video-result.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  dummy: boolean=false;
  constructor(private http: HttpClient) { }

  searchWeb(term: string): Observable<WebResult[]>{
    if(this.dummy){
      return new Observable(observer=>{
        let webResults: WebResult[]=[]
        for(let item of result.items ){
          let webResult: WebResult={title:'',
            url:'',
            urlText:'',
            snippet:''}
          webResult.title= item.title
          webResult.snippet= item.snippet
          webResult.url= item.link
          webResult.urlText= item.formattedUrl
          webResults.push(webResult)
        }
        observer.next(webResults)
      })
    }

    return this.http.get(`https://www.googleapis.com/customsearch/v1`,
    {
      params: new  HttpParams()
      .set('key', environment.key)
      .set('cx', environment.context_key)
      .set('q', term)
    })
    .pipe(
      map((response:any):WebResult[]=>{
        let webResults: WebResult[]=[]
        for(let item of response.items ){
          let webResult: WebResult={title:'',
            url:'',
            urlText:'',
            snippet:''}
          webResult.title= item.title
          webResult.snippet= item.snippet
          webResult.url= item.link
          webResult.urlText= item.formattedUrl
          webResults.push(webResult)
        }

        return webResults
      })
    )
  }
  searchImage(term: string): Observable<ImageResult[]>{
    if(this.dummy){
      return new Observable((observer)=>{
        let imageResults: ImageResult[]=[]
        for(let item of imageResult.items){
          let imageResult:ImageResult={url:'',title: '',contextLink:''}
          imageResult.url=item.link
          imageResult.title=item.title
          imageResult.contextLink=item.image.contextLink
          imageResults.push(imageResult)
        }
        observer.next(imageResults)
      })
    }
    else{
      return forkJoin({
        request1: this.http.get(`https://www.googleapis.com/customsearch/v1`,
        {
          params: new  HttpParams()
          .set('key', environment.key)
          .set('cx', environment.context_key)
          .set('q', term)
          .set('searchType', "IMAGE")
        }),
        request2: this.http.get(`https://www.googleapis.com/customsearch/v1`,
        {
          params: new  HttpParams()
          .set('key', environment.key)
          .set('cx', environment.context_key)
          .set('q', term)
          .set('searchType', "IMAGE")
          .set('start', 11)
        })
      })
    .pipe(
      map((response:any): ImageResult[]=>{
        let results:ImageResult[]=[]
        let response1= response.request1, response2= response.request2
        for(let item of response1.items){
          let result: ImageResult={url:'',title:'',contextLink:''}
          result.url= item.link
          result.title= item.title
          result.contextLink=item.image.contextLink
          results.push(result)
        }
        for(let item of response2.items){
          let result: ImageResult={url:'',title:'', contextLink:''}
          result.url= item.image.thumbnailLink
          result.title= item.title
          result.contextLink=item.image.contextLink
          results.push(result)
        }
        return results
  })
    )
    }
  }
  searchVideo(term: string): Observable<VideoResult[]>{
    if(this.dummy){
      return new Observable(observer=>{
        let results:VideoResult[]=[]
        for(let item of videoResult.items){
          let result:VideoResult={title:'',url:'', thumbnail_src:'',urlText:'',description:''}
          result.title=item.title
          result.urlText=item.displayLink
          result.url= item.link
          result.description= item.snippet
          result.thumbnail_src= item.pagemap?.cse_thumbnail?.[0]?.width==="300" && item.pagemap?.cse_thumbnail?.[0]?.height==="168" ? item.pagemap.cse_thumbnail[0].src : ''
          results.push(result)
        }

        observer.next(results)
      })
    }
    return this.http.get(`https://www.googleapis.com/customsearch/v1`,
    {
      params: new  HttpParams()
      .set('key', environment.key)
      .set('cx', environment.context_key)
      .set('q', term)
      .set('siteSearch', "www.youtube.com")
      .set('siteSearchFilter',"i")
    })
    .pipe(
      map((response:any): VideoResult[]=>{
        let results:VideoResult[]=[]
        for(let item of response.items){
          let result:VideoResult={title:'',url:'', thumbnail_src:'',urlText:'',description:''}
          result.title=item.title
          result.urlText=item.displayLink
          result.url= item.link
          result.description= item.snippet
          result.thumbnail_src= item.pagemap?.cse_thumbnail?.[0]?.width==="300" && item.pagemap?.cse_thumbnail?.[0]?.height==="168" ? item.pagemap.cse_thumbnail[0].src : ''
          results.push(result)
        }
        return results
  })
    )
  }
  

}
