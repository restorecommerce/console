export interface IStoreConstant {
  readonly states: {
    readonly accountState: 'accountStateV1';
    readonly appState: 'appStateV1';
    readonly authnState: 'authnStateV1';
    readonly routerState: 'routerStateV1';
  };
  readonly config: {
    readonly app: {
      readonly notifications: {
        readonly delay: number;
      };
    };
  };
  readonly ngrx: {
    readonly storeDevtoolsModule: {
      readonly name: string;
      readonly maxAge: number;
    };
  };
}
