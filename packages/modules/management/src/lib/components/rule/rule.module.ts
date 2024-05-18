import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { RuleComponent } from './rule.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .rules.children.index.path,
    component: RuleComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .rules.children.rules.path,
    component: RuleComponent,
  },
];

@NgModule({
  declarations: [RuleComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class RuleModule {}
