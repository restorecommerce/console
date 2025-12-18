import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from '../shared';
import { RS_TRANSLATE } from './i18n.tokens';

@Pipe({
  name: 'rsTranslate',
})
export class RsTranslatePipe implements PipeTransform {
  private readonly t = inject(RS_TRANSLATE);

  transform(value: RcTranslatable): Observable<string> {
    return this.t(value);
  }
}
