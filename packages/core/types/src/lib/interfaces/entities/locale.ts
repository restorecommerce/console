import { IIoRestorecommerceLocaleLocale } from '@console-core/graphql';

export interface ILocale
  extends Omit<
    IIoRestorecommerceLocaleLocale,
    'id' | 'description' | 'value' | 'meta'
  > {
  id: string;
  description: string;
  value: string;
  meta: {
    created: string;
    // createdBy: string;
    modified: string;
    modifiedBy: string;
  };
}
