import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Group-level validator that checks if two controls have the same value.
 *
 * Defaults:
 *  - passwordControlName: 'password'
 *  - confirmationControlName: 'passwordConfirmation'
 *
 * Usage:
 *  formBuilder.group(
 *    {
 *      password: [''],
 *      passwordConfirmation: [''],
 *    },
 *    { validators: rsPasswordConfirmationValidator() }
 *  );
 */
export function rsPasswordConfirmationValidator(
  passwordControlName = 'password',
  confirmationControlName = 'passwordConfirmation'
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordControlName);
    const confirmation = group.get(confirmationControlName);

    if (!password || !confirmation) {
      return null;
    }

    const pwValue = password.value;
    const confValue = confirmation.value;

    if (!pwValue || !confValue) {
      return null;
    }

    return pwValue === confValue
      ? null
      : { passwordConfirmationMismatch: true };
  };
}
