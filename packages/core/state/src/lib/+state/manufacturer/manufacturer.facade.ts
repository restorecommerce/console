import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceInvoiceInvoiceList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as manufacturerActions from './manufacturer.actions';
import * as manufacturerSelectors from './manufacturer.selectors';

@Injectable()
export class ManufacturerFacade {
  // Selectors
  readonly ids$ = this.store.select(
    manufacturerSelectors.selectManufacturerIds
  );
  readonly entities$ = this.store.select(
    manufacturerSelectors.selectManufacturerEntities
  );
  readonly all$ = this.store.select(
    manufacturerSelectors.selectManufacturerAll
  );
  readonly total$ = this.store.select(
    manufacturerSelectors.selectManufacturerTotal
  );
  readonly selectedId$ = this.store.select(
    manufacturerSelectors.selectManufacturerSelectedId
  );
  readonly selected$ = this.store.select(
    manufacturerSelectors.selectManufacturerSelected
  );
  readonly actionStatus$ = this.store.select(
    manufacturerSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(manufacturerSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      manufacturerActions.manufacturerReadRequest({ payload })
    );
  setSelectedId = (_payload: string | null) => null;
  create = (_payload: IIoRestorecommerceInvoiceInvoiceList) => null;
  update = (_payload: IIoRestorecommerceInvoiceInvoiceList) => null;
  remove = (_payload: { id: string }) => null;

  constructor(private readonly store: Store) {}
}
