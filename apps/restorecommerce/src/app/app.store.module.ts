import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  NavigationActionTiming,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { STORE } from '@console-core/config';
import {
  CoreStoreRouterModule,
  handleLocalStorageSync,
  handleStoreLogger,
  RouterSerializer,
} from '@console-core/store/router';
import { CoreStoreSecurityModule } from '@console-core/store/security';
import { IStore } from '@console-core/types';

import { environment } from '../environments/environment';

const reducers: ActionReducerMap<IStore, Action> = !environment.production
  ? { router: routerReducer }
  : {};

const localStorageReducer = (
  reducer: ActionReducer<IStore>
): ActionReducer<IStore> =>
  handleLocalStorageSync(STORE, environment.storagePrefix)(reducer);

const metaReducers: MetaReducer<IStore>[] = !environment.production
  ? [localStorageReducer, handleStoreLogger]
  : [localStorageReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    CoreStoreSecurityModule,
    CoreStoreRouterModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    StoreDevtoolsModule.instrument({
      name: STORE.ngrx.storeDevtoolsModule.name,
      maxAge: STORE.ngrx.storeDevtoolsModule.maxAge,
      logOnly: environment.production,
    }),
  ],
})
export class AppStoreModule {}
