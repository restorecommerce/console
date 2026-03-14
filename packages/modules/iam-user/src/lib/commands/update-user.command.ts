export interface UpdateUserCommand {
  id: string;

  firstName: string;
  lastName: string;

  email: string;

  defaultScope?: string;

  // roleAssignments: RoleAssignment[];
}
