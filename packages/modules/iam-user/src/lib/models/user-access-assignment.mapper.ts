import { UserAccessAssignmentVm } from './user-access-assignment.model';

type RoleAssociationAttribute = {
  id: string;
  value?: string;
  attributes?: RoleAssociationAttribute[];
};

export type RoleAssociation = {
  id: string;
  role: string;
  attributes?: RoleAssociationAttribute[];
};

const ROLE_SCOPING_ENTITY = 'urn:restorecommerce:acs:names:roleScopingEntity';

const ROLE_SCOPING_INSTANCE =
  'urn:restorecommerce:acs:names:roleScopingInstance';

const USER_ENTITY = 'urn:restorecommerce:acs:model:user.User';
const ORGANIZATION_ENTITY =
  'urn:restorecommerce:acs:model:organization.Organization';

export function mapRoleAssociationsToAccessAssignments(
  roleAssociations: RoleAssociation[] = []
): UserAccessAssignmentVm[] {
  return roleAssociations.map(mapRoleAssociationToAccessAssignmentVm);
}

export function mapRoleAssociationToAccessAssignmentVm(
  association: RoleAssociation
): UserAccessAssignmentVm {
  const scopeEntity = getScopeEntity(association.attributes);
  const scopeInstance = getScopeInstance(association.attributes);
  const scopeType = getScopeTypeFromEntity(scopeEntity);

  const isSystem = isSystemAssignment(association);

  return {
    id: association.id,
    role: association.role,
    roleLabel: getRoleLabel(association.role),
    scopeType,
    scopeTypeLabel: getScopeTypeLabel(scopeType),
    scopeInstance,
    scopeLabel: getScopeLabel(scopeType, scopeInstance),
    source: isSystem ? 'system' : 'manual',
    locked: isSystem,
  };
}

function getScopeEntity(
  attributes: RoleAssociationAttribute[] = []
): string | undefined {
  return attributes.find((attr) => attr.id === ROLE_SCOPING_ENTITY)?.value;
}

function getScopeInstance(attributes: RoleAssociationAttribute[] = []): string {
  const scopeEntity = attributes.find(
    (attr) => attr.id === ROLE_SCOPING_ENTITY
  );

  return (
    scopeEntity?.attributes?.find((attr) => attr.id === ROLE_SCOPING_INSTANCE)
      ?.value ?? ''
  );
}

function getScopeTypeFromEntity(
  entity?: string
): UserAccessAssignmentVm['scopeType'] {
  switch (entity) {
    case USER_ENTITY:
      return 'user';

    case ORGANIZATION_ENTITY:
    default:
      return 'organization';
  }
}

function getScopeTypeLabel(
  scopeType: UserAccessAssignmentVm['scopeType']
): string {
  switch (scopeType) {
    case 'user':
      return 'User';

    case 'organization':
    default:
      return 'Organization';
  }
}

function getRoleLabel(role: string): string {
  const roleLabelMap: Record<string, string> = {
    'user-r-id': 'User',
    'org-admin': 'Organization Admin',
    'org-manager': 'Organization Manager',
    viewer: 'Viewer',
  };

  return roleLabelMap[role] ?? humanize(role);
}

function getScopeLabel(
  scopeType: UserAccessAssignmentVm['scopeType'],
  scopeInstance: string
): string {
  if (scopeType === 'user') {
    return 'This user';
  }

  return scopeInstance || '—';
}

function isSystemAssignment(association: RoleAssociation): boolean {
  return association.role === 'user-r-id';
}

function humanize(value: string): string {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
