import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { PolicyComponent } from './policy.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .polices.children.index.path,
    component: PolicyComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .polices.children.polices.path,
    component: PolicyComponent,
  },
];

@NgModule({
  declarations: [PolicyComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class PolicyModule {}
