import { FindByTokenQuery } from '@console-core/graphql';

export type TProfile =
  FindByTokenQuery['identity']['user']['FindByToken'] extends {
    details?: { payload?: infer P } | null;
  }
    ? P
    : never;
