import { inject, Pipe, PipeTransform } from '@angular/core';

import { RS_TRANSLATION } from '../rs-token';

@Pipe({
  name: 'rsTranslate',
  standalone: true,
  pure: true,
})
export class RsTranslatePipe implements PipeTransform {
  private readonly i18n = inject(RS_TRANSLATION);

  transform(key: string, params?: Record<string, unknown>): string {
    if (!key) return '';
    return this.i18n.t(key, params);
  }
}
