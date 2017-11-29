import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

import { CustomInputComponent } from '../../custom-input/custom-input.component';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleReactiveFormComponent implements OnInit {

  simpleReactiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('de');
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.simpleReactiveForm = this.fb.group({
      driverName: this.fb.group({
        firstName: ['', Validators.minLength(2)],
        lastName: ['', Validators.minLength(2)],
        nameAdditionOne: [''],
        nameAdditionTwo: [''],
      }),
      driverContactInformation: this.fb.group({
        email: ['', Validators.minLength(2)],
        telephone: ['', Validators.minLength(2)],
        cellphone: ['', Validators.minLength(2)],
      })
    });
  }

}
