import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ProductTemplateComponent } from './components/template/product-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ProductTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      // {
      //   path: ROUTER.pages.main.children.management.children.index.path,
      //   loadChildren: () =>
      //     import('./components/management/management.module').then(
      //       (m) => m.ManagementModule
      //     ),
      //   title: ROUTER.pages.main.children.management.children.index.title,
      // },
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
        title: ROUTER.pages.main.children.products.children.catalogs.title,
      },
    ],
  },
];
