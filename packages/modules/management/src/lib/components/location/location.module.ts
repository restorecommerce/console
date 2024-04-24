import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { LocationComponent } from './location.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.locations.children
      .index.path,
    component: LocationComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.locations.children
      .locations.path,
    component: LocationComponent,
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class LocationModule {}
