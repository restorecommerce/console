import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RcTranslatable } from './shared';

export type TranslateFn = (value: RcTranslatable) => Observable<string>;

export const RS_TRANSLATE = new InjectionToken<TranslateFn>('RS_TRANSLATE', {
  providedIn: 'root',
  factory: () => (value) =>
    of(typeof value === 'string' ? value : value.fallback ?? value.key),
});
