import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, of, switchMap, take, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';

import * as securityActions from './security.actions';

@Injectable()
export class SecurityEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(securityActions.login),
      delay(2000),
      switchMap(() => of(securityActions.loginSuccess()))
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(securityActions.loginSuccess),
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

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(securityActions.logout),
        tap(() => {
          this.router.navigate([
            ROUTER.pages.main.children.auth.children.signIn.link,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly actions$: Actions
  ) {}
}
