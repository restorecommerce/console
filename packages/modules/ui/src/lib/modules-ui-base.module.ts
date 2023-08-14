import { NgModule, Optional, SkipSelf } from '@angular/core';

import {
  IconResolverService,
  MaterialDesignIconResolverService,
  MaterialDesignVCLIconAliasResolverService,
} from '@vcl/ng-vcl';

import {
  RcDrawerService,
  RcMdiIconResolverService,
  RcValidationService,
} from './services';

@NgModule({
  providers: [
    {
      provide: IconResolverService,
      useClass: RcMdiIconResolverService,
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
    RcDrawerService,
    RcValidationService,
  ],
})
export class ModulesUiBaseModule {
  constructor(@Optional() @SkipSelf() parentModule: ModulesUiBaseModule) {
    if (parentModule) {
      throw new Error(
        'ModulesUiBaseModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
