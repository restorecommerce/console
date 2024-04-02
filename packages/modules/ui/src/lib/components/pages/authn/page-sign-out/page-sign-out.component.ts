import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-authn-sign-out',
  template: ` <p>Signing out. Please wait...</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignOutComponent {}
