import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { modulesOrderRoutes } from './order.routes';
import {
  loadFulfilmentsEffect,
  loadInvoicesEffect,
  loadOrderViewEffect,
  orderDetailEnteredEffect,
  orderViewFeatureKey,
  orderViewReducer,
} from './store';
import {
  loadOrderListEffect,
  OrderListFacade,
  orderListFeatureKey,
  orderListReducer,
} from './store/order-list';

@NgModule({
  imports: [
    RouterModule.forChild(modulesOrderRoutes),
    StoreModule.forFeature(orderListFeatureKey, orderListReducer),
    StoreModule.forFeature(orderViewFeatureKey, orderViewReducer),
    EffectsModule.forFeature({
      loadOrderListEffect,
      loadOrderViewEffect,
      loadInvoicesEffect,
      loadFulfilmentsEffect,
      orderDetailEnteredEffect,
    }),
  ],
  providers: [OrderListFacade],
})
export class OrderModule {}
