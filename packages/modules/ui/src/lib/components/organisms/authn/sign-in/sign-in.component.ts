import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-sign-in',
  templateUrl: 'sign-in.component.html',
})
export class RcSignInComponent {
  @Input()
  login!: (payload: { email: string; password: string }) => void;

  ROUTER = ROUTER;

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  get email(): FormControl {
    return this.signinForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  onClickSignIn(
    value: Partial<{ email: string | null; password: string | null }>
  ) {
    if (this.signinForm.valid) {
      this.login({
        email: value.email as string,
        password: value.password as string,
      });
    }
  }
}
