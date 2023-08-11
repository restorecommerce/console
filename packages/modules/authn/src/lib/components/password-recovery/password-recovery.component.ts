import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-password-recovery',
  template: `<rc-page-authn-password-recovery />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordRecoveryComponent {}
