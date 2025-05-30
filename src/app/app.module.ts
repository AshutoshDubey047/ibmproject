import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHome } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicesComponent } from './services/services.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHome,
    AboutusComponent,
    ErrorPageComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
