import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AUTH_LAYOUT_CONFIG,
  RcSignUpAction,
  RcSignUpComponent,
  RcSignUpState,
} from '@console/rc-ui';
import { combineLatest, map, Observable } from 'rxjs';

import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-sign-up',
  template: `
    @if (signInState$ | async; as state) {
    <rc-sign-up
      [config]="config"
      [state]="state"
      (action)="onSignUpAction($event)"
    />
    }
  `,
  imports: [AsyncPipe, RcSignUpComponent],
})
export class SignUpComponent {
  readonly config = inject(AUTH_LAYOUT_CONFIG);
  readonly router = inject(Router);
  private readonly authnFacade = inject(AuthnFacade);

  loading$ = this.authnFacade.isRequesting$;
  error$ = this.authnFacade.error$;

  readonly signInState$: Observable<RcSignUpState> = combineLatest([
    this.loading$,
    this.error$,
  ]).pipe(
    map(([loading, error]) => {
      return {
        error: error ?? '',
        loading,
      };
    })
  );

  onSignUpAction(action: RcSignUpAction) {
    if (action.type === 'submit') {
      // const { identifier, password } = action.payload;
      // this.authnFacade.signIn({
      //   identifier: identifier,
      //   password: password,
      //   // remember: this.formFields.remember.value
      // });
    }

    if (action.type === 'password-mismatch') {
      // this.router.navigate([
      //   ROUTER.pages.main.children.auth.children.passwordRecovery.link,
      // ]);
    }

    if (action.type === 'cancel') {
      // this.router.navigate([
      //   ROUTER.pages.main.children.auth.children.passwordRecovery.link,
      // ]);
    }
  }
}
