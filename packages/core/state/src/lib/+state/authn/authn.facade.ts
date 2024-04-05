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
  readonly isRequesting$ = this.store.select(authnSelectors.selectIsRequesting);
  readonly actionStatus$ = this.store.select(authnSelectors.selectActionStatus);
  readonly error$ = this.store.select(authnSelectors.selectError);

  // Actions
  signUp = (payload: IIoRestorecommerceUserRegisterRequest) =>
    this.store.dispatch(authnActions.signUpRequest({ payload }));
  activate = (payload: IIoRestorecommerceUserActivateRequest) =>
    this.store.dispatch(authnActions.activateRequest({ payload }));
  signIn = (payload: IAuthnTokenSignInPayload) =>
    this.store.dispatch(authnActions.signInRequest({ payload }));
  signOut = (showNotification = true) =>
    this.store.dispatch(
      authnActions.signOutRequest({
        payload: { showNotification },
      })
    );
  passwordRecovery = (
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) => this.store.dispatch(authnActions.passwordRecoveryRequest({ payload }));
  confirmPassword = (
    payload: IIoRestorecommerceUserConfirmPasswordChangeRequest
  ) => this.store.dispatch(authnActions.confirmPasswordRequest({ payload }));

  constructor(private readonly store: Store) {}
}
