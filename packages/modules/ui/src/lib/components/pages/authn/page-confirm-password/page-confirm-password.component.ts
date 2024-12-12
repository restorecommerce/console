import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-authn-confirm-password',
  templateUrl: 'page-confirm-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageConfirmPasswordComponent {}
