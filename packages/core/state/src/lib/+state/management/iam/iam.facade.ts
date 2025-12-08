import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceUserUserList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IRoleAssociation } from '@console-core/types';

import * as userActions from './iam.actions';
import * as userSelectors from './iam.selectors';

@Injectable()
export class IamFacade {
  private readonly store = inject(Store);

  // Selectors
  readonly ids$ = this.store.select(userSelectors.selectUserIds);
  readonly entities$ = this.store.select(userSelectors.selectUserEntities);
  readonly all$ = this.store.select(userSelectors.selectUserAll);
  readonly total$ = this.store.select(userSelectors.selectUserTotal);
  readonly selectedId$ = this.store.select(userSelectors.selectUserSelectedId);
  readonly selected$ = this.store.select(userSelectors.selectUserSelected);
  readonly temp$ = this.store.select(userSelectors.selectUserTemp);
  readonly tempRoleAssociations$ = this.store.select(
    userSelectors.selectUserTempRoleAssociations
  );
  readonly actionStatus$ = this.store.select(userSelectors.selectActionStatus);
  readonly error$ = this.store.select(userSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(userActions.userReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(userActions.userReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(userActions.userSetSelectedId({ payload }));
  create = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userUpdateRequest({ payload }));
  setTempRoleAssociations = (payload: IRoleAssociation[]) =>
    this.store.dispatch(userActions.userSetTempRoleAssociations({ payload }));
  changePassword = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userChangePasswordRequest({ payload }));

  addRoleAssociation = (payload: IIoRestorecommerceUserUserList) =>
    this.store.dispatch(userActions.userAddRoleAssociationRequest({ payload }));

  remove = (payload: { id: string }) =>
    this.store.dispatch(userActions.userRemoveRequest({ payload }));
}
