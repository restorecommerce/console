import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { modulesHomeRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesHomeRoutes)],
})
export class ModulesHomeModule {}
