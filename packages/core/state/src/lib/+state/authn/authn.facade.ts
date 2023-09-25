import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
} from '@console-core/graphql';
import { IAuthnTokenSignInPayload } from '@console-core/types';

import * as authnActions from './authn.actions';
import * as authnSelectors from './authn.selectors';

@Injectable()
export class AuthnFacade {
  // Selectors
  readonly isAuthenticated$ = this.store.select(
    authnSelectors.selectIsAuthenticated
  );
  readonly isNotAuthenticated$ = this.store.select(
    authnSelectors.selectIsNotAuthenticated
  );
  readonly expiresIn$ = this.store.select(authnSelectors.selectExpiresIn);
  readonly token$ = this.store.select(authnSelectors.selectToken);
  readonly isLoading$ = this.store.select(authnSelectors.selectIsLoading);
  readonly actionStatus$ = this.store.select(authnSelectors.selectActionStatus);
  readonly error$ = this.store.select(authnSelectors.selectError);

  // Actions
  readonly signUp = (payload: IIoRestorecommerceUserRegisterRequest) =>
    this.store.dispatch(authnActions.signUpRequest({ payload }));
  readonly activate = (payload: IIoRestorecommerceUserActivateRequest) =>
    this.store.dispatch(authnActions.activateRequest({ payload }));
  readonly signIn = (payload: IAuthnTokenSignInPayload) =>
    this.store.dispatch(authnActions.signInRequest({ payload }));
  readonly signOut = () => this.store.dispatch(authnActions.signOut());
  readonly passwordRecovery = (
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) => this.store.dispatch(authnActions.passwordRecoveryRequest({ payload }));
  readonly confirmPassword = (
    payload: IIoRestorecommerceUserConfirmPasswordChangeRequest
  ) => this.store.dispatch(authnActions.confirmPasswordRequest({ payload }));

  constructor(private readonly store: Store) {}
}
