// ngx-translate
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
// Angualr Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputComponent } from './custom-input/custom-input.component';
// Services
import { DbServiceService } from './services/db-service.service';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { ROUTES } from './routes';
// Router
import { RouterModule } from '@angular/router';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeDe from '@angular/common/locales/fr';
// Locales i18n
import { registerLocaleData } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

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
    HomeComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
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
