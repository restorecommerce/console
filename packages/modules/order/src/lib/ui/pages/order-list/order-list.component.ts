import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { OrderListFacade } from '../../../store';
import { EOrderStatusBadgeComponent } from '../../components/order-state-badge/order-state-badge.component';
@Component({
  selector: 'app-module-order-list',
  templateUrl: './order-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderListFacade],
  imports: [
    DatePipe,
    CurrencyPipe,
    RcResourceListComponent,
    EOrderStatusBadgeComponent,
  ],
})
export class OrderListComponent implements OnInit {
  private readonly orderFacade = inject(OrderListFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  items = this.orderFacade.orders;

  ngOnInit(): void {
    this.orderFacade.loadList();
  }

  onSelect(order: { id: string }): void {
    this.router.navigate([order.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
