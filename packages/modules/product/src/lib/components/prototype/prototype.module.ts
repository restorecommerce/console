import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { PrototypeCreateComponent } from './prototype-create.component';
import { PrototypeEditComponent } from './prototype-edit.component';
import { PrototypeIndexComponent } from './prototype-index.component';
import { PrototypeViewComponent } from './prototype-view.component';
import { PrototypeTemplateComponent } from './template/prototype-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: PrototypeTemplateComponent,
    title: ROUTER.pages.main.children.products.children.prototypes.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.prototypes.children
          .index.path,
        component: PrototypeIndexComponent,
        title:
          ROUTER.pages.main.children.products.children.prototypes.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.products.children.prototypes.children
          .view.path,
        component: PrototypeViewComponent,
        title:
          ROUTER.pages.main.children.products.children.prototypes.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.products.children.prototypes.children
          .create.path,
        component: PrototypeCreateComponent,
        title:
          ROUTER.pages.main.children.products.children.prototypes.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.prototypes.children
          .edit.path,
        component: PrototypeEditComponent,
        title:
          ROUTER.pages.main.children.products.children.prototypes.children.edit
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
export class ModulesPrototypeModule {}
