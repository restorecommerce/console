import { Component, inject } from '@angular/core';
import { RcSignInComponent, SignInCredentials } from '@console/rc-ui';

import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-sign-in',
  template: ` <rc-sign-in (signIn)="onSignIn($event)" /> `,
  imports: [RcSignInComponent],
})
export class SignInComponent {
  private readonly authnFacade = inject(AuthnFacade);

  onSignIn(payload: SignInCredentials) {
    this.authnFacade.signIn({
      identifier: payload.identifier,
      password: payload.password,
      // remember: this.formFields.remember.value
    });
  }
}
