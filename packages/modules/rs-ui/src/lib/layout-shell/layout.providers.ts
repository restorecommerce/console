import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { LayoutConfig, OrgContextOption } from './layout-config.model';
import { LAYOUT_CONFIG } from './layout.tokens';

export function provideLayout(config: {
  layout: LayoutConfig;
  orgs: OrgContextOption[];
}): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: LAYOUT_CONFIG, useValue: config.layout },
  ]);
}
