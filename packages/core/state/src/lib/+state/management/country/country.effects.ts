import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
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
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.countries.children.edit.getLink(
              { id: payload.id }
            )
          );
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

  countryRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.countryService.delete({ ids: [id] }).pipe(
          map(() => {
            return countryActions.countryRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(countryActions.countryRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  countryRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(countryActions.countryRemoveSuccess),
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
          countryActions.countryUpdateFail,
          countryActions.countryRemoveFail
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
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly countryService: CountryService
  ) {}
}
