import { IoRestorecommerceUserUserType } from '@console-core/graphql';

export interface UpdateUserCommand {
  id?: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  defaultScope: string;
  userType: IoRestorecommerceUserUserType;
}
