import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: false,
  storagePrefix: 'console.dev.',
  graphql: {
    api: 'http://localhost:5000/graphql',
  },
};
