// password.validator.ts
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';

import { checkPasswordStrength } from '../utils';

export function zxcvbnMinScoreValidator(minScore: number): AsyncValidatorFn {
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const pw = control.value ?? '';
    if (!pw) return null;
    const result = await checkPasswordStrength(pw);
    return result.score < minScore
      ? {
          zxcvbnMinScore: {
            score: result.score,
            feedback: result.feedback, // show warning/suggestions in UI
          },
        }
      : null;
  };
}
