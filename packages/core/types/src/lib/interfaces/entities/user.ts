import {
  IoRestorecommerceAuthRoleAssociation,
  IoRestorecommerceUserUser,
  IoRestorecommerceUserUserRole,
} from '@console-core/graphql';

import { IMeta } from './meta';
import { IOrganization } from './organization';
import { IRole } from './role';

export interface IUser
  extends Omit<
      IoRestorecommerceUserUser,
      | 'id'
      | 'email'
      | 'name'
      | 'firstName'
      | 'lastName'
      | 'roleAssociations'
      | 'meta'
      | '__typename'
    >,
    Omit<
      IoRestorecommerceUserUserRole,
      | 'id'
      | 'email'
      | 'name'
      | 'firstName'
      | 'lastName'
      | 'roleAssociations'
      | 'meta'
      | '__typename'
    > {
  id: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  fullName: string;
  roleAssociations: IoRestorecommerceAuthRoleAssociation[];
  meta: IMeta;
}

export interface IRoleAssociationScopingInstance {
  role: IRole | null;
  organization: IOrganization | null;
}
