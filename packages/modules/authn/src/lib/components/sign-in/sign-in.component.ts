import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { IIoRestorecommerceUserLoginRequest } from '@console-core/graphql';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-sign-in',
  template: `
    <rc-page-sign-in
      [vm]="vm$ | async"
      [login]="login"
    ></rc-page-sign-in>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  readonly vm$ = combineLatest({
    isLoading: this.authnFacade.isLoading$,
  });

  readonly login = (payload: IIoRestorecommerceUserLoginRequest) =>
    this.authnFacade.signIn(payload);

  constructor(private readonly authnFacade: AuthnFacade) {}
}
