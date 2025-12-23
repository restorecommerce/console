import { AsyncPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  RcResourcePageLayoutComponent,
  RcResourceListComponent,
} from '@console/rc-ui';
import { combineLatest, map } from 'rxjs';

import { OrderFacade, RouterFacade } from '@console-core/state';
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
  private readonly routerFacade = inject(RouterFacade);

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
    selectedOrderId: this.orderFacade.selectedId$,
    selectedOrder: this.orderFacade.selected$,
  });

  ngOnInit(): void {
    this.orderFacade.read({});
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
