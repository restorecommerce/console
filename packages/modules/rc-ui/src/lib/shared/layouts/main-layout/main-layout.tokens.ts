// layout.tokens.ts
import { InjectionToken } from '@angular/core';

import { RcLayoutConfig } from './main-layout-config.model';

export const RC_LAYOUT_CONFIG = new InjectionToken<RcLayoutConfig>(
  'LAYOUT_CONFIG',
);
