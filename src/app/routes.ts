<<<<<<< HEAD
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';

export const ROUTES = [
  { path: 'simpleform', component: SimpleReactiveFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
=======
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';
import { AppComponent } from './app.component';

export const ROUTES = [
  { path: 'simpleform', component: SimpleReactiveFormComponent },
  { path: '', component: AppComponent },
>>>>>>> 8909737d6d58a14f3f4af368c6709c4bf67cff29
];
