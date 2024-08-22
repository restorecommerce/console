import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as orderActions from './order.actions';
import * as orderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  // Selectors
  readonly ids$ = this.store.select(orderSelectors.selectOrderIds);
  readonly entities$ = this.store.select(orderSelectors.selectOrderEntities);
  readonly all$ = this.store.select(orderSelectors.selectOrderAll);
  readonly total$ = this.store.select(orderSelectors.selectOrderTotal);
  readonly selectedId$ = this.store.select(
    orderSelectors.selectOrderSelectedId
  );
  readonly selected$ = this.store.select(orderSelectors.selectOrderSelected);
  readonly actionStatus$ = this.store.select(orderSelectors.selectActionStatus);
  readonly error$ = this.store.select(orderSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(orderActions.orderReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(orderActions.orderReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(orderActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceOrderOrderList) =>
    this.store.dispatch(orderActions.orderCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceOrderOrderList) => {
    this.store.dispatch(orderActions.orderUpdateRequest({ payload }));
  };
  remove = (payload: { id: string }) =>
    this.store.dispatch(orderActions.orderRemoveRequest({ payload }));

  createOrderInvoice = (payload: string) =>
    this.store.dispatch(
      orderActions.orderCreateInvoiceRequest({
        payload,
      })
    );

  constructor(private readonly store: Store) {}
}
