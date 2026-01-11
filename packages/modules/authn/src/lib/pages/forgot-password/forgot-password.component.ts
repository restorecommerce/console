import { Component, inject } from '@angular/core';
import { AUTH_LAYOUT_CONFIG } from '@console/rc-ui';

import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-forgot-password',
  template: `<h3>Forgot password</h3>`,
  // imports: [AsyncPipe, RcSignInComponent],
})
export class ForgotPasswordComponent {
  readonly config = inject(AUTH_LAYOUT_CONFIG);
  private readonly authnFacade = inject(AuthnFacade);

  loading$ = this.authnFacade.isRequesting$;
  error$ = this.authnFacade.error$;
}
