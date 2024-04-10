import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  FulfillmentFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-fulfillment',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Fulfillments</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillmentIndexComponent {
  readonly vm$ = combineLatest({
    selectedFulfillmentId: this.fulfillmentFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.fulfillments.children.view.getLink({ id })
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly fulfillmentFacade: FulfillmentFacade
  ) {}
}
