import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }

}
