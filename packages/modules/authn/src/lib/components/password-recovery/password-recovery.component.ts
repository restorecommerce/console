import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { IIoRestorecommerceUserRequestPasswordChangeRequest } from '@console-core/graphql';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-password-recovery',
  template: `<rc-page-authn-password-recovery
    [vm]="vm$ | async"
    [passwordRecovery]="passwordRecovery"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordRecoveryComponent {
  readonly vm$ = combineLatest({
    isLoading: this.authnFacade.isLoading$,
  });

  readonly passwordRecovery = (
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) => this.authnFacade.passwordRecovery(payload);

  constructor(private readonly authnFacade: AuthnFacade) {}
}
