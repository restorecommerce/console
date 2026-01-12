import { Component, inject } from '@angular/core';
import {
  AUTH_LAYOUT_CONFIG,
  RcPasswordRecoveryComponent,
  RcPasswordRecoveryState,
} from '@console/rc-ui';

import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-password-recovery',
  template: `
    <rc-password-recovery
      [config]="config"
      [state]="state"
      (requestReset)="onRequestReset($event)"
      (submitNewPassword)="onSubmitNewPassword($event)"
    />
  `,
  imports: [RcPasswordRecoveryComponent],
})
export class PasswordRecoveryComponent {
  readonly config = inject(AUTH_LAYOUT_CONFIG);
  private readonly authnFacade = inject(AuthnFacade);

  state = {
    status: 'success',
    reason: 'invalid',
  } as RcPasswordRecoveryState;

  onRequestReset(_: { identifier: string }) {
    // Dispatch Request and track state....
  }

  onSubmitNewPassword(_: { password: string }) {
    // Dispatch submit and track state....
  }
}
