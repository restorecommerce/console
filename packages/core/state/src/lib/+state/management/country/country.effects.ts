import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ENotificationTypes, ICountry } from '@console-core/types';

import { CountryService } from '../../../services';
import { AppFacade } from '../../app';

import * as countryActions from './country.actions';

@Injectable()
export class CountryEffects {
  countryReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryReadRequest),
      switchMap(({ payload }) =>
        this.countryService.read(payload).pipe(
          map((result) => {
            const data = result?.data?.master_data?.country?.Read?.details;

            return countryActions.countryReadRequestSuccess({
              payload: (data?.items || []).map(
                (item) => item.payload
              ) as ICountry[],
            });
          }),
          catchError((error: Error) =>
            of(countryActions.countryReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  countryCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryCreateRequest),
      switchMap(({ payload }) =>
        this.countryService.mutate(payload).pipe(
          map((result) => {
            const data =
              result?.data?.master_data?.country?.Mutate?.details?.items?.[0]
                ?.payload;

            return countryActions.countryCreateSuccess({
              payload: data as ICountry,
            });
          }),
          catchError((error: Error) =>
            of(countryActions.countryCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  countryCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(countryActions.countryCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'country created',
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  countryUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryUpdateRequest),
      switchMap(({ payload }) =>
        this.countryService.mutate(payload).pipe(
          map((result) => {
            const data =
              result?.data?.master_data?.country?.Mutate?.details?.items?.[0]
                ?.payload;

            return countryActions.countryUpdateSuccess({
              payload: data as ICountry,
            });
          }),
          catchError((error: Error) =>
            of(countryActions.countryUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  countryUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(countryActions.countryUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'country updated',
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  countryDeleteRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryDeleteRequest),
      switchMap(({ payload }) => {
        const ids = payload.ids;
        return this.countryService.delete(payload).pipe(
          map(() => {
            return countryActions.countryDeleteSuccess({
              payload: { ids },
            });
          }),
          catchError((error: Error) =>
            of(countryActions.countryDeleteFail({ error: error.message }))
          )
        );
      })
    );
  });

  countryDeleteSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(countryActions.countryDeleteSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'country deleted',
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          countryActions.countryReadRequestFail,
          countryActions.countryCreateFail,
          countryActions.countryUpdateFail
        ),
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
    private readonly countryService: CountryService
  ) {}
}
