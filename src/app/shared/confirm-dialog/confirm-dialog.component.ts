import { Component, EventEmitter, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(protected ref: NbDialogRef<ConfirmDialogComponent>) {}

  confirm(result: boolean) {
    this.ref.close(result); // result LogoutComponent'e gönderilir
  }
}
