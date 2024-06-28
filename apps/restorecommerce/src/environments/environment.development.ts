import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: false,
  oidcKey:
    'cEpxYVdXQWNqdGRZVzZqQno5ZmhVUmJqYXBmaldvanI6dW05VU5vWVc2cXc5bVpDRGdNZVB5N2dDbkRHVEdSVkI=',
  storagePrefix: 'console.dev.',
  urls: {
    api: 'https://api.restorecommerce.io',
    graphql: 'https://api.restorecommerce.io/graphql',
  },
};
