import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  @Input() video: any;
  currentVideo:any
  videoSrc: string=''
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    

  }
  getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc)
  }
  ngOnChanges(changes: SimpleChanges){
    this.currentVideo= changes['video'].currentValue
    console.log('current video', this.currentVideo)
    if(this.currentVideo){
    const link:string=this.currentVideo.link.split('?')[1]
    const videoId=link.slice(2);
    this.videoSrc="https://www.youtube.com/embed/"+videoId
    }
  }
}
