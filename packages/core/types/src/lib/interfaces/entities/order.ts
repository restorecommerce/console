import {
  IoRestorecommerceOrderOrderState,
  IoRestorecommerceOrderOrder,
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
    | 'orderState'
    | 'meta'
    | '__typename'
  > {
  id: string;
  customer: IoRestorecommerceCustomerCustomer;
  shop: IoRestorecommerceShopShop;
  user: IoRestorecommerceUserUser;
  customerOrderNr: string;
  orderState: IoRestorecommerceOrderOrderState;
  thumbnailUrl?: string;
  meta: IMeta;
}
