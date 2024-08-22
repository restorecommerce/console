import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  ApolloClientOptions,
  DefaultOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { Store } from '@ngrx/store';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { take } from 'rxjs/operators';

import { IGraphqlConfig } from './types/interfaces';

@NgModule({
  exports: [ApolloModule],
})
export class CoreGraphQLModule {
  static forRoot(
    config: IGraphqlConfig
  ): ModuleWithProviders<CoreGraphQLModule> {
    return {
      ngModule: CoreGraphQLModule,
      providers: [
        {
          provide: APOLLO_OPTIONS,
          useFactory: (
            httpLink: HttpLink,
            store: Store
          ): ApolloClientOptions<NormalizedCacheObject> => {
            // Default options
            const defaultOptions: DefaultOptions = {
              watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
              },
              query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
              },
            };
            // Auth middleware
            const auth = setContext((_, { headers }) => {
              let token: string | null = null;
              store
                // TODO: Improve type
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .select((state: any) => state.authnStateV1.token)
                .pipe(take(1))
                .subscribe((t) => (token = t));

              return {
                headers: {
                  ...headers,
                  Authorization: token ? `Bearer ${token}` : '',
                },
              };
            });

            return {
              link: auth.concat(httpLink.create({ uri: config.api })),
              cache: new InMemoryCache({
                addTypename: false,
                typePolicies: {
                  IoRestorecommercePropertyProperty: {
                    // Disabled as the id fields are not actually unique identifiers and cache serves the same object
                    keyFields: false,
                  },
                },
              }),
              defaultOptions,
            };
          },
          deps: [HttpLink, Store],
        },
      ],
    };
  }
}
