import { IoRestorecommerceAddressShippingAddress } from '@console-core/graphql';

import { IAddress } from './address';
import { IAddressContact } from './contact-address';

export interface IShippingAddress
  extends Omit<
    IoRestorecommerceAddressShippingAddress,
    'address' | 'contact' | 'comments' | '__typename'
  > {
  address: IAddress;
  contact: IAddressContact;
  comments: string;
}
