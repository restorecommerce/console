import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceCountryCountryList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as countryActions from './country.actions';
import * as countrySelectors from './country.selectors';

@Injectable()
export class CountryFacade {
  // Selectors
  readonly ids$ = this.store.select(countrySelectors.selectCountryIds);
  readonly entities$ = this.store.select(
    countrySelectors.selectCountryEntities
  );
  readonly all$ = this.store.select(countrySelectors.selectCountryAll);
  readonly total$ = this.store.select(countrySelectors.selectCountryTotal);
  readonly selectedId$ = this.store.select(
    countrySelectors.selectCountrySelectedId
  );
  readonly selected$ = this.store.select(
    countrySelectors.selectCountrySelected
  );
  readonly actionStatus$ = this.store.select(
    countrySelectors.selectActionStatus
  );
  readonly error$ = this.store.select(countrySelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(countryActions.countryReadRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(countryActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceCountryCountryList) =>
    this.store.dispatch(countryActions.countryCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceCountryCountryList) =>
    this.store.dispatch(countryActions.countryUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(countryActions.countryRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
