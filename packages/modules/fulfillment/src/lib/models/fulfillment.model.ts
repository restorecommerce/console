import { Label } from './fulfiillment-label.model';
import { Parcel } from './fulfillment-parcel.model';
import { FulfillmentState } from './fulfillment-state.model';
import { Money } from './money.model';

export interface Fulfillment {
  id: string;
  state: FulfillmentState;

  createdAt: Date;
  modifiedAt?: Date;

  parcels: Parcel[];
  labels: Label[];

  shippingCost?: Money;

  orderId?: string;

  customerId?: string;
  userId?: string;
  shopId?: string;
}
