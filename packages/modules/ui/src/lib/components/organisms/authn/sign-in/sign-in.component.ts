import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-sign-in',
  templateUrl: 'sign-in.component.html',
})
export class RcSignInComponent {
  isLoading = this.authnFacade.isLoading$;

  get identifier(): FormControl {
    return this.signInForm.get('identifier') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  signInForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ROUTER = ROUTER;

  constructor(private readonly authnFacade: AuthnFacade) {}

  onClickSignIn(
    value: Partial<{ identifier: string | null; password: string | null }>
  ): void {
    if (!this.signInForm.valid) {
      return;
    }
    this.authnFacade.signIn({
      identifier: value.identifier as string,
      password: value.password as string,
    });
  }
}
