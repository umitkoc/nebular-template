import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NbToastrService, NbGlobalPosition } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastrService: NbToastrService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }
  onLogin(): void {
    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);
    this.isLoading = true;
    if (success) {
      this.toastrService.show(
        `Hoşgeldin, ${email}!`, // mesaj
        'Giriş Başarılı',        // başlık
        {
          status: 'success',
          position: 'top-right' as NbGlobalPosition,
          duration: 3000,      // 3 saniye sonra kapanır
        }
      );
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/'], { replaceUrl: true });
      }, 3000);

    } else {

      this.toastrService.show(
        'E-posta veya şifre hatalı',
        'Hata',
        { status: 'danger', position: 'top-right' as NbGlobalPosition, duration: 3000 }
      );
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }

  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

}
