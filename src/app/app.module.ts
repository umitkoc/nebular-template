import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule, 
    NbMenuModule,
    NbSelectModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbToastrModule,
    NbDialogModule,
    NbSpinnerModule,
    NbWindowModule,
    NbBadgeModule,
    NbSearchModule,
    NbUserModule,
    NbMenuItem,
    NbActionsModule,
    NbContextMenuModule,
    NbSearchService,
  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { StoryWindowComponent } from './shared/story-window/story-window.component';
import { BlogAiComponent } from './pages/blog-ai/blog-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LogoutComponent,
    ConfirmDialogComponent,
    StoryWindowComponent,
    BlogAiComponent,
  ],
  imports: [
    AppRoutingModule,
    NbButtonModule,
    NbSelectModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbWindowModule.forRoot(),
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbSpinnerModule,
    AppRoutingModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbBadgeModule,
    NbDialogModule.forRoot(),
    NbSearchModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
