import { FulfillmentParcelVM } from './fulfillment-parcel.model';
import { FulfillmentState } from './fulfillment-state.model';
import { Money } from './money.model';

export interface Fulfillment {
  id: string;
  state: FulfillmentState;

  createdAt: Date;
  modifiedAt?: Date;

  parcels: FulfillmentParcelVM[];

  shippingCost?: Money;

  orderId?: string;

  customerId?: string;
  userId?: string;
  shopId?: string;
}
