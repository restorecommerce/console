import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { modulesFulfillmentRoutes } from './fulfillment.routes';
import {
  fulfillmentListFeatureKey,
  fulfillmentListReducer,
  loadFulfillmentListEffect,
} from './store';

@NgModule({
  imports: [
    RouterModule.forChild(modulesFulfillmentRoutes),
    StoreModule.forFeature(fulfillmentListFeatureKey, fulfillmentListReducer),
    // StoreModule.forFeature(fulfillmentViewFeatureKey, fulfillmentViewReducer),
    EffectsModule.forFeature({
      loadFulfillmentListEffect,
    }),
  ],
})
export class ModulesFulfillmentModule {}
