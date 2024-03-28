import { IIoRestorecommerceCountryCountry } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ICountry
  extends Omit<
    IIoRestorecommerceCountryCountry,
    | 'id'
    | 'name'
    | 'countryCode'
    | 'geographicalName'
    | 'economicAreas'
    | 'meta'
  > {
  id: string;
  name: string;
  countryCode: string;
  geographicalName: string;
  economicAreas: string[];
  meta: IMeta;
}
