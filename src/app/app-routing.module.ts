import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AppHome } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { ChoosePathComponent } from './choose-path/choose-path.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppHome },
    { path: 'profile', component: ProfileComponent },

  { path: 'about', component: AboutusComponent },
  { path: 'services', component: ServicesComponent },

  { path: 'nav-bar',component: NavBarComponent},

  { path: 'choose-path', component:ChoosePathComponent},
    { path: 'education-detail', component:EducationDetailComponent },
     { path: 'assessment', component: AssessmentComponent },
      { path: 'career-detail', component:CareerDetailComponent },
    { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: 'profile' },

 { path: '**', component: ErrorPageComponent },
=======
import { AppHome } from './home/home.component'
import { AboutusComponent} from './aboutus/aboutus.component'
import { ServicesComponent } from './services/services.component'
import { ErrorPageComponent } from './error-page/error-page.component'
const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component:AppHome},
  {path : 'about', component:AboutusComponent},
  {path : 'services', component:ServicesComponent},
  // {path : 'error', component:ErrorPageComponent},
  // {path : '**', redirectTo:'error'}
  {path:'**',component:ErrorPageComponent}
>>>>>>> e1cde9b3861c1fb0f85fc24c5d45cfb9f6235613
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD

=======
>>>>>>> e1cde9b3861c1fb0f85fc24c5d45cfb9f6235613
