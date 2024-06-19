import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceRoleRoleList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as roleActions from './role.actions';
import * as roleSelectors from './role.selectors';

@Injectable()
export class RoleFacade {
  // Selectors
  readonly ids$ = this.store.select(roleSelectors.selectRoleIds);
  readonly entities$ = this.store.select(roleSelectors.selectRoleEntities);
  readonly all$ = this.store.select(roleSelectors.selectRoleAll);
  readonly allDistinctAssignableByRoles$ = this.store.select(
    roleSelectors.selectRoleAllDistinctAssignableByRoles
  );
  readonly total$ = this.store.select(roleSelectors.selectRoleTotal);
  readonly selectedId$ = this.store.select(roleSelectors.selectRoleSelectedId);
  readonly selected$ = this.store.select(roleSelectors.selectRoleSelected);
  readonly actionStatus$ = this.store.select(roleSelectors.selectActionStatus);
  readonly error$ = this.store.select(roleSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(roleActions.roleReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(roleActions.roleReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(roleActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceRoleRoleList) =>
    this.store.dispatch(roleActions.roleCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceRoleRoleList) =>
    this.store.dispatch(roleActions.roleUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(roleActions.roleRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
