import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { ICoreGraphql } from './types/interfaces';

@NgModule({
  exports: [ApolloModule],
})
export class CoreGraphQLModule {
  static forRoot(config: ICoreGraphql): ModuleWithProviders<CoreGraphQLModule> {
    return {
      ngModule: CoreGraphQLModule,
      providers: [
        {
          provide: APOLLO_OPTIONS,
          useFactory: (
            httpLink: HttpLink
          ): ApolloClientOptions<NormalizedCacheObject> => {
            return {
              link: httpLink.create({
                uri: config.api,
              }),
              cache: new InMemoryCache(),
            };
          },
          deps: [HttpLink],
        },
      ],
    };
  }
}
