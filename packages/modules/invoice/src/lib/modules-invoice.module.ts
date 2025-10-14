import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { InvoiceCreateComponent } from './components/invoice-create.component';
import { InvoiceEditComponent } from './components/invoice-edit.component';
import { InvoiceIndexComponent } from './components/invoice-index.component';
import { InvoiceViewDetailsComponent } from './components/invoice-view-details.component';
import { InvoiceViewComponent } from './components/invoice-view.component';
import { InvoiceTemplateComponent } from './components/template/invoice-template.component';
import { modulesInvoiceRoutes } from './lib.routes';
import { InvoiceSourcePipe } from './pipes/invoice-sources.pipe';

@NgModule({
  declarations: [
    InvoiceIndexComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    InvoiceViewComponent,
    InvoiceViewDetailsComponent,
    InvoiceTemplateComponent,
    InvoiceSourcePipe,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesInvoiceRoutes),
  ],
})
export class ModulesInvoiceModule {}
