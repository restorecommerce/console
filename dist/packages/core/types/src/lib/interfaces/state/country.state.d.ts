import { EntityState } from '@ngrx/entity';
import { ICountry } from '../entities';
import { IBaseStore } from './store.state';
export interface ICountryState extends EntityState<ICountry>, IBaseStore {
    selectedId: string | null;
}
