import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogcomponentComponent } from './blogcomponent/blogcomponent.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { TipComponent } from './tip/tip.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tips',
    component: BlogComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/prodotto',
    component: ProdottoComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BlogcomponentComponent,
    HomeComponentComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    ProdottiComponent,
    ProdottoComponent,
    CategoriaComponent,
    CategorieComponent,
    LoginComponent,
    CartComponent,
    TipComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
