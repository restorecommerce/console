import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceCustomerCustomerList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as customerActions from './customer.actions';
import * as customerSelectors from './customer.selectors';

@Injectable()
export class CustomerFacade {
  // Selectors
  readonly ids$ = this.store.select(customerSelectors.selectCustomerIds);
  readonly entities$ = this.store.select(
    customerSelectors.selectCustomerEntities
  );
  readonly all$ = this.store.select(customerSelectors.selectCustomerAll);
  readonly total$ = this.store.select(customerSelectors.selectCustomerTotal);
  readonly selectedId$ = this.store.select(
    customerSelectors.selectCustomerSelectedId
  );
  readonly selected$ = this.store.select(
    customerSelectors.selectCustomerSelected
  );
  readonly actionStatus$ = this.store.select(
    customerSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(customerSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(customerActions.customerReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      customerActions.customerReadOneByIdRequest({ payload })
    );
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(customerActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceCustomerCustomerList) =>
    this.store.dispatch(customerActions.customerCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceCustomerCustomerList) =>
    this.store.dispatch(customerActions.customerUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(customerActions.customerRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
