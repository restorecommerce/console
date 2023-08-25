import { IUser } from '../user';

import { IBaseStore } from './store.state';

export interface IAccountState extends IBaseStore {
  user: IUser | null;
}
