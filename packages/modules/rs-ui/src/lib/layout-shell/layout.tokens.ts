// layout.tokens.ts
import { InjectionToken } from '@angular/core';

import { LayoutConfig } from './layout-config.model';

export const LAYOUT_CONFIG = new InjectionToken<LayoutConfig>('LAYOUT_CONFIG');
