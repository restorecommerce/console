import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceUserUser,
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  IUser,
  TOperationStatus,
} from '@console-core/types';

import { UserService, ErrorHandlingService } from '../../../services';
import { AppFacade } from '../../app';

import * as userActions from './iam.actions';

@Injectable()
export class IamEffects {
  userReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userReadRequest),
      exhaustMap(() =>
        this.userService.read({}).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.identity?.user?.Read?.details?.items || []
            )?.map((item) =>
              this.userService.getUserFormatted(item?.payload as IUser)
            ) as IUser[];
            return userActions.userReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(userActions.userReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  userReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.userService
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
                result?.data?.identity?.user?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const first =
                result?.data?.identity?.user?.Read?.details?.items?.pop()
                  ?.payload as IUser;
              const payload = this.userService.getUserFormatted(first);
              return userActions.userReadOneByIdRequestSuccess({ payload });
            }),
            catchError((error: Error) =>
              of(
                userActions.userReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  userCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userCreateRequest),
      switchMap(({ payload }) =>
        this.userService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.identity?.user?.Mutate?.details?.items?.pop()
                ?.payload as IUser;

            return userActions.userCreateSuccess({
              payload: this.userService.getUserFormatted(payload),
            });
          }),
          catchError((error: Error) =>
            of(userActions.userCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  userCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.userCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'user created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.iam.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  userUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userUpdateRequest),
      switchMap(({ payload }) => {
        const items = (payload.items || []).map((item) => {
          return {
            ...item,
            roleAssociations: item.roleAssociations?.map((ra) => ({
              role: ra.role,
              attributes: [
                {
                  id: 'urn:restorecommerce:acs:names:roleScopingEntity',
                  value: 'urn:restorecommerce:acs:model:user.User',
                  attributes: [
                    {
                      id: 'urn:restorecommerce:acs:names:roleScopingInstance',
                      value: ra.attributes,
                    },
                  ],
                },
              ],
            })),
          } as IIoRestorecommerceUserUser;
        });

        return this.userService
          .mutate({
            ...payload,
            items,
          })
          .pipe(
            tap((result) => {
              this.errorHandlingService.checkStatusAndThrow(
                result?.data?.identity?.user?.Mutate?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.identity?.user?.Mutate?.details?.items?.pop()
                  ?.payload as IUser;
              return userActions.userUpdateSuccess({
                payload: this.userService.getUserFormatted(payload),
              });
            }),
            catchError((error: Error) =>
              of(userActions.userUpdateFail({ error: error.message }))
            )
          );
      })
    );
  });

  userUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.userUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'user updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  userChangePasswordRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userChangePasswordRequest),
      switchMap(({ payload }) => {
        return this.userService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return userActions.userChangePasswordSuccess();
          }),
          catchError((error: Error) =>
            of(userActions.userChangePasswordFail({ error: error.message }))
          )
        );
      })
    );
  });

  userChangePasswordSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.userChangePasswordSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'password changed',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  userRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.userRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.userService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return userActions.userRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(userActions.userRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  userRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.userRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'user deleted',
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
          userActions.userReadRequestFail,
          userActions.userReadOneByIdRequestFail,
          userActions.userCreateFail,
          userActions.userUpdateFail,
          userActions.userChangePasswordFail,
          userActions.userRemoveFail
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
    private readonly userService: UserService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
