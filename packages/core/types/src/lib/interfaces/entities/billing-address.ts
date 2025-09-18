import { IoRestorecommerceAddressBillingAddress } from '@console-core/graphql';

import { IAddress } from './address';
import { IAddressContact } from './contact-address';

export interface IBillingAddress
  extends Omit<
    IoRestorecommerceAddressBillingAddress,
    'address' | 'contact' | 'comments' | '__typename'
  > {
  address: IAddress;
  contact: IAddressContact;
  comments: string;
}
