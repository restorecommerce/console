import { IoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IFulfillment
  extends Omit<
    IoRestorecommerceFulfillmentFulfillment,
    'id' | 'customerId' | 'shopId' | 'userId' | 'meta' | '__typename'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  meta: IMeta;
}
