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
  loadInvoiceListEffect,
} from './store';

@NgModule({
  imports: [
    VCLNotifierModule,
    RouterModule.forChild(modulesInvoiceRoutes),
    StoreModule.forFeature(invoiceListFeatureKey, invoiceListReducer),

    EffectsModule.forFeature({
      loadInvoiceListEffect,
    }),
  ],
  providers: [RcNotifierService],
})
export class ModulesInvoiceModule {}
