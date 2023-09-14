import { IdentityUserFindByTokenQuery } from '@console-core/graphql';

export type TUser =
  IdentityUserFindByTokenQuery['identity']['user']['FindByToken'] extends {
    details?: { payload?: infer P } | null;
  }
    ? P
    : never;
