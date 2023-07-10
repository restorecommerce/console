import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { CountryComponent } from './country.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.management.children.countries.children
      .index.path,
    component: CountryComponent,
  },
  {
    path: ROUTER.pages.main.children.management.children.countries.children
      .countries.path,
    component: CountryComponent,
  },
];

@NgModule({
  declarations: [CountryComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(routes)],
})
export class CountryModule {}
