import { IEnvironment } from '@console/types';

export const environment: Readonly<IEnvironment> = {
  production: true,
  storagePrefix: 'console.prod.',
  graphql: {
    uri: 'https://backend.n-fuse.co/graphql',
  },
};
