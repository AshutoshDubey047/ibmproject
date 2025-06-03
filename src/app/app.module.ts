import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
// Import FormsModule for ngModel support
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHome } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChoosePathComponent } from './choose-path/choose-path.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { FinalComponent } from './final/final.component';
import { FooterComponent } from './footer/footer.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHome } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicesComponent } from './services/services.component'
>>>>>>> e1cde9b3861c1fb0f85fc24c5d45cfb9f6235613

@NgModule({
  declarations: [
    AppComponent,
    AppHome,
<<<<<<< HEAD
    ProfileComponent,
    AboutusComponent,
    ServicesComponent,
    ErrorPageComponent,
    NavBarComponent,
    ChoosePathComponent,
    EducationDetailComponent,
    AssessmentComponent,
    CareerDetailComponent,
    FinalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
=======
    AboutusComponent,
    ErrorPageComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> e1cde9b3861c1fb0f85fc24c5d45cfb9f6235613
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
