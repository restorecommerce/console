import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { CategoryCreateComponent } from './category-create.component';
import { CategoryEditComponent } from './category-edit.component';
import { CategoryIndexComponent } from './category-index.component';
import { CategoryViewComponent } from './category-view.component';
import { CategoryTemplateComponent } from './template/category-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: CategoryTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.categories.children
          .index.path,
        component: CategoryIndexComponent,
        title:
          ROUTER.pages.main.children.products.children.categories.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.products.children.categories.children
          .view.path,
        component: CategoryViewComponent,
        title:
          ROUTER.pages.main.children.products.children.categories.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.products.children.categories.children
          .create.path,
        component: CategoryCreateComponent,
        title:
          ROUTER.pages.main.children.products.children.categories.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.categories.children
          .edit.path,
        component: CategoryEditComponent,
        title:
          ROUTER.pages.main.children.products.children.categories.children.edit
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
export class ModulesCategoryModule {}
