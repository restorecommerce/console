import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';

// import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { CoreGraphQLModule } from '@console-core/graphql';
// import { ModulesUiBaseModule, ModulesUiModule } from '@console-modules/ui';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStateModule } from './app.state.module';
import { RoutesTitleStrategyService } from './routes-title-strategy.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
    CoreGraphQLModule.forRoot({
      api: environment.urls.graphql,
    }),
    AppStateModule,
    // ModulesUiBaseModule,
    // ModulesUiModule.forRoot(),
    // VCLDateAdapterModule.forRoot(),
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: environment.urls.api,
    },
    {
      provide: TitleStrategy,
      useClass: RoutesTitleStrategyService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
