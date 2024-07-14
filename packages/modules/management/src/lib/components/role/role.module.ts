import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { RoleCreateComponent } from './role-create.component';
import { RoleEditComponent } from './role-edit.component';
import { RoleIndexComponent } from './role-index.component';
import { RoleViewComponent } from './role-view.component';
import { RoleTemplateComponent } from './template/role-template.component';
import { RoleDetailsComponent } from './views/role-details.component';

const routes: Routes = [
  {
    path: '',
    component: RoleTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.children.index.path,
        component: RoleIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.children.view.path,
        component: RoleViewComponent,
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.view.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.children.create.path,
        component: RoleCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.create.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.children.edit.path,
        component: RoleEditComponent,
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.edit.title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    RoleIndexComponent,
    RoleCreateComponent,
    RoleEditComponent,
    RoleViewComponent,
    RoleDetailsComponent,
    RoleTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class RoleModule {}
