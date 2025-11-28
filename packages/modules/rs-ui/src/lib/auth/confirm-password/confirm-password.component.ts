import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import {
  VCLInputModule,
  VCLPasswordInputModule,
  ButtonComponent,
} from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';

const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,20}$/;

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
    ButtonComponent,
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
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      passwordConfirmation: ['', Validators.required],
    },
    { validators: passwordConfirmationValidator }
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
