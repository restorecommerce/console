import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommercePriceGroupPriceGroupList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as priceGroupActions from './price-group.actions';
import * as priceGroupSelectors from './price-group.selectors';

@Injectable()
export class PriceGroupFacade {
  // Selectors
  readonly ids$ = this.store.select(priceGroupSelectors.selectPriceGroupIds);
  readonly entities$ = this.store.select(
    priceGroupSelectors.selectPriceGroupEntities
  );
  readonly all$ = this.store.select(priceGroupSelectors.selectPriceGroupAll);
  readonly total$ = this.store.select(
    priceGroupSelectors.selectPriceGroupTotal
  );
  readonly selectedId$ = this.store.select(
    priceGroupSelectors.selectPriceGroupSelectedId
  );
  readonly selected$ = this.store.select(
    priceGroupSelectors.selectPriceGroupSelected
  );
  readonly actionStatus$ = this.store.select(
    priceGroupSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(priceGroupSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(priceGroupActions.priceGroupReadRequest({ payload }));

  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      priceGroupActions.priceGroupReadOneByIdRequest({ payload })
    );

  setSelectedId = (payload: string | null) =>
    this.store.dispatch(priceGroupActions.setSelectedId({ payload }));

  create = (payload: IIoRestorecommercePriceGroupPriceGroupList) =>
    this.store.dispatch(priceGroupActions.priceGroupCreateRequest({ payload }));
  update = (payload: IIoRestorecommercePriceGroupPriceGroupList) =>
    this.store.dispatch(priceGroupActions.priceGroupUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(priceGroupActions.priceGroupRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
