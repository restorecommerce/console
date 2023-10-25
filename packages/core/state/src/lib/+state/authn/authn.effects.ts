import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { ENotificationTypes } from '@console-core/types';

import { AuthnService, UserService } from '../../services';
import { AccountFacade } from '../account';
import { AppFacade } from '../app';

import * as authnActions from './authn.actions';

@Injectable()
export class AuthnEffects {
  signUpRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signUpRequest),
      switchMap(({ payload }) =>
        this.authnService.signUp(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user.Register?.details?.status || {};
            if (code !== 200) {
              return authnActions.signUpFail({
                error: message ?? 'sign up failed',
              });
            }

            return authnActions.signUpSuccess();
          }),
          catchError((error: Error) =>
            of(authnActions.signUpFail({ error: error.message }))
          )
        )
      )
    );
  });

  signUpSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signUpSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'account has been created',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(() => {
          this.appFacade.addNotification({
            content: 'an account activation email has been sent',
            type: ENotificationTypes.INFO,
          });
        }),
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
        this.userService.activate(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user?.Activate?.details?.operationStatus || {};
            if (code !== 200) {
              return authnActions.activateFail({
                error: message ?? 'activation failed',
              });
            }

            return authnActions.activateSuccess();
          }),
          catchError((error: Error) =>
            of(authnActions.activateFail({ error: error.message }))
          )
        )
      )
    );
  });

  activateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.activateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'account has been activated',
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  signInRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signInRequest),
      switchMap(({ payload }) => {
        return this.authnService.signIn(payload).pipe(
          map(
            ({
              access_token: token = null,
              expires_in: expiresIn = null,
              last_login: lastLogin = null,
            }) => {
              if (!token) {
                throw new Error('401');
              }

              return authnActions.signInSuccess({
                payload: { token, expiresIn, lastLogin },
              });
            }
          ),
          catchError((error: Error) => {
            return of(
              authnActions.signInFail({
                error: error.message.includes('401')
                  ? 'sign in failed'
                  : 'unknown error',
              })
            );
          })
        );
      })
    );
  });

  signInSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signInSuccess),
        tap(({ payload: { token } }) => {
          this.accountFacade.userFindByTokenRequest({ token });
        }),
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

  passwordRecoveryRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.passwordRecoveryRequest),
      switchMap(({ payload }) =>
        this.userService.requestPasswordChange(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user?.RequestPasswordChange?.details
                ?.operationStatus || {};
            if (code !== 200) {
              return authnActions.passwordRecoveryFail({
                error: message ?? 'password recovery failed',
              });
            }

            return authnActions.passwordRecoverySuccess();
          }),
          catchError((error: Error) =>
            of(authnActions.passwordRecoveryFail({ error: error.message }))
          )
        )
      )
    );
  });

  passwordRecoverySuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.passwordRecoverySuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'a password recovery email has been sent',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  confirmPasswordRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.confirmPasswordRequest),
      switchMap(({ payload }) =>
        this.userService.confirmPasswordChange(payload).pipe(
          map(({ data }) => {
            const { code, message } =
              data?.identity?.user?.ConfirmPasswordChange?.details
                ?.operationStatus || {};
            if (code !== 200) {
              return authnActions.confirmPasswordFail({
                error: message ?? 'password recovery failed',
              });
            }

            return authnActions.confirmPasswordSuccess();
          }),
          catchError((error: Error) =>
            of(
              authnActions.confirmPasswordFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  confirmPasswordSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.confirmPasswordSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'password has been changed',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  signOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authnActions.signOut),
        tap(() => {
          this.appFacade.addNotification({
            content: 'signed out',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(() => {
          this.router.navigate(
            [ROUTER.pages.main.children.auth.children.signIn.link],
            {
              replaceUrl: true,
            }
          );
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          authnActions.signUpFail,
          authnActions.activateFail,
          authnActions.signInFail,
          authnActions.passwordRecoveryFail,
          authnActions.confirmPasswordFail
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

  resetAuthnState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authnActions.signOut),
      map(() => authnActions.resetAuthnState())
    );
  });

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly actions$: Actions,
    private readonly authnService: AuthnService,
    private readonly userService: UserService,
    private readonly appFacade: AppFacade,
    private readonly accountFacade: AccountFacade
  ) {}
}
