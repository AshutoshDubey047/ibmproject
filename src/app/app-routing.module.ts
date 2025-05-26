import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHome } from './home/home.component'
import { AboutusComponent} from './aboutus/aboutus.component'
const routes: Routes = [
  {path : 'home', component:AppHome},
  {path : 'about', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
