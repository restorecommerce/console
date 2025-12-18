import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RcTranslatable } from '../shared';

export type RsTranslateFn = (value: RcTranslatable) => Observable<string>;

export const RS_TRANSLATE = new InjectionToken<RsTranslateFn>('RS_TRANSLATE', {
  providedIn: 'root',
  factory: () => (value) =>
    of(typeof value === 'string' ? value : value.fallback ?? value.key),
});
