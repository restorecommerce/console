import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';

import { AppEffects, AppFacade, appReducer } from './+state/app';

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.appState, appReducer),
    EffectsModule.forFeature([AppEffects]),
  ],
  providers: [AppFacade],
})
export class CoreStoreAppModule {}
