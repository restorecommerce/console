import { IIoRestorecommerceTimezoneTimezone } from '@console-core/graphql';

export interface ITimezone
  extends Omit<
    IIoRestorecommerceTimezoneTimezone,
    'id' | 'description' | 'meta'
  > {
  id: string;
  description: string;
  meta: {
    created: string;
    // createdBy: string;
    modified: string;
    modifiedBy: string;
  };
}
