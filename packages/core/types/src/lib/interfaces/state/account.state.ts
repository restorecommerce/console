import { IProfile } from '../profile';

import { IBaseStore } from './store.state';

export interface IAccountState extends IBaseStore {
  profile: IProfile | null;
}
