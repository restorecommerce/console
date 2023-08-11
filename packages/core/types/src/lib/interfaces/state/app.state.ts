import { INotification } from '../app';

import { IBaseStore } from './store.state';

export interface IAppState extends IBaseStore {
  notifications: INotification[];
}
