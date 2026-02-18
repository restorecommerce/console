export interface UserRole {
  id: string;
  name: string;
  description?: string;
  associationId: string;
  scopeEntities: string[];
  assignableByRoles: string[];
}

export interface UserRoles {
  roles: UserRole[];
  total: number;
}
