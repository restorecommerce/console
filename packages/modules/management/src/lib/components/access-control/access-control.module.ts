import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

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
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class AccessControlModule {}
