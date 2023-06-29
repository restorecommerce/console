import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { CoreGraphQLModule } from '@console-core/graphql';
import { ModulesUiBaseModule, ModulesUiModule } from '@console-modules/ui';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStoreModule } from './app.store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
    CoreGraphQLModule.forRoot({
      api: environment.graphql.api,
    }),
    AppStoreModule,
    ModulesUiBaseModule,
    ModulesUiModule.forRoot(),
    VCLDateAdapterModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
