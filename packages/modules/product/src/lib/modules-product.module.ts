import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ProductTemplateComponent } from './components/template/product-template.component';
import { modulesProductRoutes } from './lib.routes';

@NgModule({
  declarations: [ProductTemplateComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesProductModule {}
