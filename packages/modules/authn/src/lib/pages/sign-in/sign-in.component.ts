import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AUTH_LAYOUT_CONFIG,
  RcSignInAction,
  RcSignInComponent,
  RcSignInState,
} from '@console/rc-ui';
import { combineLatest, map, Observable } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-sign-in',
  template: `
    @if (signInState$ | async; as state) {
    <rc-sign-in
      [config]="config"
      [state]="state"
      (action)="onSignInAction($event)"
    />
    }
  `,
  imports: [AsyncPipe, RcSignInComponent],
})
export class SignInComponent {
  readonly config = inject(AUTH_LAYOUT_CONFIG);
  readonly router = inject(Router);
  private readonly authnFacade = inject(AuthnFacade);

  loading$ = this.authnFacade.isRequesting$;
  error$ = this.authnFacade.error$;

  readonly signInState$: Observable<RcSignInState> = combineLatest([
    this.loading$,
    this.error$,
  ]).pipe(
    map(([loading, error]) => {
      console.log('LOADING', loading);
      return {
        error: error ?? '',
        loading,
      };
    })
  );

  onSignInAction(action: RcSignInAction) {
    if (action.type === 'submit') {
      const { identifier, password } = action.payload;

      this.authnFacade.signIn({
        identifier: identifier,
        password: password,
        // remember: this.formFields.remember.value
      });
    }

    if (action.type === 'forgot-password') {
      this.router.navigate([
        ROUTER.pages.main.children.auth.children.passwordRecovery.link,
      ]);
    }
  }
}
