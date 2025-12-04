import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
];

@NgModule({
  imports: [ManagementComponent, RouterModule.forChild(routes)],
})
export class ManagementModule {}
