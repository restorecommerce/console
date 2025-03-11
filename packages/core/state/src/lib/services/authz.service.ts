import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { AccountFacade, OrganizationContextFacade } from '@console-core/state';
import { IOrganization, IUser } from '@console-core/types';

const isHierarchical = (
  root: string,
  decendant: string | undefined | null,
  organizations: IOrganization[]
): boolean => {
  if (!root || !decendant) return false;

  const parentMap = new Map<string, string | null>(
    organizations.map((org) => [org.id, String(org.parentId)])
  );

  while (decendant && parentMap.has(decendant)) {
    if (decendant === root) return true;
    decendant = parentMap.get(decendant) ?? null;
    if (decendant === null) break;
  }

  return false;
};

@Injectable({
  providedIn: 'root',
})
export class AuthzService {
  private hasRole(user: IUser, roleId: string) {
    return user?.roleAssociations.some((ra) => ra.role === roleId);
  }

  private hasRoleInOrg(
    user: IUser,
    roleId: string,
    organizationId: string,
    organizations: IOrganization[]
  ) {
    return user?.roleAssociations.some(
      (ra) =>
        ra.role === roleId &&
        ra.attributes?.some((attr) =>
          attr.attributes?.some(
            (inst) =>
              inst.value === organizationId ||
              isHierarchical(
                String(inst.value),
                String(organizationId),
                organizations
              )
          )
        )
    );
  }

  isSuperAdmin$ = this.accountFacade.user$.pipe(
    map((user) =>
      user ? this.hasRole(user, 'superadministrator-r-id') : false
    )
  );

  private createRoleObservable(roleId: string) {
    return combineLatest([
      this.accountFacade.user$,
      this.organizationContextFacade.selectedId$,
      this.organizationContextFacade.all$,
    ]).pipe(
      map(([user, organizationId, organizations]) =>
        this.hasRoleInOrg(
          user as IUser,
          roleId,
          organizationId as string,
          organizations
        )
      )
    );
  }

  isAdmin$ = this.createRoleObservable('administrator-r-id');
  isSale$ = this.createRoleObservable('sales-r-id');
  isModerator$ = this.createRoleObservable('moderator-r-id');

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly organizationContextFacade: OrganizationContextFacade
  ) {}
}
