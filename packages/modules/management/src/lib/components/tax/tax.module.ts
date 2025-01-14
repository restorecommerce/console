import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { TaxCreateComponent } from './tax-create.component';
import { TaxEditComponent } from './tax-edit.component';
import { TaxIndexComponent } from './tax-index.component';
import { TaxViewComponent } from './tax-view.component';
import { TaxTemplateComponent } from './template/tax-template.component';
import { TaxDetailsComponent } from './views/tax-details.component';

const routes: Routes = [
  {
    path: '',
    component: TaxTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.taxes.children
          .index.path,
        component: TaxIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.taxes.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.taxes.children.view
          .path,
        component: TaxViewComponent,
        title:
          ROUTER.pages.main.children.management.children.taxes.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.taxes.children
          .create.path,
        component: TaxCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.taxes.children.create
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.taxes.children.edit
          .path,
        component: TaxEditComponent,
        title:
          ROUTER.pages.main.children.management.children.taxes.children.edit
            .title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.taxes.children.index
            .path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TaxIndexComponent,
    TaxCreateComponent,
    TaxEditComponent,
    TaxViewComponent,
    TaxDetailsComponent,
    TaxTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class TaxModule {}
