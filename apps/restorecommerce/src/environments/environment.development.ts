import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: false,
  storagePrefix: 'console.dev.',
  graphql: {
    api: 'https://backend.n-fuse.co/graphql',
  },
};
