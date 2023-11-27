import { IIoRestorecommerceMetaMeta } from '@console-core/graphql';

export interface IMeta
  extends Omit<
    IIoRestorecommerceMetaMeta,
    'created' | 'modified' | 'modifiedBy'
  > {
  id: string;
  created: string;
  // createdBy: string;
  modified: string;
  modifiedBy: string;
}
