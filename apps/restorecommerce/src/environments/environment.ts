import { IEnvironment } from '@console-core/config';

export const environment: Readonly<IEnvironment> = {
  production: true,
  storagePrefix: 'console.prod.',
  graphql: {
    api: 'https://backend.n-fuse.co/graphql',
  },
};
