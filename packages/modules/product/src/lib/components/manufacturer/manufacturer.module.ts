import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ManufacturerCreateComponent } from './manufacturer-create.component';
import { ManufacturerEditComponent } from './manufacturer-edit.component';
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
        path: ROUTER.pages.main.children.products.children.manufacturers
          .children.create.path,
        component: ManufacturerCreateComponent,
        title:
          ROUTER.pages.main.children.products.children.manufacturers.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.manufacturers
          .children.edit.path,
        component: ManufacturerEditComponent,
        title:
          ROUTER.pages.main.children.products.children.manufacturers.children
            .edit.title,
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
export class ModulesManufacturerModule {}
