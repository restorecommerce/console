import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { PublicTemplateComponent } from './components/template/public-template.component';
import { modulesPublicRoutes } from './lib.routes';

@NgModule({
  declarations: [PublicTemplateComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesPublicRoutes)],
})
export class ModulesPublicModule {}
