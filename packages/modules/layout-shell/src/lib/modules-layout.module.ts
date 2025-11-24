import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { LayoutComponent } from './components/layout/layout.component';
import { LayoutTemplateComponent } from './components/template/layout-template.component';
import { modulesLayoutRoutes } from './lib.routes';

@NgModule({
  declarations: [LayoutTemplateComponent, LayoutComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesLayoutRoutes),
  ],
})
export class ModulesLayoutModule {}
