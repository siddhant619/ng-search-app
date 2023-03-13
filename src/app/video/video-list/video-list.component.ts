import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VideoResult } from 'src/app/models/video-result.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnChanges {
  @Input() result:VideoResult[]=[]
  videos:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    this.videos= changes['result'].currentValue
  }
}
