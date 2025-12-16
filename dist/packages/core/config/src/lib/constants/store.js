"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORE = void 0;
const app_1 = require("./app");
exports.STORE = {
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
            name: `${app_1.APP.name} | NgRx Store DevTools`,
            maxAge: 25,
        },
    },
};
//# sourceMappingURL=store.js.map