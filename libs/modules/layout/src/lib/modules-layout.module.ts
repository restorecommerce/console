import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console/modules/shared';

import { IndexComponent } from './index/index.component';
import { modulesLayoutRoutes } from './lib.routes';
import { LayoutTemplateComponent } from './template/layout-template.component';

@NgModule({
  declarations: [LayoutTemplateComponent, IndexComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesLayoutRoutes)],
})
export class ModulesLayoutModule {}
