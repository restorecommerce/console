import { IRoleAssociation } from '@console-core/types';

const ROLE_SCOPING_ENTITY =
  'urn:restorecommerce:acs:names:roleScopingEntity' as const;
const ROLE_SCOPING_INSTANCE =
  'urn:restorecommerce:acs:names:roleScopingInstance' as const;

const INSTANCE_TYPE_LABELS: Record<string, string> = {
  'urn:restorecommerce:acs:model:organization.Organization': 'Organization',
  'urn:restorecommerce:acs:model:user.User': 'User',
};

function getInstanceType(assoc: IRoleAssociation): string | null {
  const entity = assoc.attributes?.find((a) => a.id === ROLE_SCOPING_ENTITY);
  return entity?.value ?? null;
}

function getInstanceId(assoc: IRoleAssociation): string | null {
  const entity = assoc.attributes?.find((a) => a.id === ROLE_SCOPING_ENTITY);
  const instanceAttr = entity?.attributes?.find(
    (a) => a.id === ROLE_SCOPING_INSTANCE
  );
  return instanceAttr?.value ?? null;
}

export function buildDeleteMessage(assoc: IRoleAssociation): string {
  const instanceType = getInstanceType(assoc);
  const instanceId = getInstanceId(assoc);

  const typeLabel = instanceType
    ? INSTANCE_TYPE_LABELS[instanceType] ?? instanceType
    : 'target';

  const idPart = instanceId ? ` “${instanceId}”` : '';

  return `Remove role “${assoc.role}” for ${typeLabel}${idPart}?`;
}

// ---- Predicate: does a given association match the form criteria?
export function matchesRoleAssociation(
  assoc: IRoleAssociation,
  criteria: IRoleAssociation
): boolean {
  return (
    assoc.role === criteria.role &&
    getInstanceType(assoc) === getInstanceType(criteria) &&
    getInstanceId(assoc) === getInstanceId(criteria)
  );
}

export function filterAssociationsOut(
  list: IRoleAssociation[],
  criteria: IRoleAssociation
): IRoleAssociation[] {
  return list.filter((a) => !matchesRoleAssociation(a, criteria));
}

export function replaceAtIndex<T>(
  arr: readonly T[],
  idx: number,
  value: T
): T[] {
  if (idx < 0 || idx >= arr.length) {
    throw new Error(
      `replaceAtIndex: index ${idx} out of bounds (length ${arr.length})`
    );
  }
  return arr.map((item, i) => (i === idx ? value : item));
}
