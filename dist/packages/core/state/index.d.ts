import * as i0 from '@angular/core';
import * as _ngrx_store from '@ngrx/store';
import { Store, Action, ActionReducer } from '@ngrx/store';
import * as _ngrx_effects from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import * as rxjs from 'rxjs';
import { Observable, UnaryFunction, OperatorFunction } from 'rxjs';
import * as _console_core_types from '@console-core/types';
import { TNewNotification, IAppState, IOrganization, IOrganizationContextState, IUser, IRole, IRoleAssociation, IApiConstant, IAuthnTokenSignInPayload, IAuthnTokenSignInResponse, IAuthnTokenSignOutPayload, TOperationStatus, IMeta, IAuthnState, IAccountState, IFulfillment, IFulfillmentState, IInvoice, IInvoiceState, IPolicy, IPolicyState, IRoleState, ICountry, ICountryState, ICurrency, ICurrencyState, ICustomer, ICustomerState, IIamState, ILocale, ILocaleState, IOrganizationState, ITimezone, ITimezoneState, ITax, ITaxState, IShop, IShopState, IManufacturer, IManufacturerState, IObjectUploadState, IObjectUpload, IOrder, IOrderState, IProduct, IProductState, IProductCategory, IProductCategoryState, IProductPrototypeState, IPriceGroup, IPriceGroupState, IRouterState, IStoreConstant, IStore } from '@console-core/types';
import * as _console_core_graphql from '@console-core/graphql';
import { PolicyReadGQL, IIoRestorecommerceResourcebaseReadRequest, PolicyReadQuery, CatalogProductReadGQL, CatalogProductMutateGQL, CatalogProductDeleteMutateGQL, CatalogProductReadQuery, IIoRestorecommerceProductProductList, CatalogProductMutateMutation, IIoRestorecommerceResourcebaseDeleteRequest, CatalogProductDeleteMutateMutation, FulfillmentFulfillmentReadGQL, FulfillmentFulfillmentMutateGQL, FulfillmentFulfillmentSubmitGQL, FulfillmentFulfillmentDeleteMutateGQL, FulfillmentFulfillmentReadQuery, IIoRestorecommerceFulfillmentFulfillmentList, FulfillmentFulfillmentMutateMutation, FulfillmentFulfillmentSubmitMutation, FulfillmentFulfillmentDeleteMutateMutation, IdentityUserActivateMutateGQL, IdentityUserFindGQL, IdentityUserFindByTokenGQL, IdentityUserRequestEmailChangeMutateGQL, IdentityUserConfirmEmailChangeMutateGQL, IdentityUserRequestPasswordChangeMutateGQL, IdentityUserConfirmPasswordChangeMutateGQL, IdentityUserChangePasswordMutateGQL, IdentityUserReadGQL, IdentityUserMutateGQL, IdentityUserDeleteMutateGQL, IIoRestorecommerceUserActivateRequest, IdentityUserActivateMutateMutation, IIoRestorecommerceUserFindRequest, IdentityUserFindQuery, IIoRestorecommerceUserFindByTokenRequest, IdentityUserFindByTokenQuery, IIoRestorecommerceUserChangeEmailRequest, IdentityUserRequestEmailChangeMutateMutation, IIoRestorecommerceUserConfirmEmailChangeRequest, IdentityUserConfirmEmailChangeMutateMutation, IIoRestorecommerceUserRequestPasswordChangeRequest, IdentityUserRequestPasswordChangeMutateMutation, IIoRestorecommerceUserConfirmPasswordChangeRequest, IdentityUserConfirmPasswordChangeMutateMutation, IIoRestorecommerceUserChangePasswordRequest, IdentityUserChangePasswordMutateMutation, IdentityUserReadQuery, IIoRestorecommerceUserUserList, IdentityUserMutateMutation, IdentityUserDeleteMutateMutation, IdentityRoleReadGQL, IdentityRoleMutateGQL, IdentityRoleDeleteMutateGQL, IdentityRoleReadQuery, IIoRestorecommerceRoleRoleList, IdentityRoleMutateMutation, IdentityRoleDeleteMutateMutation, IdentityUserRegisterMutateGQL, IIoRestorecommerceUserRegisterRequest, IdentityUserRegisterMutateMutation, InvoicingInvoiceReadGQL, InvoicingInvoiceMutateGQL, InvoicingInvoiceDeleteMutateGQL, InvoicingInvoiceReadQuery, IIoRestorecommerceInvoiceInvoiceList, InvoicingInvoiceMutateMutation, InvoicingInvoiceDeleteMutateMutation, ManufucturerReadGQL, ManufucturerMutateGQL, ManufucturerDeleteGQL, ManufucturerReadQuery, IIoRestorecommerceManufacturerManufacturerList, ManufucturerMutateMutation, ManufucturerDeleteMutation, MasterDataCountryReadGQL, MasterDataCountryMutateGQL, MasterDataCountryDeleteMutateGQL, MasterDataCountryReadQuery, IIoRestorecommerceCountryCountryList, MasterDataCountryMutateMutation, MasterDataCountryDeleteMutateMutation, MasterDataCurrencyReadGQL, MasterDataCurrencyMutateGQL, MasterDataCurrencyDeleteMutateGQL, MasterDataCurrencyReadQuery, IIoRestorecommerceCurrencyCurrencyList, MasterDataCurrencyMutateMutation, MasterDataCurrencyDeleteMutateMutation, MasterDataCustomerReadGQL, MasterDataCustomerMutateGQL, MasterDataCustomerDeleteMutateGQL, MasterDataCustomerReadQuery, IIoRestorecommerceCustomerCustomerList, MasterDataCustomerMutateMutation, MasterDataCustomerDeleteMutateMutation, MasterDataLocaleReadGQL, MasterDataLocaleReadQuery, MasterDataOrganizationReadGQL, MasterDataOrganizationMutateGQL, MasterDataOrganizationDeleteMutateGQL, MasterDataOrganizationReadQuery, IIoRestorecommerceOrganizationOrganizationList, MasterDataOrganizationMutateMutation, MasterDataOrganizationDeleteMutateMutation, MasterDataTaxReadGQL, MasterDataTaxMutateGQL, MasterDataTaxDeleteMutateGQL, MasterDataTaxReadQuery, IIoRestorecommerceTaxTaxList, MasterDataTaxMutateMutation, MasterDataTaxDeleteMutateMutation, MasterDataTimezoneReadGQL, MasterDataTimezoneReadQuery, MasterDataShopReadGQL, MasterDataShopMutateGQL, MasterDataShopDeleteMutateGQL, MasterDataShopReadQuery, IIoRestorecommerceShopShopList, MasterDataShopMutateMutation, MasterDataShopDeleteMutateMutation, OrderingOrderReadGQL, OrderingOrderMutateGQL, OrderingOrderDeleteMutateGQL, OrderingInvoiceCreateGQL, CreateOrderFulfillmentGQL, OrderingOrderReadQuery, IIoRestorecommerceOrderOrderList, OrderingOrderMutateMutation, OrderingOrderDeleteMutateMutation, OrderingInvoiceCreateMutation, IIoRestorecommerceAddressShippingAddress, CreateOrderFulfillmentMutation, PriceGroupReadGQL, PriceGroupMutateGQL, PriceGroupDeleteGQL, PriceGroupReadQuery, PriceGroupMutateMutation, PriceGroupDeleteMutation, ProductCategoryReadGQL, ProductCategoryMutateGQL, ProductCategoryDeleteGQL, ProductCategoryReadQuery, ProductCategoryMutateMutation, ProductCategoryDeleteMutation, ProductPrototypeReadGQL, ProductPrototypeMutateGQL, ProductPrototypeDeleteGQL, ProductPrototypeReadQuery, IIoRestorecommerceProductPrototypeProductPrototypeList, ProductPrototypeMutateMutation, ProductPrototypeDeleteMutation, IIoRestorecommerceProductCategoryProductCategoryList, IIoRestorecommercePriceGroupPriceGroupList } from '@console-core/graphql';
import { ApolloQueryResult } from '@apollo/client';
import * as _ngrx_entity from '@ngrx/entity';
import { Dictionary } from '@ngrx/entity';
import { MutationResult } from 'apollo-angular';
import * as dist_packages_core_types_src from 'dist/packages/core/types/src';
import * as _angular_router from '@angular/router';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterStateSerializer } from '@ngrx/router-store';

declare class CoreStateModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreStateModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreStateModule, never, [typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule, typeof _ngrx_effects.EffectsFeatureModule, typeof _ngrx_store.StoreFeatureModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreStateModule>;
}

declare class PolicyService {
    private readonly policyReadGQL;
    constructor(policyReadGQL: PolicyReadGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<PolicyReadQuery>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolicyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PolicyService>;
}

declare class AppEffects {
    private readonly actions$;
    addNotification$: rxjs.Observable<{
        payload: dist_packages_core_types_src.TNewNotification;
    } & _ngrx_store.Action<"[APP] Show notification">> & _ngrx_effects.CreateEffectMetadata;
    clearNotifications$: rxjs.Observable<_ngrx_store.Action<"[APP] Clear notifications">> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions);
    static ɵfac: i0.ɵɵFactoryDeclaration<AppEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppEffects>;
}

