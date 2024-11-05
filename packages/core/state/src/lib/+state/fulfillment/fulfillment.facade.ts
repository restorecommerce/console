import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceFulfillmentFulfillmentList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as fulfillmentActions from './fulfillment.actions';
import * as fulfillmentSelectors from './fulfillment.selectors';

@Injectable()
export class FulfillmentFacade {
  // Selectors
  readonly ids$ = this.store.select(fulfillmentSelectors.selectFulfillmentIds);
  readonly entities$ = this.store.select(
    fulfillmentSelectors.selectFulfillmentEntities
  );
  readonly all$ = this.store.select(fulfillmentSelectors.selectFulfillmentAll);
  readonly total$ = this.store.select(
    fulfillmentSelectors.selectFulfillmentTotal
  );
  readonly selectedId$ = this.store.select(
    fulfillmentSelectors.selectFulfillmentSelectedId
  );
  readonly selected$ = this.store.select(
    fulfillmentSelectors.selectFulfillmentSelected
  );
  readonly actionStatus$ = this.store.select(
    fulfillmentSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(fulfillmentSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(fulfillmentActions.fulfillmentReadRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(fulfillmentActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceFulfillmentFulfillmentList) =>
    this.store.dispatch(
      fulfillmentActions.fulfillmentCreateRequest({ payload })
    );
  update = (payload: IIoRestorecommerceFulfillmentFulfillmentList) =>
    this.store.dispatch(
      fulfillmentActions.fulfillmentUpdateRequest({ payload })
    );
  remove = (payload: { id: string }) =>
    this.store.dispatch(
      fulfillmentActions.fulfillmentRemoveRequest({ payload })
    );

  submit = (payload: { id: string }) =>
    this.store.dispatch(
      fulfillmentActions.fulfillmentSubmitRequest({ payload })
    );

  constructor(private readonly store: Store) {}
}
