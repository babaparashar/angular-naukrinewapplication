import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {APP_LAZY_ROUTING} from './app.lazy.routing';

import { AppComponent } from './app.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { LoginComponent } from './login/login.component';
import { FresherComponent } from './new-registration/fresher/fresher.component';
import { ProfessionalComponent } from './new-registration/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationComponent,
    LoginComponent,
    FresherComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, APP_LAZY_ROUTING, RouterModule, ReactiveFormsModule 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
