import { IApiConstant } from '@console-core/types';

export const API: Readonly<IApiConstant> = {
  endpoints: {
    token: '/token',
    tokenRevocation: '/token/revocation',
  },
};
