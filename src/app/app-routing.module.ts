import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
