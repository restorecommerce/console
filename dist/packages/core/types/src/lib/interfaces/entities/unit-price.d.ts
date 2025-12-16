import { IoRestorecommercePricePrice } from '@console-core/graphql';
import { ICurrency } from './currency';
export interface IUnitPrice extends Omit<IoRestorecommercePricePrice, 'currencyId' | 'sale' | 'regularPrice' | 'salePrice' | 'currency' | '__typename'> {
    currencyId: string;
    sale: boolean;
    regularPrice: number;
    salePrice: number;
    currency: ICurrency;
}
