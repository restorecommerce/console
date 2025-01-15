import { IoRestorecommerceCurrencyCurrency } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ICurrency
  extends Omit<
    IoRestorecommerceCurrencyCurrency,
    | 'id'
    | 'name'
    | 'symbol'
    | 'precision'
    | 'countryIds'
    | 'meta'
    | 'customExchangeRates'
    | '__typename'
  > {
  id: string;
  name: string;
  symbol: string;
  precision: number;
  countryIds: string[];
  meta: IMeta;
}
