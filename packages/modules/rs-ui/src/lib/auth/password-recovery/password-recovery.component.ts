import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { VCLFormControlGroupModule, VCLInputModule } from '@vcl/ng-vcl';

export interface PasswordRecoveryPayload {
  identifier: string;
}

@Component({
  selector: 'rs-auth-password-recovery',
  templateUrl: 'password-recovery.component.html',
  imports: [ReactiveFormsModule, VCLInputModule, VCLFormControlGroupModule],
})
export class RsPasswordRecoveryComponent {
  @Output()
  passwordRecovery = new EventEmitter<PasswordRecoveryPayload>();

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

    this.passwordRecovery.emit({ identifier });
  }
}
