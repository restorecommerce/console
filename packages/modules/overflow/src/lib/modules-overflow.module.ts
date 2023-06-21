import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { OverflowComponent } from './components/overflow/overflow.component';
import { OverflowTemplateComponent } from './components/template/overflow-template.component';
import { modulesOverflowRoutes } from './lib.routes';

@NgModule({
  declarations: [OverflowTemplateComponent, OverflowComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesOverflowRoutes)],
})
export class ModulesOverflowModule {}