declare class AppFacade {
    private readonly store;
    readonly notifications$: rxjs.Observable<_console_core_types.INotification[]>;
    readonly actionStatus$: rxjs.Observable<_console_core_types.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    addNotification: (payload: TNewNotification) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<AppFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppFacade>;
}

declare const appReducer: (state: IAppState | undefined, action: Action) => IAppState;

declare class OrganizationContextFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IOrganization>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IOrganization[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IOrganization | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    setSelectedOrganizationId: (payload: string | null) => void;
    resetSelectedGlobalOrganization: () => void;
    lastSelectedGlobalOrganization: () => void;
    cancelSelection: () => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationContextFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationContextFacade>;
}

declare class OrganizationContextEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly organizationService;
    private readonly organizationFacade;
    private readonly errorHandlingService;
    organizationReadRequest$: rxjs.Observable<({
        payload: IOrganization[];
    } & _ngrx_store.Action<"[ORGANIZATION CONTEXT] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION CONTEXT] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    handleOrganizationChangedNotification$: rxjs.Observable<_ngrx_store.Action<"[ORGANIZATION CONTEXT] Set selected global organization to default"> | _ngrx_store.Action<"[ORGANIZATION CONTEXT] Set previously selected global organization"> | _ngrx_store.Action<"[ORGANIZATION CONTEXT] Set the global selected leaf to null"> | ({
        payload: string | null;
    } & _ngrx_store.Action<"[ORGANIZATION CONTEXT] Set selected organization id">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, organizationService: OrganizationService, organizationFacade: OrganizationContextFacade, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationContextEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationContextEffects>;
}

declare const organizationContextReducer: (state: IOrganizationContextState | undefined, action: Action) => IOrganizationContextState;

declare class AuthzService {
    private readonly accountFacade;
    private readonly organizationContextFacade;
    private hasRole;
    private hasRoleInOrg;
    isSuperAdmin$: rxjs.Observable<boolean>;
    private createRoleObservable;
    isAdmin$: rxjs.Observable<boolean>;
    isSale$: rxjs.Observable<boolean>;
    isModerator$: rxjs.Observable<boolean>;
    constructor(accountFacade: AccountFacade, organizationContextFacade: OrganizationContextFacade);
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthzService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthzService>;
}

