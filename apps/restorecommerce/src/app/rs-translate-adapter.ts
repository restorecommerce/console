import { inject, Injectable } from '@angular/core';
import { RsTranslationService } from '@console/rs-ui';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class RsTranslateAdapter implements RsTranslationService {
  private translate = inject(TranslateService);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t(key: string, params?: any): string {
    return this.translate.instant(key, params);
  }
}
