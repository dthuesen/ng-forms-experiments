import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CustomInputComponent } from '../../custom-input/custom-input.component';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleReactiveFormComponent implements OnInit {

  /**
   * TODO: implement custom input element
   */

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }

}
