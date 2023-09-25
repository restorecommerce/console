import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { IIoRestorecommerceUserUser } from '@console-core/graphql';
import { ENotificationTypes } from '@console-core/types';

import { AccountService } from '../../services';
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
        this.accountService.userFind(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Find?.details?.operationStatus;
            const payload = identity?.user?.Find?.details?.items?.[0]
              .payload as IIoRestorecommerceUserUser;

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
        this.accountService.userFindByToken(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const status = identity?.user?.FindByToken?.details?.status;
            const data = identity?.user?.FindByToken?.details?.payload;

            if (status?.code !== 200 || !data) {
              this.authnFacade.signOut();
            }

            return accountActions.userFindByTokenSuccess({
              payload: data as IIoRestorecommerceUserUser,
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
        this.accountService.userMutate(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Mutate?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

            const payload = identity?.user?.Mutate?.details?.items?.[0]
              ?.payload as IIoRestorecommerceUserUser;

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
            type: ENotificationTypes.SUCCESS,
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
        this.accountService.userRequestEmailChange(payload).pipe(
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

  userChangePasswordRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userChangePasswordRequest),
      switchMap(({ payload }) =>
        this.accountService.userChangePassword(payload).pipe(
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
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  userDeleteRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.userDeleteRequest),
      switchMap(({ payload }) =>
        this.accountService.userDelete(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            const operationStatus =
              identity?.user?.Delete?.details?.operationStatus;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

            return accountActions.userDeleteSuccess();
          }),
          catchError((error: Error) =>
            of(accountActions.userDeleteFail({ error: error.message }))
          )
        )
      )
    );
  });

  userDeleteSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.userDeleteSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'account deleted',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(() => {
          this.authnFacade.signOut();
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
          accountActions.userChangePasswordFail,
          accountActions.userDeleteFail
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

  resetAccountState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signOut),
      map(() => accountActions.resetAccountState())
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly accountService: AccountService,
    private readonly appFacade: AppFacade,
    private readonly authnFacade: AuthnFacade
  ) {}
}
