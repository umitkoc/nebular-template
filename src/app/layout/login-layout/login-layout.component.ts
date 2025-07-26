import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  currentTheme = 'default';  // başlangıç teması

  constructor(private themeService: NbThemeService) {}

  toggleTheme(event: any) {
    this.currentTheme = event;
   this.themeService.changeTheme(this.currentTheme);
  }
  colorList = [
    { name: 'default', value: 'default' },
    { name: 'dark', value: 'dark' }
  ];
}
