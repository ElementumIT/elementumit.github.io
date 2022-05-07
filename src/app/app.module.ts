import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { SimpleGraphService } from './services/SimpleGraphService.module';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageServicesComponent } from './page-services/page-services.component';
import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
  RECAPTCHA_SETTINGS,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import {PanelModule} from 'primeng-lts/panel';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageContactComponent,
    PageServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    PanelModule
  ],
  providers: [
    SimpleGraphService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
