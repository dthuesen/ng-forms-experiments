import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { DiyGridSystemComponent } from './diy-grid-system/diy-grid-system.component';
import { HomeComponent } from './home/home.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home'} },
  { path: 'simpleform', component: SimpleReactiveFormComponent, data: { state: 'simpleform'} },
  { path: 'diy-grid-system', component: DiyGridSystemComponent, data: { state: 'diy-grid-system'} },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'css-grid', loadChildren: './css-grid/css-grid.module#CssGridModule', data: { state: 'css-grid'} }
];
