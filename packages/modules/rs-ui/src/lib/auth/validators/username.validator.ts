import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const RS_USERNAME_PATTERN = /^(?!.*(.)\1)[A-Za-z][A-Za-z0-9._\-@]{7,}$/;

export function rsUsernamePatternValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value ?? '';

    if (!value) {
      return null;
    }

    return RS_USERNAME_PATTERN.test(value) ? null : { pattern: true };
  };
}
