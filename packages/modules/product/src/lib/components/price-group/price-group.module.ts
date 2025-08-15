import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { PriceGroupCreateComponent } from './price-group-create.component';
import { PriceGroupEditComponent } from './price-group-edit.component';
import { PriceGroupIndexComponent } from './price-group-index.component';
import { PriceGroupViewComponent } from './price-group-view.component';
import { PriceGroupTemplateComponent } from './template/price-group-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: PriceGroupTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.priceGroups.children
          .index.path,
        component: PriceGroupIndexComponent,
        title:
          ROUTER.pages.main.children.products.children.priceGroups.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.priceGroups.children
          .view.path,
        component: PriceGroupViewComponent,
        title:
          ROUTER.pages.main.children.products.children.priceGroups.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.products.children.priceGroups.children
          .create.path,
        component: PriceGroupCreateComponent,
        title:
          ROUTER.pages.main.children.products.children.priceGroups.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.priceGroups.children
          .edit.path,
        component: PriceGroupEditComponent,
        title:
          ROUTER.pages.main.children.products.children.priceGroups.children.edit
            .title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.products.children.catalogs.children.index
            .path,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesPriceGroupModule {}
