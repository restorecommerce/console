import { IEnvironment } from '@console/types';

export const environment: Readonly<IEnvironment> = {
  production: false,
  storagePrefix: 'console.dev.',
  graphql: {
    uri: 'https://backend.n-fuse.co/graphql',
  },
};
