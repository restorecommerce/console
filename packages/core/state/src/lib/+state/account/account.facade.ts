import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceUserFindByTokenRequest } from '@console-core/graphql';

import * as accountActions from './account.actions';
import * as accountSelectors from './account.selectors';

@Injectable()
export class AccountFacade {
  // Selectors
  profile$ = this.store.select(accountSelectors.selectProfile);
  isLoading$ = this.store.select(accountSelectors.selectIsLoading);
  actionStatus$ = this.store.select(accountSelectors.selectActionStatus);
  error$ = this.store.select(accountSelectors.selectError);

  // Actions
  findUserByTokenRequest = (
    payload: IIoRestorecommerceUserFindByTokenRequest
  ) => this.store.dispatch(accountActions.findUserByTokenRequest({ payload }));

  constructor(private readonly store: Store) {}
}
