import {
  IoRestorecommerceUserUser,
  IoRestorecommerceUserUserRole,
} from '@console-core/graphql';

import { IMeta } from './meta';

export interface IUser
  extends Omit<
      IoRestorecommerceUserUser,
      'id' | 'email' | 'name' | 'firstName' | 'lastName' | 'meta' | '__typename'
    >,
    Omit<
      IoRestorecommerceUserUserRole,
      'id' | 'email' | 'name' | 'firstName' | 'lastName' | 'meta' | '__typename'
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
