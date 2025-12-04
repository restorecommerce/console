import { IRoleAssociation } from '@console-core/types';

import {
  IRoleAssociationFormValue,
  ROLE_SCOPING_ENTITY,
  ROLE_SCOPING_INSTANCE,
} from './role-association.types';

export function toFormValue(
  assoc: IRoleAssociation
): IRoleAssociationFormValue {
  const targets = (assoc.attributes ?? [])
    .filter((a) => a.id === ROLE_SCOPING_ENTITY)
    .map((a) => ({
      instanceType: a.value ?? '',
      instanceId:
        a.attributes?.find((x) => x.id === ROLE_SCOPING_INSTANCE)?.value ?? '',
    }));
  return { role: assoc.role, targets };
}

export function fromFormValue(
  form: IRoleAssociationFormValue,
  existingId?: string
): IRoleAssociation {
  return {
    id: existingId,
    role: form.role,
    attributes: form.targets.map((t) => ({
      id: ROLE_SCOPING_ENTITY,
      value: t.instanceType,
      attributes: [{ id: ROLE_SCOPING_INSTANCE, value: t.instanceId }],
    })),
  };
}
