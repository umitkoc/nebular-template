import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {


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
  menuItems = [
    { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'About', icon: 'info-outline', link: '/about' },
    { title: 'Contact', icon: 'email-outline', link: '/contact' },
    { title: 'Profile', icon: 'person-outline', link: '/profile' },
    { title: 'Settings', icon: 'settings-outline', link: '/settings' },
    { title: 'Logout', icon: 'log-out-outline', link: '/logout' },
  ];
}
