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

import { AUTH_BRANDING_CONFIG, AuthBrandingConfig } from '../../auth.config';
import { RsAuthLayoutComponent } from '../../layouts';

export interface SignInCredentials {
  identifier: string;
  password: string;
  remember: boolean;
}

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
  ],
})
export class RcSignInComponent {
  @Input() appName?: string;
  @Input() logoUrl?: string;
  @Input() logoAlt?: string;
  @Input() tagline?: string;

  @Output() signIn = new EventEmitter<SignInCredentials>();

  fb = inject(FormBuilder);
  readonly config = inject(AUTH_BRANDING_CONFIG, { optional: true });

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

  get branding(): AuthBrandingConfig {
    const fallback: AuthBrandingConfig = {
      appName: 'My App',
      logoUrl: '',
      logoAlt: 'App logo',
      tagline: '',
    };

    const base = this.config ?? fallback;

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
  }
}
