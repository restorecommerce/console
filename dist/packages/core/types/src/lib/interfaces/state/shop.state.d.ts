import { EntityState } from '@ngrx/entity';
import { IShop } from '../entities';
import { IBaseStore } from './store.state';
export interface IShopState extends EntityState<IShop>, IBaseStore {
    selectedId: string | null;
}
