import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
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
  LocaleEffects,
  LocaleFacade,
  localeReducer,
  RouterFacade,
} from './+state';
import { AccountService, ApiService } from './services';

const facades = [
  AccountFacade,
  AppFacade,
  AuthnFacade,
  LocaleFacade,
  RouterFacade,
];
const services = [ApiService, AccountService];

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.appState, appReducer),
    EffectsModule.forFeature([AppEffects]),
    StoreModule.forFeature(STORE.states.accountState, accountReducer),
    EffectsModule.forFeature([AccountEffects]),
    StoreModule.forFeature(STORE.states.authnState, authnReducer),
    EffectsModule.forFeature([AuthnEffects]),
    StoreModule.forFeature(STORE.states.localeState, localeReducer),
    EffectsModule.forFeature([LocaleEffects]),
    StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
  ],
  providers: [...facades, ...services],
})
export class CoreStateModule {}
