export interface UserCreateFormValue {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  defaultScope: string;

  invite: boolean;
  password?: string;

  roleAssignments: UserCreateFormRoleValue[];
}

export interface UserCreateFormRoleValue {
  role: string;
  scopeEntity: string;
  scopeInstance: string;
}
