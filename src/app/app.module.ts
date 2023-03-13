import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from 'app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { WebComponent } from './web/web.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/videos/video.component';
/* import { VideoDetailComponent } from './video/video-detail/video-detail.component';
import { VideoListComponent } from './video/video-list/video-list.component'; */
import {HttpClientModule} from '@angular/common/http';
import { TruncatePipe } from './pipes/truncate.pipe'
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchComponent,
    HomeComponent,
    SearchOptionsComponent,
    WebComponent,
    ImageComponent,
    VideoComponent,
    TruncatePipe
    //VideoDetailComponent,
    //VideoListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
