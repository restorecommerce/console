import { IoRestorecommerceProductIndividualProduct, IoRestorecommerceProductProduct } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IProductItem extends Omit<IoRestorecommerceProductIndividualProduct, 'name' | 'description' | '__typename'> {
    name: string;
    description: string;
}
export interface IProduct extends Omit<IoRestorecommerceProductProduct, 'id' | 'active' | 'product' | 'meta' | '__typename'> {
    id: string;
    active: boolean;
    product: IProductItem;
    meta: IMeta;
}
