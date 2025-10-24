import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  ICountry,
  TOperationStatus,
} from '@console-core/types';

import { CountryService, ErrorHandlingService } from '../../../services';
import { withLatestOrganizationData } from '../../../utils';
import { AppFacade } from '../../app';
import { OrganizationContextFacade } from '../../organization-context';

import * as countryActions from './country.actions';

@Injectable()
export class CountryEffects {
  countryReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      withLatestOrganizationData(
        this.organizationContextFacade,
        countryActions.countryReadRequest.type
      ),
      exhaustMap(([_action, _organization]) =>
        this.countryService.read({}).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.country?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.master_data?.country?.Read?.details?.items || []
            )?.map((item) => item?.payload) as ICountry[];
            return countryActions.countryReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(countryActions.countryReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  countryReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.countryReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.countryService
          .read({
            filters: [
              {
                filters: [
                  {
                    field: 'id',
                    value: payload.id,
                    type: IoRestorecommerceResourcebaseFilterValueType.String,
                    operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                  },
                ],
              },
            ],
            limit: 1,
          })
          .pipe(
            tap((result) => {
              this.errorHandlingService.checkStatusAndThrow(
                result?.data?.master_data?.country?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.country?.Read?.details?.items?.pop()
                  ?.payload as ICountry;
              return countryActions.countryReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                countryActions.countryReadOneByIdRequestFail({
                  error: error.message,
                })
              )
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
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.country?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
                ?.payload as ICountry;
            return countryActions.countryCreateSuccess({ payload });
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
            type: ENotificationTypes.Success,
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
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.country?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
                ?.payload as ICountry;
            return countryActions.countryUpdateSuccess({ payload });
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
            type: ENotificationTypes.Success,
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
        return this.countryService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.country?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
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
            type: ENotificationTypes.Success,
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
          countryActions.countryReadOneByIdRequestFail,
          countryActions.countryCreateFail,
          countryActions.countryUpdateFail,
          countryActions.countryRemoveFail
        ),
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
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly countryService: CountryService,
    private readonly organizationContextFacade: OrganizationContextFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
