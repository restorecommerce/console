import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  VCLCheckboxModule,
  VCLInputModule,
  VCLFormControlGroupModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

import {
  SIGN_IN_BRANDING_CONFIG,
  SignInBrandingConfig,
} from './sign-in.config';
@Component({
  selector: 'app-authn-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    VCLCheckboxModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
  ],
})
export class LogInComponent {
  @Input() appName?: string;
  @Input() logoUrl?: string;
  @Input() logoAlt?: string;
  @Input() tagline?: string;

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
}
