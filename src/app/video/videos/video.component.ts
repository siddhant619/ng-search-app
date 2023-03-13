import { Component, Input, OnInit } from '@angular/core';
import { VideoResult } from 'src/app/models/video-result.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() result:VideoResult[]=[]
  constructor() { }

  ngOnInit(): void {
    }
  

}
