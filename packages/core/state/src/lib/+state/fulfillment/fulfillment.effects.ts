import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ENotificationTypes,
  IFulfillment,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, FulfillmentService } from '../../services';
import { AppFacade } from '../app';

import * as fulfillmentActions from './fulfillment.actions';
import {
  FulfillmentFacade,
  OrganizationFacade,
  withLatestOrganizationData,
} from '@console-core/state';
import { IoRestorecommerceResourcebaseFilterOperation } from '@console-core/graphql';

@Injectable()
export class FulfillmentEffects {
  fulfillmentReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      withLatestOrganizationData(
        this.organizationFacade,
        fulfillmentActions.fulfillmentReadRequest.type
      ),
      switchMap(([action, organization]) =>
        this.fulfillmentService
          .read({
            filters: [
              {
                filters: [
                  {
                    field: 'meta.owners[*].attributes[**].value',
                    operation: IoRestorecommerceResourcebaseFilterOperation.In,
                    value: organization,
                  },
                ],
              },
            ],
          })
          .pipe(
            tap((result) => {
              this.errorHandlingService.checkStatusAndThrow(
                result?.data?.fulfillment?.fulfillment?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload = (
                result?.data?.fulfillment?.fulfillment?.Read?.details?.items ||
                []
              )?.map((item) => item?.payload) as IFulfillment[];
              return fulfillmentActions.fulfillmentReadRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                fulfillmentActions.fulfillmentReadRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  fulfillmentCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fulfillmentActions.fulfillmentCreateRequest),
      switchMap(({ payload }) =>
        this.fulfillmentService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.fulfillment?.fulfillment?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.fulfillment?.fulfillment?.Mutate?.details?.items?.pop()
                ?.payload as IFulfillment;
            return fulfillmentActions.fulfillmentCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              fulfillmentActions.fulfillmentCreateFail({ error: error.message })
            )
          )
        )
      )
    );
  });

  fulfillmentCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fulfillmentActions.fulfillmentCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'fulfillment created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.fulfillments.children.edit.getLink({
              id: payload.id,
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  fulfillmentUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fulfillmentActions.fulfillmentUpdateRequest),
      switchMap(({ payload }) =>
        this.fulfillmentService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.fulfillment?.fulfillment?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.fulfillment?.fulfillment?.Mutate?.details?.items?.pop()
                ?.payload as IFulfillment;
            return fulfillmentActions.fulfillmentUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              fulfillmentActions.fulfillmentUpdateFail({ error: error.message })
            )
          )
        )
      )
    );
  });

  fulfillmentUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fulfillmentActions.fulfillmentUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'fulfillment updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  fulfillmentRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fulfillmentActions.fulfillmentRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.fulfillmentService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.fulfillment?.fulfillment?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return fulfillmentActions.fulfillmentRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              fulfillmentActions.fulfillmentRemoveFail({ error: error.message })
            )
          )
        );
      })
    );
  });

  fulfillmentRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fulfillmentActions.fulfillmentRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'fulfillment deleted',
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
          fulfillmentActions.fulfillmentReadRequestFail,
          fulfillmentActions.fulfillmentCreateFail,
          fulfillmentActions.fulfillmentUpdateFail,
          fulfillmentActions.fulfillmentRemoveFail
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

  fulfillmentSubmitRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fulfillmentActions.fulfillmentSubmitRequest),
      switchMap(({ payload }) =>
        this.fulfillmentService
          .submit({
            items: [payload],
          })
          .pipe(
            tap((result) => {
              this.errorHandlingService.checkStatusAndThrow(
                result?.data?.fulfillment?.fulfillment?.Submit?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.fulfillment?.fulfillment?.Submit?.details?.items?.pop()
                  ?.payload as IFulfillment;

              return fulfillmentActions.fulfillmentSubmitSuccess({ payload });
            }),
            catchError((error: Error) =>
              of(
                fulfillmentActions.fulfillmentSubmitFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  fulfillmentSubmitedSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fulfillmentActions.fulfillmentSubmitSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'fulfillment submitted',
            type: ENotificationTypes.Success,
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
    private readonly organizationFacade: OrganizationFacade,
    private readonly fulfilmentFacade: FulfillmentFacade,
    private readonly fulfillmentService: FulfillmentService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
