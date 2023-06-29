import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-page-sign-up',
  templateUrl: 'page-sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignUpComponent {
  ROUTER = ROUTER;
  isLoading = false;
}
