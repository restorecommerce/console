import { INotification } from '../notification';

import { IBaseStore } from './store';

export interface IAppState extends IBaseStore {
  notifications: INotification[];
}
