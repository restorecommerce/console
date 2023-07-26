import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  template: `<rc-page-password-recovery />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordRecoveryComponent {}
