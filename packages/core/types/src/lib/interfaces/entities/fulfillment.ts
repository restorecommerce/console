import {
  IoRestorecommerceFulfillmentFulfillment,
  IoRestorecommerceFulfillmentItem,
  IoRestorecommerceFulfillmentPackaging,
  IoRestorecommerceFulfillmentParcel,
} from '@console-core/graphql';

import { IFulfilmentLabel } from './fulfilment-label';
import { IMeta } from './meta';
import { IProductPackage } from './package';

interface IFulfilmentItem
  extends Omit<IoRestorecommerceFulfillmentItem, 'id' | 'name' | 'quantity'> {
  id: string;
  name: string;
  quantity: number;
}

interface IFulfilmentParcel
  extends Omit<IoRestorecommerceFulfillmentParcel, 'id' | 'items' | 'package'> {
  id: string;
  items: IFulfilmentItem[];
  package: IProductPackage;
}
interface IFulfilmentPackaging
  extends Omit<IoRestorecommerceFulfillmentPackaging, 'parcels'> {
  parcels: IFulfilmentParcel[];
}

export interface IFulfillment
  extends Omit<
    IoRestorecommerceFulfillmentFulfillment,
    | 'id'
    | 'customerId'
    | 'shopId'
    | 'packaging'
    | 'labels'
    | 'userId'
    | 'meta'
    | '__typename'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  labels: IFulfilmentLabel[];
  packaging: IFulfilmentPackaging;
  meta: IMeta;
}
