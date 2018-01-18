import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

    constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }

}
