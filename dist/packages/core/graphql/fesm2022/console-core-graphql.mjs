import * as i0 from '@angular/core';
import { NgModule, Injectable } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { Store } from '@ngrx/store';
import * as i1 from 'apollo-angular';
import { APOLLO_OPTIONS, ApolloModule, gql } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { take } from 'rxjs/operators';

class CoreGraphQLModule {
    static forRoot(config) {
        return {
            ngModule: CoreGraphQLModule,
            providers: [
                {
                    provide: APOLLO_OPTIONS,
                    useFactory: (httpLink, store) => {
                        // Default options
                        const defaultOptions = {
                            watchQuery: {
                                fetchPolicy: 'no-cache',
                                errorPolicy: 'ignore',
                            },
                            query: {
                                fetchPolicy: 'no-cache',
                                errorPolicy: 'all',
                            },
                        };
                        // Auth middleware
                        const auth = setContext((_, { headers }) => {
                            let token = null;
                            store
                                // TODO: Improve type
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .select((state) => state.authnStateV1.token)
                                .pipe(take(1))
                                .subscribe((t) => (token = t));
                            return {
                                headers: {
                                    ...headers,
                                    Authorization: token ? `Bearer ${token}` : '',
                                },
                            };
                        });
                        return {
                            link: auth.concat(httpLink.create({ uri: config.api })),
                            cache: new InMemoryCache({
                                addTypename: false,
                                typePolicies: {
                                    IoRestorecommercePropertyProperty: {
                                        // Disabled as the id fields are not actually unique identifiers and cache serves the same object
                                        keyFields: false,
                                    },
                                },
                            }),
                            defaultOptions,
                        };
                    },
                    deps: [HttpLink, Store],
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreGraphQLModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.12", ngImport: i0, type: CoreGraphQLModule, exports: [ApolloModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreGraphQLModule, imports: [ApolloModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CoreGraphQLModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ApolloModule],
                }]
        }] });

