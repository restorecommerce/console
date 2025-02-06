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
  IOrganization,
  TOperationStatus,
} from '@console-core/types';

import { OrganizationService, ErrorHandlingService } from '../../../services';
import { AppFacade } from '../../app';

import * as organizationActions from './organization.actions';
import { concatLatestFrom } from '@ngrx/operators';
import { OrganizationFacade } from './organization.facade';

@Injectable()
export class OrganizationEffects {
  organizationReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationReadRequest),
      exhaustMap(({ payload }) =>
        this.organizationService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const responseData =
              result?.data?.master_data?.organization?.Read?.details?.items ||
              [];

            const payload = responseData.map((item) => ({
              ...item?.payload,
              isLeaf: !responseData.some(
                (child) => child.payload?.parentId === item.payload?.id
              ),
            })) as IOrganization[];

            return organizationActions.organizationReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              organizationActions.organizationReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  organizationReadParentsRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationReadParentsRequest),
      exhaustMap(({ payload }) => {
        const payloadWithFilters = {
          ...payload,
          filters: [
            {
              filters: [
                ...(payload.filters || []),
                {
                  field: 'parent_id',
                  value: '',
                  type: IoRestorecommerceResourcebaseFilterValueType.String,
                  operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                },
              ],
            },
          ],
        };
        return this.organizationService.read(payloadWithFilters).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const responseData =
              result?.data?.master_data?.organization?.Read?.details?.items ||
              [];

            const payload = responseData.map((item) => ({
              ...item?.payload,
              isLeaf: !responseData.some(
                (child) => child.payload?.parentId === item.payload?.id
              ),
            })) as IOrganization[];

            return organizationActions.organizationReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              organizationActions.organizationReadParentsRequestFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  organizationReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.organizationService
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
                result?.data?.master_data?.organization?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.organization?.Read?.details?.items?.pop()
                  ?.payload as IOrganization;
              return organizationActions.organizationReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                organizationActions.organizationReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  organizationCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationCreateRequest),
      switchMap(({ payload }) =>
        this.organizationService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.organization?.Mutate?.details?.items?.pop()
                ?.payload as IOrganization;
            return organizationActions.organizationCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              organizationActions.organizationCreateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  organizationCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationActions.organizationCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'organization created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.organizations.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  organizationUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationUpdateRequest),
      switchMap(({ payload }) =>
        this.organizationService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.organization?.Mutate?.details?.items?.pop()
                ?.payload as IOrganization;
            return organizationActions.organizationUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              organizationActions.organizationUpdateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  organizationUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationActions.organizationUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'organization updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  organizationRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationActions.organizationRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.organizationService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return organizationActions.organizationRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              organizationActions.organizationRemoveFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  organizationRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationActions.organizationRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'organization deleted',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  handleOrganizationChangedNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          organizationActions.setSelectedGlobalOrganizationId,
          organizationActions.selectedGlobalOrganizationHistory,
          organizationActions.setPreviousSelectedGlobalOrganizationHistory,
          organizationActions.cancelSelection
        ),
        concatLatestFrom(() => [
          this.organizationFacade.globalOrganizationLeaf$,
          this.organizationFacade.globalOrganization$,
        ]),
        tap(([, leafOrganization, parentOrganization]) => {
          const organization = leafOrganization || parentOrganization;
          this.appFacade.addNotification({
            content: `Organization changed to ${organization?.name}`,
            type: ENotificationTypes.Info,
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
          organizationActions.organizationReadRequestFail,
          organizationActions.organizationReadParentsRequestFail,
          organizationActions.organizationReadOneByIdRequestFail,
          organizationActions.organizationCreateFail,
          organizationActions.organizationUpdateFail,
          organizationActions.organizationRemoveFail
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
    private readonly organizationService: OrganizationService,
    private readonly organizationFacade: OrganizationFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
