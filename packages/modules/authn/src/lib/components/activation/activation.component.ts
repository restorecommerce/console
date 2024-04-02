import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AuthnFacade, RouterFacade } from '@console-core/state';

@Component({
  selector: 'app-authn-activation',
  template: `
    <ng-container *ngIf="handleActivation$ | async">
      <rc-page-authn-activation />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivationComponent {
  readonly handleActivation$ = this.routerFacade.params$.pipe(
    tap((params) => {
      const { code: activationCode, identifier } = params;
      this.authnFacade.activate({
        activationCode,
        identifier,
      });
    })
  );

  constructor(
    private readonly authnFacade: AuthnFacade,
    private readonly routerFacade: RouterFacade
  ) {}
}
