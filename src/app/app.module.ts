import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

// Router
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';

// Locales i18n
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/fr';


// ngx-translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// Services
import { DbServiceService } from './services/db-service.service';

import { AppComponent } from './app.component';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

// For locales i18n
registerLocaleData(localeDe);

// For ngx-translate -- needed by AoT
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleReactiveFormComponent,
    CustomInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot( ROUTES, {useHash: false}),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    DbServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
