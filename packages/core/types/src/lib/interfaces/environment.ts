export interface IEnvironment {
  readonly production: boolean;
  readonly oidcClientSecret: string;
  readonly storagePrefix: string;
  readonly urls: {
    readonly api: string;
    readonly graphql: string;
  };
}
