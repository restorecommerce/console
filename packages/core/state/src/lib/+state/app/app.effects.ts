import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

import { STORE } from '@console-core/config';

import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  addNotification$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.addNotification),
      delay(200),
      switchMap(({ payload }) => of(appActions.showNotification({ payload })))
    );
  });

  clearNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.showNotification),
      delay(STORE.config.app.notifications.delay),
      switchMap(() => of(appActions.clearNotifications()))
    );
  });

  constructor(private readonly actions$: Actions) {}
}
