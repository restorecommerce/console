import { IoRestorecommerceUserUserRole } from '@console-core/graphql';

import { UserDetail } from './user-detail.model';
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
    roleNames: dto.roles?.map((r) => r.name as string) ?? [],

    sessionsCount: dto.tokens?.length ?? 0,

    // ownerOrganizationId: extractOrgOwner(dto.meta?.owners),
  };
}
