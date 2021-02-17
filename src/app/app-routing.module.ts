import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {DevopsComponent} from './devops/devops.component';
import {ArComponent} from './ar/ar.component';
import {UiComponent} from './ui/ui.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {UserregistrationComponent} from './userregistration/userregistration.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login component`
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"services", component:ServicesComponent},
  {path:"devops", component:DevopsComponent},
  {path:"ar", component:ArComponent},
  {path:"ui", component:UiComponent},
  {path:"login", component:UserloginComponent},
  {path:"registration", component:UserregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
