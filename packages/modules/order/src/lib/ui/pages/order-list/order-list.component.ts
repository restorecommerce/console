import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { OrderListFacade } from '../../../store';
@Component({
  selector: 'app-module-order-list',
  templateUrl: './order-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderListFacade],
  imports: [DatePipe, RcResourceListComponent],
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
export class OrderListComponent {
  private readonly orderFacade = inject(OrderListFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  items = this.orderFacade.orders;

  onSelect(order: { id: string }): void {
    this.router.navigate([order.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
