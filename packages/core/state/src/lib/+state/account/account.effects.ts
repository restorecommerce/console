import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ENotificationTypes, IUser } from '@console-core/types';

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

            if (!identity?.user?.FindByToken?.details?.payload) {
              this.authnFacade.signOut();
            }

            return accountActions.userFindByTokenSuccess({
              payload: {
                ...(identity?.user?.FindByToken?.details?.payload || null),
              },
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
            const users = identity?.user?.Mutate?.details?.items;

            if (!users?.length) {
              throw new Error('user not found');
            }

            return accountActions.userMutateSuccess({
              payload: users[0] as IUser,
            });
          }),
          catchError((error: Error) =>
            of(accountActions.userMutateFail({ error: error.message }))
          )
        )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          accountActions.userFindByTokenFail,
          accountActions.userMutateFail
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
