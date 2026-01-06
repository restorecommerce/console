import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from '../shared';
import { RC_TRANSLATE } from './i18n.tokens';

@Pipe({
  name: 'rcTranslate',
})
export class RcTranslatePipe implements PipeTransform {
  private readonly t = inject(RC_TRANSLATE);

  transform(value: RcTranslatable): Observable<string> {
    return this.t(value);
  }
}
