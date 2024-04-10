import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { InvoiceCreateComponent } from './components/invoice-create.component';
import { InvoiceEditComponent } from './components/invoice-edit.component';
import { InvoiceIndexComponent } from './components/invoice-index.component';
import { InvoiceViewComponent } from './components/invoice-view.component';
import { InvoiceTemplateComponent } from './components/template/invoice-template.component';

export const modulesInvoiceRoutes: Route[] = [
  {
    path: '',
    component: InvoiceTemplateComponent,
    title: ROUTER.pages.main.children.invoices.title,
    children: [
      {
        path: ROUTER.pages.main.children.invoices.children.index.path,
        component: InvoiceIndexComponent,
        title: ROUTER.pages.main.children.invoices.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.invoices.children.view.path,
        component: InvoiceViewComponent,
        title: ROUTER.pages.main.children.invoices.children.view.title,
      },
      {
        path: ROUTER.pages.main.children.invoices.children.create.path,
        component: InvoiceCreateComponent,
        title: ROUTER.pages.main.children.invoices.children.create.title,
      },
      {
        path: ROUTER.pages.main.children.invoices.children.edit.path,
        component: InvoiceEditComponent,
        title: ROUTER.pages.main.children.invoices.children.edit.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.invoices.children.index.path,
      },
    ],
  },
];
