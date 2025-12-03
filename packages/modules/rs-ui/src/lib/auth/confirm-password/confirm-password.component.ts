import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import {
  VCLInputModule,
  VCLPasswordInputModule,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';
import { RsPasswordPolicyHintsComponent } from '../field-policy-hints/password-policy-hints.component';
import { rsPasswordConfirmationValidator } from '../validators';
import { rsZxcvbnMinScoreValidator } from '../validators/password-strength.validator';

const MIN_SCORE = 3;

export interface ConfirmPasswordPayload {
  identifier: string; // email or username
  password: string;
  activationCode: string; // token from route
}

@Component({
  selector: 'rs-confirm-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RsAuthPageComponent,
    VCLInputModule,
    VCLPasswordInputModule,
    VCLInputModule,
    VCLButtonComponent,
    RsPasswordPolicyHintsComponent,
  ],
  templateUrl: './confirm-password.component.html',
})
export class RsConfirmPasswordComponent {
  fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  activationCode = '';

  @Output() confirmPassword = new EventEmitter<ConfirmPasswordPayload>();

  form = this.fb.nonNullable.group(
    {
      identifier: ['', Validators.required],
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
    { validators: rsPasswordConfirmationValidator() }
  );

  routerParams$ = this.route.queryParams.pipe(
    tap((params) => {
      const { code: activationCode, identifier } = params ?? {};
      console.log('params', params);
      this.activationCode = activationCode;
      this.formFields.identifier.setValue(identifier);
    })
  );

  get formFields() {
    return this.form.controls;
  }

  onReset() {
    this.form.reset();
  }

  onClickConfirm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { identifier, password } = this.form.getRawValue();

    this.confirmPassword.emit({
      identifier,
      password,
      activationCode: this.activationCode,
    });
  }
}
