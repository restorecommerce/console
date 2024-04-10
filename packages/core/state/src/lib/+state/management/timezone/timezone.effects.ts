import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ENotificationTypes, ITimezone } from '@console-core/types';

import { TimezoneService } from '../../../services';
import { AppFacade } from '../../app';

import * as timezoneActions from './timezone.actions';

@Injectable()
export class TimezoneEffects {
  timezoneReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(timezoneActions.timezoneReadRequest),
      switchMap(({ payload }) =>
        this.timezoneService.read(payload).pipe(
          map((result) => {
            const payload = (
              result?.data?.master_data?.timezone?.Read?.details?.items || []
            )?.map((item) => item?.payload) as ITimezone[];
            return timezoneActions.timezoneReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              timezoneActions.timezoneReadRequestFail({ error: error.message })
            )
          )
        )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(timezoneActions.timezoneReadRequestFail),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error ?? 'unknown error',
            type: ENotificationTypes.Error,
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly timezoneService: TimezoneService
  ) {}
}
