import { Component, Input, OnInit } from '@angular/core';
import { ImageResult } from '../models/image-result.model';
import { VideoResult } from '../models/video-result.model';
import { WebResult } from '../models/web-result.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() result: ImageResult[] =[]
  constructor() { }

  ngOnInit(): void {
    //console.log(this.result)
  }
  
}
