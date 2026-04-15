import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { InvoiceTemplateComponent } from './ui/components/invoice-template/invoice-template.component';
import { InvoiceViewComponent } from './ui/pages/invoice-view/invoice-view.component';
// import { InvoiceCreateComponent } from './ui/pages/invoice-create/invoices-create.component';
// import { InvoiceEditComponent } from './ui/pages/invoice-edit/invoices-edit.component';
// import { InvoiceViewComponent } from './ui/pages/invoice-view/invoices-view.component';

export const modulesInvoiceRoutes: Route[] = [
  {
    path: '',
    component: InvoiceTemplateComponent,
    title: ROUTER.pages.main.children.invoices.title,
    children: [
      /** Sidebar: always show fulfillment list */
      // {
      //   path: '',
      //   component: FulfillmentEmptyStateComponent,
      // },
      {
        path: ROUTER.pages.main.children.invoices.children.view.path,
        component: InvoiceViewComponent,
        title: ROUTER.pages.main.children.invoices.children.view.title,
      },
      // {
      //   path: ROUTER.pages.main.children.invoices.children.edit.path,
      //   component: InvoiceEditComponent,
      //   title: ROUTER.pages.main.children.invoices.children.edit.title,
      // },
      // {
      //   path: ROUTER.pages.main.children.invoices.children.create.path,
      //   component: InvoiceCreateComponent,
      //   title: ROUTER.pages.main.children.invoices.children.create.title,
      // },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.invoices.children.index.path,
      },
    ],
  },
];
