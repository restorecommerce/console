export interface IStoreConstant {
  readonly states: {
    readonly accountState: 'accountStateV1';
    readonly appState: 'appStateV1';
    readonly authnState: 'authnStateV1';
    readonly countryState: 'countryStateV1';
    readonly currencyState: 'currencyStateV1';
    readonly customerState: 'customerStateV1';
    readonly fulfillmentState: 'fulfillmentStateV1';
    readonly iamState: 'iamStateV1';
    readonly invoiceState: 'invoiceStateV1';
    readonly localeState: 'localeStateV1';
    readonly manaufacturer: 'manufacturerV1';
    readonly orderState: 'orderStateV1';
    readonly organizationState: 'organizationStateV4';
    readonly organizationContextState: 'organizationContextStateV1';
    readonly objectUploadState: 'objectUploadStateV1';
    readonly policyState: 'policyStateV1';
    readonly productState: 'productStateV1';
    readonly productCategory: 'productCategoryV1';
    readonly productPrototype: 'productPrototypeV1';
    readonly priceGroup: 'priceGroupV1';
    readonly roleState: 'roleStateV1';
    readonly routerState: 'routerStateV1';
    readonly taxState: 'taxStateV1';
    readonly timezoneState: 'timezoneStateV1';
    readonly shopState: 'shopStateV1';
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
