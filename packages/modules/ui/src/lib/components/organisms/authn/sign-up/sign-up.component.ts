import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { REGEX, ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceUserRegisterRequest,
  IoRestorecommerceUserUserType,
} from '@console-core/graphql';

@Component({
  selector: 'rc-sign-up',
  templateUrl: 'sign-up.component.html',
})
export class RcSignUpComponent {
  @Input({ required: true })
  isLoading!: boolean;

  @Input({ required: true })
  register!: (payload: IIoRestorecommerceUserRegisterRequest) => void;

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }

  get name(): FormControl {
    return this.signUpForm.get('name') as FormControl;
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

  get userType(): FormControl {
    return this.signUpForm.get('userType') as FormControl;
  }

  ROUTER = ROUTER;

  signUpForm = new FormGroup(
    {
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(REGEX.name),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.password),
      ]),
      passwordConfirmation: new FormControl('', [Validators.required]),
      userType: new FormControl(null, [Validators.required]),
    },
    { validators: this.validatePasswordMatch }
  );

  onClickSignUp(
    value: Partial<{
      firstName: string | null;
      lastName: string | null;
      name: string | null;
      email: string | null;
      password: string | null;
      userType: IoRestorecommerceUserUserType | null;
    }>
  ): void {
    if (!this.signUpForm.valid) {
      return;
    }

    this.register({
      firstName: value.firstName as string,
      lastName: value.lastName as string,
      name: value.name as string,
      email: value.email as string,
      password: value.password as string,
      userType: value.userType,
    });
  }

  private validatePasswordMatch(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (password?.value !== passwordConfirmation?.value) {
      return { passwordConfirmationMismatch: true };
    }

    return null;
  }
}
