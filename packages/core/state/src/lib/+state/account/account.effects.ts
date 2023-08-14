import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ENotificationTypes } from '@console-core/types';

import { AccountService } from '../../services';
import { AppFacade } from '../app';
import * as authnActions from '../authn/authn.actions';

import * as accountActions from './account.actions';

@Injectable()
export class AccountEffects {
  findUserByTokenRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(accountActions.findUserByTokenRequest),
      switchMap(({ payload }) =>
        this.accountService.findUserByToken(payload).pipe(
          map((result) => {
            const identity = result?.data?.identity;
            return accountActions.findUserByTokenSuccess({
              payload: {
                ...(identity?.user?.FindByToken?.details?.payload || null),
              },
            });
          }),
          catchError((error: Error) =>
            of(accountActions.findUserByTokenError({ error: error.message }))
          )
        )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(accountActions.findUserByTokenError),
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
    private readonly appFacade: AppFacade
  ) {}
}
