import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  VCLButtonModule,
  VCLFormControlGroupModule,
  VCLInputModule,
} from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';
import { MODULES_AUTHN_CONFIG } from '../authn.tokens';

export interface PasswordRecoveryPayload {
  identifier: string;
}

@Component({
  selector: 'rs-auth-password-recovery',
  templateUrl: 'password-recovery.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [
    ReactiveFormsModule,
    VCLButtonModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    RsAuthPageComponent,
  ],
})
export class RsPasswordRecoveryComponent {
  @Output()
  passwordRecovery = new EventEmitter<PasswordRecoveryPayload>();

  private config = inject(MODULES_AUTHN_CONFIG, { optional: true });
  fb = inject(FormBuilder);

  form = this.fb.group({
    identifier: this.fb.control<string | null>('', {
      nonNullable: false,
      validators: [Validators.required],
    }),
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
    };
  }

  onClickPasswordRecovery(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const identifier = this.form.value.identifier?.trim() ?? '';

    if (!identifier) {
      this.formFields.identifier.setErrors({ required: true });
      this.formFields.identifier.markAsTouched();
      return;
    }

    const payload: PasswordRecoveryPayload = {
      identifier,
    };

    this.passwordRecovery.emit(payload);

    if (this.config?.passwordRecoveryHandler) {
      this.config.passwordRecoveryHandler(payload);
    } else {
      console.warn('[Authn] passwordRecoveryHandler not configured');
    }
  }
}
