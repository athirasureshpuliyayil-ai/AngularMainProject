import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';
import { Beautyproducts } from './page/beautyproducts/beautyproducts';
import { Productdetails } from './page/productdetails/productdetails';
import { About } from './page/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'products',
    component: Beautyproducts,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'products/:id',
    component: Productdetails,
  }
];