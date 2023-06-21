import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutusPageComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-page',
    component: ContactPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutusPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'pricing-plans',
    component: AboutusPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
