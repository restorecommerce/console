import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ProductTemplateComponent } from './components/template/product-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ProductTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.catalogs.path,
        loadChildren: () =>
          import('./components/catalog/catalog.module').then(
            (m) => m.ModulesProductModule
          ),
        title: ROUTER.pages.main.children.products.children.catalogs.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.manufacturers.path,
        loadChildren: () =>
          import('./components/manufacturer/manufacturer.module').then(
            (m) => m.ModulesManufacturerModule
          ),
        title: ROUTER.pages.main.children.products.children.manufacturers.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.categories.path,
        loadChildren: () =>
          import('./components/category/category.module').then(
            (m) => m.ModulesCategoryModule
          ),
        title: ROUTER.pages.main.children.products.children.categories.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.prototypes.path,
        loadChildren: () =>
          import('./components/prototype/prototype.module').then(
            (m) => m.ModulesPrototypeModule
          ),
        title: ROUTER.pages.main.children.products.children.prototypes.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.priceGroups.path,
        loadChildren: () =>
          import('./components/price-group/price-group.module').then(
            (m) => m.ModulesPriceGroupModule
          ),
        title: ROUTER.pages.main.children.products.children.priceGroups.title,
      },
    ],
  },
];
