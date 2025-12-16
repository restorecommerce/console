export interface IEnvironment {
    readonly production: boolean;
    readonly oidcKey: string;
    readonly storagePrefix: string;
    readonly urls: {
        readonly api: string;
        readonly graphql: string;
    };
}
