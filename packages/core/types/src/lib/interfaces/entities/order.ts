import {
  IoRestorecommerceOrderOrderState,
  IoRestorecommerceOrderOrder,
  IoRestorecommerceUserUser,
  IoRestorecommerceShopShop,
} from '@console-core/graphql';

import { IBillingAddress } from './billing-address';
import { IMeta } from './meta';
import { IOrderItem } from './order-item';
import { IShippingAddress } from './shipping-address';

export interface IOrder
  extends Omit<
    IoRestorecommerceOrderOrder,
    | 'id'
    | 'shop'
    | 'user'
    | 'customerOrderNr'
    | 'orderState'
    | 'items'
    | 'meta'
    | 'customer'
    | 'shippingAddress'
    | 'billingAddress'
    | '__typename'
  > {
  id: string;
  shop: IoRestorecommerceShopShop;
  user: IoRestorecommerceUserUser;
  customerOrderNr: string;
  orderState: IoRestorecommerceOrderOrderState;
  thumbnailUrl?: string;
  items: IOrderItem[];
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  customer: {
    id: string;
    name: string;
  };
  meta: IMeta;
}
