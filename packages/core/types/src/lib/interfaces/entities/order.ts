import {
  IoRestorecommerceOrderOrderState,
  IIoRestorecommerceOrderOrder,
  IoRestorecommerceFulfillmentState,
  IoRestorecommerceInvoicePaymentState,
} from '@console-core/graphql';

import { IMeta } from './meta';

export interface IOrder
  extends Omit<
    IIoRestorecommerceOrderOrder,
    | 'id'
    | 'customerId'
    | 'shopId'
    | 'userId'
    | 'customerOrderNr'
    | 'paymentState'
    | 'fulfillmentState'
    | 'orderState'
    | 'meta'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  orderState: IoRestorecommerceOrderOrderState;
  paymentState: IoRestorecommerceInvoicePaymentState;
  fulfillmentState: IoRestorecommerceFulfillmentState;
  customerOrderNr: string;
  meta: IMeta;
}