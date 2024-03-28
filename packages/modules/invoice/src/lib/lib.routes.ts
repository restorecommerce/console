import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceTemplateComponent } from './components/template/invoice-template.component';

export const modulesInvoiceRoutes: Route[] = [
  {
    path: '',
    component: InvoiceTemplateComponent,
    title: ROUTER.pages.main.children.invoice.title,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: InvoiceComponent,
      },
    ],
  },
];
