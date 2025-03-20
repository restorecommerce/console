import { isDevMode } from '@angular/core';
import { IApiConstant } from '@console-core/types';

export const API: Readonly<IApiConstant> = {
  endpoints: {
    token: '/token',
    tokenRevocation: '/token/revocation',
  },
  domains: {
    bucketDomain: isDevMode() ? `http://localhost:5000` : ``,
  },
};
