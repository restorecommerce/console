import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as orderListSelectors from './order-list.selectors';

@Injectable()
export class OrderListFacade {
  private readonly store = inject(Store);

  readonly orders = this.store.selectSignal(
    orderListSelectors.selectOrderListItems
  );

  readonly error = this.store.selectSignal(
    orderListSelectors.selectOrderListError
  );
}
