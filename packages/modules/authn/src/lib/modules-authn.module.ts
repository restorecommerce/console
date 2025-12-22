import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_BRANDING_CONFIG, AuthBrandingConfig } from '@console/rc-ui';

import { APP } from '@console-core/config';

import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesAuthnRoutes)],
  providers: [
    {
      provide: AUTH_BRANDING_CONFIG,
      useValue: <AuthBrandingConfig>{
        appName: APP.name,
        logoUrl: 'assets/images/restore_commerce_logo_square.png',
        logoAlt: 'RC Logo',
      },
    },
  ],
})
export class ModulesAuthnModule {}
