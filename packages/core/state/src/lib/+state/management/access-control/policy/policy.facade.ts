import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceRoleRoleList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as policyActions from './policy.actions';
import * as policySelectors from './policy.selectors';

@Injectable()
export class PolicyFacade {
  // Selectors
  readonly ids$ = this.store.select(policySelectors.selectPolicyIds);
  readonly entities$ = this.store.select(policySelectors.selectPolicyEntities);
  readonly all$ = this.store.select(policySelectors.selectPolicyAll);
  readonly total$ = this.store.select(policySelectors.selectPolicyTotal);
  readonly selectedId$ = this.store.select(
    policySelectors.selectPolicySelectedId
  );
  readonly selected$ = this.store.select(policySelectors.selectPolicySelected);
  readonly actionStatus$ = this.store.select(
    policySelectors.selectActionStatus
  );
  readonly error$ = this.store.select(policySelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(policyActions.policyReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(policyActions.policyReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(policyActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceRoleRoleList) =>
    this.store.dispatch(policyActions.policyCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceRoleRoleList) =>
    this.store.dispatch(policyActions.policyUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(policyActions.policyRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
