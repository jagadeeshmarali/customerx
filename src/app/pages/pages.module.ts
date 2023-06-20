import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
