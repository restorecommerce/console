import { IoRestorecommerceProductCategoryProductCategory } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IProductCategory extends Omit<IoRestorecommerceProductCategoryProductCategory, 'id' | 'name' | 'description' | 'meta' | '__typename'> {
    id: string;
    name: string;
    description: string;
    meta: IMeta;
}
