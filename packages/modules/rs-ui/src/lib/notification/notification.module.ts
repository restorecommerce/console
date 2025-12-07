import { ModuleWithProviders, NgModule } from '@angular/core';

import { VCLNotificationModule } from '@vcl/ng-vcl';

import {
  RS_NOTIFICATION_DEFAULTS,
  RsNotificationDefaults,
} from './notification.tokens';

@NgModule({
  imports: [VCLNotificationModule],
})
export class RsNotificationModule {
  static forRoot(
    defaults: RsNotificationDefaults = {}
  ): ModuleWithProviders<RsNotificationModule> {
    return {
      ngModule: RsNotificationModule,
      providers: [
        {
          provide: RS_NOTIFICATION_DEFAULTS,
          useValue: defaults,
        },
      ],
    };
  }
}
