import { Component } from '@angular/core';
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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
