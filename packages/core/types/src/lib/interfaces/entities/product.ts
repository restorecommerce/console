import {
  IoRestorecommerceProductIndividualProduct,
  IoRestorecommerceProductProduct,
} from '@console-core/graphql';

import { IMeta } from './meta';

interface IProductItem
  extends Omit<
    IoRestorecommerceProductIndividualProduct,
    'name' | 'description'
  > {
  name: string;
  description: string;
}

export interface IProduct
  extends Omit<
    IoRestorecommerceProductProduct,
    'id' | 'active' | 'product' | 'meta'
  > {
  id: string;
  active: boolean;
  product: IProductItem;
  meta: IMeta;
}
