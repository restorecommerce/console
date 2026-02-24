export interface CreateUserCommand {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  invite?: boolean;
  password?: string;
  // userType: 'ORG_USER' | 'SYSTEM_USER';

  roleAssociations: RoleAssociationCommand[];
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
