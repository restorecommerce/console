import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';
import { IIoRestorecommerceUserRequestPasswordChangeRequest } from '@console-core/graphql';

@Component({
  selector: 'rc-authn-password-recovery',
  templateUrl: 'password-recovery.component.html',
})
export class RcPasswordRecoveryComponent {
  @Input({ required: true })
  isLoading!: boolean;

  @Input({ required: true })
  passwordRecovery!: (
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) => void;

  get identifier(): FormControl {
    return this.passwordRecoveryForm.get('identifier') as FormControl;
  }

  ROUTER = ROUTER;

  passwordRecoveryForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
  });

  onClickPasswordRecovery(
    value: Partial<{
      identifier: string | null;
    }>
  ) {
    if (!this.passwordRecoveryForm.valid) {
      return;
    }

    this.passwordRecovery({
      identifier: value.identifier,
    });
  }
}