declare class ProductService {
    private readonly catalogProductReadGQL;
    private readonly catalogProductMutateGQL;
    private readonly catalogProductDeleteMutateGQL;
    constructor(catalogProductReadGQL: CatalogProductReadGQL, catalogProductMutateGQL: CatalogProductMutateGQL, catalogProductDeleteMutateGQL: CatalogProductDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<CatalogProductReadQuery>>;
    mutate(payload: IIoRestorecommerceProductProductList): Observable<MutationResult<CatalogProductMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<CatalogProductDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductService>;
}

declare class FulfillmentService {
    private readonly invoicingFulfillmentReadGQL;
    private readonly invoicingFulfillmentMutateGQL;
    private readonly fulfillmentSubmitGQL;
    private readonly invoicingFulfillmentDeleteMutateGQL;
    constructor(invoicingFulfillmentReadGQL: FulfillmentFulfillmentReadGQL, invoicingFulfillmentMutateGQL: FulfillmentFulfillmentMutateGQL, fulfillmentSubmitGQL: FulfillmentFulfillmentSubmitGQL, invoicingFulfillmentDeleteMutateGQL: FulfillmentFulfillmentDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<FulfillmentFulfillmentReadQuery>>;
    mutate(payload: IIoRestorecommerceFulfillmentFulfillmentList): Observable<MutationResult<FulfillmentFulfillmentMutateMutation>>;
    submit(payload: IIoRestorecommerceFulfillmentFulfillmentList): Observable<MutationResult<FulfillmentFulfillmentSubmitMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<FulfillmentFulfillmentDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentService>;
}

declare class UserService {
    private readonly identityUserActivateMutateGQL;
    private readonly identityUserFindGQL;
    private readonly identityUserFindByTokenGQL;
    private readonly identityUserRequestEmailChangeMutateGQL;
    private readonly identityUserConfirmEmailChangeMutateGQL;
    private readonly identityUserRequestPasswordChangeMutateGQL;
    private readonly identityUserConfirmPasswordChangeMutateGQL;
    private readonly identityUserChangePasswordMutateGQL;
    private readonly identityUserReadGQL;
    private readonly identityUserMutateGQL;
    private readonly identityUserDeleteMutateGQL;
    constructor(identityUserActivateMutateGQL: IdentityUserActivateMutateGQL, identityUserFindGQL: IdentityUserFindGQL, identityUserFindByTokenGQL: IdentityUserFindByTokenGQL, identityUserRequestEmailChangeMutateGQL: IdentityUserRequestEmailChangeMutateGQL, identityUserConfirmEmailChangeMutateGQL: IdentityUserConfirmEmailChangeMutateGQL, identityUserRequestPasswordChangeMutateGQL: IdentityUserRequestPasswordChangeMutateGQL, identityUserConfirmPasswordChangeMutateGQL: IdentityUserConfirmPasswordChangeMutateGQL, identityUserChangePasswordMutateGQL: IdentityUserChangePasswordMutateGQL, identityUserReadGQL: IdentityUserReadGQL, identityUserMutateGQL: IdentityUserMutateGQL, identityUserDeleteMutateGQL: IdentityUserDeleteMutateGQL);
    activate(payload: IIoRestorecommerceUserActivateRequest): Observable<MutationResult<IdentityUserActivateMutateMutation>>;
    find(payload: IIoRestorecommerceUserFindRequest): Observable<ApolloQueryResult<IdentityUserFindQuery>>;
    findByToken(payload: IIoRestorecommerceUserFindByTokenRequest): Observable<ApolloQueryResult<IdentityUserFindByTokenQuery>>;
    requestEmailChange(payload: IIoRestorecommerceUserChangeEmailRequest): Observable<MutationResult<IdentityUserRequestEmailChangeMutateMutation>>;
    confirmEmailChange(payload: IIoRestorecommerceUserConfirmEmailChangeRequest): Observable<MutationResult<IdentityUserConfirmEmailChangeMutateMutation>>;
    requestPasswordChange(payload: IIoRestorecommerceUserRequestPasswordChangeRequest): Observable<MutationResult<IdentityUserRequestPasswordChangeMutateMutation>>;
    confirmPasswordChange(payload: IIoRestorecommerceUserConfirmPasswordChangeRequest): Observable<MutationResult<IdentityUserConfirmPasswordChangeMutateMutation>>;
    passwordChange(payload: IIoRestorecommerceUserChangePasswordRequest): Observable<MutationResult<IdentityUserChangePasswordMutateMutation>>;
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<IdentityUserReadQuery>>;
    mutate(payload: IIoRestorecommerceUserUserList): Observable<MutationResult<IdentityUserMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<IdentityUserDeleteMutateMutation>>;
    getUserFormatted(user: IUser): IUser;
    getRoleAssociationsRoles(user: IUser, rolesHash: Dictionary<IRole>): IRole[];
    createRoleAssociation(role: string, instanceType: string, instanceId: string): IRoleAssociation;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}

declare class RoleService {
    private readonly identityRoleReadGQL;
    private readonly identityRoleMutateGQL;
    private readonly identityRoleDeleteMutateGQL;
    private assignableByRolesFormattedCache;
    constructor(identityRoleReadGQL: IdentityRoleReadGQL, identityRoleMutateGQL: IdentityRoleMutateGQL, identityRoleDeleteMutateGQL: IdentityRoleDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<IdentityRoleReadQuery>>;
    mutate(payload: IIoRestorecommerceRoleRoleList): Observable<MutationResult<IdentityRoleMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<IdentityRoleDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleService>;
}

declare class ApiService {
    private apiUrl;
    constructor(apiUrl: string);
    getEndpoint(endpointKey: keyof IApiConstant['endpoints']): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}

declare class AuthnService {
    private oidcKey;
    private readonly httpClient;
    private readonly apiService;
    private readonly identityUserRegisterGQL;
    private readonly headers;
    constructor(oidcKey: string, httpClient: HttpClient, apiService: ApiService, identityUserRegisterGQL: IdentityUserRegisterMutateGQL);
    signUp(payload: IIoRestorecommerceUserRegisterRequest): Observable<MutationResult<IdentityUserRegisterMutateMutation>>;
    signIn(payload: IAuthnTokenSignInPayload): Observable<IAuthnTokenSignInResponse>;
    signOut(payload: IAuthnTokenSignOutPayload): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthnService>;
}

declare class InvoiceService {
    private readonly invoicingInvoiceReadGQL;
    private readonly invoicingInvoiceMutateGQL;
    private readonly invoicingInvoiceDeleteMutateGQL;
    constructor(invoicingInvoiceReadGQL: InvoicingInvoiceReadGQL, invoicingInvoiceMutateGQL: InvoicingInvoiceMutateGQL, invoicingInvoiceDeleteMutateGQL: InvoicingInvoiceDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<InvoicingInvoiceReadQuery>>;
    mutate(payload: IIoRestorecommerceInvoiceInvoiceList): Observable<MutationResult<InvoicingInvoiceMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<InvoicingInvoiceDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceService>;
}

declare class ManufacturerService {
    private readonly manufacturerReadGQL;
    private readonly manufacturerMutationGQL;
    private readonly manufacturerDeleteGQL;
    constructor(manufacturerReadGQL: ManufucturerReadGQL, manufacturerMutationGQL: ManufucturerMutateGQL, manufacturerDeleteGQL: ManufucturerDeleteGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<ManufucturerReadQuery>>;
    mutate(payload: IIoRestorecommerceManufacturerManufacturerList): Observable<MutationResult<ManufucturerMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<ManufucturerDeleteMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufacturerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufacturerService>;
}

declare class CountryService {
    private readonly masterDataCountryReadGQL;
    private readonly masterDataCountryMutateGQL;
    private readonly masterDataCountryDeleteMutateGQL;
    constructor(masterDataCountryReadGQL: MasterDataCountryReadGQL, masterDataCountryMutateGQL: MasterDataCountryMutateGQL, masterDataCountryDeleteMutateGQL: MasterDataCountryDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataCountryReadQuery>>;
    mutate(payload: IIoRestorecommerceCountryCountryList): Observable<MutationResult<MasterDataCountryMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataCountryDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryService>;
}

declare class CurrencyService {
    private readonly masterDataCurrencyReadGQL;
    private readonly masterDataCurrencyMutateGQL;
    private readonly masterDataCurrencyDeleteMutateGQL;
    constructor(masterDataCurrencyReadGQL: MasterDataCurrencyReadGQL, masterDataCurrencyMutateGQL: MasterDataCurrencyMutateGQL, masterDataCurrencyDeleteMutateGQL: MasterDataCurrencyDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataCurrencyReadQuery>>;
    mutate(payload: IIoRestorecommerceCurrencyCurrencyList): Observable<MutationResult<MasterDataCurrencyMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataCurrencyDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyService>;
}

declare class CustomerService {
    private readonly masterDataCustomerReadGQL;
    private readonly masterDataCustomerMutateGQL;
    private readonly masterDataCustomerDeleteMutateGQL;
    constructor(masterDataCustomerReadGQL: MasterDataCustomerReadGQL, masterDataCustomerMutateGQL: MasterDataCustomerMutateGQL, masterDataCustomerDeleteMutateGQL: MasterDataCustomerDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataCustomerReadQuery>>;
    mutate(payload: IIoRestorecommerceCustomerCustomerList): Observable<MutationResult<MasterDataCustomerMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataCustomerDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerService>;
}

declare class LocaleService {
    private readonly masterDataLocaleReadGQL;
    constructor(masterDataLocaleReadGQL: MasterDataLocaleReadGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataLocaleReadQuery>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocaleService>;
}

declare class OrganizationService {
    private readonly masterDataOrganizationReadGQL;
    private readonly masterDataOrganizationMutateGQL;
    private readonly masterDataOrganizationDeleteMutateGQL;
    constructor(masterDataOrganizationReadGQL: MasterDataOrganizationReadGQL, masterDataOrganizationMutateGQL: MasterDataOrganizationMutateGQL, masterDataOrganizationDeleteMutateGQL: MasterDataOrganizationDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataOrganizationReadQuery>>;
    mutate(payload: IIoRestorecommerceOrganizationOrganizationList): Observable<MutationResult<MasterDataOrganizationMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataOrganizationDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationService>;
}

declare class TaxService {
    private readonly masterDataTaxReadGQL;
    private readonly masterDataTaxMutateGQL;
    private readonly masterDataTaxDeleteMutateGQL;
    constructor(masterDataTaxReadGQL: MasterDataTaxReadGQL, masterDataTaxMutateGQL: MasterDataTaxMutateGQL, masterDataTaxDeleteMutateGQL: MasterDataTaxDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataTaxReadQuery>>;
    mutate(payload: IIoRestorecommerceTaxTaxList): Observable<MutationResult<MasterDataTaxMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataTaxDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaxService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaxService>;
}

declare class TimezoneService {
    private readonly masterDataTimezoneReadGQL;
    constructor(masterDataTimezoneReadGQL: MasterDataTimezoneReadGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataTimezoneReadQuery>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezoneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimezoneService>;
}

declare class ShopService {
    private readonly masterDataShopReadGQL;
    private readonly masterDataShopMutateGQL;
    private readonly masterDataShopDeleteMutateGQL;
    constructor(masterDataShopReadGQL: MasterDataShopReadGQL, masterDataShopMutateGQL: MasterDataShopMutateGQL, masterDataShopDeleteMutateGQL: MasterDataShopDeleteMutateGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<MasterDataShopReadQuery>>;
    mutate(payload: IIoRestorecommerceShopShopList): Observable<MutationResult<MasterDataShopMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<MasterDataShopDeleteMutateMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShopService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShopService>;
}

declare class OrderService {
    private readonly orderingOrderReadGQL;
    private readonly orderingOrderMutateGQL;
    private readonly orderingOrderDeleteMutateGQL;
    private readonly orderingInvoiceCreateGQL;
    private readonly orderingFulfilmentGQL;
    constructor(orderingOrderReadGQL: OrderingOrderReadGQL, orderingOrderMutateGQL: OrderingOrderMutateGQL, orderingOrderDeleteMutateGQL: OrderingOrderDeleteMutateGQL, orderingInvoiceCreateGQL: OrderingInvoiceCreateGQL, orderingFulfilmentGQL: CreateOrderFulfillmentGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<OrderingOrderReadQuery>>;
    mutate(payload: IIoRestorecommerceOrderOrderList): Observable<MutationResult<OrderingOrderMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<OrderingOrderDeleteMutateMutation>>;
    createOrderInvoice(payload: string): Observable<MutationResult<OrderingInvoiceCreateMutation>>;
    createFulfilment(payload: {
        id: string;
        senderAddress: IIoRestorecommerceAddressShippingAddress;
    }): Observable<MutationResult<CreateOrderFulfillmentMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderService>;
}

declare class PriceGroupService {
    private readonly priceGroupReadGQL;
    private readonly priceGroupMutationGQL;
    private readonly priceGroupDeleteGQL;
    constructor(priceGroupReadGQL: PriceGroupReadGQL, priceGroupMutationGQL: PriceGroupMutateGQL, priceGroupDeleteGQL: PriceGroupDeleteGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<PriceGroupReadQuery>>;
    mutate(payload: IIoRestorecommerceManufacturerManufacturerList): Observable<MutationResult<PriceGroupMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<PriceGroupDeleteMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupService>;
}

declare class ProductCategoryService {
    private readonly productCategoryReadGQL;
    private readonly productCategoryMutationGQL;
    private readonly productCategoryDeleteGQL;
    constructor(productCategoryReadGQL: ProductCategoryReadGQL, productCategoryMutationGQL: ProductCategoryMutateGQL, productCategoryDeleteGQL: ProductCategoryDeleteGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<ProductCategoryReadQuery>>;
    mutate(payload: IIoRestorecommerceManufacturerManufacturerList): Observable<MutationResult<ProductCategoryMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<ProductCategoryDeleteMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryService>;
}

declare class ProductPrototypeService {
    private readonly productPrototypeReadGQL;
    private readonly productPrototypeMutationGQL;
    private readonly productPrototypeDeleteGQL;
    constructor(productPrototypeReadGQL: ProductPrototypeReadGQL, productPrototypeMutationGQL: ProductPrototypeMutateGQL, productPrototypeDeleteGQL: ProductPrototypeDeleteGQL);
    read(payload: IIoRestorecommerceResourcebaseReadRequest): Observable<ApolloQueryResult<ProductPrototypeReadQuery>>;
    mutate(payload: IIoRestorecommerceProductPrototypeProductPrototypeList): Observable<MutationResult<ProductPrototypeMutateMutation>>;
    remove(payload: IIoRestorecommerceResourcebaseDeleteRequest): Observable<MutationResult<ProductPrototypeDeleteMutation>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeService>;
}

declare class ErrorHandlingService {
    private readonly authFacade;
    constructor(authFacade: AuthnFacade);
    checkStatusAndThrow(status?: TOperationStatus): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlingService>;
}

declare class ObjectUploadService {
    private http;
    constructor(http: HttpClient);
    uploadFile(file: File, endpoint: string, bucketName: string, keyName: string, meta: Partial<IMeta>, token: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectUploadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ObjectUploadService>;
}

declare class AuthnFacade {
    private readonly store;
    readonly isAuthenticated$: rxjs.Observable<boolean>;
    readonly isNotAuthenticated$: rxjs.Observable<boolean>;
    readonly expiresIn$: rxjs.Observable<string | null>;
    readonly token$: rxjs.Observable<string | null>;
    readonly isRequesting$: rxjs.Observable<boolean>;
    readonly actionStatus$: rxjs.Observable<_console_core_types.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    signUp: (payload: IIoRestorecommerceUserRegisterRequest) => void;
    activate: (payload: IIoRestorecommerceUserActivateRequest) => void;
    signIn: (payload: IAuthnTokenSignInPayload) => void;
    signOut: (showNotification?: boolean) => void;
    passwordRecovery: (payload: IIoRestorecommerceUserRequestPasswordChangeRequest) => void;
    confirmPassword: (payload: IIoRestorecommerceUserConfirmPasswordChangeRequest) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthnFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthnFacade>;
}

declare class AuthnEffects {
    private readonly router;
    private readonly activatedRoute;
    private readonly actions$;
    private readonly authnService;
    private readonly userService;
    private readonly appFacade;
    private readonly authnFacade;
    private readonly accountFacade;
    signUpRequest$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Sign up success"> | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Sign up fail">)> & _ngrx_effects.CreateEffectMetadata;
    signUpSuccess$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Sign up success">> & _ngrx_effects.CreateEffectMetadata;
    activateRequest$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Activate success"> | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Activate fail">)> & _ngrx_effects.CreateEffectMetadata;
    activateSuccess$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Activate success">> & _ngrx_effects.CreateEffectMetadata;
    signInRequest$: rxjs.Observable<({
        payload: _console_core_types.IAuthnStateData;
    } & _ngrx_store.Action<"[AUTHN] Sign in success">) | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Sign in fail">)> & _ngrx_effects.CreateEffectMetadata;
    signInSuccess$: rxjs.Observable<string> & _ngrx_effects.CreateEffectMetadata;
    passwordRecoveryRequest$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Password recovery success"> | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Password recovery fail">)> & _ngrx_effects.CreateEffectMetadata;
    passwordRecoverySuccess$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Password recovery success">> & _ngrx_effects.CreateEffectMetadata;
    confirmPasswordRequest$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Confirm password change success"> | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Confirm password change fail">)> & _ngrx_effects.CreateEffectMetadata;
    confirmPasswordSuccess$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Confirm password change success">> & _ngrx_effects.CreateEffectMetadata;
    signOutRequest$: rxjs.Observable<({
        error: string;
        showNotification: boolean;
    } & _ngrx_store.Action<"[AUTHN] Sign out fail">) | ({
        payload: {
            showNotification: boolean;
        };
    } & _ngrx_store.Action<"[AUTHN] Sign out success">)> & _ngrx_effects.CreateEffectMetadata;
    signOut: rxjs.Observable<({
        error: string;
        showNotification: boolean;
    } & _ngrx_store.Action<"[AUTHN] Sign out fail">) | ({
        payload: {
            showNotification: boolean;
        };
    } & _ngrx_store.Action<"[AUTHN] Sign out success">)> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Sign up fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Activate fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Sign in fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Password recovery fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[AUTHN] Confirm password change fail">)> & _ngrx_effects.CreateEffectMetadata;
    resetAuthnState$: rxjs.Observable<_ngrx_store.Action<"[AUTHN] Reset authn state">> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, activatedRoute: ActivatedRoute, actions$: Actions, authnService: AuthnService, userService: UserService, appFacade: AppFacade, authnFacade: AuthnFacade, accountFacade: AccountFacade);
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthnEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthnEffects>;
}

declare const authnReducer: (state: IAuthnState | undefined, action: Action) => IAuthnState;

declare class AccountEffects {
    private readonly actions$;
    private readonly appFacade;
    private readonly authnFacade;
    private readonly userService;
    private readonly errorHandlingService;
    userFindRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[ACCOUNT] User find success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User find fail">)> & _ngrx_effects.CreateEffectMetadata;
    userFindByTokenRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[ACCOUNT] Find user by token success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] Find user by token fail">)> & _ngrx_effects.CreateEffectMetadata;
    userMutateRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[ACCOUNT] User mutate success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User mutate fail">)> & _ngrx_effects.CreateEffectMetadata;
    userMutateRequestSuccess$: rxjs.Observable<{
        payload: IUser;
    } & _ngrx_store.Action<"[ACCOUNT] User mutate success">> & _ngrx_effects.CreateEffectMetadata;
    userChangeEmailRequest$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User change email success"> | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User change email fail">)> & _ngrx_effects.CreateEffectMetadata;
    userChangeEmailSuccess$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User change email success">> & _ngrx_effects.CreateEffectMetadata;
    userConfirmEmailChangeRequest$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User confirm email change success"> | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User confirm email change fail">)> & _ngrx_effects.CreateEffectMetadata;
    userConfirmEmailChangeSuccess$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User confirm email change success">> & _ngrx_effects.CreateEffectMetadata;
    userChangePasswordRequest$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User change password success"> | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User change password fail">)> & _ngrx_effects.CreateEffectMetadata;
    userChangePasswordSuccess$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User change password success">> & _ngrx_effects.CreateEffectMetadata;
    userRemoveRequest$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User remove success"> | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    userRemoveSuccess$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] User remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User find fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] Find user by token fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User mutate fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User change email fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User confirm email change fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User change password fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ACCOUNT] User remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    resetAccountState$: rxjs.Observable<_ngrx_store.Action<"[ACCOUNT] Reset account state">> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions, appFacade: AppFacade, authnFacade: AuthnFacade, userService: UserService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountEffects>;
}

declare class AccountFacade {
    private readonly store;
    user$: rxjs.Observable<dist_packages_core_types_src.IUser | null>;
    userId$: rxjs.Observable<string | undefined>;
    actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    error$: rxjs.Observable<string | null>;
    userFindRequest: (payload: IIoRestorecommerceUserFindRequest) => void;
    userFindByTokenRequest: (payload: IIoRestorecommerceUserFindByTokenRequest) => void;
    userMutateRequest: (payload: IIoRestorecommerceUserUserList) => void;
    userChangeEmailRequest: (payload: IIoRestorecommerceUserChangeEmailRequest) => void;
    userConfirmEmailChangeRequest: (payload: IIoRestorecommerceUserConfirmEmailChangeRequest) => void;
    userChangePasswordRequest: (payload: IIoRestorecommerceUserChangePasswordRequest) => void;
    userRemoveRequest: (payload: IIoRestorecommerceResourcebaseDeleteRequest) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountFacade>;
}

declare const accountReducer: (state: IAccountState | undefined, action: Action) => IAccountState;

declare class FulfillmentEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly fulfillmentService;
    private readonly errorHandlingService;
    fulfillmentReadRequest$: rxjs.Observable<({
        payload: IFulfillment[];
    } & _ngrx_store.Action<"[FULFILLMENT] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderReadOneByIdRequest$: rxjs.Observable<({
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentCreateRequest$: rxjs.Observable<({
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment create fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentCreateSuccess$: rxjs.Observable<{
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment create success">> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentUpdateRequest$: rxjs.Observable<({
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment update fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentUpdateSuccess$: rxjs.Observable<{
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment update success">> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentSubmitRequest$: rxjs.Observable<({
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment Submit success">) | ({
        error: string;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment Submit fail">)> & _ngrx_effects.CreateEffectMetadata;
    fulfillmentSubmitedSuccess$: rxjs.Observable<{
        payload: IFulfillment;
    } & _ngrx_store.Action<"[FULFILLMENT] Fulfillment Submit success">> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, fulfillmentService: FulfillmentService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentEffects>;
}

declare class FulfillmentFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IFulfillment>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IFulfillment[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IFulfillment | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceFulfillmentFulfillmentList) => void;
    update: (payload: IIoRestorecommerceFulfillmentFulfillmentList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    submit: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentFacade>;
}

declare const fulfillmentReducer: (state: IFulfillmentState | undefined, action: Action) => IFulfillmentState;

declare class InvoiceEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly invoiceService;
    private readonly errorHandlingService;
    invoiceReadRequest$: rxjs.Observable<({
        payload: IInvoice[];
    } & _ngrx_store.Action<"[INVOICE] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    invoiceCreateRequest$: rxjs.Observable<({
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice create fail">)> & _ngrx_effects.CreateEffectMetadata;
    invoiceCreateSuccess$: rxjs.Observable<{
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice create success">> & _ngrx_effects.CreateEffectMetadata;
    preloadOnEdit$: rxjs.Observable<({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[CUSTOMER] Read request">) | ({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[SHOP] Read request">) | ({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[IAM] Read request">)> & _ngrx_effects.CreateEffectMetadata;
    preloadOnCreate$: rxjs.Observable<({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[CUSTOMER] Read request">) | ({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[SHOP] Read request">) | ({
        payload: _console_core_graphql.IIoRestorecommerceResourcebaseReadRequest;
    } & _ngrx_store.Action<"[IAM] Read request">)> & _ngrx_effects.CreateEffectMetadata;
    invoiceUpdateRequest$: rxjs.Observable<({
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice update fail">)> & _ngrx_effects.CreateEffectMetadata;
    invoiceUpdateSuccess$: rxjs.Observable<{
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice update success">> & _ngrx_effects.CreateEffectMetadata;
    invoiceRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[INVOICE] Invoice remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    invoiceRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[INVOICE] Invoice remove success">> & _ngrx_effects.CreateEffectMetadata;
    invoicePaymentRequest$: rxjs.Observable<({
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice payment state success">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice payment state fail">)> & _ngrx_effects.CreateEffectMetadata;
    invoicePaymentSuccess$: rxjs.Observable<{
        payload: IInvoice;
    } & _ngrx_store.Action<"[INVOICE] Invoice payment state success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice remove fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[INVOICE] Invoice payment state fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, invoiceService: InvoiceService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceEffects>;
}

declare class InvoiceFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<IInvoice>>;
    readonly all$: rxjs.Observable<IInvoice[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<IInvoice | null>;
    readonly actionStatus$: rxjs.Observable<_console_core_types.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceInvoiceInvoiceList) => void;
    update: (payload: IIoRestorecommerceInvoiceInvoiceList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    changePaymentState: (invoice: IInvoice) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceFacade>;
}

declare const invoiceReducer: (state: IInvoiceState | undefined, action: Action) => IInvoiceState;

declare class PolicyEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly policyService;
    private readonly errorHandlingService;
    policyReadRequest$: rxjs.Observable<({
        payload: IPolicy[];
    } & _ngrx_store.Action<"[POLICY] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Policy create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Policy update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[POLICY] Policy remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, policyService: PolicyService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PolicyEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PolicyEffects>;
}

declare class PolicyFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IPolicy>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IPolicy[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IPolicy | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceRoleRoleList) => void;
    update: (payload: IIoRestorecommerceRoleRoleList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<PolicyFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PolicyFacade>;
}

declare const policyReducer: (state: IPolicyState | undefined, action: Action) => IPolicyState;

declare class RoleEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly roleService;
    private readonly errorHandlingService;
    roleReadRequest$: rxjs.Observable<({
        payload: IRole[];
    } & _ngrx_store.Action<"[ROLE] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    roleReadOneByIdRequest$: rxjs.Observable<({
        payload: IRole;
    } & _ngrx_store.Action<"[ROLE] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    roleCreateRequest$: rxjs.Observable<({
        payload: IRole;
    } & _ngrx_store.Action<"[ROLE] Role create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role create fail">)> & _ngrx_effects.CreateEffectMetadata;
    roleCreateSuccess$: rxjs.Observable<{
        payload: IRole;
    } & _ngrx_store.Action<"[ROLE] Role create success">> & _ngrx_effects.CreateEffectMetadata;
    roleUpdateRequest$: rxjs.Observable<({
        payload: IRole;
    } & _ngrx_store.Action<"[ROLE] Role update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role update fail">)> & _ngrx_effects.CreateEffectMetadata;
    roleUpdateSuccess$: rxjs.Observable<{
        payload: IRole;
    } & _ngrx_store.Action<"[ROLE] Role update success">> & _ngrx_effects.CreateEffectMetadata;
    roleRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ROLE] Role remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    roleRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ROLE] Role remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ROLE] Role remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, roleService: RoleService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleEffects>;
}

declare class RoleFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IRole>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IRole[]>;
    readonly allDistinctAssignableByRoles$: rxjs.Observable<string[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IRole | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceRoleRoleList) => void;
    update: (payload: IIoRestorecommerceRoleRoleList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleFacade>;
}

declare const roleReducer: (state: IRoleState | undefined, action: Action) => IRoleState;

declare class CountryEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly countryService;
    private readonly organizationContextFacade;
    private readonly errorHandlingService;
    countryReadRequest$: rxjs.Observable<({
        payload: ICountry[];
    } & _ngrx_store.Action<"[COUNTRY] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    countryReadOneByIdRequest$: rxjs.Observable<({
        payload: ICountry;
    } & _ngrx_store.Action<"[COUNTRY] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    countryCreateRequest$: rxjs.Observable<({
        payload: ICountry;
    } & _ngrx_store.Action<"[COUNTRY] Country create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country create fail">)> & _ngrx_effects.CreateEffectMetadata;
    countryCreateSuccess$: rxjs.Observable<{
        payload: ICountry;
    } & _ngrx_store.Action<"[COUNTRY] Country create success">> & _ngrx_effects.CreateEffectMetadata;
    countryUpdateRequest$: rxjs.Observable<({
        payload: ICountry;
    } & _ngrx_store.Action<"[COUNTRY] Country update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country update fail">)> & _ngrx_effects.CreateEffectMetadata;
    countryUpdateSuccess$: rxjs.Observable<{
        payload: ICountry;
    } & _ngrx_store.Action<"[COUNTRY] Country update success">> & _ngrx_effects.CreateEffectMetadata;
    countryRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[COUNTRY] Country remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    countryRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[COUNTRY] Country remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[COUNTRY] Country remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, countryService: CountryService, organizationContextFacade: OrganizationContextFacade, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryEffects>;
}

declare class CountryFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ICountry>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ICountry[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.ICountry | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceCountryCountryList) => void;
    update: (payload: IIoRestorecommerceCountryCountryList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryFacade>;
}

declare const countryReducer: (state: ICountryState | undefined, action: Action) => ICountryState;

declare class CurrencyEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly currencyService;
    private readonly errorHandlingService;
    currencyReadRequest$: rxjs.Observable<({
        payload: ICurrency[];
    } & _ngrx_store.Action<"[CURRENCY] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    currencyReadOneByIdRequest$: rxjs.Observable<({
        payload: ICurrency;
    } & _ngrx_store.Action<"[CURRENCY] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    currencyCreateRequest$: rxjs.Observable<({
        payload: ICurrency;
    } & _ngrx_store.Action<"[CURRENCY] Currency create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency create fail">)> & _ngrx_effects.CreateEffectMetadata;
    currencyCreateSuccess$: rxjs.Observable<{
        payload: ICurrency;
    } & _ngrx_store.Action<"[CURRENCY] Currency create success">> & _ngrx_effects.CreateEffectMetadata;
    currencyUpdateRequest$: rxjs.Observable<({
        payload: ICurrency;
    } & _ngrx_store.Action<"[CURRENCY] Currency update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency update fail">)> & _ngrx_effects.CreateEffectMetadata;
    currencyUpdateSuccess$: rxjs.Observable<{
        payload: ICurrency;
    } & _ngrx_store.Action<"[CURRENCY] Currency update success">> & _ngrx_effects.CreateEffectMetadata;
    currencyRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[CURRENCY] Currency remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    currencyRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[CURRENCY] Currency remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CURRENCY] Currency remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, currencyService: CurrencyService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyEffects>;
}

declare class CurrencyFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ICurrency>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ICurrency[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.ICurrency | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceCurrencyCurrencyList) => void;
    update: (payload: IIoRestorecommerceCurrencyCurrencyList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyFacade>;
}

declare const currencyReducer: (state: ICurrencyState | undefined, action: Action) => ICurrencyState;

declare class CustomerEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly customerService;
    private readonly errorHandlingService;
    customerReadRequest$: rxjs.Observable<({
        payload: ICustomer[];
    } & _ngrx_store.Action<"[CUSTOMER] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    customerReadOneByIdRequest$: rxjs.Observable<({
        payload: ICustomer;
    } & _ngrx_store.Action<"[CUSTOMER] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    customerCreateRequest$: rxjs.Observable<({
        payload: ICustomer;
    } & _ngrx_store.Action<"[CUSTOMER] Customer create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer create fail">)> & _ngrx_effects.CreateEffectMetadata;
    customerCreateSuccess$: rxjs.Observable<{
        payload: ICustomer;
    } & _ngrx_store.Action<"[CUSTOMER] Customer create success">> & _ngrx_effects.CreateEffectMetadata;
    customerUpdateRequest$: rxjs.Observable<({
        payload: ICustomer;
    } & _ngrx_store.Action<"[CUSTOMER] Customer update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer update fail">)> & _ngrx_effects.CreateEffectMetadata;
    customerUpdateSuccess$: rxjs.Observable<{
        payload: ICustomer;
    } & _ngrx_store.Action<"[CUSTOMER] Customer update success">> & _ngrx_effects.CreateEffectMetadata;
    customerRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[CUSTOMER] Customer remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    customerRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[CUSTOMER] Customer remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[CUSTOMER] Customer remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, customerService: CustomerService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerEffects>;
}

declare class CustomerFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ICustomer>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ICustomer[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.ICustomer | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceCustomerCustomerList) => void;
    update: (payload: IIoRestorecommerceCustomerCustomerList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerFacade>;
}

declare const customerReducer: (state: ICustomerState | undefined, action: Action) => ICustomerState;

declare class IamEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly userService;
    private readonly errorHandlingService;
    userReadRequest$: rxjs.Observable<({
        payload: IUser[];
    } & _ngrx_store.Action<"[IAM] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    userReadOneByIdRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    userCreateRequest$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[IAM] User create fail">) | ({
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User create success">)> & _ngrx_effects.CreateEffectMetadata;
    userCreateSuccess$: rxjs.Observable<{
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User create success">> & _ngrx_effects.CreateEffectMetadata;
    userUpdateRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User update fail">)> & _ngrx_effects.CreateEffectMetadata;
    userUpdateSuccess$: rxjs.Observable<{
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User update success">> & _ngrx_effects.CreateEffectMetadata;
    userSetTempRoleAssociations$: rxjs.Observable<{
        payload: _console_core_types.IRoleAssociation[];
    } & _ngrx_store.Action<"[IAM] Set temp role associations">> & _ngrx_effects.CreateEffectMetadata;
    userChangePasswordRequest$: rxjs.Observable<_ngrx_store.Action<"[IAM] User change password success"> | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User change password fail">)> & _ngrx_effects.CreateEffectMetadata;
    userAddRoleAssociationRequest$: rxjs.Observable<({
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User add role association success">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User add role association fail">)> & _ngrx_effects.CreateEffectMetadata;
    userAddRoleAssociationSuccess$: rxjs.Observable<{
        payload: IUser;
    } & _ngrx_store.Action<"[IAM] User add role association success">> & _ngrx_effects.CreateEffectMetadata;
    userChangePasswordSuccess$: rxjs.Observable<_ngrx_store.Action<"[IAM] User change password success">> & _ngrx_effects.CreateEffectMetadata;
    userRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[IAM] User remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    userRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[IAM] User remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[IAM] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User change password fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[IAM] User remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, userService: UserService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<IamEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IamEffects>;
}

declare class IamFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<_console_core_types.IUser>>;
    readonly all$: rxjs.Observable<_console_core_types.IUser[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<_console_core_types.IUser | null>;
    readonly temp$: rxjs.Observable<{
        roleAssociations: IRoleAssociation[];
    }>;
    readonly tempRoleAssociations$: rxjs.Observable<IRoleAssociation[]>;
    readonly actionStatus$: rxjs.Observable<_console_core_types.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceUserUserList) => void;
    update: (payload: IIoRestorecommerceUserUserList) => void;
    setTempRoleAssociations: (payload: IRoleAssociation[]) => void;
    changePassword: (payload: IIoRestorecommerceUserUserList) => void;
    addRoleAssociation: (payload: IIoRestorecommerceUserUserList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IamFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IamFacade>;
}

declare const iamReducer: (state: IIamState | undefined, action: Action) => IIamState;

declare class LocaleEffects {
    private readonly actions$;
    private readonly appFacade;
    private readonly localeService;
    localeReadRequest$: rxjs.Observable<({
        payload: ILocale[];
    } & _ngrx_store.Action<"[LOCALE] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[LOCALE] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<{
        error: string;
    } & _ngrx_store.Action<"[LOCALE] Read fail">> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions, appFacade: AppFacade, localeService: LocaleService);
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocaleEffects>;
}

declare class LocaleFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ILocale>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ILocale[]>;
    readonly total$: rxjs.Observable<number>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocaleFacade>;
}

declare const localeReducer: (state: ILocaleState | undefined, action: Action) => ILocaleState;

declare class OrganizationFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IOrganization>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IOrganization[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IOrganization | null>;
    readonly parentIds$: rxjs.Observable<string[]>;
    readonly parentEntities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IOrganization>>;
    readonly parentsAll$: rxjs.Observable<(dist_packages_core_types_src.IOrganization | undefined)[]>;
    readonly selectedParentId$: rxjs.Observable<string | null>;
    readonly selectedParent$: rxjs.Observable<dist_packages_core_types_src.IOrganization | null>;
    readonly childIds$: rxjs.Observable<string[]>;
    readonly childEntities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IOrganization>>;
    readonly childsAll$: rxjs.Observable<(dist_packages_core_types_src.IOrganization | undefined)[]>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readParents: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceOrganizationOrganizationList) => void;
    update: (payload: IIoRestorecommerceOrganizationOrganizationList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationFacade>;
}

declare class OrganizationEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly organizationService;
    private readonly organizationFacade;
    private readonly errorHandlingService;
    organizationReadRequest$: rxjs.Observable<({
        payload: IOrganization[];
    } & _ngrx_store.Action<"[ORGANIZATION] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationReadParentsRequest$: rxjs.Observable<({
        payload: IOrganization[];
    } & _ngrx_store.Action<"[ORGANIZATION] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read parents fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationReadOneByIdRequest$: rxjs.Observable<({
        payload: IOrganization;
    } & _ngrx_store.Action<"[ORGANIZATION] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationCreateRequest$: rxjs.Observable<({
        payload: IOrganization;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization create fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationCreateSuccess$: rxjs.Observable<{
        payload: IOrganization;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization create success">> & _ngrx_effects.CreateEffectMetadata;
    organizationUpdateRequest$: rxjs.Observable<({
        payload: IOrganization;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization update fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationUpdateSuccess$: rxjs.Observable<{
        payload: IOrganization;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization update success">> & _ngrx_effects.CreateEffectMetadata;
    organizationRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ORGANIZATION] Organization remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    organizationRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ORGANIZATION] Organization remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read parents fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORGANIZATION] Organization remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, organizationService: OrganizationService, organizationFacade: OrganizationFacade, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationEffects>;
}

declare const organizationReducer: (state: IOrganizationState | undefined, action: Action) => IOrganizationState;

declare class TimezoneEffects {
    private readonly actions$;
    private readonly appFacade;
    private readonly timezoneService;
    timezoneReadRequest$: rxjs.Observable<({
        payload: ITimezone[];
    } & _ngrx_store.Action<"[TIMEZONE] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TIMEZONE] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<{
        error: string;
    } & _ngrx_store.Action<"[TIMEZONE] Read fail">> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions, appFacade: AppFacade, timezoneService: TimezoneService);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezoneEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimezoneEffects>;
}

declare class TimezoneFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ITimezone>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ITimezone[]>;
    readonly total$: rxjs.Observable<number>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezoneFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimezoneFacade>;
}

declare const timezoneReducer: (state: ITimezoneState | undefined, action: Action) => ITimezoneState;

declare class TaxEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly taxService;
    private readonly errorHandlingService;
    taxReadRequest$: rxjs.Observable<({
        payload: ITax[];
    } & _ngrx_store.Action<"[TAX] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    taxReadOneByIdRequest$: rxjs.Observable<({
        payload: ITax;
    } & _ngrx_store.Action<"[TAX] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    taxCreateRequest$: rxjs.Observable<({
        payload: ITax;
    } & _ngrx_store.Action<"[TAX] tax create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax create fail">)> & _ngrx_effects.CreateEffectMetadata;
    taxCreateSuccess$: rxjs.Observable<{
        payload: ITax;
    } & _ngrx_store.Action<"[TAX] tax create success">> & _ngrx_effects.CreateEffectMetadata;
    taxUpdateRequest$: rxjs.Observable<({
        payload: ITax;
    } & _ngrx_store.Action<"[TAX] tax update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax update fail">)> & _ngrx_effects.CreateEffectMetadata;
    taxUpdateSuccess$: rxjs.Observable<{
        payload: ITax;
    } & _ngrx_store.Action<"[TAX] tax update success">> & _ngrx_effects.CreateEffectMetadata;
    taxRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[TAX] tax remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    taxRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[TAX] tax remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[TAX] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[TAX] tax remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, taxService: TaxService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<TaxEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaxEffects>;
}

declare class TaxFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.ITax>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.ITax[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.ITax | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceTaxTaxList) => void;
    update: (payload: IIoRestorecommerceTaxTaxList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<TaxFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaxFacade>;
}

declare const taxReducer: (state: ITaxState | undefined, action: Action) => ITaxState;

declare class ShopEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly shopService;
    private readonly organizationContextFacade;
    private readonly errorHandlingService;
    shopReadRequest$: rxjs.Observable<({
        payload: IShop[];
    } & _ngrx_store.Action<"[SHOP] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    shopReadOneByIdRequest$: rxjs.Observable<({
        payload: IShop;
    } & _ngrx_store.Action<"[SHOP] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    shopCreateRequest$: rxjs.Observable<({
        payload: IShop;
    } & _ngrx_store.Action<"[SHOP] Shop create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop create fail">)> & _ngrx_effects.CreateEffectMetadata;
    shopCreateSuccess$: rxjs.Observable<{
        payload: IShop;
    } & _ngrx_store.Action<"[SHOP] Shop create success">> & _ngrx_effects.CreateEffectMetadata;
    shopUpdateRequest$: rxjs.Observable<({
        payload: IShop;
    } & _ngrx_store.Action<"[SHOP] Shop update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop update fail">)> & _ngrx_effects.CreateEffectMetadata;
    shopUpdateSuccess$: rxjs.Observable<{
        payload: IShop;
    } & _ngrx_store.Action<"[SHOP] Shop update success">> & _ngrx_effects.CreateEffectMetadata;
    shopRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[SHOP] Shop remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    shopRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[SHOP] Shop remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[SHOP] Shop remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, shopService: ShopService, organizationContextFacade: OrganizationContextFacade, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ShopEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShopEffects>;
}

