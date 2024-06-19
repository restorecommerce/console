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
  IRole,
  TOperationStatus,
} from '@console-core/types';

import { RoleService, ErrorHandlingService } from '../../../../services';
import { AppFacade } from '../../../app';

import * as roleActions from './role.actions';

@Injectable()
export class RoleEffects {
  roleReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(roleActions.roleReadRequest),
      exhaustMap(({ payload }) =>
        this.roleService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.role?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.identity?.role?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IRole[];
            return roleActions.roleReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(roleActions.roleReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  roleReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(roleActions.roleReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.roleService
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
                result?.data?.identity?.role?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.identity?.role?.Read?.details?.items?.pop()
                  ?.payload as IRole;
              return roleActions.roleReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                roleActions.roleReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  roleCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(roleActions.roleCreateRequest),
      switchMap(({ payload }) =>
        this.roleService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.role?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.identity?.role?.Mutate?.details?.items?.pop()
                ?.payload as IRole;
            return roleActions.roleCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(roleActions.roleCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  roleCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roleActions.roleCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'role created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.accessControl.children.roles.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  roleUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(roleActions.roleUpdateRequest),
      switchMap(({ payload }) =>
        this.roleService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.role?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.identity?.role?.Mutate?.details?.items?.pop()
                ?.payload as IRole;
            return roleActions.roleUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(roleActions.roleUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  roleUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roleActions.roleUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'role updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  roleRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(roleActions.roleRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.roleService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.role?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return roleActions.roleRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(roleActions.roleRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  roleRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roleActions.roleRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'role deleted',
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
          roleActions.roleReadRequestFail,
          roleActions.roleReadOneByIdRequestFail,
          roleActions.roleCreateFail,
          roleActions.roleUpdateFail,
          roleActions.roleRemoveFail
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
    private readonly roleService: RoleService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
