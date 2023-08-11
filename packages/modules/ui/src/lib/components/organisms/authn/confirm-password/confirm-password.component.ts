import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';

import { REGEX, ROUTER } from '@console-core/config';
import { AuthnFacade, RouterFacade } from '@console-core/state';

@Component({
  selector: 'rc-authn-confirm-password',
  templateUrl: 'confirm-password.component.html',
})
export class RcConfirmPasswordComponent {
  isLoading = this.authnFacade.isLoading$;
  activationCode = '';

  get identifier(): FormControl {
    return this.confirmPasswordForm.get('identifier') as FormControl;
  }

  get password(): FormControl {
    return this.confirmPasswordForm.get('password') as FormControl;
  }

  get passwordConfirmation(): FormControl {
    return this.confirmPasswordForm.get('passwordConfirmation') as FormControl;
  }

  confirmPasswordForm = new FormGroup(
    {
      identifier: new FormControl(null, [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.password),
      ]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    { validators: this.validatePasswordMatch }
  );

  ROUTER = ROUTER;

  readonly handleConfirmPassword$ = this.routerFacade.params$.pipe(
    tap((params) => {
      const { code: activationCode, identifier } = params;
      this.activationCode = activationCode;
      this.identifier.setValue(identifier);
    })
  );

  constructor(
    private readonly authnFacade: AuthnFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  onClickSignUp(
    value: Partial<{
      identifier: string | null;
      password: string | null;
    }>
  ): void {
    if (!this.confirmPasswordForm.valid) {
      return;
    }

    this.authnFacade.confirmPassword({
      activationCode: this.activationCode as string,
      identifier: value.identifier as string,
      password: value.password as string,
    });
  }

  private validatePasswordMatch(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (password?.value !== passwordConfirmation?.value) {
      return { passwordConfirmationMismatch: true };
    }

    return null;
  }
}
