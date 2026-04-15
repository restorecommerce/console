import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RcNotifierService } from '@console/rc-ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { VCLNotifierModule } from '@vcl/ng-vcl';

import { modulesInvoiceRoutes } from './invoice.routes';
import {
  invoiceListFeatureKey,
  invoiceListReducer,
  invoiceViewFeatureKey,
  invoiceViewReducer,
  loadInvoiceListEffect,
  loadInvoiceViewEffect,
} from './store';

@NgModule({
  imports: [
    VCLNotifierModule,
    RouterModule.forChild(modulesInvoiceRoutes),
    StoreModule.forFeature(invoiceListFeatureKey, invoiceListReducer),
    StoreModule.forFeature(invoiceViewFeatureKey, invoiceViewReducer),

    EffectsModule.forFeature({
      loadInvoiceListEffect,
      loadInvoiceViewEffect,
    }),
  ],
  providers: [RcNotifierService],
})
export class ModulesInvoiceModule {}
