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
  CountryEffects,
  CountryFacade,
  countryReducer,
  LocaleEffects,
  LocaleFacade,
  localeReducer,
  OrderEffects,
  OrderFacade,
  orderReducer,
  RouterFacade,
  TimezoneEffects,
  TimezoneFacade,
  timezoneReducer,
} from './+state';

const facades = [
  AccountFacade,
  AppFacade,
  AuthnFacade,
  CountryFacade,
  LocaleFacade,
  OrderFacade,
  RouterFacade,
  TimezoneFacade,
];

@NgModule({
  imports: [
    StoreModule.forFeature(STORE.states.appState, appReducer),
    EffectsModule.forFeature([AppEffects]),
    StoreModule.forFeature(STORE.states.accountState, accountReducer),
    EffectsModule.forFeature([AccountEffects]),
    StoreModule.forFeature(STORE.states.authnState, authnReducer),
    EffectsModule.forFeature([AuthnEffects]),
    StoreModule.forFeature(STORE.states.countryState, countryReducer),
    EffectsModule.forFeature([CountryEffects]),
    StoreModule.forFeature(STORE.states.localeState, localeReducer),
    EffectsModule.forFeature([LocaleEffects]),
    StoreModule.forFeature(STORE.states.orderState, orderReducer),
    EffectsModule.forFeature([OrderEffects]),
    StoreModule.forFeature(STORE.states.timezoneState, timezoneReducer),
    EffectsModule.forFeature([TimezoneEffects]),
    StoreModule.forFeature(STORE.states.routerState, fromRouter.routerReducer),
  ],
  providers: [...facades],
})
export class CoreStateModule {}
