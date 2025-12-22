import { InjectionToken } from '@angular/core';

export const ORG_QUERY_PARAM_KEY = new InjectionToken<string>(
  'ORG_QUERY_PARAM_KEY',
  { factory: () => 'org' }
);
