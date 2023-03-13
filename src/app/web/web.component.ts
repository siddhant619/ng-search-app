import { Component, Input, OnInit } from '@angular/core';
import { WebResult } from '../models/web-result.model';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  @Input() result:WebResult[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
