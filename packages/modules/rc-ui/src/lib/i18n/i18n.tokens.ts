import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RcTranslatable } from '../shared';

export type RcTranslateFn = (value: RcTranslatable) => Observable<string>;

export const RC_TRANSLATE = new InjectionToken<RcTranslateFn>('RC_TRANSLATE', {
  providedIn: 'root',
  factory: () => (value) =>
    of(typeof value === 'string' ? value : value.fallback ?? value.key),
});
