import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_LAYOUT_CONFIG, RcAuthLayoutConfig } from '@console/rc-ui';

import { APP } from '@console-core/config';

import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesAuthnRoutes)],
  providers: [
    {
      provide: AUTH_LAYOUT_CONFIG,
      useValue: <RcAuthLayoutConfig>{
        branding: {
          appName: APP.name,
          logoUrl: 'assets/images/restore_commerce_logo_square.png',
          logoAlt: 'RC Logo',
        },
      },
    },
  ],
})
export class ModulesAuthnModule {}
