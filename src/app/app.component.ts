import { Component } from '@angular/core';
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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
