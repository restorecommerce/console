import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP, ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-page-authn-sign-in',
  templateUrl: 'page-sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageSignInComponent {
  ROUTER = ROUTER;
  APP = APP;
}
