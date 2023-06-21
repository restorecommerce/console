import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { CoreGraphQLModule } from '@console-core/graphql';
import { ModulesUiCoreModule, ModulesUiModule } from '@console-modules/ui';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

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
    ModulesUiCoreModule,
    ModulesUiModule.forRoot(),
    VCLDateAdapterModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
