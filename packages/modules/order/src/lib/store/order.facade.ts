import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseReadRequest,
  ModeType,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

import * as orderActions from './order.actions';
import * as orderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  // Selectors
  readonly ids$ = this.store.select(orderSelectors.selectOrderIds);
  readonly entities$ = this.store.select(orderSelectors.selectOrderEntities);
  readonly all$ = this.store.select(orderSelectors.selectOrderAll);
  readonly total$ = this.store.select(orderSelectors.selectOrderTotal);

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

  createFulfilment = (payload: string) =>
    this.store.dispatch(
      orderActions.createFulfilment({
        payload,
      })
    );

  changeStatus = (order: IOrder) => {
    this.store.dispatch(
      orderActions.orderChangeStatusRequest({
        payload: {
          items: [
            {
              id: order.id,
              orderState: order.orderState,
            },
          ],
          mode: ModeType.Update,
        },
      })
    );
  };

  constructor(private readonly store: Store) {}
}
