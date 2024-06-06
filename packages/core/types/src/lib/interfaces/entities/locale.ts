import { IoRestorecommerceLocaleLocale } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ILocale
  extends Omit<
    IoRestorecommerceLocaleLocale,
    'id' | 'description' | 'value' | 'meta' | '__typename'
  > {
  id: string;
  description: string;
  value: string;
  meta: IMeta;
}
