import { EntityState } from '@ngrx/entity';
import { IProductPrototype } from '../entities';
import { IBaseStore } from './store.state';
export interface IProductPrototypeState extends EntityState<IProductPrototype>, IBaseStore {
    selectedId: string | null;
}
