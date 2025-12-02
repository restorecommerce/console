import { InjectionToken } from '@angular/core';

export interface RsTranslationService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t(key: string, params?: Record<string, any>): string;
}

export const RS_TRANSLATION = new InjectionToken<RsTranslationService>(
  'RS_TRANSLATION'
);
