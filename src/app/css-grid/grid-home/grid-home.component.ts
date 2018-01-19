import { NavDrawerComponent } from './../nav-drawer/nav-drawer.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class GridHomeComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  ngOnInit() {
  }


}
