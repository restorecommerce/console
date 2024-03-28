import { IIoRestorecommerceMetaMeta } from '@console-core/graphql';

export interface IMeta
  extends Omit<
    IIoRestorecommerceMetaMeta,
    'created' | 'createdBy' | 'modified' | 'modifiedBy'
  > {
  id: string;
  created: string;
  modified: string;
  createdBy: string;
  modifiedBy: string;
}
