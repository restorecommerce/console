import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';

import * as timezoneActions from './timezone.actions';
import * as timezoneSelectors from './timezone.selectors';

@Injectable()
export class TimezoneFacade {
  // Selectors
  readonly ids$ = this.store.select(timezoneSelectors.selectTimezoneIds);
  readonly entities$ = this.store.select(
    timezoneSelectors.selectTimezoneEntities
  );
  readonly all$ = this.store.select(timezoneSelectors.selectTimezoneAll);
  readonly total$ = this.store.select(timezoneSelectors.selectTimezoneTotal);
  readonly actionStatus$ = this.store.select(
    timezoneSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(timezoneSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(timezoneActions.timezoneReadRequest({ payload }));

  constructor(private readonly store: Store) {}
}
