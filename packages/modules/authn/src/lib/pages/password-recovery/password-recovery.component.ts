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

  loading$ = this.authnFacade.isRequesting$;
  error$ = this.authnFacade.error$;
}
