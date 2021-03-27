import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/account/login/login.component';
import { LogoutComponent } from './views/account/logout/logout.component';
import { RegistrationComponent } from './views/account/registration/registration.component';
import { ProfileComponent } from './views/account/profile/profile.component';
import { ForgotPasswordComponent } from './views/account/forgot-password/forgot-password.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'login', component: LoginComponent}, 
    {path: 'logout', component: LogoutComponent}, 
    {path: 'registration', component: RegistrationComponent}, 
    {path: 'profile', component: ProfileComponent}, 
    {path: 'forgot-password', component: ForgotPasswordComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, LogoutComponent, RegistrationComponent, ProfileComponent, ForgotPasswordComponent]
