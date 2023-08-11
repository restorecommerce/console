import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-password-recovery',
  templateUrl: 'password-recovery.component.html',
})
export class RcPasswordRecoveryComponent {
  isLoading = this.authnFacade.isLoading$;

  get identifier(): FormControl {
    return this.passwordRecoveryForm.get('identifier') as FormControl;
  }

  passwordRecoveryForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
  });

  ROUTER = ROUTER;

  constructor(private readonly authnFacade: AuthnFacade) {}

  onClickPasswordRecovery(
    value: Partial<{
      identifier: string | null;
    }>
  ) {
    if (!this.passwordRecoveryForm.valid) {
      return;
    }

    this.authnFacade.passwordRecovery({
      identifier: value.identifier,
    });
  }
}
