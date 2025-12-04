import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesManagementRoutes)],
})
export class ModulesManagementModule {}
