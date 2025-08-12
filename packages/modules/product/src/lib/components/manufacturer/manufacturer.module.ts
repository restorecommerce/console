import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ManufacturerIndexComponent } from './manufacturer-index.component';
import { ManufacturerViewComponent } from './manufacturer-view.component';
import { ManufacturerTemplateComponent } from './template/manufacturer-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ManufacturerTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.manufacturers
          .children.index.path,
        component: ManufacturerIndexComponent,
        title:
          ROUTER.pages.main.children.products.children.manufacturers.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.manufacturers
          .children.view.path,
        component: ManufacturerViewComponent,
        title:
          ROUTER.pages.main.children.products.children.manufacturers.children
            .view.title,
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
  declarations: [ManufacturerTemplateComponent, ManufacturerIndexComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesManufacturerModule {}
