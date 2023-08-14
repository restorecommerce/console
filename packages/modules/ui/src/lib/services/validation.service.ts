import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RcValidationService {
  validatePasswordMatch(
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
