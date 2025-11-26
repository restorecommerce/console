import {
  makeEnvironmentProviders,
  type EnvironmentProviders,
} from '@angular/core';

import {
  IconResolverService,
  MaterialDesignIconResolverService,
  MaterialDesignVCLIconAliasResolverService,
} from '@vcl/ng-vcl';

import {
  RsDrawerService,
  RsValidationService,
  RsMdiIconResolverService,
} from './lib/services';

export const MODULES_RS_UI_BASE_PROVIDERS = [
  {
    provide: IconResolverService,
    useClass: RsMdiIconResolverService,
    multi: true,
  },
  {
    provide: IconResolverService,
    useClass: MaterialDesignIconResolverService,
    multi: true,
  },
  {
    provide: IconResolverService,
    useClass: MaterialDesignVCLIconAliasResolverService,
    multi: true,
  },
  RsDrawerService,
  RsValidationService,
];

// ✅ Standalone-friendly provider function
export function provideModulesUiBase(): EnvironmentProviders {
  return makeEnvironmentProviders(MODULES_RS_UI_BASE_PROVIDERS);
}
