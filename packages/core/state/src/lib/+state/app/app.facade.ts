import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TNewNotification } from '@console-core/types';

import * as appActions from './app.actions';
import * as appSelectors from './app.selectors';

@Injectable()
export class AppFacade {
  // Selectors
  readonly notifications$ = this.store.select(appSelectors.selectNotifications);
  readonly actionStatus$ = this.store.select(appSelectors.selectActionStatus);
  readonly error$ = this.store.select(appSelectors.selectError);

  // Actions
  readonly addNotification = (payload: TNewNotification) => {
    this.store.dispatch(appActions.addNotification({ payload }));
  };

  constructor(private readonly store: Store) {}
}
