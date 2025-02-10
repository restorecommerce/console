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
  roleAssociations: IRoleAssociation[];
  meta: IMeta;
}

export interface IRoleAssociation
  extends Omit<IoRestorecommerceAuthRoleAssociation, 'id' | '__typename'> {
  id?: string;
}

export interface IRoleAssociationScopingInstance {
  role: IRole | null;
  scopingInstances: (IOrganization | IUser)[] | null;
}
