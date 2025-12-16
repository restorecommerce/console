import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RC_LAYOUT_CONFIG } from '@console/rc-ui';

import { modulesMainRoutes } from './lib.routes';
import { MAIN_LAYOUT_CONFIG } from './main-layout.config';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(modulesMainRoutes)],
  providers: [{ provide: RC_LAYOUT_CONFIG, useValue: MAIN_LAYOUT_CONFIG }],
})
export class ModulesMainModule {}
