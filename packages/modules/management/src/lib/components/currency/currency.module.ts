import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { CurrencyCreateComponent } from './currency-create.component';
import { CurrencyEditComponent } from './currency-edit.component';
import { CurrencyIndexComponent } from './currency-index.component';
import { CurrencyViewComponent } from './currency-view.component';
import { CurrencyTemplateComponent } from './template/currency-template.component';
import { CurrencyDetailsComponent } from './views/currency-details.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.currencies.children
          .index.path,
        component: CurrencyIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.currencies.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.currencies.children
          .view.path,
        component: CurrencyViewComponent,
        title:
          ROUTER.pages.main.children.management.children.currencies.children
            .view.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.currencies.children
          .create.path,
        component: CurrencyCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.currencies.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.currencies.children
          .edit.path,
        component: CurrencyEditComponent,
        title:
          ROUTER.pages.main.children.management.children.currencies.children
            .edit.title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.currencies.children
            .index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CurrencyIndexComponent,
    CurrencyCreateComponent,
    CurrencyEditComponent,
    CurrencyViewComponent,
    CurrencyDetailsComponent,
    CurrencyTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class CurrencyModule {}
