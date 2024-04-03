import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';

import * as orderActions from './order.actions';
import * as orderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  // Selectors
  readonly actionStatus$ = this.store.select(orderSelectors.selectActionStatus);
  readonly error$ = this.store.select(orderSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(orderActions.orderReadRequest({ payload }));

  constructor(private readonly store: Store) {}
}
