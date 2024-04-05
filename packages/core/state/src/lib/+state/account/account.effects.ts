import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ENotificationTypes, IUser } from '@console-core/types';

import { UserService } from '../../services';
import { AppFacade } from '../app';
import { AuthnFacade } from '../authn';
import * as authnActions from '../authn/authn.actions';

import * as accountActions from './account.actions';

@Injectable()
export class AccountEffects {
  userFindRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userFindRequest),
      switchMap(({ payload }) =>
        this.accountService.find(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Find?.details?.operationStatus;
            const payload = identity?.user?.Find?.details?.items?.[0]
              .payload as IUser;

            if (operationStatus?.code !== 200 || !payload) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

            return accountActions.userFindSuccess({
              payload,
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
        this.accountService.findByToken(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const status = identity?.user?.FindByToken?.details?.status;
            const data = identity?.user?.FindByToken?.details?.payload;

            if (status?.code !== 200 || !data) {
              this.authnFacade.signOut();
            }

            return accountActions.userFindByTokenSuccess({
              payload: data as IUser,
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
        this.accountService.mutate(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Mutate?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

            const payload = identity?.user?.Mutate?.details?.items?.[0]
              ?.payload as IUser;

            if (!payload) {
              throw new Error('user not found');
            }

            return accountActions.userMutateSuccess({ payload });
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
        this.accountService.requestEmailChange(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.RequestEmailChange?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

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
        this.accountService.confirmEmailChange(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.ConfirmEmailChange?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

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
        this.accountService.passwordChange(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.ChangePassword?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

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
        this.accountService.remove(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Delete?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

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
    private readonly accountService: UserService,
    private readonly appFacade: AppFacade,
    private readonly authnFacade: AuthnFacade
  ) {}
}
