import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: true,
  oidcKey: 'VEVTVF9DTElFTlRfSUQ6VEVTVF9DTElFTlRfU0VDUkVU=',
  storagePrefix: 'console.prod.',
  urls: {
    api: 'http://127.0.0.1:5000',
    graphql: 'http://127.0.0.1:5000/graphql',
  },
};
