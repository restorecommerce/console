import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ManagementTemplateComponent } from './components/template/management-template.component';
import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild(modulesManagementRoutes),
  ],
  declarations: [ManagementTemplateComponent],
})
export class ModulesManagementModule {}
