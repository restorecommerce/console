import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManagementTemplateComponent } from './components/template/management-template.component';
import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  declarations: [ManagementTemplateComponent],
  imports: [RouterModule.forChild(modulesManagementRoutes)],
})
export class ModulesManagementModule {}
