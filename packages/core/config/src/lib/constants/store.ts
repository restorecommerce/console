import { IStoreConstant } from '@console-core/types';

import { APP } from './app';

export const STORE: Readonly<IStoreConstant> = {
  states: {
    accountState: 'accountStateV1',
    appState: 'appStateV1',
    authnState: 'authnStateV1',
    countryState: 'countryStateV1',
    currencyState: 'currencyStateV1',
    customerState: 'customerStateV1',
    fulfillmentState: 'fulfillmentStateV1',
    iamState: 'iamStateV1',
    invoiceState: 'invoiceStateV1',
    localeState: 'localeStateV1',
    manaufacturer: 'manufacturerV1',
    orderState: 'orderStateV1',
    organizationState: 'organizationStateV4',
    organizationContextState: 'organizationContextStateV1',
    objectUploadState: 'objectUploadStateV1',
    policyState: 'policyStateV1',
    productState: 'productStateV1',
    productCategory: 'productCategoryV1',
    productPrototype: 'productPrototypeV1',
    priceGroup: 'priceGroupV1',
    roleState: 'roleStateV1',
    routerState: 'routerStateV1',
    taxState: 'taxStateV1',
    timezoneState: 'timezoneStateV1',
    shopState: 'shopStateV1',
  },
  config: {
    app: {
      notifications: {
        delay: 10,
      },
    },
  },
  ngrx: {
    storeDevtoolsModule: {
      name: `${APP.name} | NgRx Store DevTools`,
      maxAge: 25,
    },
  },
};
