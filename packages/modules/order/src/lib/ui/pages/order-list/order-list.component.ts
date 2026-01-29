import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { OrderListFacade } from '../../../store';
@Component({
  selector: 'app-module-order-list',
  template: `
    <rc-resource-list
      title="Orders"
      [items]="items"
      [getId]="getId"
      [total]="items.length"
      (itemSelected)="onSelect($event)"
    >
      <ng-template
        #itemTemplate
        let-order
      >
        <div class="p-2">
          <div class="row justify-between">
            <div class="col">
              <div class="title">{{ order.customerName || '—' }}</div>
              <div class="muted small">
                {{ order.displayNumber }} · @if (order.createdAt) {
                <span>{{ order.createdAt | date : 'medium' }}</span>
                }
              </div>
            </div>
            <div class="col right">
              <div class="badge">{{ order.status }}</div>
              <div class="muted small">
                {{ order.total.amount }} - {{ order.total.currency }}
              </div>
            </div>
          </div>

          @if (order.email) {
          <div class="muted small">
            {{ order.email }}
          </div>
          }
        </div>
      </ng-template>
    </rc-resource-list>
  `,
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

  items = this.orderFacade.orders();

  onSelect(order: { id: string }): void {
    this.router.navigate([order.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
