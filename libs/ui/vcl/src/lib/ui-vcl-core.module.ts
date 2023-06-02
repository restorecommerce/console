import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IconResolverService } from '@vcl/ng-vcl';

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
  ],
})
export class UiVclCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: UiVclCoreModule) {
    if (parentModule) {
      throw new Error(
        'UiVclCoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
