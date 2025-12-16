import { IoRestorecommerceOrderItem } from '@console-core/graphql';
import { IProduct } from './product';
import { IUnitPrice } from './unit-price';
export interface IOrderItem extends Omit<IoRestorecommerceOrderItem, 'id' | 'productId' | 'variantId' | 'quantity' | 'product' | 'unitPrice' | '__typename'> {
    id: string;
    productId: string;
    variantId: string;
    quantity: number;
    product: IProduct;
    unitPrice: IUnitPrice;
}
