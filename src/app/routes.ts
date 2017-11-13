import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';

export const ROUTES = [
  { path: 'simpleform', component: SimpleReactiveFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
