import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { modulesOrderRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesOrderRoutes)],
})
export class ModulesOrderModule {}
