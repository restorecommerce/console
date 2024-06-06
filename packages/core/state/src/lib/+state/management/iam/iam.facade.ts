import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceUserUserList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as userActions from './iam.actions';
import * as userSelectors from './iam.selectors';

@Injectable()
export class IamFacade {
  // Selectors
  readonly ids$ = this.store.select(userSelectors.selectUserIds);
  readonly entities$ = this.store.select(userSelectors.selectUserEntities);
  readonly all$ = this.store.select(userSelectors.selectUserAll);
  readonly total$ = this.store.select(userSelectors.selectUserTotal);
  readonly selectedId$ = this.store.select(userSelectors.selectUserSelectedId);
  readonly selected$ = this.store.select(userSelectors.selectUserSelected);
  readonly actionStatus$ = this.store.select(userSelectors.selectActionStatus);
  readonly error$ = this.store.select(userSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(userActions.userReadRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(userActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(userActions.userRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
