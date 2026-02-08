import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fulfillmentViewActions from './fulfillment-view.actions';
import * as fulfillmentViewSelectors from './fulfillment-view.selectors';

@Injectable()
export class FulfillmentViewFacade {
  private readonly store = inject(Store);

  readonly fulfillment = this.store.selectSignal(
    fulfillmentViewSelectors.selectFulfillment
  );

  readonly loading = this.store.selectSignal(
    fulfillmentViewSelectors.selectLoading
  );

  readonly error = this.store.selectSignal(
    fulfillmentViewSelectors.selectError
  );

  readonly hasLabels = this.store.selectSignal(
    fulfillmentViewSelectors.selectHasLabels
  );

  enterPage(fulfillmentId: string) {
    this.store.dispatch(fulfillmentViewActions.enterPage({ fulfillmentId }));
  }

  leavePage() {
    this.store.dispatch(fulfillmentViewActions.leavePage());
  }

  loadFulfillment(fulfillmentId: string) {
    this.store.dispatch(
      fulfillmentViewActions.loadFulfillment({ fulfillmentId })
    );
  }
}
