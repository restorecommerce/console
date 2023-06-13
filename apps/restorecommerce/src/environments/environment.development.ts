import { IEnvironment } from '@console-core/config';

export const environment: Readonly<IEnvironment> = {
  production: false,
  storagePrefix: 'console.dev.',
  graphql: {
    api: 'https://backend.n-fuse.co/graphql',
  },
};
