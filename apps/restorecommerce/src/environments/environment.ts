import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: true,
  oidcKey: 'VEVTVF9DTElFTlRfSUQ6VEVTVF9DTElFTlRfU0VDUkVU=',
  storagePrefix: 'console.prod.',
  urls: {
    api: 'http://192.168.1.38:5000',
    graphql: 'http://192.168.1.38:5000/graphql',
  },
};
