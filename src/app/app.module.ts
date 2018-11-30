import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogcomponentComponent } from './blogcomponent/blogcomponent.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'blog',
    component: BlogcomponentComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    BlogcomponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
