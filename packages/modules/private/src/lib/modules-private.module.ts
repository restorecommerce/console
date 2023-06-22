import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { PrivateTemplateComponent } from './components/template/private-template.component';
import { modulesPrivateRoutes } from './lib.routes';

@NgModule({
  declarations: [PrivateTemplateComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesPrivateRoutes)],
})
export class ModulesPrivateModule {}
