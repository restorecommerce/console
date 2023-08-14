import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { REGEX, ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-password-recovery',
  templateUrl: 'password-recovery.component.html',
})
export class RcPasswordRecoveryComponent {
  ROUTER = ROUTER;
  form = this.fb.group({
    identifier: ['', [Validators.required, Validators.pattern(REGEX.name)]],
  });
  isLoading$ = this.authnFacade.isLoading$;

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
    this.authnFacade.passwordRecovery({
      identifier: this.formFields.identifier.value,
    });
  }
}
