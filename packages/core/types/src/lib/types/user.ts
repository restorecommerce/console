import { IdentityUserFindQuery } from '@console-core/graphql';
import { IOrganization, IUser } from '@console-core/types';

export type TScopingInstance = {
  instanceType: string;
  instance: IOrganization | IUser;
};

export type TScopingInstances = TScopingInstance[] | null;

export type TUser = IdentityUserFindQuery['identity']['user']['Find'] extends {
  details?: { payload?: infer P } | null;
}
  ? P
  : never;
