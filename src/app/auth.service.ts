import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'user';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    //TODO: Gerçek sistemde backend API'den kontrol edilir
    if (email === 'demo@example.com' && password === '1234') {
      const user = { email };
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUser() {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout() {
    localStorage.removeItem('user'); //
    this.router.navigate(['/login'],{ replaceUrl: true });
  }
}
