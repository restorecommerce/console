export interface IStoreConstant {
  readonly states: {
    readonly appState: 'appStateV1';
    readonly authnState: 'authnStateV1';
    readonly routerState: 'routerStateV1';
  };
  readonly config: {
    readonly app: {
      readonly notifications: {
        readonly delay: number;
        readonly duration: number;
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
