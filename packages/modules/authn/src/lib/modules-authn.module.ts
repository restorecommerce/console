import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { APP } from '@console-core/config';

import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesAuthnRoutes)],
  providers: [],
})
export class ModulesAuthnModule {}
