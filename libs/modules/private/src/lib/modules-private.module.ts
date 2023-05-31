import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console/modules/shared';

import { modulesPrivateRoutes } from './lib.routes';
import { PrivateTemplateComponent } from './template/private-template.component';

@NgModule({
  declarations: [PrivateTemplateComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesPrivateRoutes)],
})
export class ModulesPrivateModule {}
