import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import {
  PrivateTemplateComponent,
  PublicTemplateComponent,
} from './components/template';
import { modulesMainRoutes } from './lib.routes';

@NgModule({
  declarations: [PrivateTemplateComponent, PublicTemplateComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesMainRoutes)],
})
export class ModulesMainModule {}
