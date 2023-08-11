import { IEnvironment } from '@console-core/types';

const baseUrl = 'https://api.restorecommerce.io';

export const environment: Readonly<IEnvironment> = {
  production: true,
  storagePrefix: 'console.prod.',
  urls: {
    api: baseUrl,
    graphql: `${baseUrl}/graphql`,
  },
};
