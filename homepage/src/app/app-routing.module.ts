import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ModuleWithProviders } from '@angular/core';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignINComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:'', component:CurrentComponent},
  {path:'forecast',component:ForecastComponent},
  {path:'signup',component:SignUPComponent},
  {path:'signin',component:SignINComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
