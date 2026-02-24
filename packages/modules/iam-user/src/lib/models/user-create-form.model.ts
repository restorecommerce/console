export interface UserCreateFormValue {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;

  invite: boolean;
  password?: string;

  roles: UserCreateFormRoleValue[];
}

export interface UserCreateFormRoleValue {
  roleId: string;
  associationId: string;
}
