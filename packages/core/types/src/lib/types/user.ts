import { IdentityUserFindQuery } from '@console-core/graphql';

export type TUser = IdentityUserFindQuery['identity']['user']['Find'] extends {
  details?: { payload?: infer P } | null;
}
  ? P
  : never;
