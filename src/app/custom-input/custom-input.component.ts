import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, NgControl, Validators } from '@angular/forms';

import { MatFormFieldControl } from '@angular/material/form-field/typings';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'custom-input',
  template: `
        <!-- <input matInput [placeholder]="_placeholder | translate" type="text" [formControl]="formControl"> -->
        <input matInput [placeholder]="_placeholder | translate" type="text">
  `,
  styleUrls: ['./custom-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent implements OnInit {
  static nextId = 0;

  // tslint:disable-next-line:no-input-rename
  // @Input('labelForInput') label: string;
  // tslint:disable-next-line:no-input-rename
  @Input('fc-name') fcn: string;
  // tslint:disable-next-line:no-input-rename
  @Input('fg-name') fgn: string;

  @Input('labelForInput') get placeholder() {
    return this._placeholder;
  }


  public _placeholder: string;

  constructor(
    fb: FormBuilder,
    private translate: TranslateService,

  ) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }

}
