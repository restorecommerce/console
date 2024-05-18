import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ContractComponent } from './contract.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.contracts.children
      .index.path,
    component: ContractComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.contracts.children
      .contracts.path,
    component: ContractComponent,
  },
];

@NgModule({
  declarations: [ContractComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class ContractModule {}
