import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  FulfillmentFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-fulfillment-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-module-fulfillment-view-details [fulfillment]="vm.fulfillment" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.fulfillmentFacade.setSelectedId(id);
      })
    ),
    fulfillment: this.fulfillmentFacade.selected$.pipe(
      tap((fulfillment) => {
        if (!fulfillment) {
          this.fulfillmentFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.fulfillments.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly fulfillmentFacade: FulfillmentFacade
  ) {}
}
