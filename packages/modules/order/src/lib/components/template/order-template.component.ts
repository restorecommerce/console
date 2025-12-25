import { AsyncPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  RcResourcePageLayoutComponent,
  RcResourceListComponent,
} from '@console/rc-ui';
import { combineLatest, map } from 'rxjs';

import { OrderFacade } from '@console-core/state';
import { IOrderItem } from '@console-core/types';

@Component({
  selector: 'app-module-order-template',
  templateUrl: './order-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    DatePipe,
    RcResourceListComponent,
    RcResourcePageLayoutComponent,
    RcResourceListComponent,
    RouterOutlet,
  ],
  styles: [
    `
      .title {
        font-weight: 600;
      }
      .muted {
        opacity: 0.7;
      }
      .small {
        font-size: 12px;
      }
    `,
  ],
})
export class OrderTemplateComponent implements OnInit {
  private readonly orderFacade = inject(OrderFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly vm$ = combineLatest({
    items: this.orderFacade.all$.pipe(
      map((orders) => {
        return orders.map((order) => ({
          id: order.id,
          state: order.orderState,
          createdAt: order.meta?.created,
          customerName: order.shippingAddress.contact.name,
          email: order.notificationEmail ?? order.user?.email,
          itemsCount: Array.isArray(order.items)
            ? order.items.reduce(
                (s: number, i: IOrderItem) => s + Number(i.quantity || 0),
                0
              )
            : 0,
        }));
      })
    ),
  });

  ngOnInit(): void {
    this.orderFacade.read({});
  }

  onSelect(order: { id: string }): void {
    // TODO Use the route constants here!
    this.router.navigate([order.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
