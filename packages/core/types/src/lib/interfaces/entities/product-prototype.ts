import { IoRestorecommerceProductPrototypeProductPrototype } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IProductPrototype
  extends Omit<
    IoRestorecommerceProductPrototypeProductPrototype,
    'id' | 'name' | 'description' | 'meta' | '__typename'
  > {
  id: string;
  name: string;
  description: string;
  meta: IMeta;
}
