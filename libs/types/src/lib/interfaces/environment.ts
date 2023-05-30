export interface IEnvironment {
  readonly production: boolean;
  readonly storagePrefix: string;
  readonly graphql: {
    readonly uri: string;
  };
}
