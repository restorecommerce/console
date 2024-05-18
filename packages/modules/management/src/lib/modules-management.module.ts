import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ManagementTemplateComponent } from './components/template/management-template.component';
import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  declarations: [ManagementTemplateComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesManagementRoutes),
  ],
})
export class ModulesManagementModule {}
