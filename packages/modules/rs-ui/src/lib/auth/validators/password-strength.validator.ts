import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';

import { rsCheckPasswordStrength } from '../password-strength/password-strength.util';

export function rsZxcvbnMinScoreValidator(minScore: number): AsyncValidatorFn {
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const pw = control.value ?? '';
    if (!pw) {
      return null;
    }

    const result = await rsCheckPasswordStrength(pw);

    return result.score < minScore
      ? {
          rsZxcvbnMinScore: {
            score: result.score,
            feedback: result.feedback, // warning/suggestions usable in UI
          },
        }
      : null;
  };
}
