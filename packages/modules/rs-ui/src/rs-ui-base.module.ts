import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MODULES_RS_UI_BASE_PROVIDERS } from './rs-ui-base.providers';

@NgModule({
  providers: MODULES_RS_UI_BASE_PROVIDERS,
})
export class ModulesRsUiBaseModule {
  constructor(@Optional() @SkipSelf() parentModule: ModulesRsUiBaseModule) {
    if (parentModule) {
      throw new Error(
        'ModulesRsUiBaseModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
