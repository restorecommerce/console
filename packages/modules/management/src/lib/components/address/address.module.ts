import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { AddressComponent } from './address.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.addresses.children
      .index.path,
    component: AddressComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.addresses.children
      .addresses.path,
    component: AddressComponent,
  },
];

@NgModule({
  declarations: [AddressComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class AddressModule {}
