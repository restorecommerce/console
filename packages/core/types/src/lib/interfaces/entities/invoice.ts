import { IoRestorecommerceInvoiceInvoice } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IInvoice
  extends Omit<
    IoRestorecommerceInvoiceInvoice,
    | 'id'
    | 'customerId'
    | 'shopId'
    | 'userId'
    | 'references'
    | 'meta'
    | '__typename'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  orderIds: string[];
  fulfillmentIds: string[];
  meta: IMeta;
}
