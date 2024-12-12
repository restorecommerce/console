import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-authn-sign-out',
  templateUrl: './page-sign-out.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageSignOutComponent {}
