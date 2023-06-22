import { NgModule, Optional, SkipSelf } from '@angular/core';

import {
  IconResolverService,
  MaterialDesignIconResolverService,
  MaterialDesignVCLIconAliasResolverService,
} from '@vcl/ng-vcl';

import { DrawerService } from './services/drawer.service';
import { RCMdiIconResolverService } from './services/icon-resolve.service';

@NgModule({
  providers: [
    DrawerService,
    {
      provide: IconResolverService,
      useClass: RCMdiIconResolverService,
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
