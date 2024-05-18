import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { InvoiceCreateComponent } from './components/invoice-create.component';
import { InvoiceEditComponent } from './components/invoice-edit.component';
import { InvoiceIndexComponent } from './components/invoice-index.component';
import { InvoiceViewComponent } from './components/invoice-view.component';
import { InvoiceTemplateComponent } from './components/template/invoice-template.component';
import { modulesInvoiceRoutes } from './lib.routes';

@NgModule({
  declarations: [
    InvoiceTemplateComponent,
    InvoiceIndexComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    InvoiceViewComponent,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesInvoiceRoutes),
  ],
})
export class ModulesInvoiceModule {}
