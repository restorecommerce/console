import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { AccountTemplateComponent } from './components/template/account-template.component';
import { modulesProfileRoutes } from './lib.routes';

@NgModule({
  imports: [ModulesSharedModule, RouterModule.forChild(modulesProfileRoutes)],
  declarations: [AccountTemplateComponent],
})
export class ModulesAccountModule {}
