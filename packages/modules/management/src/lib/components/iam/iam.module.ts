import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { IamComponent } from './iam.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.iam.children.index
      .path,
    component: IamComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.iam.children.iam.path,
    component: IamComponent,
  },
];

@NgModule({
  declarations: [IamComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class IamModule {}
