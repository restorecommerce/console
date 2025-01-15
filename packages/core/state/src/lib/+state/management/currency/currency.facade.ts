import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceCurrencyCurrencyList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as currencyActions from './currency.actions';
import * as currencySelectors from './currency.selectors';

@Injectable()
export class CurrencyFacade {
  // Selectors
  readonly ids$ = this.store.select(currencySelectors.selectCurrencyIds);
  readonly entities$ = this.store.select(
    currencySelectors.selectCurrencyEntities
  );
  readonly all$ = this.store.select(currencySelectors.selectCurrencyAll);
  readonly total$ = this.store.select(currencySelectors.selectCurrencyTotal);
  readonly selectedId$ = this.store.select(
    currencySelectors.selectCurrencySelectedId
  );
  readonly selected$ = this.store.select(
    currencySelectors.selectCurrencySelected
  );
  readonly actionStatus$ = this.store.select(
    currencySelectors.selectActionStatus
  );
  readonly error$ = this.store.select(currencySelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(currencyActions.currencyReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      currencyActions.currencyReadOneByIdRequest({ payload })
    );
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(currencyActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceCurrencyCurrencyList) =>
    this.store.dispatch(currencyActions.currencyCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceCurrencyCurrencyList) =>
    this.store.dispatch(currencyActions.currencyUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(currencyActions.currencyRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
