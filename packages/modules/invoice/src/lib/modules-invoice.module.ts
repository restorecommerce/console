import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceTemplateComponent } from './components/template/invoice-template.component';
import { modulesInvoiceRoutes } from './lib.routes';

@NgModule({
  declarations: [InvoiceTemplateComponent, InvoiceComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesInvoiceRoutes)],
})
export class ModulesInvoiceModule {}
