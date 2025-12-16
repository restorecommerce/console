import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { MODULES_RS_UI_BASE_PROVIDERS } from '@console/rc-ui';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { CoreGraphQLModule } from '@console-core/graphql';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStateModule } from './app.state.module';
import { AppHttpInterceptor } from './http-interceptor';
import { RoutesTitleStrategyService } from './routes-title-strategy.service';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    AppStateModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreGraphQLModule.forRoot({
      api: environment.urls.graphql,
    }),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
    TranslateModule.forRoot({
      fallbackLang: 'de',
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      isolate: false,
    }),
  ],
  providers: [
    ...MODULES_RS_UI_BASE_PROVIDERS,
    {
      provide: 'oidcKey',
      useValue: environment.oidcKey,
    },
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
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
