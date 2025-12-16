import * as i0 from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import * as Apollo from 'apollo-angular';

interface IGraphqlConfig {
    readonly api: string;
}

declare class CoreGraphQLModule {
    static forRoot(config: IGraphqlConfig): ModuleWithProviders<CoreGraphQLModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreGraphQLModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreGraphQLModule, never, never, [typeof Apollo.ApolloModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreGraphQLModule>;
}

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
     *                 compliant with the date-time format outlined in section 5.6 of
     *                 the RFC 3339 profile of the ISO 8601 standard for representation
     *                 of dates and times using the Gregorian calendar.
     */
    DateTime: unknown;
    GoogleProtobufAnyValue: unknown;
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
     *                 compliant with the date-time format outlined in section 5.6 of
     *                 the RFC 3339 profile of the ISO 8601 standard for representation
     *                 of dates and times using the Gregorian calendar.
     */
    IDateTime: unknown;
    MapScalar: unknown;
    TodoScalar: unknown;
    /** The `Upload` scalar type represents a file upload. */
    Upload: unknown;
};
type AccessControlAccessControlQuery = {
    __typename?: 'AccessControlAccessControlQuery';
    IsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlResponse>;
    WhatIsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlReverseQuery>;
};
type AccessControlAccessControlQueryIsAllowedArgs = {
    input: IIoRestorecommerceAccessControlRequest;
};
type AccessControlAccessControlQueryWhatIsAllowedArgs = {
    input: IIoRestorecommerceAccessControlRequest;
};
type AccessControlMutation = {
    __typename?: 'AccessControlMutation';
    policy: AccessControlPolicyMutation;
    policy_set: AccessControlPolicySetMutation;
    rule: AccessControlRuleMutation;
};
type AccessControlPolicyMutation = {
    __typename?: 'AccessControlPolicyMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};
type AccessControlPolicyMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type AccessControlPolicyMutationMutateArgs = {
    input: IIoRestorecommercePolicyPolicyList;
};
type AccessControlPolicyQuery = {
    __typename?: 'AccessControlPolicyQuery';
    Read?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};
type AccessControlPolicyQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type AccessControlPolicySetMutation = {
    __typename?: 'AccessControlPolicySetMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
};
type AccessControlPolicySetMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type AccessControlPolicySetMutationMutateArgs = {
    input: IIoRestorecommercePolicySetPolicySetList;
};
type AccessControlPolicySetQuery = {
    __typename?: 'AccessControlPolicySetQuery';
    Read?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
};
type AccessControlPolicySetQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type AccessControlQuery = {
    __typename?: 'AccessControlQuery';
    access_control: AccessControlAccessControlQuery;
    policy: AccessControlPolicyQuery;
    policy_set: AccessControlPolicySetQuery;
    rule: AccessControlRuleQuery;
};
type AccessControlRuleMutation = {
    __typename?: 'AccessControlRuleMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
};
type AccessControlRuleMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type AccessControlRuleMutationMutateArgs = {
    input: IIoRestorecommerceRuleRuleList;
};
type AccessControlRuleQuery = {
    __typename?: 'AccessControlRuleQuery';
    Read?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
};
type AccessControlRuleQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogManufacturerMutation = {
    __typename?: 'CatalogManufacturerMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};
type CatalogManufacturerMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type CatalogManufacturerMutationMutateArgs = {
    input: IIoRestorecommerceManufacturerManufacturerList;
};
type CatalogManufacturerQuery = {
    __typename?: 'CatalogManufacturerQuery';
    Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};
type CatalogManufacturerQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogMutation = {
    __typename?: 'CatalogMutation';
    manufacturer: CatalogManufacturerMutation;
    price_group: CatalogPriceGroupMutation;
    product: CatalogProductMutation;
    product_category: CatalogProductCategoryMutation;
    product_prototype: CatalogProductPrototypeMutation;
};
type CatalogPriceGroupMutation = {
    __typename?: 'CatalogPriceGroupMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};
type CatalogPriceGroupMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type CatalogPriceGroupMutationMutateArgs = {
    input: IIoRestorecommercePriceGroupPriceGroupList;
};
type CatalogPriceGroupQuery = {
    __typename?: 'CatalogPriceGroupQuery';
    Read?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};
type CatalogPriceGroupQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogProductCategoryMutation = {
    __typename?: 'CatalogProductCategoryMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};
type CatalogProductCategoryMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type CatalogProductCategoryMutationMutateArgs = {
    input: IIoRestorecommerceProductCategoryProductCategoryList;
};
type CatalogProductCategoryQuery = {
    __typename?: 'CatalogProductCategoryQuery';
    Read?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};
type CatalogProductCategoryQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogProductMutation = {
    __typename?: 'CatalogProductMutation';
    ClaimVariant?: Maybe<ProtoIoRestorecommerceProductIndividualProductVariantListResponse>;
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    DropSession?: Maybe<ProtoIoRestorecommerceProductIndividualProductVariantListResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
    ReleaseVariant?: Maybe<ProtoIoRestorecommerceProductIndividualProductVariantListResponse>;
    ResolveSession?: Maybe<ProtoIoRestorecommerceProductIndividualProductVariantListResponse>;
};
type CatalogProductMutationClaimVariantArgs = {
    input: IIoRestorecommerceProductIndividualProductVariantListRequest;
};
type CatalogProductMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type CatalogProductMutationDropSessionArgs = {
    input: IIoRestorecommerceProductSession;
};
type CatalogProductMutationMutateArgs = {
    input: IIoRestorecommerceProductProductList;
};
type CatalogProductMutationReleaseVariantArgs = {
    input: IIoRestorecommerceProductIndividualProductVariantListRequest;
};
type CatalogProductMutationResolveSessionArgs = {
    input: IIoRestorecommerceProductSession;
};
type CatalogProductPrototypeMutation = {
    __typename?: 'CatalogProductPrototypeMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};
type CatalogProductPrototypeMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type CatalogProductPrototypeMutationMutateArgs = {
    input: IIoRestorecommerceProductPrototypeProductPrototypeList;
};
type CatalogProductPrototypeQuery = {
    __typename?: 'CatalogProductPrototypeQuery';
    Read?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};
type CatalogProductPrototypeQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogProductQuery = {
    __typename?: 'CatalogProductQuery';
    GetVariant?: Maybe<ProtoIoRestorecommerceProductIndividualProductVariantListResponse>;
    Read?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
};
type CatalogProductQueryGetVariantArgs = {
    input: IIoRestorecommerceProductIndividualProductVariantListRequest;
};
type CatalogProductQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type CatalogQuery = {
    __typename?: 'CatalogQuery';
    manufacturer: CatalogManufacturerQuery;
    price_group: CatalogPriceGroupQuery;
    product: CatalogProductQuery;
    product_category: CatalogProductCategoryQuery;
    product_prototype: CatalogProductPrototypeQuery;
};
/** The facade status */
type FacadeStatusType = {
    __typename?: 'FacadeStatusType';
    running: Scalars['Boolean'];
};
type FulfillmentFulfillmentCourierMutation = {
    __typename?: 'FulfillmentFulfillmentCourierMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};
type FulfillmentFulfillmentCourierMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type FulfillmentFulfillmentCourierMutationMutateArgs = {
    input: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
};
type FulfillmentFulfillmentCourierQuery = {
    __typename?: 'FulfillmentFulfillmentCourierQuery';
    Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};
type FulfillmentFulfillmentCourierQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type FulfillmentFulfillmentMutation = {
    __typename?: 'FulfillmentFulfillmentMutation';
    Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Evaluate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    Render?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    Submit?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    Track?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
    Withdraw?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
};
type FulfillmentFulfillmentMutationCancelArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};
type FulfillmentFulfillmentMutationCreateInvoiceArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
};
type FulfillmentFulfillmentMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type FulfillmentFulfillmentMutationEvaluateArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentList;
};
type FulfillmentFulfillmentMutationMutateArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentList;
};
type FulfillmentFulfillmentMutationRenderArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentList;
};
type FulfillmentFulfillmentMutationSubmitArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentList;
};
type FulfillmentFulfillmentMutationTrackArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};
type FulfillmentFulfillmentMutationTriggerInvoiceArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
};
type FulfillmentFulfillmentMutationWithdrawArgs = {
    input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};
type FulfillmentFulfillmentProductMutation = {
    __typename?: 'FulfillmentFulfillmentProductMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};
type FulfillmentFulfillmentProductMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type FulfillmentFulfillmentProductMutationMutateArgs = {
    input: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
};
type FulfillmentFulfillmentProductQuery = {
    __typename?: 'FulfillmentFulfillmentProductQuery';
    Find?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse>;
    Read?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};
type FulfillmentFulfillmentProductQueryFindArgs = {
    input: IIoRestorecommerceFulfillmentProductFulfillmentSolutionQueryList;
};
type FulfillmentFulfillmentProductQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type FulfillmentFulfillmentQuery = {
    __typename?: 'FulfillmentFulfillmentQuery';
    Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
};
type FulfillmentFulfillmentQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type FulfillmentMutation = {
    __typename?: 'FulfillmentMutation';
    fulfillment: FulfillmentFulfillmentMutation;
    fulfillment_courier: FulfillmentFulfillmentCourierMutation;
    fulfillment_product: FulfillmentFulfillmentProductMutation;
};
type FulfillmentQuery = {
    __typename?: 'FulfillmentQuery';
    fulfillment: FulfillmentFulfillmentQuery;
    fulfillment_courier: FulfillmentFulfillmentCourierQuery;
    fulfillment_product: FulfillmentFulfillmentProductQuery;
};
type GoogleProtobufAny = {
    __typename?: 'GoogleProtobufAny';
    typeUrl?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};
type IGoogleProtobufAny = {
    typeUrl?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};
type IIoRestorecommerceAccessControlContext = {
    resources?: InputMaybe<Array<IGoogleProtobufAny>>;
    security?: InputMaybe<IGoogleProtobufAny>;
    subject?: InputMaybe<IGoogleProtobufAny>;
};
type IIoRestorecommerceAccessControlRequest = {
    context?: InputMaybe<IIoRestorecommerceAccessControlContext>;
    target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};
type IIoRestorecommerceAddressAddress = {
    addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
    altitude?: InputMaybe<Scalars['Float']>;
    buildingNumber?: InputMaybe<Scalars['String']>;
    businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
    countryId?: InputMaybe<Scalars['String']>;
    geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
    id?: InputMaybe<Scalars['String']>;
    locality?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
    postcode?: InputMaybe<Scalars['String']>;
    region?: InputMaybe<Scalars['String']>;
    residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
    street?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressAddressAddition = {
    field1?: InputMaybe<Scalars['String']>;
    field2?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressAddressList = {
    items?: InputMaybe<Array<IIoRestorecommerceAddressAddress>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceAddressBillingAddress = {
    address?: InputMaybe<IIoRestorecommerceAddressAddress>;
    comments?: InputMaybe<Scalars['String']>;
    contact?: InputMaybe<IIoRestorecommerceAddressContact>;
};
type IIoRestorecommerceAddressBusinessAddress = {
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressContact = {
    email?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressGeoPoint = {
    latitude?: InputMaybe<Scalars['Float']>;
    longitude?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceAddressPackStation = {
    postNumber?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    stationNumber?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressResidentialAddress = {
    familyName?: InputMaybe<Scalars['String']>;
    givenName?: InputMaybe<Scalars['String']>;
    midName?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAddressShippingAddress = {
    address?: InputMaybe<IIoRestorecommerceAddressAddress>;
    comments?: InputMaybe<Scalars['String']>;
    contact?: InputMaybe<IIoRestorecommerceAddressContact>;
};
type IIoRestorecommerceAmountAmount = {
    currencyId?: InputMaybe<Scalars['String']>;
    gross?: InputMaybe<Scalars['Float']>;
    net?: InputMaybe<Scalars['Float']>;
    vats?: InputMaybe<Array<IIoRestorecommerceAmountVat>>;
};
type IIoRestorecommerceAmountVat = {
    taxId?: InputMaybe<Scalars['String']>;
    vat?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceAttributeAttribute = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    id?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAuthRoleAssociation = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    created?: InputMaybe<Scalars['IDateTime']>;
    id?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAuthTokens = {
    clientId?: InputMaybe<Scalars['String']>;
    expiresIn?: InputMaybe<Scalars['IDateTime']>;
    interactive?: InputMaybe<Scalars['Boolean']>;
    lastLogin?: InputMaybe<Scalars['IDateTime']>;
    name?: InputMaybe<Scalars['String']>;
    scopes?: InputMaybe<Array<Scalars['String']>>;
    token?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
    activity?: InputMaybe<Scalars['String']>;
    date?: InputMaybe<Scalars['IDateTime']>;
    id?: InputMaybe<Scalars['String']>;
    ipv4Address?: InputMaybe<Scalars['String']>;
    ipv6Address?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    operatingSystem?: InputMaybe<Scalars['String']>;
    subjectId?: InputMaybe<Scalars['String']>;
    tokenName?: InputMaybe<Scalars['String']>;
    userAgent?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
    items?: InputMaybe<Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCommandCommand = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    parameters?: InputMaybe<Array<IIoRestorecommerceCommandCommandParameter>>;
};
type IIoRestorecommerceCommandCommandList = {
    items?: InputMaybe<Array<IIoRestorecommerceCommandCommand>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCommandCommandParameter = {
    description?: InputMaybe<Scalars['String']>;
    field?: InputMaybe<Scalars['String']>;
    properties?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<IoRestorecommerceCommandCommandParameterParameterType>;
};
type IIoRestorecommerceContactPointContactPoint = {
    contactPointTypeIds?: InputMaybe<Array<Scalars['String']>>;
    description?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    localeId?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    physicalAddressId?: InputMaybe<Scalars['String']>;
    telephone?: InputMaybe<Scalars['String']>;
    timezoneId?: InputMaybe<Scalars['String']>;
    website?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceContactPointContactPointList = {
    items?: InputMaybe<Array<IIoRestorecommerceContactPointContactPoint>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceContactPointTypeContactPointType = {
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceContactPointTypeContactPointTypeList = {
    items?: InputMaybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCountryCountry = {
    countryCode?: InputMaybe<Scalars['String']>;
    countryCodeAlpha2?: InputMaybe<Scalars['String']>;
    countryCodeAlpha3?: InputMaybe<Scalars['String']>;
    economicAreas?: InputMaybe<Array<Scalars['String']>>;
    geographicalName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    localeIds?: InputMaybe<Array<Scalars['String']>>;
    localizedNames?: InputMaybe<Array<IIoRestorecommerceCountryCountryLocaleName>>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    timezoneIds?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceCountryCountryList = {
    items?: InputMaybe<Array<IIoRestorecommerceCountryCountry>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCountryCountryLocaleName = {
    locale?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCredentialCredential = {
    credentials?: InputMaybe<IGoogleProtobufAny>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    pass?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCredentialCredentialList = {
    items?: InputMaybe<Array<IIoRestorecommerceCredentialCredential>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCurrencyCurrency = {
    code?: InputMaybe<Scalars['String']>;
    countryIds?: InputMaybe<Array<Scalars['String']>>;
    customExchangeRates?: InputMaybe<Array<IIoRestorecommerceCurrencyExchangeRate>>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    precision?: InputMaybe<Scalars['Int']>;
    symbol?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCurrencyCurrencyList = {
    items?: InputMaybe<Array<IIoRestorecommerceCurrencyCurrency>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCurrencyExchangeRate = {
    amount?: InputMaybe<Scalars['Float']>;
    expenses?: InputMaybe<Scalars['Float']>;
    rate?: InputMaybe<Scalars['Float']>;
    toCurrencyId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCustomerCommercial = {
    organizationId?: InputMaybe<Scalars['String']>;
    templateIds?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceCustomerCustomer = {
    commercial?: InputMaybe<IIoRestorecommerceCustomerCommercial>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    private?: InputMaybe<IIoRestorecommerceCustomerPrivate>;
    publicSector?: InputMaybe<IIoRestorecommerceCustomerPublicSector>;
    settingId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCustomerCustomerList = {
    items?: InputMaybe<Array<IIoRestorecommerceCustomerCustomer>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceCustomerPrivate = {
    contactPointIds?: InputMaybe<Array<Scalars['String']>>;
    userId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceCustomerPublicSector = {
    organizationId?: InputMaybe<Scalars['String']>;
    templateIds?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceFileFile = {
    base64?: InputMaybe<Scalars['String']>;
    blob?: InputMaybe<Scalars['Upload']>;
    bytes?: InputMaybe<Scalars['Int']>;
    caption?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    filename?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    ordinal?: InputMaybe<Scalars['Int']>;
    tags?: InputMaybe<Array<Scalars['String']>>;
    thumbnail?: InputMaybe<IIoRestorecommerceImageImage>;
    url?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFilterFilter = {
    field?: InputMaybe<Scalars['String']>;
    filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
    operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
    type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFilterFilterOp = {
    filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
    operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};
type IIoRestorecommerceFulfillmentCharge = {
    charge?: InputMaybe<IIoRestorecommerceAmountAmount>;
    description?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentCourierFulfillmentCourier = {
    api?: InputMaybe<Scalars['String']>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    configuration?: InputMaybe<IGoogleProtobufAny>;
    credentialId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    logo?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    shopIds?: InputMaybe<Array<Scalars['String']>>;
    website?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentCourierFulfillmentCourierList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentCourierFulfillmentCourier>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentCustomsDeclaration = {
    MRN?: InputMaybe<Scalars['String']>;
    attestation?: InputMaybe<Scalars['String']>;
    charges?: InputMaybe<Array<IIoRestorecommerceFulfillmentCharge>>;
    consigneeRef?: InputMaybe<Scalars['String']>;
    exportDescription?: InputMaybe<Scalars['String']>;
    exportType?: InputMaybe<Scalars['String']>;
    invoiceNumber?: InputMaybe<Scalars['String']>;
    notify?: InputMaybe<Scalars['Boolean']>;
    permitNumber?: InputMaybe<Scalars['String']>;
    shipperRef?: InputMaybe<Scalars['String']>;
    shippingCondition?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentEvent = {
    details?: InputMaybe<IGoogleProtobufAny>;
    location?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<IIoRestorecommerceStatusStatus>;
    timestamp?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceFulfillmentFulfillment = {
    customerId?: InputMaybe<Scalars['String']>;
    documents?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    fulfillmentState?: InputMaybe<IoRestorecommerceFulfillmentFulfillmentState>;
    id?: InputMaybe<Scalars['String']>;
    labels?: InputMaybe<Array<IIoRestorecommerceFulfillmentLabel>>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    packaging?: InputMaybe<IIoRestorecommerceFulfillmentPackaging>;
    references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
    shopId?: InputMaybe<Scalars['String']>;
    totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
    trackings?: InputMaybe<Array<IIoRestorecommerceFulfillmentTracking>>;
    userId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentFulfillmentId = {
    id?: InputMaybe<Scalars['String']>;
    options?: InputMaybe<IGoogleProtobufAny>;
    shipmentNumbers?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceFulfillmentFulfillmentIdList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentId>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest = {
    invoiceNumber?: InputMaybe<Scalars['String']>;
    paymentHints?: InputMaybe<Array<Scalars['String']>>;
    sections?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceSection>>;
};
type IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentFulfillmentInvoiceSection = {
    fulfillmentId?: InputMaybe<Scalars['String']>;
    selectedParcels?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceFulfillmentFulfillmentList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillment>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentItem = {
    description?: InputMaybe<Scalars['String']>;
    hsCode?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    originCountryId?: InputMaybe<Scalars['String']>;
    package?: InputMaybe<IIoRestorecommerceProductPackage>;
    productId?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['Int']>;
    taricCode?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<IIoRestorecommerceAmountAmount>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentLabel = {
    file?: InputMaybe<IIoRestorecommerceFileFile>;
    id?: InputMaybe<Scalars['String']>;
    parcelId?: InputMaybe<Scalars['String']>;
    shipmentNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<IoRestorecommerceFulfillmentFulfillmentState>;
    status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};
type IIoRestorecommerceFulfillmentPackaging = {
    customsDeclaration?: InputMaybe<IIoRestorecommerceFulfillmentCustomsDeclaration>;
    notify?: InputMaybe<Scalars['String']>;
    parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
    recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
};
type IIoRestorecommerceFulfillmentParcel = {
    amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
    id?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
    package?: InputMaybe<IIoRestorecommerceProductPackage>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
    productId?: InputMaybe<Scalars['String']>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentProductFulfillmentProduct = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    courierId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    destinationZones?: InputMaybe<Array<Scalars['String']>>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    startZones?: InputMaybe<Array<Scalars['String']>>;
    taxIds?: InputMaybe<Array<Scalars['String']>>;
    variants?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductVariant>>;
};
type IIoRestorecommerceFulfillmentProductFulfillmentProductList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductFulfillmentProduct>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentProductFulfillmentSolutionQuery = {
    customerId?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
    preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
    recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    reference?: InputMaybe<IIoRestorecommerceReferenceReference>;
    sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    shopId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceFulfillmentProductFulfillmentSolutionQueryList = {
    items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductFulfillmentSolutionQuery>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceFulfillmentProductPreferences = {
    courierIds?: InputMaybe<Array<Scalars['String']>>;
    fulfillmentProductIds?: InputMaybe<Array<Scalars['String']>>;
    options?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    partialFulfillmentAllowed?: InputMaybe<Scalars['Boolean']>;
};
type IIoRestorecommerceFulfillmentProductVariant = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    maxSize?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
    maxWeight?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
};
type IIoRestorecommerceFulfillmentTracking = {
    details?: InputMaybe<IGoogleProtobufAny>;
    events?: InputMaybe<Array<IIoRestorecommerceFulfillmentEvent>>;
    shipmentNumber?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};
type IIoRestorecommerceGeometryBoundingBox3D = {
    height?: InputMaybe<Scalars['Float']>;
    length?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceImageImage = {
    base64?: InputMaybe<Scalars['String']>;
    blob?: InputMaybe<Scalars['Upload']>;
    caption?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    filename?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    id?: InputMaybe<Scalars['String']>;
    index?: InputMaybe<Scalars['Int']>;
    length?: InputMaybe<Scalars['Float']>;
    tags?: InputMaybe<Array<Scalars['String']>>;
    url?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceInvoiceFulfillmentItem = {
    productId?: InputMaybe<Scalars['String']>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceInvoiceInvoice = {
    billingAddress?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
    customerId?: InputMaybe<Scalars['String']>;
    customerOrderNumber?: InputMaybe<Scalars['String']>;
    customerVatId?: InputMaybe<Scalars['String']>;
    documents?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    fromDate?: InputMaybe<Scalars['IDateTime']>;
    id?: InputMaybe<Scalars['String']>;
    invoiceNumber?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    paymentHints?: InputMaybe<Array<Scalars['String']>>;
    paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
    recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
    sections?: InputMaybe<Array<IIoRestorecommerceInvoiceSection>>;
    sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    sent?: InputMaybe<Scalars['Boolean']>;
    shopId?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['IDateTime']>;
    toDate?: InputMaybe<Scalars['IDateTime']>;
    totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
    userId?: InputMaybe<Scalars['String']>;
    withdrawn?: InputMaybe<Scalars['Boolean']>;
};
type IIoRestorecommerceInvoiceInvoiceId = {
    documentIds?: InputMaybe<Array<Scalars['String']>>;
    id?: InputMaybe<Scalars['String']>;
    notificationChannelIds?: InputMaybe<Array<Scalars['String']>>;
    options?: InputMaybe<IGoogleProtobufAny>;
};
type IIoRestorecommerceInvoiceInvoiceIdList = {
    items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoiceId>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceInvoiceInvoiceList = {
    items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceInvoiceManualItem = {
    descritpion?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceInvoicePosition = {
    amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    fromDate?: InputMaybe<Scalars['IDateTime']>;
    fulfillmentItem?: InputMaybe<IIoRestorecommerceInvoiceFulfillmentItem>;
    id?: InputMaybe<Scalars['String']>;
    manualItem?: InputMaybe<IIoRestorecommerceInvoiceManualItem>;
    productItem?: InputMaybe<IIoRestorecommerceInvoiceProductItem>;
    quantity?: InputMaybe<Scalars['Int']>;
    toDate?: InputMaybe<Scalars['IDateTime']>;
    unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
};
type IIoRestorecommerceInvoiceProductItem = {
    productId?: InputMaybe<Scalars['String']>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceInvoiceRequestInvoiceNumber = {
    context?: InputMaybe<IGoogleProtobufAny>;
    shopId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceInvoiceSection = {
    amounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
    customerRemark?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    positions?: InputMaybe<Array<IIoRestorecommerceInvoicePosition>>;
};
type IIoRestorecommerceJobBackoff = {
    delay?: InputMaybe<Scalars['Float']>;
    type?: InputMaybe<IoRestorecommerceJobBackoffType>;
};
type IIoRestorecommerceJobData = {
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    payload?: InputMaybe<IGoogleProtobufAny>;
    subjectId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceJobJob = {
    data?: InputMaybe<IIoRestorecommerceJobData>;
    id?: InputMaybe<Scalars['String']>;
    options?: InputMaybe<IIoRestorecommerceJobJobOptions>;
    queueName?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    when?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceJobJobFilter = {
    jobIds?: InputMaybe<Array<Scalars['String']>>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceJobJobList = {
    items?: InputMaybe<Array<IIoRestorecommerceJobJob>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceJobJobOptions = {
    attempts?: InputMaybe<Scalars['Int']>;
    backoff?: InputMaybe<IIoRestorecommerceJobBackoff>;
    jobId?: InputMaybe<Scalars['String']>;
    priority?: InputMaybe<IoRestorecommerceJobJobOptionsPriority>;
    removeOnComplete?: InputMaybe<Scalars['Boolean']>;
    repeat?: InputMaybe<IIoRestorecommerceJobRepeat>;
    timeout?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceJobJobReadRequest = {
    fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
    filter?: InputMaybe<IIoRestorecommerceJobJobFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<IoRestorecommerceJobJobReadRequestSortOrder>;
};
type IIoRestorecommerceJobRepeat = {
    count?: InputMaybe<Scalars['Int']>;
    cron?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['String']>;
    every?: InputMaybe<Scalars['Int']>;
    jobId?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['String']>;
    tz?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceLocaleLocale = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceLocaleLocaleList = {
    items?: InputMaybe<Array<IIoRestorecommerceLocaleLocale>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceLocationLocation = {
    addressId?: InputMaybe<Scalars['String']>;
    data?: InputMaybe<IGoogleProtobufAny>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    organizationId?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceLocationLocationList = {
    items?: InputMaybe<Array<IIoRestorecommerceLocationLocation>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceManufacturerManufacturer = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceManufacturerManufacturerList = {
    items?: InputMaybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceMetaMeta = {
    acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    created?: InputMaybe<Scalars['IDateTime']>;
    createdBy?: InputMaybe<Scalars['String']>;
    modified?: InputMaybe<Scalars['IDateTime']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};
type IIoRestorecommerceNotificationNotification = {
    bodyTemplate?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    notificationChannelIds?: InputMaybe<Array<Scalars['String']>>;
    subjectTemplate?: InputMaybe<Scalars['String']>;
    telephoneNumber?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceNotificationNotificationList = {
    items?: InputMaybe<Array<IIoRestorecommerceNotificationNotification>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceOauthExchangeCodeRequest = {
    code?: InputMaybe<Scalars['String']>;
    service?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOauthGetTokenRequest = {
    service?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOrderEvent = {
    attibutes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    code?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['String']>;
    message?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<IoRestorecommerceOrderOrderState>;
    timestamp?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceOrderFulfillmentRequest = {
    data?: InputMaybe<IGoogleProtobufAny>;
    exportDescription?: InputMaybe<Scalars['String']>;
    exportType?: InputMaybe<Scalars['String']>;
    invoiceNumber?: InputMaybe<Scalars['String']>;
    orderId?: InputMaybe<Scalars['String']>;
    selectedItems?: InputMaybe<Array<Scalars['String']>>;
    senderAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
};
type IIoRestorecommerceOrderFulfillmentRequestList = {
    items?: InputMaybe<Array<IIoRestorecommerceOrderFulfillmentRequest>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceOrderItem = {
    amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
    id?: InputMaybe<Scalars['String']>;
    parentItemId?: InputMaybe<Scalars['String']>;
    productId?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['Int']>;
    unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOrderOrder = {
    billingAddress?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
    customerId?: InputMaybe<Scalars['String']>;
    customerOrderNr?: InputMaybe<Scalars['String']>;
    customerRemark?: InputMaybe<Scalars['String']>;
    customerType?: InputMaybe<IoRestorecommerceCustomerCustomerType>;
    customerVatId?: InputMaybe<Scalars['String']>;
    history?: InputMaybe<Array<IIoRestorecommerceOrderEvent>>;
    id?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<IIoRestorecommerceOrderItem>>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    notificationEmail?: InputMaybe<Scalars['String']>;
    orderState?: InputMaybe<IoRestorecommerceOrderOrderState>;
    packagingPreferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
    paymentMethodId?: InputMaybe<Scalars['String']>;
    shippingAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
    shopId?: InputMaybe<Scalars['String']>;
    totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
    userId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOrderOrderIdList = {
    ids?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceOrderOrderList = {
    items?: InputMaybe<Array<IIoRestorecommerceOrderOrder>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceOrderOrderingInvoiceRequest = {
    invoiceNumber?: InputMaybe<Scalars['String']>;
    paymentHints?: InputMaybe<Array<Scalars['String']>>;
    sections?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceSection>>;
};
type IIoRestorecommerceOrderOrderingInvoiceRequestList = {
    items?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceRequest>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceOrderOrderingInvoiceSection = {
    fulfillmentMode?: InputMaybe<IoRestorecommerceOrderFulfillmentInvoiceMode>;
    orderId?: InputMaybe<Scalars['String']>;
    selectedFulfillments?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceSection>>;
    selectedItems?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceOrganizationOrganization = {
    contactPointIds?: InputMaybe<Array<Scalars['String']>>;
    data?: InputMaybe<IGoogleProtobufAny>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    isicV4?: InputMaybe<Scalars['String']>;
    logo?: InputMaybe<IIoRestorecommerceImageImage>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['String']>;
    paymentMethodIds?: InputMaybe<Array<Scalars['String']>>;
    registration?: InputMaybe<Scalars['String']>;
    registrationCourt?: InputMaybe<Scalars['String']>;
    vatId?: InputMaybe<Scalars['String']>;
    website?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOrganizationOrganizationList = {
    items?: InputMaybe<Array<IIoRestorecommerceOrganizationOrganization>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceOstorageCopyRequestItem = {
    bucket?: InputMaybe<Scalars['String']>;
    copySource?: InputMaybe<Scalars['String']>;
    key?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
};
type IIoRestorecommerceOstorageCopyRequestList = {
    items?: InputMaybe<Array<IIoRestorecommerceOstorageCopyRequestItem>>;
};
type IIoRestorecommerceOstorageDeleteRequest = {
    bucket?: InputMaybe<Scalars['String']>;
    key?: InputMaybe<Scalars['String']>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOstorageGetRequest = {
    bucket?: InputMaybe<Scalars['String']>;
    download?: InputMaybe<Scalars['Boolean']>;
    key?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOstorageListRequest = {
    bucket?: InputMaybe<Scalars['String']>;
    filters?: InputMaybe<IIoRestorecommerceFilterFilterOp>;
    maxKeys?: InputMaybe<Scalars['Int']>;
    prefix?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOstorageMoveRequestItem = {
    bucket?: InputMaybe<Scalars['String']>;
    key?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
    sourceObject?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOstorageMoveRequestList = {
    items?: InputMaybe<Array<IIoRestorecommerceOstorageMoveRequestItem>>;
};
type IIoRestorecommerceOstorageObject = {
    bucket?: InputMaybe<Scalars['String']>;
    key?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    object?: InputMaybe<Scalars['Upload']>;
    options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
    url?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceOstorageOptions = {
    contentDisposition?: InputMaybe<Scalars['String']>;
    contentLanguage?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    data?: InputMaybe<IGoogleProtobufAny>;
    encoding?: InputMaybe<Scalars['String']>;
    length?: InputMaybe<Scalars['Int']>;
    md5?: InputMaybe<Scalars['String']>;
    tags?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    version?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommercePaymentCaptureRequest = {
    currency?: InputMaybe<Scalars['String']>;
    paymentId?: InputMaybe<Scalars['String']>;
    paymentSum?: InputMaybe<Scalars['Int']>;
    provider?: InputMaybe<IoRestorecommercePaymentProvider>;
};
type IIoRestorecommercePaymentItem = {
    amount?: InputMaybe<Scalars['Int']>;
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommercePaymentPaymentRequest = {
    currency?: InputMaybe<Scalars['String']>;
    payerId?: InputMaybe<Scalars['String']>;
    paymentId?: InputMaybe<Scalars['String']>;
    paymentSum?: InputMaybe<Scalars['Int']>;
    provider?: InputMaybe<IoRestorecommercePaymentProvider>;
    token?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommercePaymentSetupRequest = {
    allowGuestCheckout?: InputMaybe<Scalars['Boolean']>;
    cancelReturnUrl?: InputMaybe<Scalars['String']>;
    currency?: InputMaybe<Scalars['String']>;
    handling?: InputMaybe<Scalars['Int']>;
    ip?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<IIoRestorecommercePaymentItem>>;
    provider?: InputMaybe<IoRestorecommercePaymentProvider>;
    returnUrl?: InputMaybe<Scalars['String']>;
    shipping?: InputMaybe<Scalars['Int']>;
    subtotal?: InputMaybe<Scalars['Int']>;
    tax?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommercePolicyPolicy = {
    combiningAlgorithm?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    effect?: InputMaybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    rules?: InputMaybe<Array<Scalars['String']>>;
    target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};
type IIoRestorecommercePolicyPolicyList = {
    items?: InputMaybe<Array<IIoRestorecommercePolicyPolicy>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommercePolicySetPolicySet = {
    combiningAlgorithm?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    policies?: InputMaybe<Array<Scalars['String']>>;
    target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};
type IIoRestorecommercePolicySetPolicySetList = {
    items?: InputMaybe<Array<IIoRestorecommercePolicySetPolicySet>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommercePriceGroupPriceGroup = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommercePriceGroupPriceGroupList = {
    items?: InputMaybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommercePricePrice = {
    currencyId?: InputMaybe<Scalars['String']>;
    regularPrice?: InputMaybe<Scalars['Float']>;
    sale?: InputMaybe<Scalars['Boolean']>;
    salePrice?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceProductAssociation = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    data?: InputMaybe<IGoogleProtobufAny>;
    productId?: InputMaybe<Scalars['String']>;
    tags?: InputMaybe<Array<Scalars['String']>>;
    type?: InputMaybe<IoRestorecommerceProductAssociationType>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductBundle = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    description?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
    name?: InputMaybe<Scalars['String']>;
    prePackaged?: InputMaybe<IIoRestorecommerceProductPackage>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
    products?: InputMaybe<Array<IIoRestorecommerceProductBundleProduct>>;
    validFrom?: InputMaybe<Scalars['IDateTime']>;
    validTo?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceProductBundleProduct = {
    priceRatio?: InputMaybe<Scalars['Float']>;
    productId?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['Int']>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductCategoryParent = {
    parentId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductCategoryProductCategory = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    image?: InputMaybe<IIoRestorecommerceImageImage>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    parent?: InputMaybe<IIoRestorecommerceProductCategoryParent>;
    priceGroupId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductCategoryProductCategoryList = {
    items?: InputMaybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceProductIndividualProduct = {
    categoryId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    gtin?: InputMaybe<Scalars['String']>;
    manufacturerId?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    originCountryId?: InputMaybe<Scalars['String']>;
    physical?: InputMaybe<IIoRestorecommerceProductPhysicalProduct>;
    prototypeId?: InputMaybe<Scalars['String']>;
    service?: InputMaybe<IIoRestorecommerceProductServiceProduct>;
    taxIds?: InputMaybe<Array<Scalars['String']>>;
    virtual?: InputMaybe<IIoRestorecommerceProductVirtualProduct>;
};
type IIoRestorecommerceProductIndividualProductVariantListRequest = {
    items?: InputMaybe<Array<IIoRestorecommerceProductIndividualProductVariantRequest>>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceProductIndividualProductVariantRequest = {
    localization?: InputMaybe<IIoRestorecommerceProductIndividualProductVariantRequestLocalization>;
    productId?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['Int']>;
    session?: InputMaybe<IIoRestorecommerceProductSession>;
    variantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductIndividualProductVariantRequestLocalization = {
    countryId?: InputMaybe<Scalars['String']>;
    currencyId?: InputMaybe<Scalars['String']>;
    localeId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductPackage = {
    rotatable?: InputMaybe<Scalars['Boolean']>;
    sizeInCm?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
    weightInKg?: InputMaybe<Scalars['Float']>;
};
type IIoRestorecommerceProductPhysicalProduct = {
    templates?: InputMaybe<Array<IIoRestorecommerceProductPhysicalVariant>>;
    variants?: InputMaybe<Array<IIoRestorecommerceProductPhysicalVariant>>;
};
type IIoRestorecommerceProductPhysicalVariant = {
    active?: InputMaybe<Scalars['Boolean']>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    description?: InputMaybe<Scalars['String']>;
    exportDescription?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    hsCode?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
    name?: InputMaybe<Scalars['String']>;
    package?: InputMaybe<IIoRestorecommerceProductPackage>;
    parentVariantId?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
    properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: InputMaybe<Scalars['String']>;
    stockLevel?: InputMaybe<Scalars['Int']>;
    taricCode?: InputMaybe<Scalars['String']>;
    taxIds?: InputMaybe<Array<Scalars['String']>>;
    validFrom?: InputMaybe<Scalars['IDateTime']>;
    validTo?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceProductProduct = {
    active?: InputMaybe<Scalars['Boolean']>;
    associations?: InputMaybe<Array<IIoRestorecommerceProductAssociation>>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
    data?: InputMaybe<IGoogleProtobufAny>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    product?: InputMaybe<IIoRestorecommerceProductIndividualProduct>;
    shopIds?: InputMaybe<Array<Scalars['String']>>;
    tags?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceProductProductList = {
    items?: InputMaybe<Array<IIoRestorecommerceProductProduct>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceProductPrototypeProductPrototype = {
    categoryId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    version?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceProductPrototypeProductPrototypeList = {
    items?: InputMaybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceProductServiceProduct = {
    templates?: InputMaybe<Array<IIoRestorecommerceProductServiceVariant>>;
    variants?: InputMaybe<Array<IIoRestorecommerceProductServiceVariant>>;
};
type IIoRestorecommerceProductServiceVariant = {
    active?: InputMaybe<Scalars['Boolean']>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    description?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    id?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
    name?: InputMaybe<Scalars['String']>;
    parentVariantId?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
    properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: InputMaybe<Scalars['String']>;
    stockLevel?: InputMaybe<Scalars['Int']>;
    taxIds?: InputMaybe<Array<Scalars['String']>>;
    validFrom?: InputMaybe<Scalars['IDateTime']>;
    validTo?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceProductSession = {
    from?: InputMaybe<Scalars['IDateTime']>;
    id?: InputMaybe<Scalars['String']>;
    to?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommerceProductVirtualProduct = {
    templates?: InputMaybe<Array<IIoRestorecommerceProductVirtualVariant>>;
    variants?: InputMaybe<Array<IIoRestorecommerceProductVirtualVariant>>;
};
type IIoRestorecommerceProductVirtualVariant = {
    active?: InputMaybe<Scalars['Boolean']>;
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    description?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    id?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
    name?: InputMaybe<Scalars['String']>;
    parentVariantId?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<IIoRestorecommercePricePrice>;
    properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: InputMaybe<Scalars['String']>;
    stockLevel?: InputMaybe<Scalars['Int']>;
    taxIds?: InputMaybe<Array<Scalars['String']>>;
    validFrom?: InputMaybe<Scalars['IDateTime']>;
    validTo?: InputMaybe<Scalars['IDateTime']>;
};
type IIoRestorecommercePropertyProperty = {
    id?: InputMaybe<Scalars['String']>;
    unitCode?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceReferenceReference = {
    instanceId?: InputMaybe<Scalars['String']>;
    instanceType?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceResourcebaseDeleteRequest = {
    analyzers?: InputMaybe<Array<Scalars['String']>>;
    collection?: InputMaybe<Scalars['Boolean']>;
    ids?: InputMaybe<Array<Scalars['String']>>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    views?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceResourcebaseFieldFilter = {
    include?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceResourcebaseFilter = {
    field?: InputMaybe<Scalars['String']>;
    filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
    operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
    type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceResourcebaseFilterOp = {
    filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
    operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};
type IIoRestorecommerceResourcebaseReadRequest = {
    customArguments?: InputMaybe<IGoogleProtobufAny>;
    customQueries?: InputMaybe<Array<Scalars['String']>>;
    fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
    filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
    limit?: InputMaybe<Scalars['Int']>;
    localesLimiter?: InputMaybe<Array<Scalars['String']>>;
    offset?: InputMaybe<Scalars['Int']>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
    sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
};
type IIoRestorecommerceResourcebaseSearch = {
    caseSensitive?: InputMaybe<Scalars['Boolean']>;
    fields?: InputMaybe<Array<Scalars['String']>>;
    search?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceResourcebaseSort = {
    field?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};
type IIoRestorecommerceRoleRole = {
    assignableByRoles?: InputMaybe<Array<Scalars['String']>>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceRoleRoleList = {
    items?: InputMaybe<Array<IIoRestorecommerceRoleRole>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceRuleContextQuery = {
    filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
    query?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceRuleRule = {
    condition?: InputMaybe<Scalars['String']>;
    contextQuery?: InputMaybe<IIoRestorecommerceRuleContextQuery>;
    description?: InputMaybe<Scalars['String']>;
    effect?: InputMaybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};
type IIoRestorecommerceRuleRuleList = {
    items?: InputMaybe<Array<IIoRestorecommerceRuleRule>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceRuleTarget = {
    actions?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    resources?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    subjects?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};
type IIoRestorecommerceSettingSetting = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    settings?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};
type IIoRestorecommerceSettingSettingList = {
    items?: InputMaybe<Array<IIoRestorecommerceSettingSetting>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceShopShop = {
    description?: InputMaybe<Scalars['String']>;
    domains?: InputMaybe<Array<Scalars['String']>>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    organizationId?: InputMaybe<Scalars['String']>;
    settingId?: InputMaybe<Scalars['String']>;
    shopNumber?: InputMaybe<Scalars['String']>;
    templateIds?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceShopShopList = {
    items?: InputMaybe<Array<IIoRestorecommerceShopShop>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceStatusStatus = {
    code?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['String']>;
    message?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTaxTax = {
    abbreviation?: InputMaybe<Scalars['String']>;
    countryId?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    rate?: InputMaybe<Scalars['Float']>;
    roundMode?: InputMaybe<IoRestorecommerceTaxRoundMode>;
    typeId?: InputMaybe<Scalars['String']>;
    variant?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTaxTaxList = {
    items?: InputMaybe<Array<IIoRestorecommerceTaxTax>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceTaxTypeTaxType = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTaxTypeTaxTypeList = {
    items?: InputMaybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceTemplateLocalization = {
    l10n?: InputMaybe<IIoRestorecommerceFileFile>;
    locales?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceTemplateTemplate = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    bodies?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
    layouts?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    localizations?: InputMaybe<Array<IIoRestorecommerceTemplateLocalization>>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    ordinal?: InputMaybe<Scalars['Int']>;
    section?: InputMaybe<Scalars['String']>;
    styles?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
    useCase?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTemplateTemplateList = {
    items?: InputMaybe<Array<IIoRestorecommerceTemplateTemplate>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceTimezoneTimezone = {
    abbreviationDst?: InputMaybe<Scalars['String']>;
    abbreviationStd?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    offsetDst?: InputMaybe<IIoRestorecommerceTimezoneTimezoneOffset>;
    offsetStd?: InputMaybe<IIoRestorecommerceTimezoneTimezoneOffset>;
    value?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTimezoneTimezoneList = {
    items?: InputMaybe<Array<IIoRestorecommerceTimezoneTimezone>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceTimezoneTimezoneOffset = {
    hours?: InputMaybe<Scalars['Int']>;
    minutes?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceTokenGrantId = {
    grantId?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTokenIdentifier = {
    id?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceTokenTokenData = {
    expiresIn?: InputMaybe<Scalars['IDateTime']>;
    id?: InputMaybe<Scalars['String']>;
    payload?: InputMaybe<IGoogleProtobufAny>;
    type?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUnitCodeUnitCode = {
    commonCode?: InputMaybe<Scalars['String']>;
    conversionFactor?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    groupId?: InputMaybe<Scalars['String']>;
    groupNumber?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    levelCategory?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['String']>;
    sector?: InputMaybe<IoRestorecommerceUnitCodeSector>;
    status?: InputMaybe<IoRestorecommerceUnitCodeStatusCode>;
    symbol?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUnitCodeUnitCodeList = {
    items?: InputMaybe<Array<IIoRestorecommerceUnitCodeUnitCode>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IIoRestorecommerceUserActivateRequest = {
    activationCode?: InputMaybe<Scalars['String']>;
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserChangeEmailRequest = {
    identifier?: InputMaybe<Scalars['String']>;
    newEmail?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserChangePasswordRequest = {
    newPassword?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserCompleteTotpSetupRequest = {
    code?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserConfirmEmailChangeRequest = {
    activationCode?: InputMaybe<Scalars['String']>;
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
    activationCode?: InputMaybe<Scalars['String']>;
    identifier?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserConfirmUserInvitationRequest = {
    activationCode?: InputMaybe<Scalars['String']>;
    identifier?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserCreateBackupTotpCodesRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserExchangeTotpRequest = {
    code?: InputMaybe<Scalars['String']>;
    totpSessionToken?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserFindByRoleRequest = {
    attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    role?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserFindByTokenRequest = {
    token?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserFindRequest = {
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserLoginRequest = {
    identifier?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    token?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserMfaStatusRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserOrgIdRequest = {
    orgIds?: InputMaybe<Array<Scalars['String']>>;
};
type IIoRestorecommerceUserRegisterRequest = {
    captchaCode?: InputMaybe<Scalars['String']>;
    data?: InputMaybe<IGoogleProtobufAny>;
    defaultScope?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    guest?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    localeId?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    timezoneId?: InputMaybe<Scalars['String']>;
    userType?: InputMaybe<IoRestorecommerceUserUserType>;
};
type IIoRestorecommerceUserRequestPasswordChangeRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserResetTotpRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserSendActivationEmailRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserSendInvitationEmailRequest = {
    identifier?: InputMaybe<Scalars['String']>;
    invitedByUserIdentifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserSetupTotpRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserTenantRequest = {
    domain?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserUnregisterRequest = {
    identifier?: InputMaybe<Scalars['String']>;
};
type IIoRestorecommerceUserUser = {
    activationCode?: InputMaybe<Scalars['String']>;
    active?: InputMaybe<Scalars['Boolean']>;
    data?: InputMaybe<IGoogleProtobufAny>;
    defaultScope?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    guest?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['String']>;
    image?: InputMaybe<IIoRestorecommerceImageImage>;
    invite?: InputMaybe<Scalars['Boolean']>;
    invitedByUserFirstName?: InputMaybe<Scalars['String']>;
    invitedByUserLastName?: InputMaybe<Scalars['String']>;
    invitedByUserName?: InputMaybe<Scalars['String']>;
    lastAccess?: InputMaybe<Scalars['IDateTime']>;
    lastName?: InputMaybe<Scalars['String']>;
    localeId?: InputMaybe<Scalars['String']>;
    meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
    name?: InputMaybe<Scalars['String']>;
    newEmail?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    passwordHash?: InputMaybe<Scalars['String']>;
    passwordHashHistory?: InputMaybe<Array<Scalars['String']>>;
    properties?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
    roleAssociations?: InputMaybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
    timezoneId?: InputMaybe<Scalars['String']>;
    tokens?: InputMaybe<Array<IIoRestorecommerceAuthTokens>>;
    totpRecoveryCodes?: InputMaybe<Array<Scalars['String']>>;
    totpSecret?: InputMaybe<Scalars['String']>;
    totpSecretProcessing?: InputMaybe<Scalars['String']>;
    totpSessionTokens?: InputMaybe<Array<Scalars['String']>>;
    userType?: InputMaybe<IoRestorecommerceUserUserType>;
};
type IIoRestorecommerceUserUserList = {
    items?: InputMaybe<Array<IIoRestorecommerceUserUser>>;
    mode?: InputMaybe<ModeType>;
    /** target scope */
    scope?: InputMaybe<Scalars['String']>;
    totalCount?: InputMaybe<Scalars['Int']>;
};
type IdentityAuthenticationLogMutation = {
    __typename?: 'IdentityAuthenticationLogMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};
type IdentityAuthenticationLogMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type IdentityAuthenticationLogMutationMutateArgs = {
    input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};
type IdentityAuthenticationLogQuery = {
    __typename?: 'IdentityAuthenticationLogQuery';
    Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};
type IdentityAuthenticationLogQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type IdentityMutation = {
    __typename?: 'IdentityMutation';
    authentication_log: IdentityAuthenticationLogMutation;
    o_auth: IdentityOAuthMutation;
    role: IdentityRoleMutation;
    token: IdentityTokenMutation;
    user: IdentityUserMutation;
};
type IdentityOAuthMutation = {
    __typename?: 'IdentityOAuthMutation';
    ExchangeCode?: Maybe<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
};
type IdentityOAuthMutationExchangeCodeArgs = {
    input: IIoRestorecommerceOauthExchangeCodeRequest;
};
type IdentityOAuthQuery = {
    __typename?: 'IdentityOAuthQuery';
    AvailableServices?: Maybe<ProtoIoRestorecommerceOauthServicesResponse>;
    GenerateLinks?: Maybe<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
    GetToken?: Maybe<ProtoIoRestorecommerceOauthGetTokenResponse>;
};
type IdentityOAuthQueryGetTokenArgs = {
    input: IIoRestorecommerceOauthGetTokenRequest;
};
type IdentityQuery = {
    __typename?: 'IdentityQuery';
    authentication_log: IdentityAuthenticationLogQuery;
    o_auth: IdentityOAuthQuery;
    role: IdentityRoleQuery;
    token: IdentityTokenQuery;
    user: IdentityUserQuery;
};
type IdentityRoleMutation = {
    __typename?: 'IdentityRoleMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};
type IdentityRoleMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type IdentityRoleMutationMutateArgs = {
    input: IIoRestorecommerceRoleRoleList;
};
type IdentityRoleQuery = {
    __typename?: 'IdentityRoleQuery';
    Read?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};
type IdentityRoleQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type IdentityTokenMutation = {
    __typename?: 'IdentityTokenMutation';
    consume?: Maybe<ProtoGoogleProtobufAny>;
    destroy?: Maybe<ProtoGoogleProtobufAny>;
    revokeByGrantId?: Maybe<ProtoGoogleProtobufAny>;
    upsert?: Maybe<ProtoGoogleProtobufAny>;
};
type IdentityTokenMutationConsumeArgs = {
    input: IIoRestorecommerceTokenIdentifier;
};
type IdentityTokenMutationDestroyArgs = {
    input: IIoRestorecommerceTokenIdentifier;
};
type IdentityTokenMutationRevokeByGrantIdArgs = {
    input: IIoRestorecommerceTokenGrantId;
};
type IdentityTokenMutationUpsertArgs = {
    input: IIoRestorecommerceTokenTokenData;
};
type IdentityTokenQuery = {
    __typename?: 'IdentityTokenQuery';
    find?: Maybe<ProtoGoogleProtobufAny>;
};
type IdentityTokenQueryFindArgs = {
    input: IIoRestorecommerceTokenIdentifier;
};
type IdentityUserMutation = {
    __typename?: 'IdentityUserMutation';
    Activate?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    ChangePassword?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    CompleteTOTPSetup?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    CreateBackupTOTPCodes?: Maybe<ProtoIoRestorecommerceUserCreateBackupTotpCodesResponse>;
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
    ExchangeTOTP?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
    GetUnauthenticatedSubjectTokenForTenant?: Maybe<ProtoIoRestorecommerceUserTenantResponse>;
    Login?: Maybe<ProtoIoRestorecommerceUserLoginResponse>;
    MfaStatus?: Maybe<ProtoIoRestorecommerceUserMfaStatusResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
    Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
    RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    ResetTOTP?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
    SetupTOTP?: Maybe<ProtoIoRestorecommerceUserSetupTotpResponse>;
    Unregister?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
};
type IdentityUserMutationActivateArgs = {
    input: IIoRestorecommerceUserActivateRequest;
};
type IdentityUserMutationChangePasswordArgs = {
    input: IIoRestorecommerceUserChangePasswordRequest;
};
type IdentityUserMutationCompleteTotpSetupArgs = {
    input: IIoRestorecommerceUserCompleteTotpSetupRequest;
};
type IdentityUserMutationConfirmEmailChangeArgs = {
    input: IIoRestorecommerceUserConfirmEmailChangeRequest;
};
type IdentityUserMutationConfirmPasswordChangeArgs = {
    input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
};
type IdentityUserMutationConfirmUserInvitationArgs = {
    input: IIoRestorecommerceUserConfirmUserInvitationRequest;
};
type IdentityUserMutationCreateBackupTotpCodesArgs = {
    input: IIoRestorecommerceUserCreateBackupTotpCodesRequest;
};
type IdentityUserMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type IdentityUserMutationDeleteUsersByOrgArgs = {
    input: IIoRestorecommerceUserOrgIdRequest;
};
type IdentityUserMutationExchangeTotpArgs = {
    input: IIoRestorecommerceUserExchangeTotpRequest;
};
type IdentityUserMutationGetUnauthenticatedSubjectTokenForTenantArgs = {
    input: IIoRestorecommerceUserTenantRequest;
};
type IdentityUserMutationLoginArgs = {
    input: IIoRestorecommerceUserLoginRequest;
};
type IdentityUserMutationMfaStatusArgs = {
    input: IIoRestorecommerceUserMfaStatusRequest;
};
type IdentityUserMutationMutateArgs = {
    input: IIoRestorecommerceUserUserList;
};
type IdentityUserMutationRegisterArgs = {
    input: IIoRestorecommerceUserRegisterRequest;
};
type IdentityUserMutationRequestEmailChangeArgs = {
    input: IIoRestorecommerceUserChangeEmailRequest;
};
type IdentityUserMutationRequestPasswordChangeArgs = {
    input: IIoRestorecommerceUserRequestPasswordChangeRequest;
};
type IdentityUserMutationResetTotpArgs = {
    input: IIoRestorecommerceUserResetTotpRequest;
};
type IdentityUserMutationSendActivationEmailArgs = {
    input: IIoRestorecommerceUserSendActivationEmailRequest;
};
type IdentityUserMutationSendInvitationEmailArgs = {
    input: IIoRestorecommerceUserSendInvitationEmailRequest;
};
type IdentityUserMutationSetupTotpArgs = {
    input: IIoRestorecommerceUserSetupTotpRequest;
};
type IdentityUserMutationUnregisterArgs = {
    input: IIoRestorecommerceUserUnregisterRequest;
};
type IdentityUserQuery = {
    __typename?: 'IdentityUserQuery';
    Find?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
    FindByRole?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
    FindByToken?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
    Read?: Maybe<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
};
type IdentityUserQueryFindArgs = {
    input: IIoRestorecommerceUserFindRequest;
};
type IdentityUserQueryFindByRoleArgs = {
    input: IIoRestorecommerceUserFindByRoleRequest;
};
type IdentityUserQueryFindByTokenArgs = {
    input: IIoRestorecommerceUserFindByTokenRequest;
};
type IdentityUserQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type InvoicingInvoiceMutation = {
    __typename?: 'InvoicingInvoiceMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    GenerateInvoiceNumber?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
    Render?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
    Send?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
    Withdraw?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};
type InvoicingInvoiceMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type InvoicingInvoiceMutationGenerateInvoiceNumberArgs = {
    input: IIoRestorecommerceInvoiceRequestInvoiceNumber;
};
type InvoicingInvoiceMutationMutateArgs = {
    input: IIoRestorecommerceInvoiceInvoiceList;
};
type InvoicingInvoiceMutationRenderArgs = {
    input: IIoRestorecommerceInvoiceInvoiceList;
};
type InvoicingInvoiceMutationSendArgs = {
    input: IIoRestorecommerceInvoiceInvoiceIdList;
};
type InvoicingInvoiceMutationWithdrawArgs = {
    input: IIoRestorecommerceInvoiceInvoiceIdList;
};
type InvoicingInvoiceQuery = {
    __typename?: 'InvoicingInvoiceQuery';
    Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};
type InvoicingInvoiceQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type InvoicingMutation = {
    __typename?: 'InvoicingMutation';
    invoice: InvoicingInvoiceMutation;
};
type InvoicingQuery = {
    __typename?: 'InvoicingQuery';
    invoice: InvoicingInvoiceQuery;
};
type IoRestorecommerceAccessControlResponse = {
    __typename?: 'IoRestorecommerceAccessControlResponse';
    decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
    evaluationCacheable?: Maybe<Scalars['Boolean']>;
    obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
declare enum IoRestorecommerceAccessControlResponseDecision {
    Deny = "DENY",
    Indeterminate = "INDETERMINATE",
    NotApplicable = "NOT_APPLICABLE",
    Permit = "PERMIT"
}
type IoRestorecommerceAccessControlReverseQuery = {
    __typename?: 'IoRestorecommerceAccessControlReverseQuery';
    obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
};
type IoRestorecommerceAddressAddress = {
    __typename?: 'IoRestorecommerceAddressAddress';
    addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
    altitude?: Maybe<Scalars['Float']>;
    buildingNumber?: Maybe<Scalars['String']>;
    businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
    country?: Maybe<IoRestorecommerceCountryCountry>;
    countryId?: Maybe<Scalars['String']>;
    geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
    id?: Maybe<Scalars['String']>;
    locality?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    packStation?: Maybe<IoRestorecommerceAddressPackStation>;
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
    street?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressAddressAddition = {
    __typename?: 'IoRestorecommerceAddressAddressAddition';
    field1?: Maybe<Scalars['String']>;
    field2?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressAddressListResponse = {
    __typename?: 'IoRestorecommerceAddressAddressListResponse';
    items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceAddressAddressResponse = {
    __typename?: 'IoRestorecommerceAddressAddressResponse';
    payload?: Maybe<IoRestorecommerceAddressAddress>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceAddressBillingAddress = {
    __typename?: 'IoRestorecommerceAddressBillingAddress';
    address?: Maybe<IoRestorecommerceAddressAddress>;
    comments?: Maybe<Scalars['String']>;
    contact?: Maybe<IoRestorecommerceAddressContact>;
};
type IoRestorecommerceAddressBusinessAddress = {
    __typename?: 'IoRestorecommerceAddressBusinessAddress';
    name?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressContact = {
    __typename?: 'IoRestorecommerceAddressContact';
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressGeoPoint = {
    __typename?: 'IoRestorecommerceAddressGeoPoint';
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceAddressPackStation = {
    __typename?: 'IoRestorecommerceAddressPackStation';
    postNumber?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    stationNumber?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressResidentialAddress = {
    __typename?: 'IoRestorecommerceAddressResidentialAddress';
    familyName?: Maybe<Scalars['String']>;
    givenName?: Maybe<Scalars['String']>;
    midName?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAddressShippingAddress = {
    __typename?: 'IoRestorecommerceAddressShippingAddress';
    address?: Maybe<IoRestorecommerceAddressAddress>;
    comments?: Maybe<Scalars['String']>;
    contact?: Maybe<IoRestorecommerceAddressContact>;
};
type IoRestorecommerceAmountAmount = {
    __typename?: 'IoRestorecommerceAmountAmount';
    currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
    currencyId?: Maybe<Scalars['String']>;
    gross?: Maybe<Scalars['Float']>;
    net?: Maybe<Scalars['Float']>;
    vats?: Maybe<Array<IoRestorecommerceAmountVat>>;
};
type IoRestorecommerceAmountVat = {
    __typename?: 'IoRestorecommerceAmountVAT';
    tax?: Maybe<IoRestorecommerceTaxTax>;
    taxId?: Maybe<Scalars['String']>;
    vat?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceAttributeAttribute = {
    __typename?: 'IoRestorecommerceAttributeAttribute';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    id?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAuthRoleAssociation = {
    __typename?: 'IoRestorecommerceAuthRoleAssociation';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    created?: Maybe<Scalars['DateTime']>;
    id?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAuthTokens = {
    __typename?: 'IoRestorecommerceAuthTokens';
    clientId?: Maybe<Scalars['String']>;
    expiresIn?: Maybe<Scalars['DateTime']>;
    interactive?: Maybe<Scalars['Boolean']>;
    lastLogin?: Maybe<Scalars['DateTime']>;
    name?: Maybe<Scalars['String']>;
    scopes?: Maybe<Array<Scalars['String']>>;
    token?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAuthenticationLogAuthenticationLog = {
    __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLog';
    activity?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['DateTime']>;
    id?: Maybe<Scalars['String']>;
    ipv4Address?: Maybe<Scalars['String']>;
    ipv6Address?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    operatingSystem?: Maybe<Scalars['String']>;
    subjectId?: Maybe<Scalars['String']>;
    tokenName?: Maybe<Scalars['String']>;
    userAgent?: Maybe<Scalars['String']>;
};
type IoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
    __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
    items?: Maybe<Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceAuthenticationLogAuthenticationLogResponse = {
    __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
    payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceCommandCommand = {
    __typename?: 'IoRestorecommerceCommandCommand';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    parameters?: Maybe<Array<IoRestorecommerceCommandCommandParameter>>;
};
type IoRestorecommerceCommandCommandListResponse = {
    __typename?: 'IoRestorecommerceCommandCommandListResponse';
    items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceCommandCommandParameter = {
    __typename?: 'IoRestorecommerceCommandCommandParameter';
    description?: Maybe<Scalars['String']>;
    field?: Maybe<Scalars['String']>;
    properties?: Maybe<Scalars['String']>;
    type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
};
declare enum IoRestorecommerceCommandCommandParameterParameterType {
    ArrayValue = "array_value",
    BooleanValue = "boolean_value",
    NumberValue = "number_value",
    ObjectValue = "object_value",
    StringValue = "string_value"
}
type IoRestorecommerceCommandCommandResponse = {
    __typename?: 'IoRestorecommerceCommandCommandResponse';
    payload?: Maybe<IoRestorecommerceCommandCommand>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceContactPointContactPoint = {
    __typename?: 'IoRestorecommerceContactPointContactPoint';
    contactPointTypeIds?: Maybe<Array<Scalars['String']>>;
    contactPointTypes?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointType>>;
    description?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    locale?: Maybe<IoRestorecommerceLocaleLocale>;
    localeId?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
    physicalAddressId?: Maybe<Scalars['String']>;
    telephone?: Maybe<Scalars['String']>;
    timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
    timezoneId?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
};
type IoRestorecommerceContactPointContactPointListResponse = {
    __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
    items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceContactPointContactPointResponse = {
    __typename?: 'IoRestorecommerceContactPointContactPointResponse';
    payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceContactPointTypeContactPointType = {
    __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    type?: Maybe<Scalars['String']>;
};
type IoRestorecommerceContactPointTypeContactPointTypeListResponse = {
    __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
    items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceContactPointTypeContactPointTypeResponse = {
    __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeResponse';
    payload?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceCountryCountry = {
    __typename?: 'IoRestorecommerceCountryCountry';
    countryCode?: Maybe<Scalars['String']>;
    countryCodeAlpha2?: Maybe<Scalars['String']>;
    countryCodeAlpha3?: Maybe<Scalars['String']>;
    economicAreas?: Maybe<Array<Scalars['String']>>;
    geographicalName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    localeIds?: Maybe<Array<Scalars['String']>>;
    locales?: Maybe<Array<IoRestorecommerceLocaleLocale>>;
    localizedNames?: Maybe<Array<IoRestorecommerceCountryCountryLocaleName>>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    timezoneIds?: Maybe<Array<Scalars['String']>>;
    timezones?: Maybe<Array<IoRestorecommerceTimezoneTimezone>>;
};
type IoRestorecommerceCountryCountryListResponse = {
    __typename?: 'IoRestorecommerceCountryCountryListResponse';
    items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceCountryCountryLocaleName = {
    __typename?: 'IoRestorecommerceCountryCountryLocaleName';
    locale?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCountryCountryResponse = {
    __typename?: 'IoRestorecommerceCountryCountryResponse';
    payload?: Maybe<IoRestorecommerceCountryCountry>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceCredentialCredential = {
    __typename?: 'IoRestorecommerceCredentialCredential';
    credentials?: Maybe<GoogleProtobufAny>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    pass?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCredentialCredentialListResponse = {
    __typename?: 'IoRestorecommerceCredentialCredentialListResponse';
    items?: Maybe<Array<IoRestorecommerceCredentialCredentialResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceCredentialCredentialResponse = {
    __typename?: 'IoRestorecommerceCredentialCredentialResponse';
    payload?: Maybe<IoRestorecommerceCredentialCredential>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceCurrencyCurrency = {
    __typename?: 'IoRestorecommerceCurrencyCurrency';
    code?: Maybe<Scalars['String']>;
    countries?: Maybe<Array<IoRestorecommerceCountryCountry>>;
    countryIds?: Maybe<Array<Scalars['String']>>;
    customExchangeRates?: Maybe<Array<IoRestorecommerceCurrencyExchangeRate>>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    precision?: Maybe<Scalars['Int']>;
    symbol?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCurrencyCurrencyListResponse = {
    __typename?: 'IoRestorecommerceCurrencyCurrencyListResponse';
    items?: Maybe<Array<IoRestorecommerceCurrencyCurrencyResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceCurrencyCurrencyResponse = {
    __typename?: 'IoRestorecommerceCurrencyCurrencyResponse';
    payload?: Maybe<IoRestorecommerceCurrencyCurrency>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceCurrencyExchangeRate = {
    __typename?: 'IoRestorecommerceCurrencyExchangeRate';
    amount?: Maybe<Scalars['Float']>;
    expenses?: Maybe<Scalars['Float']>;
    rate?: Maybe<Scalars['Float']>;
    toCurrencyId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCustomerCommercial = {
    __typename?: 'IoRestorecommerceCustomerCommercial';
    organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
    organizationId?: Maybe<Scalars['String']>;
    templateIds?: Maybe<Array<Scalars['String']>>;
    templates?: Maybe<Array<IoRestorecommerceTemplateTemplate>>;
};
type IoRestorecommerceCustomerCustomer = {
    __typename?: 'IoRestorecommerceCustomerCustomer';
    commercial?: Maybe<IoRestorecommerceCustomerCommercial>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    private?: Maybe<IoRestorecommerceCustomerPrivate>;
    publicSector?: Maybe<IoRestorecommerceCustomerPublicSector>;
    setting?: Maybe<IoRestorecommerceSettingSetting>;
    settingId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCustomerCustomerListResponse = {
    __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
    items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceCustomerCustomerResponse = {
    __typename?: 'IoRestorecommerceCustomerCustomerResponse';
    payload?: Maybe<IoRestorecommerceCustomerCustomer>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
declare enum IoRestorecommerceCustomerCustomerType {
    Commercial = "COMMERCIAL",
    Private = "PRIVATE",
    PublicSector = "PUBLIC_SECTOR"
}
type IoRestorecommerceCustomerPrivate = {
    __typename?: 'IoRestorecommerceCustomerPrivate';
    contactPointIds?: Maybe<Array<Scalars['String']>>;
    contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
    user?: Maybe<IoRestorecommerceUserUser>;
    userId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceCustomerPublicSector = {
    __typename?: 'IoRestorecommerceCustomerPublicSector';
    organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
    organizationId?: Maybe<Scalars['String']>;
    templateIds?: Maybe<Array<Scalars['String']>>;
    templates?: Maybe<Array<IoRestorecommerceTemplateTemplate>>;
};
type IoRestorecommerceFileFile = {
    __typename?: 'IoRestorecommerceFileFile';
    base64?: Maybe<Scalars['String']>;
    blob?: Maybe<Scalars['TodoScalar']>;
    bytes?: Maybe<Scalars['Int']>;
    caption?: Maybe<Scalars['String']>;
    contentType?: Maybe<Scalars['String']>;
    filename?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    ordinal?: Maybe<Scalars['Int']>;
    tags?: Maybe<Array<Scalars['String']>>;
    thumbnail?: Maybe<IoRestorecommerceImageImage>;
    url?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFilterFilter = {
    __typename?: 'IoRestorecommerceFilterFilter';
    field?: Maybe<Scalars['String']>;
    filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
    operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
    type?: Maybe<IoRestorecommerceFilterFilterValueType>;
    value?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFilterFilterOp = {
    __typename?: 'IoRestorecommerceFilterFilterOp';
    filters?: Maybe<Array<IoRestorecommerceFilterFilter>>;
    operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
};
declare enum IoRestorecommerceFilterFilterOpOperator {
    And = "and",
    Or = "or"
}
declare enum IoRestorecommerceFilterFilterOperation {
    Eq = "eq",
    Gt = "gt",
    Gte = "gte",
    ILike = "iLike",
    In = "in",
    IsEmpty = "isEmpty",
    Lt = "lt",
    Lte = "lte",
    Neq = "neq"
}
declare enum IoRestorecommerceFilterFilterValueType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Date = "DATE",
    Number = "NUMBER",
    String = "STRING"
}
type IoRestorecommerceFulfillmentCharge = {
    __typename?: 'IoRestorecommerceFulfillmentCharge';
    charge?: Maybe<IoRestorecommerceAmountAmount>;
    description?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentCourierFulfillmentCourier = {
    __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
    api?: Maybe<Scalars['String']>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    configuration?: Maybe<GoogleProtobufAny>;
    credentialId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    shopIds?: Maybe<Array<Scalars['String']>>;
    shops?: Maybe<Array<IoRestorecommerceShopShop>>;
    website?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
    __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
    items?: Maybe<Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse = {
    __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
    payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceFulfillmentCustomsDeclaration = {
    __typename?: 'IoRestorecommerceFulfillmentCustomsDeclaration';
    MRN?: Maybe<Scalars['String']>;
    attestation?: Maybe<Scalars['String']>;
    charges?: Maybe<Array<IoRestorecommerceFulfillmentCharge>>;
    consigneeRef?: Maybe<Scalars['String']>;
    exportDescription?: Maybe<Scalars['String']>;
    exportType?: Maybe<Scalars['String']>;
    invoiceNumber?: Maybe<Scalars['String']>;
    notify?: Maybe<Scalars['Boolean']>;
    permitNumber?: Maybe<Scalars['String']>;
    shipperRef?: Maybe<Scalars['String']>;
    shippingCondition?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentEvent = {
    __typename?: 'IoRestorecommerceFulfillmentEvent';
    details?: Maybe<GoogleProtobufAny>;
    location?: Maybe<Scalars['String']>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
    timestamp?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommerceFulfillmentFulfillment = {
    __typename?: 'IoRestorecommerceFulfillmentFulfillment';
    customer?: Maybe<IoRestorecommerceCustomerCustomer>;
    customerId?: Maybe<Scalars['String']>;
    documents?: Maybe<Array<IoRestorecommerceFileFile>>;
    fulfillmentState?: Maybe<IoRestorecommerceFulfillmentFulfillmentState>;
    id?: Maybe<Scalars['String']>;
    labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
    references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
    shop?: Maybe<IoRestorecommerceShopShop>;
    shopId?: Maybe<Scalars['String']>;
    totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
    trackings?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
    user?: Maybe<IoRestorecommerceUserUser>;
    userId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentFulfillmentListResponse = {
    __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
    items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceFulfillmentFulfillmentResponse = {
    __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
    payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
declare enum IoRestorecommerceFulfillmentFulfillmentState {
    Cancelled = "CANCELLED",
    Complete = "COMPLETE",
    Failed = "FAILED",
    Invalid = "INVALID",
    InTransit = "IN_TRANSIT",
    Pending = "PENDING",
    Retoure = "RETOURE",
    RetoureComplete = "RETOURE_COMPLETE",
    Submitted = "SUBMITTED",
    Withdrawn = "WITHDRAWN"
}
type IoRestorecommerceFulfillmentItem = {
    __typename?: 'IoRestorecommerceFulfillmentItem';
    description?: Maybe<Scalars['String']>;
    hsCode?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    originCountryId?: Maybe<Scalars['String']>;
    package?: Maybe<IoRestorecommerceProductPackage>;
    productId?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Int']>;
    taricCode?: Maybe<Scalars['String']>;
    value?: Maybe<IoRestorecommerceAmountAmount>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentLabel = {
    __typename?: 'IoRestorecommerceFulfillmentLabel';
    file?: Maybe<IoRestorecommerceFileFile>;
    id?: Maybe<Scalars['String']>;
    parcelId?: Maybe<Scalars['String']>;
    shipmentNumber?: Maybe<Scalars['String']>;
    state?: Maybe<IoRestorecommerceFulfillmentFulfillmentState>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceFulfillmentPackaging = {
    __typename?: 'IoRestorecommerceFulfillmentPackaging';
    customsDeclaration?: Maybe<IoRestorecommerceFulfillmentCustomsDeclaration>;
    notify?: Maybe<Scalars['String']>;
    parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
    recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
    sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
};
type IoRestorecommerceFulfillmentParcel = {
    __typename?: 'IoRestorecommerceFulfillmentParcel';
    amount?: Maybe<IoRestorecommerceAmountAmount>;
    id?: Maybe<Scalars['String']>;
    items?: Maybe<Array<IoRestorecommerceFulfillmentItem>>;
    package?: Maybe<IoRestorecommerceProductPackage>;
    price?: Maybe<IoRestorecommercePricePrice>;
    product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
    productId?: Maybe<Scalars['String']>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceFulfillmentProductFulfillmentProduct = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProduct';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    courier?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
    courierId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    destinationZones?: Maybe<Array<Scalars['String']>>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    startZones?: Maybe<Array<Scalars['String']>>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    variants?: Maybe<Array<IoRestorecommerceFulfillmentProductVariant>>;
};
type IoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
    items?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceFulfillmentProductFulfillmentProductResponse = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponse';
    payload?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceFulfillmentProductFulfillmentSolution = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentSolution';
    amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
    courierIds?: Maybe<Array<Scalars['String']>>;
    parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
};
type IoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse';
    items?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentSolutionResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceFulfillmentProductFulfillmentSolutionResponse = {
    __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentSolutionResponse';
    reference?: Maybe<IoRestorecommerceReferenceReference>;
    solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentSolution>>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceFulfillmentProductPreferences = {
    __typename?: 'IoRestorecommerceFulfillmentProductPreferences';
    courierIds?: Maybe<Array<Scalars['String']>>;
    fulfillmentProductIds?: Maybe<Array<Scalars['String']>>;
    options?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    partialFulfillmentAllowed?: Maybe<Scalars['Boolean']>;
};
type IoRestorecommerceFulfillmentProductVariant = {
    __typename?: 'IoRestorecommerceFulfillmentProductVariant';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
    maxWeight?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<IoRestorecommercePricePrice>;
};
type IoRestorecommerceFulfillmentTracking = {
    __typename?: 'IoRestorecommerceFulfillmentTracking';
    details?: Maybe<GoogleProtobufAny>;
    events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
    shipmentNumber?: Maybe<Scalars['String']>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceGeometryBoundingBox3D = {
    __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
    height?: Maybe<Scalars['Float']>;
    length?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceImageImage = {
    __typename?: 'IoRestorecommerceImageImage';
    base64?: Maybe<Scalars['String']>;
    blob?: Maybe<Scalars['TodoScalar']>;
    caption?: Maybe<Scalars['String']>;
    contentType?: Maybe<Scalars['String']>;
    filename?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['String']>;
    index?: Maybe<Scalars['Int']>;
    length?: Maybe<Scalars['Float']>;
    tags?: Maybe<Array<Scalars['String']>>;
    url?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceInvoiceFulfillmentItem = {
    __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
    product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
    productId?: Maybe<Scalars['String']>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceInvoiceInvoice = {
    __typename?: 'IoRestorecommerceInvoiceInvoice';
    billingAddress?: Maybe<IoRestorecommerceAddressBillingAddress>;
    customer?: Maybe<IoRestorecommerceCustomerCustomer>;
    customerId?: Maybe<Scalars['String']>;
    customerOrderNumber?: Maybe<Scalars['String']>;
    customerVatId?: Maybe<Scalars['String']>;
    documents?: Maybe<Array<IoRestorecommerceFileFile>>;
    fromDate?: Maybe<Scalars['DateTime']>;
    id?: Maybe<Scalars['String']>;
    invoiceNumber?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    paymentHints?: Maybe<Array<Scalars['String']>>;
    paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
    recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
    references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
    sections?: Maybe<Array<IoRestorecommerceInvoiceSection>>;
    sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
    sent?: Maybe<Scalars['Boolean']>;
    shop?: Maybe<IoRestorecommerceShopShop>;
    shopId?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['DateTime']>;
    toDate?: Maybe<Scalars['DateTime']>;
    totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
    user?: Maybe<IoRestorecommerceUserUser>;
    userId?: Maybe<Scalars['String']>;
    withdrawn?: Maybe<Scalars['Boolean']>;
};
type IoRestorecommerceInvoiceInvoiceListResponse = {
    __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
    items?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceInvoiceInvoiceNumberResponse = {
    __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
    invoiceNumber?: Maybe<Scalars['String']>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
type IoRestorecommerceInvoiceInvoiceResponse = {
    __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
    payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceInvoiceManualItem = {
    __typename?: 'IoRestorecommerceInvoiceManualItem';
    descritpion?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: Maybe<Scalars['String']>;
};
declare enum IoRestorecommerceInvoicePaymentState {
    Payed = "PAYED",
    Unpayed = "UNPAYED"
}
type IoRestorecommerceInvoicePosition = {
    __typename?: 'IoRestorecommerceInvoicePosition';
    amount?: Maybe<IoRestorecommerceAmountAmount>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    fromDate?: Maybe<Scalars['DateTime']>;
    fulfillmentItem?: Maybe<IoRestorecommerceInvoiceFulfillmentItem>;
    id?: Maybe<Scalars['String']>;
    manualItem?: Maybe<IoRestorecommerceInvoiceManualItem>;
    productItem?: Maybe<IoRestorecommerceInvoiceProductItem>;
    quantity?: Maybe<Scalars['Int']>;
    toDate?: Maybe<Scalars['DateTime']>;
    unitPrice?: Maybe<IoRestorecommercePricePrice>;
};
type IoRestorecommerceInvoiceProductItem = {
    __typename?: 'IoRestorecommerceInvoiceProductItem';
    product?: Maybe<IoRestorecommerceProductProduct>;
    productId?: Maybe<Scalars['String']>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceInvoiceSection = {
    __typename?: 'IoRestorecommerceInvoiceSection';
    amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
    customerRemark?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    positions?: Maybe<Array<IoRestorecommerceInvoicePosition>>;
};
type IoRestorecommerceJobBackoff = {
    __typename?: 'IoRestorecommerceJobBackoff';
    delay?: Maybe<Scalars['Float']>;
    type?: Maybe<IoRestorecommerceJobBackoffType>;
};
declare enum IoRestorecommerceJobBackoffType {
    Exponential = "EXPONENTIAL",
    Fixed = "FIXED"
}
type IoRestorecommerceJobData = {
    __typename?: 'IoRestorecommerceJobData';
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    payload?: Maybe<GoogleProtobufAny>;
    subjectId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceJobJob = {
    __typename?: 'IoRestorecommerceJobJob';
    data?: Maybe<IoRestorecommerceJobData>;
    id?: Maybe<Scalars['String']>;
    options?: Maybe<IoRestorecommerceJobJobOptions>;
    queueName?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    when?: Maybe<Scalars['String']>;
};
type IoRestorecommerceJobJobListResponse = {
    __typename?: 'IoRestorecommerceJobJobListResponse';
    items?: Maybe<Array<IoRestorecommerceJobJobResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceJobJobOptions = {
    __typename?: 'IoRestorecommerceJobJobOptions';
    attempts?: Maybe<Scalars['Int']>;
    backoff?: Maybe<IoRestorecommerceJobBackoff>;
    jobId?: Maybe<Scalars['String']>;
    priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
    removeOnComplete?: Maybe<Scalars['Boolean']>;
    repeat?: Maybe<IoRestorecommerceJobRepeat>;
    timeout?: Maybe<Scalars['Int']>;
};
declare enum IoRestorecommerceJobJobOptionsPriority {
    Critical = "CRITICAL",
    High = "HIGH",
    Low = "LOW",
    Medium = "MEDIUM",
    Normal = "NORMAL"
}
declare enum IoRestorecommerceJobJobReadRequestSortOrder {
    Ascending = "ASCENDING",
    Descending = "DESCENDING",
    Unsorted = "UNSORTED"
}
type IoRestorecommerceJobJobResponse = {
    __typename?: 'IoRestorecommerceJobJobResponse';
    payload?: Maybe<IoRestorecommerceJobJob>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceJobRepeat = {
    __typename?: 'IoRestorecommerceJobRepeat';
    count?: Maybe<Scalars['Int']>;
    cron?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['String']>;
    every?: Maybe<Scalars['Int']>;
    jobId?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['String']>;
    tz?: Maybe<Scalars['String']>;
};
type IoRestorecommerceLocaleLocale = {
    __typename?: 'IoRestorecommerceLocaleLocale';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    parent?: Maybe<IoRestorecommerceLocaleLocale>;
    parentId?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
type IoRestorecommerceLocaleLocaleListResponse = {
    __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
    items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceLocaleLocaleResponse = {
    __typename?: 'IoRestorecommerceLocaleLocaleResponse';
    payload?: Maybe<IoRestorecommerceLocaleLocale>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceLocationLocation = {
    __typename?: 'IoRestorecommerceLocationLocation';
    address?: Maybe<IoRestorecommerceAddressAddress>;
    addressId?: Maybe<Scalars['String']>;
    data?: Maybe<GoogleProtobufAny>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
    organizationId?: Maybe<Scalars['String']>;
    parent?: Maybe<IoRestorecommerceLocationLocation>;
    parentId?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
type IoRestorecommerceLocationLocationListResponse = {
    __typename?: 'IoRestorecommerceLocationLocationListResponse';
    items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceLocationLocationResponse = {
    __typename?: 'IoRestorecommerceLocationLocationResponse';
    payload?: Maybe<IoRestorecommerceLocationLocation>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceManufacturerManufacturer = {
    __typename?: 'IoRestorecommerceManufacturerManufacturer';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
};
type IoRestorecommerceManufacturerManufacturerListResponse = {
    __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
    items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceManufacturerManufacturerResponse = {
    __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
    payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceMetaMeta = {
    __typename?: 'IoRestorecommerceMetaMeta';
    acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    modified?: Maybe<Scalars['DateTime']>;
    modifiedBy?: Maybe<Scalars['String']>;
    owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};
type IoRestorecommerceNotificationNotification = {
    __typename?: 'IoRestorecommerceNotificationNotification';
    bodyTemplate?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    notificationChannelIds?: Maybe<Array<Scalars['String']>>;
    subjectTemplate?: Maybe<Scalars['String']>;
    telephoneNumber?: Maybe<Scalars['String']>;
};
type IoRestorecommerceNotificationNotificationListResponse = {
    __typename?: 'IoRestorecommerceNotificationNotificationListResponse';
    items?: Maybe<Array<IoRestorecommerceNotificationNotificationResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceNotificationNotificationResponse = {
    __typename?: 'IoRestorecommerceNotificationNotificationResponse';
    payload?: Maybe<IoRestorecommerceNotificationNotification>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOauthExchangeCodeResponse = {
    __typename?: 'IoRestorecommerceOauthExchangeCodeResponse';
    email?: Maybe<Scalars['String']>;
    token?: Maybe<IoRestorecommerceAuthTokens>;
    user?: Maybe<IoRestorecommerceUserUserResponse>;
};
type IoRestorecommerceOauthGenerateLinksResponse = {
    __typename?: 'IoRestorecommerceOauthGenerateLinksResponse';
    links?: Maybe<Scalars['MapScalar']>;
};
type IoRestorecommerceOauthGetTokenResponse = {
    __typename?: 'IoRestorecommerceOauthGetTokenResponse';
    status?: Maybe<IoRestorecommerceStatusStatus>;
    token?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOauthServicesResponse = {
    __typename?: 'IoRestorecommerceOauthServicesResponse';
    services?: Maybe<Array<Scalars['String']>>;
};
type IoRestorecommerceOrderEvent = {
    __typename?: 'IoRestorecommerceOrderEvent';
    attibutes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    code?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    state?: Maybe<IoRestorecommerceOrderOrderState>;
    timestamp?: Maybe<Scalars['DateTime']>;
};
declare enum IoRestorecommerceOrderFulfillmentInvoiceMode {
    Exclude = "EXCLUDE",
    Include = "INCLUDE"
}
type IoRestorecommerceOrderItem = {
    __typename?: 'IoRestorecommerceOrderItem';
    amount?: Maybe<IoRestorecommerceAmountAmount>;
    id?: Maybe<Scalars['String']>;
    parentItemId?: Maybe<Scalars['String']>;
    product?: Maybe<IoRestorecommerceProductProduct>;
    productId?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Int']>;
    unitPrice?: Maybe<IoRestorecommercePricePrice>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOrderOrder = {
    __typename?: 'IoRestorecommerceOrderOrder';
    billingAddress?: Maybe<IoRestorecommerceAddressBillingAddress>;
    customer?: Maybe<IoRestorecommerceCustomerCustomer>;
    customerId?: Maybe<Scalars['String']>;
    customerOrderNr?: Maybe<Scalars['String']>;
    customerRemark?: Maybe<Scalars['String']>;
    customerType?: Maybe<IoRestorecommerceCustomerCustomerType>;
    customerVatId?: Maybe<Scalars['String']>;
    history?: Maybe<Array<IoRestorecommerceOrderEvent>>;
    id?: Maybe<Scalars['String']>;
    items?: Maybe<Array<IoRestorecommerceOrderItem>>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    notificationEmail?: Maybe<Scalars['String']>;
    orderState?: Maybe<IoRestorecommerceOrderOrderState>;
    packagingPreferences?: Maybe<IoRestorecommerceFulfillmentProductPreferences>;
    paymentMethodId?: Maybe<Scalars['String']>;
    shippingAddress?: Maybe<IoRestorecommerceAddressShippingAddress>;
    shop?: Maybe<IoRestorecommerceShopShop>;
    shopId?: Maybe<Scalars['String']>;
    totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
    user?: Maybe<IoRestorecommerceUserUser>;
    userId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOrderOrderListResponse = {
    __typename?: 'IoRestorecommerceOrderOrderListResponse';
    items?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceOrderOrderResponse = {
    __typename?: 'IoRestorecommerceOrderOrderResponse';
    payload?: Maybe<IoRestorecommerceOrderOrder>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
declare enum IoRestorecommerceOrderOrderState {
    Cancelled = "CANCELLED",
    Completed = "COMPLETED",
    Invalid = "INVALID",
    Pending = "PENDING",
    Submitted = "SUBMITTED",
    Withdrawn = "WITHDRAWN"
}
type IoRestorecommerceOrderOrderSubmitListResponse = {
    __typename?: 'IoRestorecommerceOrderOrderSubmitListResponse';
    fulfillments?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
    invoices?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    orders?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
};
type IoRestorecommerceOrganizationOrganization = {
    __typename?: 'IoRestorecommerceOrganizationOrganization';
    contactPointIds?: Maybe<Array<Scalars['String']>>;
    contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
    data?: Maybe<GoogleProtobufAny>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    isicV4?: Maybe<Scalars['String']>;
    logo?: Maybe<IoRestorecommerceImageImage>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
    parentId?: Maybe<Scalars['String']>;
    paymentMethodIds?: Maybe<Array<Scalars['String']>>;
    paymentMethods?: Maybe<Array<IoRestorecommercePaymentMethodPaymentMethod>>;
    registration?: Maybe<Scalars['String']>;
    registrationCourt?: Maybe<Scalars['String']>;
    vatId?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOrganizationOrganizationListResponse = {
    __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
    items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceOrganizationOrganizationResponse = {
    __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
    payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageCopyResponseItem = {
    __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
    bucket?: Maybe<Scalars['String']>;
    copySource?: Maybe<Scalars['String']>;
    key?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    options?: Maybe<IoRestorecommerceOstorageOptions>;
};
type IoRestorecommerceOstorageCopyResponseList = {
    __typename?: 'IoRestorecommerceOstorageCopyResponseList';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    responses?: Maybe<Array<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>>;
};
type IoRestorecommerceOstorageCopyResponsePayloadWithStatus = {
    __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
    payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageListResponse = {
    __typename?: 'IoRestorecommerceOstorageListResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    responses?: Maybe<Array<IoRestorecommerceOstorageObjectsDataWithPayloadStatus>>;
};
type IoRestorecommerceOstorageMoveResponseItem = {
    __typename?: 'IoRestorecommerceOstorageMoveResponseItem';
    bucket?: Maybe<Scalars['String']>;
    key?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    options?: Maybe<IoRestorecommerceOstorageOptions>;
    sourceObject?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOstorageMoveResponseList = {
    __typename?: 'IoRestorecommerceOstorageMoveResponseList';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    responses?: Maybe<Array<IoRestorecommerceOstorageMoveResponsePayloadWithStatus>>;
};
type IoRestorecommerceOstorageMoveResponsePayloadWithStatus = {
    __typename?: 'IoRestorecommerceOstorageMoveResponsePayloadWithStatus';
    payload?: Maybe<IoRestorecommerceOstorageMoveResponseItem>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageObjectData = {
    __typename?: 'IoRestorecommerceOstorageObjectData';
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    objectName?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOstorageObjectResponse = {
    __typename?: 'IoRestorecommerceOstorageObjectResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    response?: Maybe<IoRestorecommerceOstorageObjectResponsePayloadWithStatus>;
};
type IoRestorecommerceOstorageObjectResponsePayload = {
    __typename?: 'IoRestorecommerceOstorageObjectResponsePayload';
    bucket?: Maybe<Scalars['String']>;
    key?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    object?: Maybe<Scalars['TodoScalar']>;
    options?: Maybe<IoRestorecommerceOstorageOptions>;
    url?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOstorageObjectResponsePayloadWithStatus = {
    __typename?: 'IoRestorecommerceOstorageObjectResponsePayloadWithStatus';
    payload?: Maybe<IoRestorecommerceOstorageObjectResponsePayload>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageObjectsDataWithPayloadStatus = {
    __typename?: 'IoRestorecommerceOstorageObjectsDataWithPayloadStatus';
    payload?: Maybe<IoRestorecommerceOstorageObjectData>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageOptions = {
    __typename?: 'IoRestorecommerceOstorageOptions';
    contentDisposition?: Maybe<Scalars['String']>;
    contentLanguage?: Maybe<Scalars['String']>;
    contentType?: Maybe<Scalars['String']>;
    data?: Maybe<GoogleProtobufAny>;
    encoding?: Maybe<Scalars['String']>;
    length?: Maybe<Scalars['Int']>;
    md5?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    version?: Maybe<Scalars['String']>;
};
type IoRestorecommerceOstoragePutResponse = {
    __typename?: 'IoRestorecommerceOstoragePutResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    response?: Maybe<IoRestorecommerceOstoragePutResponseWithPayloadStatus>;
};
type IoRestorecommerceOstoragePutResponseWithPayloadStatus = {
    __typename?: 'IoRestorecommerceOstoragePutResponseWithPayloadStatus';
    payload?: Maybe<IoRestorecommerceOstorageResponse>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceOstorageResponse = {
    __typename?: 'IoRestorecommerceOstorageResponse';
    bucket?: Maybe<Scalars['String']>;
    key?: Maybe<Scalars['String']>;
    length?: Maybe<Scalars['Int']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    url?: Maybe<Scalars['String']>;
};
type IoRestorecommercePaymentMethodPaymentMethod = {
    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
    data?: Maybe<GoogleProtobufAny>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    paymentMethod?: Maybe<IoRestorecommercePaymentMethodPaymentMethodEnum>;
    transferType?: Maybe<IoRestorecommercePaymentMethodTransferTypeEnum>;
};
declare enum IoRestorecommercePaymentMethodPaymentMethodEnum {
    DirectDebit = "DIRECT_DEBIT",
    Paypal = "PAYPAL",
    WireTransfer = "WIRE_TRANSFER"
}
declare enum IoRestorecommercePaymentMethodTransferTypeEnum {
    Both = "BOTH",
    Receive = "RECEIVE",
    Send = "SEND"
}
type IoRestorecommercePaymentPaymentPayload = {
    __typename?: 'IoRestorecommercePaymentPaymentPayload';
    executedOn?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
};
type IoRestorecommercePaymentPaymentPayloadStatus = {
    __typename?: 'IoRestorecommercePaymentPaymentPayloadStatus';
    payload?: Maybe<IoRestorecommercePaymentPaymentPayload>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommercePaymentPaymentResponse = {
    __typename?: 'IoRestorecommercePaymentPaymentResponse';
    item?: Maybe<IoRestorecommercePaymentPaymentPayloadStatus>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
declare enum IoRestorecommercePaymentProvider {
    Adyen = "Adyen",
    AuthorizeNet = "AuthorizeNet",
    AuthorizeNetCim = "AuthorizeNetCIM",
    AxcessMs = "AxcessMS",
    BbsNetaxept = "BBSNetaxept",
    Balanced = "Balanced",
    BamboraAsiaPacific = "BamboraAsiaPacific",
    BankFrick = "BankFrick",
    Banwire = "Banwire",
    BarclaysePdqExtraPlus = "BarclaysePDQExtraPlus",
    Be2Bill = "Be2Bill",
    Beanstreamcom = "Beanstreamcom",
    BluePay = "BluePay",
    Borgun = "Borgun",
    Braintree = "Braintree",
    BridgePay = "BridgePay",
    CamsCentralAccountManagementSystem = "CAMSCentralAccountManagementSystem",
    CardSave = "CardSave",
    CardStream = "CardStream",
    Cardknox = "Cardknox",
    Cashnet = "Cashnet",
    Cecabank = "Cecabank",
    Cenpos = "Cenpos",
    Checkoutcom = "Checkoutcom",
    Clearhaus = "Clearhaus",
    Commercegate = "Commercegate",
    Conekta = "Conekta",
    CyberSource = "CyberSource",
    Dibs = "DIBS",
    DataCash = "DataCash",
    EvoCanada = "EVOCanada",
    Efsnet = "Efsnet",
    ElavonMyVirtualMerchant = "ElavonMyVirtualMerchant",
    Exact = "Exact",
    Ezic = "Ezic",
    FatZebra = "FatZebra",
    FederatedCanada = "FederatedCanada",
    FinansbankWebPos = "FinansbankWebPOS",
    FirstDataGlobalGatewaye4 = "FirstDataGlobalGatewaye4",
    FirstGiving = "FirstGiving",
    Flo2Cash = "Flo2Cash",
    GarantiSanalPos = "GarantiSanalPOS",
    GlobalTransport = "GlobalTransport",
    Hdfc = "HDFC",
    HeartlandPaymentSystems = "HeartlandPaymentSystems",
    Ipp = "IPP",
    InspireCommerce = "InspireCommerce",
    InstaPay = "InstaPay",
    Iridium = "Iridium",
    JetPay = "JetPay",
    Komoju = "Komoju",
    LinkPoint = "LinkPoint",
    LitleCo = "LitleCo",
    Monei = "MONEI",
    MasterCardInternetGatewayServiceMiGs = "MasterCardInternetGatewayServiceMiGS",
    MerchantOneGateway = "MerchantOneGateway",
    MerchantWare = "MerchantWARE",
    MerchantWarrior = "MerchantWarrior",
    MerchanteSolutions = "MerchanteSolutions",
    Mercury = "Mercury",
    MetricsGlobal = "MetricsGlobal",
    ModernPayments = "ModernPayments",
    Moneris = "Moneris",
    MoneyMovers = "MoneyMovers",
    NabTransact = "NABTransact",
    NeLiXTransaX = "NELiXTransaX",
    NetpayGateway = "NETPAYGateway",
    NeTbilling = "NETbilling",
    Nmi = "NMI",
    NoProvider = "NO_PROVIDER",
    NetRegistry = "NetRegistry",
    Ogone = "Ogone",
    Omise = "Omise",
    Openpay = "Openpay",
    OptimalPayments = "OptimalPayments",
    OrbitalPaymentech = "OrbitalPaymentech",
    Paymill = "PAYMILL",
    PslPaymentSolutions = "PSLPaymentSolutions",
    Pagarme = "Pagarme",
    PagoFacil = "PagoFacil",
    PayConex = "PayConex",
    PayGatePayXml = "PayGatePayXML",
    PayHub = "PayHub",
    PayJunction = "PayJunction",
    PayPalExpressCheckout = "PayPalExpressCheckout",
    PayPalExpressCheckoutUk = "PayPalExpressCheckoutUK",
    PayPalExpressCheckoutforDigitalGoods = "PayPalExpressCheckoutforDigitalGoods",
    PayPalPayflowPro = "PayPalPayflowPro",
    PayPalPaymentsProUk = "PayPalPaymentsProUK",
    PayPalPaymentsProUs = "PayPalPaymentsProUS",
    PayPalWebsitePaymentsProCa = "PayPalWebsitePaymentsProCA",
    PaySecure = "PaySecure",
    PayUIndia = "PayUIndia",
    PayWay = "PayWay",
    PayboxDirect = "PayboxDirect",
    Payeezy = "Payeezy",
    Payex = "Payex",
    PaymentExpress = "PaymentExpress",
    Payscout = "Payscout",
    Paystation = "Paystation",
    PinPayments = "PinPayments",
    PlugnPay = "PlugnPay",
    Psigate = "Psigate",
    QuantumGateway = "QuantumGateway",
    QuickBooksMerchantServices = "QuickBooksMerchantServices",
    QuickBooksPayments = "QuickBooksPayments",
    QuickPay = "QuickPay",
    Qvalent = "Qvalent",
    Raven = "Raven",
    Realex = "Realex",
    Redsys = "Redsys",
    S5 = "S5",
    SagePay = "SagePay",
    SagePaymentSolutions = "SagePaymentSolutions",
    SallieMae = "SallieMae",
    SecureNet = "SecureNet",
    SecurePay = "SecurePay",
    SecurePayTech = "SecurePayTech",
    SecurionPay = "SecurionPay",
    SkipJack = "SkipJack",
    SoEasyPay = "SoEasyPay",
    Spreedly = "Spreedly",
    Stripe = "Stripe",
    Swipe = "Swipe",
    Tns = "TNS",
    TransFirst = "TransFirst",
    TransactPro = "TransactPro",
    Transnational = "Transnational",
    Trexle = "Trexle",
    TrustCommerce = "TrustCommerce",
    UsAePay = "USAePay",
    VancoPaymentSolutions = "VancoPaymentSolutions",
    Verifi = "Verifi",
    ViaKlix = "ViaKLIX",
    WePay = "WePay",
    WebPay = "WebPay",
    Wirecard = "Wirecard",
    WorldpayGlobal = "WorldpayGlobal",
    WorldpayOnline = "WorldpayOnline",
    WorldpayUs = "WorldpayUS",
    EPay = "ePay",
    EWay = "eWAY",
    EWayRapid = "eWAYRapid",
    IAtsPayments = "iATSPayments",
    ITransact = "iTransact",
    MaxiPago = "maxiPago",
    StPayGatewayNet = "stPayGatewayNet"
}
type IoRestorecommercePaymentSetupPayload = {
    __typename?: 'IoRestorecommercePaymentSetupPayload';
    confirmInitiationUrl?: Maybe<Scalars['String']>;
    initiatedOn?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
};
type IoRestorecommercePaymentSetupPayloadStatus = {
    __typename?: 'IoRestorecommercePaymentSetupPayloadStatus';
    payload?: Maybe<IoRestorecommercePaymentSetupPayload>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommercePaymentSetupResponse = {
    __typename?: 'IoRestorecommercePaymentSetupResponse';
    item?: Maybe<IoRestorecommercePaymentSetupPayloadStatus>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
type IoRestorecommercePolicyPolicy = {
    __typename?: 'IoRestorecommercePolicyPolicy';
    combiningAlgorithm?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    effect?: Maybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    rules?: Maybe<Array<Scalars['String']>>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommercePolicyPolicyListResponse = {
    __typename?: 'IoRestorecommercePolicyPolicyListResponse';
    items?: Maybe<Array<IoRestorecommercePolicyPolicyResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommercePolicyPolicyRq = {
    __typename?: 'IoRestorecommercePolicyPolicyRQ';
    combiningAlgorithm?: Maybe<Scalars['String']>;
    effect?: Maybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: Maybe<Scalars['Boolean']>;
    hasRules?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    rules?: Maybe<Array<IoRestorecommerceRuleRuleRq>>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommercePolicyPolicyResponse = {
    __typename?: 'IoRestorecommercePolicyPolicyResponse';
    payload?: Maybe<IoRestorecommercePolicyPolicy>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommercePolicySetPolicySet = {
    __typename?: 'IoRestorecommercePolicySetPolicySet';
    combiningAlgorithm?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    policies?: Maybe<Array<Scalars['String']>>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommercePolicySetPolicySetListResponse = {
    __typename?: 'IoRestorecommercePolicySetPolicySetListResponse';
    items?: Maybe<Array<IoRestorecommercePolicySetPolicySetResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommercePolicySetPolicySetRq = {
    __typename?: 'IoRestorecommercePolicySetPolicySetRQ';
    combiningAlgorithm?: Maybe<Scalars['String']>;
    effect?: Maybe<IoRestorecommerceRuleEffect>;
    id?: Maybe<Scalars['String']>;
    policies?: Maybe<Array<IoRestorecommercePolicyPolicyRq>>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommercePolicySetPolicySetResponse = {
    __typename?: 'IoRestorecommercePolicySetPolicySetResponse';
    payload?: Maybe<IoRestorecommercePolicySetPolicySet>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommercePriceGroupPriceGroup = {
    __typename?: 'IoRestorecommercePriceGroupPriceGroup';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
};
type IoRestorecommercePriceGroupPriceGroupListResponse = {
    __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
    items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommercePriceGroupPriceGroupResponse = {
    __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
    payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommercePricePrice = {
    __typename?: 'IoRestorecommercePricePrice';
    currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
    currencyId?: Maybe<Scalars['String']>;
    regularPrice?: Maybe<Scalars['Float']>;
    sale?: Maybe<Scalars['Boolean']>;
    salePrice?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceProductAssociation = {
    __typename?: 'IoRestorecommerceProductAssociation';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    data?: Maybe<GoogleProtobufAny>;
    product?: Maybe<IoRestorecommerceProductProduct>;
    productId?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Scalars['String']>>;
    type?: Maybe<IoRestorecommerceProductAssociationType>;
    variantId?: Maybe<Scalars['String']>;
};
declare enum IoRestorecommerceProductAssociationType {
    Accessory = "ACCESSORY",
    Miscellaneous = "MISCELLANEOUS",
    Recommendation = "RECOMMENDATION"
}
type IoRestorecommerceProductBundle = {
    __typename?: 'IoRestorecommerceProductBundle';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    description?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    name?: Maybe<Scalars['String']>;
    prePackaged?: Maybe<IoRestorecommerceProductPackage>;
    price?: Maybe<IoRestorecommercePricePrice>;
    products?: Maybe<Array<IoRestorecommerceProductBundleProduct>>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validTo?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommerceProductBundleProduct = {
    __typename?: 'IoRestorecommerceProductBundleProduct';
    priceRatio?: Maybe<Scalars['Float']>;
    product?: Maybe<IoRestorecommerceProductProduct>;
    productId?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Int']>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceProductCategoryParent = {
    __typename?: 'IoRestorecommerceProductCategoryParent';
    parentId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceProductCategoryProductCategory = {
    __typename?: 'IoRestorecommerceProductCategoryProductCategory';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    image?: Maybe<IoRestorecommerceImageImage>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    parent?: Maybe<IoRestorecommerceProductCategoryParent>;
    priceGroup?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
    priceGroupId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceProductCategoryProductCategoryListResponse = {
    __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
    items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceProductCategoryProductCategoryResponse = {
    __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
    payload?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceProductIndividualProduct = {
    __typename?: 'IoRestorecommerceProductIndividualProduct';
    category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
    categoryId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    gtin?: Maybe<Scalars['String']>;
    manufacturer?: Maybe<IoRestorecommerceManufacturerManufacturer>;
    manufacturerId?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    originCountryId?: Maybe<Scalars['String']>;
    origin_country?: Maybe<IoRestorecommerceCountryCountry>;
    physical?: Maybe<IoRestorecommerceProductPhysicalProduct>;
    prototype?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
    prototypeId?: Maybe<Scalars['String']>;
    service?: Maybe<IoRestorecommerceProductServiceProduct>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    virtual?: Maybe<IoRestorecommerceProductVirtualProduct>;
};
type IoRestorecommerceProductIndividualProductVariant = {
    __typename?: 'IoRestorecommerceProductIndividualProductVariant';
    active?: Maybe<Scalars['Boolean']>;
    associations?: Maybe<Array<IoRestorecommerceProductAssociation>>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
    categoryId?: Maybe<Scalars['String']>;
    data?: Maybe<GoogleProtobufAny>;
    description?: Maybe<Scalars['String']>;
    files?: Maybe<Array<IoRestorecommerceFileFile>>;
    gtin?: Maybe<Scalars['String']>;
    hsCode?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    manufacturer?: Maybe<IoRestorecommerceManufacturerManufacturer>;
    manufacturerId?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    originCountryId?: Maybe<Scalars['String']>;
    origin_country?: Maybe<IoRestorecommerceCountryCountry>;
    package?: Maybe<IoRestorecommerceProductPackage>;
    price?: Maybe<IoRestorecommercePricePrice>;
    properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
    prototype?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
    prototypeId?: Maybe<Scalars['String']>;
    shopIds?: Maybe<Array<Scalars['String']>>;
    shops?: Maybe<Array<IoRestorecommerceShopShop>>;
    stockKeepingUnit?: Maybe<Scalars['String']>;
    stockLevel?: Maybe<Scalars['Int']>;
    tags?: Maybe<Array<Scalars['String']>>;
    taricCode?: Maybe<Scalars['String']>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validTo?: Maybe<Scalars['DateTime']>;
    variantId?: Maybe<Scalars['String']>;
};
type IoRestorecommerceProductIndividualProductVariantListResponse = {
    __typename?: 'IoRestorecommerceProductIndividualProductVariantListResponse';
    items?: Maybe<Array<IoRestorecommerceProductIndividualProductVariantResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    session?: Maybe<IoRestorecommerceProductSession>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceProductIndividualProductVariantResponse = {
    __typename?: 'IoRestorecommerceProductIndividualProductVariantResponse';
    payload?: Maybe<IoRestorecommerceProductIndividualProductVariant>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceProductPackage = {
    __typename?: 'IoRestorecommerceProductPackage';
    rotatable?: Maybe<Scalars['Boolean']>;
    sizeInCm?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
    weightInKg?: Maybe<Scalars['Float']>;
};
type IoRestorecommerceProductPhysicalProduct = {
    __typename?: 'IoRestorecommerceProductPhysicalProduct';
    templates?: Maybe<Array<IoRestorecommerceProductPhysicalVariant>>;
    variants?: Maybe<Array<IoRestorecommerceProductPhysicalVariant>>;
};
type IoRestorecommerceProductPhysicalVariant = {
    __typename?: 'IoRestorecommerceProductPhysicalVariant';
    active?: Maybe<Scalars['Boolean']>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    description?: Maybe<Scalars['String']>;
    exportDescription?: Maybe<Scalars['String']>;
    files?: Maybe<Array<IoRestorecommerceFileFile>>;
    hsCode?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    name?: Maybe<Scalars['String']>;
    package?: Maybe<IoRestorecommerceProductPackage>;
    parentVariantId?: Maybe<Scalars['String']>;
    price?: Maybe<IoRestorecommercePricePrice>;
    properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: Maybe<Scalars['String']>;
    stockLevel?: Maybe<Scalars['Int']>;
    taricCode?: Maybe<Scalars['String']>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validTo?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommerceProductProduct = {
    __typename?: 'IoRestorecommerceProductProduct';
    active?: Maybe<Scalars['Boolean']>;
    associations?: Maybe<Array<IoRestorecommerceProductAssociation>>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    bundle?: Maybe<IoRestorecommerceProductBundle>;
    data?: Maybe<GoogleProtobufAny>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    product?: Maybe<IoRestorecommerceProductIndividualProduct>;
    shopIds?: Maybe<Array<Scalars['String']>>;
    shops?: Maybe<Array<IoRestorecommerceShopShop>>;
    tags?: Maybe<Array<Scalars['String']>>;
};
type IoRestorecommerceProductProductListResponse = {
    __typename?: 'IoRestorecommerceProductProductListResponse';
    items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceProductProductResponse = {
    __typename?: 'IoRestorecommerceProductProductResponse';
    payload?: Maybe<IoRestorecommerceProductProduct>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceProductPrototypeProductPrototype = {
    __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
    category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
    categoryId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
type IoRestorecommerceProductPrototypeProductPrototypeListResponse = {
    __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
    items?: Maybe<Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceProductPrototypeProductPrototypeResponse = {
    __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
    payload?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceProductServiceProduct = {
    __typename?: 'IoRestorecommerceProductServiceProduct';
    templates?: Maybe<Array<IoRestorecommerceProductServiceVariant>>;
    variants?: Maybe<Array<IoRestorecommerceProductServiceVariant>>;
};
type IoRestorecommerceProductServiceVariant = {
    __typename?: 'IoRestorecommerceProductServiceVariant';
    active?: Maybe<Scalars['Boolean']>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    description?: Maybe<Scalars['String']>;
    files?: Maybe<Array<IoRestorecommerceFileFile>>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    name?: Maybe<Scalars['String']>;
    parentVariantId?: Maybe<Scalars['String']>;
    price?: Maybe<IoRestorecommercePricePrice>;
    properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: Maybe<Scalars['String']>;
    stockLevel?: Maybe<Scalars['Int']>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validTo?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommerceProductSession = {
    __typename?: 'IoRestorecommerceProductSession';
    from?: Maybe<Scalars['DateTime']>;
    id?: Maybe<Scalars['String']>;
    to?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommerceProductVirtualProduct = {
    __typename?: 'IoRestorecommerceProductVirtualProduct';
    templates?: Maybe<Array<IoRestorecommerceProductVirtualVariant>>;
    variants?: Maybe<Array<IoRestorecommerceProductVirtualVariant>>;
};
type IoRestorecommerceProductVirtualVariant = {
    __typename?: 'IoRestorecommerceProductVirtualVariant';
    active?: Maybe<Scalars['Boolean']>;
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    description?: Maybe<Scalars['String']>;
    files?: Maybe<Array<IoRestorecommerceFileFile>>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    name?: Maybe<Scalars['String']>;
    parentVariantId?: Maybe<Scalars['String']>;
    price?: Maybe<IoRestorecommercePricePrice>;
    properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
    stockKeepingUnit?: Maybe<Scalars['String']>;
    stockLevel?: Maybe<Scalars['Int']>;
    taxIds?: Maybe<Array<Scalars['String']>>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validTo?: Maybe<Scalars['DateTime']>;
};
type IoRestorecommercePropertyProperty = {
    __typename?: 'IoRestorecommercePropertyProperty';
    id?: Maybe<Scalars['String']>;
    unitCode?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
type IoRestorecommerceReferenceReference = {
    __typename?: 'IoRestorecommerceReferenceReference';
    instanceId?: Maybe<Scalars['String']>;
    instanceType?: Maybe<Scalars['String']>;
};
type IoRestorecommerceResourcebaseDeleteResponse = {
    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};
declare enum IoRestorecommerceResourcebaseFilterOpOperator {
    And = "and",
    Or = "or"
}
declare enum IoRestorecommerceResourcebaseFilterOperation {
    Eq = "eq",
    Gt = "gt",
    Gte = "gte",
    ILike = "iLike",
    In = "in",
    IsEmpty = "isEmpty",
    Lt = "lt",
    Lte = "lte",
    Neq = "neq"
}
declare enum IoRestorecommerceResourcebaseFilterValueType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Date = "DATE",
    Number = "NUMBER",
    String = "STRING"
}
declare enum IoRestorecommerceResourcebaseSortSortOrder {
    Ascending = "ASCENDING",
    Descending = "DESCENDING",
    Unsorted = "UNSORTED"
}
type IoRestorecommerceRoleRole = {
    __typename?: 'IoRestorecommerceRoleRole';
    assignableByRoles?: Maybe<Array<Scalars['String']>>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
};
type IoRestorecommerceRoleRoleListResponse = {
    __typename?: 'IoRestorecommerceRoleRoleListResponse';
    items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceRoleRoleResponse = {
    __typename?: 'IoRestorecommerceRoleRoleResponse';
    payload?: Maybe<IoRestorecommerceRoleRole>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceRuleContextQuery = {
    __typename?: 'IoRestorecommerceRuleContextQuery';
    filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
    query?: Maybe<Scalars['String']>;
};
declare enum IoRestorecommerceRuleEffect {
    Deny = "DENY",
    Permit = "PERMIT"
}
type IoRestorecommerceRuleRule = {
    __typename?: 'IoRestorecommerceRuleRule';
    condition?: Maybe<Scalars['String']>;
    contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
    description?: Maybe<Scalars['String']>;
    effect?: Maybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommerceRuleRuleListResponse = {
    __typename?: 'IoRestorecommerceRuleRuleListResponse';
    items?: Maybe<Array<IoRestorecommerceRuleRuleResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceRuleRuleRq = {
    __typename?: 'IoRestorecommerceRuleRuleRQ';
    condition?: Maybe<Scalars['String']>;
    contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
    effect?: Maybe<IoRestorecommerceRuleEffect>;
    evaluationCacheable?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    target?: Maybe<IoRestorecommerceRuleTarget>;
};
type IoRestorecommerceRuleRuleResponse = {
    __typename?: 'IoRestorecommerceRuleRuleResponse';
    payload?: Maybe<IoRestorecommerceRuleRule>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceRuleTarget = {
    __typename?: 'IoRestorecommerceRuleTarget';
    actions?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    resources?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    subjects?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};
type IoRestorecommerceSettingSetting = {
    __typename?: 'IoRestorecommerceSettingSetting';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    settings?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};
type IoRestorecommerceSettingSettingListResponse = {
    __typename?: 'IoRestorecommerceSettingSettingListResponse';
    items?: Maybe<Array<IoRestorecommerceSettingSettingResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceSettingSettingResponse = {
    __typename?: 'IoRestorecommerceSettingSettingResponse';
    payload?: Maybe<IoRestorecommerceSettingSetting>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceShopShop = {
    __typename?: 'IoRestorecommerceShopShop';
    description?: Maybe<Scalars['String']>;
    domains?: Maybe<Array<Scalars['String']>>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
    organizationId?: Maybe<Scalars['String']>;
    setting?: Maybe<IoRestorecommerceSettingSetting>;
    settingId?: Maybe<Scalars['String']>;
    shopNumber?: Maybe<Scalars['String']>;
    templateIds?: Maybe<Array<Scalars['String']>>;
    templates?: Maybe<Array<IoRestorecommerceTemplateTemplate>>;
};
type IoRestorecommerceShopShopListResponse = {
    __typename?: 'IoRestorecommerceShopShopListResponse';
    items?: Maybe<Array<IoRestorecommerceShopShopResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceShopShopResponse = {
    __typename?: 'IoRestorecommerceShopShopResponse';
    payload?: Maybe<IoRestorecommerceShopShop>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceStatusOperationStatus = {
    __typename?: 'IoRestorecommerceStatusOperationStatus';
    code?: Maybe<Scalars['Int']>;
    message?: Maybe<Scalars['String']>;
};
type IoRestorecommerceStatusOperationStatusObj = {
    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
type IoRestorecommerceStatusStatus = {
    __typename?: 'IoRestorecommerceStatusStatus';
    code?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
};
type IoRestorecommerceStatusStatusListResponse = {
    __typename?: 'IoRestorecommerceStatusStatusListResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};
declare enum IoRestorecommerceTaxRoundMode {
    Ceil = "CEIL",
    Floor = "FLOOR",
    Half = "HALF"
}
type IoRestorecommerceTaxTax = {
    __typename?: 'IoRestorecommerceTaxTax';
    abbreviation?: Maybe<Scalars['String']>;
    country?: Maybe<IoRestorecommerceCountryCountry>;
    countryId?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    rate?: Maybe<Scalars['Float']>;
    roundMode?: Maybe<IoRestorecommerceTaxRoundMode>;
    type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
    typeId?: Maybe<Scalars['String']>;
    variant?: Maybe<Scalars['String']>;
};
type IoRestorecommerceTaxTaxListResponse = {
    __typename?: 'IoRestorecommerceTaxTaxListResponse';
    items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceTaxTaxResponse = {
    __typename?: 'IoRestorecommerceTaxTaxResponse';
    payload?: Maybe<IoRestorecommerceTaxTax>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceTaxTypeTaxType = {
    __typename?: 'IoRestorecommerceTaxTypeTaxType';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    type?: Maybe<Scalars['String']>;
};
type IoRestorecommerceTaxTypeTaxTypeListResponse = {
    __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
    items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceTaxTypeTaxTypeResponse = {
    __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
    payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceTemplateLocalization = {
    __typename?: 'IoRestorecommerceTemplateLocalization';
    l10n?: Maybe<IoRestorecommerceFileFile>;
    locales?: Maybe<Array<Scalars['String']>>;
};
type IoRestorecommerceTemplateTemplate = {
    __typename?: 'IoRestorecommerceTemplateTemplate';
    attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    bodies?: Maybe<Array<IoRestorecommerceFileFile>>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<IoRestorecommerceImageImage>>;
    layouts?: Maybe<Array<IoRestorecommerceFileFile>>;
    localizations?: Maybe<Array<IoRestorecommerceTemplateLocalization>>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    ordinal?: Maybe<Scalars['Int']>;
    section?: Maybe<Scalars['String']>;
    styles?: Maybe<Array<IoRestorecommerceFileFile>>;
    useCase?: Maybe<Scalars['String']>;
};
type IoRestorecommerceTemplateTemplateListResponse = {
    __typename?: 'IoRestorecommerceTemplateTemplateListResponse';
    items?: Maybe<Array<IoRestorecommerceTemplateTemplateResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceTemplateTemplateResponse = {
    __typename?: 'IoRestorecommerceTemplateTemplateResponse';
    payload?: Maybe<IoRestorecommerceTemplateTemplate>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceTimezoneTimezone = {
    __typename?: 'IoRestorecommerceTimezoneTimezone';
    abbreviationDst?: Maybe<Scalars['String']>;
    abbreviationStd?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    offsetDst?: Maybe<IoRestorecommerceTimezoneTimezoneOffset>;
    offsetStd?: Maybe<IoRestorecommerceTimezoneTimezoneOffset>;
    value?: Maybe<Scalars['String']>;
};
type IoRestorecommerceTimezoneTimezoneListResponse = {
    __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
    items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceTimezoneTimezoneOffset = {
    __typename?: 'IoRestorecommerceTimezoneTimezoneOffset';
    hours?: Maybe<Scalars['Int']>;
    minutes?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceTimezoneTimezoneResponse = {
    __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
    payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
declare enum IoRestorecommerceUnitCodeSector {
    Acoustics = "ACOUSTICS",
    AtomicAndNuclearPhysics = "ATOMIC_AND_NUCLEAR_PHYSICS",
    CharacteristicNumbers = "CHARACTERISTIC_NUMBERS",
    ElectricityAndMagnetism = "ELECTRICITY_AND_MAGNETISM",
    Heat = "HEAT",
    LightAndRelatedElectromagneticRadiations = "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS",
    Mechanics = "MECHANICS",
    Miscellaneous = "MISCELLANEOUS",
    NuclearReactionsAndIonizingRadiations = "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS",
    PeriodicAndRelatedPhases = "PERIODIC_AND_RELATED_PHASES",
    PhysicalChemistryAndMolecularPhysics = "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS",
    SolidStatePhysics = "SOLID_STATE_PHYSICS",
    SpaceAndTime = "SPACE_AND_TIME",
    Unknown = "UNKNOWN"
}
declare enum IoRestorecommerceUnitCodeStatusCode {
    Added = "ADDED",
    ChangedCharacteristic = "CHANGED_CHARACTERISTIC",
    ChangedName = "CHANGED_NAME",
    Deprecated = "DEPRECATED",
    MarkedAsDeleted = "MARKED_AS_DELETED",
    Reinstated = "REINSTATED"
}
type IoRestorecommerceUnitCodeUnitCode = {
    __typename?: 'IoRestorecommerceUnitCodeUnitCode';
    commonCode?: Maybe<Scalars['String']>;
    conversionFactor?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    groupId?: Maybe<Scalars['String']>;
    groupNumber?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    levelCategory?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['String']>;
    sector?: Maybe<IoRestorecommerceUnitCodeSector>;
    status?: Maybe<IoRestorecommerceUnitCodeStatusCode>;
    symbol?: Maybe<Scalars['String']>;
};
type IoRestorecommerceUnitCodeUnitCodeListResponse = {
    __typename?: 'IoRestorecommerceUnitCodeUnitCodeListResponse';
    items?: Maybe<Array<IoRestorecommerceUnitCodeUnitCodeResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceUnitCodeUnitCodeResponse = {
    __typename?: 'IoRestorecommerceUnitCodeUnitCodeResponse';
    payload?: Maybe<IoRestorecommerceUnitCodeUnitCode>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceUserCreateBackupTotpCodesResponse = {
    __typename?: 'IoRestorecommerceUserCreateBackupTOTPCodesResponse';
    backupCodes?: Maybe<Array<Scalars['String']>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
type IoRestorecommerceUserDeleteUsersByOrgResponse = {
    __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    userIds?: Maybe<Array<Scalars['String']>>;
};
type IoRestorecommerceUserLoginResponse = {
    __typename?: 'IoRestorecommerceUserLoginResponse';
    payload?: Maybe<IoRestorecommerceUserUser>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
    totpSessionToken?: Maybe<Scalars['String']>;
};
type IoRestorecommerceUserMfaStatusResponse = {
    __typename?: 'IoRestorecommerceUserMfaStatusResponse';
    hasBackupCodes?: Maybe<Scalars['Boolean']>;
    hasTotp?: Maybe<Scalars['Boolean']>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};
type IoRestorecommerceUserSetupTotpResponse = {
    __typename?: 'IoRestorecommerceUserSetupTOTPResponse';
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totpSecret?: Maybe<Scalars['String']>;
};
type IoRestorecommerceUserTenantResponse = {
    __typename?: 'IoRestorecommerceUserTenantResponse';
    token?: Maybe<Scalars['String']>;
};
type IoRestorecommerceUserUser = {
    __typename?: 'IoRestorecommerceUserUser';
    activationCode?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    data?: Maybe<GoogleProtobufAny>;
    defaultScope?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    guest?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    image?: Maybe<IoRestorecommerceImageImage>;
    invite?: Maybe<Scalars['Boolean']>;
    invitedByUserFirstName?: Maybe<Scalars['String']>;
    invitedByUserLastName?: Maybe<Scalars['String']>;
    invitedByUserName?: Maybe<Scalars['String']>;
    lastAccess?: Maybe<Scalars['DateTime']>;
    lastName?: Maybe<Scalars['String']>;
    locale?: Maybe<IoRestorecommerceLocaleLocale>;
    localeId?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    newEmail?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
    passwordHashHistory?: Maybe<Array<Scalars['String']>>;
    properties?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
    timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
    timezoneId?: Maybe<Scalars['String']>;
    tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
    totpRecoveryCodes?: Maybe<Array<Scalars['String']>>;
    totpSecret?: Maybe<Scalars['String']>;
    totpSecretProcessing?: Maybe<Scalars['String']>;
    totpSessionTokens?: Maybe<Array<Scalars['String']>>;
    userType?: Maybe<IoRestorecommerceUserUserType>;
};
type IoRestorecommerceUserUserListResponse = {
    __typename?: 'IoRestorecommerceUserUserListResponse';
    items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceUserUserListWithRoleResponse = {
    __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
    items?: Maybe<Array<IoRestorecommerceUserUserRoleResponse>>;
    operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
    totalCount?: Maybe<Scalars['Int']>;
};
type IoRestorecommerceUserUserResponse = {
    __typename?: 'IoRestorecommerceUserUserResponse';
    payload?: Maybe<IoRestorecommerceUserUser>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
type IoRestorecommerceUserUserRole = {
    __typename?: 'IoRestorecommerceUserUserRole';
    activationCode?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    data?: Maybe<GoogleProtobufAny>;
    defaultScope?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    guest?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['String']>;
    image?: Maybe<IoRestorecommerceImageImage>;
    invite?: Maybe<Scalars['Boolean']>;
    invitedByUserFirstName?: Maybe<Scalars['String']>;
    invitedByUserLastName?: Maybe<Scalars['String']>;
    invitedByUserName?: Maybe<Scalars['String']>;
    lastAccess?: Maybe<Scalars['DateTime']>;
    lastName?: Maybe<Scalars['String']>;
    locale?: Maybe<IoRestorecommerceLocaleLocale>;
    localeId?: Maybe<Scalars['String']>;
    meta?: Maybe<IoRestorecommerceMetaMeta>;
    name?: Maybe<Scalars['String']>;
    newEmail?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
    properties?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
    roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
    roles?: Maybe<Array<IoRestorecommerceRoleRole>>;
    timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
    timezoneId?: Maybe<Scalars['String']>;
    tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
    userType?: Maybe<IoRestorecommerceUserUserType>;
};
type IoRestorecommerceUserUserRoleResponse = {
    __typename?: 'IoRestorecommerceUserUserRoleResponse';
    payload?: Maybe<IoRestorecommerceUserUserRole>;
    status?: Maybe<IoRestorecommerceStatusStatus>;
};
declare enum IoRestorecommerceUserUserType {
    Guest = "GUEST",
    IndividualUser = "INDIVIDUAL_USER",
    OrgUser = "ORG_USER",
    TechnicalUser = "TECHNICAL_USER"
}
declare enum ModeType {
    Create = "CREATE",
    Update = "UPDATE",
    Upsert = "UPSERT"
}
type Mutation = {
    __typename?: 'Mutation';
    access_control: AccessControlMutation;
    catalog: CatalogMutation;
    fulfillment: FulfillmentMutation;
    identity: IdentityMutation;
    invoicing: InvoicingMutation;
    master_data: ResourceMutation;
    notification: NotificationMutation;
    ordering: OrderingMutation;
    ostorage: OstorageMutation;
    payment: PaymentMutation;
    scheduling: SchedulingMutation;
};
type NotificationMutation = {
    __typename?: 'NotificationMutation';
    notification: NotificationNotificationMutation;
};
type NotificationNotificationMutation = {
    __typename?: 'NotificationNotificationMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
};
type NotificationNotificationMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type NotificationNotificationMutationMutateArgs = {
    input: IIoRestorecommerceNotificationNotificationList;
};
type NotificationNotificationQuery = {
    __typename?: 'NotificationNotificationQuery';
    Read?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
};
type NotificationNotificationQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type NotificationQuery = {
    __typename?: 'NotificationQuery';
    notification: NotificationNotificationQuery;
};
type OrderingMutation = {
    __typename?: 'OrderingMutation';
    order: OrderingOrderMutation;
};
type OrderingOrderMutation = {
    __typename?: 'OrderingOrderMutation';
    Cancel?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
    CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
    CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
    Notify?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
    Submit?: Maybe<ProtoIoRestorecommerceOrderOrderSubmitListResponse>;
    Withdraw?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};
type OrderingOrderMutationCancelArgs = {
    input: IIoRestorecommerceOrderOrderIdList;
};
type OrderingOrderMutationCreateFulfillmentArgs = {
    input: IIoRestorecommerceOrderFulfillmentRequestList;
};
type OrderingOrderMutationCreateInvoiceArgs = {
    input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
};
type OrderingOrderMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type OrderingOrderMutationMutateArgs = {
    input: IIoRestorecommerceOrderOrderList;
};
type OrderingOrderMutationNotifyArgs = {
    input: IIoRestorecommerceOrderOrderIdList;
};
type OrderingOrderMutationSubmitArgs = {
    input: IIoRestorecommerceOrderOrderList;
};
type OrderingOrderMutationWithdrawArgs = {
    input: IIoRestorecommerceOrderOrderIdList;
};
type OrderingOrderQuery = {
    __typename?: 'OrderingOrderQuery';
    Evaluate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
    EvaluateFulfillment?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
    QueryFulfillmentSolution?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse>;
    Read?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};
type OrderingOrderQueryEvaluateArgs = {
    input: IIoRestorecommerceOrderOrderList;
};
type OrderingOrderQueryEvaluateFulfillmentArgs = {
    input: IIoRestorecommerceOrderOrderList;
};
type OrderingOrderQueryQueryFulfillmentSolutionArgs = {
    input: IIoRestorecommerceOrderFulfillmentRequestList;
};
type OrderingOrderQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type OrderingQuery = {
    __typename?: 'OrderingQuery';
    order: OrderingOrderQuery;
};
type OstorageMutation = {
    __typename?: 'OstorageMutation';
    object: OstorageObjectMutation;
};
type OstorageObjectMutation = {
    __typename?: 'OstorageObjectMutation';
    Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponseList>;
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Move?: Maybe<ProtoIoRestorecommerceOstorageMoveResponseList>;
    Put?: Maybe<ProtoIoRestorecommerceOstoragePutResponse>;
};
type OstorageObjectMutationCopyArgs = {
    input: IIoRestorecommerceOstorageCopyRequestList;
};
type OstorageObjectMutationDeleteArgs = {
    input: IIoRestorecommerceOstorageDeleteRequest;
};
type OstorageObjectMutationMoveArgs = {
    input: IIoRestorecommerceOstorageMoveRequestList;
};
type OstorageObjectMutationPutArgs = {
    input: IIoRestorecommerceOstorageObject;
};
type OstorageObjectQuery = {
    __typename?: 'OstorageObjectQuery';
    Get?: Maybe<ProtoIoRestorecommerceOstorageObjectResponse>;
    List?: Maybe<ProtoIoRestorecommerceOstorageListResponse>;
};
type OstorageObjectQueryGetArgs = {
    input: IIoRestorecommerceOstorageGetRequest;
};
type OstorageObjectQueryListArgs = {
    input: IIoRestorecommerceOstorageListRequest;
};
type OstorageQuery = {
    __typename?: 'OstorageQuery';
    object: OstorageObjectQuery;
};
type PaymentMutation = {
    __typename?: 'PaymentMutation';
    payment: PaymentPaymentMutation;
};
type PaymentPaymentMutation = {
    __typename?: 'PaymentPaymentMutation';
    Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
    Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
    Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
    SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
    SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
};
type PaymentPaymentMutationAuthorizeArgs = {
    input: IIoRestorecommercePaymentPaymentRequest;
};
type PaymentPaymentMutationCaptureArgs = {
    input: IIoRestorecommercePaymentCaptureRequest;
};
type PaymentPaymentMutationPurchaseArgs = {
    input: IIoRestorecommercePaymentPaymentRequest;
};
type PaymentPaymentMutationSetupAuthorizationArgs = {
    input: IIoRestorecommercePaymentSetupRequest;
};
type PaymentPaymentMutationSetupPurchaseArgs = {
    input: IIoRestorecommercePaymentSetupRequest;
};
type ProtoGoogleProtobufAny = {
    __typename?: 'ProtoGoogleProtobufAny';
    details?: Maybe<GoogleProtobufAny>;
};
type ProtoIoRestorecommerceAccessControlResponse = {
    __typename?: 'ProtoIoRestorecommerceAccessControlResponse';
    details?: Maybe<IoRestorecommerceAccessControlResponse>;
};
type ProtoIoRestorecommerceAccessControlReverseQuery = {
    __typename?: 'ProtoIoRestorecommerceAccessControlReverseQuery';
    details?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
};
type ProtoIoRestorecommerceAddressAddressListResponse = {
    __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
    details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
};
type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
    __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
    details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};
type ProtoIoRestorecommerceCommandCommandListResponse = {
    __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
    details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
};
type ProtoIoRestorecommerceContactPointContactPointListResponse = {
    __typename?: 'ProtoIoRestorecommerceContactPointContactPointListResponse';
    details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
};
type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse = {
    __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
    details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};
type ProtoIoRestorecommerceCountryCountryListResponse = {
    __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
    details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
};
type ProtoIoRestorecommerceCredentialCredentialListResponse = {
    __typename?: 'ProtoIoRestorecommerceCredentialCredentialListResponse';
    details?: Maybe<IoRestorecommerceCredentialCredentialListResponse>;
};
type ProtoIoRestorecommerceCurrencyCurrencyListResponse = {
    __typename?: 'ProtoIoRestorecommerceCurrencyCurrencyListResponse';
    details?: Maybe<IoRestorecommerceCurrencyCurrencyListResponse>;
};
type ProtoIoRestorecommerceCustomerCustomerListResponse = {
    __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
    details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
};
type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
    __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
    details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};
type ProtoIoRestorecommerceFulfillmentFulfillmentListResponse = {
    __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
    details?: Maybe<IoRestorecommerceFulfillmentFulfillmentListResponse>;
};
type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
    __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
    details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};
type ProtoIoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse = {
    __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse';
    details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse>;
};
type ProtoIoRestorecommerceInvoiceInvoiceListResponse = {
    __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
    details?: Maybe<IoRestorecommerceInvoiceInvoiceListResponse>;
};
type ProtoIoRestorecommerceInvoiceInvoiceNumberResponse = {
    __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceNumberResponse';
    details?: Maybe<IoRestorecommerceInvoiceInvoiceNumberResponse>;
};
type ProtoIoRestorecommerceJobJobListResponse = {
    __typename?: 'ProtoIoRestorecommerceJobJobListResponse';
    details?: Maybe<IoRestorecommerceJobJobListResponse>;
};
type ProtoIoRestorecommerceLocaleLocaleListResponse = {
    __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
    details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
};
type ProtoIoRestorecommerceLocationLocationListResponse = {
    __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
    details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
};
type ProtoIoRestorecommerceManufacturerManufacturerListResponse = {
    __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
    details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
};
type ProtoIoRestorecommerceNotificationNotificationListResponse = {
    __typename?: 'ProtoIoRestorecommerceNotificationNotificationListResponse';
    details?: Maybe<IoRestorecommerceNotificationNotificationListResponse>;
};
type ProtoIoRestorecommerceOauthExchangeCodeResponse = {
    __typename?: 'ProtoIoRestorecommerceOauthExchangeCodeResponse';
    details?: Maybe<IoRestorecommerceOauthExchangeCodeResponse>;
};
type ProtoIoRestorecommerceOauthGenerateLinksResponse = {
    __typename?: 'ProtoIoRestorecommerceOauthGenerateLinksResponse';
    details?: Maybe<IoRestorecommerceOauthGenerateLinksResponse>;
};
type ProtoIoRestorecommerceOauthGetTokenResponse = {
    __typename?: 'ProtoIoRestorecommerceOauthGetTokenResponse';
    details?: Maybe<IoRestorecommerceOauthGetTokenResponse>;
};
type ProtoIoRestorecommerceOauthServicesResponse = {
    __typename?: 'ProtoIoRestorecommerceOauthServicesResponse';
    details?: Maybe<IoRestorecommerceOauthServicesResponse>;
};
type ProtoIoRestorecommerceOrderOrderListResponse = {
    __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
    details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
};
type ProtoIoRestorecommerceOrderOrderSubmitListResponse = {
    __typename?: 'ProtoIoRestorecommerceOrderOrderSubmitListResponse';
    details?: Maybe<IoRestorecommerceOrderOrderSubmitListResponse>;
};
type ProtoIoRestorecommerceOrganizationOrganizationListResponse = {
    __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
    details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
};
type ProtoIoRestorecommerceOstorageCopyResponseList = {
    __typename?: 'ProtoIoRestorecommerceOstorageCopyResponseList';
    details?: Maybe<IoRestorecommerceOstorageCopyResponseList>;
};
type ProtoIoRestorecommerceOstorageListResponse = {
    __typename?: 'ProtoIoRestorecommerceOstorageListResponse';
    details?: Maybe<IoRestorecommerceOstorageListResponse>;
};
type ProtoIoRestorecommerceOstorageMoveResponseList = {
    __typename?: 'ProtoIoRestorecommerceOstorageMoveResponseList';
    details?: Maybe<IoRestorecommerceOstorageMoveResponseList>;
};
type ProtoIoRestorecommerceOstorageObjectResponse = {
    __typename?: 'ProtoIoRestorecommerceOstorageObjectResponse';
    details?: Maybe<IoRestorecommerceOstorageObjectResponse>;
};
type ProtoIoRestorecommerceOstoragePutResponse = {
    __typename?: 'ProtoIoRestorecommerceOstoragePutResponse';
    details?: Maybe<IoRestorecommerceOstoragePutResponse>;
};
type ProtoIoRestorecommercePaymentPaymentResponse = {
    __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
    details?: Maybe<IoRestorecommercePaymentPaymentResponse>;
};
type ProtoIoRestorecommercePaymentSetupResponse = {
    __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
    details?: Maybe<IoRestorecommercePaymentSetupResponse>;
};
type ProtoIoRestorecommercePolicyPolicyListResponse = {
    __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
    details?: Maybe<IoRestorecommercePolicyPolicyListResponse>;
};
type ProtoIoRestorecommercePolicySetPolicySetListResponse = {
    __typename?: 'ProtoIoRestorecommercePolicySetPolicySetListResponse';
    details?: Maybe<IoRestorecommercePolicySetPolicySetListResponse>;
};
type ProtoIoRestorecommercePriceGroupPriceGroupListResponse = {
    __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
    details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
};
type ProtoIoRestorecommerceProductCategoryProductCategoryListResponse = {
    __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
    details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
};
type ProtoIoRestorecommerceProductIndividualProductVariantListResponse = {
    __typename?: 'ProtoIoRestorecommerceProductIndividualProductVariantListResponse';
    details?: Maybe<IoRestorecommerceProductIndividualProductVariantListResponse>;
};
type ProtoIoRestorecommerceProductProductListResponse = {
    __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
    details?: Maybe<IoRestorecommerceProductProductListResponse>;
};
type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse = {
    __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
    details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};
type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
    __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
    details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};
type ProtoIoRestorecommerceRoleRoleListResponse = {
    __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
    details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
};
type ProtoIoRestorecommerceRuleRuleListResponse = {
    __typename?: 'ProtoIoRestorecommerceRuleRuleListResponse';
    details?: Maybe<IoRestorecommerceRuleRuleListResponse>;
};
type ProtoIoRestorecommerceSettingSettingListResponse = {
    __typename?: 'ProtoIoRestorecommerceSettingSettingListResponse';
    details?: Maybe<IoRestorecommerceSettingSettingListResponse>;
};
type ProtoIoRestorecommerceShopShopListResponse = {
    __typename?: 'ProtoIoRestorecommerceShopShopListResponse';
    details?: Maybe<IoRestorecommerceShopShopListResponse>;
};
type ProtoIoRestorecommerceStatusOperationStatusObj = {
    __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
    details?: Maybe<IoRestorecommerceStatusOperationStatusObj>;
};
type ProtoIoRestorecommerceStatusStatusListResponse = {
    __typename?: 'ProtoIoRestorecommerceStatusStatusListResponse';
    details?: Maybe<IoRestorecommerceStatusStatusListResponse>;
};
type ProtoIoRestorecommerceTaxTaxListResponse = {
    __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
    details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
};
type ProtoIoRestorecommerceTaxTypeTaxTypeListResponse = {
    __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeListResponse';
    details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
};
type ProtoIoRestorecommerceTemplateTemplateListResponse = {
    __typename?: 'ProtoIoRestorecommerceTemplateTemplateListResponse';
    details?: Maybe<IoRestorecommerceTemplateTemplateListResponse>;
};
type ProtoIoRestorecommerceTimezoneTimezoneListResponse = {
    __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
    details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
};
type ProtoIoRestorecommerceUnitCodeUnitCodeListResponse = {
    __typename?: 'ProtoIoRestorecommerceUnitCodeUnitCodeListResponse';
    details?: Maybe<IoRestorecommerceUnitCodeUnitCodeListResponse>;
};
type ProtoIoRestorecommerceUserCreateBackupTotpCodesResponse = {
    __typename?: 'ProtoIoRestorecommerceUserCreateBackupTOTPCodesResponse';
    details?: Maybe<IoRestorecommerceUserCreateBackupTotpCodesResponse>;
};
type ProtoIoRestorecommerceUserDeleteUsersByOrgResponse = {
    __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
    details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
};
type ProtoIoRestorecommerceUserLoginResponse = {
    __typename?: 'ProtoIoRestorecommerceUserLoginResponse';
    details?: Maybe<IoRestorecommerceUserLoginResponse>;
};
type ProtoIoRestorecommerceUserMfaStatusResponse = {
    __typename?: 'ProtoIoRestorecommerceUserMfaStatusResponse';
    details?: Maybe<IoRestorecommerceUserMfaStatusResponse>;
};
type ProtoIoRestorecommerceUserSetupTotpResponse = {
    __typename?: 'ProtoIoRestorecommerceUserSetupTOTPResponse';
    details?: Maybe<IoRestorecommerceUserSetupTotpResponse>;
};
type ProtoIoRestorecommerceUserTenantResponse = {
    __typename?: 'ProtoIoRestorecommerceUserTenantResponse';
    details?: Maybe<IoRestorecommerceUserTenantResponse>;
};
type ProtoIoRestorecommerceUserUserListResponse = {
    __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
    details?: Maybe<IoRestorecommerceUserUserListResponse>;
};
type ProtoIoRestorecommerceUserUserListWithRoleResponse = {
    __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
    details?: Maybe<IoRestorecommerceUserUserListWithRoleResponse>;
};
type ProtoIoRestorecommerceUserUserResponse = {
    __typename?: 'ProtoIoRestorecommerceUserUserResponse';
    details?: Maybe<IoRestorecommerceUserUserResponse>;
};
/** The root of all queries */
type Query = {
    __typename?: 'Query';
    access_control: AccessControlQuery;
    catalog: CatalogQuery;
    fulfillment: FulfillmentQuery;
    identity: IdentityQuery;
    invoicing: InvoicingQuery;
    master_data: ResourceQuery;
    notification: NotificationQuery;
    ordering: OrderingQuery;
    ostorage: OstorageQuery;
    scheduling: SchedulingQuery;
    status?: Maybe<FacadeStatusType>;
};
type ResourceAddressMutation = {
    __typename?: 'ResourceAddressMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};
type ResourceAddressMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceAddressMutationMutateArgs = {
    input: IIoRestorecommerceAddressAddressList;
};
type ResourceAddressQuery = {
    __typename?: 'ResourceAddressQuery';
    Read?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};
type ResourceAddressQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceCommandMutation = {
    __typename?: 'ResourceCommandMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};
type ResourceCommandMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceCommandMutationMutateArgs = {
    input: IIoRestorecommerceCommandCommandList;
};
type ResourceCommandQuery = {
    __typename?: 'ResourceCommandQuery';
    Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};
type ResourceCommandQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceContactPointMutation = {
    __typename?: 'ResourceContactPointMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};
type ResourceContactPointMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceContactPointMutationMutateArgs = {
    input: IIoRestorecommerceContactPointContactPointList;
};
type ResourceContactPointQuery = {
    __typename?: 'ResourceContactPointQuery';
    Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};
type ResourceContactPointQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceContactPointTypeMutation = {
    __typename?: 'ResourceContactPointTypeMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};
type ResourceContactPointTypeMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceContactPointTypeMutationMutateArgs = {
    input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};
type ResourceContactPointTypeQuery = {
    __typename?: 'ResourceContactPointTypeQuery';
    Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};
type ResourceContactPointTypeQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceCountryMutation = {
    __typename?: 'ResourceCountryMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};
type ResourceCountryMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceCountryMutationMutateArgs = {
    input: IIoRestorecommerceCountryCountryList;
};
type ResourceCountryQuery = {
    __typename?: 'ResourceCountryQuery';
    Read?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};
type ResourceCountryQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceCredentialMutation = {
    __typename?: 'ResourceCredentialMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceCredentialCredentialListResponse>;
};
type ResourceCredentialMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceCredentialMutationMutateArgs = {
    input: IIoRestorecommerceCredentialCredentialList;
};
type ResourceCredentialQuery = {
    __typename?: 'ResourceCredentialQuery';
    Read?: Maybe<ProtoIoRestorecommerceCredentialCredentialListResponse>;
};
type ResourceCredentialQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceCurrencyMutation = {
    __typename?: 'ResourceCurrencyMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceCurrencyCurrencyListResponse>;
};
type ResourceCurrencyMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceCurrencyMutationMutateArgs = {
    input: IIoRestorecommerceCurrencyCurrencyList;
};
type ResourceCurrencyQuery = {
    __typename?: 'ResourceCurrencyQuery';
    Read?: Maybe<ProtoIoRestorecommerceCurrencyCurrencyListResponse>;
};
type ResourceCurrencyQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceCustomerMutation = {
    __typename?: 'ResourceCustomerMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};
type ResourceCustomerMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceCustomerMutationMutateArgs = {
    input: IIoRestorecommerceCustomerCustomerList;
};
type ResourceCustomerQuery = {
    __typename?: 'ResourceCustomerQuery';
    Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};
type ResourceCustomerQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceLocaleMutation = {
    __typename?: 'ResourceLocaleMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};
type ResourceLocaleMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceLocaleMutationMutateArgs = {
    input: IIoRestorecommerceLocaleLocaleList;
};
type ResourceLocaleQuery = {
    __typename?: 'ResourceLocaleQuery';
    Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};
type ResourceLocaleQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceLocationMutation = {
    __typename?: 'ResourceLocationMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};
type ResourceLocationMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceLocationMutationMutateArgs = {
    input: IIoRestorecommerceLocationLocationList;
};
type ResourceLocationQuery = {
    __typename?: 'ResourceLocationQuery';
    Read?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};
type ResourceLocationQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceMutation = {
    __typename?: 'ResourceMutation';
    address: ResourceAddressMutation;
    command: ResourceCommandMutation;
    contact_point: ResourceContactPointMutation;
    contact_point_type: ResourceContactPointTypeMutation;
    country: ResourceCountryMutation;
    credential: ResourceCredentialMutation;
    currency: ResourceCurrencyMutation;
    customer: ResourceCustomerMutation;
    locale: ResourceLocaleMutation;
    location: ResourceLocationMutation;
    organization: ResourceOrganizationMutation;
    setting: ResourceSettingMutation;
    shop: ResourceShopMutation;
    tax: ResourceTaxMutation;
    tax_type: ResourceTaxTypeMutation;
    template: ResourceTemplateMutation;
    timezone: ResourceTimezoneMutation;
    unit_code: ResourceUnitCodeMutation;
};
type ResourceOrganizationMutation = {
    __typename?: 'ResourceOrganizationMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};
type ResourceOrganizationMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceOrganizationMutationMutateArgs = {
    input: IIoRestorecommerceOrganizationOrganizationList;
};
type ResourceOrganizationQuery = {
    __typename?: 'ResourceOrganizationQuery';
    Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};
type ResourceOrganizationQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceQuery = {
    __typename?: 'ResourceQuery';
    address: ResourceAddressQuery;
    command: ResourceCommandQuery;
    contact_point: ResourceContactPointQuery;
    contact_point_type: ResourceContactPointTypeQuery;
    country: ResourceCountryQuery;
    credential: ResourceCredentialQuery;
    currency: ResourceCurrencyQuery;
    customer: ResourceCustomerQuery;
    locale: ResourceLocaleQuery;
    location: ResourceLocationQuery;
    organization: ResourceOrganizationQuery;
    setting: ResourceSettingQuery;
    shop: ResourceShopQuery;
    tax: ResourceTaxQuery;
    tax_type: ResourceTaxTypeQuery;
    template: ResourceTemplateQuery;
    timezone: ResourceTimezoneQuery;
    unit_code: ResourceUnitCodeQuery;
};
type ResourceSettingMutation = {
    __typename?: 'ResourceSettingMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceSettingSettingListResponse>;
};
type ResourceSettingMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceSettingMutationMutateArgs = {
    input: IIoRestorecommerceSettingSettingList;
};
type ResourceSettingQuery = {
    __typename?: 'ResourceSettingQuery';
    Read?: Maybe<ProtoIoRestorecommerceSettingSettingListResponse>;
};
type ResourceSettingQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceShopMutation = {
    __typename?: 'ResourceShopMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceShopShopListResponse>;
};
type ResourceShopMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceShopMutationMutateArgs = {
    input: IIoRestorecommerceShopShopList;
};
type ResourceShopQuery = {
    __typename?: 'ResourceShopQuery';
    Read?: Maybe<ProtoIoRestorecommerceShopShopListResponse>;
};
type ResourceShopQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceTaxMutation = {
    __typename?: 'ResourceTaxMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};
type ResourceTaxMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceTaxMutationMutateArgs = {
    input: IIoRestorecommerceTaxTaxList;
};
type ResourceTaxQuery = {
    __typename?: 'ResourceTaxQuery';
    Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};
type ResourceTaxQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceTaxTypeMutation = {
    __typename?: 'ResourceTaxTypeMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};
type ResourceTaxTypeMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceTaxTypeMutationMutateArgs = {
    input: IIoRestorecommerceTaxTypeTaxTypeList;
};
type ResourceTaxTypeQuery = {
    __typename?: 'ResourceTaxTypeQuery';
    Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};
type ResourceTaxTypeQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceTemplateMutation = {
    __typename?: 'ResourceTemplateMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceTemplateTemplateListResponse>;
};
type ResourceTemplateMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceTemplateMutationMutateArgs = {
    input: IIoRestorecommerceTemplateTemplateList;
};
type ResourceTemplateQuery = {
    __typename?: 'ResourceTemplateQuery';
    Read?: Maybe<ProtoIoRestorecommerceTemplateTemplateListResponse>;
};
type ResourceTemplateQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceTimezoneMutation = {
    __typename?: 'ResourceTimezoneMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};
type ResourceTimezoneMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceTimezoneMutationMutateArgs = {
    input: IIoRestorecommerceTimezoneTimezoneList;
};
type ResourceTimezoneQuery = {
    __typename?: 'ResourceTimezoneQuery';
    Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};
type ResourceTimezoneQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type ResourceUnitCodeMutation = {
    __typename?: 'ResourceUnitCodeMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
};
type ResourceUnitCodeMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type ResourceUnitCodeMutationMutateArgs = {
    input: IIoRestorecommerceUnitCodeUnitCodeList;
};
type ResourceUnitCodeQuery = {
    __typename?: 'ResourceUnitCodeQuery';
    Read?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
};
type ResourceUnitCodeQueryReadArgs = {
    input: IIoRestorecommerceResourcebaseReadRequest;
};
type SchedulingJobMutation = {
    __typename?: 'SchedulingJobMutation';
    Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
    Mutate?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
};
type SchedulingJobMutationDeleteArgs = {
    input: IIoRestorecommerceResourcebaseDeleteRequest;
};
type SchedulingJobMutationMutateArgs = {
    input: IIoRestorecommerceJobJobList;
};
type SchedulingJobQuery = {
    __typename?: 'SchedulingJobQuery';
    Read?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
};
type SchedulingJobQueryReadArgs = {
    input: IIoRestorecommerceJobJobReadRequest;
};
type SchedulingMutation = {
    __typename?: 'SchedulingMutation';
    job: SchedulingJobMutation;
};
type SchedulingQuery = {
    __typename?: 'SchedulingQuery';
    job: SchedulingJobQuery;
};
type Subscription = {
    __typename?: 'Subscription';
    catalogProducts?: Maybe<SubscriptionOutput>;
    fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
    fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
    fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
    identityUsers?: Maybe<SubscriptionOutput>;
    invoicingInvoices?: Maybe<SubscriptionOutput>;
    orderingOrders?: Maybe<SubscriptionOutput>;
};
type SubscriptionCatalogProductsArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionFulfillmentFulfillmentCouriersArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionFulfillmentFulfillment_ProductsArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionFulfillmentFulfillmentsArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionIdentityUsersArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionInvoicingInvoicesArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
type SubscriptionOrderingOrdersArgs = {
    action?: InputMaybe<SubscriptionAction>;
};
declare enum SubscriptionAction {
    Created = "CREATED",
    Deleted = "DELETED",
    Updated = "UPDATED"
}
type SubscriptionOutput = {
    __typename?: 'SubscriptionOutput';
    id?: Maybe<Scalars['String']>;
};
type PolicyReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type PolicyReadQuery = {
    __typename?: 'Query';
    access_control: {
        __typename?: 'AccessControlQuery';
        policy: {
            __typename?: 'AccessControlPolicyQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
                details?: {
                    __typename?: 'IoRestorecommercePolicyPolicyListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommercePolicyPolicyResponse';
                        payload?: {
                            __typename?: 'IoRestorecommercePolicyPolicy';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type ProductCategoryMutateMutationVariables = Exact<{
    input: IIoRestorecommerceProductCategoryProductCategoryList;
}>;
type ProductCategoryMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product_category: {
            __typename?: 'CatalogProductCategoryMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            image?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                url?: string | null;
                                caption?: string | null;
                                contentType?: string | null;
                                tags?: Array<string> | null;
                                height?: number | null;
                                width?: number | null;
                            } | null;
                            parent?: {
                                __typename?: 'IoRestorecommerceProductCategoryParent';
                                parentId?: string | null;
                            } | null;
                            priceGroup?: {
                                __typename?: 'IoRestorecommercePriceGroupPriceGroup';
                                id?: string | null;
                                name?: string | null;
                                description?: string | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type ProductCategoryDeleteMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type ProductCategoryDeleteMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product_category: {
            __typename?: 'CatalogProductCategoryMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type ProductCategoryReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type ProductCategoryReadQuery = {
    __typename?: 'Query';
    catalog: {
        __typename?: 'CatalogQuery';
        product_category: {
            __typename?: 'CatalogProductCategoryQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            image?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                url?: string | null;
                                caption?: string | null;
                                contentType?: string | null;
                                tags?: Array<string> | null;
                                height?: number | null;
                                width?: number | null;
                            } | null;
                            parent?: {
                                __typename?: 'IoRestorecommerceProductCategoryParent';
                                parentId?: string | null;
                            } | null;
                            priceGroup?: {
                                __typename?: 'IoRestorecommercePriceGroupPriceGroup';
                                id?: string | null;
                                name?: string | null;
                                description?: string | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type ManufucturerMutateMutationVariables = Exact<{
    input: IIoRestorecommerceManufacturerManufacturerList;
}>;
type ManufucturerMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        manufacturer: {
            __typename?: 'CatalogManufacturerMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceManufacturerManufacturer';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type ManufucturerDeleteMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type ManufucturerDeleteMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        manufacturer: {
            __typename?: 'CatalogManufacturerMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type ManufucturerReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type ManufucturerReadQuery = {
    __typename?: 'Query';
    catalog: {
        __typename?: 'CatalogQuery';
        manufacturer: {
            __typename?: 'CatalogManufacturerQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceManufacturerManufacturer';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type PriceGroupMutateMutationVariables = Exact<{
    input: IIoRestorecommercePriceGroupPriceGroupList;
}>;
type PriceGroupMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        price_group: {
            __typename?: 'CatalogPriceGroupMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
                details?: {
                    __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
                        payload?: {
                            __typename?: 'IoRestorecommercePriceGroupPriceGroup';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type PriceGroupDeleteMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type PriceGroupDeleteMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        price_group: {
            __typename?: 'CatalogPriceGroupMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type PriceGroupReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type PriceGroupReadQuery = {
    __typename?: 'Query';
    catalog: {
        __typename?: 'CatalogQuery';
        price_group: {
            __typename?: 'CatalogPriceGroupQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
                details?: {
                    __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
                        payload?: {
                            __typename?: 'IoRestorecommercePriceGroupPriceGroup';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type CatalogProductMutateMutationVariables = Exact<{
    input: IIoRestorecommerceProductProductList;
}>;
type CatalogProductMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product: {
            __typename?: 'CatalogProductMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductProductListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductProductResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductProduct';
                            id?: string | null;
                            product?: {
                                __typename?: 'IoRestorecommerceProductIndividualProduct';
                                name?: string | null;
                                description?: string | null;
                                taxIds?: Array<string> | null;
                                gtin?: string | null;
                                manufacturerId?: string | null;
                                originCountryId?: string | null;
                                categoryId?: string | null;
                                prototypeId?: string | null;
                                physical?: {
                                    __typename?: 'IoRestorecommerceProductPhysicalProduct';
                                    templates?: Array<{
                                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        taricCode?: string | null;
                                        stockLevel?: number | null;
                                        stockKeepingUnit?: string | null;
                                        parentVariantId?: string | null;
                                        taxIds?: Array<string> | null;
                                        images?: Array<{
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            url?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            height?: number | null;
                                            width?: number | null;
                                        }> | null;
                                        files?: Array<{
                                            __typename?: 'IoRestorecommerceFileFile';
                                            id?: string | null;
                                            url?: string | null;
                                            filename?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            thumbnail?: {
                                                __typename?: 'IoRestorecommerceImageImage';
                                                id?: string | null;
                                                index?: number | null;
                                                filename?: string | null;
                                                url?: string | null;
                                                caption?: string | null;
                                                contentType?: string | null;
                                                tags?: Array<string> | null;
                                                height?: number | null;
                                                width?: number | null;
                                            } | null;
                                        }> | null;
                                        price?: {
                                            __typename?: 'IoRestorecommercePricePrice';
                                            currencyId?: string | null;
                                            regularPrice?: number | null;
                                            sale?: boolean | null;
                                            salePrice?: number | null;
                                        } | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                            unitCode?: string | null;
                                        }> | null;
                                    }> | null;
                                    variants?: Array<{
                                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        taricCode?: string | null;
                                        stockLevel?: number | null;
                                        stockKeepingUnit?: string | null;
                                        parentVariantId?: string | null;
                                        taxIds?: Array<string> | null;
                                        images?: Array<{
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            url?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            height?: number | null;
                                            width?: number | null;
                                        }> | null;
                                        files?: Array<{
                                            __typename?: 'IoRestorecommerceFileFile';
                                            id?: string | null;
                                            url?: string | null;
                                            filename?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            thumbnail?: {
                                                __typename?: 'IoRestorecommerceImageImage';
                                                id?: string | null;
                                                index?: number | null;
                                                filename?: string | null;
                                                url?: string | null;
                                                caption?: string | null;
                                                contentType?: string | null;
                                                tags?: Array<string> | null;
                                                height?: number | null;
                                                width?: number | null;
                                            } | null;
                                        }> | null;
                                        price?: {
                                            __typename?: 'IoRestorecommercePricePrice';
                                            currencyId?: string | null;
                                            regularPrice?: number | null;
                                            sale?: boolean | null;
                                            salePrice?: number | null;
                                        } | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                            unitCode?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type CatalogProductDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type CatalogProductDeleteMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product: {
            __typename?: 'CatalogProductMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type CatalogProductReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type CatalogProductReadQuery = {
    __typename?: 'Query';
    catalog: {
        __typename?: 'CatalogQuery';
        product: {
            __typename?: 'CatalogProductQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductProductListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductProductResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductProduct';
                            id?: string | null;
                            product?: {
                                __typename?: 'IoRestorecommerceProductIndividualProduct';
                                name?: string | null;
                                description?: string | null;
                                taxIds?: Array<string> | null;
                                gtin?: string | null;
                                manufacturerId?: string | null;
                                originCountryId?: string | null;
                                categoryId?: string | null;
                                prototypeId?: string | null;
                                physical?: {
                                    __typename?: 'IoRestorecommerceProductPhysicalProduct';
                                    templates?: Array<{
                                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        taricCode?: string | null;
                                        stockLevel?: number | null;
                                        stockKeepingUnit?: string | null;
                                        parentVariantId?: string | null;
                                        taxIds?: Array<string> | null;
                                        images?: Array<{
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            url?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            height?: number | null;
                                            width?: number | null;
                                        }> | null;
                                        files?: Array<{
                                            __typename?: 'IoRestorecommerceFileFile';
                                            id?: string | null;
                                            url?: string | null;
                                            filename?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            thumbnail?: {
                                                __typename?: 'IoRestorecommerceImageImage';
                                                id?: string | null;
                                                index?: number | null;
                                                filename?: string | null;
                                                url?: string | null;
                                                caption?: string | null;
                                                contentType?: string | null;
                                                tags?: Array<string> | null;
                                                height?: number | null;
                                                width?: number | null;
                                            } | null;
                                        }> | null;
                                        price?: {
                                            __typename?: 'IoRestorecommercePricePrice';
                                            currencyId?: string | null;
                                            regularPrice?: number | null;
                                            sale?: boolean | null;
                                            salePrice?: number | null;
                                        } | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                            unitCode?: string | null;
                                        }> | null;
                                    }> | null;
                                    variants?: Array<{
                                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        taricCode?: string | null;
                                        stockLevel?: number | null;
                                        stockKeepingUnit?: string | null;
                                        parentVariantId?: string | null;
                                        taxIds?: Array<string> | null;
                                        images?: Array<{
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            url?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            height?: number | null;
                                            width?: number | null;
                                        }> | null;
                                        files?: Array<{
                                            __typename?: 'IoRestorecommerceFileFile';
                                            id?: string | null;
                                            url?: string | null;
                                            filename?: string | null;
                                            caption?: string | null;
                                            contentType?: string | null;
                                            tags?: Array<string> | null;
                                            thumbnail?: {
                                                __typename?: 'IoRestorecommerceImageImage';
                                                id?: string | null;
                                                index?: number | null;
                                                filename?: string | null;
                                                url?: string | null;
                                                caption?: string | null;
                                                contentType?: string | null;
                                                tags?: Array<string> | null;
                                                height?: number | null;
                                                width?: number | null;
                                            } | null;
                                        }> | null;
                                        price?: {
                                            __typename?: 'IoRestorecommercePricePrice';
                                            currencyId?: string | null;
                                            regularPrice?: number | null;
                                            sale?: boolean | null;
                                            salePrice?: number | null;
                                        } | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                            unitCode?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type ProductPrototypeMutateMutationVariables = Exact<{
    input: IIoRestorecommerceProductPrototypeProductPrototypeList;
}>;
type ProductPrototypeMutateMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product_prototype: {
            __typename?: 'CatalogProductPrototypeMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            categoryId?: string | null;
                            version?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type ProductPrototypeDeleteMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type ProductPrototypeDeleteMutation = {
    __typename?: 'Mutation';
    catalog: {
        __typename?: 'CatalogMutation';
        product_prototype: {
            __typename?: 'CatalogProductPrototypeMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type ProductPrototypeReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type ProductPrototypeReadQuery = {
    __typename?: 'Query';
    catalog: {
        __typename?: 'CatalogQuery';
        product_prototype: {
            __typename?: 'CatalogProductPrototypeQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            categoryId?: string | null;
                            version?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type AddressFragmentFragment = {
    __typename?: 'IoRestorecommerceAddressAddress';
    id?: string | null;
    buildingNumber?: string | null;
    street?: string | null;
    postcode?: string | null;
    locality?: string | null;
    region?: string | null;
    addressAddition?: {
        __typename?: 'IoRestorecommerceAddressAddressAddition';
        field1?: string | null;
        field2?: string | null;
    } | null;
    businessAddress?: {
        __typename?: 'IoRestorecommerceAddressBusinessAddress';
        name?: string | null;
    } | null;
    packStation?: {
        __typename?: 'IoRestorecommerceAddressPackStation';
        postNumber?: string | null;
        provider?: string | null;
        stationNumber?: string | null;
    } | null;
    residentialAddress?: {
        __typename?: 'IoRestorecommerceAddressResidentialAddress';
        title?: string | null;
        givenName?: string | null;
        familyName?: string | null;
        midName?: string | null;
    } | null;
    country?: {
        __typename?: 'IoRestorecommerceCountryCountry';
        id?: string | null;
        name?: string | null;
        countryCode?: string | null;
        geographicalName?: string | null;
    } | null;
    geoCoordinates?: {
        __typename?: 'IoRestorecommerceAddressGeoPoint';
        latitude?: number | null;
        longitude?: number | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ContactPointFragmentFragment = {
    __typename?: 'IoRestorecommerceContactPointContactPoint';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    email?: string | null;
    telephone?: string | null;
    website?: string | null;
    timezone?: {
        __typename?: 'IoRestorecommerceTimezoneTimezone';
        id?: string | null;
        value?: string | null;
        description?: string | null;
    } | null;
    locale?: {
        __typename?: 'IoRestorecommerceLocaleLocale';
        id?: string | null;
        value?: string | null;
        description?: string | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type CountryFragmentFragment = {
    __typename?: 'IoRestorecommerceCountryCountry';
    id?: string | null;
    name?: string | null;
    countryCode?: string | null;
    geographicalName?: string | null;
    economicAreas?: Array<string> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type CurrencyFragmentFragment = {
    __typename?: 'IoRestorecommerceCurrencyCurrency';
    id?: string | null;
    name?: string | null;
    precision?: number | null;
    symbol?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type CustomerFragmentFragment = {
    __typename?: 'IoRestorecommerceCustomerCustomer';
    id?: string | null;
    description?: string | null;
    name?: string | null;
    settingId?: string | null;
    commercial?: {
        __typename?: 'IoRestorecommerceCustomerCommercial';
        organization?: {
            __typename?: 'IoRestorecommerceOrganizationOrganization';
            id?: string | null;
            parentId?: string | null;
            name?: string | null;
            email?: string | null;
            website?: string | null;
            vatId?: string | null;
            logo?: {
                __typename?: 'IoRestorecommerceImageImage';
                id?: string | null;
                index?: number | null;
                filename?: string | null;
                height?: number | null;
                width?: number | null;
                url?: string | null;
            } | null;
            paymentMethods?: Array<{
                __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                id?: string | null;
                transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
            }> | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
    } | null;
    publicSector?: {
        __typename?: 'IoRestorecommerceCustomerPublicSector';
        organization?: {
            __typename?: 'IoRestorecommerceOrganizationOrganization';
            id?: string | null;
            parentId?: string | null;
            name?: string | null;
            email?: string | null;
            website?: string | null;
            vatId?: string | null;
            logo?: {
                __typename?: 'IoRestorecommerceImageImage';
                id?: string | null;
                index?: number | null;
                filename?: string | null;
                height?: number | null;
                width?: number | null;
                url?: string | null;
            } | null;
            paymentMethods?: Array<{
                __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                id?: string | null;
                transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
            }> | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
    } | null;
    private?: {
        __typename?: 'IoRestorecommerceCustomerPrivate';
        user?: {
            __typename?: 'IoRestorecommerceUserUser';
            id?: string | null;
            active?: boolean | null;
            activationCode?: string | null;
            email?: string | null;
            newEmail?: string | null;
            name?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            lastAccess?: unknown | null;
            defaultScope?: string | null;
            localeId?: string | null;
            timezoneId?: string | null;
            roleAssociations?: Array<{
                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                role?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            }> | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
        contactPoints?: Array<{
            __typename?: 'IoRestorecommerceContactPointContactPoint';
            id?: string | null;
            name?: string | null;
            description?: string | null;
            email?: string | null;
            telephone?: string | null;
            website?: string | null;
            timezone?: {
                __typename?: 'IoRestorecommerceTimezoneTimezone';
                id?: string | null;
                value?: string | null;
                description?: string | null;
            } | null;
            locale?: {
                __typename?: 'IoRestorecommerceLocaleLocale';
                id?: string | null;
                value?: string | null;
                description?: string | null;
            } | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        }> | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type FileFragmentFragment = {
    __typename?: 'IoRestorecommerceFileFile';
    id?: string | null;
    url?: string | null;
    filename?: string | null;
    caption?: string | null;
    contentType?: string | null;
    tags?: Array<string> | null;
    thumbnail?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        url?: string | null;
        caption?: string | null;
        contentType?: string | null;
        tags?: Array<string> | null;
        height?: number | null;
        width?: number | null;
    } | null;
};
type FulfillmentFragmentFragment = {
    __typename?: 'IoRestorecommerceFulfillmentFulfillment';
    id?: string | null;
    customerId?: string | null;
    shopId?: string | null;
    userId?: string | null;
    fulfillmentState?: IoRestorecommerceFulfillmentFulfillmentState | null;
    labels?: Array<{
        __typename?: 'IoRestorecommerceFulfillmentLabel';
        shipmentNumber?: string | null;
        state?: IoRestorecommerceFulfillmentFulfillmentState | null;
        parcelId?: string | null;
        file?: {
            __typename?: 'IoRestorecommerceFileFile';
            url?: string | null;
        } | null;
        status?: {
            __typename?: 'IoRestorecommerceStatusStatus';
            code?: number | null;
            message?: string | null;
        } | null;
    }> | null;
    packaging?: {
        __typename?: 'IoRestorecommerceFulfillmentPackaging';
        notify?: string | null;
        parcels?: Array<{
            __typename?: 'IoRestorecommerceFulfillmentParcel';
            id?: string | null;
            productId?: string | null;
            variantId?: string | null;
            items?: Array<{
                __typename?: 'IoRestorecommerceFulfillmentItem';
                productId?: string | null;
                variantId?: string | null;
                hsCode?: string | null;
                taricCode?: string | null;
                name?: string | null;
                quantity?: number | null;
                package?: {
                    __typename?: 'IoRestorecommerceProductPackage';
                    rotatable?: boolean | null;
                    weightInKg?: number | null;
                    sizeInCm?: {
                        __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                        height?: number | null;
                        width?: number | null;
                        length?: number | null;
                    } | null;
                } | null;
            }> | null;
            package?: {
                __typename?: 'IoRestorecommerceProductPackage';
                rotatable?: boolean | null;
                weightInKg?: number | null;
                sizeInCm?: {
                    __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                    height?: number | null;
                    width?: number | null;
                    length?: number | null;
                } | null;
            } | null;
        }> | null;
        sender?: {
            __typename?: 'IoRestorecommerceAddressShippingAddress';
            comments?: string | null;
            address?: {
                __typename?: 'IoRestorecommerceAddressAddress';
                id?: string | null;
                postcode?: string | null;
            } | null;
            contact?: {
                __typename?: 'IoRestorecommerceAddressContact';
                name?: string | null;
                email?: string | null;
                phone?: string | null;
            } | null;
        } | null;
        recipient?: {
            __typename?: 'IoRestorecommerceAddressShippingAddress';
            address?: {
                __typename?: 'IoRestorecommerceAddressAddress';
                id?: string | null;
                postcode?: string | null;
                countryId?: string | null;
            } | null;
        } | null;
        customsDeclaration?: {
            __typename?: 'IoRestorecommerceFulfillmentCustomsDeclaration';
            invoiceNumber?: string | null;
            exportDescription?: string | null;
            exportType?: string | null;
        } | null;
    } | null;
    references?: Array<{
        __typename?: 'IoRestorecommerceReferenceReference';
        instanceType?: string | null;
        instanceId?: string | null;
    }> | null;
    trackings?: Array<{
        __typename?: 'IoRestorecommerceFulfillmentTracking';
        shipmentNumber?: string | null;
        events?: Array<{
            __typename?: 'IoRestorecommerceFulfillmentEvent';
            location?: string | null;
            timestamp?: unknown | null;
            details?: {
                __typename?: 'GoogleProtobufAny';
                value?: unknown | null;
                typeUrl?: string | null;
            } | null;
            status?: {
                __typename?: 'IoRestorecommerceStatusStatus';
                code?: number | null;
                message?: string | null;
            } | null;
        }> | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ImageFragmentFragment = {
    __typename?: 'IoRestorecommerceImageImage';
    id?: string | null;
    index?: number | null;
    filename?: string | null;
    url?: string | null;
    caption?: string | null;
    contentType?: string | null;
    tags?: Array<string> | null;
    height?: number | null;
    width?: number | null;
};
type InvoiceFragmentFragment = {
    __typename?: 'IoRestorecommerceInvoiceInvoice';
    id?: string | null;
    invoiceNumber?: string | null;
    fromDate?: unknown | null;
    toDate?: unknown | null;
    shopId?: string | null;
    sent?: boolean | null;
    withdrawn?: boolean | null;
    paymentState?: IoRestorecommerceInvoicePaymentState | null;
    customerOrderNumber?: string | null;
    userId?: string | null;
    customerId?: string | null;
    timestamp?: unknown | null;
    sections?: Array<{
        __typename?: 'IoRestorecommerceInvoiceSection';
        id?: string | null;
        customerRemark?: string | null;
        positions?: Array<{
            __typename?: 'IoRestorecommerceInvoicePosition';
            id?: string | null;
            toDate?: unknown | null;
            quantity?: number | null;
            fromDate?: unknown | null;
            unitPrice?: {
                __typename?: 'IoRestorecommercePricePrice';
                salePrice?: number | null;
                currencyId?: string | null;
                sale?: boolean | null;
                regularPrice?: number | null;
            } | null;
            fulfillmentItem?: {
                __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
                productId?: string | null;
                variantId?: string | null;
            } | null;
            manualItem?: {
                __typename?: 'IoRestorecommerceInvoiceManualItem';
                name?: string | null;
                descritpion?: string | null;
                stockKeepingUnit?: string | null;
                properties?: Array<{
                    __typename?: 'IoRestorecommercePropertyProperty';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            } | null;
            productItem?: {
                __typename?: 'IoRestorecommerceInvoiceProductItem';
                productId?: string | null;
                variantId?: string | null;
                product?: {
                    __typename?: 'IoRestorecommerceProductProduct';
                    id?: string | null;
                    active?: boolean | null;
                    tags?: Array<string> | null;
                    shopIds?: Array<string> | null;
                } | null;
            } | null;
        }> | null;
        amounts?: Array<{
            __typename?: 'IoRestorecommerceAmountAmount';
            gross?: number | null;
            net?: number | null;
            currencyId?: string | null;
            vats?: Array<{
                __typename?: 'IoRestorecommerceAmountVAT';
                taxId?: string | null;
                vat?: number | null;
            }> | null;
        }> | null;
    }> | null;
    totalAmounts?: Array<{
        __typename?: 'IoRestorecommerceAmountAmount';
        currencyId?: string | null;
        gross?: number | null;
        net?: number | null;
        vats?: Array<{
            __typename?: 'IoRestorecommerceAmountVAT';
            taxId?: string | null;
            vat?: number | null;
        }> | null;
    }> | null;
    references?: Array<{
        __typename?: 'IoRestorecommerceReferenceReference';
        instanceType?: string | null;
        instanceId?: string | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type LocaleFragmentFragment = {
    __typename?: 'IoRestorecommerceLocaleLocale';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    value?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type LocationFragmentFragment = {
    __typename?: 'IoRestorecommerceLocationLocation';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    parent?: {
        __typename?: 'IoRestorecommerceLocationLocation';
        id?: string | null;
        name?: string | null;
    } | null;
    organization?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        name?: string | null;
    } | null;
    address?: {
        __typename?: 'IoRestorecommerceAddressAddress';
        id?: string | null;
        buildingNumber?: string | null;
        postcode?: string | null;
        street?: string | null;
        locality?: string | null;
        businessAddress?: {
            __typename?: 'IoRestorecommerceAddressBusinessAddress';
            name?: string | null;
        } | null;
        residentialAddress?: {
            __typename?: 'IoRestorecommerceAddressResidentialAddress';
            familyName?: string | null;
            midName?: string | null;
            title?: string | null;
        } | null;
        country?: {
            __typename?: 'IoRestorecommerceCountryCountry';
            name?: string | null;
        } | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ManufacturerFragmentFragment = {
    __typename?: 'IoRestorecommerceManufacturerManufacturer';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type MetaFragmentFragment = {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    owners?: Array<{
        __typename?: 'IoRestorecommerceAttributeAttribute';
        id?: string | null;
        value?: string | null;
        attributes?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
        }> | null;
    }> | null;
};
type OpsStatusFragmentFragment = {
    __typename?: 'IoRestorecommerceStatusOperationStatus';
    code?: number | null;
    message?: string | null;
};
type OrderFragmentFragment = {
    __typename?: 'IoRestorecommerceOrderOrder';
    id?: string | null;
    notificationEmail?: string | null;
    shopId?: string | null;
    userId?: string | null;
    customerId?: string | null;
    orderState?: IoRestorecommerceOrderOrderState | null;
    customerType?: IoRestorecommerceCustomerCustomerType | null;
    customerOrderNr?: string | null;
    customer?: {
        __typename?: 'IoRestorecommerceCustomerCustomer';
        id?: string | null;
        name?: string | null;
        description?: string | null;
        settingId?: string | null;
        commercial?: {
            __typename?: 'IoRestorecommerceCustomerCommercial';
            organization?: {
                __typename?: 'IoRestorecommerceOrganizationOrganization';
                id?: string | null;
                parentId?: string | null;
                name?: string | null;
                email?: string | null;
                website?: string | null;
                vatId?: string | null;
                logo?: {
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url?: string | null;
                } | null;
                paymentMethods?: Array<{
                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                    id?: string | null;
                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                }> | null;
                meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                    owners?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                        attributes?: Array<{
                            __typename?: 'IoRestorecommerceAttributeAttribute';
                            id?: string | null;
                            value?: string | null;
                        }> | null;
                    }> | null;
                } | null;
            } | null;
        } | null;
        publicSector?: {
            __typename?: 'IoRestorecommerceCustomerPublicSector';
            organization?: {
                __typename?: 'IoRestorecommerceOrganizationOrganization';
                id?: string | null;
                parentId?: string | null;
                name?: string | null;
                email?: string | null;
                website?: string | null;
                vatId?: string | null;
                logo?: {
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url?: string | null;
                } | null;
                paymentMethods?: Array<{
                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                    id?: string | null;
                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                }> | null;
                meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                    owners?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                        attributes?: Array<{
                            __typename?: 'IoRestorecommerceAttributeAttribute';
                            id?: string | null;
                            value?: string | null;
                        }> | null;
                    }> | null;
                } | null;
            } | null;
        } | null;
        private?: {
            __typename?: 'IoRestorecommerceCustomerPrivate';
            user?: {
                __typename?: 'IoRestorecommerceUserUser';
                id?: string | null;
                active?: boolean | null;
                activationCode?: string | null;
                email?: string | null;
                newEmail?: string | null;
                name?: string | null;
                firstName?: string | null;
                lastName?: string | null;
                lastAccess?: unknown | null;
                defaultScope?: string | null;
                localeId?: string | null;
                timezoneId?: string | null;
                roleAssociations?: Array<{
                    __typename?: 'IoRestorecommerceAuthRoleAssociation';
                    role?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                        attributes?: Array<{
                            __typename?: 'IoRestorecommerceAttributeAttribute';
                            id?: string | null;
                            value?: string | null;
                        }> | null;
                    }> | null;
                }> | null;
                meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                    owners?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                        attributes?: Array<{
                            __typename?: 'IoRestorecommerceAttributeAttribute';
                            id?: string | null;
                            value?: string | null;
                        }> | null;
                    }> | null;
                } | null;
            } | null;
            contactPoints?: Array<{
                __typename?: 'IoRestorecommerceContactPointContactPoint';
                id?: string | null;
                name?: string | null;
                description?: string | null;
                email?: string | null;
                telephone?: string | null;
                website?: string | null;
                timezone?: {
                    __typename?: 'IoRestorecommerceTimezoneTimezone';
                    id?: string | null;
                    value?: string | null;
                    description?: string | null;
                } | null;
                locale?: {
                    __typename?: 'IoRestorecommerceLocaleLocale';
                    id?: string | null;
                    value?: string | null;
                    description?: string | null;
                } | null;
                meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                    owners?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                        attributes?: Array<{
                            __typename?: 'IoRestorecommerceAttributeAttribute';
                            id?: string | null;
                            value?: string | null;
                        }> | null;
                    }> | null;
                } | null;
            }> | null;
        } | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    items?: Array<{
        __typename?: 'IoRestorecommerceOrderItem';
        id?: string | null;
        quantity?: number | null;
        productId?: string | null;
        variantId?: string | null;
        parentItemId?: string | null;
        product?: {
            __typename?: 'IoRestorecommerceProductProduct';
            id?: string | null;
            product?: {
                __typename?: 'IoRestorecommerceProductIndividualProduct';
                name?: string | null;
                description?: string | null;
                taxIds?: Array<string> | null;
                gtin?: string | null;
                manufacturerId?: string | null;
                originCountryId?: string | null;
                categoryId?: string | null;
                prototypeId?: string | null;
                physical?: {
                    __typename?: 'IoRestorecommerceProductPhysicalProduct';
                    templates?: Array<{
                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                        id?: string | null;
                        name?: string | null;
                        description?: string | null;
                        taricCode?: string | null;
                        stockLevel?: number | null;
                        stockKeepingUnit?: string | null;
                        parentVariantId?: string | null;
                        taxIds?: Array<string> | null;
                        images?: Array<{
                            __typename?: 'IoRestorecommerceImageImage';
                            id?: string | null;
                            index?: number | null;
                            filename?: string | null;
                            url?: string | null;
                            caption?: string | null;
                            contentType?: string | null;
                            tags?: Array<string> | null;
                            height?: number | null;
                            width?: number | null;
                        }> | null;
                        files?: Array<{
                            __typename?: 'IoRestorecommerceFileFile';
                            id?: string | null;
                            url?: string | null;
                            filename?: string | null;
                            caption?: string | null;
                            contentType?: string | null;
                            tags?: Array<string> | null;
                            thumbnail?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                url?: string | null;
                                caption?: string | null;
                                contentType?: string | null;
                                tags?: Array<string> | null;
                                height?: number | null;
                                width?: number | null;
                            } | null;
                        }> | null;
                        price?: {
                            __typename?: 'IoRestorecommercePricePrice';
                            currencyId?: string | null;
                            regularPrice?: number | null;
                            sale?: boolean | null;
                            salePrice?: number | null;
                        } | null;
                        properties?: Array<{
                            __typename?: 'IoRestorecommercePropertyProperty';
                            id?: string | null;
                            value?: string | null;
                            unitCode?: string | null;
                        }> | null;
                    }> | null;
                    variants?: Array<{
                        __typename?: 'IoRestorecommerceProductPhysicalVariant';
                        id?: string | null;
                        name?: string | null;
                        description?: string | null;
                        taricCode?: string | null;
                        stockLevel?: number | null;
                        stockKeepingUnit?: string | null;
                        parentVariantId?: string | null;
                        taxIds?: Array<string> | null;
                        images?: Array<{
                            __typename?: 'IoRestorecommerceImageImage';
                            id?: string | null;
                            index?: number | null;
                            filename?: string | null;
                            url?: string | null;
                            caption?: string | null;
                            contentType?: string | null;
                            tags?: Array<string> | null;
                            height?: number | null;
                            width?: number | null;
                        }> | null;
                        files?: Array<{
                            __typename?: 'IoRestorecommerceFileFile';
                            id?: string | null;
                            url?: string | null;
                            filename?: string | null;
                            caption?: string | null;
                            contentType?: string | null;
                            tags?: Array<string> | null;
                            thumbnail?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                url?: string | null;
                                caption?: string | null;
                                contentType?: string | null;
                                tags?: Array<string> | null;
                                height?: number | null;
                                width?: number | null;
                            } | null;
                        }> | null;
                        price?: {
                            __typename?: 'IoRestorecommercePricePrice';
                            currencyId?: string | null;
                            regularPrice?: number | null;
                            sale?: boolean | null;
                            salePrice?: number | null;
                        } | null;
                        properties?: Array<{
                            __typename?: 'IoRestorecommercePropertyProperty';
                            id?: string | null;
                            value?: string | null;
                            unitCode?: string | null;
                        }> | null;
                    }> | null;
                } | null;
            } | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
        unitPrice?: {
            __typename?: 'IoRestorecommercePricePrice';
            currencyId?: string | null;
            regularPrice?: number | null;
            sale?: boolean | null;
            salePrice?: number | null;
            currency?: {
                __typename?: 'IoRestorecommerceCurrencyCurrency';
                name?: string | null;
                symbol?: string | null;
            } | null;
        } | null;
    }> | null;
    shop?: {
        __typename?: 'IoRestorecommerceShopShop';
        id?: string | null;
        shopNumber?: string | null;
        name?: string | null;
        description?: string | null;
        domains?: Array<string> | null;
        organization?: {
            __typename?: 'IoRestorecommerceOrganizationOrganization';
            id?: string | null;
            parentId?: string | null;
            name?: string | null;
            email?: string | null;
            website?: string | null;
            vatId?: string | null;
            logo?: {
                __typename?: 'IoRestorecommerceImageImage';
                id?: string | null;
                index?: number | null;
                filename?: string | null;
                height?: number | null;
                width?: number | null;
                url?: string | null;
            } | null;
            paymentMethods?: Array<{
                __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                id?: string | null;
                transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
            }> | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    user?: {
        __typename?: 'IoRestorecommerceUserUser';
        id?: string | null;
        active?: boolean | null;
        activationCode?: string | null;
        email?: string | null;
        newEmail?: string | null;
        name?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        lastAccess?: unknown | null;
        defaultScope?: string | null;
        localeId?: string | null;
        timezoneId?: string | null;
        roleAssociations?: Array<{
            __typename?: 'IoRestorecommerceAuthRoleAssociation';
            role?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        }> | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    shippingAddress?: {
        __typename?: 'IoRestorecommerceAddressShippingAddress';
        comments?: string | null;
        contact?: {
            __typename?: 'IoRestorecommerceAddressContact';
            name?: string | null;
            email?: string | null;
            phone?: string | null;
        } | null;
        address?: {
            __typename?: 'IoRestorecommerceAddressAddress';
            id?: string | null;
            buildingNumber?: string | null;
            street?: string | null;
            postcode?: string | null;
            locality?: string | null;
            region?: string | null;
            addressAddition?: {
                __typename?: 'IoRestorecommerceAddressAddressAddition';
                field1?: string | null;
                field2?: string | null;
            } | null;
            businessAddress?: {
                __typename?: 'IoRestorecommerceAddressBusinessAddress';
                name?: string | null;
            } | null;
            packStation?: {
                __typename?: 'IoRestorecommerceAddressPackStation';
                postNumber?: string | null;
                provider?: string | null;
                stationNumber?: string | null;
            } | null;
            residentialAddress?: {
                __typename?: 'IoRestorecommerceAddressResidentialAddress';
                title?: string | null;
                givenName?: string | null;
                familyName?: string | null;
                midName?: string | null;
            } | null;
            country?: {
                __typename?: 'IoRestorecommerceCountryCountry';
                id?: string | null;
                name?: string | null;
                countryCode?: string | null;
                geographicalName?: string | null;
            } | null;
            geoCoordinates?: {
                __typename?: 'IoRestorecommerceAddressGeoPoint';
                latitude?: number | null;
                longitude?: number | null;
            } | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
    } | null;
    billingAddress?: {
        __typename?: 'IoRestorecommerceAddressBillingAddress';
        comments?: string | null;
        contact?: {
            __typename?: 'IoRestorecommerceAddressContact';
            name?: string | null;
            email?: string | null;
            phone?: string | null;
        } | null;
        address?: {
            __typename?: 'IoRestorecommerceAddressAddress';
            id?: string | null;
            buildingNumber?: string | null;
            street?: string | null;
            postcode?: string | null;
            locality?: string | null;
            region?: string | null;
            addressAddition?: {
                __typename?: 'IoRestorecommerceAddressAddressAddition';
                field1?: string | null;
                field2?: string | null;
            } | null;
            businessAddress?: {
                __typename?: 'IoRestorecommerceAddressBusinessAddress';
                name?: string | null;
            } | null;
            packStation?: {
                __typename?: 'IoRestorecommerceAddressPackStation';
                postNumber?: string | null;
                provider?: string | null;
                stationNumber?: string | null;
            } | null;
            residentialAddress?: {
                __typename?: 'IoRestorecommerceAddressResidentialAddress';
                title?: string | null;
                givenName?: string | null;
                familyName?: string | null;
                midName?: string | null;
            } | null;
            country?: {
                __typename?: 'IoRestorecommerceCountryCountry';
                id?: string | null;
                name?: string | null;
                countryCode?: string | null;
                geographicalName?: string | null;
            } | null;
            geoCoordinates?: {
                __typename?: 'IoRestorecommerceAddressGeoPoint';
                latitude?: number | null;
                longitude?: number | null;
            } | null;
            meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
                owners?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                    attributes?: Array<{
                        __typename?: 'IoRestorecommerceAttributeAttribute';
                        id?: string | null;
                        value?: string | null;
                    }> | null;
                }> | null;
            } | null;
        } | null;
    } | null;
    totalAmounts?: Array<{
        __typename?: 'IoRestorecommerceAmountAmount';
        gross?: number | null;
        net?: number | null;
        currency?: {
            __typename?: 'IoRestorecommerceCurrencyCurrency';
            name?: string | null;
            customExchangeRates?: Array<{
                __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                amount?: number | null;
                rate?: number | null;
                expenses?: number | null;
            }> | null;
        } | null;
        vats?: Array<{
            __typename?: 'IoRestorecommerceAmountVAT';
            vat?: number | null;
            tax?: {
                __typename?: 'IoRestorecommerceTaxTax';
                rate?: number | null;
                variant?: string | null;
                countryId?: string | null;
                type?: {
                    __typename?: 'IoRestorecommerceTaxTypeTaxType';
                    type?: string | null;
                    description?: string | null;
                } | null;
            } | null;
        }> | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type OrganizationFragmentFragment = {
    __typename?: 'IoRestorecommerceOrganizationOrganization';
    id?: string | null;
    parentId?: string | null;
    name?: string | null;
    email?: string | null;
    website?: string | null;
    vatId?: string | null;
    logo?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        height?: number | null;
        width?: number | null;
        url?: string | null;
    } | null;
    paymentMethods?: Array<{
        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
        id?: string | null;
        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type PriceGroupFragmentFragment = {
    __typename?: 'IoRestorecommercePriceGroupPriceGroup';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ProductCategoryFragmentFragment = {
    __typename?: 'IoRestorecommerceProductCategoryProductCategory';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    image?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        url?: string | null;
        caption?: string | null;
        contentType?: string | null;
        tags?: Array<string> | null;
        height?: number | null;
        width?: number | null;
    } | null;
    parent?: {
        __typename?: 'IoRestorecommerceProductCategoryParent';
        parentId?: string | null;
    } | null;
    priceGroup?: {
        __typename?: 'IoRestorecommercePriceGroupPriceGroup';
        id?: string | null;
        name?: string | null;
        description?: string | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ProductPrototypeFragmentFragment = {
    __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    categoryId?: string | null;
    version?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ProductVariantFragmentFragment = {
    __typename?: 'IoRestorecommerceProductPhysicalVariant';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    taricCode?: string | null;
    stockLevel?: number | null;
    stockKeepingUnit?: string | null;
    parentVariantId?: string | null;
    taxIds?: Array<string> | null;
    images?: Array<{
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        url?: string | null;
        caption?: string | null;
        contentType?: string | null;
        tags?: Array<string> | null;
        height?: number | null;
        width?: number | null;
    }> | null;
    files?: Array<{
        __typename?: 'IoRestorecommerceFileFile';
        id?: string | null;
        url?: string | null;
        filename?: string | null;
        caption?: string | null;
        contentType?: string | null;
        tags?: Array<string> | null;
        thumbnail?: {
            __typename?: 'IoRestorecommerceImageImage';
            id?: string | null;
            index?: number | null;
            filename?: string | null;
            url?: string | null;
            caption?: string | null;
            contentType?: string | null;
            tags?: Array<string> | null;
            height?: number | null;
            width?: number | null;
        } | null;
    }> | null;
    price?: {
        __typename?: 'IoRestorecommercePricePrice';
        currencyId?: string | null;
        regularPrice?: number | null;
        sale?: boolean | null;
        salePrice?: number | null;
    } | null;
    properties?: Array<{
        __typename?: 'IoRestorecommercePropertyProperty';
        id?: string | null;
        value?: string | null;
        unitCode?: string | null;
    }> | null;
};
type ProductFragmentFragment = {
    __typename?: 'IoRestorecommerceProductProduct';
    id?: string | null;
    product?: {
        __typename?: 'IoRestorecommerceProductIndividualProduct';
        name?: string | null;
        description?: string | null;
        taxIds?: Array<string> | null;
        gtin?: string | null;
        manufacturerId?: string | null;
        originCountryId?: string | null;
        categoryId?: string | null;
        prototypeId?: string | null;
        physical?: {
            __typename?: 'IoRestorecommerceProductPhysicalProduct';
            templates?: Array<{
                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                id?: string | null;
                name?: string | null;
                description?: string | null;
                taricCode?: string | null;
                stockLevel?: number | null;
                stockKeepingUnit?: string | null;
                parentVariantId?: string | null;
                taxIds?: Array<string> | null;
                images?: Array<{
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    url?: string | null;
                    caption?: string | null;
                    contentType?: string | null;
                    tags?: Array<string> | null;
                    height?: number | null;
                    width?: number | null;
                }> | null;
                files?: Array<{
                    __typename?: 'IoRestorecommerceFileFile';
                    id?: string | null;
                    url?: string | null;
                    filename?: string | null;
                    caption?: string | null;
                    contentType?: string | null;
                    tags?: Array<string> | null;
                    thumbnail?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        url?: string | null;
                        caption?: string | null;
                        contentType?: string | null;
                        tags?: Array<string> | null;
                        height?: number | null;
                        width?: number | null;
                    } | null;
                }> | null;
                price?: {
                    __typename?: 'IoRestorecommercePricePrice';
                    currencyId?: string | null;
                    regularPrice?: number | null;
                    sale?: boolean | null;
                    salePrice?: number | null;
                } | null;
                properties?: Array<{
                    __typename?: 'IoRestorecommercePropertyProperty';
                    id?: string | null;
                    value?: string | null;
                    unitCode?: string | null;
                }> | null;
            }> | null;
            variants?: Array<{
                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                id?: string | null;
                name?: string | null;
                description?: string | null;
                taricCode?: string | null;
                stockLevel?: number | null;
                stockKeepingUnit?: string | null;
                parentVariantId?: string | null;
                taxIds?: Array<string> | null;
                images?: Array<{
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    url?: string | null;
                    caption?: string | null;
                    contentType?: string | null;
                    tags?: Array<string> | null;
                    height?: number | null;
                    width?: number | null;
                }> | null;
                files?: Array<{
                    __typename?: 'IoRestorecommerceFileFile';
                    id?: string | null;
                    url?: string | null;
                    filename?: string | null;
                    caption?: string | null;
                    contentType?: string | null;
                    tags?: Array<string> | null;
                    thumbnail?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        url?: string | null;
                        caption?: string | null;
                        contentType?: string | null;
                        tags?: Array<string> | null;
                        height?: number | null;
                        width?: number | null;
                    } | null;
                }> | null;
                price?: {
                    __typename?: 'IoRestorecommercePricePrice';
                    currencyId?: string | null;
                    regularPrice?: number | null;
                    sale?: boolean | null;
                    salePrice?: number | null;
                } | null;
                properties?: Array<{
                    __typename?: 'IoRestorecommercePropertyProperty';
                    id?: string | null;
                    value?: string | null;
                    unitCode?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type RoleFragmentFragment = {
    __typename?: 'IoRestorecommerceRoleRole';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    assignableByRoles?: Array<string> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type ShopFragmentFragment = {
    __typename?: 'IoRestorecommerceShopShop';
    id?: string | null;
    shopNumber?: string | null;
    name?: string | null;
    description?: string | null;
    domains?: Array<string> | null;
    organization?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        parentId?: string | null;
        name?: string | null;
        email?: string | null;
        website?: string | null;
        vatId?: string | null;
        logo?: {
            __typename?: 'IoRestorecommerceImageImage';
            id?: string | null;
            index?: number | null;
            filename?: string | null;
            height?: number | null;
            width?: number | null;
            url?: string | null;
        } | null;
        paymentMethods?: Array<{
            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
            id?: string | null;
            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
        }> | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    } | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type StatusFragmentFragment = {
    __typename?: 'IoRestorecommerceStatusStatus';
    code?: number | null;
    message?: string | null;
};
type TaxFragmentFragment = {
    __typename?: 'IoRestorecommerceTaxTax';
    id?: string | null;
    name?: string | null;
    rate?: number | null;
    typeId?: string | null;
    variant?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type TimezoneFragmentFragment = {
    __typename?: 'IoRestorecommerceTimezoneTimezone';
    id?: string | null;
    name?: string | null;
    description?: string | null;
    value?: string | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type UserRoleFragmentFragment = {
    __typename?: 'IoRestorecommerceUserUserRole';
    id?: string | null;
    active?: boolean | null;
    activationCode?: string | null;
    email?: string | null;
    newEmail?: string | null;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    userType?: IoRestorecommerceUserUserType | null;
    defaultScope?: string | null;
    lastAccess?: unknown | null;
    localeId?: string | null;
    timezoneId?: string | null;
    tokens?: Array<{
        __typename?: 'IoRestorecommerceAuthTokens';
        name?: string | null;
        token?: string | null;
        lastLogin?: unknown | null;
        expiresIn?: unknown | null;
        clientId?: string | null;
        interactive?: boolean | null;
        type?: string | null;
        scopes?: Array<string> | null;
    }> | null;
    roles?: Array<{
        __typename?: 'IoRestorecommerceRoleRole';
        id?: string | null;
        name?: string | null;
        description?: string | null;
        assignableByRoles?: Array<string> | null;
        meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
            owners?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
                attributes?: Array<{
                    __typename?: 'IoRestorecommerceAttributeAttribute';
                    id?: string | null;
                    value?: string | null;
                }> | null;
            }> | null;
        } | null;
    }> | null;
    roleAssociations?: Array<{
        __typename?: 'IoRestorecommerceAuthRoleAssociation';
        role?: string | null;
        attributes?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type UserFragmentFragment = {
    __typename?: 'IoRestorecommerceUserUser';
    id?: string | null;
    active?: boolean | null;
    activationCode?: string | null;
    email?: string | null;
    newEmail?: string | null;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    lastAccess?: unknown | null;
    defaultScope?: string | null;
    localeId?: string | null;
    timezoneId?: string | null;
    roleAssociations?: Array<{
        __typename?: 'IoRestorecommerceAuthRoleAssociation';
        role?: string | null;
        attributes?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    }> | null;
    meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
        owners?: Array<{
            __typename?: 'IoRestorecommerceAttributeAttribute';
            id?: string | null;
            value?: string | null;
            attributes?: Array<{
                __typename?: 'IoRestorecommerceAttributeAttribute';
                id?: string | null;
                value?: string | null;
            }> | null;
        }> | null;
    } | null;
};
type FulfillmentFulfillmentMutateMutationVariables = Exact<{
    input: IIoRestorecommerceFulfillmentFulfillmentList;
}>;
type FulfillmentFulfillmentMutateMutation = {
    __typename?: 'Mutation';
    fulfillment: {
        __typename?: 'FulfillmentMutation';
        fulfillment: {
            __typename?: 'FulfillmentFulfillmentMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                            id?: string | null;
                            customerId?: string | null;
                            shopId?: string | null;
                            userId?: string | null;
                            fulfillmentState?: IoRestorecommerceFulfillmentFulfillmentState | null;
                            labels?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentLabel';
                                shipmentNumber?: string | null;
                                state?: IoRestorecommerceFulfillmentFulfillmentState | null;
                                parcelId?: string | null;
                                file?: {
                                    __typename?: 'IoRestorecommerceFileFile';
                                    url?: string | null;
                                } | null;
                                status?: {
                                    __typename?: 'IoRestorecommerceStatusStatus';
                                    code?: number | null;
                                    message?: string | null;
                                } | null;
                            }> | null;
                            packaging?: {
                                __typename?: 'IoRestorecommerceFulfillmentPackaging';
                                notify?: string | null;
                                parcels?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentParcel';
                                    id?: string | null;
                                    productId?: string | null;
                                    variantId?: string | null;
                                    items?: Array<{
                                        __typename?: 'IoRestorecommerceFulfillmentItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                        hsCode?: string | null;
                                        taricCode?: string | null;
                                        name?: string | null;
                                        quantity?: number | null;
                                        package?: {
                                            __typename?: 'IoRestorecommerceProductPackage';
                                            rotatable?: boolean | null;
                                            weightInKg?: number | null;
                                            sizeInCm?: {
                                                __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                                height?: number | null;
                                                width?: number | null;
                                                length?: number | null;
                                            } | null;
                                        } | null;
                                    }> | null;
                                    package?: {
                                        __typename?: 'IoRestorecommerceProductPackage';
                                        rotatable?: boolean | null;
                                        weightInKg?: number | null;
                                        sizeInCm?: {
                                            __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                            height?: number | null;
                                            width?: number | null;
                                            length?: number | null;
                                        } | null;
                                    } | null;
                                }> | null;
                                sender?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    comments?: string | null;
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                    } | null;
                                    contact?: {
                                        __typename?: 'IoRestorecommerceAddressContact';
                                        name?: string | null;
                                        email?: string | null;
                                        phone?: string | null;
                                    } | null;
                                } | null;
                                recipient?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                        countryId?: string | null;
                                    } | null;
                                } | null;
                                customsDeclaration?: {
                                    __typename?: 'IoRestorecommerceFulfillmentCustomsDeclaration';
                                    invoiceNumber?: string | null;
                                    exportDescription?: string | null;
                                    exportType?: string | null;
                                } | null;
                            } | null;
                            references?: Array<{
                                __typename?: 'IoRestorecommerceReferenceReference';
                                instanceType?: string | null;
                                instanceId?: string | null;
                            }> | null;
                            trackings?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentTracking';
                                shipmentNumber?: string | null;
                                events?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentEvent';
                                    location?: string | null;
                                    timestamp?: unknown | null;
                                    details?: {
                                        __typename?: 'GoogleProtobufAny';
                                        value?: unknown | null;
                                        typeUrl?: string | null;
                                    } | null;
                                    status?: {
                                        __typename?: 'IoRestorecommerceStatusStatus';
                                        code?: number | null;
                                        message?: string | null;
                                    } | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type FulfillmentFulfillmentDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type FulfillmentFulfillmentDeleteMutateMutation = {
    __typename?: 'Mutation';
    fulfillment: {
        __typename?: 'FulfillmentMutation';
        fulfillment: {
            __typename?: 'FulfillmentFulfillmentMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type FulfillmentFulfillmentReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type FulfillmentFulfillmentReadQuery = {
    __typename?: 'Query';
    fulfillment: {
        __typename?: 'FulfillmentQuery';
        fulfillment: {
            __typename?: 'FulfillmentFulfillmentQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                            id?: string | null;
                            customerId?: string | null;
                            shopId?: string | null;
                            userId?: string | null;
                            fulfillmentState?: IoRestorecommerceFulfillmentFulfillmentState | null;
                            labels?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentLabel';
                                shipmentNumber?: string | null;
                                state?: IoRestorecommerceFulfillmentFulfillmentState | null;
                                parcelId?: string | null;
                                file?: {
                                    __typename?: 'IoRestorecommerceFileFile';
                                    url?: string | null;
                                } | null;
                                status?: {
                                    __typename?: 'IoRestorecommerceStatusStatus';
                                    code?: number | null;
                                    message?: string | null;
                                } | null;
                            }> | null;
                            packaging?: {
                                __typename?: 'IoRestorecommerceFulfillmentPackaging';
                                notify?: string | null;
                                parcels?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentParcel';
                                    id?: string | null;
                                    productId?: string | null;
                                    variantId?: string | null;
                                    items?: Array<{
                                        __typename?: 'IoRestorecommerceFulfillmentItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                        hsCode?: string | null;
                                        taricCode?: string | null;
                                        name?: string | null;
                                        quantity?: number | null;
                                        package?: {
                                            __typename?: 'IoRestorecommerceProductPackage';
                                            rotatable?: boolean | null;
                                            weightInKg?: number | null;
                                            sizeInCm?: {
                                                __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                                height?: number | null;
                                                width?: number | null;
                                                length?: number | null;
                                            } | null;
                                        } | null;
                                    }> | null;
                                    package?: {
                                        __typename?: 'IoRestorecommerceProductPackage';
                                        rotatable?: boolean | null;
                                        weightInKg?: number | null;
                                        sizeInCm?: {
                                            __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                            height?: number | null;
                                            width?: number | null;
                                            length?: number | null;
                                        } | null;
                                    } | null;
                                }> | null;
                                sender?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    comments?: string | null;
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                    } | null;
                                    contact?: {
                                        __typename?: 'IoRestorecommerceAddressContact';
                                        name?: string | null;
                                        email?: string | null;
                                        phone?: string | null;
                                    } | null;
                                } | null;
                                recipient?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                        countryId?: string | null;
                                    } | null;
                                } | null;
                                customsDeclaration?: {
                                    __typename?: 'IoRestorecommerceFulfillmentCustomsDeclaration';
                                    invoiceNumber?: string | null;
                                    exportDescription?: string | null;
                                    exportType?: string | null;
                                } | null;
                            } | null;
                            references?: Array<{
                                __typename?: 'IoRestorecommerceReferenceReference';
                                instanceType?: string | null;
                                instanceId?: string | null;
                            }> | null;
                            trackings?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentTracking';
                                shipmentNumber?: string | null;
                                events?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentEvent';
                                    location?: string | null;
                                    timestamp?: unknown | null;
                                    details?: {
                                        __typename?: 'GoogleProtobufAny';
                                        value?: unknown | null;
                                        typeUrl?: string | null;
                                    } | null;
                                    status?: {
                                        __typename?: 'IoRestorecommerceStatusStatus';
                                        code?: number | null;
                                        message?: string | null;
                                    } | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type FulfillmentFulfillmentSubmitMutationVariables = Exact<{
    input: IIoRestorecommerceFulfillmentFulfillmentList;
}>;
type FulfillmentFulfillmentSubmitMutation = {
    __typename?: 'Mutation';
    fulfillment: {
        __typename?: 'FulfillmentMutation';
        fulfillment: {
            __typename?: 'FulfillmentFulfillmentMutation';
            Submit?: {
                __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                            id?: string | null;
                            customerId?: string | null;
                            shopId?: string | null;
                            userId?: string | null;
                            fulfillmentState?: IoRestorecommerceFulfillmentFulfillmentState | null;
                            labels?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentLabel';
                                shipmentNumber?: string | null;
                                state?: IoRestorecommerceFulfillmentFulfillmentState | null;
                                parcelId?: string | null;
                                file?: {
                                    __typename?: 'IoRestorecommerceFileFile';
                                    url?: string | null;
                                } | null;
                                status?: {
                                    __typename?: 'IoRestorecommerceStatusStatus';
                                    code?: number | null;
                                    message?: string | null;
                                } | null;
                            }> | null;
                            packaging?: {
                                __typename?: 'IoRestorecommerceFulfillmentPackaging';
                                notify?: string | null;
                                parcels?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentParcel';
                                    id?: string | null;
                                    productId?: string | null;
                                    variantId?: string | null;
                                    items?: Array<{
                                        __typename?: 'IoRestorecommerceFulfillmentItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                        hsCode?: string | null;
                                        taricCode?: string | null;
                                        name?: string | null;
                                        quantity?: number | null;
                                        package?: {
                                            __typename?: 'IoRestorecommerceProductPackage';
                                            rotatable?: boolean | null;
                                            weightInKg?: number | null;
                                            sizeInCm?: {
                                                __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                                height?: number | null;
                                                width?: number | null;
                                                length?: number | null;
                                            } | null;
                                        } | null;
                                    }> | null;
                                    package?: {
                                        __typename?: 'IoRestorecommerceProductPackage';
                                        rotatable?: boolean | null;
                                        weightInKg?: number | null;
                                        sizeInCm?: {
                                            __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
                                            height?: number | null;
                                            width?: number | null;
                                            length?: number | null;
                                        } | null;
                                    } | null;
                                }> | null;
                                sender?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    comments?: string | null;
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                    } | null;
                                    contact?: {
                                        __typename?: 'IoRestorecommerceAddressContact';
                                        name?: string | null;
                                        email?: string | null;
                                        phone?: string | null;
                                    } | null;
                                } | null;
                                recipient?: {
                                    __typename?: 'IoRestorecommerceAddressShippingAddress';
                                    address?: {
                                        __typename?: 'IoRestorecommerceAddressAddress';
                                        id?: string | null;
                                        postcode?: string | null;
                                        countryId?: string | null;
                                    } | null;
                                } | null;
                                customsDeclaration?: {
                                    __typename?: 'IoRestorecommerceFulfillmentCustomsDeclaration';
                                    invoiceNumber?: string | null;
                                    exportDescription?: string | null;
                                    exportType?: string | null;
                                } | null;
                            } | null;
                            references?: Array<{
                                __typename?: 'IoRestorecommerceReferenceReference';
                                instanceType?: string | null;
                                instanceId?: string | null;
                            }> | null;
                            trackings?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentTracking';
                                shipmentNumber?: string | null;
                                events?: Array<{
                                    __typename?: 'IoRestorecommerceFulfillmentEvent';
                                    location?: string | null;
                                    timestamp?: unknown | null;
                                    details?: {
                                        __typename?: 'GoogleProtobufAny';
                                        value?: unknown | null;
                                        typeUrl?: string | null;
                                    } | null;
                                    status?: {
                                        __typename?: 'IoRestorecommerceStatusStatus';
                                        code?: number | null;
                                        message?: string | null;
                                    } | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type IdentityRoleMutateMutationVariables = Exact<{
    input: IIoRestorecommerceRoleRoleList;
}>;
type IdentityRoleMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        role: {
            __typename?: 'IdentityRoleMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceRoleRoleListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceRoleRoleResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceRoleRole';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            assignableByRoles?: Array<string> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type IdentityRoleDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type IdentityRoleDeleteMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        role: {
            __typename?: 'IdentityRoleMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityRoleReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type IdentityRoleReadQuery = {
    __typename?: 'Query';
    identity: {
        __typename?: 'IdentityQuery';
        role: {
            __typename?: 'IdentityRoleQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceRoleRoleListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceRoleRoleResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceRoleRole';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            assignableByRoles?: Array<string> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserFindByTokenQueryVariables = Exact<{
    input: IIoRestorecommerceUserFindByTokenRequest;
}>;
type IdentityUserFindByTokenQuery = {
    __typename?: 'Query';
    identity: {
        __typename?: 'IdentityQuery';
        user: {
            __typename?: 'IdentityUserQuery';
            FindByToken?: {
                __typename?: 'ProtoIoRestorecommerceUserUserResponse';
                details?: {
                    __typename?: 'IoRestorecommerceUserUserResponse';
                    status?: {
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    payload?: {
                        __typename?: 'IoRestorecommerceUserUser';
                        id?: string | null;
                        active?: boolean | null;
                        activationCode?: string | null;
                        email?: string | null;
                        newEmail?: string | null;
                        name?: string | null;
                        firstName?: string | null;
                        lastName?: string | null;
                        lastAccess?: unknown | null;
                        defaultScope?: string | null;
                        localeId?: string | null;
                        timezoneId?: string | null;
                        roleAssociations?: Array<{
                            __typename?: 'IoRestorecommerceAuthRoleAssociation';
                            role?: string | null;
                            attributes?: Array<{
                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                id?: string | null;
                                value?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                }> | null;
                            }> | null;
                        }> | null;
                        meta?: {
                            __typename?: 'IoRestorecommerceMetaMeta';
                            created?: unknown | null;
                            modified?: unknown | null;
                            createdBy?: string | null;
                            modifiedBy?: string | null;
                            owners?: Array<{
                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                id?: string | null;
                                value?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                }> | null;
                            }> | null;
                        } | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserFindQueryVariables = Exact<{
    input: IIoRestorecommerceUserFindRequest;
}>;
type IdentityUserFindQuery = {
    __typename?: 'Query';
    identity: {
        __typename?: 'IdentityQuery';
        user: {
            __typename?: 'IdentityUserQuery';
            Find?: {
                __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceUserUserListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceUserUserResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceUserUser';
                            id?: string | null;
                            active?: boolean | null;
                            activationCode?: string | null;
                            email?: string | null;
                            newEmail?: string | null;
                            name?: string | null;
                            firstName?: string | null;
                            lastName?: string | null;
                            lastAccess?: unknown | null;
                            defaultScope?: string | null;
                            localeId?: string | null;
                            timezoneId?: string | null;
                            roleAssociations?: Array<{
                                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                role?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserUserList;
}>;
type IdentityUserMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceUserUserListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceUserUserResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceUserUser';
                            id?: string | null;
                            active?: boolean | null;
                            activationCode?: string | null;
                            email?: string | null;
                            newEmail?: string | null;
                            name?: string | null;
                            firstName?: string | null;
                            lastName?: string | null;
                            lastAccess?: unknown | null;
                            defaultScope?: string | null;
                            localeId?: string | null;
                            timezoneId?: string | null;
                            roleAssociations?: Array<{
                                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                role?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserRegisterMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserRegisterRequest;
}>;
type IdentityUserRegisterMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            Register?: {
                __typename?: 'ProtoIoRestorecommerceUserUserResponse';
                details?: {
                    __typename?: 'IoRestorecommerceUserUserResponse';
                    status?: {
                        __typename?: 'IoRestorecommerceStatusStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    payload?: {
                        __typename?: 'IoRestorecommerceUserUser';
                        id?: string | null;
                        active?: boolean | null;
                        activationCode?: string | null;
                        email?: string | null;
                        newEmail?: string | null;
                        name?: string | null;
                        firstName?: string | null;
                        lastName?: string | null;
                        lastAccess?: unknown | null;
                        defaultScope?: string | null;
                        localeId?: string | null;
                        timezoneId?: string | null;
                        roleAssociations?: Array<{
                            __typename?: 'IoRestorecommerceAuthRoleAssociation';
                            role?: string | null;
                            attributes?: Array<{
                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                id?: string | null;
                                value?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                }> | null;
                            }> | null;
                        }> | null;
                        meta?: {
                            __typename?: 'IoRestorecommerceMetaMeta';
                            created?: unknown | null;
                            modified?: unknown | null;
                            createdBy?: string | null;
                            modifiedBy?: string | null;
                            owners?: Array<{
                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                id?: string | null;
                                value?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                }> | null;
                            }> | null;
                        } | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserActivateMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserActivateRequest;
}>;
type IdentityUserActivateMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            Activate?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserRequestEmailChangeMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserChangeEmailRequest;
}>;
type IdentityUserRequestEmailChangeMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            RequestEmailChange?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserConfirmEmailChangeMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserConfirmEmailChangeRequest;
}>;
type IdentityUserConfirmEmailChangeMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            ConfirmEmailChange?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserRequestPasswordChangeMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserRequestPasswordChangeRequest;
}>;
type IdentityUserRequestPasswordChangeMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            RequestPasswordChange?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserConfirmPasswordChangeMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
}>;
type IdentityUserConfirmPasswordChangeMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            ConfirmPasswordChange?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserChangePasswordMutateMutationVariables = Exact<{
    input: IIoRestorecommerceUserChangePasswordRequest;
}>;
type IdentityUserChangePasswordMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            ChangePassword?: {
                __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
                details?: {
                    __typename?: 'IoRestorecommerceStatusOperationStatusObj';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type IdentityUserDeleteMutateMutation = {
    __typename?: 'Mutation';
    identity: {
        __typename?: 'IdentityMutation';
        user: {
            __typename?: 'IdentityUserMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type IdentityUserReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type IdentityUserReadQuery = {
    __typename?: 'Query';
    identity: {
        __typename?: 'IdentityQuery';
        user: {
            __typename?: 'IdentityUserQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
                details?: {
                    __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceUserUserRoleResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceUserUserRole';
                            id?: string | null;
                            active?: boolean | null;
                            activationCode?: string | null;
                            email?: string | null;
                            newEmail?: string | null;
                            name?: string | null;
                            firstName?: string | null;
                            lastName?: string | null;
                            userType?: IoRestorecommerceUserUserType | null;
                            defaultScope?: string | null;
                            lastAccess?: unknown | null;
                            localeId?: string | null;
                            timezoneId?: string | null;
                            tokens?: Array<{
                                __typename?: 'IoRestorecommerceAuthTokens';
                                name?: string | null;
                                token?: string | null;
                                lastLogin?: unknown | null;
                                expiresIn?: unknown | null;
                                clientId?: string | null;
                                interactive?: boolean | null;
                                type?: string | null;
                                scopes?: Array<string> | null;
                            }> | null;
                            roles?: Array<{
                                __typename?: 'IoRestorecommerceRoleRole';
                                id?: string | null;
                                name?: string | null;
                                description?: string | null;
                                assignableByRoles?: Array<string> | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            }> | null;
                            roleAssociations?: Array<{
                                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                role?: string | null;
                                attributes?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type InvoicingInvoiceMutateMutationVariables = Exact<{
    input: IIoRestorecommerceInvoiceInvoiceList;
}>;
type InvoicingInvoiceMutateMutation = {
    __typename?: 'Mutation';
    invoicing: {
        __typename?: 'InvoicingMutation';
        invoice: {
            __typename?: 'InvoicingInvoiceMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceInvoiceInvoice';
                            id?: string | null;
                            invoiceNumber?: string | null;
                            fromDate?: unknown | null;
                            toDate?: unknown | null;
                            shopId?: string | null;
                            sent?: boolean | null;
                            withdrawn?: boolean | null;
                            paymentState?: IoRestorecommerceInvoicePaymentState | null;
                            customerOrderNumber?: string | null;
                            userId?: string | null;
                            customerId?: string | null;
                            timestamp?: unknown | null;
                            sections?: Array<{
                                __typename?: 'IoRestorecommerceInvoiceSection';
                                id?: string | null;
                                customerRemark?: string | null;
                                positions?: Array<{
                                    __typename?: 'IoRestorecommerceInvoicePosition';
                                    id?: string | null;
                                    toDate?: unknown | null;
                                    quantity?: number | null;
                                    fromDate?: unknown | null;
                                    unitPrice?: {
                                        __typename?: 'IoRestorecommercePricePrice';
                                        salePrice?: number | null;
                                        currencyId?: string | null;
                                        sale?: boolean | null;
                                        regularPrice?: number | null;
                                    } | null;
                                    fulfillmentItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                    } | null;
                                    manualItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceManualItem';
                                        name?: string | null;
                                        descritpion?: string | null;
                                        stockKeepingUnit?: string | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    } | null;
                                    productItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceProductItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                        product?: {
                                            __typename?: 'IoRestorecommerceProductProduct';
                                            id?: string | null;
                                            active?: boolean | null;
                                            tags?: Array<string> | null;
                                            shopIds?: Array<string> | null;
                                        } | null;
                                    } | null;
                                }> | null;
                                amounts?: Array<{
                                    __typename?: 'IoRestorecommerceAmountAmount';
                                    gross?: number | null;
                                    net?: number | null;
                                    currencyId?: string | null;
                                    vats?: Array<{
                                        __typename?: 'IoRestorecommerceAmountVAT';
                                        taxId?: string | null;
                                        vat?: number | null;
                                    }> | null;
                                }> | null;
                            }> | null;
                            totalAmounts?: Array<{
                                __typename?: 'IoRestorecommerceAmountAmount';
                                currencyId?: string | null;
                                gross?: number | null;
                                net?: number | null;
                                vats?: Array<{
                                    __typename?: 'IoRestorecommerceAmountVAT';
                                    taxId?: string | null;
                                    vat?: number | null;
                                }> | null;
                            }> | null;
                            references?: Array<{
                                __typename?: 'IoRestorecommerceReferenceReference';
                                instanceType?: string | null;
                                instanceId?: string | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type InvoicingInvoiceDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type InvoicingInvoiceDeleteMutateMutation = {
    __typename?: 'Mutation';
    invoicing: {
        __typename?: 'InvoicingMutation';
        invoice: {
            __typename?: 'InvoicingInvoiceMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type InvoicingInvoiceReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type InvoicingInvoiceReadQuery = {
    __typename?: 'Query';
    invoicing: {
        __typename?: 'InvoicingQuery';
        invoice: {
            __typename?: 'InvoicingInvoiceQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceInvoiceInvoice';
                            id?: string | null;
                            invoiceNumber?: string | null;
                            fromDate?: unknown | null;
                            toDate?: unknown | null;
                            shopId?: string | null;
                            sent?: boolean | null;
                            withdrawn?: boolean | null;
                            paymentState?: IoRestorecommerceInvoicePaymentState | null;
                            customerOrderNumber?: string | null;
                            userId?: string | null;
                            customerId?: string | null;
                            timestamp?: unknown | null;
                            sections?: Array<{
                                __typename?: 'IoRestorecommerceInvoiceSection';
                                id?: string | null;
                                customerRemark?: string | null;
                                positions?: Array<{
                                    __typename?: 'IoRestorecommerceInvoicePosition';
                                    id?: string | null;
                                    toDate?: unknown | null;
                                    quantity?: number | null;
                                    fromDate?: unknown | null;
                                    unitPrice?: {
                                        __typename?: 'IoRestorecommercePricePrice';
                                        salePrice?: number | null;
                                        currencyId?: string | null;
                                        sale?: boolean | null;
                                        regularPrice?: number | null;
                                    } | null;
                                    fulfillmentItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                    } | null;
                                    manualItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceManualItem';
                                        name?: string | null;
                                        descritpion?: string | null;
                                        stockKeepingUnit?: string | null;
                                        properties?: Array<{
                                            __typename?: 'IoRestorecommercePropertyProperty';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    } | null;
                                    productItem?: {
                                        __typename?: 'IoRestorecommerceInvoiceProductItem';
                                        productId?: string | null;
                                        variantId?: string | null;
                                        product?: {
                                            __typename?: 'IoRestorecommerceProductProduct';
                                            id?: string | null;
                                            active?: boolean | null;
                                            tags?: Array<string> | null;
                                            shopIds?: Array<string> | null;
                                        } | null;
                                    } | null;
                                }> | null;
                                amounts?: Array<{
                                    __typename?: 'IoRestorecommerceAmountAmount';
                                    gross?: number | null;
                                    net?: number | null;
                                    currencyId?: string | null;
                                    vats?: Array<{
                                        __typename?: 'IoRestorecommerceAmountVAT';
                                        taxId?: string | null;
                                        vat?: number | null;
                                    }> | null;
                                }> | null;
                            }> | null;
                            totalAmounts?: Array<{
                                __typename?: 'IoRestorecommerceAmountAmount';
                                currencyId?: string | null;
                                gross?: number | null;
                                net?: number | null;
                                vats?: Array<{
                                    __typename?: 'IoRestorecommerceAmountVAT';
                                    taxId?: string | null;
                                    vat?: number | null;
                                }> | null;
                            }> | null;
                            references?: Array<{
                                __typename?: 'IoRestorecommerceReferenceReference';
                                instanceType?: string | null;
                                instanceId?: string | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataAddressReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataAddressReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        address: {
            __typename?: 'ResourceAddressQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceAddressAddressListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceAddressAddressResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceAddressAddress';
                            id?: string | null;
                            buildingNumber?: string | null;
                            street?: string | null;
                            postcode?: string | null;
                            locality?: string | null;
                            region?: string | null;
                            addressAddition?: {
                                __typename?: 'IoRestorecommerceAddressAddressAddition';
                                field1?: string | null;
                                field2?: string | null;
                            } | null;
                            businessAddress?: {
                                __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                name?: string | null;
                            } | null;
                            packStation?: {
                                __typename?: 'IoRestorecommerceAddressPackStation';
                                postNumber?: string | null;
                                provider?: string | null;
                                stationNumber?: string | null;
                            } | null;
                            residentialAddress?: {
                                __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                title?: string | null;
                                givenName?: string | null;
                                familyName?: string | null;
                                midName?: string | null;
                            } | null;
                            country?: {
                                __typename?: 'IoRestorecommerceCountryCountry';
                                id?: string | null;
                                name?: string | null;
                                countryCode?: string | null;
                                geographicalName?: string | null;
                            } | null;
                            geoCoordinates?: {
                                __typename?: 'IoRestorecommerceAddressGeoPoint';
                                latitude?: number | null;
                                longitude?: number | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCountryMutateMutationVariables = Exact<{
    input: IIoRestorecommerceCountryCountryList;
}>;
type MasterDataCountryMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        country: {
            __typename?: 'ResourceCountryMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCountryCountryListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCountryCountryResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCountryCountry';
                            id?: string | null;
                            name?: string | null;
                            countryCode?: string | null;
                            geographicalName?: string | null;
                            economicAreas?: Array<string> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCountryDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataCountryDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        country: {
            __typename?: 'ResourceCountryMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCountryReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataCountryReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        country: {
            __typename?: 'ResourceCountryQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCountryCountryListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCountryCountryResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCountryCountry';
                            id?: string | null;
                            name?: string | null;
                            countryCode?: string | null;
                            geographicalName?: string | null;
                            economicAreas?: Array<string> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCurrencyMutateMutationVariables = Exact<{
    input: IIoRestorecommerceCurrencyCurrencyList;
}>;
type MasterDataCurrencyMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        currency: {
            __typename?: 'ResourceCurrencyMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceCurrencyCurrencyListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCurrencyCurrencyListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCurrencyCurrencyResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCurrencyCurrency';
                            id?: string | null;
                            name?: string | null;
                            precision?: number | null;
                            symbol?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCurrencyDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataCurrencyDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        currency: {
            __typename?: 'ResourceCurrencyMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCurrencyReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataCurrencyReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        currency: {
            __typename?: 'ResourceCurrencyQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceCurrencyCurrencyListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCurrencyCurrencyListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCurrencyCurrencyResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCurrencyCurrency';
                            id?: string | null;
                            name?: string | null;
                            precision?: number | null;
                            symbol?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCustomerMutateMutationVariables = Exact<{
    input: IIoRestorecommerceCustomerCustomerList;
}>;
type MasterDataCustomerMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        customer: {
            __typename?: 'ResourceCustomerMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCustomerCustomerResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCustomerCustomer';
                            id?: string | null;
                            description?: string | null;
                            name?: string | null;
                            settingId?: string | null;
                            commercial?: {
                                __typename?: 'IoRestorecommerceCustomerCommercial';
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            publicSector?: {
                                __typename?: 'IoRestorecommerceCustomerPublicSector';
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            private?: {
                                __typename?: 'IoRestorecommerceCustomerPrivate';
                                user?: {
                                    __typename?: 'IoRestorecommerceUserUser';
                                    id?: string | null;
                                    active?: boolean | null;
                                    activationCode?: string | null;
                                    email?: string | null;
                                    newEmail?: string | null;
                                    name?: string | null;
                                    firstName?: string | null;
                                    lastName?: string | null;
                                    lastAccess?: unknown | null;
                                    defaultScope?: string | null;
                                    localeId?: string | null;
                                    timezoneId?: string | null;
                                    roleAssociations?: Array<{
                                        __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                        role?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                contactPoints?: Array<{
                                    __typename?: 'IoRestorecommerceContactPointContactPoint';
                                    id?: string | null;
                                    name?: string | null;
                                    description?: string | null;
                                    email?: string | null;
                                    telephone?: string | null;
                                    website?: string | null;
                                    timezone?: {
                                        __typename?: 'IoRestorecommerceTimezoneTimezone';
                                        id?: string | null;
                                        value?: string | null;
                                        description?: string | null;
                                    } | null;
                                    locale?: {
                                        __typename?: 'IoRestorecommerceLocaleLocale';
                                        id?: string | null;
                                        value?: string | null;
                                        description?: string | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                }> | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCustomerDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataCustomerDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        customer: {
            __typename?: 'ResourceCustomerMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataCustomerReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataCustomerReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        customer: {
            __typename?: 'ResourceCustomerQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceCustomerCustomerResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceCustomerCustomer';
                            id?: string | null;
                            description?: string | null;
                            name?: string | null;
                            settingId?: string | null;
                            commercial?: {
                                __typename?: 'IoRestorecommerceCustomerCommercial';
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            publicSector?: {
                                __typename?: 'IoRestorecommerceCustomerPublicSector';
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            private?: {
                                __typename?: 'IoRestorecommerceCustomerPrivate';
                                user?: {
                                    __typename?: 'IoRestorecommerceUserUser';
                                    id?: string | null;
                                    active?: boolean | null;
                                    activationCode?: string | null;
                                    email?: string | null;
                                    newEmail?: string | null;
                                    name?: string | null;
                                    firstName?: string | null;
                                    lastName?: string | null;
                                    lastAccess?: unknown | null;
                                    defaultScope?: string | null;
                                    localeId?: string | null;
                                    timezoneId?: string | null;
                                    roleAssociations?: Array<{
                                        __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                        role?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                contactPoints?: Array<{
                                    __typename?: 'IoRestorecommerceContactPointContactPoint';
                                    id?: string | null;
                                    name?: string | null;
                                    description?: string | null;
                                    email?: string | null;
                                    telephone?: string | null;
                                    website?: string | null;
                                    timezone?: {
                                        __typename?: 'IoRestorecommerceTimezoneTimezone';
                                        id?: string | null;
                                        value?: string | null;
                                        description?: string | null;
                                    } | null;
                                    locale?: {
                                        __typename?: 'IoRestorecommerceLocaleLocale';
                                        id?: string | null;
                                        value?: string | null;
                                        description?: string | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                }> | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataLocaleReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataLocaleReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        locale: {
            __typename?: 'ResourceLocaleQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceLocaleLocaleResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceLocaleLocale';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            value?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataLocationReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataLocationReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        location: {
            __typename?: 'ResourceLocationQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceLocationLocationListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceLocationLocationResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceLocationLocation';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            parent?: {
                                __typename?: 'IoRestorecommerceLocationLocation';
                                id?: string | null;
                                name?: string | null;
                            } | null;
                            organization?: {
                                __typename?: 'IoRestorecommerceOrganizationOrganization';
                                id?: string | null;
                                name?: string | null;
                            } | null;
                            address?: {
                                __typename?: 'IoRestorecommerceAddressAddress';
                                id?: string | null;
                                buildingNumber?: string | null;
                                postcode?: string | null;
                                street?: string | null;
                                locality?: string | null;
                                businessAddress?: {
                                    __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                    name?: string | null;
                                } | null;
                                residentialAddress?: {
                                    __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                    familyName?: string | null;
                                    midName?: string | null;
                                    title?: string | null;
                                } | null;
                                country?: {
                                    __typename?: 'IoRestorecommerceCountryCountry';
                                    name?: string | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataOrganizationMutateMutationVariables = Exact<{
    input: IIoRestorecommerceOrganizationOrganizationList;
}>;
type MasterDataOrganizationMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        organization: {
            __typename?: 'ResourceOrganizationMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceOrganizationOrganization';
                            id?: string | null;
                            parentId?: string | null;
                            name?: string | null;
                            email?: string | null;
                            website?: string | null;
                            vatId?: string | null;
                            logo?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                height?: number | null;
                                width?: number | null;
                                url?: string | null;
                            } | null;
                            paymentMethods?: Array<{
                                __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                id?: string | null;
                                transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataOrganizationDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataOrganizationDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        organization: {
            __typename?: 'ResourceOrganizationMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataOrganizationReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataOrganizationReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        organization: {
            __typename?: 'ResourceOrganizationQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceOrganizationOrganization';
                            id?: string | null;
                            parentId?: string | null;
                            name?: string | null;
                            email?: string | null;
                            website?: string | null;
                            vatId?: string | null;
                            logo?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                height?: number | null;
                                width?: number | null;
                                url?: string | null;
                            } | null;
                            paymentMethods?: Array<{
                                __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                id?: string | null;
                                transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataShopMutateMutationVariables = Exact<{
    input: IIoRestorecommerceShopShopList;
}>;
type MasterDataShopMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        shop: {
            __typename?: 'ResourceShopMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceShopShopListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceShopShopListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceShopShopResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceShopShop';
                            id?: string | null;
                            shopNumber?: string | null;
                            name?: string | null;
                            description?: string | null;
                            domains?: Array<string> | null;
                            organization?: {
                                __typename?: 'IoRestorecommerceOrganizationOrganization';
                                id?: string | null;
                                parentId?: string | null;
                                name?: string | null;
                                email?: string | null;
                                website?: string | null;
                                vatId?: string | null;
                                logo?: {
                                    __typename?: 'IoRestorecommerceImageImage';
                                    id?: string | null;
                                    index?: number | null;
                                    filename?: string | null;
                                    height?: number | null;
                                    width?: number | null;
                                    url?: string | null;
                                } | null;
                                paymentMethods?: Array<{
                                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                    id?: string | null;
                                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                }> | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataShopDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataShopDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        shop: {
            __typename?: 'ResourceShopMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataShopReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataShopReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        shop: {
            __typename?: 'ResourceShopQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceShopShopListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceShopShopListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceShopShopResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceShopShop';
                            id?: string | null;
                            shopNumber?: string | null;
                            name?: string | null;
                            description?: string | null;
                            domains?: Array<string> | null;
                            organization?: {
                                __typename?: 'IoRestorecommerceOrganizationOrganization';
                                id?: string | null;
                                parentId?: string | null;
                                name?: string | null;
                                email?: string | null;
                                website?: string | null;
                                vatId?: string | null;
                                logo?: {
                                    __typename?: 'IoRestorecommerceImageImage';
                                    id?: string | null;
                                    index?: number | null;
                                    filename?: string | null;
                                    height?: number | null;
                                    width?: number | null;
                                    url?: string | null;
                                } | null;
                                paymentMethods?: Array<{
                                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                    id?: string | null;
                                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                }> | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataTaxMutateMutationVariables = Exact<{
    input: IIoRestorecommerceTaxTaxList;
}>;
type MasterDataTaxMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        tax: {
            __typename?: 'ResourceTaxMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceTaxTaxListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceTaxTaxResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceTaxTax';
                            id?: string | null;
                            name?: string | null;
                            rate?: number | null;
                            typeId?: string | null;
                            variant?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataTaxDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type MasterDataTaxDeleteMutateMutation = {
    __typename?: 'Mutation';
    master_data: {
        __typename?: 'ResourceMutation';
        tax: {
            __typename?: 'ResourceTaxMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataTaxReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataTaxReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        tax: {
            __typename?: 'ResourceTaxQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceTaxTaxListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceTaxTaxResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceTaxTax';
                            id?: string | null;
                            name?: string | null;
                            rate?: number | null;
                            typeId?: string | null;
                            variant?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type MasterDataTimezoneReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type MasterDataTimezoneReadQuery = {
    __typename?: 'Query';
    master_data: {
        __typename?: 'ResourceQuery';
        timezone: {
            __typename?: 'ResourceTimezoneQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceTimezoneTimezone';
                            id?: string | null;
                            name?: string | null;
                            description?: string | null;
                            value?: string | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type CreateOrderFulfillmentMutationVariables = Exact<{
    input: IIoRestorecommerceOrderFulfillmentRequestList;
}>;
type CreateOrderFulfillmentMutation = {
    __typename?: 'Mutation';
    ordering: {
        __typename?: 'OrderingMutation';
        order: {
            __typename?: 'OrderingOrderMutation';
            CreateFulfillment?: {
                __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                            id?: string | null;
                            fulfillmentState?: IoRestorecommerceFulfillmentFulfillmentState | null;
                            labels?: Array<{
                                __typename?: 'IoRestorecommerceFulfillmentLabel';
                                parcelId?: string | null;
                                shipmentNumber?: string | null;
                                file?: {
                                    __typename?: 'IoRestorecommerceFileFile';
                                    url?: string | null;
                                } | null;
                                status?: {
                                    __typename?: 'IoRestorecommerceStatusStatus';
                                    code?: number | null;
                                    message?: string | null;
                                } | null;
                            }> | null;
                        } | null;
                        status?: {
                            __typename?: 'IoRestorecommerceStatusStatus';
                            code?: number | null;
                            message?: string | null;
                        } | null;
                    }> | null;
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                } | null;
            } | null;
        };
    };
};
type OrderingInvoiceCreateMutationVariables = Exact<{
    input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
}>;
type OrderingInvoiceCreateMutation = {
    __typename?: 'Mutation';
    ordering: {
        __typename?: 'OrderingMutation';
        order: {
            __typename?: 'OrderingOrderMutation';
            CreateInvoice?: {
                __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
                    items?: Array<{
                        __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceInvoiceInvoice';
                            id?: string | null;
                            invoiceNumber?: string | null;
                            paymentState?: IoRestorecommerceInvoicePaymentState | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type OrderingOrderMutateMutationVariables = Exact<{
    input: IIoRestorecommerceOrderOrderList;
}>;
type OrderingOrderMutateMutation = {
    __typename?: 'Mutation';
    ordering: {
        __typename?: 'OrderingMutation';
        order: {
            __typename?: 'OrderingOrderMutation';
            Mutate?: {
                __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceOrderOrderListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceOrderOrderResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceOrderOrder';
                            id?: string | null;
                            notificationEmail?: string | null;
                            shopId?: string | null;
                            userId?: string | null;
                            customerId?: string | null;
                            orderState?: IoRestorecommerceOrderOrderState | null;
                            customerType?: IoRestorecommerceCustomerCustomerType | null;
                            customerOrderNr?: string | null;
                            customer?: {
                                __typename?: 'IoRestorecommerceCustomerCustomer';
                                id?: string | null;
                                name?: string | null;
                                description?: string | null;
                                settingId?: string | null;
                                commercial?: {
                                    __typename?: 'IoRestorecommerceCustomerCommercial';
                                    organization?: {
                                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                                        id?: string | null;
                                        parentId?: string | null;
                                        name?: string | null;
                                        email?: string | null;
                                        website?: string | null;
                                        vatId?: string | null;
                                        logo?: {
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            height?: number | null;
                                            width?: number | null;
                                            url?: string | null;
                                        } | null;
                                        paymentMethods?: Array<{
                                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                            id?: string | null;
                                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                } | null;
                                publicSector?: {
                                    __typename?: 'IoRestorecommerceCustomerPublicSector';
                                    organization?: {
                                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                                        id?: string | null;
                                        parentId?: string | null;
                                        name?: string | null;
                                        email?: string | null;
                                        website?: string | null;
                                        vatId?: string | null;
                                        logo?: {
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            height?: number | null;
                                            width?: number | null;
                                            url?: string | null;
                                        } | null;
                                        paymentMethods?: Array<{
                                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                            id?: string | null;
                                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                } | null;
                                private?: {
                                    __typename?: 'IoRestorecommerceCustomerPrivate';
                                    user?: {
                                        __typename?: 'IoRestorecommerceUserUser';
                                        id?: string | null;
                                        active?: boolean | null;
                                        activationCode?: string | null;
                                        email?: string | null;
                                        newEmail?: string | null;
                                        name?: string | null;
                                        firstName?: string | null;
                                        lastName?: string | null;
                                        lastAccess?: unknown | null;
                                        defaultScope?: string | null;
                                        localeId?: string | null;
                                        timezoneId?: string | null;
                                        roleAssociations?: Array<{
                                            __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                            role?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                    contactPoints?: Array<{
                                        __typename?: 'IoRestorecommerceContactPointContactPoint';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        email?: string | null;
                                        telephone?: string | null;
                                        website?: string | null;
                                        timezone?: {
                                            __typename?: 'IoRestorecommerceTimezoneTimezone';
                                            id?: string | null;
                                            value?: string | null;
                                            description?: string | null;
                                        } | null;
                                        locale?: {
                                            __typename?: 'IoRestorecommerceLocaleLocale';
                                            id?: string | null;
                                            value?: string | null;
                                            description?: string | null;
                                        } | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    }> | null;
                                } | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            items?: Array<{
                                __typename?: 'IoRestorecommerceOrderItem';
                                id?: string | null;
                                quantity?: number | null;
                                productId?: string | null;
                                variantId?: string | null;
                                parentItemId?: string | null;
                                product?: {
                                    __typename?: 'IoRestorecommerceProductProduct';
                                    id?: string | null;
                                    product?: {
                                        __typename?: 'IoRestorecommerceProductIndividualProduct';
                                        name?: string | null;
                                        description?: string | null;
                                        taxIds?: Array<string> | null;
                                        gtin?: string | null;
                                        manufacturerId?: string | null;
                                        originCountryId?: string | null;
                                        categoryId?: string | null;
                                        prototypeId?: string | null;
                                        physical?: {
                                            __typename?: 'IoRestorecommerceProductPhysicalProduct';
                                            templates?: Array<{
                                                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                                id?: string | null;
                                                name?: string | null;
                                                description?: string | null;
                                                taricCode?: string | null;
                                                stockLevel?: number | null;
                                                stockKeepingUnit?: string | null;
                                                parentVariantId?: string | null;
                                                taxIds?: Array<string> | null;
                                                images?: Array<{
                                                    __typename?: 'IoRestorecommerceImageImage';
                                                    id?: string | null;
                                                    index?: number | null;
                                                    filename?: string | null;
                                                    url?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    height?: number | null;
                                                    width?: number | null;
                                                }> | null;
                                                files?: Array<{
                                                    __typename?: 'IoRestorecommerceFileFile';
                                                    id?: string | null;
                                                    url?: string | null;
                                                    filename?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    thumbnail?: {
                                                        __typename?: 'IoRestorecommerceImageImage';
                                                        id?: string | null;
                                                        index?: number | null;
                                                        filename?: string | null;
                                                        url?: string | null;
                                                        caption?: string | null;
                                                        contentType?: string | null;
                                                        tags?: Array<string> | null;
                                                        height?: number | null;
                                                        width?: number | null;
                                                    } | null;
                                                }> | null;
                                                price?: {
                                                    __typename?: 'IoRestorecommercePricePrice';
                                                    currencyId?: string | null;
                                                    regularPrice?: number | null;
                                                    sale?: boolean | null;
                                                    salePrice?: number | null;
                                                } | null;
                                                properties?: Array<{
                                                    __typename?: 'IoRestorecommercePropertyProperty';
                                                    id?: string | null;
                                                    value?: string | null;
                                                    unitCode?: string | null;
                                                }> | null;
                                            }> | null;
                                            variants?: Array<{
                                                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                                id?: string | null;
                                                name?: string | null;
                                                description?: string | null;
                                                taricCode?: string | null;
                                                stockLevel?: number | null;
                                                stockKeepingUnit?: string | null;
                                                parentVariantId?: string | null;
                                                taxIds?: Array<string> | null;
                                                images?: Array<{
                                                    __typename?: 'IoRestorecommerceImageImage';
                                                    id?: string | null;
                                                    index?: number | null;
                                                    filename?: string | null;
                                                    url?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    height?: number | null;
                                                    width?: number | null;
                                                }> | null;
                                                files?: Array<{
                                                    __typename?: 'IoRestorecommerceFileFile';
                                                    id?: string | null;
                                                    url?: string | null;
                                                    filename?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    thumbnail?: {
                                                        __typename?: 'IoRestorecommerceImageImage';
                                                        id?: string | null;
                                                        index?: number | null;
                                                        filename?: string | null;
                                                        url?: string | null;
                                                        caption?: string | null;
                                                        contentType?: string | null;
                                                        tags?: Array<string> | null;
                                                        height?: number | null;
                                                        width?: number | null;
                                                    } | null;
                                                }> | null;
                                                price?: {
                                                    __typename?: 'IoRestorecommercePricePrice';
                                                    currencyId?: string | null;
                                                    regularPrice?: number | null;
                                                    sale?: boolean | null;
                                                    salePrice?: number | null;
                                                } | null;
                                                properties?: Array<{
                                                    __typename?: 'IoRestorecommercePropertyProperty';
                                                    id?: string | null;
                                                    value?: string | null;
                                                    unitCode?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                unitPrice?: {
                                    __typename?: 'IoRestorecommercePricePrice';
                                    currencyId?: string | null;
                                    regularPrice?: number | null;
                                    sale?: boolean | null;
                                    salePrice?: number | null;
                                    currency?: {
                                        __typename?: 'IoRestorecommerceCurrencyCurrency';
                                        name?: string | null;
                                        symbol?: string | null;
                                    } | null;
                                } | null;
                            }> | null;
                            shop?: {
                                __typename?: 'IoRestorecommerceShopShop';
                                id?: string | null;
                                shopNumber?: string | null;
                                name?: string | null;
                                description?: string | null;
                                domains?: Array<string> | null;
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            user?: {
                                __typename?: 'IoRestorecommerceUserUser';
                                id?: string | null;
                                active?: boolean | null;
                                activationCode?: string | null;
                                email?: string | null;
                                newEmail?: string | null;
                                name?: string | null;
                                firstName?: string | null;
                                lastName?: string | null;
                                lastAccess?: unknown | null;
                                defaultScope?: string | null;
                                localeId?: string | null;
                                timezoneId?: string | null;
                                roleAssociations?: Array<{
                                    __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                    role?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                }> | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            shippingAddress?: {
                                __typename?: 'IoRestorecommerceAddressShippingAddress';
                                comments?: string | null;
                                contact?: {
                                    __typename?: 'IoRestorecommerceAddressContact';
                                    name?: string | null;
                                    email?: string | null;
                                    phone?: string | null;
                                } | null;
                                address?: {
                                    __typename?: 'IoRestorecommerceAddressAddress';
                                    id?: string | null;
                                    buildingNumber?: string | null;
                                    street?: string | null;
                                    postcode?: string | null;
                                    locality?: string | null;
                                    region?: string | null;
                                    addressAddition?: {
                                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                                        field1?: string | null;
                                        field2?: string | null;
                                    } | null;
                                    businessAddress?: {
                                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                        name?: string | null;
                                    } | null;
                                    packStation?: {
                                        __typename?: 'IoRestorecommerceAddressPackStation';
                                        postNumber?: string | null;
                                        provider?: string | null;
                                        stationNumber?: string | null;
                                    } | null;
                                    residentialAddress?: {
                                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                        title?: string | null;
                                        givenName?: string | null;
                                        familyName?: string | null;
                                        midName?: string | null;
                                    } | null;
                                    country?: {
                                        __typename?: 'IoRestorecommerceCountryCountry';
                                        id?: string | null;
                                        name?: string | null;
                                        countryCode?: string | null;
                                        geographicalName?: string | null;
                                    } | null;
                                    geoCoordinates?: {
                                        __typename?: 'IoRestorecommerceAddressGeoPoint';
                                        latitude?: number | null;
                                        longitude?: number | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            billingAddress?: {
                                __typename?: 'IoRestorecommerceAddressBillingAddress';
                                comments?: string | null;
                                contact?: {
                                    __typename?: 'IoRestorecommerceAddressContact';
                                    name?: string | null;
                                    email?: string | null;
                                    phone?: string | null;
                                } | null;
                                address?: {
                                    __typename?: 'IoRestorecommerceAddressAddress';
                                    id?: string | null;
                                    buildingNumber?: string | null;
                                    street?: string | null;
                                    postcode?: string | null;
                                    locality?: string | null;
                                    region?: string | null;
                                    addressAddition?: {
                                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                                        field1?: string | null;
                                        field2?: string | null;
                                    } | null;
                                    businessAddress?: {
                                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                        name?: string | null;
                                    } | null;
                                    packStation?: {
                                        __typename?: 'IoRestorecommerceAddressPackStation';
                                        postNumber?: string | null;
                                        provider?: string | null;
                                        stationNumber?: string | null;
                                    } | null;
                                    residentialAddress?: {
                                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                        title?: string | null;
                                        givenName?: string | null;
                                        familyName?: string | null;
                                        midName?: string | null;
                                    } | null;
                                    country?: {
                                        __typename?: 'IoRestorecommerceCountryCountry';
                                        id?: string | null;
                                        name?: string | null;
                                        countryCode?: string | null;
                                        geographicalName?: string | null;
                                    } | null;
                                    geoCoordinates?: {
                                        __typename?: 'IoRestorecommerceAddressGeoPoint';
                                        latitude?: number | null;
                                        longitude?: number | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            totalAmounts?: Array<{
                                __typename?: 'IoRestorecommerceAmountAmount';
                                gross?: number | null;
                                net?: number | null;
                                currency?: {
                                    __typename?: 'IoRestorecommerceCurrencyCurrency';
                                    name?: string | null;
                                    customExchangeRates?: Array<{
                                        __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                                        amount?: number | null;
                                        rate?: number | null;
                                        expenses?: number | null;
                                    }> | null;
                                } | null;
                                vats?: Array<{
                                    __typename?: 'IoRestorecommerceAmountVAT';
                                    vat?: number | null;
                                    tax?: {
                                        __typename?: 'IoRestorecommerceTaxTax';
                                        rate?: number | null;
                                        variant?: string | null;
                                        countryId?: string | null;
                                        type?: {
                                            __typename?: 'IoRestorecommerceTaxTypeTaxType';
                                            type?: string | null;
                                            description?: string | null;
                                        } | null;
                                    } | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type OrderingOrderDeleteMutateMutationVariables = Exact<{
    input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;
type OrderingOrderDeleteMutateMutation = {
    __typename?: 'Mutation';
    ordering: {
        __typename?: 'OrderingMutation';
        order: {
            __typename?: 'OrderingOrderMutation';
            Delete?: {
                __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
                details?: {
                    __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    status?: Array<{
                        __typename?: 'IoRestorecommerceStatusStatus';
                        id?: string | null;
                        code?: number | null;
                        message?: string | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
type OrderingOrderReadQueryVariables = Exact<{
    input: IIoRestorecommerceResourcebaseReadRequest;
}>;
type OrderingOrderReadQuery = {
    __typename?: 'Query';
    ordering: {
        __typename?: 'OrderingQuery';
        order: {
            __typename?: 'OrderingOrderQuery';
            Read?: {
                __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
                details?: {
                    __typename?: 'IoRestorecommerceOrderOrderListResponse';
                    operationStatus?: {
                        __typename?: 'IoRestorecommerceStatusOperationStatus';
                        code?: number | null;
                        message?: string | null;
                    } | null;
                    items?: Array<{
                        __typename?: 'IoRestorecommerceOrderOrderResponse';
                        payload?: {
                            __typename?: 'IoRestorecommerceOrderOrder';
                            id?: string | null;
                            notificationEmail?: string | null;
                            shopId?: string | null;
                            userId?: string | null;
                            customerId?: string | null;
                            orderState?: IoRestorecommerceOrderOrderState | null;
                            customerType?: IoRestorecommerceCustomerCustomerType | null;
                            customerOrderNr?: string | null;
                            customer?: {
                                __typename?: 'IoRestorecommerceCustomerCustomer';
                                id?: string | null;
                                name?: string | null;
                                description?: string | null;
                                settingId?: string | null;
                                commercial?: {
                                    __typename?: 'IoRestorecommerceCustomerCommercial';
                                    organization?: {
                                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                                        id?: string | null;
                                        parentId?: string | null;
                                        name?: string | null;
                                        email?: string | null;
                                        website?: string | null;
                                        vatId?: string | null;
                                        logo?: {
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            height?: number | null;
                                            width?: number | null;
                                            url?: string | null;
                                        } | null;
                                        paymentMethods?: Array<{
                                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                            id?: string | null;
                                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                } | null;
                                publicSector?: {
                                    __typename?: 'IoRestorecommerceCustomerPublicSector';
                                    organization?: {
                                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                                        id?: string | null;
                                        parentId?: string | null;
                                        name?: string | null;
                                        email?: string | null;
                                        website?: string | null;
                                        vatId?: string | null;
                                        logo?: {
                                            __typename?: 'IoRestorecommerceImageImage';
                                            id?: string | null;
                                            index?: number | null;
                                            filename?: string | null;
                                            height?: number | null;
                                            width?: number | null;
                                            url?: string | null;
                                        } | null;
                                        paymentMethods?: Array<{
                                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                            id?: string | null;
                                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                } | null;
                                private?: {
                                    __typename?: 'IoRestorecommerceCustomerPrivate';
                                    user?: {
                                        __typename?: 'IoRestorecommerceUserUser';
                                        id?: string | null;
                                        active?: boolean | null;
                                        activationCode?: string | null;
                                        email?: string | null;
                                        newEmail?: string | null;
                                        name?: string | null;
                                        firstName?: string | null;
                                        lastName?: string | null;
                                        lastAccess?: unknown | null;
                                        defaultScope?: string | null;
                                        localeId?: string | null;
                                        timezoneId?: string | null;
                                        roleAssociations?: Array<{
                                            __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                            role?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        }> | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                    contactPoints?: Array<{
                                        __typename?: 'IoRestorecommerceContactPointContactPoint';
                                        id?: string | null;
                                        name?: string | null;
                                        description?: string | null;
                                        email?: string | null;
                                        telephone?: string | null;
                                        website?: string | null;
                                        timezone?: {
                                            __typename?: 'IoRestorecommerceTimezoneTimezone';
                                            id?: string | null;
                                            value?: string | null;
                                            description?: string | null;
                                        } | null;
                                        locale?: {
                                            __typename?: 'IoRestorecommerceLocaleLocale';
                                            id?: string | null;
                                            value?: string | null;
                                            description?: string | null;
                                        } | null;
                                        meta?: {
                                            __typename?: 'IoRestorecommerceMetaMeta';
                                            created?: unknown | null;
                                            modified?: unknown | null;
                                            createdBy?: string | null;
                                            modifiedBy?: string | null;
                                            owners?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                                attributes?: Array<{
                                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                                    id?: string | null;
                                                    value?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    }> | null;
                                } | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            items?: Array<{
                                __typename?: 'IoRestorecommerceOrderItem';
                                id?: string | null;
                                quantity?: number | null;
                                productId?: string | null;
                                variantId?: string | null;
                                parentItemId?: string | null;
                                product?: {
                                    __typename?: 'IoRestorecommerceProductProduct';
                                    id?: string | null;
                                    product?: {
                                        __typename?: 'IoRestorecommerceProductIndividualProduct';
                                        name?: string | null;
                                        description?: string | null;
                                        taxIds?: Array<string> | null;
                                        gtin?: string | null;
                                        manufacturerId?: string | null;
                                        originCountryId?: string | null;
                                        categoryId?: string | null;
                                        prototypeId?: string | null;
                                        physical?: {
                                            __typename?: 'IoRestorecommerceProductPhysicalProduct';
                                            templates?: Array<{
                                                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                                id?: string | null;
                                                name?: string | null;
                                                description?: string | null;
                                                taricCode?: string | null;
                                                stockLevel?: number | null;
                                                stockKeepingUnit?: string | null;
                                                parentVariantId?: string | null;
                                                taxIds?: Array<string> | null;
                                                images?: Array<{
                                                    __typename?: 'IoRestorecommerceImageImage';
                                                    id?: string | null;
                                                    index?: number | null;
                                                    filename?: string | null;
                                                    url?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    height?: number | null;
                                                    width?: number | null;
                                                }> | null;
                                                files?: Array<{
                                                    __typename?: 'IoRestorecommerceFileFile';
                                                    id?: string | null;
                                                    url?: string | null;
                                                    filename?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    thumbnail?: {
                                                        __typename?: 'IoRestorecommerceImageImage';
                                                        id?: string | null;
                                                        index?: number | null;
                                                        filename?: string | null;
                                                        url?: string | null;
                                                        caption?: string | null;
                                                        contentType?: string | null;
                                                        tags?: Array<string> | null;
                                                        height?: number | null;
                                                        width?: number | null;
                                                    } | null;
                                                }> | null;
                                                price?: {
                                                    __typename?: 'IoRestorecommercePricePrice';
                                                    currencyId?: string | null;
                                                    regularPrice?: number | null;
                                                    sale?: boolean | null;
                                                    salePrice?: number | null;
                                                } | null;
                                                properties?: Array<{
                                                    __typename?: 'IoRestorecommercePropertyProperty';
                                                    id?: string | null;
                                                    value?: string | null;
                                                    unitCode?: string | null;
                                                }> | null;
                                            }> | null;
                                            variants?: Array<{
                                                __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                                id?: string | null;
                                                name?: string | null;
                                                description?: string | null;
                                                taricCode?: string | null;
                                                stockLevel?: number | null;
                                                stockKeepingUnit?: string | null;
                                                parentVariantId?: string | null;
                                                taxIds?: Array<string> | null;
                                                images?: Array<{
                                                    __typename?: 'IoRestorecommerceImageImage';
                                                    id?: string | null;
                                                    index?: number | null;
                                                    filename?: string | null;
                                                    url?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    height?: number | null;
                                                    width?: number | null;
                                                }> | null;
                                                files?: Array<{
                                                    __typename?: 'IoRestorecommerceFileFile';
                                                    id?: string | null;
                                                    url?: string | null;
                                                    filename?: string | null;
                                                    caption?: string | null;
                                                    contentType?: string | null;
                                                    tags?: Array<string> | null;
                                                    thumbnail?: {
                                                        __typename?: 'IoRestorecommerceImageImage';
                                                        id?: string | null;
                                                        index?: number | null;
                                                        filename?: string | null;
                                                        url?: string | null;
                                                        caption?: string | null;
                                                        contentType?: string | null;
                                                        tags?: Array<string> | null;
                                                        height?: number | null;
                                                        width?: number | null;
                                                    } | null;
                                                }> | null;
                                                price?: {
                                                    __typename?: 'IoRestorecommercePricePrice';
                                                    currencyId?: string | null;
                                                    regularPrice?: number | null;
                                                    sale?: boolean | null;
                                                    salePrice?: number | null;
                                                } | null;
                                                properties?: Array<{
                                                    __typename?: 'IoRestorecommercePropertyProperty';
                                                    id?: string | null;
                                                    value?: string | null;
                                                    unitCode?: string | null;
                                                }> | null;
                                            }> | null;
                                        } | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                unitPrice?: {
                                    __typename?: 'IoRestorecommercePricePrice';
                                    currencyId?: string | null;
                                    regularPrice?: number | null;
                                    sale?: boolean | null;
                                    salePrice?: number | null;
                                    currency?: {
                                        __typename?: 'IoRestorecommerceCurrencyCurrency';
                                        name?: string | null;
                                        symbol?: string | null;
                                    } | null;
                                } | null;
                            }> | null;
                            shop?: {
                                __typename?: 'IoRestorecommerceShopShop';
                                id?: string | null;
                                shopNumber?: string | null;
                                name?: string | null;
                                description?: string | null;
                                domains?: Array<string> | null;
                                organization?: {
                                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                                    id?: string | null;
                                    parentId?: string | null;
                                    name?: string | null;
                                    email?: string | null;
                                    website?: string | null;
                                    vatId?: string | null;
                                    logo?: {
                                        __typename?: 'IoRestorecommerceImageImage';
                                        id?: string | null;
                                        index?: number | null;
                                        filename?: string | null;
                                        height?: number | null;
                                        width?: number | null;
                                        url?: string | null;
                                    } | null;
                                    paymentMethods?: Array<{
                                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                        id?: string | null;
                                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                    }> | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            user?: {
                                __typename?: 'IoRestorecommerceUserUser';
                                id?: string | null;
                                active?: boolean | null;
                                activationCode?: string | null;
                                email?: string | null;
                                newEmail?: string | null;
                                name?: string | null;
                                firstName?: string | null;
                                lastName?: string | null;
                                lastAccess?: unknown | null;
                                defaultScope?: string | null;
                                localeId?: string | null;
                                timezoneId?: string | null;
                                roleAssociations?: Array<{
                                    __typename?: 'IoRestorecommerceAuthRoleAssociation';
                                    role?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                }> | null;
                                meta?: {
                                    __typename?: 'IoRestorecommerceMetaMeta';
                                    created?: unknown | null;
                                    modified?: unknown | null;
                                    createdBy?: string | null;
                                    modifiedBy?: string | null;
                                    owners?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                        attributes?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                        }> | null;
                                    }> | null;
                                } | null;
                            } | null;
                            shippingAddress?: {
                                __typename?: 'IoRestorecommerceAddressShippingAddress';
                                comments?: string | null;
                                contact?: {
                                    __typename?: 'IoRestorecommerceAddressContact';
                                    name?: string | null;
                                    email?: string | null;
                                    phone?: string | null;
                                } | null;
                                address?: {
                                    __typename?: 'IoRestorecommerceAddressAddress';
                                    id?: string | null;
                                    buildingNumber?: string | null;
                                    street?: string | null;
                                    postcode?: string | null;
                                    locality?: string | null;
                                    region?: string | null;
                                    addressAddition?: {
                                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                                        field1?: string | null;
                                        field2?: string | null;
                                    } | null;
                                    businessAddress?: {
                                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                        name?: string | null;
                                    } | null;
                                    packStation?: {
                                        __typename?: 'IoRestorecommerceAddressPackStation';
                                        postNumber?: string | null;
                                        provider?: string | null;
                                        stationNumber?: string | null;
                                    } | null;
                                    residentialAddress?: {
                                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                        title?: string | null;
                                        givenName?: string | null;
                                        familyName?: string | null;
                                        midName?: string | null;
                                    } | null;
                                    country?: {
                                        __typename?: 'IoRestorecommerceCountryCountry';
                                        id?: string | null;
                                        name?: string | null;
                                        countryCode?: string | null;
                                        geographicalName?: string | null;
                                    } | null;
                                    geoCoordinates?: {
                                        __typename?: 'IoRestorecommerceAddressGeoPoint';
                                        latitude?: number | null;
                                        longitude?: number | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            billingAddress?: {
                                __typename?: 'IoRestorecommerceAddressBillingAddress';
                                comments?: string | null;
                                contact?: {
                                    __typename?: 'IoRestorecommerceAddressContact';
                                    name?: string | null;
                                    email?: string | null;
                                    phone?: string | null;
                                } | null;
                                address?: {
                                    __typename?: 'IoRestorecommerceAddressAddress';
                                    id?: string | null;
                                    buildingNumber?: string | null;
                                    street?: string | null;
                                    postcode?: string | null;
                                    locality?: string | null;
                                    region?: string | null;
                                    addressAddition?: {
                                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                                        field1?: string | null;
                                        field2?: string | null;
                                    } | null;
                                    businessAddress?: {
                                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                                        name?: string | null;
                                    } | null;
                                    packStation?: {
                                        __typename?: 'IoRestorecommerceAddressPackStation';
                                        postNumber?: string | null;
                                        provider?: string | null;
                                        stationNumber?: string | null;
                                    } | null;
                                    residentialAddress?: {
                                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                                        title?: string | null;
                                        givenName?: string | null;
                                        familyName?: string | null;
                                        midName?: string | null;
                                    } | null;
                                    country?: {
                                        __typename?: 'IoRestorecommerceCountryCountry';
                                        id?: string | null;
                                        name?: string | null;
                                        countryCode?: string | null;
                                        geographicalName?: string | null;
                                    } | null;
                                    geoCoordinates?: {
                                        __typename?: 'IoRestorecommerceAddressGeoPoint';
                                        latitude?: number | null;
                                        longitude?: number | null;
                                    } | null;
                                    meta?: {
                                        __typename?: 'IoRestorecommerceMetaMeta';
                                        created?: unknown | null;
                                        modified?: unknown | null;
                                        createdBy?: string | null;
                                        modifiedBy?: string | null;
                                        owners?: Array<{
                                            __typename?: 'IoRestorecommerceAttributeAttribute';
                                            id?: string | null;
                                            value?: string | null;
                                            attributes?: Array<{
                                                __typename?: 'IoRestorecommerceAttributeAttribute';
                                                id?: string | null;
                                                value?: string | null;
                                            }> | null;
                                        }> | null;
                                    } | null;
                                } | null;
                            } | null;
                            totalAmounts?: Array<{
                                __typename?: 'IoRestorecommerceAmountAmount';
                                gross?: number | null;
                                net?: number | null;
                                currency?: {
                                    __typename?: 'IoRestorecommerceCurrencyCurrency';
                                    name?: string | null;
                                    customExchangeRates?: Array<{
                                        __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                                        amount?: number | null;
                                        rate?: number | null;
                                        expenses?: number | null;
                                    }> | null;
                                } | null;
                                vats?: Array<{
                                    __typename?: 'IoRestorecommerceAmountVAT';
                                    vat?: number | null;
                                    tax?: {
                                        __typename?: 'IoRestorecommerceTaxTax';
                                        rate?: number | null;
                                        variant?: string | null;
                                        countryId?: string | null;
                                        type?: {
                                            __typename?: 'IoRestorecommerceTaxTypeTaxType';
                                            type?: string | null;
                                            description?: string | null;
                                        } | null;
                                    } | null;
                                }> | null;
                            }> | null;
                            meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                                owners?: Array<{
                                    __typename?: 'IoRestorecommerceAttributeAttribute';
                                    id?: string | null;
                                    value?: string | null;
                                    attributes?: Array<{
                                        __typename?: 'IoRestorecommerceAttributeAttribute';
                                        id?: string | null;
                                        value?: string | null;
                                    }> | null;
                                }> | null;
                            } | null;
                        } | null;
                    }> | null;
                } | null;
            } | null;
        };
    };
};
declare const MetaFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const CountryFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const CurrencyFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const FulfillmentFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const InvoiceFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const LocaleFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const LocationFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ManufacturerFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const OpsStatusFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ImageFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const FileFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ProductVariantFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ProductFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const OrganizationFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ShopFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const UserFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ContactPointFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const CustomerFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const AddressFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const OrderFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const PriceGroupFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ProductCategoryFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const ProductPrototypeFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const StatusFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const TaxFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const TimezoneFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const RoleFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const UserRoleFragmentFragmentDoc: Apollo.TypedDocumentNode<unknown, unknown>;
declare const PolicyReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class PolicyReadGQL extends Apollo.Query<PolicyReadQuery, PolicyReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<PolicyReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PolicyReadGQL>;
}
declare const ProductCategoryMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductCategoryMutateGQL extends Apollo.Mutation<ProductCategoryMutateMutation, ProductCategoryMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryMutateGQL>;
}
declare const ProductCategoryDeleteDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductCategoryDeleteGQL extends Apollo.Mutation<ProductCategoryDeleteMutation, ProductCategoryDeleteMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryDeleteGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryDeleteGQL>;
}
declare const ProductCategoryReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductCategoryReadGQL extends Apollo.Query<ProductCategoryReadQuery, ProductCategoryReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCategoryReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductCategoryReadGQL>;
}
declare const ManufucturerMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ManufucturerMutateGQL extends Apollo.Mutation<ManufucturerMutateMutation, ManufucturerMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufucturerMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufucturerMutateGQL>;
}
declare const ManufucturerDeleteDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ManufucturerDeleteGQL extends Apollo.Mutation<ManufucturerDeleteMutation, ManufucturerDeleteMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufucturerDeleteGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufucturerDeleteGQL>;
}
declare const ManufucturerReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ManufucturerReadGQL extends Apollo.Query<ManufucturerReadQuery, ManufucturerReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ManufucturerReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManufucturerReadGQL>;
}
declare const PriceGroupMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class PriceGroupMutateGQL extends Apollo.Mutation<PriceGroupMutateMutation, PriceGroupMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupMutateGQL>;
}
declare const PriceGroupDeleteDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class PriceGroupDeleteGQL extends Apollo.Mutation<PriceGroupDeleteMutation, PriceGroupDeleteMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupDeleteGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupDeleteGQL>;
}
declare const PriceGroupReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class PriceGroupReadGQL extends Apollo.Query<PriceGroupReadQuery, PriceGroupReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceGroupReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceGroupReadGQL>;
}
declare const CatalogProductMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class CatalogProductMutateGQL extends Apollo.Mutation<CatalogProductMutateMutation, CatalogProductMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogProductMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CatalogProductMutateGQL>;
}
declare const CatalogProductDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class CatalogProductDeleteMutateGQL extends Apollo.Mutation<CatalogProductDeleteMutateMutation, CatalogProductDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogProductDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CatalogProductDeleteMutateGQL>;
}
declare const CatalogProductReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class CatalogProductReadGQL extends Apollo.Query<CatalogProductReadQuery, CatalogProductReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogProductReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CatalogProductReadGQL>;
}
declare const ProductPrototypeMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductPrototypeMutateGQL extends Apollo.Mutation<ProductPrototypeMutateMutation, ProductPrototypeMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeMutateGQL>;
}
declare const ProductPrototypeDeleteDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductPrototypeDeleteGQL extends Apollo.Mutation<ProductPrototypeDeleteMutation, ProductPrototypeDeleteMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeDeleteGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeDeleteGQL>;
}
declare const ProductPrototypeReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class ProductPrototypeReadGQL extends Apollo.Query<ProductPrototypeReadQuery, ProductPrototypeReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPrototypeReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductPrototypeReadGQL>;
}
declare const FulfillmentFulfillmentMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class FulfillmentFulfillmentMutateGQL extends Apollo.Mutation<FulfillmentFulfillmentMutateMutation, FulfillmentFulfillmentMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentFulfillmentMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentFulfillmentMutateGQL>;
}
declare const FulfillmentFulfillmentDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class FulfillmentFulfillmentDeleteMutateGQL extends Apollo.Mutation<FulfillmentFulfillmentDeleteMutateMutation, FulfillmentFulfillmentDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentFulfillmentDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentFulfillmentDeleteMutateGQL>;
}
declare const FulfillmentFulfillmentReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class FulfillmentFulfillmentReadGQL extends Apollo.Query<FulfillmentFulfillmentReadQuery, FulfillmentFulfillmentReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentFulfillmentReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentFulfillmentReadGQL>;
}
declare const FulfillmentFulfillmentSubmitDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class FulfillmentFulfillmentSubmitGQL extends Apollo.Mutation<FulfillmentFulfillmentSubmitMutation, FulfillmentFulfillmentSubmitMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<FulfillmentFulfillmentSubmitGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FulfillmentFulfillmentSubmitGQL>;
}
declare const IdentityRoleMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityRoleMutateGQL extends Apollo.Mutation<IdentityRoleMutateMutation, IdentityRoleMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityRoleMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityRoleMutateGQL>;
}
declare const IdentityRoleDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityRoleDeleteMutateGQL extends Apollo.Mutation<IdentityRoleDeleteMutateMutation, IdentityRoleDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityRoleDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityRoleDeleteMutateGQL>;
}
declare const IdentityRoleReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityRoleReadGQL extends Apollo.Query<IdentityRoleReadQuery, IdentityRoleReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityRoleReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityRoleReadGQL>;
}
declare const IdentityUserFindByTokenDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserFindByTokenGQL extends Apollo.Query<IdentityUserFindByTokenQuery, IdentityUserFindByTokenQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserFindByTokenGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserFindByTokenGQL>;
}
declare const IdentityUserFindDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserFindGQL extends Apollo.Query<IdentityUserFindQuery, IdentityUserFindQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserFindGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserFindGQL>;
}
declare const IdentityUserMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserMutateGQL extends Apollo.Mutation<IdentityUserMutateMutation, IdentityUserMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserMutateGQL>;
}
declare const IdentityUserRegisterMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserRegisterMutateGQL extends Apollo.Mutation<IdentityUserRegisterMutateMutation, IdentityUserRegisterMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserRegisterMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserRegisterMutateGQL>;
}
declare const IdentityUserActivateMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserActivateMutateGQL extends Apollo.Mutation<IdentityUserActivateMutateMutation, IdentityUserActivateMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserActivateMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserActivateMutateGQL>;
}
declare const IdentityUserRequestEmailChangeMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserRequestEmailChangeMutateGQL extends Apollo.Mutation<IdentityUserRequestEmailChangeMutateMutation, IdentityUserRequestEmailChangeMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserRequestEmailChangeMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserRequestEmailChangeMutateGQL>;
}
declare const IdentityUserConfirmEmailChangeMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserConfirmEmailChangeMutateGQL extends Apollo.Mutation<IdentityUserConfirmEmailChangeMutateMutation, IdentityUserConfirmEmailChangeMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserConfirmEmailChangeMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserConfirmEmailChangeMutateGQL>;
}
declare const IdentityUserRequestPasswordChangeMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserRequestPasswordChangeMutateGQL extends Apollo.Mutation<IdentityUserRequestPasswordChangeMutateMutation, IdentityUserRequestPasswordChangeMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserRequestPasswordChangeMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserRequestPasswordChangeMutateGQL>;
}
declare const IdentityUserConfirmPasswordChangeMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserConfirmPasswordChangeMutateGQL extends Apollo.Mutation<IdentityUserConfirmPasswordChangeMutateMutation, IdentityUserConfirmPasswordChangeMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserConfirmPasswordChangeMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserConfirmPasswordChangeMutateGQL>;
}
declare const IdentityUserChangePasswordMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserChangePasswordMutateGQL extends Apollo.Mutation<IdentityUserChangePasswordMutateMutation, IdentityUserChangePasswordMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserChangePasswordMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserChangePasswordMutateGQL>;
}
declare const IdentityUserDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserDeleteMutateGQL extends Apollo.Mutation<IdentityUserDeleteMutateMutation, IdentityUserDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserDeleteMutateGQL>;
}
declare const IdentityUserReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class IdentityUserReadGQL extends Apollo.Query<IdentityUserReadQuery, IdentityUserReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityUserReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IdentityUserReadGQL>;
}
declare const InvoicingInvoiceMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class InvoicingInvoiceMutateGQL extends Apollo.Mutation<InvoicingInvoiceMutateMutation, InvoicingInvoiceMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoicingInvoiceMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoicingInvoiceMutateGQL>;
}
declare const InvoicingInvoiceDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class InvoicingInvoiceDeleteMutateGQL extends Apollo.Mutation<InvoicingInvoiceDeleteMutateMutation, InvoicingInvoiceDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoicingInvoiceDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoicingInvoiceDeleteMutateGQL>;
}
declare const InvoicingInvoiceReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class InvoicingInvoiceReadGQL extends Apollo.Query<InvoicingInvoiceReadQuery, InvoicingInvoiceReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoicingInvoiceReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoicingInvoiceReadGQL>;
}
declare const MasterDataAddressReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataAddressReadGQL extends Apollo.Query<MasterDataAddressReadQuery, MasterDataAddressReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataAddressReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataAddressReadGQL>;
}
declare const MasterDataCountryMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCountryMutateGQL extends Apollo.Mutation<MasterDataCountryMutateMutation, MasterDataCountryMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCountryMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCountryMutateGQL>;
}
declare const MasterDataCountryDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCountryDeleteMutateGQL extends Apollo.Mutation<MasterDataCountryDeleteMutateMutation, MasterDataCountryDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCountryDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCountryDeleteMutateGQL>;
}
declare const MasterDataCountryReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCountryReadGQL extends Apollo.Query<MasterDataCountryReadQuery, MasterDataCountryReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCountryReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCountryReadGQL>;
}
declare const MasterDataCurrencyMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCurrencyMutateGQL extends Apollo.Mutation<MasterDataCurrencyMutateMutation, MasterDataCurrencyMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCurrencyMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCurrencyMutateGQL>;
}
declare const MasterDataCurrencyDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCurrencyDeleteMutateGQL extends Apollo.Mutation<MasterDataCurrencyDeleteMutateMutation, MasterDataCurrencyDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCurrencyDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCurrencyDeleteMutateGQL>;
}
declare const MasterDataCurrencyReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCurrencyReadGQL extends Apollo.Query<MasterDataCurrencyReadQuery, MasterDataCurrencyReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCurrencyReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCurrencyReadGQL>;
}
declare const MasterDataCustomerMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCustomerMutateGQL extends Apollo.Mutation<MasterDataCustomerMutateMutation, MasterDataCustomerMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCustomerMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCustomerMutateGQL>;
}
declare const MasterDataCustomerDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCustomerDeleteMutateGQL extends Apollo.Mutation<MasterDataCustomerDeleteMutateMutation, MasterDataCustomerDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCustomerDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCustomerDeleteMutateGQL>;
}
declare const MasterDataCustomerReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataCustomerReadGQL extends Apollo.Query<MasterDataCustomerReadQuery, MasterDataCustomerReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataCustomerReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataCustomerReadGQL>;
}
declare const MasterDataLocaleReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataLocaleReadGQL extends Apollo.Query<MasterDataLocaleReadQuery, MasterDataLocaleReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataLocaleReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataLocaleReadGQL>;
}
declare const MasterDataLocationReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataLocationReadGQL extends Apollo.Query<MasterDataLocationReadQuery, MasterDataLocationReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataLocationReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataLocationReadGQL>;
}
declare const MasterDataOrganizationMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataOrganizationMutateGQL extends Apollo.Mutation<MasterDataOrganizationMutateMutation, MasterDataOrganizationMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataOrganizationMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataOrganizationMutateGQL>;
}
declare const MasterDataOrganizationDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataOrganizationDeleteMutateGQL extends Apollo.Mutation<MasterDataOrganizationDeleteMutateMutation, MasterDataOrganizationDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataOrganizationDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataOrganizationDeleteMutateGQL>;
}
declare const MasterDataOrganizationReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataOrganizationReadGQL extends Apollo.Query<MasterDataOrganizationReadQuery, MasterDataOrganizationReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataOrganizationReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataOrganizationReadGQL>;
}
declare const MasterDataShopMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataShopMutateGQL extends Apollo.Mutation<MasterDataShopMutateMutation, MasterDataShopMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataShopMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataShopMutateGQL>;
}
declare const MasterDataShopDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataShopDeleteMutateGQL extends Apollo.Mutation<MasterDataShopDeleteMutateMutation, MasterDataShopDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataShopDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataShopDeleteMutateGQL>;
}
declare const MasterDataShopReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataShopReadGQL extends Apollo.Query<MasterDataShopReadQuery, MasterDataShopReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataShopReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataShopReadGQL>;
}
declare const MasterDataTaxMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataTaxMutateGQL extends Apollo.Mutation<MasterDataTaxMutateMutation, MasterDataTaxMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataTaxMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataTaxMutateGQL>;
}
declare const MasterDataTaxDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataTaxDeleteMutateGQL extends Apollo.Mutation<MasterDataTaxDeleteMutateMutation, MasterDataTaxDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataTaxDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataTaxDeleteMutateGQL>;
}
declare const MasterDataTaxReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataTaxReadGQL extends Apollo.Query<MasterDataTaxReadQuery, MasterDataTaxReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataTaxReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataTaxReadGQL>;
}
declare const MasterDataTimezoneReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class MasterDataTimezoneReadGQL extends Apollo.Query<MasterDataTimezoneReadQuery, MasterDataTimezoneReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterDataTimezoneReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterDataTimezoneReadGQL>;
}
declare const CreateOrderFulfillmentDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class CreateOrderFulfillmentGQL extends Apollo.Mutation<CreateOrderFulfillmentMutation, CreateOrderFulfillmentMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateOrderFulfillmentGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateOrderFulfillmentGQL>;
}
declare const OrderingInvoiceCreateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class OrderingInvoiceCreateGQL extends Apollo.Mutation<OrderingInvoiceCreateMutation, OrderingInvoiceCreateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderingInvoiceCreateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderingInvoiceCreateGQL>;
}
declare const OrderingOrderMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class OrderingOrderMutateGQL extends Apollo.Mutation<OrderingOrderMutateMutation, OrderingOrderMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderingOrderMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderingOrderMutateGQL>;
}
declare const OrderingOrderDeleteMutateDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class OrderingOrderDeleteMutateGQL extends Apollo.Mutation<OrderingOrderDeleteMutateMutation, OrderingOrderDeleteMutateMutationVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderingOrderDeleteMutateGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderingOrderDeleteMutateGQL>;
}
declare const OrderingOrderReadDocument: Apollo.TypedDocumentNode<unknown, unknown>;
declare class OrderingOrderReadGQL extends Apollo.Query<OrderingOrderReadQuery, OrderingOrderReadQueryVariables> {
    document: Apollo.TypedDocumentNode<unknown, unknown>;
    constructor(apollo: Apollo.Apollo);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderingOrderReadGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderingOrderReadGQL>;
}

export { AddressFragmentFragmentDoc, CatalogProductDeleteMutateDocument, CatalogProductDeleteMutateGQL, CatalogProductMutateDocument, CatalogProductMutateGQL, CatalogProductReadDocument, CatalogProductReadGQL, ContactPointFragmentFragmentDoc, CoreGraphQLModule, CountryFragmentFragmentDoc, CreateOrderFulfillmentDocument, CreateOrderFulfillmentGQL, CurrencyFragmentFragmentDoc, CustomerFragmentFragmentDoc, FileFragmentFragmentDoc, FulfillmentFragmentFragmentDoc, FulfillmentFulfillmentDeleteMutateDocument, FulfillmentFulfillmentDeleteMutateGQL, FulfillmentFulfillmentMutateDocument, FulfillmentFulfillmentMutateGQL, FulfillmentFulfillmentReadDocument, FulfillmentFulfillmentReadGQL, FulfillmentFulfillmentSubmitDocument, FulfillmentFulfillmentSubmitGQL, IdentityRoleDeleteMutateDocument, IdentityRoleDeleteMutateGQL, IdentityRoleMutateDocument, IdentityRoleMutateGQL, IdentityRoleReadDocument, IdentityRoleReadGQL, IdentityUserActivateMutateDocument, IdentityUserActivateMutateGQL, IdentityUserChangePasswordMutateDocument, IdentityUserChangePasswordMutateGQL, IdentityUserConfirmEmailChangeMutateDocument, IdentityUserConfirmEmailChangeMutateGQL, IdentityUserConfirmPasswordChangeMutateDocument, IdentityUserConfirmPasswordChangeMutateGQL, IdentityUserDeleteMutateDocument, IdentityUserDeleteMutateGQL, IdentityUserFindByTokenDocument, IdentityUserFindByTokenGQL, IdentityUserFindDocument, IdentityUserFindGQL, IdentityUserMutateDocument, IdentityUserMutateGQL, IdentityUserReadDocument, IdentityUserReadGQL, IdentityUserRegisterMutateDocument, IdentityUserRegisterMutateGQL, IdentityUserRequestEmailChangeMutateDocument, IdentityUserRequestEmailChangeMutateGQL, IdentityUserRequestPasswordChangeMutateDocument, IdentityUserRequestPasswordChangeMutateGQL, ImageFragmentFragmentDoc, InvoiceFragmentFragmentDoc, InvoicingInvoiceDeleteMutateDocument, InvoicingInvoiceDeleteMutateGQL, InvoicingInvoiceMutateDocument, InvoicingInvoiceMutateGQL, InvoicingInvoiceReadDocument, InvoicingInvoiceReadGQL, IoRestorecommerceAccessControlResponseDecision, IoRestorecommerceCommandCommandParameterParameterType, IoRestorecommerceCustomerCustomerType, IoRestorecommerceFilterFilterOpOperator, IoRestorecommerceFilterFilterOperation, IoRestorecommerceFilterFilterValueType, IoRestorecommerceFulfillmentFulfillmentState, IoRestorecommerceInvoicePaymentState, IoRestorecommerceJobBackoffType, IoRestorecommerceJobJobOptionsPriority, IoRestorecommerceJobJobReadRequestSortOrder, IoRestorecommerceOrderFulfillmentInvoiceMode, IoRestorecommerceOrderOrderState, IoRestorecommercePaymentMethodPaymentMethodEnum, IoRestorecommercePaymentMethodTransferTypeEnum, IoRestorecommercePaymentProvider, IoRestorecommerceProductAssociationType, IoRestorecommerceResourcebaseFilterOpOperator, IoRestorecommerceResourcebaseFilterOperation, IoRestorecommerceResourcebaseFilterValueType, IoRestorecommerceResourcebaseSortSortOrder, IoRestorecommerceRuleEffect, IoRestorecommerceTaxRoundMode, IoRestorecommerceUnitCodeSector, IoRestorecommerceUnitCodeStatusCode, IoRestorecommerceUserUserType, LocaleFragmentFragmentDoc, LocationFragmentFragmentDoc, ManufacturerFragmentFragmentDoc, ManufucturerDeleteDocument, ManufucturerDeleteGQL, ManufucturerMutateDocument, ManufucturerMutateGQL, ManufucturerReadDocument, ManufucturerReadGQL, MasterDataAddressReadDocument, MasterDataAddressReadGQL, MasterDataCountryDeleteMutateDocument, MasterDataCountryDeleteMutateGQL, MasterDataCountryMutateDocument, MasterDataCountryMutateGQL, MasterDataCountryReadDocument, MasterDataCountryReadGQL, MasterDataCurrencyDeleteMutateDocument, MasterDataCurrencyDeleteMutateGQL, MasterDataCurrencyMutateDocument, MasterDataCurrencyMutateGQL, MasterDataCurrencyReadDocument, MasterDataCurrencyReadGQL, MasterDataCustomerDeleteMutateDocument, MasterDataCustomerDeleteMutateGQL, MasterDataCustomerMutateDocument, MasterDataCustomerMutateGQL, MasterDataCustomerReadDocument, MasterDataCustomerReadGQL, MasterDataLocaleReadDocument, MasterDataLocaleReadGQL, MasterDataLocationReadDocument, MasterDataLocationReadGQL, MasterDataOrganizationDeleteMutateDocument, MasterDataOrganizationDeleteMutateGQL, MasterDataOrganizationMutateDocument, MasterDataOrganizationMutateGQL, MasterDataOrganizationReadDocument, MasterDataOrganizationReadGQL, MasterDataShopDeleteMutateDocument, MasterDataShopDeleteMutateGQL, MasterDataShopMutateDocument, MasterDataShopMutateGQL, MasterDataShopReadDocument, MasterDataShopReadGQL, MasterDataTaxDeleteMutateDocument, MasterDataTaxDeleteMutateGQL, MasterDataTaxMutateDocument, MasterDataTaxMutateGQL, MasterDataTaxReadDocument, MasterDataTaxReadGQL, MasterDataTimezoneReadDocument, MasterDataTimezoneReadGQL, MetaFragmentFragmentDoc, ModeType, OpsStatusFragmentFragmentDoc, OrderFragmentFragmentDoc, OrderingInvoiceCreateDocument, OrderingInvoiceCreateGQL, OrderingOrderDeleteMutateDocument, OrderingOrderDeleteMutateGQL, OrderingOrderMutateDocument, OrderingOrderMutateGQL, OrderingOrderReadDocument, OrderingOrderReadGQL, OrganizationFragmentFragmentDoc, PolicyReadDocument, PolicyReadGQL, PriceGroupDeleteDocument, PriceGroupDeleteGQL, PriceGroupFragmentFragmentDoc, PriceGroupMutateDocument, PriceGroupMutateGQL, PriceGroupReadDocument, PriceGroupReadGQL, ProductCategoryDeleteDocument, ProductCategoryDeleteGQL, ProductCategoryFragmentFragmentDoc, ProductCategoryMutateDocument, ProductCategoryMutateGQL, ProductCategoryReadDocument, ProductCategoryReadGQL, ProductFragmentFragmentDoc, ProductPrototypeDeleteDocument, ProductPrototypeDeleteGQL, ProductPrototypeFragmentFragmentDoc, ProductPrototypeMutateDocument, ProductPrototypeMutateGQL, ProductPrototypeReadDocument, ProductPrototypeReadGQL, ProductVariantFragmentFragmentDoc, RoleFragmentFragmentDoc, ShopFragmentFragmentDoc, StatusFragmentFragmentDoc, SubscriptionAction, TaxFragmentFragmentDoc, TimezoneFragmentFragmentDoc, UserFragmentFragmentDoc, UserRoleFragmentFragmentDoc };
export type { AccessControlAccessControlQuery, AccessControlAccessControlQueryIsAllowedArgs, AccessControlAccessControlQueryWhatIsAllowedArgs, AccessControlMutation, AccessControlPolicyMutation, AccessControlPolicyMutationDeleteArgs, AccessControlPolicyMutationMutateArgs, AccessControlPolicyQuery, AccessControlPolicyQueryReadArgs, AccessControlPolicySetMutation, AccessControlPolicySetMutationDeleteArgs, AccessControlPolicySetMutationMutateArgs, AccessControlPolicySetQuery, AccessControlPolicySetQueryReadArgs, AccessControlQuery, AccessControlRuleMutation, AccessControlRuleMutationDeleteArgs, AccessControlRuleMutationMutateArgs, AccessControlRuleQuery, AccessControlRuleQueryReadArgs, AddressFragmentFragment, CatalogManufacturerMutation, CatalogManufacturerMutationDeleteArgs, CatalogManufacturerMutationMutateArgs, CatalogManufacturerQuery, CatalogManufacturerQueryReadArgs, CatalogMutation, CatalogPriceGroupMutation, CatalogPriceGroupMutationDeleteArgs, CatalogPriceGroupMutationMutateArgs, CatalogPriceGroupQuery, CatalogPriceGroupQueryReadArgs, CatalogProductCategoryMutation, CatalogProductCategoryMutationDeleteArgs, CatalogProductCategoryMutationMutateArgs, CatalogProductCategoryQuery, CatalogProductCategoryQueryReadArgs, CatalogProductDeleteMutateMutation, CatalogProductDeleteMutateMutationVariables, CatalogProductMutateMutation, CatalogProductMutateMutationVariables, CatalogProductMutation, CatalogProductMutationClaimVariantArgs, CatalogProductMutationDeleteArgs, CatalogProductMutationDropSessionArgs, CatalogProductMutationMutateArgs, CatalogProductMutationReleaseVariantArgs, CatalogProductMutationResolveSessionArgs, CatalogProductPrototypeMutation, CatalogProductPrototypeMutationDeleteArgs, CatalogProductPrototypeMutationMutateArgs, CatalogProductPrototypeQuery, CatalogProductPrototypeQueryReadArgs, CatalogProductQuery, CatalogProductQueryGetVariantArgs, CatalogProductQueryReadArgs, CatalogProductReadQuery, CatalogProductReadQueryVariables, CatalogQuery, ContactPointFragmentFragment, CountryFragmentFragment, CreateOrderFulfillmentMutation, CreateOrderFulfillmentMutationVariables, CurrencyFragmentFragment, CustomerFragmentFragment, Exact, FacadeStatusType, FileFragmentFragment, FulfillmentFragmentFragment, FulfillmentFulfillmentCourierMutation, FulfillmentFulfillmentCourierMutationDeleteArgs, FulfillmentFulfillmentCourierMutationMutateArgs, FulfillmentFulfillmentCourierQuery, FulfillmentFulfillmentCourierQueryReadArgs, FulfillmentFulfillmentDeleteMutateMutation, FulfillmentFulfillmentDeleteMutateMutationVariables, FulfillmentFulfillmentMutateMutation, FulfillmentFulfillmentMutateMutationVariables, FulfillmentFulfillmentMutation, FulfillmentFulfillmentMutationCancelArgs, FulfillmentFulfillmentMutationCreateInvoiceArgs, FulfillmentFulfillmentMutationDeleteArgs, FulfillmentFulfillmentMutationEvaluateArgs, FulfillmentFulfillmentMutationMutateArgs, FulfillmentFulfillmentMutationRenderArgs, FulfillmentFulfillmentMutationSubmitArgs, FulfillmentFulfillmentMutationTrackArgs, FulfillmentFulfillmentMutationTriggerInvoiceArgs, FulfillmentFulfillmentMutationWithdrawArgs, FulfillmentFulfillmentProductMutation, FulfillmentFulfillmentProductMutationDeleteArgs, FulfillmentFulfillmentProductMutationMutateArgs, FulfillmentFulfillmentProductQuery, FulfillmentFulfillmentProductQueryFindArgs, FulfillmentFulfillmentProductQueryReadArgs, FulfillmentFulfillmentQuery, FulfillmentFulfillmentQueryReadArgs, FulfillmentFulfillmentReadQuery, FulfillmentFulfillmentReadQueryVariables, FulfillmentFulfillmentSubmitMutation, FulfillmentFulfillmentSubmitMutationVariables, FulfillmentMutation, FulfillmentQuery, GoogleProtobufAny, IGoogleProtobufAny, IGraphqlConfig, IIoRestorecommerceAccessControlContext, IIoRestorecommerceAccessControlRequest, IIoRestorecommerceAddressAddress, IIoRestorecommerceAddressAddressAddition, IIoRestorecommerceAddressAddressList, IIoRestorecommerceAddressBillingAddress, IIoRestorecommerceAddressBusinessAddress, IIoRestorecommerceAddressContact, IIoRestorecommerceAddressGeoPoint, IIoRestorecommerceAddressPackStation, IIoRestorecommerceAddressResidentialAddress, IIoRestorecommerceAddressShippingAddress, IIoRestorecommerceAmountAmount, IIoRestorecommerceAmountVat, IIoRestorecommerceAttributeAttribute, IIoRestorecommerceAuthRoleAssociation, IIoRestorecommerceAuthTokens, IIoRestorecommerceAuthenticationLogAuthenticationLog, IIoRestorecommerceAuthenticationLogAuthenticationLogList, IIoRestorecommerceCommandCommand, IIoRestorecommerceCommandCommandList, IIoRestorecommerceCommandCommandParameter, IIoRestorecommerceContactPointContactPoint, IIoRestorecommerceContactPointContactPointList, IIoRestorecommerceContactPointTypeContactPointType, IIoRestorecommerceContactPointTypeContactPointTypeList, IIoRestorecommerceCountryCountry, IIoRestorecommerceCountryCountryList, IIoRestorecommerceCountryCountryLocaleName, IIoRestorecommerceCredentialCredential, IIoRestorecommerceCredentialCredentialList, IIoRestorecommerceCurrencyCurrency, IIoRestorecommerceCurrencyCurrencyList, IIoRestorecommerceCurrencyExchangeRate, IIoRestorecommerceCustomerCommercial, IIoRestorecommerceCustomerCustomer, IIoRestorecommerceCustomerCustomerList, IIoRestorecommerceCustomerPrivate, IIoRestorecommerceCustomerPublicSector, IIoRestorecommerceFileFile, IIoRestorecommerceFilterFilter, IIoRestorecommerceFilterFilterOp, IIoRestorecommerceFulfillmentCharge, IIoRestorecommerceFulfillmentCourierFulfillmentCourier, IIoRestorecommerceFulfillmentCourierFulfillmentCourierList, IIoRestorecommerceFulfillmentCustomsDeclaration, IIoRestorecommerceFulfillmentEvent, IIoRestorecommerceFulfillmentFulfillment, IIoRestorecommerceFulfillmentFulfillmentId, IIoRestorecommerceFulfillmentFulfillmentIdList, IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest, IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList, IIoRestorecommerceFulfillmentFulfillmentInvoiceSection, IIoRestorecommerceFulfillmentFulfillmentList, IIoRestorecommerceFulfillmentItem, IIoRestorecommerceFulfillmentLabel, IIoRestorecommerceFulfillmentPackaging, IIoRestorecommerceFulfillmentParcel, IIoRestorecommerceFulfillmentProductFulfillmentProduct, IIoRestorecommerceFulfillmentProductFulfillmentProductList, IIoRestorecommerceFulfillmentProductFulfillmentSolutionQuery, IIoRestorecommerceFulfillmentProductFulfillmentSolutionQueryList, IIoRestorecommerceFulfillmentProductPreferences, IIoRestorecommerceFulfillmentProductVariant, IIoRestorecommerceFulfillmentTracking, IIoRestorecommerceGeometryBoundingBox3D, IIoRestorecommerceImageImage, IIoRestorecommerceInvoiceFulfillmentItem, IIoRestorecommerceInvoiceInvoice, IIoRestorecommerceInvoiceInvoiceId, IIoRestorecommerceInvoiceInvoiceIdList, IIoRestorecommerceInvoiceInvoiceList, IIoRestorecommerceInvoiceManualItem, IIoRestorecommerceInvoicePosition, IIoRestorecommerceInvoiceProductItem, IIoRestorecommerceInvoiceRequestInvoiceNumber, IIoRestorecommerceInvoiceSection, IIoRestorecommerceJobBackoff, IIoRestorecommerceJobData, IIoRestorecommerceJobJob, IIoRestorecommerceJobJobFilter, IIoRestorecommerceJobJobList, IIoRestorecommerceJobJobOptions, IIoRestorecommerceJobJobReadRequest, IIoRestorecommerceJobRepeat, IIoRestorecommerceLocaleLocale, IIoRestorecommerceLocaleLocaleList, IIoRestorecommerceLocationLocation, IIoRestorecommerceLocationLocationList, IIoRestorecommerceManufacturerManufacturer, IIoRestorecommerceManufacturerManufacturerList, IIoRestorecommerceMetaMeta, IIoRestorecommerceNotificationNotification, IIoRestorecommerceNotificationNotificationList, IIoRestorecommerceOauthExchangeCodeRequest, IIoRestorecommerceOauthGetTokenRequest, IIoRestorecommerceOrderEvent, IIoRestorecommerceOrderFulfillmentRequest, IIoRestorecommerceOrderFulfillmentRequestList, IIoRestorecommerceOrderItem, IIoRestorecommerceOrderOrder, IIoRestorecommerceOrderOrderIdList, IIoRestorecommerceOrderOrderList, IIoRestorecommerceOrderOrderingInvoiceRequest, IIoRestorecommerceOrderOrderingInvoiceRequestList, IIoRestorecommerceOrderOrderingInvoiceSection, IIoRestorecommerceOrganizationOrganization, IIoRestorecommerceOrganizationOrganizationList, IIoRestorecommerceOstorageCopyRequestItem, IIoRestorecommerceOstorageCopyRequestList, IIoRestorecommerceOstorageDeleteRequest, IIoRestorecommerceOstorageGetRequest, IIoRestorecommerceOstorageListRequest, IIoRestorecommerceOstorageMoveRequestItem, IIoRestorecommerceOstorageMoveRequestList, IIoRestorecommerceOstorageObject, IIoRestorecommerceOstorageOptions, IIoRestorecommercePaymentCaptureRequest, IIoRestorecommercePaymentItem, IIoRestorecommercePaymentPaymentRequest, IIoRestorecommercePaymentSetupRequest, IIoRestorecommercePolicyPolicy, IIoRestorecommercePolicyPolicyList, IIoRestorecommercePolicySetPolicySet, IIoRestorecommercePolicySetPolicySetList, IIoRestorecommercePriceGroupPriceGroup, IIoRestorecommercePriceGroupPriceGroupList, IIoRestorecommercePricePrice, IIoRestorecommerceProductAssociation, IIoRestorecommerceProductBundle, IIoRestorecommerceProductBundleProduct, IIoRestorecommerceProductCategoryParent, IIoRestorecommerceProductCategoryProductCategory, IIoRestorecommerceProductCategoryProductCategoryList, IIoRestorecommerceProductIndividualProduct, IIoRestorecommerceProductIndividualProductVariantListRequest, IIoRestorecommerceProductIndividualProductVariantRequest, IIoRestorecommerceProductIndividualProductVariantRequestLocalization, IIoRestorecommerceProductPackage, IIoRestorecommerceProductPhysicalProduct, IIoRestorecommerceProductPhysicalVariant, IIoRestorecommerceProductProduct, IIoRestorecommerceProductProductList, IIoRestorecommerceProductPrototypeProductPrototype, IIoRestorecommerceProductPrototypeProductPrototypeList, IIoRestorecommerceProductServiceProduct, IIoRestorecommerceProductServiceVariant, IIoRestorecommerceProductSession, IIoRestorecommerceProductVirtualProduct, IIoRestorecommerceProductVirtualVariant, IIoRestorecommercePropertyProperty, IIoRestorecommerceReferenceReference, IIoRestorecommerceResourcebaseDeleteRequest, IIoRestorecommerceResourcebaseFieldFilter, IIoRestorecommerceResourcebaseFilter, IIoRestorecommerceResourcebaseFilterOp, IIoRestorecommerceResourcebaseReadRequest, IIoRestorecommerceResourcebaseSearch, IIoRestorecommerceResourcebaseSort, IIoRestorecommerceRoleRole, IIoRestorecommerceRoleRoleList, IIoRestorecommerceRuleContextQuery, IIoRestorecommerceRuleRule, IIoRestorecommerceRuleRuleList, IIoRestorecommerceRuleTarget, IIoRestorecommerceSettingSetting, IIoRestorecommerceSettingSettingList, IIoRestorecommerceShopShop, IIoRestorecommerceShopShopList, IIoRestorecommerceStatusStatus, IIoRestorecommerceTaxTax, IIoRestorecommerceTaxTaxList, IIoRestorecommerceTaxTypeTaxType, IIoRestorecommerceTaxTypeTaxTypeList, IIoRestorecommerceTemplateLocalization, IIoRestorecommerceTemplateTemplate, IIoRestorecommerceTemplateTemplateList, IIoRestorecommerceTimezoneTimezone, IIoRestorecommerceTimezoneTimezoneList, IIoRestorecommerceTimezoneTimezoneOffset, IIoRestorecommerceTokenGrantId, IIoRestorecommerceTokenIdentifier, IIoRestorecommerceTokenTokenData, IIoRestorecommerceUnitCodeUnitCode, IIoRestorecommerceUnitCodeUnitCodeList, IIoRestorecommerceUserActivateRequest, IIoRestorecommerceUserChangeEmailRequest, IIoRestorecommerceUserChangePasswordRequest, IIoRestorecommerceUserCompleteTotpSetupRequest, IIoRestorecommerceUserConfirmEmailChangeRequest, IIoRestorecommerceUserConfirmPasswordChangeRequest, IIoRestorecommerceUserConfirmUserInvitationRequest, IIoRestorecommerceUserCreateBackupTotpCodesRequest, IIoRestorecommerceUserExchangeTotpRequest, IIoRestorecommerceUserFindByRoleRequest, IIoRestorecommerceUserFindByTokenRequest, IIoRestorecommerceUserFindRequest, IIoRestorecommerceUserLoginRequest, IIoRestorecommerceUserMfaStatusRequest, IIoRestorecommerceUserOrgIdRequest, IIoRestorecommerceUserRegisterRequest, IIoRestorecommerceUserRequestPasswordChangeRequest, IIoRestorecommerceUserResetTotpRequest, IIoRestorecommerceUserSendActivationEmailRequest, IIoRestorecommerceUserSendInvitationEmailRequest, IIoRestorecommerceUserSetupTotpRequest, IIoRestorecommerceUserTenantRequest, IIoRestorecommerceUserUnregisterRequest, IIoRestorecommerceUserUser, IIoRestorecommerceUserUserList, IdentityAuthenticationLogMutation, IdentityAuthenticationLogMutationDeleteArgs, IdentityAuthenticationLogMutationMutateArgs, IdentityAuthenticationLogQuery, IdentityAuthenticationLogQueryReadArgs, IdentityMutation, IdentityOAuthMutation, IdentityOAuthMutationExchangeCodeArgs, IdentityOAuthQuery, IdentityOAuthQueryGetTokenArgs, IdentityQuery, IdentityRoleDeleteMutateMutation, IdentityRoleDeleteMutateMutationVariables, IdentityRoleMutateMutation, IdentityRoleMutateMutationVariables, IdentityRoleMutation, IdentityRoleMutationDeleteArgs, IdentityRoleMutationMutateArgs, IdentityRoleQuery, IdentityRoleQueryReadArgs, IdentityRoleReadQuery, IdentityRoleReadQueryVariables, IdentityTokenMutation, IdentityTokenMutationConsumeArgs, IdentityTokenMutationDestroyArgs, IdentityTokenMutationRevokeByGrantIdArgs, IdentityTokenMutationUpsertArgs, IdentityTokenQuery, IdentityTokenQueryFindArgs, IdentityUserActivateMutateMutation, IdentityUserActivateMutateMutationVariables, IdentityUserChangePasswordMutateMutation, IdentityUserChangePasswordMutateMutationVariables, IdentityUserConfirmEmailChangeMutateMutation, IdentityUserConfirmEmailChangeMutateMutationVariables, IdentityUserConfirmPasswordChangeMutateMutation, IdentityUserConfirmPasswordChangeMutateMutationVariables, IdentityUserDeleteMutateMutation, IdentityUserDeleteMutateMutationVariables, IdentityUserFindByTokenQuery, IdentityUserFindByTokenQueryVariables, IdentityUserFindQuery, IdentityUserFindQueryVariables, IdentityUserMutateMutation, IdentityUserMutateMutationVariables, IdentityUserMutation, IdentityUserMutationActivateArgs, IdentityUserMutationChangePasswordArgs, IdentityUserMutationCompleteTotpSetupArgs, IdentityUserMutationConfirmEmailChangeArgs, IdentityUserMutationConfirmPasswordChangeArgs, IdentityUserMutationConfirmUserInvitationArgs, IdentityUserMutationCreateBackupTotpCodesArgs, IdentityUserMutationDeleteArgs, IdentityUserMutationDeleteUsersByOrgArgs, IdentityUserMutationExchangeTotpArgs, IdentityUserMutationGetUnauthenticatedSubjectTokenForTenantArgs, IdentityUserMutationLoginArgs, IdentityUserMutationMfaStatusArgs, IdentityUserMutationMutateArgs, IdentityUserMutationRegisterArgs, IdentityUserMutationRequestEmailChangeArgs, IdentityUserMutationRequestPasswordChangeArgs, IdentityUserMutationResetTotpArgs, IdentityUserMutationSendActivationEmailArgs, IdentityUserMutationSendInvitationEmailArgs, IdentityUserMutationSetupTotpArgs, IdentityUserMutationUnregisterArgs, IdentityUserQuery, IdentityUserQueryFindArgs, IdentityUserQueryFindByRoleArgs, IdentityUserQueryFindByTokenArgs, IdentityUserQueryReadArgs, IdentityUserReadQuery, IdentityUserReadQueryVariables, IdentityUserRegisterMutateMutation, IdentityUserRegisterMutateMutationVariables, IdentityUserRequestEmailChangeMutateMutation, IdentityUserRequestEmailChangeMutateMutationVariables, IdentityUserRequestPasswordChangeMutateMutation, IdentityUserRequestPasswordChangeMutateMutationVariables, ImageFragmentFragment, InputMaybe, InvoiceFragmentFragment, InvoicingInvoiceDeleteMutateMutation, InvoicingInvoiceDeleteMutateMutationVariables, InvoicingInvoiceMutateMutation, InvoicingInvoiceMutateMutationVariables, InvoicingInvoiceMutation, InvoicingInvoiceMutationDeleteArgs, InvoicingInvoiceMutationGenerateInvoiceNumberArgs, InvoicingInvoiceMutationMutateArgs, InvoicingInvoiceMutationRenderArgs, InvoicingInvoiceMutationSendArgs, InvoicingInvoiceMutationWithdrawArgs, InvoicingInvoiceQuery, InvoicingInvoiceQueryReadArgs, InvoicingInvoiceReadQuery, InvoicingInvoiceReadQueryVariables, InvoicingMutation, InvoicingQuery, IoRestorecommerceAccessControlResponse, IoRestorecommerceAccessControlReverseQuery, IoRestorecommerceAddressAddress, IoRestorecommerceAddressAddressAddition, IoRestorecommerceAddressAddressListResponse, IoRestorecommerceAddressAddressResponse, IoRestorecommerceAddressBillingAddress, IoRestorecommerceAddressBusinessAddress, IoRestorecommerceAddressContact, IoRestorecommerceAddressGeoPoint, IoRestorecommerceAddressPackStation, IoRestorecommerceAddressResidentialAddress, IoRestorecommerceAddressShippingAddress, IoRestorecommerceAmountAmount, IoRestorecommerceAmountVat, IoRestorecommerceAttributeAttribute, IoRestorecommerceAuthRoleAssociation, IoRestorecommerceAuthTokens, IoRestorecommerceAuthenticationLogAuthenticationLog, IoRestorecommerceAuthenticationLogAuthenticationLogListResponse, IoRestorecommerceAuthenticationLogAuthenticationLogResponse, IoRestorecommerceCommandCommand, IoRestorecommerceCommandCommandListResponse, IoRestorecommerceCommandCommandParameter, IoRestorecommerceCommandCommandResponse, IoRestorecommerceContactPointContactPoint, IoRestorecommerceContactPointContactPointListResponse, IoRestorecommerceContactPointContactPointResponse, IoRestorecommerceContactPointTypeContactPointType, IoRestorecommerceContactPointTypeContactPointTypeListResponse, IoRestorecommerceContactPointTypeContactPointTypeResponse, IoRestorecommerceCountryCountry, IoRestorecommerceCountryCountryListResponse, IoRestorecommerceCountryCountryLocaleName, IoRestorecommerceCountryCountryResponse, IoRestorecommerceCredentialCredential, IoRestorecommerceCredentialCredentialListResponse, IoRestorecommerceCredentialCredentialResponse, IoRestorecommerceCurrencyCurrency, IoRestorecommerceCurrencyCurrencyListResponse, IoRestorecommerceCurrencyCurrencyResponse, IoRestorecommerceCurrencyExchangeRate, IoRestorecommerceCustomerCommercial, IoRestorecommerceCustomerCustomer, IoRestorecommerceCustomerCustomerListResponse, IoRestorecommerceCustomerCustomerResponse, IoRestorecommerceCustomerPrivate, IoRestorecommerceCustomerPublicSector, IoRestorecommerceFileFile, IoRestorecommerceFilterFilter, IoRestorecommerceFilterFilterOp, IoRestorecommerceFulfillmentCharge, IoRestorecommerceFulfillmentCourierFulfillmentCourier, IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse, IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse, IoRestorecommerceFulfillmentCustomsDeclaration, IoRestorecommerceFulfillmentEvent, IoRestorecommerceFulfillmentFulfillment, IoRestorecommerceFulfillmentFulfillmentListResponse, IoRestorecommerceFulfillmentFulfillmentResponse, IoRestorecommerceFulfillmentItem, IoRestorecommerceFulfillmentLabel, IoRestorecommerceFulfillmentPackaging, IoRestorecommerceFulfillmentParcel, IoRestorecommerceFulfillmentProductFulfillmentProduct, IoRestorecommerceFulfillmentProductFulfillmentProductListResponse, IoRestorecommerceFulfillmentProductFulfillmentProductResponse, IoRestorecommerceFulfillmentProductFulfillmentSolution, IoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse, IoRestorecommerceFulfillmentProductFulfillmentSolutionResponse, IoRestorecommerceFulfillmentProductPreferences, IoRestorecommerceFulfillmentProductVariant, IoRestorecommerceFulfillmentTracking, IoRestorecommerceGeometryBoundingBox3D, IoRestorecommerceImageImage, IoRestorecommerceInvoiceFulfillmentItem, IoRestorecommerceInvoiceInvoice, IoRestorecommerceInvoiceInvoiceListResponse, IoRestorecommerceInvoiceInvoiceNumberResponse, IoRestorecommerceInvoiceInvoiceResponse, IoRestorecommerceInvoiceManualItem, IoRestorecommerceInvoicePosition, IoRestorecommerceInvoiceProductItem, IoRestorecommerceInvoiceSection, IoRestorecommerceJobBackoff, IoRestorecommerceJobData, IoRestorecommerceJobJob, IoRestorecommerceJobJobListResponse, IoRestorecommerceJobJobOptions, IoRestorecommerceJobJobResponse, IoRestorecommerceJobRepeat, IoRestorecommerceLocaleLocale, IoRestorecommerceLocaleLocaleListResponse, IoRestorecommerceLocaleLocaleResponse, IoRestorecommerceLocationLocation, IoRestorecommerceLocationLocationListResponse, IoRestorecommerceLocationLocationResponse, IoRestorecommerceManufacturerManufacturer, IoRestorecommerceManufacturerManufacturerListResponse, IoRestorecommerceManufacturerManufacturerResponse, IoRestorecommerceMetaMeta, IoRestorecommerceNotificationNotification, IoRestorecommerceNotificationNotificationListResponse, IoRestorecommerceNotificationNotificationResponse, IoRestorecommerceOauthExchangeCodeResponse, IoRestorecommerceOauthGenerateLinksResponse, IoRestorecommerceOauthGetTokenResponse, IoRestorecommerceOauthServicesResponse, IoRestorecommerceOrderEvent, IoRestorecommerceOrderItem, IoRestorecommerceOrderOrder, IoRestorecommerceOrderOrderListResponse, IoRestorecommerceOrderOrderResponse, IoRestorecommerceOrderOrderSubmitListResponse, IoRestorecommerceOrganizationOrganization, IoRestorecommerceOrganizationOrganizationListResponse, IoRestorecommerceOrganizationOrganizationResponse, IoRestorecommerceOstorageCopyResponseItem, IoRestorecommerceOstorageCopyResponseList, IoRestorecommerceOstorageCopyResponsePayloadWithStatus, IoRestorecommerceOstorageListResponse, IoRestorecommerceOstorageMoveResponseItem, IoRestorecommerceOstorageMoveResponseList, IoRestorecommerceOstorageMoveResponsePayloadWithStatus, IoRestorecommerceOstorageObjectData, IoRestorecommerceOstorageObjectResponse, IoRestorecommerceOstorageObjectResponsePayload, IoRestorecommerceOstorageObjectResponsePayloadWithStatus, IoRestorecommerceOstorageObjectsDataWithPayloadStatus, IoRestorecommerceOstorageOptions, IoRestorecommerceOstoragePutResponse, IoRestorecommerceOstoragePutResponseWithPayloadStatus, IoRestorecommerceOstorageResponse, IoRestorecommercePaymentMethodPaymentMethod, IoRestorecommercePaymentPaymentPayload, IoRestorecommercePaymentPaymentPayloadStatus, IoRestorecommercePaymentPaymentResponse, IoRestorecommercePaymentSetupPayload, IoRestorecommercePaymentSetupPayloadStatus, IoRestorecommercePaymentSetupResponse, IoRestorecommercePolicyPolicy, IoRestorecommercePolicyPolicyListResponse, IoRestorecommercePolicyPolicyResponse, IoRestorecommercePolicyPolicyRq, IoRestorecommercePolicySetPolicySet, IoRestorecommercePolicySetPolicySetListResponse, IoRestorecommercePolicySetPolicySetResponse, IoRestorecommercePolicySetPolicySetRq, IoRestorecommercePriceGroupPriceGroup, IoRestorecommercePriceGroupPriceGroupListResponse, IoRestorecommercePriceGroupPriceGroupResponse, IoRestorecommercePricePrice, IoRestorecommerceProductAssociation, IoRestorecommerceProductBundle, IoRestorecommerceProductBundleProduct, IoRestorecommerceProductCategoryParent, IoRestorecommerceProductCategoryProductCategory, IoRestorecommerceProductCategoryProductCategoryListResponse, IoRestorecommerceProductCategoryProductCategoryResponse, IoRestorecommerceProductIndividualProduct, IoRestorecommerceProductIndividualProductVariant, IoRestorecommerceProductIndividualProductVariantListResponse, IoRestorecommerceProductIndividualProductVariantResponse, IoRestorecommerceProductPackage, IoRestorecommerceProductPhysicalProduct, IoRestorecommerceProductPhysicalVariant, IoRestorecommerceProductProduct, IoRestorecommerceProductProductListResponse, IoRestorecommerceProductProductResponse, IoRestorecommerceProductPrototypeProductPrototype, IoRestorecommerceProductPrototypeProductPrototypeListResponse, IoRestorecommerceProductPrototypeProductPrototypeResponse, IoRestorecommerceProductServiceProduct, IoRestorecommerceProductServiceVariant, IoRestorecommerceProductSession, IoRestorecommerceProductVirtualProduct, IoRestorecommerceProductVirtualVariant, IoRestorecommercePropertyProperty, IoRestorecommerceReferenceReference, IoRestorecommerceResourcebaseDeleteResponse, IoRestorecommerceRoleRole, IoRestorecommerceRoleRoleListResponse, IoRestorecommerceRoleRoleResponse, IoRestorecommerceRuleContextQuery, IoRestorecommerceRuleRule, IoRestorecommerceRuleRuleListResponse, IoRestorecommerceRuleRuleResponse, IoRestorecommerceRuleRuleRq, IoRestorecommerceRuleTarget, IoRestorecommerceSettingSetting, IoRestorecommerceSettingSettingListResponse, IoRestorecommerceSettingSettingResponse, IoRestorecommerceShopShop, IoRestorecommerceShopShopListResponse, IoRestorecommerceShopShopResponse, IoRestorecommerceStatusOperationStatus, IoRestorecommerceStatusOperationStatusObj, IoRestorecommerceStatusStatus, IoRestorecommerceStatusStatusListResponse, IoRestorecommerceTaxTax, IoRestorecommerceTaxTaxListResponse, IoRestorecommerceTaxTaxResponse, IoRestorecommerceTaxTypeTaxType, IoRestorecommerceTaxTypeTaxTypeListResponse, IoRestorecommerceTaxTypeTaxTypeResponse, IoRestorecommerceTemplateLocalization, IoRestorecommerceTemplateTemplate, IoRestorecommerceTemplateTemplateListResponse, IoRestorecommerceTemplateTemplateResponse, IoRestorecommerceTimezoneTimezone, IoRestorecommerceTimezoneTimezoneListResponse, IoRestorecommerceTimezoneTimezoneOffset, IoRestorecommerceTimezoneTimezoneResponse, IoRestorecommerceUnitCodeUnitCode, IoRestorecommerceUnitCodeUnitCodeListResponse, IoRestorecommerceUnitCodeUnitCodeResponse, IoRestorecommerceUserCreateBackupTotpCodesResponse, IoRestorecommerceUserDeleteUsersByOrgResponse, IoRestorecommerceUserLoginResponse, IoRestorecommerceUserMfaStatusResponse, IoRestorecommerceUserSetupTotpResponse, IoRestorecommerceUserTenantResponse, IoRestorecommerceUserUser, IoRestorecommerceUserUserListResponse, IoRestorecommerceUserUserListWithRoleResponse, IoRestorecommerceUserUserResponse, IoRestorecommerceUserUserRole, IoRestorecommerceUserUserRoleResponse, LocaleFragmentFragment, LocationFragmentFragment, MakeMaybe, MakeOptional, ManufacturerFragmentFragment, ManufucturerDeleteMutation, ManufucturerDeleteMutationVariables, ManufucturerMutateMutation, ManufucturerMutateMutationVariables, ManufucturerReadQuery, ManufucturerReadQueryVariables, MasterDataAddressReadQuery, MasterDataAddressReadQueryVariables, MasterDataCountryDeleteMutateMutation, MasterDataCountryDeleteMutateMutationVariables, MasterDataCountryMutateMutation, MasterDataCountryMutateMutationVariables, MasterDataCountryReadQuery, MasterDataCountryReadQueryVariables, MasterDataCurrencyDeleteMutateMutation, MasterDataCurrencyDeleteMutateMutationVariables, MasterDataCurrencyMutateMutation, MasterDataCurrencyMutateMutationVariables, MasterDataCurrencyReadQuery, MasterDataCurrencyReadQueryVariables, MasterDataCustomerDeleteMutateMutation, MasterDataCustomerDeleteMutateMutationVariables, MasterDataCustomerMutateMutation, MasterDataCustomerMutateMutationVariables, MasterDataCustomerReadQuery, MasterDataCustomerReadQueryVariables, MasterDataLocaleReadQuery, MasterDataLocaleReadQueryVariables, MasterDataLocationReadQuery, MasterDataLocationReadQueryVariables, MasterDataOrganizationDeleteMutateMutation, MasterDataOrganizationDeleteMutateMutationVariables, MasterDataOrganizationMutateMutation, MasterDataOrganizationMutateMutationVariables, MasterDataOrganizationReadQuery, MasterDataOrganizationReadQueryVariables, MasterDataShopDeleteMutateMutation, MasterDataShopDeleteMutateMutationVariables, MasterDataShopMutateMutation, MasterDataShopMutateMutationVariables, MasterDataShopReadQuery, MasterDataShopReadQueryVariables, MasterDataTaxDeleteMutateMutation, MasterDataTaxDeleteMutateMutationVariables, MasterDataTaxMutateMutation, MasterDataTaxMutateMutationVariables, MasterDataTaxReadQuery, MasterDataTaxReadQueryVariables, MasterDataTimezoneReadQuery, MasterDataTimezoneReadQueryVariables, Maybe, MetaFragmentFragment, Mutation, NotificationMutation, NotificationNotificationMutation, NotificationNotificationMutationDeleteArgs, NotificationNotificationMutationMutateArgs, NotificationNotificationQuery, NotificationNotificationQueryReadArgs, NotificationQuery, OpsStatusFragmentFragment, OrderFragmentFragment, OrderingInvoiceCreateMutation, OrderingInvoiceCreateMutationVariables, OrderingMutation, OrderingOrderDeleteMutateMutation, OrderingOrderDeleteMutateMutationVariables, OrderingOrderMutateMutation, OrderingOrderMutateMutationVariables, OrderingOrderMutation, OrderingOrderMutationCancelArgs, OrderingOrderMutationCreateFulfillmentArgs, OrderingOrderMutationCreateInvoiceArgs, OrderingOrderMutationDeleteArgs, OrderingOrderMutationMutateArgs, OrderingOrderMutationNotifyArgs, OrderingOrderMutationSubmitArgs, OrderingOrderMutationWithdrawArgs, OrderingOrderQuery, OrderingOrderQueryEvaluateArgs, OrderingOrderQueryEvaluateFulfillmentArgs, OrderingOrderQueryQueryFulfillmentSolutionArgs, OrderingOrderQueryReadArgs, OrderingOrderReadQuery, OrderingOrderReadQueryVariables, OrderingQuery, OrganizationFragmentFragment, OstorageMutation, OstorageObjectMutation, OstorageObjectMutationCopyArgs, OstorageObjectMutationDeleteArgs, OstorageObjectMutationMoveArgs, OstorageObjectMutationPutArgs, OstorageObjectQuery, OstorageObjectQueryGetArgs, OstorageObjectQueryListArgs, OstorageQuery, PaymentMutation, PaymentPaymentMutation, PaymentPaymentMutationAuthorizeArgs, PaymentPaymentMutationCaptureArgs, PaymentPaymentMutationPurchaseArgs, PaymentPaymentMutationSetupAuthorizationArgs, PaymentPaymentMutationSetupPurchaseArgs, PolicyReadQuery, PolicyReadQueryVariables, PriceGroupDeleteMutation, PriceGroupDeleteMutationVariables, PriceGroupFragmentFragment, PriceGroupMutateMutation, PriceGroupMutateMutationVariables, PriceGroupReadQuery, PriceGroupReadQueryVariables, ProductCategoryDeleteMutation, ProductCategoryDeleteMutationVariables, ProductCategoryFragmentFragment, ProductCategoryMutateMutation, ProductCategoryMutateMutationVariables, ProductCategoryReadQuery, ProductCategoryReadQueryVariables, ProductFragmentFragment, ProductPrototypeDeleteMutation, ProductPrototypeDeleteMutationVariables, ProductPrototypeFragmentFragment, ProductPrototypeMutateMutation, ProductPrototypeMutateMutationVariables, ProductPrototypeReadQuery, ProductPrototypeReadQueryVariables, ProductVariantFragmentFragment, ProtoGoogleProtobufAny, ProtoIoRestorecommerceAccessControlResponse, ProtoIoRestorecommerceAccessControlReverseQuery, ProtoIoRestorecommerceAddressAddressListResponse, ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse, ProtoIoRestorecommerceCommandCommandListResponse, ProtoIoRestorecommerceContactPointContactPointListResponse, ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse, ProtoIoRestorecommerceCountryCountryListResponse, ProtoIoRestorecommerceCredentialCredentialListResponse, ProtoIoRestorecommerceCurrencyCurrencyListResponse, ProtoIoRestorecommerceCustomerCustomerListResponse, ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse, ProtoIoRestorecommerceFulfillmentFulfillmentListResponse, ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse, ProtoIoRestorecommerceFulfillmentProductFulfillmentSolutionListResponse, ProtoIoRestorecommerceInvoiceInvoiceListResponse, ProtoIoRestorecommerceInvoiceInvoiceNumberResponse, ProtoIoRestorecommerceJobJobListResponse, ProtoIoRestorecommerceLocaleLocaleListResponse, ProtoIoRestorecommerceLocationLocationListResponse, ProtoIoRestorecommerceManufacturerManufacturerListResponse, ProtoIoRestorecommerceNotificationNotificationListResponse, ProtoIoRestorecommerceOauthExchangeCodeResponse, ProtoIoRestorecommerceOauthGenerateLinksResponse, ProtoIoRestorecommerceOauthGetTokenResponse, ProtoIoRestorecommerceOauthServicesResponse, ProtoIoRestorecommerceOrderOrderListResponse, ProtoIoRestorecommerceOrderOrderSubmitListResponse, ProtoIoRestorecommerceOrganizationOrganizationListResponse, ProtoIoRestorecommerceOstorageCopyResponseList, ProtoIoRestorecommerceOstorageListResponse, ProtoIoRestorecommerceOstorageMoveResponseList, ProtoIoRestorecommerceOstorageObjectResponse, ProtoIoRestorecommerceOstoragePutResponse, ProtoIoRestorecommercePaymentPaymentResponse, ProtoIoRestorecommercePaymentSetupResponse, ProtoIoRestorecommercePolicyPolicyListResponse, ProtoIoRestorecommercePolicySetPolicySetListResponse, ProtoIoRestorecommercePriceGroupPriceGroupListResponse, ProtoIoRestorecommerceProductCategoryProductCategoryListResponse, ProtoIoRestorecommerceProductIndividualProductVariantListResponse, ProtoIoRestorecommerceProductProductListResponse, ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse, ProtoIoRestorecommerceResourcebaseDeleteResponse, ProtoIoRestorecommerceRoleRoleListResponse, ProtoIoRestorecommerceRuleRuleListResponse, ProtoIoRestorecommerceSettingSettingListResponse, ProtoIoRestorecommerceShopShopListResponse, ProtoIoRestorecommerceStatusOperationStatusObj, ProtoIoRestorecommerceStatusStatusListResponse, ProtoIoRestorecommerceTaxTaxListResponse, ProtoIoRestorecommerceTaxTypeTaxTypeListResponse, ProtoIoRestorecommerceTemplateTemplateListResponse, ProtoIoRestorecommerceTimezoneTimezoneListResponse, ProtoIoRestorecommerceUnitCodeUnitCodeListResponse, ProtoIoRestorecommerceUserCreateBackupTotpCodesResponse, ProtoIoRestorecommerceUserDeleteUsersByOrgResponse, ProtoIoRestorecommerceUserLoginResponse, ProtoIoRestorecommerceUserMfaStatusResponse, ProtoIoRestorecommerceUserSetupTotpResponse, ProtoIoRestorecommerceUserTenantResponse, ProtoIoRestorecommerceUserUserListResponse, ProtoIoRestorecommerceUserUserListWithRoleResponse, ProtoIoRestorecommerceUserUserResponse, Query, ResourceAddressMutation, ResourceAddressMutationDeleteArgs, ResourceAddressMutationMutateArgs, ResourceAddressQuery, ResourceAddressQueryReadArgs, ResourceCommandMutation, ResourceCommandMutationDeleteArgs, ResourceCommandMutationMutateArgs, ResourceCommandQuery, ResourceCommandQueryReadArgs, ResourceContactPointMutation, ResourceContactPointMutationDeleteArgs, ResourceContactPointMutationMutateArgs, ResourceContactPointQuery, ResourceContactPointQueryReadArgs, ResourceContactPointTypeMutation, ResourceContactPointTypeMutationDeleteArgs, ResourceContactPointTypeMutationMutateArgs, ResourceContactPointTypeQuery, ResourceContactPointTypeQueryReadArgs, ResourceCountryMutation, ResourceCountryMutationDeleteArgs, ResourceCountryMutationMutateArgs, ResourceCountryQuery, ResourceCountryQueryReadArgs, ResourceCredentialMutation, ResourceCredentialMutationDeleteArgs, ResourceCredentialMutationMutateArgs, ResourceCredentialQuery, ResourceCredentialQueryReadArgs, ResourceCurrencyMutation, ResourceCurrencyMutationDeleteArgs, ResourceCurrencyMutationMutateArgs, ResourceCurrencyQuery, ResourceCurrencyQueryReadArgs, ResourceCustomerMutation, ResourceCustomerMutationDeleteArgs, ResourceCustomerMutationMutateArgs, ResourceCustomerQuery, ResourceCustomerQueryReadArgs, ResourceLocaleMutation, ResourceLocaleMutationDeleteArgs, ResourceLocaleMutationMutateArgs, ResourceLocaleQuery, ResourceLocaleQueryReadArgs, ResourceLocationMutation, ResourceLocationMutationDeleteArgs, ResourceLocationMutationMutateArgs, ResourceLocationQuery, ResourceLocationQueryReadArgs, ResourceMutation, ResourceOrganizationMutation, ResourceOrganizationMutationDeleteArgs, ResourceOrganizationMutationMutateArgs, ResourceOrganizationQuery, ResourceOrganizationQueryReadArgs, ResourceQuery, ResourceSettingMutation, ResourceSettingMutationDeleteArgs, ResourceSettingMutationMutateArgs, ResourceSettingQuery, ResourceSettingQueryReadArgs, ResourceShopMutation, ResourceShopMutationDeleteArgs, ResourceShopMutationMutateArgs, ResourceShopQuery, ResourceShopQueryReadArgs, ResourceTaxMutation, ResourceTaxMutationDeleteArgs, ResourceTaxMutationMutateArgs, ResourceTaxQuery, ResourceTaxQueryReadArgs, ResourceTaxTypeMutation, ResourceTaxTypeMutationDeleteArgs, ResourceTaxTypeMutationMutateArgs, ResourceTaxTypeQuery, ResourceTaxTypeQueryReadArgs, ResourceTemplateMutation, ResourceTemplateMutationDeleteArgs, ResourceTemplateMutationMutateArgs, ResourceTemplateQuery, ResourceTemplateQueryReadArgs, ResourceTimezoneMutation, ResourceTimezoneMutationDeleteArgs, ResourceTimezoneMutationMutateArgs, ResourceTimezoneQuery, ResourceTimezoneQueryReadArgs, ResourceUnitCodeMutation, ResourceUnitCodeMutationDeleteArgs, ResourceUnitCodeMutationMutateArgs, ResourceUnitCodeQuery, ResourceUnitCodeQueryReadArgs, RoleFragmentFragment, Scalars, SchedulingJobMutation, SchedulingJobMutationDeleteArgs, SchedulingJobMutationMutateArgs, SchedulingJobQuery, SchedulingJobQueryReadArgs, SchedulingMutation, SchedulingQuery, ShopFragmentFragment, StatusFragmentFragment, Subscription, SubscriptionCatalogProductsArgs, SubscriptionFulfillmentFulfillmentCouriersArgs, SubscriptionFulfillmentFulfillment_ProductsArgs, SubscriptionFulfillmentFulfillmentsArgs, SubscriptionIdentityUsersArgs, SubscriptionInvoicingInvoicesArgs, SubscriptionOrderingOrdersArgs, SubscriptionOutput, TaxFragmentFragment, TimezoneFragmentFragment, UserFragmentFragment, UserRoleFragmentFragment };
