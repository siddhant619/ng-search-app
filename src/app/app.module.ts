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
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchComponent,
    HomeComponent,
    SearchOptionsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
