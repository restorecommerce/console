import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';

import {
  AccountEffects,
  AccountFacade,
  accountReducer,
  AppEffects,
  AppFacade,
  appReducer,
  AuthnEffects,
  AuthnFacade,
  authnReducer,
  OrganizationContextFacade,
  organizationContextReducer,
  RouterFacade,
} from './+state';

const facades = [
  AccountFacade,
  AppFacade,
  AuthnFacade,
  OrganizationContextFacade,
  RouterFacade,
];

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.appState, appReducer),
    EffectsModule.forFeature([AppEffects]),
    StoreModule.forFeature(STORE.states.accountState, accountReducer),
    EffectsModule.forFeature([AccountEffects]),
    StoreModule.forFeature(STORE.states.authnState, authnReducer),
    EffectsModule.forFeature([AuthnEffects]),
    StoreModule.forFeature(
      STORE.states.organizationContextState,
      organizationContextReducer
    ),
  ],
  providers: [...facades],
})
export class CoreStateModule {}
