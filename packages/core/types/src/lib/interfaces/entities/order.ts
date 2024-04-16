import {
  IoRestorecommerceOrderOrderState,
  IoRestorecommerceOrderOrder,
  IoRestorecommerceFulfillmentState,
  IoRestorecommerceInvoicePaymentState,
  IoRestorecommerceUserUser,
  IoRestorecommerceShopShop,
  IoRestorecommerceCustomerCustomer,
} from '@console-core/graphql';

import { IMeta } from './meta';

export interface IOrder
  extends Omit<
    IoRestorecommerceOrderOrder,
    | 'id'
    | 'customer'
    | 'shop'
    | 'user'
    | 'customerOrderNr'
    | 'paymentState'
    | 'fulfillmentState'
    | 'orderState'
    | 'meta'
  > {
  id: string;
  customer: IoRestorecommerceCustomerCustomer;
  shop: IoRestorecommerceShopShop;
  user: IoRestorecommerceUserUser;
  customerOrderNr: string;
  orderState: IoRestorecommerceOrderOrderState;
  paymentState: IoRestorecommerceInvoicePaymentState;
  fulfillmentState: IoRestorecommerceFulfillmentState;
  meta: IMeta;
}
