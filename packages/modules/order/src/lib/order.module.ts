import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { modulesOrderRoutes } from './order.routes';
import {
  loadOrderListEffect,
  loadOrderListOnNavigationEffect,
  OrderListFacade,
  orderListFeatureKey,
  orderListReducer,
} from './store/order-list';

@NgModule({
  imports: [
    RouterModule.forChild(modulesOrderRoutes),
    StoreModule.forFeature(orderListFeatureKey, orderListReducer),
    EffectsModule.forFeature({
      loadOrderListOnNavigationEffect,
      loadOrderListEffect,
    }),
  ],
  providers: [OrderListFacade],
})
export class OrderModule {}
