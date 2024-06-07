import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
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
      exhaustMap(({ payload }) =>
        this.userService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.identity?.user?.Read?.details?.items || []
            )?.map((item) => {
              const user = item?.payload as IUser;
              user.fullName = `${user.firstName} ${user.lastName}`;
              return user;
            }) as IUser[];
            return userActions.userReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(userActions.userReadRequestFail({ error: error.message }))
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
            payload.fullName = `${payload.firstName} ${payload.lastName}`;
            return userActions.userCreateSuccess({ payload });
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
            payload.fullName = `${payload.firstName} ${payload.lastName}`;
            return userActions.userUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(userActions.userUpdateFail({ error: error.message }))
          )
        )
      )
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
          userActions.userCreateFail,
          userActions.userUpdateFail,
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
