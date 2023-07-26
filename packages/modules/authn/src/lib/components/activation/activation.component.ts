import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { IIoRestorecommerceUserActivateRequest } from '@console-core/graphql';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-activation',
  template: `<rc-page-activation></rc-page-activation>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivationComponent {
  readonly vm$ = combineLatest({
    isLoading: this.authnFacade.isLoading$,
  });

  readonly activate = (payload: IIoRestorecommerceUserActivateRequest) =>
    this.authnFacade.activate(payload);

  constructor(private readonly authnFacade: AuthnFacade) {}
}
