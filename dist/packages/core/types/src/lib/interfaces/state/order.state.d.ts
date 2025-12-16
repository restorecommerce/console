import { EntityState } from '@ngrx/entity';
import { IOrder } from '../entities';
import { IBaseStore } from './store.state';
export interface IOrderState extends EntityState<IOrder>, IBaseStore {
    selectedId: string | null;
}