declare class ShopFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IShop>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IShop[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IShop | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceShopShopList) => void;
    update: (payload: IIoRestorecommerceShopShopList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ShopFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShopFacade>;
}

declare const shopReducer: (state: IShopState | undefined, action: Action) => IShopState;

declare class ManufacturerEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly manufacturerService;
    private readonly errorHandlingService;
    manufacturerReadRequest$: rxjs.Observable<({
        payload: IManufacturer[];
    } & _ngrx_store.Action<"[MANUFACTURER] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    manufacturerCreateRequest$: rxjs.Observable<({
        payload: IManufacturer;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer create fail">)> & _ngrx_effects.CreateEffectMetadata;
    manufacturerUpdateRequest$: rxjs.Observable<({
        payload: IManufacturer;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer update fail">)> & _ngrx_effects.CreateEffectMetadata;
    manufacturerCreateSuccess$: rxjs.Observable<{
        payload: IManufacturer;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer create success">> & _ngrx_effects.CreateEffectMetadata;
    manufacturerUpdateSuccess$: rxjs.Observable<{
        payload: IManufacturer;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer update success">> & _ngrx_effects.CreateEffectMetadata;
    manufacturerRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    manufacturerRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[MANUFACTURER] Manufacturer remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, manufacturerService: ManufacturerService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufacturerEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufacturerEffects>;
}

declare class ManufacturerFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IManufacturer>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IManufacturer[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IManufacturer | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceManufacturerManufacturerList) => void;
    update: (payload: IIoRestorecommerceManufacturerManufacturerList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufacturerFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufacturerFacade>;
}

declare const manufacturerReducer: (state: IManufacturerState | undefined, action: Action) => IManufacturerState;

declare const objectUploadReducer: (state: IObjectUploadState | undefined, action: Action) => IObjectUploadState;

declare class ObjectUploadFacade {
    private readonly store;
    readonly uploadedObject$: rxjs.Observable<dist_packages_core_types_src.IObjectUpload | null | undefined>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    upload: (payload: File) => void;
    uploadCompleted: () => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectUploadFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ObjectUploadFacade>;
}

declare class ObjectUploadEffects {
    private readonly actions$;
    private readonly authnFacade;
    private readonly organizationContext;
    private readonly objectUploadService;
    objectUploadRequest$: rxjs.Observable<({
        payload: IObjectUpload;
    } & _ngrx_store.Action<"[Upload] Upload success">) | ({
        error: string;
    } & _ngrx_store.Action<"[Upload] Upload fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(actions$: Actions, authnFacade: AuthnFacade, organizationContext: OrganizationContextFacade, objectUploadService: ObjectUploadService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectUploadEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ObjectUploadEffects>;
}

declare class OrderFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<IOrder>>;
    readonly all$: rxjs.Observable<IOrder[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<IOrder | null>;
    readonly actionStatus$: rxjs.Observable<_console_core_types.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceOrderOrderList) => void;
    update: (payload: IIoRestorecommerceOrderOrderList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    createOrderInvoice: (payload: string) => void;
    createFulfilment: (payload: string) => void;
    changeStatus: (order: IOrder) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderFacade>;
}

declare class OrderEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly organizationContextFacade;
    private readonly orderService;
    private readonly orderFacade;
    private readonly errorHandlingService;
    orderReadRequest$: rxjs.Observable<({
        payload: IOrder[];
    } & _ngrx_store.Action<"[ORDER] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderReadOneByIdRequest$: rxjs.Observable<({
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderCreateRequest$: rxjs.Observable<({
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Order create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order create fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderCreateSuccess$: rxjs.Observable<{
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Order create success">> & _ngrx_effects.CreateEffectMetadata;
    orderUpdateRequest$: rxjs.Observable<({
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Order update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order update fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderUpdateSuccess$: rxjs.Observable<{
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Order update success">> & _ngrx_effects.CreateEffectMetadata;
    orderStatusChangeRequest$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order update fail">) | ({
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Change status success">)> & _ngrx_effects.CreateEffectMetadata;
    orderStatusChangeSuccess$: rxjs.Observable<{
        payload: IOrder;
    } & _ngrx_store.Action<"[ORDER] Change status success">> & _ngrx_effects.CreateEffectMetadata;
    orderRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ORDER] Order remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    orderRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[ORDER] Order remove success">> & _ngrx_effects.CreateEffectMetadata;
    orderCreateInvoiceRequest$: rxjs.Observable<({
        payload: string;
    } & _ngrx_store.Action<"[ORDER] Create an invoice success">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Create an invoice fail">)> & _ngrx_effects.CreateEffectMetadata;
    createFulfilmentForSelectedOrder$: rxjs.Observable<{
        type: string;
        payload: {
            __typename?: "IoRestorecommerceFulfillmentFulfillmentResponse";
            payload?: {
                __typename?: "IoRestorecommerceFulfillmentFulfillment";
                id?: string | null;
                fulfillmentState?: _console_core_graphql.IoRestorecommerceFulfillmentFulfillmentState | null;
                labels?: Array<{
                    __typename?: "IoRestorecommerceFulfillmentLabel";
                    parcelId?: string | null;
                    shipmentNumber?: string | null;
                    file?: {
                        __typename?: "IoRestorecommerceFileFile";
                        url?: string | null;
                    } | null;
                    status?: {
                        __typename?: "IoRestorecommerceStatusStatus";
                        code?: number | null;
                        message?: string | null;
                    } | null;
                }> | null;
            } | null;
            status?: {
                __typename?: "IoRestorecommerceStatusStatus";
                code?: number | null;
                message?: string | null;
            } | null;
        }[] | null | undefined;
    }> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Order remove fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Create an invoice fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[ORDER] Change status fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, organizationContextFacade: OrganizationContextFacade, orderService: OrderService, orderFacade: OrderFacade, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderEffects>;
}

declare const orderReducer: (state: IOrderState | undefined, action: Action) => IOrderState;

declare class ProductEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly organizationContextFacade;
    private readonly productService;
    private readonly errorHandlingService;
    productReadRequest$: rxjs.Observable<({
        payload: {
            items: IProduct[];
            isLoadMore: boolean;
        };
    } & _ngrx_store.Action<"[PRODUCT] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    productReadOneByIdRequest$: rxjs.Observable<({
        payload: IProduct;
    } & _ngrx_store.Action<"[PRODUCT] Read one by id success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Read one by id fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCreateRequest$: rxjs.Observable<({
        payload: IProduct;
    } & _ngrx_store.Action<"[PRODUCT] Product create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product create fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCreateSuccess$: rxjs.Observable<{
        payload: IProduct;
    } & _ngrx_store.Action<"[PRODUCT] Product create success">> & _ngrx_effects.CreateEffectMetadata;
    productUpdateRequest$: rxjs.Observable<({
        payload: IProduct;
    } & _ngrx_store.Action<"[PRODUCT] Product update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product update fail">)> & _ngrx_effects.CreateEffectMetadata;
    productUpdateSuccess$: rxjs.Observable<{
        payload: IProduct;
    } & _ngrx_store.Action<"[PRODUCT] Product update success">> & _ngrx_effects.CreateEffectMetadata;
    productRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT] Product remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    productRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT] Product remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Read one by id fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT] Product remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, organizationContextFacade: OrganizationContextFacade, productService: ProductService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductEffects>;
}

declare class ProductFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IProduct>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IProduct[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IProduct | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceProductProductList) => void;
    update: (payload: IIoRestorecommerceProductProductList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductFacade>;
}

declare const productReducer: (state: IProductState | undefined, action: Action) => IProductState;

declare class ProductCategoryEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly productCategoryService;
    private readonly errorHandlingService;
    productCategoryReadRequest$: rxjs.Observable<({
        payload: IProductCategory[];
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCategoryCreateRequest$: rxjs.Observable<({
        payload: IProductCategory;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory create fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCategoryUpdateRequest$: rxjs.Observable<({
        payload: IProductCategory;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory update fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCategoryCreateSuccess$: rxjs.Observable<{
        payload: IProductCategory;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory create success">> & _ngrx_effects.CreateEffectMetadata;
    productCategoryUpdateSuccess$: rxjs.Observable<{
        payload: IProductCategory;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory update success">> & _ngrx_effects.CreateEffectMetadata;
    productCategoryRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    productCategoryRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT CATEGORY] ProductCategory remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, productCategoryService: ProductCategoryService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryEffects>;
}

declare class ProductCategoryFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IProductCategory>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IProductCategory[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IProductCategory | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceProductCategoryProductCategoryList) => void;
    update: (payload: IIoRestorecommerceProductCategoryProductCategoryList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryFacade>;
}

declare const productCategoryReducer: (state: IProductCategoryState | undefined, action: Action) => IProductCategoryState;

declare class ProductPrototypeEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly productPrototypeService;
    private readonly errorHandlingService;
    productPrototypeReadRequest$: rxjs.Observable<({
        payload: _console_core_types.IProductPrototype[];
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeCreateRequest$: rxjs.Observable<({
        payload: _console_core_types.IProductPrototype;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype create fail">)> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeUpdateRequest$: rxjs.Observable<({
        payload: _console_core_types.IProductPrototype;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype update fail">)> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeCreateSuccess$: rxjs.Observable<{
        payload: _console_core_types.IProductPrototype;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype create success">> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeUpdateSuccess$: rxjs.Observable<{
        payload: _console_core_types.IProductPrototype;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype update success">> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    productPrototypeRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRODUCT PROTOTYPE] ProductPrototype remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, productPrototypeService: ProductPrototypeService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeEffects>;
}

declare class ProductPrototypeFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IProductPrototype>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IProductPrototype[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IProductPrototype | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommerceProductPrototypeProductPrototypeList) => void;
    update: (payload: IIoRestorecommerceProductPrototypeProductPrototypeList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeFacade>;
}

declare const productPrototypeReducer: (state: IProductPrototypeState | undefined, action: Action) => IProductPrototypeState;

declare class PriceGroupEffects {
    private readonly router;
    private readonly actions$;
    private readonly appFacade;
    private readonly priceGroupService;
    private readonly errorHandlingService;
    priceGroupReadRequest$: rxjs.Observable<({
        payload: IPriceGroup[];
    } & _ngrx_store.Action<"[PRICE GROUP] Read success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Read fail">)> & _ngrx_effects.CreateEffectMetadata;
    priceGroupCreateRequest$: rxjs.Observable<({
        payload: IPriceGroup;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group create success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group create fail">)> & _ngrx_effects.CreateEffectMetadata;
    priceGroupUpdateRequest$: rxjs.Observable<({
        payload: IPriceGroup;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group update success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group update fail">)> & _ngrx_effects.CreateEffectMetadata;
    priceGroupCreateSuccess$: rxjs.Observable<{
        payload: IPriceGroup;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group create success">> & _ngrx_effects.CreateEffectMetadata;
    priceGroupUpdateSuccess$: rxjs.Observable<{
        payload: IPriceGroup;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group update success">> & _ngrx_effects.CreateEffectMetadata;
    priceGroupRemoveRequest$: rxjs.Observable<({
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRICE GROUP] Price group remove success">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    priceGroupRemoveSuccess$: rxjs.Observable<{
        payload: {
            id: string;
        };
    } & _ngrx_store.Action<"[PRICE GROUP] Price group remove success">> & _ngrx_effects.CreateEffectMetadata;
    handleNotificationErrors$: rxjs.Observable<({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Read fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group create fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group update fail">) | ({
        error: string;
    } & _ngrx_store.Action<"[PRICE GROUP] Price group remove fail">)> & _ngrx_effects.CreateEffectMetadata;
    constructor(router: Router, actions$: Actions, appFacade: AppFacade, priceGroupService: PriceGroupService, errorHandlingService: ErrorHandlingService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupEffects>;
}

declare class PriceGroupFacade {
    private readonly store;
    readonly ids$: rxjs.Observable<string[] | number[]>;
    readonly entities$: rxjs.Observable<_ngrx_entity.Dictionary<dist_packages_core_types_src.IPriceGroup>>;
    readonly all$: rxjs.Observable<dist_packages_core_types_src.IPriceGroup[]>;
    readonly total$: rxjs.Observable<number>;
    readonly selectedId$: rxjs.Observable<string | null>;
    readonly selected$: rxjs.Observable<dist_packages_core_types_src.IPriceGroup | null>;
    readonly actionStatus$: rxjs.Observable<dist_packages_core_types_src.EActionStatus>;
    readonly error$: rxjs.Observable<string | null>;
    read: (payload: IIoRestorecommerceResourcebaseReadRequest) => void;
    readOneById: (payload: {
        id: string;
    }) => void;
    setSelectedId: (payload: string | null) => void;
    create: (payload: IIoRestorecommercePriceGroupPriceGroupList) => void;
    update: (payload: IIoRestorecommercePriceGroupPriceGroupList) => void;
    remove: (payload: {
        id: string;
    }) => void;
    constructor(store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupFacade>;
}

declare const priceGroupReducer: (state: IPriceGroupState | undefined, action: Action) => IPriceGroupState;

declare class RouterFacade {
    private readonly router;
    private readonly store;
    data$: rxjs.Observable<_angular_router.Data>;
    params$: rxjs.Observable<_angular_router.Params>;
    queryParams$: rxjs.Observable<_angular_router.Params>;
    url$: rxjs.Observable<string>;
    eventsNavigationEnd$: rxjs.Observable<string | boolean>;
    navigate: (url: (string | number)[]) => Promise<boolean>;
    navigateByUrl: (url: string) => Promise<boolean>;
    constructor(router: Router, store: Store);
    static ɵfac: i0.ɵɵFactoryDeclaration<RouterFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RouterFacade>;
}

declare class RouterSerializer implements RouterStateSerializer<IRouterState> {
    serialize(routerState: RouterStateSnapshot): IRouterState;
}

declare const capitalizeFirstLetter: (string: string) => string;

declare const filterEmpty: <T>() => UnaryFunction<Observable<T | "">, Observable<T>>;
declare const filterNullish: <T>() => UnaryFunction<Observable<T | null>, Observable<T>>;
declare const filterUndefined: <T>() => UnaryFunction<Observable<T | undefined>, Observable<T>>;
declare const filterNullishAndUndefined: <T>() => UnaryFunction<Observable<T | null | undefined>, Observable<T>>;
declare const filterEmptyAndNullishAndUndefined: <T>() => UnaryFunction<Observable<T | null | undefined | "">, Observable<T>>;

type OrganizationDataTuple = [
    globalOrganizationLeafId: string,
    globalOrganizationId: string
];
declare function withLatestOrganizationData<T extends Action>(organizationContextFacade: OrganizationContextFacade, ...additionalActionTypes: string[]): OperatorFunction<T, [T, string]>;

declare const handleLocalStorageSync: (store: Pick<IStoreConstant, "states">, prefix?: string) => (reducer: any) => (state: any, action: any) => any;
declare const handleStoreLogger: (reducer: ActionReducer<IStore>) => ActionReducer<IStore>;

export { AccountEffects, AccountFacade, ApiService, AppEffects, AppFacade, AuthnEffects, AuthnFacade, AuthnService, AuthzService, CoreStateModule, CountryEffects, CountryFacade, CountryService, CurrencyEffects, CurrencyFacade, CurrencyService, CustomerEffects, CustomerFacade, CustomerService, ErrorHandlingService, FulfillmentEffects, FulfillmentFacade, FulfillmentService, IamEffects, IamFacade, InvoiceEffects, InvoiceFacade, InvoiceService, LocaleEffects, LocaleFacade, LocaleService, ManufacturerEffects, ManufacturerFacade, ManufacturerService, ObjectUploadEffects, ObjectUploadFacade, ObjectUploadService, OrderEffects, OrderFacade, OrderService, OrganizationContextEffects, OrganizationContextFacade, OrganizationEffects, OrganizationFacade, OrganizationService, PolicyEffects, PolicyFacade, PolicyService, PriceGroupEffects, PriceGroupFacade, PriceGroupService, ProductCategoryEffects, ProductCategoryFacade, ProductCategoryService, ProductEffects, ProductFacade, ProductPrototypeEffects, ProductPrototypeFacade, ProductPrototypeService, ProductService, RoleEffects, RoleFacade, RoleService, RouterFacade, RouterSerializer, ShopEffects, ShopFacade, ShopService, TaxEffects, TaxFacade, TaxService, TimezoneEffects, TimezoneFacade, TimezoneService, UserService, accountReducer, appReducer, authnReducer, capitalizeFirstLetter, countryReducer, currencyReducer, customerReducer, filterEmpty, filterEmptyAndNullishAndUndefined, filterNullish, filterNullishAndUndefined, filterUndefined, fulfillmentReducer, handleLocalStorageSync, handleStoreLogger, iamReducer, invoiceReducer, localeReducer, manufacturerReducer, objectUploadReducer, orderReducer, organizationContextReducer, organizationReducer, policyReducer, priceGroupReducer, productCategoryReducer, productPrototypeReducer, productReducer, roleReducer, shopReducer, taxReducer, timezoneReducer, withLatestOrganizationData };
export type { OrganizationDataTuple };
