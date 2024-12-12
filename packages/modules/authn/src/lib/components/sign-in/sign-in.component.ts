import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-authn-sign-in',
  template: ` <rc-page-authn-sign-in /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class SignInComponent {}
