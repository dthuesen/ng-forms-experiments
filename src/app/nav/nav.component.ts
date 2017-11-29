import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { DocType } from 'tslint/lib/rules/completedDocsRule';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

// import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {

  @Output() language: EventEmitter<any> = new EventEmitter();
  activatedLanguage: string;
  toolbarTopMarginValue: number;
  hideToolbar: boolean;
  scrollTopValue: number;
  scrollTopSecondValue: number;

  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('de');
    this.activatedLanguage = 'de';
    this.hideToolbar = false;
    this.toolbarTopMarginValue = 0;
  }

  @HostListener('window:scroll', ['$event']) showNavbar(event): void {
    this.scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop;
    setTimeout(() => {                             // <--- setTimeout() is really needed for getting the + or - difference in scrolling
      this.scrollTopSecondValue = document.documentElement.scrollTop || document.body.scrollTop;
    }, 0);

    if (this.scrollTopValue < this.scrollTopSecondValue) {
      this.hideToolbar = false;
    }

    if (this.scrollTopValue > this.scrollTopSecondValue ) {
      this.hideToolbar = true;
    }

    console.log('this.scrollTopValue         : ', this.scrollTopValue);
    console.log('this.scrollTopSecondValue   : ', this.scrollTopSecondValue);
    console.log('----');

  }

  switchLanguage(lang) {
    this.activatedLanguage = lang;
    this.language.emit(this.activatedLanguage);
    console.log('Set Language to ', this.activatedLanguage);
  }

}
