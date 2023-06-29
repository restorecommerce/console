import { Component } from '@angular/core';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-page-password-recovery',
  templateUrl: 'page-password-recovery.component.html',
})
export class RcPagePasswordRecoveryComponent {
  ROUTER = ROUTER;
  isLoading = false;
}
