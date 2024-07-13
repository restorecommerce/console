import { Dictionary, EntityState } from '@ngrx/entity';

import { IOrganization } from '../entities';

import { IBaseStore } from './store.state';

export interface IOrganizationState
  extends EntityState<IOrganization>,
    IBaseStore {
  selectedId: string | null;
  selectedGlobalOrganizationId: string | null;
  selectedParentId: string | null;
  parentIds: string[];
  parentEntities: Dictionary<IOrganization>;
  selectedChildId: string | null;
  childIds: string[];
  childEntities: Dictionary<IOrganization>;
}
