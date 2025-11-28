// rs-sign-up.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  VCLButtonModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';

const USERNAME_PATTERN = /^(?!.*(.)\1)[A-Za-z][A-Za-z0-9._\-@]{7,19}$/;
// - start with a letter
// - only letters, numbers, .-_@
// - 8–20 chars
// - no consecutive repeated chars

const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,20}$/;
// - 6–20 chars
// - at least 1 lower, 1 upper, 1 number, 1 special

const passwordConfirmationValidator: ValidatorFn = (group: AbstractControl) => {
  const password = group.get('password')?.value;
  const confirmation = group.get('passwordConfirmation')?.value;

  if (!password || !confirmation) {
    return null;
  }

  return password === confirmation
    ? null
    : { passwordConfirmationMismatch: true };
};

@Component({
  selector: 'rs-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RsAuthPageComponent,
    VCLInputModule,
    VCLPasswordInputModule,
    VCLButtonModule,
  ],
  templateUrl: './sign-up.component.html',
})
export class RsSignUpComponent {
  fb = inject(FormBuilder);

  form = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(USERNAME_PATTERN)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      passwordConfirmation: ['', Validators.required],
    },
    {
      validators: passwordConfirmationValidator,
    }
  );

  get formFields() {
    return this.form.controls;
  }

  onClickSignUp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.value;
    // TODO: plug into your sign-up API / facade
    console.log('Sign-up payload', payload);
  }
}
