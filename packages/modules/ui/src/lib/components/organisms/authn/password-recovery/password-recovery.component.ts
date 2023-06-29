import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'rc-password-recovery',
  templateUrl: 'password-recovery.component.html',
})
export class RcPasswordRecoveryComponent {
  ROUTER = ROUTER;

  passwordRecoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email(): FormControl {
    return this.passwordRecoveryForm.get('email') as FormControl;
  }

  onClickPasswordRecovery(
    value: Partial<{
      email: string | null;
    }>
  ) {
    console.log('onClickPasswordRecovery', value);
  }
}
