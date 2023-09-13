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
            const users = identity?.user?.Mutate?.details?.items;

            if (operationStatus?.code !== 200) {
              throw new Error(operationStatus?.message || 'unknown error');
            }

            if (!users?.length) {
              throw new Error('user not found');
            }

            return accountActions.userMutateSuccess({
              payload: users[0] as IIoRestorecommerceUserUser,
            });
          }),
          catchError((error: Error) =>
            of(accountActions.userMutateFail({ error: error.message }))
          )
        )
      )
    );
  });

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
          accountActions.userFindByTokenFail,
          accountActions.userMutateFail,
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
