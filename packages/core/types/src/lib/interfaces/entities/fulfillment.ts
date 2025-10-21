import { IoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';

import { IFulfilmentLabel } from './fulfilment-label';
import { IMeta } from './meta';

export interface IFulfillment
  extends Omit<
    IoRestorecommerceFulfillmentFulfillment,
    'id' | 'customerId' | 'shopId' | 'labels' | 'userId' | 'meta' | '__typename'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  labels: IFulfilmentLabel[];
  meta: IMeta;
}
