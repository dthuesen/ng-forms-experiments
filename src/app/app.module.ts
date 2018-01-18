import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CssGridModule } from './css-grid/css-grid.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { DbServiceService } from './services/db-service.service';
import { DiyGridSystemComponent } from './diy-grid-system/diy-grid-system.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavComponent } from './nav/nav.component';
import { ROUTES } from './routes';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
import { SimpleReactiveFormComponent } from './forms/simple-reactive-form/simple-reactive-form.component';
import { TestComponent } from './test/test.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

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
    DiyGridSystemComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CssGridModule,
    FormsModule,
    ReactiveFormsModule,
    ResponsiveModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot( ROUTES, { useHash: false }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    DbServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
