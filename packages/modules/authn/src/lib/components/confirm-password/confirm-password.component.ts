import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-confirm-password',
  template: ` <p>confirm-password works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPasswordComponent {}
