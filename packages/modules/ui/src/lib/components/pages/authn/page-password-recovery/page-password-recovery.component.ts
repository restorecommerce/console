import { Component } from '@angular/core';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-page-authn-password-recovery',
  templateUrl: 'page-password-recovery.component.html',
  standalone: false,
})
export class RcPagePasswordRecoveryComponent {
  ROUTER = ROUTER;
}
