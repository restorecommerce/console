import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { AccessControlComponent } from './access-control.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .index.path,
    component: AccessControlComponent,
    title: ROUTER.pages.main.children.management.children.accessControl.title,
  },
];

@NgModule({
  declarations: [AccessControlComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class AccessControlModule {}
