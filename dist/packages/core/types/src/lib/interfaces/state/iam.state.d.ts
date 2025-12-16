import { EntityState } from '@ngrx/entity';
import { IRoleAssociation, IUser } from '../entities';
import { IBaseStore } from './store.state';
export interface IIamState extends EntityState<IUser>, IBaseStore {
    selectedId: string | null;
    temp: {
        roleAssociations: IRoleAssociation[];
    };
}
