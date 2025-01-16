import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceTaxTaxList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as taxActions from './tax.actions';
import * as taxSelectors from './tax.selectors';

@Injectable()
export class TaxFacade {
  // Selectors
  readonly ids$ = this.store.select(taxSelectors.selectTaxIds);
  readonly entities$ = this.store.select(taxSelectors.selectTaxEntities);
  readonly all$ = this.store.select(taxSelectors.selectTaxAll);
  readonly total$ = this.store.select(taxSelectors.selectTaxTotal);
  readonly selectedId$ = this.store.select(taxSelectors.selectTaxSelectedId);
  readonly selected$ = this.store.select(taxSelectors.selectTaxSelected);
  readonly actionStatus$ = this.store.select(taxSelectors.selectActionStatus);
  readonly error$ = this.store.select(taxSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(taxActions.taxReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(taxActions.taxReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(taxActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceTaxTaxList) =>
    this.store.dispatch(taxActions.taxCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceTaxTaxList) =>
    this.store.dispatch(taxActions.taxUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(taxActions.taxRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
