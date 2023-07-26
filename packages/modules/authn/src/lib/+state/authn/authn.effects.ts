import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { IoRestorecommerceUserUser } from '@console-core/graphql';
import { AppFacade } from '@console-core/store-app';
import { ENotificationTypes } from '@console-core/types';

import { AuthnService } from '../../services';

import * as authnActions from './authn.actions';

@Injectable()
export class AuthnEffects {
  signUpRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signUpRequest),
      switchMap(({ payload }) =>
        this.authnService.register(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user.Register?.details?.status || {};
            if (code !== 200) {
              return authnActions.signUpError({
                error: message ?? 'sign up failed',
              });
            }

            return authnActions.signUpSuccess();
          }),
          catchError((error) => of(authnActions.signUpError({ error })))
        )
      )
    );
  });

  signUpSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signUpSuccess),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  activateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.activateRequest),
      switchMap(({ payload }) =>
        this.authnService.activate(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user?.Activate?.details?.operationStatus || {};
            if (code !== 200) {
              return authnActions.activateError({
                error: message ?? 'activation failed',
              });
            }

            return authnActions.activateSuccess();
          }),
          catchError((error) => of(authnActions.activateError({ error })))
        )
      )
    );
  });

  activateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.activateSuccess),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  signInRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signInRequest),
      switchMap(({ payload }) =>
        this.authnService.login(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user.Login?.details?.status || {};
            const { payload } = data?.identity?.user?.Login?.details || {};
            if (code !== 200 || !payload) {
              return authnActions.signInError({
                error: message ?? 'sign in failed',
              });
            }

            return authnActions.setUser({
              user: payload as IoRestorecommerceUserUser,
            });
          }),
          catchError((error) => of(authnActions.signInError({ error })))
        )
      )
    );
  });

  signInSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signInSuccess),
        switchMap(() => this.activatedRoute.queryParams.pipe(take(1))),
        map(
          (params: Params) =>
            params['url'] || ROUTER.pages.main.children.home.link
        ),
        tap((url: string) => {
          this.router.navigate([url]);
        })
      );
    },
    { dispatch: false }
  );

  setUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.setUser),
      map(() => authnActions.signInSuccess())
    );
  });

  signOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signOut),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          authnActions.signUpError,
          authnActions.activateError,
          authnActions.signInError
        ),
        map(({ error }) => {
          return typeof error === 'object'
            ? { error: error['message'] ?? 'Unknown error' }
            : { error };
        }),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error,
            type: ENotificationTypes.ERROR,
          });
          console.error(error);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly authnService: AuthnService
  ) {}
}
