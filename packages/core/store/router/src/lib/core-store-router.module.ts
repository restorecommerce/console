import { NgModule } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';

import { RouterFacade } from './+state';

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
  ],
  providers: [RouterFacade],
})
export class CoreStoreRouterModule {}
