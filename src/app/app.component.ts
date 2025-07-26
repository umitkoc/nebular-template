import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  colorList = [
    { name: 'default', value: 'default' },
    { name: 'dark', value: 'dark' }
  ];
  currentTheme = localStorage.getItem('selectedTheme') || 'default';  // başlangıç teması
  constructor(private themeService: NbThemeService, private authService: AuthService) {}
  toggleTheme(event: any) {
    this.currentTheme = event;
    this.themeService.changeTheme(this.currentTheme);
    localStorage.setItem('selectedTheme', this.currentTheme);
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.themeService.changeTheme(savedTheme);
    } else {
      this.themeService.changeTheme('default'); // veya istediğin varsayılan
    }
  }


  menuItems = [
    { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'Blog AI', icon: 'file-text-outline', link: '/blog' },
    { title: 'About', icon: 'info-outline', link: '/about' },
    { title: 'Contact', icon: 'email-outline', link: '/contact' },
    { title: 'Profile', icon: 'person-outline', link: '/profile' },
    { title: 'Settings', icon: 'settings-outline', link: '/settings' },
    { title: 'Logout', icon: 'log-out-outline', link: '/logout' },
  ];
}
