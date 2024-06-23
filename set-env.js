const { writeFileSync } = require('fs');
const { resolve } = require('path');

const isProduction = process.argv[2] === 'production';
const oidcKey = process.env.CONSOLE_OIDC_KEY;
const apiUrl = process.env.CONSOLE_API_URL || 'http://127.0.0.1:5000';
const targetPath = resolve(
  __dirname,
  `apps/restorecommerce/src/environments/environment${
    isProduction ? '' : '.development'
  }.ts`
);

// Define environment variables
const envConfigFile = `import { IEnvironment } from '@console-core/types';

export const environment: Readonly<IEnvironment> = {
  production: ${isProduction},
  oidcKey: '${oidcKey}',
  storagePrefix: '${isProduction ? 'console.prod.' : 'console.dev.'}',
  urls: {
    api: '${apiUrl}',
    graphql: '${apiUrl}/graphql',
  },
};
`;

// Write the content to the environment file
writeFileSync(targetPath, envConfigFile, 'utf8');
console.log(`Environment variables written to ${targetPath}`);
