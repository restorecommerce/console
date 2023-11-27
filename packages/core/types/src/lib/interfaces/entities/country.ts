import { IIoRestorecommerceCountryCountry } from '@console-core/graphql';

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
  meta: {
    created: string;
    // createdBy: string;
    modified: string;
    modifiedBy: string;
  };
}
