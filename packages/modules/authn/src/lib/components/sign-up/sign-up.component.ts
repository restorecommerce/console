import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-sign-up',
  template: ` <rc-page-authn-sign-up /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {}
