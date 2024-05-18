import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { RoleComponent } from './role.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .roles.children.index.path,
    component: RoleComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .roles.children.roles.path,
    component: RoleComponent,
  },
];

@NgModule({
  declarations: [RoleComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class RoleModule {}
