import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';

import * as timezoneActions from './timezone.actions';
import * as timezoneSelectors from './timezone.selectors';

@Injectable()
export class TimezoneFacade {
  // Selectors
  readonly timezoneIds$ = this.store.select(
    timezoneSelectors.selectTimezoneIds
  );
  readonly timezoneEntities$ = this.store.select(
    timezoneSelectors.selectTimezoneEntities
  );
  readonly allTimezones$ = this.store.select(
    timezoneSelectors.selectAllTimezones
  );
  readonly timezoneTotal$ = this.store.select(
    timezoneSelectors.selectTimezoneTotal
  );
  readonly actionStatus$ = this.store.select(
    timezoneSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(timezoneSelectors.selectError);

  // Actions
  readonly timezoneReadRequest = (
    payload: IIoRestorecommerceResourcebaseReadRequest
  ) => this.store.dispatch(timezoneActions.timezoneReadRequest({ payload }));

  constructor(private readonly store: Store) {}
}
