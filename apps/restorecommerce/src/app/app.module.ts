import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreGraphQLModule } from '@console-core/graphql';
import { ModulesUiModule } from '@console-modules/ui';

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
    ModulesUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
