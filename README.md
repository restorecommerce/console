# Console

Administrative Console for the [Restorecommerce](https://about.restorecommerce.io/)
e-commerce suite based on [Angular](https://angular.io/).

**Live demo at [console.restorecommerce.io](https://console.restorecommerce.io/)**.

## Goals and Features

- Performant by default
- Internationalization
- Responsive
- UI Components
- Theming

## Intended Use

The console is the daily companion of the sales admin and store admin to process orders and manager the offers.
The goal is to make it as convenient and efficient as possible for these tasks.

## Development

### Install

Run `npm i --legacy-peer-deps`

### Code Scaffolding

To generate code using Nx Angular, you can utilize the following commands:

- Generate a component: Run `npx nx g @nx/angular:component` component-name to generate a new component.
- Generate a directive: Use `npx nx g @nx/angular:directive` directive-name to generate a new directive.
- Generate a pipe: Execute `npx nx g @nx/angular:pipe` pipe-name to generate a new pipe.
- Generate a service: Run `npx nx g @nx/angular:service` service-name to generate a new service.
- Generate a class: Use `npx nx g @nx/angular:class` class-name to generate a new class.
- Generate a guard: Execute `npx nx g @nx/angular:guard` guard-name to generate a new guard.
- Generate an interface: Use `npx nx g @nx/angular:interface` interface-name to generate a new interface.
- Generate an enum: Execute `npx nx g @nx/angular:enum` enum-name to generate a new enum.
- Generate a module: Run `npx nx g @nx/angular:module` module-name to generate a new module.

For each command, replace component-name, directive-name, and so on, with the desired names for your code artifacts.

These commands utilize the @nx/angular plugin provided by Nx to generate the respective code files. Nx Angular follows best practices and conventions, making it easier to generate and manage your Angular code. For more information, you can visit the [Nx Angular documentation](https://nx.dev/packages/angular) for detailed instructions and examples.

### GraphQL Code Generation

To generate code from GraphQL schemas, you can utilize the following command: `npm run console:graphql:generate`. This command will generate TypeScript types and Angular services for GraphQL schemas and operations located in `./packages/modules/` with extension `.gql`.

### Development Server

To start the development server, run `npm run console:serve:dev`. Navigate to `http://localhost:4200/`. The app will automatically reload if you make any changes to the source files.

### Build

To build the project for production, run npm `run console:build:prod`. The build artifacts will be stored in the `dist/` directory.

### Running Linting

Run `npm run console:lint` to execute linting using [TSLint](https://palantir.github.io/tslint/) and [ESLint](https://eslint.org/) .

### Running Unit Tests

Run `npm run console:test` to execute the unit tests using [Jest](https://jestjs.io/).

### Running End-to-end Tests

Run `npm run console:e2e` to execute the end-to-end tests using [Cypress](https://www.cypress.io/).

### Additional Help

For more information and help regarding Nx Angular, use `npm run console:list` to list all available local workspace plugins, installed plugins, and their associated commands.

To find out more about a specific plugin, use the command "`npx nx list [plugin name]`".

You can also visit the [Nx Angular documentation](https://nx.dev/packages/angular) for more details.
