import { IoRestorecommerceUserUser } from '@console-core/graphql';

import { IMeta } from './meta';

export interface IUser
  extends Omit<
    IoRestorecommerceUserUser,
    'id' | 'email' | 'name' | 'firstName' | 'lastName' | 'meta'
  > {
  id: string;
  email: string;
  name: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  isSuperAdministrator: boolean;
  isAdministrator: boolean;
  isUser: boolean;
  meta: IMeta;
}
