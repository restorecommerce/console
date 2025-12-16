import { IoRestorecommerceCountryCountry } from '@console-core/graphql';
import { IMeta } from './meta';
export interface ICountry extends Omit<IoRestorecommerceCountryCountry, 'id' | 'name' | 'countryCode' | 'geographicalName' | 'economicAreas' | 'meta' | '__typename'> {
    id: string;
    name: string;
    countryCode: string;
    geographicalName: string;
    economicAreas: string[];
    meta: IMeta;
}
