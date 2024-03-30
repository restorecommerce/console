import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-authn-sign-out',
  template: `<rc-busy-indicator />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignOutComponent {}
