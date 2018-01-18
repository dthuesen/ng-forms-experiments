import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'diy-grid-system',
  templateUrl: './diy-grid-system.component.html',
  styleUrls: ['./diy-grid-system.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class DiyGridSystemComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }

}
