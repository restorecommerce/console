import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NotificationType } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { TInputData } from '@console-core/types';

@Component({
  selector: 'rc-page-activation',
  templateUrl: 'page-activation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageActivationComponent {
  @Input({ required: true })
  vm!: TInputData<{
    isLoading: boolean;
    error: string | null;
  }>;

  ROUTER = ROUTER;
  notificationType = NotificationType;
}
