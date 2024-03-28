import { IUser } from '../entities';

import { IBaseStore } from './store.state';

export interface IAccountState extends IBaseStore {
  user: IUser | null;
}
