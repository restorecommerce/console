import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { IIoRestorecommerceUserRegisterRequest } from '@console-core/graphql';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-sign-up',
  template: `
    <rc-page-sign-up
      [vm]="vm$ | async"
      [register]="register"
    ></rc-page-sign-up>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  readonly vm$ = combineLatest({
    isLoading: this.authnFacade.isLoading$,
  });

  readonly register = (payload: IIoRestorecommerceUserRegisterRequest) =>
    this.authnFacade.signUp(payload);

  constructor(private readonly authnFacade: AuthnFacade) {}
}
