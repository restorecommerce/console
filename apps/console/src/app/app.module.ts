import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { UiVclCoreModule, UiVclModule } from '@console/ui/vcl';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      useHash: true,
    }),
    GraphQLModule,
    VCLDateAdapterModule.forRoot(),
    UiVclCoreModule,
    UiVclModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
