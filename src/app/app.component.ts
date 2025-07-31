import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbThemeService,NbSearchService } from '@nebular/theme';
import { AuthService } from './auth.service';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  brandText = 'MyBrand';

 value = '';

  
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
    { title: 'Settings' }
  ];
toggleTheme() {
  // Tema değişimi örneği:
  this.currentTheme = this.currentTheme === 'default' ? 'dark' : 'default';
  this.themeService.changeTheme(this.currentTheme);
}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  // colorList = [
  //   { name: 'default', value: 'default' },
  //   { name: 'dark', value: 'dark' }
  // ];
  currentTheme = localStorage.getItem('selectedTheme') || 'default';  // başlangıç teması
  constructor(
    private themeService: NbThemeService,
     private authService: AuthService,
      private nbMenuService: NbMenuService,
        private router: Router,
        private searchService: NbSearchService) {
             this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
      })
         }
  // toggleTheme(event: any) {
  //   this.currentTheme = event;
  //   this.themeService.changeTheme(this.currentTheme); 
  //   localStorage.setItem('selectedTheme', this.currentTheme);
  // }
  ngOnInit() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.themeService.changeTheme(savedTheme);
    } else {
      this.themeService.changeTheme('default'); // veya istediğin varsayılan
    }

      this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title == 'Logout') {
          this.router.navigate(['/logout']);
        } else if (title === 'Profile') {
          this.router.navigate(['/profile']);
        }
        else if (title === 'Settings') {
          this.router.navigate(['/settings']);
        }
      });
 
  }
  


  menuItems = [
    { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'Blog AI', icon: 'file-text-outline', link: '/blog' },
    { title: 'Chat', icon: 'message-circle-outline', link: '/chat' },
    { title: 'Editor', icon: 'edit-2-outline', link: '/editor' }
  ];
}
