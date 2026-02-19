import { IoRestorecommerceUserUserRole } from '@console-core/graphql';

import { UserDetail } from './user-detail.model';
import { mapUserRolesVM } from './user-role.mapper';
import { mapUserSessions } from './user-sessions.mapper';
import { UserStatus } from './user-status.model';

export function mapUserToDetailVM(
  dto: IoRestorecommerceUserUserRole
): UserDetail {
  return {
    id: `${dto.id}`,
    fullName: `${dto.firstName ?? ''} ${dto.lastName ?? ''}`.trim(),
    email: `${dto.email}`,
    username: `${dto.name}`,

    status: dto.active ? UserStatus.ACTIVE : UserStatus.DISABLED,

    // type: dto.userType,
    guest: dto.guest ?? false,

    defaultScope: dto.defaultScope ?? '',

    timezoneId: dto.timezoneId ?? undefined,
    localeId: dto.localeId ?? undefined,

    lastAccess: dto.lastAccess ? new Date(`${dto.lastAccess}`) : null,
    createdAt: dto.meta?.created ? new Date(`${dto.meta.created}`) : undefined,

    rolesCount: dto.roles?.length ?? 0,
    roles: mapUserRolesVM(dto),

    sessionsCount: dto.tokens?.length ?? 0,
    sessions: mapUserSessions(dto),

    // ownerOrganizationId: extractOrgOwner(dto.meta?.owners),
  };
}
