import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { AuthnTemplateComponent } from './components/template/authn-template.component';
import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  declarations: [AuthnTemplateComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesAuthnRoutes),
  ],
})
export class ModulesAuthnModule {}
