import { EntityState } from '@ngrx/entity';
import { IFulfillment } from '../entities';
import { IBaseStore } from './store.state';
export interface IFulfillmentState extends EntityState<IFulfillment>, IBaseStore {
    selectedId: string | null;
}
