import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { NotificationType } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'rc-page-authn-activation',
  templateUrl: 'page-activation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageActivationComponent {
  readonly vm$ = combineLatest({
    isRequesting: this.authnFacade.isRequesting$,
    error: this.authnFacade.error$,
  });

  notificationType = NotificationType;
  ROUTER = ROUTER;

  constructor(private readonly authnFacade: AuthnFacade) {}
}
