import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';

import { REGEX, ROUTER } from '@console-core/config';
import { AuthnFacade, RouterFacade } from '@console-core/state';

import { RcValidationService } from '../../../../services';

@Component({
  selector: 'rc-authn-confirm-password',
  templateUrl: 'confirm-password.component.html',
})
export class RcConfirmPasswordComponent {
  ROUTER = ROUTER;
  form = this.fb.group(
    {
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(REGEX.password)]],
      passwordConfirmation: ['', Validators.required],
    },
    { validators: this.validationService.validatePasswordMatch }
  );
  activationCode = '';
  isLoading$ = this.authnFacade.isLoading$;
  routerParams$ = this.routerFacade.params$.pipe(
    tap((params) => {
      const { code: activationCode, identifier } = params;
      this.activationCode = activationCode;
      this.formFields.identifier.setValue(identifier);
    })
  );

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
      password: this.form.get('password') as FormControl,
      passwordConfirmation: this.form.get(
        'passwordConfirmation'
      ) as FormControl,
    };
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authnFacade: AuthnFacade,
    private readonly routerFacade: RouterFacade,
    private readonly validationService: RcValidationService
  ) {}

  onClickSignUp(): void {
    this.authnFacade.confirmPassword({
      activationCode: this.activationCode,
      identifier: this.formFields.identifier.value,
      password: this.formFields.password.value,
    });
  }
}
