import { IoRestorecommerceMetaMeta } from '@console-core/graphql';

export interface IMeta
  extends Omit<
    IoRestorecommerceMetaMeta,
    'created' | 'createdBy' | 'modified' | 'modifiedBy'
  > {
  id: string;
  created: string;
  modified: string;
  createdBy: string;
  modifiedBy: string;
}
