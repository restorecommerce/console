import { IoRestorecommerceUserUserType } from '@console-core/graphql';

export interface CreateUserCommand {
  id?: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  invite?: boolean;
  password?: string;
  defaultScope: string;
  userType: IoRestorecommerceUserUserType;

  roleAssociations?: RoleAssociationCommand[];
}

export interface RoleAssociationCommand {
  id: string;
  role: string;
  attributes: RoleScopingEntity[];
}

export interface RoleScopingEntity {
  id: string;
  value: string;
  attributes: RoleScopingInstance[];
}

export interface RoleScopingInstance {
  id: string;
  value: string;
}
