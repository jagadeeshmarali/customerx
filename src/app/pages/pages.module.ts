import { PageRoutingModule } from './pages-routing.module';
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
    PageRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
