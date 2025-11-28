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

import { RsAuthPageComponent } from '../auth-page/auth-page.component';

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

    const { identifier, password, remember } = this.form.value;

    this.signIn.emit({
      identifier: identifier || '',
      password: password || '',
      remember: remember || false,
    });
  }
}
