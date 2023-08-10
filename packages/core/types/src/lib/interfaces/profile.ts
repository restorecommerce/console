import { IoRestorecommerceUserUserType } from '@console-core/graphql';

export interface IProfile {
  id?: string | null;
  active?: boolean | null;
  activationCode?: string | null;
  email?: string | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  defaultScope?: string | null;
  localeId?: string | null;
  timezoneId?: string | null;
  userType?: IoRestorecommerceUserUserType | null;
  roleAssociations?: Array<{
    role?: string | null;
  }> | null;
}
