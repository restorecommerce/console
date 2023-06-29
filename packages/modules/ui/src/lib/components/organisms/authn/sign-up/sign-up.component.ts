import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-sign-up',
  templateUrl: 'sign-up.component.html',
})
export class RcSignUpComponent {
  ROUTER = ROUTER;

  signUpForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    },
    { validators: this.passwordMatchValidator }
  );

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  get passwordConfirmation(): FormControl {
    return this.signUpForm.get('passwordConfirmation') as FormControl;
  }

  onClickSignUp(
    value: Partial<{
      firstName: string | null;
      lastName: string | null;
      email: string | null;
      username: string | null;
      password: string | null;
    }>
  ) {
    console.log('onClickSignUp', value);
  }

  private passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (password?.value !== passwordConfirmation?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
