export interface UserRole {
  id: string;
  name: string;
  description?: string;
  associationId: string;
  scopeEntities: string[];
}

export interface UserRoles {
  roles: UserRole[];
  canAssign: boolean;
}
