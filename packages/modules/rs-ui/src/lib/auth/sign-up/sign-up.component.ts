import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import {
  VCLButtonModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';
import { RsEmailPolicyHintsComponent } from '../field-policy-hints/email-policy-hints.component';
import { RsPasswordPolicyHintsComponent } from '../field-policy-hints/password-policy-hints.component';
import { RsUsernamePolicyHintsComponent } from '../field-policy-hints/username-policy-hints.component.component';
import { rsPasswordConfirmationValidator } from '../validators';
import { rsZxcvbnMinScoreValidator } from '../validators/password-strength.validator';
import { rsUsernamePatternValidator } from '../validators/username.validator';

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
}

const MIN_SCORE = 3;

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
    RsPasswordPolicyHintsComponent,
    RsUsernamePolicyHintsComponent,
    RsEmailPolicyHintsComponent,
  ],
  templateUrl: './sign-up.component.html',
})
export class RsSignUpComponent {
  @Output() signUp = new EventEmitter<SignUpPayload>();

  fb = inject(FormBuilder);

  form = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      name: ['', [Validators.required, rsUsernamePatternValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [rsZxcvbnMinScoreValidator(MIN_SCORE)],
          updateOn: 'blur',
        },
      ],
      passwordConfirmation: ['', Validators.required],
    },
    {
      validators: rsPasswordConfirmationValidator(),
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
