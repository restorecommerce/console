import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NotificationType } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-page-activation',
  templateUrl: 'page-activation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageActivationComponent {
  nType = NotificationType;
}
