import { IoRestorecommerceAddressContact } from '@console-core/graphql';

export interface IAddressContact
  extends Omit<IoRestorecommerceAddressContact, 'name' | 'email' | 'phone'> {
  name: string;
  email: string;
  phone: string;
}
