import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  VCLCheckboxModule,
  VCLInputModule,
  VCLFormControlGroupModule,
  VCLPasswordInputModule,
  VCLButtonModule,
} from '@vcl/ng-vcl';

import { RS_TRANSLATION } from '../../rs-token';
import { RsAuthPageComponent } from '../auth-page/auth-page.component';
import { MODULES_AUTHN_CONFIG } from '../authn.tokens';

import {
  SIGN_IN_BRANDING_CONFIG,
  SignInBrandingConfig,
} from './sign-in.config';

export interface SignInCredentials {
  identifier: string;
  password: string;
  remember: boolean;
}

@Component({
  selector: 'rs-sign-in',
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
    RsAuthPageComponent,
  ],
})
export class RsSignInComponent {
  @Input() appName?: string;
  @Input() logoUrl?: string;
  @Input() logoAlt?: string;
  @Input() tagline?: string;

  @Output() signIn = new EventEmitter<SignInCredentials>();

  fb = inject(FormBuilder);
  readonly defaultConfig = inject(SIGN_IN_BRANDING_CONFIG, { optional: true });
  private readonly config = inject(MODULES_AUTHN_CONFIG, { optional: true });

  private readonly i18n = inject(RS_TRANSLATION);

  form = this.fb.group({
    identifier: ['', []],
    password: ['', []],
    remember: [false, []],
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
      password: this.form.get('password') as FormControl,
      remember: this.form.get('remember') as FormControl,
    };
  }

  get branding(): SignInBrandingConfig {
    const fallback: SignInBrandingConfig = {
      appName: 'My App',
      logoUrl: '',
      logoAlt: 'App logo',
      tagline: '',
    };

    const base = this.defaultConfig ?? fallback;

    return {
      appName: this.appName ?? base.appName,
      logoUrl: this.logoUrl ?? base.logoUrl,
      logoAlt: this.logoAlt ?? base.logoAlt ?? base.appName,
      tagline: this.tagline ?? base.tagline,
    };
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

    if (this.config?.signInHandler) {
      this.config.signInHandler(payload);
    } else {
      console.warn('[Authn] signInHandler not configured');
    }
  }

  get title() {
    return this.i18n.t('rs-ui.header.welcome', { name: 'Babas' });
  }
}
