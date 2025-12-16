import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { RcLayoutConfig } from './main-layout-config.model';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';

export function provideMainRcLayout(config: {
  layout: RcLayoutConfig;
}): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: RC_LAYOUT_CONFIG, useValue: config.layout },
  ]);
}
