import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-sign-up',
  template: ` <rc-page-sign-up></rc-page-sign-up> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {}
