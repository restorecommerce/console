import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-sign-in',
  templateUrl: 'sign-in.component.html',
  standalone: false,
})
export class RcSignInComponent {
  ROUTER = ROUTER;
  form = this.fb.group({
    identifier: ['', []],
    password: ['', []],
    remember: [false, []],
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
      password: this.form.get('password') as FormControl,
      remember: this.form.get('remember') as FormControl,
    };
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authnFacade: AuthnFacade
  ) {}

  onClickSignIn(): void {
    if (this.form.invalid || this.form.pristine) {
      return;
    }

    this.authnFacade.signIn({
      identifier: this.formFields.identifier.value,
      password: this.formFields.password.value,
      // remember: this.formFields.remember.value
    });
  }
}
