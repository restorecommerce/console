export const ROLE_SCOPING_ENTITY =
  'urn:restorecommerce:acs:names:roleScopingEntity' as const;
export const ROLE_SCOPING_INSTANCE =
  'urn:restorecommerce:acs:names:roleScopingInstance' as const;

export interface ITarget {
  instanceType: string;
  instanceId: string;
}

export interface IRoleAssociationFormValue {
  role: string;
  targets: ITarget[];
}
