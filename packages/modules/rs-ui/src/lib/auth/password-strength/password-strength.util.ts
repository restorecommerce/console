// password-strength.util.ts
import {
  zxcvbnAsync,
  zxcvbnOptions,
  type Matcher,
  type Match,
  type MatchEstimated,
  type MatchExtended,
  type ZxcvbnResult,
} from '@zxcvbn-ts/core';
import * as zxcvbnCommon from '@zxcvbn-ts/language-common';
import * as zxcvbnDe from '@zxcvbn-ts/language-de';
import * as zxcvbnEn from '@zxcvbn-ts/language-en';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';

export interface RsPasswordStrengthInitOptions {
  minLength: number;
  userInputs?: string[];
  translations?: typeof zxcvbnEn.translations;
}

let initialized = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentOptions: RsPasswordStrengthInitOptions | undefined;

/**
 * Initialize zxcvbn matchers & dictionaries for the browser.
 * Safe to call multiple times; it is idempotent.
 */
export function initRsUiPasswordMatcher(
  opts: RsPasswordStrengthInitOptions
): void {
  if (initialized) return;

  const {
    minLength,
    userInputs = [],
    translations = zxcvbnEn.translations,
  } = opts;

  currentOptions = { minLength, userInputs, translations };

  // --- Custom matchers (parity with backend) ---
  const minLengthMatcher: Matcher = {
    Matching: class MatchMinLength {
      match({ password }: { password: string }) {
        const matches: Match[] = [];
        if (password.length < minLength) {
          matches.push({
            pattern: 'minLength',
            token: password,
            i: 0,
            j: Math.max(0, password.length - 1),
          });
        }
        return matches;
      }
    },
    feedback(_match: MatchEstimated) {
      return {
        warning: 'Your password is not long enough',
        suggestions: [],
      };
    },
    scoring(match: MatchExtended) {
      // mirrors backend: length * 10 (bigger => considered stronger)
      return match.token.length * 10;
    },
  };

  const numberMatcher: Matcher = {
    Matching: class MatchNumber {
      match({ password }: { password: string }) {
        const matches: Match[] = [];
        if (!/[0-9]/.test(password)) {
          matches.push({
            pattern: 'number',
            token: password,
            i: 0,
            j: Math.max(0, password.length - 1),
          });
        }
        return matches;
      }
    },
    feedback() {
      return {
        warning: 'Your password must contain at least one number',
        suggestions: [],
      };
    },
    scoring() {
      return 10;
    },
  };

  const uppercaseMatcher: Matcher = {
    Matching: class MatchUppercase {
      match({ password }: { password: string }) {
        const matches: Match[] = [];
        if (!/[A-Z]/.test(password)) {
          matches.push({
            pattern: 'uppercase',
            token: password,
            i: 0,
            j: Math.max(0, password.length - 1),
          });
        }
        return matches;
      }
    },
    feedback() {
      return {
        warning: 'Your password must contain at least one uppercase letter',
        suggestions: [],
      };
    },
    scoring() {
      return 10;
    },
  };

  const lowercaseMatcher: Matcher = {
    Matching: class MatchLowercase {
      match({ password }: { password: string }) {
        const matches: Match[] = [];
        if (!/[a-z]/.test(password)) {
          matches.push({
            pattern: 'lowercase',
            token: password,
            i: 0,
            j: Math.max(0, password.length - 1),
          });
        }
        return matches;
      }
    },
    feedback() {
      return {
        warning: 'Your password must contain at least one lowercase letter',
        suggestions: [],
      };
    },
    scoring() {
      return 10;
    },
  };

  const specialCharMatcher: Matcher = {
    Matching: class MatchSpecialChar {
      match({ password }: { password: string }) {
        const matches: Match[] = [];
        if (!/[!@#$%^&*]/.test(password)) {
          matches.push({
            pattern: 'specialChar',
            token: password,
            i: 0,
            j: Math.max(0, password.length - 1),
          });
        }
        return matches;
      }
    },
    feedback() {
      return {
        warning:
          'Your password must contain at least one special character (!@#$%^&*)',
        suggestions: [],
      };
    },
    scoring() {
      return 10;
    },
  };

  // --- Register matchers (including pwned) ---
  // pwned uses window.fetch in browsers; cast for TS
  zxcvbnOptions.addMatcher(
    'pwned',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    matcherPwnedFactory(fetch as any, zxcvbnOptions)
  );
  zxcvbnOptions.addMatcher('minLength', minLengthMatcher);
  zxcvbnOptions.addMatcher('number', numberMatcher);
  zxcvbnOptions.addMatcher('uppercase', uppercaseMatcher);
  zxcvbnOptions.addMatcher('lowercase', lowercaseMatcher);
  zxcvbnOptions.addMatcher('specialChar', specialCharMatcher);

  // --- Core options (dicts/graphs) ---
  zxcvbnOptions.setOptions({
    dictionary: {
      ...zxcvbnCommon.dictionary,
      ...zxcvbnEn.dictionary,
      ...zxcvbnDe.dictionary,
      userInputs,
    },
    graphs: zxcvbnCommon.adjacencyGraphs,
    useLevenshteinDistance: true,
    translations,
  });

  initialized = true;
}

/**
 * Opinionated default init for rs-ui.
 * Call in shell app (e.g. via APP_INITIALIZER) if you don’t customize anything.
 */
export function initRsUiPasswordDefaults(): void {
  if (initialized) return;

  initRsUiPasswordMatcher({
    minLength: 10,
    userInputs: [],
    translations: zxcvbnEn.translations,
  });
}

/**
 * Convenience checker for rs-ui.
 * Safe to use anywhere in UI (validator, strength meter, etc.).
 */
export async function rsCheckPasswordStrength(
  password: string
): Promise<ZxcvbnResult> {
  if (!initialized) {
    initRsUiPasswordDefaults();
  }
  return zxcvbnAsync(password);
}
