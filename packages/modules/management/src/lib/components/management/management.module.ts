import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
];

@NgModule({
  declarations: [ManagementComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class ManagementModule {}
