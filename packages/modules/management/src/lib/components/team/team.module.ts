import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { TeamComponent } from './team.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .teams.children.index.path,
    component: TeamComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.accessControl.children
      .teams.children.teams.path,
    component: TeamComponent,
  },
];

@NgModule({
  declarations: [TeamComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class TeamModule {}
