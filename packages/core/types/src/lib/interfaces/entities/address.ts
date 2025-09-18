import { IoRestorecommerceAddressAddress } from '@console-core/graphql';

import { ICountry } from './country';

export interface IAddress
  extends Omit<
    IoRestorecommerceAddressAddress,
    | 'buildingNumber'
    | 'street'
    | 'postCode'
    | 'region'
    | 'country'
    | '__typename'
  > {
  buildingNumber: string;
  street: string;
  postCode: string;
  region: string;
  country: ICountry;
}
