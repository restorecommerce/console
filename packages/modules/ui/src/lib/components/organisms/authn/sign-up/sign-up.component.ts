import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { REGEX, ROUTER } from '@console-core/config';
import { IoRestorecommerceUserUserType } from '@console-core/graphql';
import { AuthnFacade } from '@console-core/state';

import { RcValidationService } from '../../../../services';

@Component({
  selector: 'rc-authn-sign-up',
  templateUrl: 'sign-up.component.html',
})
export class RcSignUpComponent {
  ROUTER = ROUTER;
  form = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern(REGEX.name)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(REGEX.password)]],
      passwordConfirmation: ['', [Validators.required]],
      userType: ['', [Validators.required]],
    },
    { validators: this.validationService.validatePasswordMatch }
  );
  isLoading$ = this.authnFacade.isLoading$;

  get formFields() {
    return {
      firstName: this.form.get('firstName') as FormControl,
      lastName: this.form.get('lastName') as FormControl,
      name: this.form.get('name') as FormControl,
      email: this.form.get('email') as FormControl,
      password: this.form.get('password') as FormControl,
      passwordConfirmation: this.form.get(
        'passwordConfirmation'
      ) as FormControl,
      userType: this.form.get('userType') as FormControl,
    };
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authnFacade: AuthnFacade,
    private readonly validationService: RcValidationService
  ) {}

  onClickSignUp(): void {
    this.authnFacade.signUp({
      firstName: this.formFields.firstName.value,
      lastName: this.formFields.lastName.value,
      name: this.formFields.name.value,
      email: this.formFields.email.value,
      password: this.formFields.password.value,
      userType: this.formFields.userType.value as IoRestorecommerceUserUserType,
    });
  }
}
