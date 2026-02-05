import { FulfillmentState } from './fulfillment-state.model';
import { Money } from './money.model';

export interface FulfillmentListItem {
  id: string;

  state: FulfillmentState;

  parcelCount: number;
  itemCount: number;

  shippingCost?: Money;

  createdAt: Date;

  orderId?: string;
}
