import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @Output() language: EventEmitter<any> = new EventEmitter();
  activatedLanguage: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    this.activatedLanguage = 'de';
  }

  ngOnInit() {
  }

  switchLanguage(lang) {
    this.activatedLanguage = lang;
    this.language.emit(this.activatedLanguage);
    console.log('Set Language to ', this.activatedLanguage);
  }

}
