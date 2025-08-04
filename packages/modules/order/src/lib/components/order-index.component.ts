import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  OrderFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-order',
  template: `
    @if (vm$ | async; as vm) {
    <h3>Orders</h3>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderIndexComponent {
  readonly vm$ = combineLatest({
    selectedOrderId: this.orderFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.orders.children.view.getLink({ id })
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly orderFacade: OrderFacade
  ) {}
}
