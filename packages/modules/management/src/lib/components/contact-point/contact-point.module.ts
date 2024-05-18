import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ContactPointComponent } from './contact-point.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.contactPoints.children
      .index.path,
    component: ContactPointComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.contactPoints.children
      .contactPoints.path,
    component: ContactPointComponent,
  },
];

@NgModule({
  declarations: [ContactPointComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class ContactPointModule {}
