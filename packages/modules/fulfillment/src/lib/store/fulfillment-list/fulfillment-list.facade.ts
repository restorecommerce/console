import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as orderListActions from './fulfillment-list.actions';
import * as orderListSelectors from './fulfillment-list.selectors';

@Injectable()
export class FulfillmentListFacade {
  private readonly store = inject(Store);

  readonly fulfillments = this.store.selectSignal(
    orderListSelectors.selectFulfillmentListItems
  );

  readonly error = this.store.selectSignal(
    orderListSelectors.selectFulfillmentListError
  );

  loadList() {
    this.store.dispatch(orderListActions.loadFulfillmentList());
  }
}
