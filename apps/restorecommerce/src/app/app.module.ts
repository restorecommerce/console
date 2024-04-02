import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';

import { VCLProgressBarModule } from '@vcl/ng-vcl';

import { CoreGraphQLModule } from '@console-core/graphql';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStateModule } from './app.state.module';
import { AppHttpInterceptor } from './http-interceptor';
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
    VCLProgressBarModule,
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: environment.urls.api,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    {
      provide: TitleStrategy,
      useClass: RoutesTitleStrategyService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
