import { IoRestorecommerceTimezoneTimezone } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ITimezone
  extends Omit<
    IoRestorecommerceTimezoneTimezone,
    'id' | 'name' | 'description' | 'meta' | '__typename'
  > {
  id: string;
  name: string;
  value: string;
  description: string;
  meta: IMeta;
}
