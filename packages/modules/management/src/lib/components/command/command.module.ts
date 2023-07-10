import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { CommandComponent } from './command.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.commands.children.index
      .path,
    component: CommandComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.commands.children
      .commands.path,
    component: CommandComponent,
  },
];

@NgModule({
  declarations: [CommandComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class CommandModule {}
