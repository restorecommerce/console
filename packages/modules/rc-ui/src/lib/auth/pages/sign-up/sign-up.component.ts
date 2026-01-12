import { AsyncPipe, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  VCLButtonModule,
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

import { RcTranslatePipe } from '../../../i18n';
import { RcAuthLayoutConfig } from '../../auth.config';
import { RsAuthLayoutComponent } from '../../layouts';

import {
  DEFAULT_SIGN_UP_TRANSLATIONS,
  RcSignUpTranslations,
} from './sign-up.i18n';
import { RcSignUpAction, RcSignUpState } from './sign-up.models';

@Component({
  selector: 'rc-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [
    ReactiveFormsModule,
    VCLButtonModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
    RouterModule,
    RsAuthLayoutComponent,
    RcTranslatePipe,
    AsyncPipe,
    NgClass,
  ],
})
export class RcSignUpComponent {
  // Config for branding, translations
  @Input({ required: true }) config!: RcAuthLayoutConfig;

  // Workflow state (loading, success, errors)
  @Input({ required: true }) state!: RcSignUpState;

  // User action emitter
  @Output() action = new EventEmitter<RcSignUpAction>();

  // Reactive form with validators
  readonly form = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  // Computed translations (defaults + overrides)
  readonly t = computed<RcSignUpTranslations>(() => ({
    ...DEFAULT_SIGN_UP_TRANSLATIONS,
    ...this.config.i18n?.signUp,
  }));

  // Submit handler
  submit(): void {
    if (this.form.invalid || this.state.loading) return;

    const { password, confirmPassword, ...rest } = this.form.getRawValue();

    if (password !== confirmPassword) {
      // Optionally emit a password mismatch action
      this.action.emit({ type: 'password-mismatch' });
      return;
    }

    this.action.emit({
      type: 'submit',
      payload: { ...rest, password },
    });
  }
}
