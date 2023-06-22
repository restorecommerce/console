export interface IStoreConstant {
  readonly states: {
    readonly appState: 'appStateV1';
    readonly routerState: 'routerStateV1';
  };
  readonly ngrx: {
    readonly storeDevtoolsModule: {
      readonly name: string;
      readonly maxAge: number;
    };
  };
}
