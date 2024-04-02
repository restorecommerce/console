import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ENotificationTypes, ILocale } from '@console-core/types';

import { LocaleService } from '../../../services';
import { AppFacade } from '../../app';

import * as localeActions from './locale.actions';

@Injectable()
export class LocaleEffects {
  localeReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(localeActions.localeReadRequest),
      switchMap(({ payload }) =>
        this.localeService.read(payload).pipe(
          map((result) => {
            const data = result?.data?.master_data?.locale?.Read?.details;

            return localeActions.localeReadRequestSuccess({
              payload: (data?.items || []).map(
                (item) => item.payload as ILocale
              ),
            });
          }),
          catchError((error: Error) =>
            of(localeActions.localeReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(localeActions.localeReadRequestFail),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error ?? 'unknown error',
            type: ENotificationTypes.ERROR,
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly localeService: LocaleService
  ) {}
}
