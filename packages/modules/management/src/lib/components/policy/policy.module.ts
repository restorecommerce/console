import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { PolicyIndexComponent } from './policy-index.component';
import { PolicyTemplateComponent } from './template/policy-template.component';

const routes: Routes = [
  {
    path: '',
    component: PolicyTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.polices.children.index.path,
        component: PolicyIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.index.title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.accessControl.children
            .polices.children.index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [PolicyIndexComponent, PolicyTemplateComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class PolicyModule {}
