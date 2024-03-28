import { EntityState } from '@ngrx/entity';

import { ILocale } from '../entities';

import { IBaseStore } from './store.state';

export interface ILocaleState extends EntityState<ILocale>, IBaseStore {
  selectedId: string | null;
}
