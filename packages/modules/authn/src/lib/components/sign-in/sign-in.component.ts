import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { SecurityFacade } from '@console-core/store/security';

@Component({
  selector: 'app-authn-sign-in',
  template: `
    <rc-page-sign-in
      [vm]="vm$ | async"
      [login]="login"
    ></rc-page-sign-in>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  readonly vm$ = combineLatest({
    isLoading: this.securityFacade.isLoading$,
    error: this.securityFacade.error$,
  });

  readonly login = (payload: { email: string; password: string }) =>
    this.securityFacade.login(payload);

  constructor(private readonly securityFacade: SecurityFacade) {}
}
