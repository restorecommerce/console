import { EntityState } from '@ngrx/entity';
import { ITimezone } from '../entities';
import { IBaseStore } from './store.state';
export interface ITimezoneState extends EntityState<ITimezone>, IBaseStore {
    selectedId: string | null;
}
