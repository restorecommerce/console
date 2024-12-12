import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { IFulfillment } from '@console-core/types';

@Component({
  selector: 'app-module-fulfillment-view-details',
  templateUrl: './fulfillment-view-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentViewDetailsComponent {
  @Input({ required: true }) fulfillment!: IFulfillment;

  orderRouter = ROUTER.pages.main.children.orders.children;
  productRouter = ROUTER.pages.main.children.products.children;
}
