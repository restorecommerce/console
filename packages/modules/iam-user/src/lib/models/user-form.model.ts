export interface UserFormValue {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;

  invite: boolean;
  password: string;

  defaultScope?: string;
  // roleAssignments: RoleAssignment[]
}
