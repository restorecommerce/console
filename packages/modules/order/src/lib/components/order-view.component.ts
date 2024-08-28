import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  OrderFacade,
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-order-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-order-view
        [order]="vm.order"
        [products]="vm.products"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.orderFacade.setSelectedId(id);
        this.orderFacade.readOneById({ id });
      })
    ),
    order: this.orderFacade.selected$.pipe(
      tap((order) => {
        if (!order) {
          this.orderFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.orders.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    products: this.productFacade.all$,
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private readonly orderFacade: OrderFacade
  ) {}
}
