import { AppComponent } from './app.component';
import { DiyGridSystemComponent } from './diy-grid-system/diy-grid-system.component';
import { HomeComponent } from './home/home.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';

export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'simpleform', component: SimpleReactiveFormComponent },
  { path: 'diy-grid-system', component: DiyGridSystemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
