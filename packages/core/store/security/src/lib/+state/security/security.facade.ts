import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as securityActions from './security.actions';
import * as securitySelectors from './security.selectors';

@Injectable()
export class SecurityFacade {
  // Selectors
  readonly isAuthenticated$ = this.store.select(
    securitySelectors.selectIsAuthenticated
  );
  readonly isNotAuthenticated$ = this.store.select(
    securitySelectors.selectIsNotAuthenticated
  );
  readonly isLoading$ = this.store.select(securitySelectors.selectIsLoading);
  readonly actionStatus$ = this.store.select(
    securitySelectors.selectActionStatus
  );
  readonly error$ = this.store.select(securitySelectors.selectError);

  // Actions
  readonly login = (payload: { email: string; password: string }) =>
    this.store.dispatch(securityActions.login(payload));
  readonly logout = () => this.store.dispatch(securityActions.logout());

  constructor(private readonly store: Store) {}
}
