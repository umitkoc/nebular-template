import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AuthGuard } from './auth.guard';
import { loginGuard } from './login.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { BlogAiComponent } from './pages/blog-ai/blog-ai.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path:'blog',component:BlogAiComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logout',  component: LogoutComponent}
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
