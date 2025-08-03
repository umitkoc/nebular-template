import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AuthGuard } from './auth.guard';
import { loginGuard } from './login.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EditorComponent } from './pages/editor/editor.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';


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
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'editor', component: EditorComponent },
      {path: 'book-detail/:title/:id', component: BookDetailComponent},
      {path: 'pages-detail/:id', component: PagesDetailComponent}, // For backward compatibility
      {path:'create-book',component:CreateBookComponent}
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
