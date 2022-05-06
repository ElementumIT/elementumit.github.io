import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { SimpleGraphService } from './services/SimpleGraphService.module';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageServicesComponent } from './page-services/page-services.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageContactComponent,
    PageServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ SimpleGraphService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
