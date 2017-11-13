import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CustomInputComponent } from '../../custom-input/custom-input.component';
<<<<<<< HEAD
=======

>>>>>>> 8909737d6d58a14f3f4af368c6709c4bf67cff29
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
<<<<<<< HEAD
  styleUrls: ['./simple-reactive-form.component.scss'],
=======
  styleUrls: ['./simple-reactive-form.component.css'],
>>>>>>> 8909737d6d58a14f3f4af368c6709c4bf67cff29
  encapsulation: ViewEncapsulation.None
})
export class SimpleReactiveFormComponent implements OnInit {

<<<<<<< HEAD
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }
=======
  constructor() { }
>>>>>>> 8909737d6d58a14f3f4af368c6709c4bf67cff29

  ngOnInit() {
  }

}
