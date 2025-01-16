import { IoRestorecommerceTaxTax } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ITax
  extends Omit<
    IoRestorecommerceTaxTax,
    'id' | 'name' | 'typeId' | 'rate' | 'variant' | 'meta' | '__typename'
  > {
  id: string;
  name: string;
  typeId: string;
  rate: number;
  variant: string;
  meta: IMeta;
}
