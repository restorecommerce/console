import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';

import * as localeActions from './locale.actions';
import * as localeSelectors from './locale.selectors';

@Injectable()
export class LocaleFacade {
  // Selectors
  readonly ids$ = this.store.select(localeSelectors.selectLocaleIds);
  readonly entities$ = this.store.select(localeSelectors.selectLocaleEntities);
  readonly all$ = this.store.select(localeSelectors.selectLocalesAll);
  readonly total$ = this.store.select(localeSelectors.selectLocaleTotal);
  readonly actionStatus$ = this.store.select(
    localeSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(localeSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(localeActions.localeReadRequest({ payload }));

  constructor(private readonly store: Store) {}
}
