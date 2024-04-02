import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-password-recovery',
  templateUrl: 'password-recovery.component.html',
})
export class RcPasswordRecoveryComponent {
  ROUTER = ROUTER;
  form = this.fb.group({
    identifier: ['', [Validators.required]],
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
    };
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authnFacade: AuthnFacade
  ) {}

  onClickPasswordRecovery() {
    if (this.form.invalid || this.form.pristine) {
      return;
    }

    this.authnFacade.passwordRecovery({
      identifier: this.formFields.identifier.value,
    });
  }
}
