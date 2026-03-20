import { inject, Injectable } from '@angular/core';

import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';

@Injectable()
export class RcNotifierService {
  readonly notifier = inject(NotifierService);
  readonly position = NotifierPosition.TopRight;

  info(title = '', content = '') {
    this.notifier.info({
      content,
      title,
      // icon: 'vcl:info',
      position: this.position,
    });
  }

  success(title = '', content = '') {
    this.notifier.success({
      content,
      title,
      position: this.position,
    });
  }

  warning(title = '', content = '') {
    this.notifier.warning({
      content,
      title,
      position: this.position,
    });
  }

  error(title = '', content = '') {
    this.notifier.error({
      content,
      title,
      position: this.position,
    });
  }
}
