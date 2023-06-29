import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';

import {
  SecurityEffects,
  SecurityFacade,
  securityReducer,
} from './+state/security';

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.securityState, securityReducer),
    EffectsModule.forFeature([SecurityEffects]),
  ],
  providers: [SecurityFacade],
})
export class CoreStoreSecurityModule {}
