import { IIoRestorecommerceMetaMeta } from '@console-core/graphql';

export interface IMeta
  extends Omit<
    IIoRestorecommerceMetaMeta,
    'created' | 'modified' | 'createdBy' | 'modifiedBy'
  > {
  id: string;
  created: string;
  modified: string;
  createdBy: string;
  modifiedBy: string;
}
