import { IoRestorecommerceOrganizationOrganization } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IOrganization
  extends Omit<
    IoRestorecommerceOrganizationOrganization,
    'id' | 'name' | 'email' | 'website' | 'meta' | '__typename'
  > {
  id: string;
  name: string;
  email: string;
  website: string;
  meta: IMeta;
}
