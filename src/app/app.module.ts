import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './core/layout/layout.component';
import { ListCampingComponent } from './core/list-camping/list-camping.component';
import { AddCampingComponent } from './core/add-camping/add-camping.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    ListCampingComponent,
    AddCampingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
