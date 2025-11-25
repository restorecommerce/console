// layout.tokens.ts
import { InjectionToken } from '@angular/core';

import { LayoutConfig, OrgContextOption } from './layout-config.model';

export const LAYOUT_CONFIG = new InjectionToken<LayoutConfig>('LAYOUT_CONFIG');
export const ORG_CONTEXT_OPTIONS = new InjectionToken<OrgContextOption[]>(
  'ORG_CONTEXT_OPTIONS'
);
