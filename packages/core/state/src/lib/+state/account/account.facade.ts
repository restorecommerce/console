import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserUserList,
} from '@console-core/graphql';

import * as accountActions from './account.actions';
import * as accountSelectors from './account.selectors';

@Injectable()
export class AccountFacade {
  // Selectors
  user$ = this.store.select(accountSelectors.selectUser);
  isLoading$ = this.store.select(accountSelectors.selectIsLoading);
  isUpdating$ = this.store.select(accountSelectors.selectIsUpdating);
  isDeleting$ = this.store.select(accountSelectors.selectIsDeleting);
  actionStatus$ = this.store.select(accountSelectors.selectActionStatus);
  error$ = this.store.select(accountSelectors.selectError);

  // Actions
  userFindByTokenRequest = (
    payload: IIoRestorecommerceUserFindByTokenRequest
  ) => this.store.dispatch(accountActions.userFindByTokenRequest({ payload }));
  userMutateRequest = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(accountActions.userMutateRequest({ payload }));
  userChangePasswordRequest = (
    payload: IIoRestorecommerceUserChangePasswordRequest
  ) =>
    this.store.dispatch(accountActions.userChangePasswordRequest({ payload }));
  userDeleteRequest = (payload: IIoRestorecommerceResourcebaseDeleteRequest) =>
    this.store.dispatch(accountActions.userDeleteRequest({ payload }));

  constructor(private readonly store: Store) {}
}
