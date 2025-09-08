import {
  IoRestorecommerceOrderOrderState,
  IoRestorecommerceOrderOrder,
  IoRestorecommerceUserUser,
  IoRestorecommerceShopShop,
} from '@console-core/graphql';

import { IMeta } from './meta';

export interface IOrder
  extends Omit<
    IoRestorecommerceOrderOrder,
    | 'id'
    | 'shop'
    | 'user'
    | 'customerOrderNr'
    | 'orderState'
    | 'meta'
    | 'customer'
    | '__typename'
  > {
  id: string;
  shop: IoRestorecommerceShopShop;
  user: IoRestorecommerceUserUser;
  customerOrderNr: string;
  orderState: IoRestorecommerceOrderOrderState;
  thumbnailUrl?: string;
  customer: {
    id: string;
    name: string;
  };
  meta: IMeta;
}
