import { Component } from '@angular/core';
import { NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/auth.service';
import { NbDialogService } from '@nebular/theme';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: AuthService, private toastrService: NbToastrService, private dialogService: NbDialogService, private router: Router) {}
 
  ngOnInit(): void {

    this.dialogService.open(ConfirmDialogComponent)
    .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.toastrService.show(
          `Güle Güle, ${this.authService.getUser().email}!`, // mesaj
          'Çıkış Başarılı',        // başlık
          {
            status: 'primary',
            position: 'top-right' as NbGlobalPosition,
            duration: 3000,      // 3 saniye sonra kapanır
          }
        );
        setTimeout(() => {
          this.authService.logout();
        }, 3000);
      }else{
        this.router.navigate(['/'],{ replaceUrl: true });
      }
    });
  }
}
