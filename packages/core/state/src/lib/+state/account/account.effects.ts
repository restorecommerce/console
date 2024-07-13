import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import {
  ENotificationTypes,
  IUser,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, UserService } from '../../services';
import { AppFacade } from '../app';
import { AuthnFacade } from '../authn';
import * as authnActions from '../authn/authn.actions';

import * as accountActions from './account.actions';

@Injectable()
export class AccountEffects {
  userFindRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userFindRequest),
      exhaustMap(({ payload }) =>
        this.userService.find(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Find?.details?.operationStatus;
            const payload = identity?.user?.Find?.details?.items?.pop()
              ?.payload as IUser;
            this.errorHandlingService.checkStatusAndThrow(
              operationStatus as TOperationStatus
            );
            return payload;
          }),
          map((payload) => {
            return accountActions.userFindSuccess({
              payload: this.userService.getUserFormatted(payload),
            });
          }),
          catchError((error: Error) =>
            of(accountActions.userFindFail({ error: error.message }))
          )
        )
      )
    );
  });

  userFindByTokenRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userFindByTokenRequest),
      switchMap(({ payload }) =>
        this.userService.findByToken(payload).pipe(
          tap((result) => {
            const identity = result?.data?.identity;
            const status = identity?.user?.FindByToken?.details?.status;
            const data = identity?.user?.FindByToken?.details?.payload;

            if (status?.code !== 200 || !data?.id) {
              return [
                this.authnFacade.signOut(false),
                this.appFacade.addNotification({
                  content: 'token expired',
                  type: ENotificationTypes.Error,
                }),
              ];
            }

            return result;
          }),
          map((result) => {
            const payload = result?.data?.identity?.user?.FindByToken?.details
              ?.payload as IUser;
            return accountActions.userFindByTokenSuccess({
              payload: this.userService.getUserFormatted(payload),
            });
          }),
          catchError((error: Error) =>
            of(accountActions.userFindByTokenFail({ error: error.message }))
          )
        )
      )
    );
  });

  userMutateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userMutateRequest),
      switchMap(({ payload }) =>
        this.userService.mutate(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Mutate?.details?.operationStatus;
            const payload = identity?.user?.Mutate?.details?.items?.pop()
              ?.payload as IUser;
            this.errorHandlingService.checkStatusAndThrow(
              operationStatus as TOperationStatus
            );
            return payload;
          }),
          map((payload) => {
            return accountActions.userMutateSuccess({
              payload: this.userService.getUserFormatted(payload),
            });
          }),
          catchError((error: Error) =>
            of(accountActions.userMutateFail({ error: error.message }))
          )
        )
      )
    );
  });

  userMutateRequestSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userMutateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'account updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  userChangeEmailRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userChangeEmailRequest),
      switchMap(({ payload }) =>
        this.userService.requestEmailChange(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.RequestEmailChange?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return accountActions.userChangeEmailSuccess();
          }),
          catchError((error: Error) =>
            of(accountActions.userChangeEmailFail({ error: error.message }))
          )
        )
      )
    );
  });

  userChangeEmailSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userChangeEmailSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'email change has been requested',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  userConfirmEmailChangeRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userConfirmEmailChangeRequest),
      switchMap(({ payload }) =>
        this.userService.confirmEmailChange(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.ConfirmEmailChange?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return accountActions.userConfirmEmailChangeSuccess();
          }),
          catchError((error: Error) =>
            of(
              accountActions.userConfirmEmailChangeFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  userConfirmEmailChangeSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userConfirmEmailChangeSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'email has been changed',
            type: ENotificationTypes.Success,
          });
        }),
        tap(() => {
          this.authnFacade.signOut();
        })
      );
    },
    { dispatch: false }
  );

  userChangePasswordRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userChangePasswordRequest),
      switchMap(({ payload }) =>
        this.userService.passwordChange(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.ChangePassword?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return accountActions.userChangePasswordSuccess();
          }),
          catchError((error: Error) =>
            of(accountActions.userChangePasswordFail({ error: error.message }))
          )
        )
      )
    );
  });

  userChangePasswordSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userChangePasswordSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'password has been changed',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  userRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userRemoveRequest),
      switchMap(({ payload }) =>
        this.userService.remove(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.identity?.user?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return accountActions.userRemoveSuccess();
          }),
          catchError((error: Error) =>
            of(accountActions.userRemoveFail({ error: error.message }))
          )
        )
      )
    );
  });

  userRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'account deleted',
            type: ENotificationTypes.Success,
          });
        }),
        tap(() => {
          this.authnFacade.signOut(false);
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          accountActions.userFindFail,
          accountActions.userFindByTokenFail,
          accountActions.userMutateFail,
          accountActions.userChangeEmailFail,
          accountActions.userConfirmEmailChangeFail,
          accountActions.userChangePasswordFail,
          accountActions.userRemoveFail
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

  resetAccountState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signOutSuccess, authnActions.signOutFail),
      map(() => accountActions.resetAccountState())
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly authnFacade: AuthnFacade,
    private readonly userService: UserService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
