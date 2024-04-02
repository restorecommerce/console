import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceUserChangeEmailRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IIoRestorecommerceUserConfirmEmailChangeRequest,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserFindRequest,
  IIoRestorecommerceUserUserList,
} from '@console-core/graphql';

import * as accountActions from './account.actions';
import * as accountSelectors from './account.selectors';

@Injectable()
export class AccountFacade {
  // Selectors
  user$ = this.store.select(accountSelectors.selectUser);
  actionStatus$ = this.store.select(accountSelectors.selectActionStatus);
  error$ = this.store.select(accountSelectors.selectError);

  // Actions
  userFindRequest = (payload: IIoRestorecommerceUserFindRequest) =>
    this.store.dispatch(accountActions.userFindRequest({ payload }));
  userFindByTokenRequest = (
    payload: IIoRestorecommerceUserFindByTokenRequest
  ) => this.store.dispatch(accountActions.userFindByTokenRequest({ payload }));
  userMutateRequest = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(accountActions.userMutateRequest({ payload }));
  userChangeEmailRequest = (
    payload: IIoRestorecommerceUserChangeEmailRequest
  ) => this.store.dispatch(accountActions.userChangeEmailRequest({ payload }));
  userConfirmEmailChangeRequest = (
    payload: IIoRestorecommerceUserConfirmEmailChangeRequest
  ) =>
    this.store.dispatch(
      accountActions.userConfirmEmailChangeRequest({ payload })
    );
  userChangePasswordRequest = (
    payload: IIoRestorecommerceUserChangePasswordRequest
  ) =>
    this.store.dispatch(accountActions.userChangePasswordRequest({ payload }));
  userDeleteRequest = (payload: IIoRestorecommerceResourcebaseDeleteRequest) =>
    this.store.dispatch(accountActions.userDeleteRequest({ payload }));

  constructor(private readonly store: Store) {}
}
