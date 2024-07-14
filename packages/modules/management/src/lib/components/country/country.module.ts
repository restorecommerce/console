import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { CountryCreateComponent } from './country-create.component';
import { CountryEditComponent } from './country-edit.component';
import { CountryIndexComponent } from './country-index.component';
import { CountryViewComponent } from './country-view.component';
import { CountryTemplateComponent } from './template/country-template.component';
import { CountryDetailsComponent } from './views/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: CountryTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.countries.children
          .index.path,
        component: CountryIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.countries.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.children
          .view.path,
        component: CountryViewComponent,
        title:
          ROUTER.pages.main.children.management.children.countries.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.children
          .create.path,
        component: CountryCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.countries.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.children
          .edit.path,
        component: CountryEditComponent,
        title:
          ROUTER.pages.main.children.management.children.countries.children.edit
            .title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.countries.children
            .index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CountryIndexComponent,
    CountryCreateComponent,
    CountryEditComponent,
    CountryViewComponent,
    CountryDetailsComponent,
    CountryTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class CountryModule {}
