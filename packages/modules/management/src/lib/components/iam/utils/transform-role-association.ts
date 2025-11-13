import {
  IAttribute,
  IRoleAssociation,
  IRoleInstance,
} from '@console-core/types';

const ROLE_SCOPING_ENTITY =
  'urn:restorecommerce:acs:names:roleScopingEntity' as const;
const ROLE_SCOPING_INSTANCE =
  'urn:restorecommerce:acs:names:roleScopingInstance' as const;

const INSTANCE_TYPE_LABELS: Record<string, string> = {
  'urn:restorecommerce:acs:model:organization.Organization': 'Organization',
  'urn:restorecommerce:acs:model:user.User': 'User',
};

export function transformRoleAssociation(
  input: IRoleAssociation
): IRoleInstance {
  const role = input.role;
  const attr = input.attributes?.[0];
  const instanceType = attr?.value;
  const instanceId =
    attr?.attributes?.find(
      (a) => a.id === 'urn:restorecommerce:acs:names:roleScopingInstance'
    )?.value || null;

  return {
    role,
    instanceType,
    instanceId,
  } as IRoleInstance;
}

export function toRoleAssociationInput(
  flat: Readonly<IRoleInstance>
): IRoleAssociation {
  const attrs: IAttribute[] = [];

  if (flat.instanceType) {
    const entityAttr: IAttribute = {
      id: ROLE_SCOPING_ENTITY,
      value: flat.instanceType,
    };

    if (flat.instanceId) {
      entityAttr.attributes = [
        { id: ROLE_SCOPING_INSTANCE, value: flat.instanceId },
      ];
    }

    attrs.push(entityAttr);
  }

  return {
    role: flat.role,
    attributes: attrs,
  };
}

function getInstanceType(assoc: IRoleAssociation): string | null {
  return assoc.attributes?.[0]?.value ?? null;
}

function getInstanceId(assoc: IRoleAssociation): string | null {
  const first = assoc.attributes?.[0];
  return (
    first?.attributes?.find((a) => a.id === ROLE_SCOPING_INSTANCE)?.value ??
    null
  );
}

// ---- Predicate: does a given association match the form criteria?
export function matchesRoleAssociation(
  assoc: IRoleAssociation,
  criteria: IRoleInstance
): boolean {
  if (assoc.role !== criteria.role) return false;

  if (getInstanceType(assoc) !== criteria.instanceType) return false;

  if (getInstanceId(assoc) !== criteria.instanceId) return false;

  return true;
}

export function filterAssociationsOut(
  list: IRoleAssociation[],
  criteria: IRoleInstance
): IRoleAssociation[] {
  return list.filter((a) => !matchesRoleAssociation(a, criteria));
}

export function buildDeleteMessage(form: IRoleInstance): string {
  const typeLabel =
    INSTANCE_TYPE_LABELS[form.instanceType] ?? form.instanceType;
  return `Remove role “${form.role}” for ${typeLabel} “${form.instanceId}”?`;
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