var IoRestorecommerceAccessControlResponseDecision;
(function (IoRestorecommerceAccessControlResponseDecision) {
    IoRestorecommerceAccessControlResponseDecision["Deny"] = "DENY";
    IoRestorecommerceAccessControlResponseDecision["Indeterminate"] = "INDETERMINATE";
    IoRestorecommerceAccessControlResponseDecision["NotApplicable"] = "NOT_APPLICABLE";
    IoRestorecommerceAccessControlResponseDecision["Permit"] = "PERMIT";
})(IoRestorecommerceAccessControlResponseDecision || (IoRestorecommerceAccessControlResponseDecision = {}));
var IoRestorecommerceCommandCommandParameterParameterType;
(function (IoRestorecommerceCommandCommandParameterParameterType) {
    IoRestorecommerceCommandCommandParameterParameterType["ArrayValue"] = "array_value";
    IoRestorecommerceCommandCommandParameterParameterType["BooleanValue"] = "boolean_value";
    IoRestorecommerceCommandCommandParameterParameterType["NumberValue"] = "number_value";
    IoRestorecommerceCommandCommandParameterParameterType["ObjectValue"] = "object_value";
    IoRestorecommerceCommandCommandParameterParameterType["StringValue"] = "string_value";
})(IoRestorecommerceCommandCommandParameterParameterType || (IoRestorecommerceCommandCommandParameterParameterType = {}));
var IoRestorecommerceCustomerCustomerType;
(function (IoRestorecommerceCustomerCustomerType) {
    IoRestorecommerceCustomerCustomerType["Commercial"] = "COMMERCIAL";
    IoRestorecommerceCustomerCustomerType["Private"] = "PRIVATE";
    IoRestorecommerceCustomerCustomerType["PublicSector"] = "PUBLIC_SECTOR";
})(IoRestorecommerceCustomerCustomerType || (IoRestorecommerceCustomerCustomerType = {}));
var IoRestorecommerceFilterFilterOpOperator;
(function (IoRestorecommerceFilterFilterOpOperator) {
    IoRestorecommerceFilterFilterOpOperator["And"] = "and";
    IoRestorecommerceFilterFilterOpOperator["Or"] = "or";
})(IoRestorecommerceFilterFilterOpOperator || (IoRestorecommerceFilterFilterOpOperator = {}));
var IoRestorecommerceFilterFilterOperation;
(function (IoRestorecommerceFilterFilterOperation) {
    IoRestorecommerceFilterFilterOperation["Eq"] = "eq";
    IoRestorecommerceFilterFilterOperation["Gt"] = "gt";
    IoRestorecommerceFilterFilterOperation["Gte"] = "gte";
    IoRestorecommerceFilterFilterOperation["ILike"] = "iLike";
    IoRestorecommerceFilterFilterOperation["In"] = "in";
    IoRestorecommerceFilterFilterOperation["IsEmpty"] = "isEmpty";
    IoRestorecommerceFilterFilterOperation["Lt"] = "lt";
    IoRestorecommerceFilterFilterOperation["Lte"] = "lte";
    IoRestorecommerceFilterFilterOperation["Neq"] = "neq";
})(IoRestorecommerceFilterFilterOperation || (IoRestorecommerceFilterFilterOperation = {}));
var IoRestorecommerceFilterFilterValueType;
(function (IoRestorecommerceFilterFilterValueType) {
    IoRestorecommerceFilterFilterValueType["Array"] = "ARRAY";
    IoRestorecommerceFilterFilterValueType["Boolean"] = "BOOLEAN";
    IoRestorecommerceFilterFilterValueType["Date"] = "DATE";
    IoRestorecommerceFilterFilterValueType["Number"] = "NUMBER";
    IoRestorecommerceFilterFilterValueType["String"] = "STRING";
})(IoRestorecommerceFilterFilterValueType || (IoRestorecommerceFilterFilterValueType = {}));
var IoRestorecommerceFulfillmentFulfillmentState;
(function (IoRestorecommerceFulfillmentFulfillmentState) {
    IoRestorecommerceFulfillmentFulfillmentState["Cancelled"] = "CANCELLED";
    IoRestorecommerceFulfillmentFulfillmentState["Complete"] = "COMPLETE";
    IoRestorecommerceFulfillmentFulfillmentState["Failed"] = "FAILED";
    IoRestorecommerceFulfillmentFulfillmentState["Invalid"] = "INVALID";
    IoRestorecommerceFulfillmentFulfillmentState["InTransit"] = "IN_TRANSIT";
    IoRestorecommerceFulfillmentFulfillmentState["Pending"] = "PENDING";
    IoRestorecommerceFulfillmentFulfillmentState["Retoure"] = "RETOURE";
    IoRestorecommerceFulfillmentFulfillmentState["RetoureComplete"] = "RETOURE_COMPLETE";
    IoRestorecommerceFulfillmentFulfillmentState["Submitted"] = "SUBMITTED";
    IoRestorecommerceFulfillmentFulfillmentState["Withdrawn"] = "WITHDRAWN";
})(IoRestorecommerceFulfillmentFulfillmentState || (IoRestorecommerceFulfillmentFulfillmentState = {}));
var IoRestorecommerceInvoicePaymentState;
(function (IoRestorecommerceInvoicePaymentState) {
    IoRestorecommerceInvoicePaymentState["Payed"] = "PAYED";
    IoRestorecommerceInvoicePaymentState["Unpayed"] = "UNPAYED";
})(IoRestorecommerceInvoicePaymentState || (IoRestorecommerceInvoicePaymentState = {}));
var IoRestorecommerceJobBackoffType;
(function (IoRestorecommerceJobBackoffType) {
    IoRestorecommerceJobBackoffType["Exponential"] = "EXPONENTIAL";
    IoRestorecommerceJobBackoffType["Fixed"] = "FIXED";
})(IoRestorecommerceJobBackoffType || (IoRestorecommerceJobBackoffType = {}));
var IoRestorecommerceJobJobOptionsPriority;
(function (IoRestorecommerceJobJobOptionsPriority) {
    IoRestorecommerceJobJobOptionsPriority["Critical"] = "CRITICAL";
    IoRestorecommerceJobJobOptionsPriority["High"] = "HIGH";
    IoRestorecommerceJobJobOptionsPriority["Low"] = "LOW";
    IoRestorecommerceJobJobOptionsPriority["Medium"] = "MEDIUM";
    IoRestorecommerceJobJobOptionsPriority["Normal"] = "NORMAL";
})(IoRestorecommerceJobJobOptionsPriority || (IoRestorecommerceJobJobOptionsPriority = {}));
var IoRestorecommerceJobJobReadRequestSortOrder;
(function (IoRestorecommerceJobJobReadRequestSortOrder) {
    IoRestorecommerceJobJobReadRequestSortOrder["Ascending"] = "ASCENDING";
    IoRestorecommerceJobJobReadRequestSortOrder["Descending"] = "DESCENDING";
    IoRestorecommerceJobJobReadRequestSortOrder["Unsorted"] = "UNSORTED";
})(IoRestorecommerceJobJobReadRequestSortOrder || (IoRestorecommerceJobJobReadRequestSortOrder = {}));
var IoRestorecommerceOrderFulfillmentInvoiceMode;
(function (IoRestorecommerceOrderFulfillmentInvoiceMode) {
    IoRestorecommerceOrderFulfillmentInvoiceMode["Exclude"] = "EXCLUDE";
    IoRestorecommerceOrderFulfillmentInvoiceMode["Include"] = "INCLUDE";
})(IoRestorecommerceOrderFulfillmentInvoiceMode || (IoRestorecommerceOrderFulfillmentInvoiceMode = {}));
var IoRestorecommerceOrderOrderState;
(function (IoRestorecommerceOrderOrderState) {
    IoRestorecommerceOrderOrderState["Cancelled"] = "CANCELLED";
    IoRestorecommerceOrderOrderState["Completed"] = "COMPLETED";
    IoRestorecommerceOrderOrderState["Invalid"] = "INVALID";
    IoRestorecommerceOrderOrderState["Pending"] = "PENDING";
    IoRestorecommerceOrderOrderState["Submitted"] = "SUBMITTED";
    IoRestorecommerceOrderOrderState["Withdrawn"] = "WITHDRAWN";
})(IoRestorecommerceOrderOrderState || (IoRestorecommerceOrderOrderState = {}));
var IoRestorecommercePaymentMethodPaymentMethodEnum;
(function (IoRestorecommercePaymentMethodPaymentMethodEnum) {
    IoRestorecommercePaymentMethodPaymentMethodEnum["DirectDebit"] = "DIRECT_DEBIT";
    IoRestorecommercePaymentMethodPaymentMethodEnum["Paypal"] = "PAYPAL";
    IoRestorecommercePaymentMethodPaymentMethodEnum["WireTransfer"] = "WIRE_TRANSFER";
})(IoRestorecommercePaymentMethodPaymentMethodEnum || (IoRestorecommercePaymentMethodPaymentMethodEnum = {}));
var IoRestorecommercePaymentMethodTransferTypeEnum;
(function (IoRestorecommercePaymentMethodTransferTypeEnum) {
    IoRestorecommercePaymentMethodTransferTypeEnum["Both"] = "BOTH";
    IoRestorecommercePaymentMethodTransferTypeEnum["Receive"] = "RECEIVE";
    IoRestorecommercePaymentMethodTransferTypeEnum["Send"] = "SEND";
})(IoRestorecommercePaymentMethodTransferTypeEnum || (IoRestorecommercePaymentMethodTransferTypeEnum = {}));
var IoRestorecommercePaymentProvider;
(function (IoRestorecommercePaymentProvider) {
    IoRestorecommercePaymentProvider["Adyen"] = "Adyen";
    IoRestorecommercePaymentProvider["AuthorizeNet"] = "AuthorizeNet";
    IoRestorecommercePaymentProvider["AuthorizeNetCim"] = "AuthorizeNetCIM";
    IoRestorecommercePaymentProvider["AxcessMs"] = "AxcessMS";
    IoRestorecommercePaymentProvider["BbsNetaxept"] = "BBSNetaxept";
    IoRestorecommercePaymentProvider["Balanced"] = "Balanced";
    IoRestorecommercePaymentProvider["BamboraAsiaPacific"] = "BamboraAsiaPacific";
    IoRestorecommercePaymentProvider["BankFrick"] = "BankFrick";
    IoRestorecommercePaymentProvider["Banwire"] = "Banwire";
    IoRestorecommercePaymentProvider["BarclaysePdqExtraPlus"] = "BarclaysePDQExtraPlus";
    IoRestorecommercePaymentProvider["Be2Bill"] = "Be2Bill";
    IoRestorecommercePaymentProvider["Beanstreamcom"] = "Beanstreamcom";
    IoRestorecommercePaymentProvider["BluePay"] = "BluePay";
    IoRestorecommercePaymentProvider["Borgun"] = "Borgun";
    IoRestorecommercePaymentProvider["Braintree"] = "Braintree";
    IoRestorecommercePaymentProvider["BridgePay"] = "BridgePay";
    IoRestorecommercePaymentProvider["CamsCentralAccountManagementSystem"] = "CAMSCentralAccountManagementSystem";
    IoRestorecommercePaymentProvider["CardSave"] = "CardSave";
    IoRestorecommercePaymentProvider["CardStream"] = "CardStream";
    IoRestorecommercePaymentProvider["Cardknox"] = "Cardknox";
    IoRestorecommercePaymentProvider["Cashnet"] = "Cashnet";
    IoRestorecommercePaymentProvider["Cecabank"] = "Cecabank";
    IoRestorecommercePaymentProvider["Cenpos"] = "Cenpos";
    IoRestorecommercePaymentProvider["Checkoutcom"] = "Checkoutcom";
    IoRestorecommercePaymentProvider["Clearhaus"] = "Clearhaus";
    IoRestorecommercePaymentProvider["Commercegate"] = "Commercegate";
    IoRestorecommercePaymentProvider["Conekta"] = "Conekta";
    IoRestorecommercePaymentProvider["CyberSource"] = "CyberSource";
    IoRestorecommercePaymentProvider["Dibs"] = "DIBS";
    IoRestorecommercePaymentProvider["DataCash"] = "DataCash";
    IoRestorecommercePaymentProvider["EvoCanada"] = "EVOCanada";
    IoRestorecommercePaymentProvider["Efsnet"] = "Efsnet";
    IoRestorecommercePaymentProvider["ElavonMyVirtualMerchant"] = "ElavonMyVirtualMerchant";
    IoRestorecommercePaymentProvider["Exact"] = "Exact";
    IoRestorecommercePaymentProvider["Ezic"] = "Ezic";
    IoRestorecommercePaymentProvider["FatZebra"] = "FatZebra";
    IoRestorecommercePaymentProvider["FederatedCanada"] = "FederatedCanada";
    IoRestorecommercePaymentProvider["FinansbankWebPos"] = "FinansbankWebPOS";
    IoRestorecommercePaymentProvider["FirstDataGlobalGatewaye4"] = "FirstDataGlobalGatewaye4";
    IoRestorecommercePaymentProvider["FirstGiving"] = "FirstGiving";
    IoRestorecommercePaymentProvider["Flo2Cash"] = "Flo2Cash";
    IoRestorecommercePaymentProvider["GarantiSanalPos"] = "GarantiSanalPOS";
    IoRestorecommercePaymentProvider["GlobalTransport"] = "GlobalTransport";
    IoRestorecommercePaymentProvider["Hdfc"] = "HDFC";
    IoRestorecommercePaymentProvider["HeartlandPaymentSystems"] = "HeartlandPaymentSystems";
    IoRestorecommercePaymentProvider["Ipp"] = "IPP";
    IoRestorecommercePaymentProvider["InspireCommerce"] = "InspireCommerce";
    IoRestorecommercePaymentProvider["InstaPay"] = "InstaPay";
    IoRestorecommercePaymentProvider["Iridium"] = "Iridium";
    IoRestorecommercePaymentProvider["JetPay"] = "JetPay";
    IoRestorecommercePaymentProvider["Komoju"] = "Komoju";
    IoRestorecommercePaymentProvider["LinkPoint"] = "LinkPoint";
    IoRestorecommercePaymentProvider["LitleCo"] = "LitleCo";
    IoRestorecommercePaymentProvider["Monei"] = "MONEI";
    IoRestorecommercePaymentProvider["MasterCardInternetGatewayServiceMiGs"] = "MasterCardInternetGatewayServiceMiGS";
    IoRestorecommercePaymentProvider["MerchantOneGateway"] = "MerchantOneGateway";
    IoRestorecommercePaymentProvider["MerchantWare"] = "MerchantWARE";
    IoRestorecommercePaymentProvider["MerchantWarrior"] = "MerchantWarrior";
    IoRestorecommercePaymentProvider["MerchanteSolutions"] = "MerchanteSolutions";
    IoRestorecommercePaymentProvider["Mercury"] = "Mercury";
    IoRestorecommercePaymentProvider["MetricsGlobal"] = "MetricsGlobal";
    IoRestorecommercePaymentProvider["ModernPayments"] = "ModernPayments";
    IoRestorecommercePaymentProvider["Moneris"] = "Moneris";
    IoRestorecommercePaymentProvider["MoneyMovers"] = "MoneyMovers";
    IoRestorecommercePaymentProvider["NabTransact"] = "NABTransact";
    IoRestorecommercePaymentProvider["NeLiXTransaX"] = "NELiXTransaX";
    IoRestorecommercePaymentProvider["NetpayGateway"] = "NETPAYGateway";
    IoRestorecommercePaymentProvider["NeTbilling"] = "NETbilling";
    IoRestorecommercePaymentProvider["Nmi"] = "NMI";
    IoRestorecommercePaymentProvider["NoProvider"] = "NO_PROVIDER";
    IoRestorecommercePaymentProvider["NetRegistry"] = "NetRegistry";
    IoRestorecommercePaymentProvider["Ogone"] = "Ogone";
    IoRestorecommercePaymentProvider["Omise"] = "Omise";
    IoRestorecommercePaymentProvider["Openpay"] = "Openpay";
    IoRestorecommercePaymentProvider["OptimalPayments"] = "OptimalPayments";
    IoRestorecommercePaymentProvider["OrbitalPaymentech"] = "OrbitalPaymentech";
    IoRestorecommercePaymentProvider["Paymill"] = "PAYMILL";
    IoRestorecommercePaymentProvider["PslPaymentSolutions"] = "PSLPaymentSolutions";
    IoRestorecommercePaymentProvider["Pagarme"] = "Pagarme";
    IoRestorecommercePaymentProvider["PagoFacil"] = "PagoFacil";
    IoRestorecommercePaymentProvider["PayConex"] = "PayConex";
    IoRestorecommercePaymentProvider["PayGatePayXml"] = "PayGatePayXML";
    IoRestorecommercePaymentProvider["PayHub"] = "PayHub";
    IoRestorecommercePaymentProvider["PayJunction"] = "PayJunction";
    IoRestorecommercePaymentProvider["PayPalExpressCheckout"] = "PayPalExpressCheckout";
    IoRestorecommercePaymentProvider["PayPalExpressCheckoutUk"] = "PayPalExpressCheckoutUK";
    IoRestorecommercePaymentProvider["PayPalExpressCheckoutforDigitalGoods"] = "PayPalExpressCheckoutforDigitalGoods";
    IoRestorecommercePaymentProvider["PayPalPayflowPro"] = "PayPalPayflowPro";
    IoRestorecommercePaymentProvider["PayPalPaymentsProUk"] = "PayPalPaymentsProUK";
    IoRestorecommercePaymentProvider["PayPalPaymentsProUs"] = "PayPalPaymentsProUS";
    IoRestorecommercePaymentProvider["PayPalWebsitePaymentsProCa"] = "PayPalWebsitePaymentsProCA";
    IoRestorecommercePaymentProvider["PaySecure"] = "PaySecure";
    IoRestorecommercePaymentProvider["PayUIndia"] = "PayUIndia";
    IoRestorecommercePaymentProvider["PayWay"] = "PayWay";
    IoRestorecommercePaymentProvider["PayboxDirect"] = "PayboxDirect";
    IoRestorecommercePaymentProvider["Payeezy"] = "Payeezy";
    IoRestorecommercePaymentProvider["Payex"] = "Payex";
    IoRestorecommercePaymentProvider["PaymentExpress"] = "PaymentExpress";
    IoRestorecommercePaymentProvider["Payscout"] = "Payscout";
    IoRestorecommercePaymentProvider["Paystation"] = "Paystation";
    IoRestorecommercePaymentProvider["PinPayments"] = "PinPayments";
    IoRestorecommercePaymentProvider["PlugnPay"] = "PlugnPay";
    IoRestorecommercePaymentProvider["Psigate"] = "Psigate";
    IoRestorecommercePaymentProvider["QuantumGateway"] = "QuantumGateway";
    IoRestorecommercePaymentProvider["QuickBooksMerchantServices"] = "QuickBooksMerchantServices";
    IoRestorecommercePaymentProvider["QuickBooksPayments"] = "QuickBooksPayments";
    IoRestorecommercePaymentProvider["QuickPay"] = "QuickPay";
    IoRestorecommercePaymentProvider["Qvalent"] = "Qvalent";
    IoRestorecommercePaymentProvider["Raven"] = "Raven";
    IoRestorecommercePaymentProvider["Realex"] = "Realex";
    IoRestorecommercePaymentProvider["Redsys"] = "Redsys";
    IoRestorecommercePaymentProvider["S5"] = "S5";
    IoRestorecommercePaymentProvider["SagePay"] = "SagePay";
    IoRestorecommercePaymentProvider["SagePaymentSolutions"] = "SagePaymentSolutions";
    IoRestorecommercePaymentProvider["SallieMae"] = "SallieMae";
    IoRestorecommercePaymentProvider["SecureNet"] = "SecureNet";
    IoRestorecommercePaymentProvider["SecurePay"] = "SecurePay";
    IoRestorecommercePaymentProvider["SecurePayTech"] = "SecurePayTech";
    IoRestorecommercePaymentProvider["SecurionPay"] = "SecurionPay";
    IoRestorecommercePaymentProvider["SkipJack"] = "SkipJack";
    IoRestorecommercePaymentProvider["SoEasyPay"] = "SoEasyPay";
    IoRestorecommercePaymentProvider["Spreedly"] = "Spreedly";
    IoRestorecommercePaymentProvider["Stripe"] = "Stripe";
    IoRestorecommercePaymentProvider["Swipe"] = "Swipe";
    IoRestorecommercePaymentProvider["Tns"] = "TNS";
    IoRestorecommercePaymentProvider["TransFirst"] = "TransFirst";
    IoRestorecommercePaymentProvider["TransactPro"] = "TransactPro";
    IoRestorecommercePaymentProvider["Transnational"] = "Transnational";
    IoRestorecommercePaymentProvider["Trexle"] = "Trexle";
    IoRestorecommercePaymentProvider["TrustCommerce"] = "TrustCommerce";
    IoRestorecommercePaymentProvider["UsAePay"] = "USAePay";
    IoRestorecommercePaymentProvider["VancoPaymentSolutions"] = "VancoPaymentSolutions";
    IoRestorecommercePaymentProvider["Verifi"] = "Verifi";
    IoRestorecommercePaymentProvider["ViaKlix"] = "ViaKLIX";
    IoRestorecommercePaymentProvider["WePay"] = "WePay";
    IoRestorecommercePaymentProvider["WebPay"] = "WebPay";
    IoRestorecommercePaymentProvider["Wirecard"] = "Wirecard";
    IoRestorecommercePaymentProvider["WorldpayGlobal"] = "WorldpayGlobal";
    IoRestorecommercePaymentProvider["WorldpayOnline"] = "WorldpayOnline";
    IoRestorecommercePaymentProvider["WorldpayUs"] = "WorldpayUS";
    IoRestorecommercePaymentProvider["EPay"] = "ePay";
    IoRestorecommercePaymentProvider["EWay"] = "eWAY";
    IoRestorecommercePaymentProvider["EWayRapid"] = "eWAYRapid";
    IoRestorecommercePaymentProvider["IAtsPayments"] = "iATSPayments";
    IoRestorecommercePaymentProvider["ITransact"] = "iTransact";
    IoRestorecommercePaymentProvider["MaxiPago"] = "maxiPago";
    IoRestorecommercePaymentProvider["StPayGatewayNet"] = "stPayGatewayNet";
})(IoRestorecommercePaymentProvider || (IoRestorecommercePaymentProvider = {}));
var IoRestorecommerceProductAssociationType;
(function (IoRestorecommerceProductAssociationType) {
    IoRestorecommerceProductAssociationType["Accessory"] = "ACCESSORY";
    IoRestorecommerceProductAssociationType["Miscellaneous"] = "MISCELLANEOUS";
    IoRestorecommerceProductAssociationType["Recommendation"] = "RECOMMENDATION";
})(IoRestorecommerceProductAssociationType || (IoRestorecommerceProductAssociationType = {}));
var IoRestorecommerceResourcebaseFilterOpOperator;
(function (IoRestorecommerceResourcebaseFilterOpOperator) {
    IoRestorecommerceResourcebaseFilterOpOperator["And"] = "and";
    IoRestorecommerceResourcebaseFilterOpOperator["Or"] = "or";
})(IoRestorecommerceResourcebaseFilterOpOperator || (IoRestorecommerceResourcebaseFilterOpOperator = {}));
var IoRestorecommerceResourcebaseFilterOperation;
(function (IoRestorecommerceResourcebaseFilterOperation) {
    IoRestorecommerceResourcebaseFilterOperation["Eq"] = "eq";
    IoRestorecommerceResourcebaseFilterOperation["Gt"] = "gt";
    IoRestorecommerceResourcebaseFilterOperation["Gte"] = "gte";
    IoRestorecommerceResourcebaseFilterOperation["ILike"] = "iLike";
    IoRestorecommerceResourcebaseFilterOperation["In"] = "in";
    IoRestorecommerceResourcebaseFilterOperation["IsEmpty"] = "isEmpty";
    IoRestorecommerceResourcebaseFilterOperation["Lt"] = "lt";
    IoRestorecommerceResourcebaseFilterOperation["Lte"] = "lte";
    IoRestorecommerceResourcebaseFilterOperation["Neq"] = "neq";
})(IoRestorecommerceResourcebaseFilterOperation || (IoRestorecommerceResourcebaseFilterOperation = {}));
var IoRestorecommerceResourcebaseFilterValueType;
(function (IoRestorecommerceResourcebaseFilterValueType) {
    IoRestorecommerceResourcebaseFilterValueType["Array"] = "ARRAY";
    IoRestorecommerceResourcebaseFilterValueType["Boolean"] = "BOOLEAN";
    IoRestorecommerceResourcebaseFilterValueType["Date"] = "DATE";
    IoRestorecommerceResourcebaseFilterValueType["Number"] = "NUMBER";
    IoRestorecommerceResourcebaseFilterValueType["String"] = "STRING";
})(IoRestorecommerceResourcebaseFilterValueType || (IoRestorecommerceResourcebaseFilterValueType = {}));
var IoRestorecommerceResourcebaseSortSortOrder;
(function (IoRestorecommerceResourcebaseSortSortOrder) {
    IoRestorecommerceResourcebaseSortSortOrder["Ascending"] = "ASCENDING";
    IoRestorecommerceResourcebaseSortSortOrder["Descending"] = "DESCENDING";
    IoRestorecommerceResourcebaseSortSortOrder["Unsorted"] = "UNSORTED";
})(IoRestorecommerceResourcebaseSortSortOrder || (IoRestorecommerceResourcebaseSortSortOrder = {}));
var IoRestorecommerceRuleEffect;
(function (IoRestorecommerceRuleEffect) {
    IoRestorecommerceRuleEffect["Deny"] = "DENY";
    IoRestorecommerceRuleEffect["Permit"] = "PERMIT";
})(IoRestorecommerceRuleEffect || (IoRestorecommerceRuleEffect = {}));
var IoRestorecommerceTaxRoundMode;
(function (IoRestorecommerceTaxRoundMode) {
    IoRestorecommerceTaxRoundMode["Ceil"] = "CEIL";
    IoRestorecommerceTaxRoundMode["Floor"] = "FLOOR";
    IoRestorecommerceTaxRoundMode["Half"] = "HALF";
})(IoRestorecommerceTaxRoundMode || (IoRestorecommerceTaxRoundMode = {}));
var IoRestorecommerceUnitCodeSector;
(function (IoRestorecommerceUnitCodeSector) {
    IoRestorecommerceUnitCodeSector["Acoustics"] = "ACOUSTICS";
    IoRestorecommerceUnitCodeSector["AtomicAndNuclearPhysics"] = "ATOMIC_AND_NUCLEAR_PHYSICS";
    IoRestorecommerceUnitCodeSector["CharacteristicNumbers"] = "CHARACTERISTIC_NUMBERS";
    IoRestorecommerceUnitCodeSector["ElectricityAndMagnetism"] = "ELECTRICITY_AND_MAGNETISM";
    IoRestorecommerceUnitCodeSector["Heat"] = "HEAT";
    IoRestorecommerceUnitCodeSector["LightAndRelatedElectromagneticRadiations"] = "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS";
    IoRestorecommerceUnitCodeSector["Mechanics"] = "MECHANICS";
    IoRestorecommerceUnitCodeSector["Miscellaneous"] = "MISCELLANEOUS";
    IoRestorecommerceUnitCodeSector["NuclearReactionsAndIonizingRadiations"] = "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS";
    IoRestorecommerceUnitCodeSector["PeriodicAndRelatedPhases"] = "PERIODIC_AND_RELATED_PHASES";
    IoRestorecommerceUnitCodeSector["PhysicalChemistryAndMolecularPhysics"] = "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS";
    IoRestorecommerceUnitCodeSector["SolidStatePhysics"] = "SOLID_STATE_PHYSICS";
    IoRestorecommerceUnitCodeSector["SpaceAndTime"] = "SPACE_AND_TIME";
    IoRestorecommerceUnitCodeSector["Unknown"] = "UNKNOWN";
})(IoRestorecommerceUnitCodeSector || (IoRestorecommerceUnitCodeSector = {}));
var IoRestorecommerceUnitCodeStatusCode;
(function (IoRestorecommerceUnitCodeStatusCode) {
    IoRestorecommerceUnitCodeStatusCode["Added"] = "ADDED";
    IoRestorecommerceUnitCodeStatusCode["ChangedCharacteristic"] = "CHANGED_CHARACTERISTIC";
    IoRestorecommerceUnitCodeStatusCode["ChangedName"] = "CHANGED_NAME";
    IoRestorecommerceUnitCodeStatusCode["Deprecated"] = "DEPRECATED";
    IoRestorecommerceUnitCodeStatusCode["MarkedAsDeleted"] = "MARKED_AS_DELETED";
    IoRestorecommerceUnitCodeStatusCode["Reinstated"] = "REINSTATED";
})(IoRestorecommerceUnitCodeStatusCode || (IoRestorecommerceUnitCodeStatusCode = {}));
var IoRestorecommerceUserUserType;
(function (IoRestorecommerceUserUserType) {
    IoRestorecommerceUserUserType["Guest"] = "GUEST";
    IoRestorecommerceUserUserType["IndividualUser"] = "INDIVIDUAL_USER";
    IoRestorecommerceUserUserType["OrgUser"] = "ORG_USER";
    IoRestorecommerceUserUserType["TechnicalUser"] = "TECHNICAL_USER";
})(IoRestorecommerceUserUserType || (IoRestorecommerceUserUserType = {}));
var ModeType;
(function (ModeType) {
    ModeType["Create"] = "CREATE";
    ModeType["Update"] = "UPDATE";
    ModeType["Upsert"] = "UPSERT";
})(ModeType || (ModeType = {}));
var SubscriptionAction;
(function (SubscriptionAction) {
    SubscriptionAction["Created"] = "CREATED";
    SubscriptionAction["Deleted"] = "DELETED";
    SubscriptionAction["Updated"] = "UPDATED";
})(SubscriptionAction || (SubscriptionAction = {}));
const MetaFragmentFragmentDoc = gql `
  fragment MetaFragment on IoRestorecommerceMetaMeta {
    created
    modified
    createdBy
    modifiedBy
    owners {
      id
      value
      attributes {
        id
        value
      }
    }
  }
`;
const CountryFragmentFragmentDoc = gql `
  fragment CountryFragment on IoRestorecommerceCountryCountry {
    id
    name
    countryCode
    geographicalName
    economicAreas
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const CurrencyFragmentFragmentDoc = gql `
  fragment CurrencyFragment on IoRestorecommerceCurrencyCurrency {
    id
    name
    precision
    symbol
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const FulfillmentFragmentFragmentDoc = gql `
  fragment FulfillmentFragment on IoRestorecommerceFulfillmentFulfillment {
    id
    customerId
    shopId
    userId
    labels {
      shipmentNumber
      state
      parcelId
      file {
        url
      }
      status {
        code
        message
      }
    }
    packaging {
      parcels {
        id
        productId
        variantId
        items {
          productId
          variantId
          hsCode
          taricCode
          name
          quantity
          package {
            rotatable
            sizeInCm {
              height
              width
              length
            }
            weightInKg
          }
        }
        package {
          rotatable
          sizeInCm {
            height
            width
            length
          }
          weightInKg
        }
      }
      sender {
        address {
          id
          postcode
        }
        contact {
          name
          email
          phone
        }
        comments
      }
      recipient {
        address {
          id
          postcode
          countryId
        }
      }
      notify
      customsDeclaration {
        invoiceNumber
        exportDescription
        exportType
      }
    }
    references {
      instanceType
      instanceId
    }
    trackings {
      shipmentNumber
      events {
        location
        timestamp
        details {
          value
          typeUrl
        }
        status {
          code
          message
        }
      }
    }
    fulfillmentState
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const InvoiceFragmentFragmentDoc = gql `
  fragment InvoiceFragment on IoRestorecommerceInvoiceInvoice {
    id
    invoiceNumber
    fromDate
    toDate
    shopId
    sent
    withdrawn
    paymentState
    customerOrderNumber
    userId
    customerId
    timestamp
    sections {
      id
      customerRemark
      positions {
        id
        toDate
        quantity
        unitPrice {
          salePrice
          currencyId
          sale
          regularPrice
        }
        fromDate
        fulfillmentItem {
          productId
          variantId
        }
        manualItem {
          name
          descritpion
          stockKeepingUnit
          properties {
            id
            value
          }
        }
        productItem {
          productId
          variantId
          product {
            id
            active
            tags
            shopIds
          }
        }
      }
      amounts {
        gross
        net
        currencyId
        vats {
          taxId
          vat
        }
      }
    }
    totalAmounts {
      currencyId
      gross
      net
      vats {
        taxId
        vat
      }
    }
    references {
      instanceType
      instanceId
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const LocaleFragmentFragmentDoc = gql `
  fragment LocaleFragment on IoRestorecommerceLocaleLocale {
    id
    name
    description
    value
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const LocationFragmentFragmentDoc = gql `
  fragment LocationFragment on IoRestorecommerceLocationLocation {
    id
    name
    description
    parent {
      id
      name
    }
    organization {
      id
      name
    }
    address {
      id
      buildingNumber
      businessAddress {
        name
      }
      postcode
      residentialAddress {
        familyName
        midName
        title
      }
      street
      locality
      country {
        name
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const ManufacturerFragmentFragmentDoc = gql `
  fragment ManufacturerFragment on IoRestorecommerceManufacturerManufacturer {
    id
    name
    description
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const OpsStatusFragmentFragmentDoc = gql `
  fragment OpsStatusFragment on IoRestorecommerceStatusOperationStatus {
    code
    message
  }
`;
const ImageFragmentFragmentDoc = gql `
  fragment ImageFragment on IoRestorecommerceImageImage {
    id
    index
    filename
    url
    caption
    contentType
    tags
    height
    width
  }
`;
const FileFragmentFragmentDoc = gql `
  fragment FileFragment on IoRestorecommerceFileFile {
    id
    url
    filename
    caption
    contentType
    tags
    thumbnail {
      ...ImageFragment
    }
  }
  ${ImageFragmentFragmentDoc}
`;
const ProductVariantFragmentFragmentDoc = gql `
  fragment ProductVariantFragment on IoRestorecommerceProductPhysicalVariant {
    id
    name
    description
    taricCode
    images {
      ...ImageFragment
    }
    files {
      ...FileFragment
    }
    stockLevel
    stockKeepingUnit
    parentVariantId
    taxIds
    price {
      currencyId
      regularPrice
      sale
      salePrice
    }
    properties {
      id
      value
      unitCode
    }
  }
  ${ImageFragmentFragmentDoc}
  ${FileFragmentFragmentDoc}
`;
const ProductFragmentFragmentDoc = gql `
  fragment ProductFragment on IoRestorecommerceProductProduct {
    id
    product {
      name
      description
      taxIds
      gtin
      manufacturerId
      originCountryId
      categoryId
      prototypeId
      physical {
        templates {
          ...ProductVariantFragment
        }
        variants {
          ...ProductVariantFragment
        }
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${ProductVariantFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const OrganizationFragmentFragmentDoc = gql `
  fragment OrganizationFragment on IoRestorecommerceOrganizationOrganization {
    id
    parentId
    name
    email
    website
    vatId
    logo {
      id
      index
      filename
      height
      width
      url
    }
    paymentMethods {
      id
      transferType
      paymentMethod
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const ShopFragmentFragmentDoc = gql `
  fragment ShopFragment on IoRestorecommerceShopShop {
    id
    shopNumber
    name
    description
    domains
    organization {
      ...OrganizationFragment
    }
    meta {
      ...MetaFragment
    }
  }
  ${OrganizationFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const UserFragmentFragmentDoc = gql `
  fragment UserFragment on IoRestorecommerceUserUser {
    id
    active
    activationCode
    email
    newEmail
    name
    firstName
    lastName
    lastAccess
    defaultScope
    localeId
    timezoneId
    roleAssociations {
      role
      attributes {
        id
        value
        attributes {
          id
          value
        }
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const ContactPointFragmentFragmentDoc = gql `
  fragment ContactPointFragment on IoRestorecommerceContactPointContactPoint {
    id
    name
    description
    email
    telephone
    website
    timezone {
      id
      value
      description
    }
    locale {
      id
      value
      description
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const CustomerFragmentFragmentDoc = gql `
  fragment CustomerFragment on IoRestorecommerceCustomerCustomer {
    id
    description
    name
    settingId
    commercial {
      organization {
        ...OrganizationFragment
      }
    }
    publicSector {
      organization {
        ...OrganizationFragment
      }
    }
    private {
      user {
        ...UserFragment
      }
      contactPoints {
        ...ContactPointFragment
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${OrganizationFragmentFragmentDoc}
  ${UserFragmentFragmentDoc}
  ${ContactPointFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const AddressFragmentFragmentDoc = gql `
  fragment AddressFragment on IoRestorecommerceAddressAddress {
    id
    buildingNumber
    street
    postcode
    locality
    region
    addressAddition {
      field1
      field2
    }
    businessAddress {
      name
    }
    packStation {
      postNumber
      provider
      stationNumber
    }
    residentialAddress {
      title
      givenName
      familyName
      midName
    }
    country {
      id
      name
      countryCode
      geographicalName
    }
    geoCoordinates {
      latitude
      longitude
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const OrderFragmentFragmentDoc = gql `
  fragment OrderFragment on IoRestorecommerceOrderOrder {
    id
    notificationEmail
    shopId
    userId
    customerId
    orderState
    customerType
    customerOrderNr
    customer {
      id
      name
    }
    items {
      id
      quantity
      productId
      variantId
      parentItemId
      product {
        ...ProductFragment
      }
      unitPrice {
        currencyId
        currency {
          name
          symbol
        }
        regularPrice
        sale
        salePrice
      }
    }
    shop {
      ...ShopFragment
    }
    customer {
      ...CustomerFragment
    }
    user {
      ...UserFragment
    }
    shippingAddress {
      comments
      contact {
        name
        email
        phone
      }
      address {
        ...AddressFragment
      }
    }
    billingAddress {
      comments
      contact {
        name
        email
        phone
      }
      address {
        ...AddressFragment
      }
    }
    totalAmounts {
      currency {
        name
        customExchangeRates {
          amount
          rate
          expenses
        }
      }
      gross
      net
      vats {
        tax {
          rate
          variant
          type {
            type
            description
          }
          countryId
        }
        vat
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${ProductFragmentFragmentDoc}
  ${ShopFragmentFragmentDoc}
  ${CustomerFragmentFragmentDoc}
  ${UserFragmentFragmentDoc}
  ${AddressFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const PriceGroupFragmentFragmentDoc = gql `
  fragment PriceGroupFragment on IoRestorecommercePriceGroupPriceGroup {
    id
    name
    description
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const ProductCategoryFragmentFragmentDoc = gql `
  fragment ProductCategoryFragment on IoRestorecommerceProductCategoryProductCategory {
    id
    name
    description
    image {
      ...ImageFragment
    }
    parent {
      parentId
    }
    priceGroup {
      ...PriceGroupFragment
    }
    meta {
      ...MetaFragment
    }
  }
  ${ImageFragmentFragmentDoc}
  ${PriceGroupFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const ProductPrototypeFragmentFragmentDoc = gql `
  fragment ProductPrototypeFragment on IoRestorecommerceProductPrototypeProductPrototype {
    id
    name
    description
    categoryId
    version
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const StatusFragmentFragmentDoc = gql `
  fragment StatusFragment on IoRestorecommerceStatusStatus {
    code
    message
  }
`;
const TaxFragmentFragmentDoc = gql `
  fragment TaxFragment on IoRestorecommerceTaxTax {
    id
    name
    rate
    typeId
    variant
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const TimezoneFragmentFragmentDoc = gql `
  fragment TimezoneFragment on IoRestorecommerceTimezoneTimezone {
    id
    name
    description
    value
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const RoleFragmentFragmentDoc = gql `
  fragment RoleFragment on IoRestorecommerceRoleRole {
    id
    name
    description
    assignableByRoles
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
const UserRoleFragmentFragmentDoc = gql `
  fragment UserRoleFragment on IoRestorecommerceUserUserRole {
    id
    active
    activationCode
    email
    newEmail
    name
    firstName
    lastName
    userType
    defaultScope
    lastAccess
    localeId
    tokens {
      name
      token
      lastLogin
      expiresIn
      clientId
      interactive
      type
      scopes
    }
    timezoneId
    roles {
      ...RoleFragment
    }
    roleAssociations {
      role
      attributes {
        id
        value
        attributes {
          id
          value
        }
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${RoleFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
const PolicyReadDocument = gql `
  query PolicyRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    access_control {
      policy {
        Read(input: $input) {
          details {
            items {
              payload {
                id
                name
                description
              }
              status {
                code
                message
              }
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class PolicyReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = PolicyReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PolicyReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductCategoryMutateDocument = gql `
  mutation ProductCategoryMutate(
    $input: IIoRestorecommerceProductCategoryProductCategoryList!
  ) {
    catalog {
      product_category {
        Mutate(input: $input) {
          details {
            items {
              payload {
                ...ProductCategoryFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ProductCategoryFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ProductCategoryMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ProductCategoryMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductCategoryDeleteDocument = gql `
  mutation ProductCategoryDelete(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    catalog {
      product_category {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class ProductCategoryDeleteGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ProductCategoryDeleteDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryDeleteGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryDeleteGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryDeleteGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductCategoryReadDocument = gql `
  query ProductCategoryRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    catalog {
      product_category {
        Read(input: $input) {
          details {
            items {
              payload {
                ...ProductCategoryFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ProductCategoryFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ProductCategoryReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ProductCategoryReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductCategoryReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ManufucturerMutateDocument = gql `
  mutation ManufucturerMutate(
    $input: IIoRestorecommerceManufacturerManufacturerList!
  ) {
    catalog {
      manufacturer {
        Mutate(input: $input) {
          details {
            items {
              payload {
                ...ManufacturerFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ManufacturerFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ManufucturerMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ManufucturerMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ManufucturerDeleteDocument = gql `
  mutation ManufucturerDelete(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    catalog {
      manufacturer {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              code
              message
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class ManufucturerDeleteGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ManufucturerDeleteDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerDeleteGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerDeleteGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerDeleteGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ManufucturerReadDocument = gql `
  query ManufucturerRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    catalog {
      manufacturer {
        Read(input: $input) {
          details {
            items {
              payload {
                ...ManufacturerFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ManufacturerFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ManufucturerReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ManufucturerReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ManufucturerReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const PriceGroupMutateDocument = gql `
  mutation PriceGroupMutate(
    $input: IIoRestorecommercePriceGroupPriceGroupList!
  ) {
    catalog {
      price_group {
        Mutate(input: $input) {
          details {
            items {
              payload {
                ...PriceGroupFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${PriceGroupFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class PriceGroupMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = PriceGroupMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const PriceGroupDeleteDocument = gql `
  mutation PriceGroupDelete(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    catalog {
      price_group {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class PriceGroupDeleteGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = PriceGroupDeleteDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupDeleteGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupDeleteGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupDeleteGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const PriceGroupReadDocument = gql `
  query PriceGroupRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    catalog {
      price_group {
        Read(input: $input) {
          details {
            items {
              payload {
                ...PriceGroupFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${PriceGroupFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class PriceGroupReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = PriceGroupReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: PriceGroupReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const CatalogProductMutateDocument = gql `
  mutation CatalogProductMutate($input: IIoRestorecommerceProductProductList!) {
    catalog {
      product {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...ProductFragment
              }
            }
          }
        }
      }
    }
  }
  ${ProductFragmentFragmentDoc}
`;
class CatalogProductMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CatalogProductMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const CatalogProductDeleteMutateDocument = gql `
  mutation CatalogProductDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    catalog {
      product {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class CatalogProductDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CatalogProductDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const CatalogProductReadDocument = gql `
  query CatalogProductRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    catalog {
      product {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...ProductFragment
              }
            }
          }
        }
      }
    }
  }
  ${ProductFragmentFragmentDoc}
`;
class CatalogProductReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = CatalogProductReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CatalogProductReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductPrototypeMutateDocument = gql `
  mutation ProductPrototypeMutate(
    $input: IIoRestorecommerceProductPrototypeProductPrototypeList!
  ) {
    catalog {
      product_prototype {
        Mutate(input: $input) {
          details {
            items {
              payload {
                ...ProductPrototypeFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ProductPrototypeFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ProductPrototypeMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ProductPrototypeMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductPrototypeDeleteDocument = gql `
  mutation ProductPrototypeDelete(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    catalog {
      product_prototype {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class ProductPrototypeDeleteGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ProductPrototypeDeleteDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeDeleteGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeDeleteGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeDeleteGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const ProductPrototypeReadDocument = gql `
  query ProductPrototypeRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    catalog {
      product_prototype {
        Read(input: $input) {
          details {
            items {
              payload {
                ...ProductPrototypeFragment
              }
              status {
                ...StatusFragment
              }
            }
            operationStatus {
              ...OpsStatusFragment
            }
          }
        }
      }
    }
  }
  ${ProductPrototypeFragmentFragmentDoc}
  ${StatusFragmentFragmentDoc}
  ${OpsStatusFragmentFragmentDoc}
`;
class ProductPrototypeReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ProductPrototypeReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: ProductPrototypeReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const FulfillmentFulfillmentMutateDocument = gql `
  mutation FulfillmentFulfillmentMutate(
    $input: IIoRestorecommerceFulfillmentFulfillmentList!
  ) {
    fulfillment {
      fulfillment {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...FulfillmentFragment
              }
            }
          }
        }
      }
    }
  }
  ${FulfillmentFragmentFragmentDoc}
`;
class FulfillmentFulfillmentMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = FulfillmentFulfillmentMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const FulfillmentFulfillmentDeleteMutateDocument = gql `
  mutation FulfillmentFulfillmentDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    fulfillment {
      fulfillment {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class FulfillmentFulfillmentDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = FulfillmentFulfillmentDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const FulfillmentFulfillmentReadDocument = gql `
  query FulfillmentFulfillmentRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    fulfillment {
      fulfillment {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...FulfillmentFragment
              }
            }
          }
        }
      }
    }
  }
  ${FulfillmentFragmentFragmentDoc}
`;
class FulfillmentFulfillmentReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = FulfillmentFulfillmentReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const FulfillmentFulfillmentSubmitDocument = gql `
  mutation FulfillmentFulfillmentSubmit(
    $input: IIoRestorecommerceFulfillmentFulfillmentList!
  ) {
    fulfillment {
      fulfillment {
        Submit(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...FulfillmentFragment
              }
            }
          }
        }
      }
    }
  }
  ${FulfillmentFragmentFragmentDoc}
`;
class FulfillmentFulfillmentSubmitGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = FulfillmentFulfillmentSubmitDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentSubmitGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentSubmitGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: FulfillmentFulfillmentSubmitGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityRoleMutateDocument = gql `
  mutation IdentityRoleMutate($input: IIoRestorecommerceRoleRoleList!) {
    identity {
      role {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...RoleFragment
              }
            }
          }
        }
      }
    }
  }
  ${RoleFragmentFragmentDoc}
`;
class IdentityRoleMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityRoleMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityRoleDeleteMutateDocument = gql `
  mutation IdentityRoleDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    identity {
      role {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityRoleDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityRoleDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityRoleReadDocument = gql `
  query IdentityRoleRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    identity {
      role {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...RoleFragment
              }
            }
          }
        }
      }
    }
  }
  ${RoleFragmentFragmentDoc}
`;
class IdentityRoleReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityRoleReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityRoleReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserFindByTokenDocument = gql `
  query IdentityUserFindByToken(
    $input: IIoRestorecommerceUserFindByTokenRequest!
  ) {
    identity {
      user {
        FindByToken(input: $input) {
          details {
            status {
              code
              message
            }
            payload {
              ...UserFragment
            }
          }
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
class IdentityUserFindByTokenGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserFindByTokenDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindByTokenGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindByTokenGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindByTokenGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserFindDocument = gql `
  query IdentityUserFind($input: IIoRestorecommerceUserFindRequest!) {
    identity {
      user {
        Find(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...UserFragment
              }
            }
          }
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
class IdentityUserFindGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserFindDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserFindGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserMutateDocument = gql `
  mutation IdentityUserMutate($input: IIoRestorecommerceUserUserList!) {
    identity {
      user {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...UserFragment
              }
            }
          }
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
class IdentityUserMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserRegisterMutateDocument = gql `
  mutation IdentityUserRegisterMutate(
    $input: IIoRestorecommerceUserRegisterRequest!
  ) {
    identity {
      user {
        Register(input: $input) {
          details {
            status {
              code
              message
            }
            payload {
              ...UserFragment
            }
          }
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
class IdentityUserRegisterMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserRegisterMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRegisterMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRegisterMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRegisterMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserActivateMutateDocument = gql `
  mutation IdentityUserActivateMutate(
    $input: IIoRestorecommerceUserActivateRequest!
  ) {
    identity {
      user {
        Activate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserActivateMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserActivateMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserActivateMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserActivateMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserActivateMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserRequestEmailChangeMutateDocument = gql `
  mutation IdentityUserRequestEmailChangeMutate(
    $input: IIoRestorecommerceUserChangeEmailRequest!
  ) {
    identity {
      user {
        RequestEmailChange(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserRequestEmailChangeMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserRequestEmailChangeMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestEmailChangeMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestEmailChangeMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestEmailChangeMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserConfirmEmailChangeMutateDocument = gql `
  mutation IdentityUserConfirmEmailChangeMutate(
    $input: IIoRestorecommerceUserConfirmEmailChangeRequest!
  ) {
    identity {
      user {
        ConfirmEmailChange(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserConfirmEmailChangeMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserConfirmEmailChangeMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmEmailChangeMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmEmailChangeMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmEmailChangeMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserRequestPasswordChangeMutateDocument = gql `
  mutation IdentityUserRequestPasswordChangeMutate(
    $input: IIoRestorecommerceUserRequestPasswordChangeRequest!
  ) {
    identity {
      user {
        RequestPasswordChange(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserRequestPasswordChangeMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserRequestPasswordChangeMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestPasswordChangeMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestPasswordChangeMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserRequestPasswordChangeMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserConfirmPasswordChangeMutateDocument = gql `
  mutation IdentityUserConfirmPasswordChangeMutate(
    $input: IIoRestorecommerceUserConfirmPasswordChangeRequest!
  ) {
    identity {
      user {
        ConfirmPasswordChange(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserConfirmPasswordChangeMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserConfirmPasswordChangeMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmPasswordChangeMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmPasswordChangeMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserConfirmPasswordChangeMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserChangePasswordMutateDocument = gql `
  mutation IdentityUserChangePasswordMutate(
    $input: IIoRestorecommerceUserChangePasswordRequest!
  ) {
    identity {
      user {
        ChangePassword(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserChangePasswordMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserChangePasswordMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserChangePasswordMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserChangePasswordMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserChangePasswordMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserDeleteMutateDocument = gql `
  mutation IdentityUserDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    identity {
      user {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class IdentityUserDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const IdentityUserReadDocument = gql `
  query IdentityUserRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    identity {
      user {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...UserRoleFragment
              }
            }
          }
        }
      }
    }
  }
  ${UserRoleFragmentFragmentDoc}
`;
class IdentityUserReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = IdentityUserReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: IdentityUserReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const InvoicingInvoiceMutateDocument = gql `
  mutation InvoicingInvoiceMutate(
    $input: IIoRestorecommerceInvoiceInvoiceList!
  ) {
    invoicing {
      invoice {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...InvoiceFragment
              }
            }
          }
        }
      }
    }
  }
  ${InvoiceFragmentFragmentDoc}
`;
class InvoicingInvoiceMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = InvoicingInvoiceMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const InvoicingInvoiceDeleteMutateDocument = gql `
  mutation InvoicingInvoiceDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    invoicing {
      invoice {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class InvoicingInvoiceDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = InvoicingInvoiceDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const InvoicingInvoiceReadDocument = gql `
  query InvoicingInvoiceRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    invoicing {
      invoice {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...InvoiceFragment
              }
            }
          }
        }
      }
    }
  }
  ${InvoiceFragmentFragmentDoc}
`;
class InvoicingInvoiceReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = InvoicingInvoiceReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: InvoicingInvoiceReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataAddressReadDocument = gql `
  query MasterDataAddressRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      address {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...AddressFragment
              }
            }
          }
        }
      }
    }
  }
  ${AddressFragmentFragmentDoc}
`;
class MasterDataAddressReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataAddressReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataAddressReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataAddressReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataAddressReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCountryMutateDocument = gql `
  mutation MasterDataCountryMutate(
    $input: IIoRestorecommerceCountryCountryList!
  ) {
    master_data {
      country {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...CountryFragment
              }
            }
          }
        }
      }
    }
  }
  ${CountryFragmentFragmentDoc}
`;
class MasterDataCountryMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCountryMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCountryDeleteMutateDocument = gql `
  mutation MasterDataCountryDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      country {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataCountryDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCountryDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCountryReadDocument = gql `
  query MasterDataCountryRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      country {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...CountryFragment
              }
            }
          }
        }
      }
    }
  }
  ${CountryFragmentFragmentDoc}
`;
class MasterDataCountryReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCountryReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCountryReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCurrencyMutateDocument = gql `
  mutation MasterDataCurrencyMutate(
    $input: IIoRestorecommerceCurrencyCurrencyList!
  ) {
    master_data {
      currency {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...CurrencyFragment
              }
            }
          }
        }
      }
    }
  }
  ${CurrencyFragmentFragmentDoc}
`;
class MasterDataCurrencyMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCurrencyMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCurrencyDeleteMutateDocument = gql `
  mutation MasterDataCurrencyDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      currency {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataCurrencyDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCurrencyDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCurrencyReadDocument = gql `
  query MasterDataCurrencyRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      currency {
        Read(input: $input) {
          details {
            items {
              payload {
                ...CurrencyFragment
              }
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
  ${CurrencyFragmentFragmentDoc}
`;
class MasterDataCurrencyReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCurrencyReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCurrencyReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCustomerMutateDocument = gql `
  mutation MasterDataCustomerMutate(
    $input: IIoRestorecommerceCustomerCustomerList!
  ) {
    master_data {
      customer {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...CustomerFragment
              }
            }
          }
        }
      }
    }
  }
  ${CustomerFragmentFragmentDoc}
`;
class MasterDataCustomerMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCustomerMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCustomerDeleteMutateDocument = gql `
  mutation MasterDataCustomerDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      customer {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataCustomerDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCustomerDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataCustomerReadDocument = gql `
  query MasterDataCustomerRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      customer {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...CustomerFragment
              }
            }
          }
        }
      }
    }
  }
  ${CustomerFragmentFragmentDoc}
`;
class MasterDataCustomerReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataCustomerReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataCustomerReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataLocaleReadDocument = gql `
  query MasterDataLocaleRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      locale {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...LocaleFragment
              }
            }
          }
        }
      }
    }
  }
  ${LocaleFragmentFragmentDoc}
`;
class MasterDataLocaleReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataLocaleReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocaleReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocaleReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocaleReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataLocationReadDocument = gql `
  query MasterDataLocationRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      location {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...LocationFragment
              }
            }
          }
        }
      }
    }
  }
  ${LocationFragmentFragmentDoc}
`;
class MasterDataLocationReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataLocationReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocationReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocationReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataLocationReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataOrganizationMutateDocument = gql `
  mutation MasterDataOrganizationMutate(
    $input: IIoRestorecommerceOrganizationOrganizationList!
  ) {
    master_data {
      organization {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...OrganizationFragment
              }
            }
          }
        }
      }
    }
  }
  ${OrganizationFragmentFragmentDoc}
`;
class MasterDataOrganizationMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataOrganizationMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataOrganizationDeleteMutateDocument = gql `
  mutation MasterDataOrganizationDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      organization {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataOrganizationDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataOrganizationDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataOrganizationReadDocument = gql `
  query MasterDataOrganizationRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      organization {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...OrganizationFragment
              }
            }
          }
        }
      }
    }
  }
  ${OrganizationFragmentFragmentDoc}
`;
class MasterDataOrganizationReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataOrganizationReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataOrganizationReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataShopMutateDocument = gql `
  mutation MasterDataShopMutate($input: IIoRestorecommerceShopShopList!) {
    master_data {
      shop {
        Mutate(input: $input) {
          details {
            items {
              payload {
                ...ShopFragment
              }
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
  ${ShopFragmentFragmentDoc}
`;
class MasterDataShopMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataShopMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataShopDeleteMutateDocument = gql `
  mutation MasterDataShopDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      shop {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataShopDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataShopDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataShopReadDocument = gql `
  query MasterDataShopRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    master_data {
      shop {
        Read(input: $input) {
          details {
            items {
              payload {
                ...ShopFragment
              }
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
  ${ShopFragmentFragmentDoc}
`;
class MasterDataShopReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataShopReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataShopReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataTaxMutateDocument = gql `
  mutation MasterDataTaxMutate($input: IIoRestorecommerceTaxTaxList!) {
    master_data {
      tax {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...TaxFragment
              }
            }
          }
        }
      }
    }
  }
  ${TaxFragmentFragmentDoc}
`;
class MasterDataTaxMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataTaxMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataTaxDeleteMutateDocument = gql `
  mutation MasterDataTaxDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    master_data {
      tax {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class MasterDataTaxDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataTaxDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataTaxReadDocument = gql `
  query MasterDataTaxRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    master_data {
      tax {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...TaxFragment
              }
            }
          }
        }
      }
    }
  }
  ${TaxFragmentFragmentDoc}
`;
class MasterDataTaxReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataTaxReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTaxReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const MasterDataTimezoneReadDocument = gql `
  query MasterDataTimezoneRead(
    $input: IIoRestorecommerceResourcebaseReadRequest!
  ) {
    master_data {
      timezone {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...TimezoneFragment
              }
            }
          }
        }
      }
    }
  }
  ${TimezoneFragmentFragmentDoc}
`;
class MasterDataTimezoneReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MasterDataTimezoneReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTimezoneReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTimezoneReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: MasterDataTimezoneReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const CreateOrderFulfillmentDocument = gql `
  mutation CreateOrderFulfillment(
    $input: IIoRestorecommerceOrderFulfillmentRequestList!
  ) {
    ordering {
      order {
        CreateFulfillment(input: $input) {
          details {
            items {
              payload {
                id
                fulfillmentState
                labels {
                  parcelId
                  file {
                    url
                  }
                  shipmentNumber
                  status {
                    code
                    message
                  }
                }
              }
              status {
                code
                message
              }
            }
            operationStatus {
              code
              message
            }
          }
        }
      }
    }
  }
`;
class CreateOrderFulfillmentGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateOrderFulfillmentDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CreateOrderFulfillmentGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CreateOrderFulfillmentGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: CreateOrderFulfillmentGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const OrderingInvoiceCreateDocument = gql `
  mutation OrderingInvoiceCreate(
    $input: IIoRestorecommerceOrderOrderingInvoiceRequestList!
  ) {
    ordering {
      order {
        CreateInvoice(input: $input) {
          details {
            items {
              payload {
                id
                invoiceNumber
                paymentState
              }
            }
          }
        }
      }
    }
  }
`;
class OrderingInvoiceCreateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = OrderingInvoiceCreateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingInvoiceCreateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingInvoiceCreateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingInvoiceCreateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const OrderingOrderMutateDocument = gql `
  mutation OrderingOrderMutate($input: IIoRestorecommerceOrderOrderList!) {
    ordering {
      order {
        Mutate(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...OrderFragment
              }
            }
          }
        }
      }
    }
  }
  ${OrderFragmentFragmentDoc}
`;
class OrderingOrderMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = OrderingOrderMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const OrderingOrderDeleteMutateDocument = gql `
  mutation OrderingOrderDeleteMutate(
    $input: IIoRestorecommerceResourcebaseDeleteRequest!
  ) {
    ordering {
      order {
        Delete(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            status {
              id
              code
              message
            }
          }
        }
      }
    }
  }
`;
class OrderingOrderDeleteMutateGQL extends i1.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = OrderingOrderDeleteMutateDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderDeleteMutateGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderDeleteMutateGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderDeleteMutateGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });
const OrderingOrderReadDocument = gql `
  query OrderingOrderRead($input: IIoRestorecommerceResourcebaseReadRequest!) {
    ordering {
      order {
        Read(input: $input) {
          details {
            operationStatus {
              code
              message
            }
            items {
              payload {
                ...OrderFragment
              }
            }
          }
        }
      }
    }
  }
  ${OrderFragmentFragmentDoc}
`;
class OrderingOrderReadGQL extends i1.Query {
    constructor(apollo) {
        super(apollo);
        this.document = OrderingOrderReadDocument;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderReadGQL, deps: [{ token: i1.Apollo }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderReadGQL, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.12", ngImport: i0, type: OrderingOrderReadGQL, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Apollo }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AddressFragmentFragmentDoc, CatalogProductDeleteMutateDocument, CatalogProductDeleteMutateGQL, CatalogProductMutateDocument, CatalogProductMutateGQL, CatalogProductReadDocument, CatalogProductReadGQL, ContactPointFragmentFragmentDoc, CoreGraphQLModule, CountryFragmentFragmentDoc, CreateOrderFulfillmentDocument, CreateOrderFulfillmentGQL, CurrencyFragmentFragmentDoc, CustomerFragmentFragmentDoc, FileFragmentFragmentDoc, FulfillmentFragmentFragmentDoc, FulfillmentFulfillmentDeleteMutateDocument, FulfillmentFulfillmentDeleteMutateGQL, FulfillmentFulfillmentMutateDocument, FulfillmentFulfillmentMutateGQL, FulfillmentFulfillmentReadDocument, FulfillmentFulfillmentReadGQL, FulfillmentFulfillmentSubmitDocument, FulfillmentFulfillmentSubmitGQL, IdentityRoleDeleteMutateDocument, IdentityRoleDeleteMutateGQL, IdentityRoleMutateDocument, IdentityRoleMutateGQL, IdentityRoleReadDocument, IdentityRoleReadGQL, IdentityUserActivateMutateDocument, IdentityUserActivateMutateGQL, IdentityUserChangePasswordMutateDocument, IdentityUserChangePasswordMutateGQL, IdentityUserConfirmEmailChangeMutateDocument, IdentityUserConfirmEmailChangeMutateGQL, IdentityUserConfirmPasswordChangeMutateDocument, IdentityUserConfirmPasswordChangeMutateGQL, IdentityUserDeleteMutateDocument, IdentityUserDeleteMutateGQL, IdentityUserFindByTokenDocument, IdentityUserFindByTokenGQL, IdentityUserFindDocument, IdentityUserFindGQL, IdentityUserMutateDocument, IdentityUserMutateGQL, IdentityUserReadDocument, IdentityUserReadGQL, IdentityUserRegisterMutateDocument, IdentityUserRegisterMutateGQL, IdentityUserRequestEmailChangeMutateDocument, IdentityUserRequestEmailChangeMutateGQL, IdentityUserRequestPasswordChangeMutateDocument, IdentityUserRequestPasswordChangeMutateGQL, ImageFragmentFragmentDoc, InvoiceFragmentFragmentDoc, InvoicingInvoiceDeleteMutateDocument, InvoicingInvoiceDeleteMutateGQL, InvoicingInvoiceMutateDocument, InvoicingInvoiceMutateGQL, InvoicingInvoiceReadDocument, InvoicingInvoiceReadGQL, IoRestorecommerceAccessControlResponseDecision, IoRestorecommerceCommandCommandParameterParameterType, IoRestorecommerceCustomerCustomerType, IoRestorecommerceFilterFilterOpOperator, IoRestorecommerceFilterFilterOperation, IoRestorecommerceFilterFilterValueType, IoRestorecommerceFulfillmentFulfillmentState, IoRestorecommerceInvoicePaymentState, IoRestorecommerceJobBackoffType, IoRestorecommerceJobJobOptionsPriority, IoRestorecommerceJobJobReadRequestSortOrder, IoRestorecommerceOrderFulfillmentInvoiceMode, IoRestorecommerceOrderOrderState, IoRestorecommercePaymentMethodPaymentMethodEnum, IoRestorecommercePaymentMethodTransferTypeEnum, IoRestorecommercePaymentProvider, IoRestorecommerceProductAssociationType, IoRestorecommerceResourcebaseFilterOpOperator, IoRestorecommerceResourcebaseFilterOperation, IoRestorecommerceResourcebaseFilterValueType, IoRestorecommerceResourcebaseSortSortOrder, IoRestorecommerceRuleEffect, IoRestorecommerceTaxRoundMode, IoRestorecommerceUnitCodeSector, IoRestorecommerceUnitCodeStatusCode, IoRestorecommerceUserUserType, LocaleFragmentFragmentDoc, LocationFragmentFragmentDoc, ManufacturerFragmentFragmentDoc, ManufucturerDeleteDocument, ManufucturerDeleteGQL, ManufucturerMutateDocument, ManufucturerMutateGQL, ManufucturerReadDocument, ManufucturerReadGQL, MasterDataAddressReadDocument, MasterDataAddressReadGQL, MasterDataCountryDeleteMutateDocument, MasterDataCountryDeleteMutateGQL, MasterDataCountryMutateDocument, MasterDataCountryMutateGQL, MasterDataCountryReadDocument, MasterDataCountryReadGQL, MasterDataCurrencyDeleteMutateDocument, MasterDataCurrencyDeleteMutateGQL, MasterDataCurrencyMutateDocument, MasterDataCurrencyMutateGQL, MasterDataCurrencyReadDocument, MasterDataCurrencyReadGQL, MasterDataCustomerDeleteMutateDocument, MasterDataCustomerDeleteMutateGQL, MasterDataCustomerMutateDocument, MasterDataCustomerMutateGQL, MasterDataCustomerReadDocument, MasterDataCustomerReadGQL, MasterDataLocaleReadDocument, MasterDataLocaleReadGQL, MasterDataLocationReadDocument, MasterDataLocationReadGQL, MasterDataOrganizationDeleteMutateDocument, MasterDataOrganizationDeleteMutateGQL, MasterDataOrganizationMutateDocument, MasterDataOrganizationMutateGQL, MasterDataOrganizationReadDocument, MasterDataOrganizationReadGQL, MasterDataShopDeleteMutateDocument, MasterDataShopDeleteMutateGQL, MasterDataShopMutateDocument, MasterDataShopMutateGQL, MasterDataShopReadDocument, MasterDataShopReadGQL, MasterDataTaxDeleteMutateDocument, MasterDataTaxDeleteMutateGQL, MasterDataTaxMutateDocument, MasterDataTaxMutateGQL, MasterDataTaxReadDocument, MasterDataTaxReadGQL, MasterDataTimezoneReadDocument, MasterDataTimezoneReadGQL, MetaFragmentFragmentDoc, ModeType, OpsStatusFragmentFragmentDoc, OrderFragmentFragmentDoc, OrderingInvoiceCreateDocument, OrderingInvoiceCreateGQL, OrderingOrderDeleteMutateDocument, OrderingOrderDeleteMutateGQL, OrderingOrderMutateDocument, OrderingOrderMutateGQL, OrderingOrderReadDocument, OrderingOrderReadGQL, OrganizationFragmentFragmentDoc, PolicyReadDocument, PolicyReadGQL, PriceGroupDeleteDocument, PriceGroupDeleteGQL, PriceGroupFragmentFragmentDoc, PriceGroupMutateDocument, PriceGroupMutateGQL, PriceGroupReadDocument, PriceGroupReadGQL, ProductCategoryDeleteDocument, ProductCategoryDeleteGQL, ProductCategoryFragmentFragmentDoc, ProductCategoryMutateDocument, ProductCategoryMutateGQL, ProductCategoryReadDocument, ProductCategoryReadGQL, ProductFragmentFragmentDoc, ProductPrototypeDeleteDocument, ProductPrototypeDeleteGQL, ProductPrototypeFragmentFragmentDoc, ProductPrototypeMutateDocument, ProductPrototypeMutateGQL, ProductPrototypeReadDocument, ProductPrototypeReadGQL, ProductVariantFragmentFragmentDoc, RoleFragmentFragmentDoc, ShopFragmentFragmentDoc, StatusFragmentFragmentDoc, SubscriptionAction, TaxFragmentFragmentDoc, TimezoneFragmentFragmentDoc, UserFragmentFragmentDoc, UserRoleFragmentFragmentDoc };
//# sourceMappingURL=console-core-graphql.mjs.map
