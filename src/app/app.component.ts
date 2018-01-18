import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

// animation
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('routerAnimation', [
      // route 'enter' transition
      transition(':enter', [
        query(':enter, :leave', [
          // css styles at start of transition
          style({ opacity: 0 }),
          // animation and styles at end of transition
          animate('0.5s ease', style({ opacity: 1 })),
        ],
        { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  currentLanguage: string;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.setDefaultLang('de');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // change the animation state
  getRouteAnimation(outlet) {
    console.log('outlet.activatedRouteData.state', outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
