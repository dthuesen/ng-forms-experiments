import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentLanguage: string;
=======
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
>>>>>>> 8909737d6d58a14f3f4af368c6709c4bf67cff29

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
