import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  VCLCheckboxModule,
  VCLInputModule,
  VCLFormControlGroupModule,
  VCLPasswordInputModule,
  VCLButtonModule,
} from '@vcl/ng-vcl';

import { AUTH_LAYOUT_CONFIG, RcAuthLayoutConfig } from '../../auth.config';
import { RsAuthLayoutComponent } from '../../layouts';
import { RcTranslatePipe } from '../../../i18n';
import { AsyncPipe } from '@angular/common';
import { RcSignInTranslations } from '../../auth.model';

export interface SignInCredentials {
  identifier: string;
  password: string;
  remember: boolean;
}

export const DEFAULT_SIGN_IN_TRANSLATIONS: RcSignInTranslations = {
  title: 'Sign in',
  identifierLabel: 'Email or Username',
  passwordLabel: 'Password',
  remember: 'Stay signed in for 7 days',
  submit: 'Sign in',
  forgotPassword: 'Forgot password?',
};

@Component({
  selector: 'rc-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    VCLCheckboxModule,
    VCLButtonModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
    RouterModule,
    RsAuthLayoutComponent,
    RcTranslatePipe,
    AsyncPipe,
  ],
})
export class RcSignInComponent {
  @Input() appName?: string;
  @Input() logoUrl?: string;
  @Input() logoAlt?: string;
  @Input() tagline?: string;

  @Output() signIn = new EventEmitter<SignInCredentials>();

  fb = inject(FormBuilder);
  readonly config = inject(AUTH_LAYOUT_CONFIG, { optional: true });

  form = this.fb.group({
    identifier: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [false, []],
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
      password: this.form.get('password') as FormControl,
      remember: this.form.get('remember') as FormControl,
    };
  }

  get branding(): RcAuthLayoutConfig {
    const fallback: RcAuthLayoutConfig = {
      branding: {
        appName: 'My App',
        logoUrl: '',
        logoAlt: 'App logo',
        tagline: '',
        // forgotPasswordRoute: 'password-recovery',
      },
      i18n: {
        signIn: DEFAULT_SIGN_IN_TRANSLATIONS,
      },
    };

    const base = this.config ?? fallback;

    return {
      branding: {
        appName: this.appName ?? base.branding.appName,
        logoUrl: this.logoUrl ?? base.branding.logoUrl,
        logoAlt: this.logoAlt ?? base.branding.logoAlt ?? base.branding.appName,
        tagline: this.tagline ?? base.branding.tagline,
        // forgotPasswordRoute: base.branding?.forgotPasswordRoute,
      },
    };
  }

  readonly t = computed<RcSignInTranslations>(() => ({
    ...DEFAULT_SIGN_IN_TRANSLATIONS,
    ...this.config?.i18n?.signIn,
  }));

  asRouteLink(route: string | any[]) {
    return Array.isArray(route) ? route : [route];
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: SignInCredentials = {
      identifier: this.form.value.identifier?.trim() ?? '',
      password: this.form.value.password ?? '',
      remember: this.form.value.remember || false,
    };

    this.signIn.emit(payload);
  }
}
