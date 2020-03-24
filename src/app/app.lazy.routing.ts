import{Routes,RouterModule,PreloadAllModules,NoPreloading} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { LoginComponent } from './login/login.component';
import { FresherComponent } from './new-registration/fresher/fresher.component';
import { ProfessionalComponent } from './new-registration/professional/professional.component';

const APP_LAZY_ROUTE: Routes = [
  {path:"",component:LoginComponent},
  {path:"registration",component:NewRegistrationComponent},
  {path:"fresher",component:FresherComponent},
  {path:"professional",component:ProfessionalComponent},

];


export const APP_LAZY_ROUTING : ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTE, {
  preloadingStrategy: NoPreloading,
});