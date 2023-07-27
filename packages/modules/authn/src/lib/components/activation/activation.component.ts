import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { RouterFacade } from '@console-core/store-router';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-activation',
  template: `
    <ng-container *ngIf="handleActivation$ | async">
      <rc-page-authn-activation [vm]="vm$ | async" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivationComponent {
  readonly vm$ = combineLatest({
    isLoading: this.authnFacade.isLoading$,
    error: this.authnFacade.error$,
  });

  readonly handleActivation$ = this.routerFacade.params$.pipe(
    tap((params) => {
      const { activationCode, identifier } = params;
      this.authnFacade.activate({
        activationCode,
        identifier,
      });
    })
  );

  constructor(
    private readonly routerFacade: RouterFacade,
    private readonly authnFacade: AuthnFacade
  ) {}
}
