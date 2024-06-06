import { IoRestorecommerceMetaMeta } from '@console-core/graphql';

export interface IMeta
  extends Omit<
    IoRestorecommerceMetaMeta,
    'created' | 'createdBy' | 'modified' | 'modifiedBy' | '__typename'
  > {
  id: string;
  created: string;
  modified: string;
  createdBy: string;
  modifiedBy: string;
}
