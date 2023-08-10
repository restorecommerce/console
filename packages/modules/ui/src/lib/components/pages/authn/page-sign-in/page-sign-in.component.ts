import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-page-authn-sign-in',
  templateUrl: 'page-sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignInComponent {
  ROUTER = ROUTER;
}
