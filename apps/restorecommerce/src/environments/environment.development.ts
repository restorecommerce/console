import { IEnvironment } from '@console-core/types';

const baseUrl = 'http://localhost:5000';

export const environment: Readonly<IEnvironment> = {
  production: false,
  storagePrefix: 'console.dev.',
  urls: {
    api: baseUrl,
    graphql: `${baseUrl}/graphql`,
  },
};
