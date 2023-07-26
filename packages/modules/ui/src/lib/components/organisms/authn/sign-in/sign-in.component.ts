import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { IIoRestorecommerceUserLoginRequest } from '@console-core/graphql';

@Component({
  selector: 'rc-sign-in',
  templateUrl: 'sign-in.component.html',
})
export class RcSignInComponent {
  @Input({ required: true })
  isLoading!: boolean;

  @Input({ required: true })
  login!: (payload: IIoRestorecommerceUserLoginRequest) => void;

  get identifier(): FormControl {
    return this.signInForm.get('identifier') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  ROUTER = ROUTER;

  signInForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onClickSignIn(
    value: Partial<{ identifier: string | null; password: string | null }>
  ): void {
    if (!this.signInForm.valid) {
      return;
    }
    this.login({
      identifier: value.identifier as string,
      password: value.password as string,
    });
  }
}
