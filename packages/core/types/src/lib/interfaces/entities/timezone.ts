import { IIoRestorecommerceTimezoneTimezone } from '@console-core/graphql';

import { IMeta } from './meta';

export interface ITimezone
  extends Omit<
    IIoRestorecommerceTimezoneTimezone,
    'id' | 'description' | 'meta'
  > {
  id: string;
  description: string;
  meta: IMeta;
}
