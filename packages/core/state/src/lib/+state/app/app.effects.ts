import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

import { STORE } from '@console-core/config';

import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  clearNotification$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.addNotification),
      delay(STORE.config.app.notifications.delay),
      switchMap(() => of(appActions.clearNotification()))
    );
  });

  constructor(private readonly actions$: Actions) {}
}
