import { IIoRestorecommerceUserUser } from '@console-core/graphql';

import { IBaseStore } from './store';

export interface IAuthnState extends IBaseStore {
  isAuthenticated: boolean;
  user: IIoRestorecommerceUserUser | null;
}
