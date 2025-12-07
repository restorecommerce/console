import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import {
  RS_NOTIFICATION_DEFAULTS,
  RS_NOTIFICATION_TRANSLATE,
  RS_TRANSLATION,
  RsNotificationDefaults,
  RsNotificationModule,
  RsNotificationTranslateFn,
} from '@console/rs-ui';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { NotifierPosition } from '@vcl/ng-vcl';

import { CoreGraphQLModule } from '@console-core/graphql';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStateModule } from './app.state.module';
import { AppHttpInterceptor } from './http-interceptor';
import { RoutesTitleStrategyService } from './routes-title-strategy.service';
import { RsTranslateAdapter } from './rs-translate-adapter';

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
    RsNotificationModule.forRoot(),
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
    {
      provide: RS_TRANSLATION,
      useClass: RsTranslateAdapter,
    },
    {
      provide: RS_NOTIFICATION_DEFAULTS,
      useValue: {
        position: NotifierPosition.BottomRight,
        timeout: 4000,
        showCloseButton: true,
        icon: 'vcl:info',
      } satisfies RsNotificationDefaults,
    },
    {
      provide: RS_NOTIFICATION_TRANSLATE,
      useFactory:
        (translate: TranslateService): RsNotificationTranslateFn =>
        (key: string, params?: Record<string, unknown>) =>
          translate.instant(key, params),
      deps: [TranslateService],
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
