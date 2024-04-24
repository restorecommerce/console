import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { AccountTemplateComponent } from './components/template/account-template.component';
import { modulesAccountRoutes } from './lib.routes';

@NgModule({
  declarations: [AccountTemplateComponent],
  imports: [
    RouterModule.forChild(modulesAccountRoutes),
    ModulesUiModule.forChild(),
  ],
})
export class ModulesAccountModule {}
