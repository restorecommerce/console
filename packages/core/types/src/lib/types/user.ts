import { UserFindByTokenQuery } from '@console-core/graphql';

export type TUser =
  UserFindByTokenQuery['identity']['user']['FindByToken'] extends {
    details?: { payload?: infer P } | null;
  }
    ? P
    : never;
