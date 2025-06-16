import {
  IoRestorecommerceAuthRoleAssociation,
  IoRestorecommerceUserUser,
  IoRestorecommerceUserUserRole,
} from '@console-core/graphql';

import { TScopingInstances } from '../../types';

import { IMeta } from './meta';
import { IRole } from './role';

export interface IUser
  extends Omit<
      IoRestorecommerceUserUser,
      | 'id'
      | 'email'
      | 'name'
      | 'firstName'
      | 'lastName'
      | 'lastAccess'
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
  lastAccess: string;
  roleAssociations: IRoleAssociation[];
  meta: IMeta;
}

export interface IRoleAssociation
  extends Omit<IoRestorecommerceAuthRoleAssociation, 'id' | '__typename'> {
  id?: string;
}

export interface IRoleAssociationScopingInstance {
  role: IRole | null;
  scopingInstances: TScopingInstances;
}

export interface IRoleInstance {
  role: string;
  instanceType: string;
  instanceId: string;
}
