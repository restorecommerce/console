import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { AuthnTemplateComponent } from './components/template/authn-template.component';
import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [ModulesSharedModule, RouterModule.forChild(modulesAuthnRoutes)],
  declarations: [AuthnTemplateComponent],
})
export class ModulesAuthnModule {}
