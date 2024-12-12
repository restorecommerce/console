import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-confirm-password',
  template: ` <rc-page-authn-confirm-password />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ConfirmPasswordComponent {}
