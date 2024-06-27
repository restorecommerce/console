import { EntityState } from '@ngrx/entity';

import { IOrganization } from '../entities';

import { IBaseStore } from './store.state';

export interface IOrganizationState
  extends EntityState<IOrganization>,
    IBaseStore {
  selectedId: string | null;
}
