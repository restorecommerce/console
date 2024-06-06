import { IoRestorecommerceShopShop } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IShop
  extends Omit<
    IoRestorecommerceShopShop,
    'id' | 'name' | 'meta' | '__typename'
  > {
  id: string;
  name: string;
  meta: IMeta;
}
