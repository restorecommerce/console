import { NgModule } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
  ],
})
export class CoreStoreModule {}
