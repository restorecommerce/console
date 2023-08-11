import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
];

@NgModule({
  declarations: [ManagementComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class ManagementModule {}
