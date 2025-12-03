// password-strength.validator.ts
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
      // treat empty as valid; required() should be separate
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
