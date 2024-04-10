import { IoRestorecommerceInvoiceInvoice } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IInvoice
  extends Omit<
    IoRestorecommerceInvoiceInvoice,
    'id' | 'customerId' | 'shopId' | 'userId' | 'meta'
  > {
  id: string;
  customerId: string;
  shopId: string;
  userId: string;
  meta: IMeta;
}
