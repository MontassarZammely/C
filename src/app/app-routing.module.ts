import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
   {path: "" , component : LoginComponent},
   {path: "" , component : SignupComponent},
   {path: "dashboard" , component : LayoutComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
