import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { OverflowComponent } from './components/overflow/overflow.component';
import { OverflowTemplateComponent } from './components/template/overflow-template.component';
import { modulesOverflowRoutes } from './lib.routes';

@NgModule({
  declarations: [OverflowTemplateComponent, OverflowComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesOverflowRoutes),
  ],
})
export class ModulesOverflowModule {}
