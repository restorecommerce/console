import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console/modules/shared';

import { IndexComponent } from './index/index.component';
import { modulesOverflowRoutes } from './lib.routes';
import { OverflowTemplateComponent } from './template/overflow-template.component';

@NgModule({
  declarations: [OverflowTemplateComponent, IndexComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesOverflowRoutes)],
})
export class ModulesOverflowModule {}
