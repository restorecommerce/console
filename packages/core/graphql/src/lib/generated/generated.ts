import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
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
}

export interface AccessControlAccessControlQuery {
  __typename?: 'AccessControlAccessControlQuery';
  IsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlResponse>;
  WhatIsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlReverseQuery>;
}

export interface AccessControlAccessControlQueryIsAllowedArgs {
  input: IIoRestorecommerceAccessControlRequest;
}

export interface AccessControlAccessControlQueryWhatIsAllowedArgs {
  input: IIoRestorecommerceAccessControlRequest;
}

export interface AccessControlMutation {
  __typename?: 'AccessControlMutation';
  policy: AccessControlPolicyMutation;
  policy_set: AccessControlPolicySetMutation;
  rule: AccessControlRuleMutation;
}

export interface AccessControlPolicyMutation {
  __typename?: 'AccessControlPolicyMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
}

export interface AccessControlPolicyMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface AccessControlPolicyMutationMutateArgs {
  input: IIoRestorecommercePolicyPolicyList;
}

export interface AccessControlPolicyQuery {
  __typename?: 'AccessControlPolicyQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
}

export interface AccessControlPolicyQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface AccessControlPolicySetMutation {
  __typename?: 'AccessControlPolicySetMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
}

export interface AccessControlPolicySetMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface AccessControlPolicySetMutationMutateArgs {
  input: IIoRestorecommercePolicySetPolicySetList;
}

export interface AccessControlPolicySetQuery {
  __typename?: 'AccessControlPolicySetQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
}

export interface AccessControlPolicySetQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface AccessControlQuery {
  __typename?: 'AccessControlQuery';
  access_control: AccessControlAccessControlQuery;
  policy: AccessControlPolicyQuery;
  policy_set: AccessControlPolicySetQuery;
  rule: AccessControlRuleQuery;
}

export interface AccessControlRuleMutation {
  __typename?: 'AccessControlRuleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
}

export interface AccessControlRuleMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface AccessControlRuleMutationMutateArgs {
  input: IIoRestorecommerceRuleRuleList;
}

export interface AccessControlRuleQuery {
  __typename?: 'AccessControlRuleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
}

export interface AccessControlRuleQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogManufacturerMutation {
  __typename?: 'CatalogManufacturerMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
}

export interface CatalogManufacturerMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface CatalogManufacturerMutationMutateArgs {
  input: IIoRestorecommerceManufacturerManufacturerList;
}

export interface CatalogManufacturerQuery {
  __typename?: 'CatalogManufacturerQuery';
  Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
}

export interface CatalogManufacturerQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogMutation {
  __typename?: 'CatalogMutation';
  manufacturer: CatalogManufacturerMutation;
  price_group: CatalogPriceGroupMutation;
  product: CatalogProductMutation;
  product_category: CatalogProductCategoryMutation;
  product_prototype: CatalogProductPrototypeMutation;
}

export interface CatalogPriceGroupMutation {
  __typename?: 'CatalogPriceGroupMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
}

export interface CatalogPriceGroupMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface CatalogPriceGroupMutationMutateArgs {
  input: IIoRestorecommercePriceGroupPriceGroupList;
}

export interface CatalogPriceGroupQuery {
  __typename?: 'CatalogPriceGroupQuery';
  Read?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
}

export interface CatalogPriceGroupQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogProductCategoryMutation {
  __typename?: 'CatalogProductCategoryMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
}

export interface CatalogProductCategoryMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface CatalogProductCategoryMutationMutateArgs {
  input: IIoRestorecommerceProductCategoryProductCategoryList;
}

export interface CatalogProductCategoryQuery {
  __typename?: 'CatalogProductCategoryQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
}

export interface CatalogProductCategoryQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogProductMutation {
  __typename?: 'CatalogProductMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
}

export interface CatalogProductMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface CatalogProductMutationMutateArgs {
  input: IIoRestorecommerceProductProductList;
}

export interface CatalogProductPrototypeMutation {
  __typename?: 'CatalogProductPrototypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
}

export interface CatalogProductPrototypeMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface CatalogProductPrototypeMutationMutateArgs {
  input: IIoRestorecommerceProductPrototypeProductPrototypeList;
}

export interface CatalogProductPrototypeQuery {
  __typename?: 'CatalogProductPrototypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
}

export interface CatalogProductPrototypeQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogProductQuery {
  __typename?: 'CatalogProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
}

export interface CatalogProductQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface CatalogQuery {
  __typename?: 'CatalogQuery';
  manufacturer: CatalogManufacturerQuery;
  price_group: CatalogPriceGroupQuery;
  product: CatalogProductQuery;
  product_category: CatalogProductCategoryQuery;
  product_prototype: CatalogProductPrototypeQuery;
}

/** The facade status */
export interface FacadeStatusType {
  __typename?: 'FacadeStatusType';
  running: Scalars['Boolean'];
}

export interface FulfillmentFulfillmentCourierMutation {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
}

export interface FulfillmentFulfillmentCourierMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface FulfillmentFulfillmentCourierMutationMutateArgs {
  input: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
}

export interface FulfillmentFulfillmentCourierQuery {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
}

export interface FulfillmentFulfillmentCourierQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface FulfillmentFulfillmentMutation {
  __typename?: 'FulfillmentFulfillmentMutation';
  Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Track?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
}

export interface FulfillmentFulfillmentMutationCancelArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
}

export interface FulfillmentFulfillmentMutationCreateInvoiceArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
}

export interface FulfillmentFulfillmentMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface FulfillmentFulfillmentMutationEvaluateArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
}

export interface FulfillmentFulfillmentMutationMutateArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
}

export interface FulfillmentFulfillmentMutationSubmitArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
}

export interface FulfillmentFulfillmentMutationTrackArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
}

export interface FulfillmentFulfillmentMutationTriggerInvoiceArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
}

export interface FulfillmentFulfillmentMutationWithdrawArgs {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
}

export interface FulfillmentFulfillmentProductMutation {
  __typename?: 'FulfillmentFulfillmentProductMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
}

export interface FulfillmentFulfillmentProductMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface FulfillmentFulfillmentProductMutationMutateArgs {
  input: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
}

export interface FulfillmentFulfillmentProductQuery {
  __typename?: 'FulfillmentFulfillmentProductQuery';
  Find?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
}

export interface FulfillmentFulfillmentProductQueryFindArgs {
  input: IIoRestorecommerceFulfillmentProductPackingSolutionQueryList;
}

export interface FulfillmentFulfillmentProductQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface FulfillmentFulfillmentQuery {
  __typename?: 'FulfillmentFulfillmentQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
}

export interface FulfillmentFulfillmentQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface FulfillmentMutation {
  __typename?: 'FulfillmentMutation';
  fulfillment: FulfillmentFulfillmentMutation;
  fulfillment_courier: FulfillmentFulfillmentCourierMutation;
  fulfillment_product: FulfillmentFulfillmentProductMutation;
}

export interface FulfillmentQuery {
  __typename?: 'FulfillmentQuery';
  fulfillment: FulfillmentFulfillmentQuery;
  fulfillment_courier: FulfillmentFulfillmentCourierQuery;
  fulfillment_product: FulfillmentFulfillmentProductQuery;
}

export interface GoogleProtobufAny {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
}

export interface IGoogleProtobufAny {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
}

export interface IIoRestorecommerceAccessControlContext {
  resources?: InputMaybe<IGoogleProtobufAny[]>;
  security?: InputMaybe<IGoogleProtobufAny>;
  subject?: InputMaybe<IGoogleProtobufAny>;
}

export interface IIoRestorecommerceAccessControlRequest {
  context?: InputMaybe<IIoRestorecommerceAccessControlContext>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommerceAddressAddress {
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
}

export interface IIoRestorecommerceAddressAddressAddition {
  field1?: InputMaybe<Scalars['String']>;
  field2?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAddressAddressList {
  items?: InputMaybe<IIoRestorecommerceAddressAddress[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceAddressBillingAddress {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  comments?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
}

export interface IIoRestorecommerceAddressBusinessAddress {
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAddressContact {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAddressGeoPoint {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceAddressPackStation {
  postNumber?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  stationNumber?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAddressResidentialAddress {
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  midName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAddressShippingAddress {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  comments?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
}

export interface IIoRestorecommerceAmountAmount {
  currencyId?: InputMaybe<Scalars['String']>;
  gross?: InputMaybe<Scalars['Float']>;
  net?: InputMaybe<Scalars['Float']>;
  vats?: InputMaybe<IIoRestorecommerceAmountVat[]>;
}

export interface IIoRestorecommerceAmountVat {
  taxId?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceAttributeAttribute {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAuthRoleAssociation {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  created?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAuthTokens {
  clientId?: InputMaybe<Scalars['String']>;
  expiresIn?: InputMaybe<Scalars['IDateTime']>;
  interactive?: InputMaybe<Scalars['Boolean']>;
  lastLogin?: InputMaybe<Scalars['IDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Scalars['String'][]>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAuthenticationLogAuthenticationLog {
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
}

export interface IIoRestorecommerceAuthenticationLogAuthenticationLogList {
  items?: InputMaybe<IIoRestorecommerceAuthenticationLogAuthenticationLog[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCommandCommand {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<IIoRestorecommerceCommandCommandParameter[]>;
}

export interface IIoRestorecommerceCommandCommandList {
  items?: InputMaybe<IIoRestorecommerceCommandCommand[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCommandCommandParameter {
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceCommandCommandParameterParameterType>;
}

export interface IIoRestorecommerceContactPointContactPoint {
  contactPointTypeIds?: InputMaybe<Scalars['String'][]>;
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
}

export interface IIoRestorecommerceContactPointContactPointList {
  items?: InputMaybe<IIoRestorecommerceContactPointContactPoint[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceContactPointTypeContactPointType {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceContactPointTypeContactPointTypeList {
  items?: InputMaybe<IIoRestorecommerceContactPointTypeContactPointType[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCountryCountry {
  countryCode?: InputMaybe<Scalars['String']>;
  economicAreas?: InputMaybe<Scalars['String'][]>;
  geographicalName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCountryCountryList {
  items?: InputMaybe<IIoRestorecommerceCountryCountry[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCredentialCredential {
  credentials?: InputMaybe<IGoogleProtobufAny>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  pass?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCredentialCredentialList {
  items?: InputMaybe<IIoRestorecommerceCredentialCredential[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCustomerCommercial {
  organizationId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCustomerCustomer {
  commercial?: InputMaybe<IIoRestorecommerceCustomerCommercial>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  private?: InputMaybe<IIoRestorecommerceCustomerPrivate>;
  publicSector?: InputMaybe<IIoRestorecommerceCustomerPublicSector>;
  settings?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
}

export interface IIoRestorecommerceCustomerCustomerList {
  items?: InputMaybe<IIoRestorecommerceCustomerCustomer[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCustomerPrivate {
  contactPointIds?: InputMaybe<Scalars['String'][]>;
  userId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCustomerPublicSector {
  organizationId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFileFile {
  bytes?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['String'][]>;
  thumbnail?: InputMaybe<IIoRestorecommerceImageImage>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFilterFilter {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp[]>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFilterFilterOp {
  filters?: InputMaybe<IIoRestorecommerceFilterFilter[]>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
}

export interface IIoRestorecommerceFulfillmentCourierFulfillmentCourier {
  configuration?: InputMaybe<IGoogleProtobufAny>;
  credentialId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  shopIds?: InputMaybe<Scalars['String'][]>;
  stubType?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentCourierFulfillmentCourierList {
  items?: InputMaybe<IIoRestorecommerceFulfillmentCourierFulfillmentCourier[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentEvent {
  details?: InputMaybe<IGoogleProtobufAny>;
  location?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
  timestamp?: InputMaybe<Scalars['IDateTime']>;
}

export interface IIoRestorecommerceFulfillmentFulfillment {
  customerId?: InputMaybe<Scalars['String']>;
  fulfillmentState?: InputMaybe<IoRestorecommerceFulfillmentFulfillmentState>;
  id?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<IIoRestorecommerceFulfillmentLabel[]>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  packaging?: InputMaybe<IIoRestorecommerceFulfillmentPackaging>;
  references?: InputMaybe<IIoRestorecommerceReferenceReference[]>;
  shopId?: InputMaybe<Scalars['String']>;
  totalAmounts?: InputMaybe<IIoRestorecommerceAmountAmount[]>;
  trackings?: InputMaybe<IIoRestorecommerceFulfillmentTracking[]>;
  userId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentId {
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
  shipmentNumbers?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentIdList {
  items?: InputMaybe<IIoRestorecommerceFulfillmentFulfillmentId[]>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Scalars['String'][]>;
  sections?: InputMaybe<
    IIoRestorecommerceFulfillmentFulfillmentInvoiceSection[]
  >;
}

export interface IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList {
  items?: InputMaybe<IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest[]>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentInvoiceSection {
  fulfillmentId?: InputMaybe<Scalars['String']>;
  selectedParcels?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentList {
  items?: InputMaybe<IIoRestorecommerceFulfillmentFulfillment[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentItem {
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentLabel {
  parcelId?: InputMaybe<Scalars['String']>;
  pdf?: InputMaybe<Scalars['String']>;
  png?: InputMaybe<Scalars['String']>;
  shipmentNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<IoRestorecommerceFulfillmentFulfillmentState>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentPackaging {
  exportDescription?: InputMaybe<Scalars['String']>;
  exportType?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  notify?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<IIoRestorecommerceFulfillmentParcel[]>;
  recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
}

export interface IIoRestorecommerceFulfillmentParcel {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<IIoRestorecommerceFulfillmentItem[]>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentProductFulfillmentProduct {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  courierId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  destinationZones?: InputMaybe<Scalars['String'][]>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  startZones?: InputMaybe<Scalars['String'][]>;
  taxIds?: InputMaybe<Scalars['String'][]>;
  variants?: InputMaybe<IIoRestorecommerceFulfillmentProductVariant[]>;
}

export interface IIoRestorecommerceFulfillmentProductFulfillmentProductList {
  items?: InputMaybe<IIoRestorecommerceFulfillmentProductFulfillmentProduct[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentProductPackingSolutionQuery {
  customerId?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<IIoRestorecommerceFulfillmentItem[]>;
  preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  reference?: InputMaybe<IIoRestorecommerceReferenceReference>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  shopId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentProductPackingSolutionQueryList {
  items?: InputMaybe<
    IIoRestorecommerceFulfillmentProductPackingSolutionQuery[]
  >;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentProductPreferences {
  couriers?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  options?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
}

export interface IIoRestorecommerceFulfillmentProductVariant {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxSize?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
}

export interface IIoRestorecommerceFulfillmentTracking {
  details?: InputMaybe<IGoogleProtobufAny>;
  events?: InputMaybe<IIoRestorecommerceFulfillmentEvent[]>;
  shipmentNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
}

export interface IIoRestorecommerceGeometryBoundingBox3D {
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceImageImage {
  caption?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Scalars['String'][]>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceInvoiceFulfillmentItem {
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoiceInvoice {
  customerId?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<IIoRestorecommerceFileFile[]>;
  fromDate?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  paymentHints?: InputMaybe<Scalars['String'][]>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  references?: InputMaybe<IIoRestorecommerceReferenceReference[]>;
  sections?: InputMaybe<IIoRestorecommerceInvoiceSection[]>;
  sender?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  sent?: InputMaybe<Scalars['Boolean']>;
  shopId?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['IDateTime']>;
  toDate?: InputMaybe<Scalars['IDateTime']>;
  totalAmounts?: InputMaybe<IIoRestorecommerceAmountAmount[]>;
  userId?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['Boolean']>;
}

export interface IIoRestorecommerceInvoiceInvoiceId {
  channelIds?: InputMaybe<Scalars['String'][]>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
}

export interface IIoRestorecommerceInvoiceInvoiceIdList {
  items?: InputMaybe<IIoRestorecommerceInvoiceInvoiceId[]>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceInvoiceInvoiceList {
  items?: InputMaybe<IIoRestorecommerceInvoiceInvoice[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceInvoiceManualItem {
  descritpion?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<IIoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoicePosition {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  contractStartDate?: InputMaybe<Scalars['Float']>;
  fulfillmentItem?: InputMaybe<IIoRestorecommerceInvoiceFulfillmentItem>;
  id?: InputMaybe<Scalars['String']>;
  manualItem?: InputMaybe<IIoRestorecommerceInvoiceManualItem>;
  productItem?: InputMaybe<IIoRestorecommerceInvoiceProductItem>;
  quantity?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
}

export interface IIoRestorecommerceInvoiceProductItem {
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoiceRequestInvoiceNumber {
  context?: InputMaybe<IGoogleProtobufAny>;
  shopId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoiceSection {
  amounts?: InputMaybe<IIoRestorecommerceAmountAmount[]>;
  customerRemark?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<IIoRestorecommerceInvoicePosition[]>;
}

export interface IIoRestorecommerceJobBackoff {
  delay?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<IoRestorecommerceJobBackoffType>;
}

export interface IIoRestorecommerceJobData {
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  subjectId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceJobJob {
  data?: InputMaybe<IIoRestorecommerceJobData>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IIoRestorecommerceJobJobOptions>;
  queueName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  when?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceJobJobFilter {
  jobIds?: InputMaybe<Scalars['String'][]>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceJobJobList {
  items?: InputMaybe<IIoRestorecommerceJobJob[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceJobJobOptions {
  attempts?: InputMaybe<Scalars['Int']>;
  backoff?: InputMaybe<IIoRestorecommerceJobBackoff>;
  jobId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<IoRestorecommerceJobJobOptionsPriority>;
  removeOnComplete?: InputMaybe<Scalars['Boolean']>;
  repeat?: InputMaybe<IIoRestorecommerceJobRepeat>;
  timeout?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceJobJobReadRequest {
  fields?: InputMaybe<IIoRestorecommerceResourcebaseFieldFilter[]>;
  filter?: InputMaybe<IIoRestorecommerceJobJobFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IoRestorecommerceJobJobReadRequestSortOrder>;
}

export interface IIoRestorecommerceJobRepeat {
  count?: InputMaybe<Scalars['Int']>;
  cron?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  every?: InputMaybe<Scalars['Int']>;
  jobId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceLocaleLocale {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceLocaleLocaleList {
  items?: InputMaybe<IIoRestorecommerceLocaleLocale[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceLocationLocation {
  addressId?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceLocationLocationList {
  items?: InputMaybe<IIoRestorecommerceLocationLocation[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceManufacturerManufacturer {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceManufacturerManufacturerList {
  items?: InputMaybe<IIoRestorecommerceManufacturerManufacturer[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceMetaMeta {
  acls?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  created?: InputMaybe<Scalars['IDateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['IDateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
}

export interface IIoRestorecommerceNotificationNotification {
  bodyTemplate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  notificationChannelIds?: InputMaybe<Scalars['String'][]>;
  subjectTemplate?: InputMaybe<Scalars['String']>;
  telephoneNumber?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceNotificationNotificationList {
  items?: InputMaybe<IIoRestorecommerceNotificationNotification[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOauthExchangeCodeRequest {
  code?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOauthGetTokenRequest {
  service?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOrderFulfillmentRequest {
  data?: InputMaybe<IGoogleProtobufAny>;
  exportDescription?: InputMaybe<Scalars['String']>;
  exportType?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  selectedItems?: InputMaybe<Scalars['String'][]>;
  senderAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
}

export interface IIoRestorecommerceOrderFulfillmentRequestList {
  items?: InputMaybe<IIoRestorecommerceOrderFulfillmentRequest[]>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrderItem {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
  parentItemId?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOrderOrder {
  billingAddress?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  customerId?: InputMaybe<Scalars['String']>;
  customerOrderNr?: InputMaybe<Scalars['String']>;
  customerRemark?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<IIoRestorecommerceOrderItem[]>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  notificationEmail?: InputMaybe<Scalars['String']>;
  orderState?: InputMaybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  shippingAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  shopId?: InputMaybe<Scalars['String']>;
  totalAmounts?: InputMaybe<IIoRestorecommerceAmountAmount[]>;
  userId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOrderOrderIdList {
  ids?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceOrderOrderList {
  items?: InputMaybe<IIoRestorecommerceOrderOrder[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrderOrderingInvoiceRequest {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Scalars['String'][]>;
  sections?: InputMaybe<IIoRestorecommerceOrderOrderingInvoiceSection[]>;
}

export interface IIoRestorecommerceOrderOrderingInvoiceRequestList {
  items?: InputMaybe<IIoRestorecommerceOrderOrderingInvoiceRequest[]>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrderOrderingInvoiceSection {
  fulfillmentMode?: InputMaybe<IoRestorecommerceOrderFulfillmentInvoiceMode>;
  orderId?: InputMaybe<Scalars['String']>;
  selectedFulfillments?: InputMaybe<
    IIoRestorecommerceFulfillmentFulfillmentInvoiceSection[]
  >;
  selectedItems?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceOrganizationOrganization {
  contactPointIds?: InputMaybe<Scalars['String'][]>;
  data?: InputMaybe<IGoogleProtobufAny>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isicV4?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<IIoRestorecommerceImageImage>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  paymentMethodIds?: InputMaybe<Scalars['String'][]>;
  registration?: InputMaybe<Scalars['String']>;
  registrationCourt?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOrganizationOrganizationList {
  items?: InputMaybe<IIoRestorecommerceOrganizationOrganization[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOstorageCopyRequestItem {
  bucket?: InputMaybe<Scalars['String']>;
  copySource?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
}

export interface IIoRestorecommerceOstorageCopyRequestList {
  items?: InputMaybe<IIoRestorecommerceOstorageCopyRequestItem[]>;
}

export interface IIoRestorecommerceOstorageDeleteRequest {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOstorageGetRequest {
  bucket?: InputMaybe<Scalars['String']>;
  download?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOstorageListRequest {
  bucket?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp>;
  maxKeys?: InputMaybe<Scalars['Int']>;
  prefix?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOstorageMoveRequestItem {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
  sourceObject?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOstorageMoveRequestList {
  items?: InputMaybe<IIoRestorecommerceOstorageMoveRequestItem[]>;
}

export interface IIoRestorecommerceOstorageObject {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  object?: InputMaybe<Scalars['Upload']>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOstorageOptions {
  contentDisposition?: InputMaybe<Scalars['String']>;
  contentLanguage?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  encoding?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  md5?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  version?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommercePaymentCaptureRequest {
  currency?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
}

export interface IIoRestorecommercePaymentItem {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommercePaymentPaymentRequest {
  currency?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  token?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommercePaymentSetupRequest {
  allowGuestCheckout?: InputMaybe<Scalars['Boolean']>;
  cancelReturnUrl?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  handling?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<IIoRestorecommercePaymentItem[]>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  returnUrl?: InputMaybe<Scalars['String']>;
  shipping?: InputMaybe<Scalars['Int']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  tax?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommercePolicyPolicy {
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Scalars['String'][]>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommercePolicyPolicyList {
  items?: InputMaybe<IIoRestorecommercePolicyPolicy[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommercePolicySetPolicySet {
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<Scalars['String'][]>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommercePolicySetPolicySetList {
  items?: InputMaybe<IIoRestorecommercePolicySetPolicySet[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommercePriceGroupPriceGroup {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommercePriceGroupPriceGroupList {
  items?: InputMaybe<IIoRestorecommercePriceGroupPriceGroup[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommercePricePrice {
  currencyId?: InputMaybe<Scalars['String']>;
  regularPrice?: InputMaybe<Scalars['Float']>;
  sale?: InputMaybe<Scalars['Boolean']>;
  salePrice?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceProductAssociation {
  data?: InputMaybe<IGoogleProtobufAny>;
  productId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String'][]>;
  type?: InputMaybe<IoRestorecommerceProductAssociationType>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductBundle {
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<IIoRestorecommerceImageImage[]>;
  name?: InputMaybe<Scalars['String']>;
  prePackaged?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  products?: InputMaybe<IIoRestorecommerceProductBundleProduct[]>;
}

export interface IIoRestorecommerceProductBundleProduct {
  priceRatio?: InputMaybe<Scalars['Float']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductCategoryParent {
  parentId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductCategoryProductCategory {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<IIoRestorecommerceProductCategoryParent>;
  priceGroupId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductCategoryProductCategoryList {
  items?: InputMaybe<IIoRestorecommerceProductCategoryProductCategory[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceProductIndividualProduct {
  categoryId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  gtin?: InputMaybe<Scalars['String']>;
  manufacturerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  originCountryId?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<IIoRestorecommerceProductPhysicalProduct>;
  prototypeId?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<IIoRestorecommerceProductServiceProduct>;
  taricCode?: InputMaybe<Scalars['String']>;
  taxIds?: InputMaybe<Scalars['String'][]>;
  virtual?: InputMaybe<IIoRestorecommerceProductVirtualProduct>;
}

export interface IIoRestorecommerceProductPackage {
  rotatable?: InputMaybe<Scalars['Boolean']>;
  sizeInCm?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceProductPhysicalProduct {
  variants?: InputMaybe<IIoRestorecommerceProductPhysicalVariant[]>;
}

export interface IIoRestorecommerceProductPhysicalVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<IIoRestorecommerceFileFile[]>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<IIoRestorecommerceImageImage[]>;
  name?: InputMaybe<Scalars['String']>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<IIoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  taxIds?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceProductProduct {
  active?: InputMaybe<Scalars['Boolean']>;
  associations?: InputMaybe<IIoRestorecommerceProductAssociation[]>;
  bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
  data?: InputMaybe<IGoogleProtobufAny>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  product?: InputMaybe<IIoRestorecommerceProductIndividualProduct>;
  shopId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceProductProductList {
  items?: InputMaybe<IIoRestorecommerceProductProduct[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceProductPrototypeProductPrototype {
  categoryId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductPrototypeProductPrototypeList {
  items?: InputMaybe<IIoRestorecommerceProductPrototypeProductPrototype[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceProductServiceProduct {
  variants?: InputMaybe<IIoRestorecommerceProductServiceVariant[]>;
}

export interface IIoRestorecommerceProductServiceVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<IIoRestorecommerceFileFile[]>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<IIoRestorecommerceImageImage[]>;
  name?: InputMaybe<Scalars['String']>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<IIoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  taxIds?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceProductVirtualProduct {
  variants?: InputMaybe<IIoRestorecommerceProductVirtualVariant[]>;
}

export interface IIoRestorecommerceProductVirtualVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<IIoRestorecommerceFileFile[]>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<IIoRestorecommerceImageImage[]>;
  name?: InputMaybe<Scalars['String']>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<IIoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  taxIds?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommercePropertyProperty {
  id?: InputMaybe<Scalars['String']>;
  unitCode?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceReferenceReference {
  instanceId?: InputMaybe<Scalars['String']>;
  instanceType?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseDeleteRequest {
  analyzers?: InputMaybe<Scalars['String'][]>;
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Scalars['String'][]>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceResourcebaseFieldFilter {
  include?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseFilter {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp[]>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseFilterOp {
  filters?: InputMaybe<IIoRestorecommerceResourcebaseFilter[]>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
}

export interface IIoRestorecommerceResourcebaseReadRequest {
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  customQueries?: InputMaybe<Scalars['String'][]>;
  fields?: InputMaybe<IIoRestorecommerceResourcebaseFieldFilter[]>;
  filters?: InputMaybe<IIoRestorecommerceResourcebaseFilterOp[]>;
  limit?: InputMaybe<Scalars['Int']>;
  localesLimiter?: InputMaybe<Scalars['String'][]>;
  offset?: InputMaybe<Scalars['Int']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  sorts?: InputMaybe<IIoRestorecommerceResourcebaseSort[]>;
}

export interface IIoRestorecommerceResourcebaseSearch {
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  fields?: InputMaybe<Scalars['String'][]>;
  search?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseSort {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
}

export interface IIoRestorecommerceRoleRole {
  assignableByRoles?: InputMaybe<Scalars['String'][]>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceRoleRoleList {
  items?: InputMaybe<IIoRestorecommerceRoleRole[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceRuleContextQuery {
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp[]>;
  query?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceRuleRule {
  condition?: InputMaybe<Scalars['String']>;
  contextQuery?: InputMaybe<IIoRestorecommerceRuleContextQuery>;
  description?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommerceRuleRuleList {
  items?: InputMaybe<IIoRestorecommerceRuleRule[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceRuleTarget {
  actions?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  resources?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  subjects?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
}

export interface IIoRestorecommerceShopShop {
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  shopNumber?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceShopShopList {
  items?: InputMaybe<IIoRestorecommerceShopShop[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceStatusStatus {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTaxTax {
  abbreviation?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  typeId?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTaxTaxList {
  items?: InputMaybe<IIoRestorecommerceTaxTax[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTaxTypeTaxType {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTaxTypeTaxTypeList {
  items?: InputMaybe<IIoRestorecommerceTaxTypeTaxType[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTemplateTemplate {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<IIoRestorecommerceFileFile[]>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<IIoRestorecommerceImageImage[]>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<IIoRestorecommerceReferenceReference>;
}

export interface IIoRestorecommerceTemplateTemplateList {
  items?: InputMaybe<IIoRestorecommerceTemplateTemplate[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTimezoneTimezone {
  abbreviationDst?: InputMaybe<Scalars['String']>;
  abbreviationStd?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  offsetDst?: InputMaybe<IIoRestorecommerceTimezoneTimezoneOffset>;
  offsetStd?: InputMaybe<IIoRestorecommerceTimezoneTimezoneOffset>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTimezoneTimezoneList {
  items?: InputMaybe<IIoRestorecommerceTimezoneTimezone[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTimezoneTimezoneOffset {
  hours?: InputMaybe<Scalars['Int']>;
  minutes?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTokenGrantId {
  grantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTokenIdentifier {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTokenTokenData {
  expiresIn?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUnitCodeUnitCode {
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
}

export interface IIoRestorecommerceUnitCodeUnitCodeList {
  items?: InputMaybe<IIoRestorecommerceUnitCodeUnitCode[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceUserActivateRequest {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserChangeEmailRequest {
  identifier?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserChangePasswordRequest {
  newPassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserConfirmEmailChangeRequest {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserConfirmPasswordChangeRequest {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserConfirmUserInvitationRequest {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserFindByRoleRequest {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  role?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserFindByTokenRequest {
  token?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserFindRequest {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserLoginRequest {
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserOrgIdRequest {
  orgIds?: InputMaybe<Scalars['String'][]>;
}

export interface IIoRestorecommerceUserRegisterRequest {
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
}

export interface IIoRestorecommerceUserRequestPasswordChangeRequest {
  identifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserSendActivationEmailRequest {
  identifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserSendInvitationEmailRequest {
  identifier?: InputMaybe<Scalars['String']>;
  invitedByUserIdentifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserTenantRequest {
  domain?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserUnregisterRequest {
  identifier?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceUserUser {
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
  properties?: InputMaybe<IIoRestorecommerceAttributeAttribute[]>;
  roleAssociations?: InputMaybe<IIoRestorecommerceAuthRoleAssociation[]>;
  timezoneId?: InputMaybe<Scalars['String']>;
  tokens?: InputMaybe<IIoRestorecommerceAuthTokens[]>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
}

export interface IIoRestorecommerceUserUserList {
  items?: InputMaybe<IIoRestorecommerceUserUser[]>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IdentityAuthenticationLogMutation {
  __typename?: 'IdentityAuthenticationLogMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
}

export interface IdentityAuthenticationLogMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface IdentityAuthenticationLogMutationMutateArgs {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
}

export interface IdentityAuthenticationLogQuery {
  __typename?: 'IdentityAuthenticationLogQuery';
  Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
}

export interface IdentityAuthenticationLogQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface IdentityMutation {
  __typename?: 'IdentityMutation';
  authentication_log: IdentityAuthenticationLogMutation;
  o_auth: IdentityOAuthMutation;
  role: IdentityRoleMutation;
  token: IdentityTokenMutation;
  user: IdentityUserMutation;
}

export interface IdentityOAuthMutation {
  __typename?: 'IdentityOAuthMutation';
  AvailableServices?: Maybe<ProtoIoRestorecommerceOauthServicesResponse>;
  ExchangeCode?: Maybe<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  GenerateLinks?: Maybe<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  GetToken?: Maybe<ProtoIoRestorecommerceOauthGetTokenResponse>;
}

export interface IdentityOAuthMutationExchangeCodeArgs {
  input: IIoRestorecommerceOauthExchangeCodeRequest;
}

export interface IdentityOAuthMutationGetTokenArgs {
  input: IIoRestorecommerceOauthGetTokenRequest;
}

export interface IdentityQuery {
  __typename?: 'IdentityQuery';
  authentication_log: IdentityAuthenticationLogQuery;
  role: IdentityRoleQuery;
  token: IdentityTokenQuery;
  user: IdentityUserQuery;
}

export interface IdentityRoleMutation {
  __typename?: 'IdentityRoleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
}

export interface IdentityRoleMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface IdentityRoleMutationMutateArgs {
  input: IIoRestorecommerceRoleRoleList;
}

export interface IdentityRoleQuery {
  __typename?: 'IdentityRoleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
}

export interface IdentityRoleQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface IdentityTokenMutation {
  __typename?: 'IdentityTokenMutation';
  consume?: Maybe<ProtoGoogleProtobufAny>;
  destroy?: Maybe<ProtoGoogleProtobufAny>;
  revokeByGrantId?: Maybe<ProtoGoogleProtobufAny>;
  upsert?: Maybe<ProtoGoogleProtobufAny>;
}

export interface IdentityTokenMutationConsumeArgs {
  input: IIoRestorecommerceTokenIdentifier;
}

export interface IdentityTokenMutationDestroyArgs {
  input: IIoRestorecommerceTokenIdentifier;
}

export interface IdentityTokenMutationRevokeByGrantIdArgs {
  input: IIoRestorecommerceTokenGrantId;
}

export interface IdentityTokenMutationUpsertArgs {
  input: IIoRestorecommerceTokenTokenData;
}

export interface IdentityTokenQuery {
  __typename?: 'IdentityTokenQuery';
  find?: Maybe<ProtoGoogleProtobufAny>;
}

export interface IdentityTokenQueryFindArgs {
  input: IIoRestorecommerceTokenIdentifier;
}

export interface IdentityUserMutation {
  __typename?: 'IdentityUserMutation';
  Activate?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ChangePassword?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  GetUnauthenticatedSubjectTokenForTenant?: Maybe<ProtoIoRestorecommerceUserTenantResponse>;
  Login?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Unregister?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
}

export interface IdentityUserMutationActivateArgs {
  input: IIoRestorecommerceUserActivateRequest;
}

export interface IdentityUserMutationChangePasswordArgs {
  input: IIoRestorecommerceUserChangePasswordRequest;
}

export interface IdentityUserMutationConfirmEmailChangeArgs {
  input: IIoRestorecommerceUserConfirmEmailChangeRequest;
}

export interface IdentityUserMutationConfirmPasswordChangeArgs {
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
}

export interface IdentityUserMutationConfirmUserInvitationArgs {
  input: IIoRestorecommerceUserConfirmUserInvitationRequest;
}

export interface IdentityUserMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface IdentityUserMutationDeleteUsersByOrgArgs {
  input: IIoRestorecommerceUserOrgIdRequest;
}

export interface IdentityUserMutationGetUnauthenticatedSubjectTokenForTenantArgs {
  input: IIoRestorecommerceUserTenantRequest;
}

export interface IdentityUserMutationLoginArgs {
  input: IIoRestorecommerceUserLoginRequest;
}

export interface IdentityUserMutationMutateArgs {
  input: IIoRestorecommerceUserUserList;
}

export interface IdentityUserMutationRegisterArgs {
  input: IIoRestorecommerceUserRegisterRequest;
}

export interface IdentityUserMutationRequestEmailChangeArgs {
  input: IIoRestorecommerceUserChangeEmailRequest;
}

export interface IdentityUserMutationRequestPasswordChangeArgs {
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
}

export interface IdentityUserMutationSendActivationEmailArgs {
  input: IIoRestorecommerceUserSendActivationEmailRequest;
}

export interface IdentityUserMutationSendInvitationEmailArgs {
  input: IIoRestorecommerceUserSendInvitationEmailRequest;
}

export interface IdentityUserMutationUnregisterArgs {
  input: IIoRestorecommerceUserUnregisterRequest;
}

export interface IdentityUserQuery {
  __typename?: 'IdentityUserQuery';
  Find?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByRole?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByToken?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Read?: Maybe<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
}

export interface IdentityUserQueryFindArgs {
  input: IIoRestorecommerceUserFindRequest;
}

export interface IdentityUserQueryFindByRoleArgs {
  input: IIoRestorecommerceUserFindByRoleRequest;
}

export interface IdentityUserQueryFindByTokenArgs {
  input: IIoRestorecommerceUserFindByTokenRequest;
}

export interface IdentityUserQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface InvoicingInvoiceMutation {
  __typename?: 'InvoicingInvoiceMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  GenerateInvoiceNumber?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Render?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Send?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
}

export interface InvoicingInvoiceMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface InvoicingInvoiceMutationGenerateInvoiceNumberArgs {
  input: IIoRestorecommerceInvoiceRequestInvoiceNumber;
}

export interface InvoicingInvoiceMutationMutateArgs {
  input: IIoRestorecommerceInvoiceInvoiceList;
}

export interface InvoicingInvoiceMutationRenderArgs {
  input: IIoRestorecommerceInvoiceInvoiceList;
}

export interface InvoicingInvoiceMutationSendArgs {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
}

export interface InvoicingInvoiceMutationWithdrawArgs {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
}

export interface InvoicingInvoiceQuery {
  __typename?: 'InvoicingInvoiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
}

export interface InvoicingInvoiceQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface InvoicingMutation {
  __typename?: 'InvoicingMutation';
  invoice: InvoicingInvoiceMutation;
}

export interface InvoicingQuery {
  __typename?: 'InvoicingQuery';
  invoice: InvoicingInvoiceQuery;
}

export interface IoRestorecommerceAccessControlResponse {
  __typename?: 'IoRestorecommerceAccessControlResponse';
  decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  obligations?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
}

export enum IoRestorecommerceAccessControlResponseDecision {
  Deny = 'DENY',
  Indeterminate = 'INDETERMINATE',
  NotApplicable = 'NOT_APPLICABLE',
  Permit = 'PERMIT',
}

export interface IoRestorecommerceAccessControlReverseQuery {
  __typename?: 'IoRestorecommerceAccessControlReverseQuery';
  obligations?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  policySets?: Maybe<IoRestorecommercePolicySetPolicySetRq[]>;
}

export interface IoRestorecommerceAddressAddress {
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
}

export interface IoRestorecommerceAddressAddressAddition {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAddressAddressListResponse {
  __typename?: 'IoRestorecommerceAddressAddressListResponse';
  items?: Maybe<IoRestorecommerceAddressAddressResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceAddressAddressResponse {
  __typename?: 'IoRestorecommerceAddressAddressResponse';
  payload?: Maybe<IoRestorecommerceAddressAddress>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceAddressBillingAddress {
  __typename?: 'IoRestorecommerceAddressBillingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  comments?: Maybe<Scalars['String']>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
}

export interface IoRestorecommerceAddressBusinessAddress {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAddressContact {
  __typename?: 'IoRestorecommerceAddressContact';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAddressGeoPoint {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceAddressPackStation {
  __typename?: 'IoRestorecommerceAddressPackStation';
  postNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAddressResidentialAddress {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  midName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAddressShippingAddress {
  __typename?: 'IoRestorecommerceAddressShippingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  comments?: Maybe<Scalars['String']>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
}

export interface IoRestorecommerceAmountAmount {
  __typename?: 'IoRestorecommerceAmountAmount';
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  currencyId?: Maybe<Scalars['String']>;
  gross?: Maybe<Scalars['Float']>;
  net?: Maybe<Scalars['Float']>;
  vats?: Maybe<IoRestorecommerceAmountVat[]>;
}

export interface IoRestorecommerceAmountVat {
  __typename?: 'IoRestorecommerceAmountVAT';
  tax?: Maybe<IoRestorecommerceTaxTax>;
  taxId?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceAttributeAttribute {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAuthRoleAssociation {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAuthTokens {
  __typename?: 'IoRestorecommerceAuthTokens';
  clientId?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  scopes?: Maybe<Scalars['String'][]>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAuthenticationLogAuthenticationLog {
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
}

export interface IoRestorecommerceAuthenticationLogAuthenticationLogListResponse {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  items?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceAuthenticationLogAuthenticationLogResponse {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCommandCommand {
  __typename?: 'IoRestorecommerceCommandCommand';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<IoRestorecommerceCommandCommandParameter[]>;
}

export interface IoRestorecommerceCommandCommandListResponse {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<IoRestorecommerceCommandCommandResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCommandCommandParameter {
  __typename?: 'IoRestorecommerceCommandCommandParameter';
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
}

export enum IoRestorecommerceCommandCommandParameterParameterType {
  ArrayValue = 'array_value',
  BooleanValue = 'boolean_value',
  NumberValue = 'number_value',
  ObjectValue = 'object_value',
  StringValue = 'string_value',
}

export interface IoRestorecommerceCommandCommandResponse {
  __typename?: 'IoRestorecommerceCommandCommandResponse';
  payload?: Maybe<IoRestorecommerceCommandCommand>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceContactPointContactPoint {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  contactPointType?: Maybe<IoRestorecommerceContactPointTypeContactPointType[]>;
  contactPointTypeIds?: Maybe<Scalars['String'][]>;
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
}

export interface IoRestorecommerceContactPointContactPointListResponse {
  __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
  items?: Maybe<IoRestorecommerceContactPointContactPointResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceContactPointContactPointResponse {
  __typename?: 'IoRestorecommerceContactPointContactPointResponse';
  payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceContactPointTypeContactPointType {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceContactPointTypeContactPointTypeListResponse {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
  items?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceContactPointTypeContactPointTypeResponse {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeResponse';
  payload?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCountryCountry {
  __typename?: 'IoRestorecommerceCountryCountry';
  countryCode?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Scalars['String'][]>;
  geographicalName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCountryCountryListResponse {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<IoRestorecommerceCountryCountryResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCountryCountryResponse {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCredentialCredential {
  __typename?: 'IoRestorecommerceCredentialCredential';
  credentials?: Maybe<GoogleProtobufAny>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCredentialCredentialListResponse {
  __typename?: 'IoRestorecommerceCredentialCredentialListResponse';
  items?: Maybe<IoRestorecommerceCredentialCredentialResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCredentialCredentialResponse {
  __typename?: 'IoRestorecommerceCredentialCredentialResponse';
  payload?: Maybe<IoRestorecommerceCredentialCredential>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCurrencyCurrency {
  __typename?: 'IoRestorecommerceCurrencyCurrency';
  countryId?: Maybe<Scalars['String']>;
  customExchangeRates?: Maybe<IoRestorecommerceCurrencyExchangeRate[]>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCurrencyExchangeRate {
  __typename?: 'IoRestorecommerceCurrencyExchangeRate';
  amount?: Maybe<Scalars['Float']>;
  expenses?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  toCurrencyId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCustomerCommercial {
  __typename?: 'IoRestorecommerceCustomerCommercial';
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCustomerCustomer {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  commercial?: Maybe<IoRestorecommerceCustomerCommercial>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  private?: Maybe<IoRestorecommerceCustomerPrivate>;
  publicSector?: Maybe<IoRestorecommerceCustomerPublicSector>;
  settings?: Maybe<IoRestorecommerceAttributeAttribute[]>;
}

export interface IoRestorecommerceCustomerCustomerListResponse {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<IoRestorecommerceCustomerCustomerResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCustomerCustomerResponse {
  __typename?: 'IoRestorecommerceCustomerCustomerResponse';
  payload?: Maybe<IoRestorecommerceCustomerCustomer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCustomerPrivate {
  __typename?: 'IoRestorecommerceCustomerPrivate';
  contactPointIds?: Maybe<Scalars['String'][]>;
  contactPoints?: Maybe<IoRestorecommerceContactPointContactPoint[]>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCustomerPublicSector {
  __typename?: 'IoRestorecommerceCustomerPublicSector';
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFileFile {
  __typename?: 'IoRestorecommerceFileFile';
  bytes?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String'][]>;
  thumbnail?: Maybe<IoRestorecommerceImageImage>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFilterFilter {
  __typename?: 'IoRestorecommerceFilterFilter';
  field?: Maybe<Scalars['String']>;
  filters?: Maybe<IoRestorecommerceFilterFilterOp[]>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFilterFilterOp {
  __typename?: 'IoRestorecommerceFilterFilterOp';
  filters?: Maybe<IoRestorecommerceFilterFilter[]>;
  operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
}

export enum IoRestorecommerceFilterFilterOpOperator {
  And = 'and',
  Or = 'or',
}

export enum IoRestorecommerceFilterFilterOperation {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  ILike = 'iLike',
  In = 'in',
  IsEmpty = 'isEmpty',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
}

export enum IoRestorecommerceFilterFilterValueType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING',
}

export interface IoRestorecommerceFulfillmentCourierFulfillmentCourier {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
  configuration?: Maybe<GoogleProtobufAny>;
  credentialId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  shopIds?: Maybe<Scalars['String'][]>;
  shops?: Maybe<IoRestorecommerceShopShop[]>;
  stubType?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  items?: Maybe<
    IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse[]
  >;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceFulfillmentEvent {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  details?: Maybe<GoogleProtobufAny>;
  location?: Maybe<Scalars['String']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
  timestamp?: Maybe<Scalars['DateTime']>;
}

export interface IoRestorecommerceFulfillmentFulfillment {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  fulfillmentState?: Maybe<IoRestorecommerceFulfillmentFulfillmentState>;
  id?: Maybe<Scalars['String']>;
  labels?: Maybe<IoRestorecommerceFulfillmentLabel[]>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
  references?: Maybe<IoRestorecommerceReferenceReference[]>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  totalAmounts?: Maybe<IoRestorecommerceAmountAmount[]>;
  trackings?: Maybe<IoRestorecommerceFulfillmentTracking[]>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentFulfillmentListResponse {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
  items?: Maybe<IoRestorecommerceFulfillmentFulfillmentResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentFulfillmentResponse {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export enum IoRestorecommerceFulfillmentFulfillmentState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Invalid = 'INVALID',
  InTransit = 'IN_TRANSIT',
  Pending = 'PENDING',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN',
}

export interface IoRestorecommerceFulfillmentItem {
  __typename?: 'IoRestorecommerceFulfillmentItem';
  package?: Maybe<IoRestorecommerceProductPackage>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentLabel {
  __typename?: 'IoRestorecommerceFulfillmentLabel';
  parcelId?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Scalars['String']>;
  state?: Maybe<IoRestorecommerceFulfillmentFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentPackaging {
  __typename?: 'IoRestorecommerceFulfillmentPackaging';
  exportDescription?: Maybe<Scalars['String']>;
  exportType?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  notify?: Maybe<Scalars['String']>;
  parcels?: Maybe<IoRestorecommerceFulfillmentParcel[]>;
  recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
  sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
}

export interface IoRestorecommerceFulfillmentParcel {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<IoRestorecommerceFulfillmentItem[]>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentProductFulfillmentProduct {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProduct';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  courier?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  courierId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destinationZones?: Maybe<Scalars['String'][]>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  startZones?: Maybe<Scalars['String'][]>;
  taxIds?: Maybe<Scalars['String'][]>;
  variants?: Maybe<IoRestorecommerceFulfillmentProductVariant[]>;
}

export interface IoRestorecommerceFulfillmentProductFulfillmentProductListResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  items?: Maybe<
    IoRestorecommerceFulfillmentProductFulfillmentProductResponse[]
  >;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentProductFulfillmentProductResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceFulfillmentProductPackingSolution {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolution';
  amounts?: Maybe<IoRestorecommerceAmountAmount[]>;
  compactness?: Maybe<Scalars['Float']>;
  homogeneity?: Maybe<Scalars['Float']>;
  parcels?: Maybe<IoRestorecommerceFulfillmentParcel[]>;
  score?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceFulfillmentProductPackingSolutionListResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  items?: Maybe<IoRestorecommerceFulfillmentProductPackingSolutionResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentProductPackingSolutionResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponse';
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  solutions?: Maybe<IoRestorecommerceFulfillmentProductPackingSolution[]>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceFulfillmentProductPreferences {
  __typename?: 'IoRestorecommerceFulfillmentProductPreferences';
  couriers?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  options?: Maybe<IoRestorecommerceAttributeAttribute[]>;
}

export interface IoRestorecommerceFulfillmentProductVariant {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
}

export interface IoRestorecommerceFulfillmentTracking {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  details?: Maybe<GoogleProtobufAny>;
  events?: Maybe<IoRestorecommerceFulfillmentEvent[]>;
  shipmentNumber?: Maybe<Scalars['String']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceGeometryBoundingBox3D {
  __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceImageImage {
  __typename?: 'IoRestorecommerceImageImage';
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  tags?: Maybe<Scalars['String'][]>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceInvoiceFulfillmentItem {
  __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceInvoiceInvoice {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  documents?: Maybe<IoRestorecommerceFileFile[]>;
  fromDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentHints?: Maybe<Scalars['String'][]>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: Maybe<IoRestorecommerceAddressBillingAddress>;
  references?: Maybe<IoRestorecommerceReferenceReference[]>;
  sections?: Maybe<IoRestorecommerceInvoiceSection[]>;
  sender?: Maybe<IoRestorecommerceAddressBillingAddress>;
  sent?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  toDate?: Maybe<Scalars['DateTime']>;
  totalAmounts?: Maybe<IoRestorecommerceAmountAmount[]>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
  withdrawn?: Maybe<Scalars['Boolean']>;
}

export interface IoRestorecommerceInvoiceInvoiceListResponse {
  __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
  items?: Maybe<IoRestorecommerceInvoiceInvoiceResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceInvoiceInvoiceNumberResponse {
  __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
  invoiceNumber?: Maybe<Scalars['String']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
}

export interface IoRestorecommerceInvoiceInvoiceResponse {
  __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
  payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceInvoiceManualItem {
  __typename?: 'IoRestorecommerceInvoiceManualItem';
  descritpion?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<IoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
}

export enum IoRestorecommerceInvoicePaymentState {
  Payed = 'PAYED',
  Unpayed = 'UNPAYED',
}

export interface IoRestorecommerceInvoicePosition {
  __typename?: 'IoRestorecommerceInvoicePosition';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  contractStartDate?: Maybe<Scalars['Float']>;
  fulfillmentItem?: Maybe<IoRestorecommerceInvoiceFulfillmentItem>;
  id?: Maybe<Scalars['String']>;
  manualItem?: Maybe<IoRestorecommerceInvoiceManualItem>;
  productItem?: Maybe<IoRestorecommerceInvoiceProductItem>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
}

export interface IoRestorecommerceInvoiceProductItem {
  __typename?: 'IoRestorecommerceInvoiceProductItem';
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceInvoiceSection {
  __typename?: 'IoRestorecommerceInvoiceSection';
  amounts?: Maybe<IoRestorecommerceAmountAmount[]>;
  customerRemark?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  positions?: Maybe<IoRestorecommerceInvoicePosition[]>;
}

export interface IoRestorecommerceJobBackoff {
  __typename?: 'IoRestorecommerceJobBackoff';
  delay?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceJobBackoffType>;
}

export enum IoRestorecommerceJobBackoffType {
  Exponential = 'EXPONENTIAL',
  Fixed = 'FIXED',
}

export interface IoRestorecommerceJobData {
  __typename?: 'IoRestorecommerceJobData';
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  payload?: Maybe<GoogleProtobufAny>;
  subjectId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceJobJob {
  __typename?: 'IoRestorecommerceJobJob';
  data?: Maybe<IoRestorecommerceJobData>;
  id?: Maybe<Scalars['String']>;
  options?: Maybe<IoRestorecommerceJobJobOptions>;
  queueName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceJobJobListResponse {
  __typename?: 'IoRestorecommerceJobJobListResponse';
  items?: Maybe<IoRestorecommerceJobJobResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceJobJobOptions {
  __typename?: 'IoRestorecommerceJobJobOptions';
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IoRestorecommerceJobBackoff>;
  jobId?: Maybe<Scalars['String']>;
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  removeOnComplete?: Maybe<Scalars['Boolean']>;
  repeat?: Maybe<IoRestorecommerceJobRepeat>;
  timeout?: Maybe<Scalars['Int']>;
}

export enum IoRestorecommerceJobJobOptionsPriority {
  Critical = 'CRITICAL',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Normal = 'NORMAL',
}

export enum IoRestorecommerceJobJobReadRequestSortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  Unsorted = 'UNSORTED',
}

export interface IoRestorecommerceJobJobResponse {
  __typename?: 'IoRestorecommerceJobJobResponse';
  payload?: Maybe<IoRestorecommerceJobJob>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceJobRepeat {
  __typename?: 'IoRestorecommerceJobRepeat';
  count?: Maybe<Scalars['Int']>;
  cron?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  every?: Maybe<Scalars['Int']>;
  jobId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  tz?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceLocaleLocale {
  __typename?: 'IoRestorecommerceLocaleLocale';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceLocaleLocaleListResponse {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<IoRestorecommerceLocaleLocaleResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceLocaleLocaleResponse {
  __typename?: 'IoRestorecommerceLocaleLocaleResponse';
  payload?: Maybe<IoRestorecommerceLocaleLocale>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceLocationLocation {
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
}

export interface IoRestorecommerceLocationLocationListResponse {
  __typename?: 'IoRestorecommerceLocationLocationListResponse';
  items?: Maybe<IoRestorecommerceLocationLocationResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceLocationLocationResponse {
  __typename?: 'IoRestorecommerceLocationLocationResponse';
  payload?: Maybe<IoRestorecommerceLocationLocation>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceManufacturerManufacturer {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceManufacturerManufacturerListResponse {
  __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
  items?: Maybe<IoRestorecommerceManufacturerManufacturerResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceManufacturerManufacturerResponse {
  __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
  payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceMetaMeta {
  __typename?: 'IoRestorecommerceMetaMeta';
  acls?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owners?: Maybe<IoRestorecommerceAttributeAttribute[]>;
}

export interface IoRestorecommerceNotificationNotification {
  __typename?: 'IoRestorecommerceNotificationNotification';
  bodyTemplate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  notificationChannelIds?: Maybe<Scalars['String'][]>;
  subjectTemplate?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceNotificationNotificationListResponse {
  __typename?: 'IoRestorecommerceNotificationNotificationListResponse';
  items?: Maybe<IoRestorecommerceNotificationNotificationResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceNotificationNotificationResponse {
  __typename?: 'IoRestorecommerceNotificationNotificationResponse';
  payload?: Maybe<IoRestorecommerceNotificationNotification>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOauthExchangeCodeResponse {
  __typename?: 'IoRestorecommerceOauthExchangeCodeResponse';
  email?: Maybe<Scalars['String']>;
  token?: Maybe<IoRestorecommerceAuthTokens>;
  user?: Maybe<IoRestorecommerceUserUserResponse>;
}

export interface IoRestorecommerceOauthGenerateLinksResponse {
  __typename?: 'IoRestorecommerceOauthGenerateLinksResponse';
  links?: Maybe<Scalars['MapScalar']>;
}

export interface IoRestorecommerceOauthGetTokenResponse {
  __typename?: 'IoRestorecommerceOauthGetTokenResponse';
  status?: Maybe<IoRestorecommerceStatusStatus>;
  token?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOauthServicesResponse {
  __typename?: 'IoRestorecommerceOauthServicesResponse';
  services?: Maybe<Scalars['String'][]>;
}

export enum IoRestorecommerceOrderFulfillmentInvoiceMode {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE',
}

export interface IoRestorecommerceOrderItem {
  __typename?: 'IoRestorecommerceOrderItem';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
  parentItemId?: Maybe<Scalars['String']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOrderOrder {
  __typename?: 'IoRestorecommerceOrderOrder';
  billingAddress?: Maybe<IoRestorecommerceAddressBillingAddress>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  customerOrderNr?: Maybe<Scalars['String']>;
  customerRemark?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<IoRestorecommerceOrderItem[]>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  notificationEmail?: Maybe<Scalars['String']>;
  orderState?: Maybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: Maybe<IoRestorecommerceFulfillmentProductPreferences>;
  shippingAddress?: Maybe<IoRestorecommerceAddressShippingAddress>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  totalAmounts?: Maybe<IoRestorecommerceAmountAmount[]>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOrderOrderListResponse {
  __typename?: 'IoRestorecommerceOrderOrderListResponse';
  items?: Maybe<IoRestorecommerceOrderOrderResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceOrderOrderResponse {
  __typename?: 'IoRestorecommerceOrderOrderResponse';
  payload?: Maybe<IoRestorecommerceOrderOrder>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export enum IoRestorecommerceOrderOrderState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN',
}

export interface IoRestorecommerceOrderOrderSubmitListResponse {
  __typename?: 'IoRestorecommerceOrderOrderSubmitListResponse';
  fulfillments?: Maybe<IoRestorecommerceFulfillmentFulfillmentResponse[]>;
  invoices?: Maybe<IoRestorecommerceInvoiceInvoiceResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  orders?: Maybe<IoRestorecommerceOrderOrderResponse[]>;
}

export interface IoRestorecommerceOrganizationOrganization {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  contactPointIds?: Maybe<Scalars['String'][]>;
  contactPoints?: Maybe<IoRestorecommerceContactPointContactPoint[]>;
  data?: Maybe<GoogleProtobufAny>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isicV4?: Maybe<Scalars['String']>;
  logo?: Maybe<IoRestorecommerceImageImage>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  parentId?: Maybe<Scalars['String']>;
  paymentMethodIds?: Maybe<Scalars['String'][]>;
  paymentMethods?: Maybe<IoRestorecommercePaymentMethodPaymentMethod[]>;
  registration?: Maybe<Scalars['String']>;
  registrationCourt?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOrganizationOrganizationListResponse {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<IoRestorecommerceOrganizationOrganizationResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceOrganizationOrganizationResponse {
  __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
  payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageCopyResponseItem {
  __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
  bucket?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
}

export interface IoRestorecommerceOstorageCopyResponseList {
  __typename?: 'IoRestorecommerceOstorageCopyResponseList';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<IoRestorecommerceOstorageCopyResponsePayloadWithStatus[]>;
}

export interface IoRestorecommerceOstorageCopyResponsePayloadWithStatus {
  __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageListResponse {
  __typename?: 'IoRestorecommerceOstorageListResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<IoRestorecommerceOstorageObjectsDataWithPayloadStatus[]>;
}

export interface IoRestorecommerceOstorageMoveResponseItem {
  __typename?: 'IoRestorecommerceOstorageMoveResponseItem';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
  sourceObject?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOstorageMoveResponseList {
  __typename?: 'IoRestorecommerceOstorageMoveResponseList';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<IoRestorecommerceOstorageMoveResponsePayloadWithStatus[]>;
}

export interface IoRestorecommerceOstorageMoveResponsePayloadWithStatus {
  __typename?: 'IoRestorecommerceOstorageMoveResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageMoveResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageObjectData {
  __typename?: 'IoRestorecommerceOstorageObjectData';
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  objectName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOstorageObjectResponse {
  __typename?: 'IoRestorecommerceOstorageObjectResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  response?: Maybe<IoRestorecommerceOstorageObjectResponsePayloadWithStatus>;
}

export interface IoRestorecommerceOstorageObjectResponsePayload {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayload';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  object?: Maybe<Scalars['TodoScalar']>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOstorageObjectResponsePayloadWithStatus {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectResponsePayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageObjectsDataWithPayloadStatus {
  __typename?: 'IoRestorecommerceOstorageObjectsDataWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectData>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageOptions {
  __typename?: 'IoRestorecommerceOstorageOptions';
  contentDisposition?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<GoogleProtobufAny>;
  encoding?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  tags?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  version?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOstoragePutResponse {
  __typename?: 'IoRestorecommerceOstoragePutResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  response?: Maybe<IoRestorecommerceOstoragePutResponseWithPayloadStatus>;
}

export interface IoRestorecommerceOstoragePutResponseWithPayloadStatus {
  __typename?: 'IoRestorecommerceOstoragePutResponseWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageResponse>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageResponse {
  __typename?: 'IoRestorecommerceOstorageResponse';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  tags?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommercePaymentMethodPaymentMethod {
  __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
  data?: Maybe<GoogleProtobufAny>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentMethod?: Maybe<IoRestorecommercePaymentMethodPaymentMethodEnum>;
  transferType?: Maybe<IoRestorecommercePaymentMethodTransferTypeEnum>;
}

export enum IoRestorecommercePaymentMethodPaymentMethodEnum {
  DirectDebit = 'DIRECT_DEBIT',
  Paypal = 'PAYPAL',
  WireTransfer = 'WIRE_TRANSFER',
}

export enum IoRestorecommercePaymentMethodTransferTypeEnum {
  Both = 'BOTH',
  Receive = 'RECEIVE',
  Send = 'SEND',
}

export interface IoRestorecommercePaymentPaymentPayload {
  __typename?: 'IoRestorecommercePaymentPaymentPayload';
  executedOn?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommercePaymentPaymentPayloadStatus {
  __typename?: 'IoRestorecommercePaymentPaymentPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentPaymentPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommercePaymentPaymentResponse {
  __typename?: 'IoRestorecommercePaymentPaymentResponse';
  item?: Maybe<IoRestorecommercePaymentPaymentPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
}

export enum IoRestorecommercePaymentProvider {
  Adyen = 'Adyen',
  AuthorizeNet = 'AuthorizeNet',
  AuthorizeNetCim = 'AuthorizeNetCIM',
  AxcessMs = 'AxcessMS',
  BbsNetaxept = 'BBSNetaxept',
  Balanced = 'Balanced',
  BamboraAsiaPacific = 'BamboraAsiaPacific',
  BankFrick = 'BankFrick',
  Banwire = 'Banwire',
  BarclaysePdqExtraPlus = 'BarclaysePDQExtraPlus',
  Be2Bill = 'Be2Bill',
  Beanstreamcom = 'Beanstreamcom',
  BluePay = 'BluePay',
  Borgun = 'Borgun',
  Braintree = 'Braintree',
  BridgePay = 'BridgePay',
  CamsCentralAccountManagementSystem = 'CAMSCentralAccountManagementSystem',
  CardSave = 'CardSave',
  CardStream = 'CardStream',
  Cardknox = 'Cardknox',
  Cashnet = 'Cashnet',
  Cecabank = 'Cecabank',
  Cenpos = 'Cenpos',
  Checkoutcom = 'Checkoutcom',
  Clearhaus = 'Clearhaus',
  Commercegate = 'Commercegate',
  Conekta = 'Conekta',
  CyberSource = 'CyberSource',
  Dibs = 'DIBS',
  DataCash = 'DataCash',
  EvoCanada = 'EVOCanada',
  Efsnet = 'Efsnet',
  ElavonMyVirtualMerchant = 'ElavonMyVirtualMerchant',
  Exact = 'Exact',
  Ezic = 'Ezic',
  FatZebra = 'FatZebra',
  FederatedCanada = 'FederatedCanada',
  FinansbankWebPos = 'FinansbankWebPOS',
  FirstDataGlobalGatewaye4 = 'FirstDataGlobalGatewaye4',
  FirstGiving = 'FirstGiving',
  Flo2Cash = 'Flo2Cash',
  GarantiSanalPos = 'GarantiSanalPOS',
  GlobalTransport = 'GlobalTransport',
  Hdfc = 'HDFC',
  HeartlandPaymentSystems = 'HeartlandPaymentSystems',
  Ipp = 'IPP',
  InspireCommerce = 'InspireCommerce',
  InstaPay = 'InstaPay',
  Iridium = 'Iridium',
  JetPay = 'JetPay',
  Komoju = 'Komoju',
  LinkPoint = 'LinkPoint',
  LitleCo = 'LitleCo',
  Monei = 'MONEI',
  MasterCardInternetGatewayServiceMiGs = 'MasterCardInternetGatewayServiceMiGS',
  MerchantOneGateway = 'MerchantOneGateway',
  MerchantWare = 'MerchantWARE',
  MerchantWarrior = 'MerchantWarrior',
  MerchanteSolutions = 'MerchanteSolutions',
  Mercury = 'Mercury',
  MetricsGlobal = 'MetricsGlobal',
  ModernPayments = 'ModernPayments',
  Moneris = 'Moneris',
  MoneyMovers = 'MoneyMovers',
  NabTransact = 'NABTransact',
  NeLiXTransaX = 'NELiXTransaX',
  NetpayGateway = 'NETPAYGateway',
  NeTbilling = 'NETbilling',
  Nmi = 'NMI',
  NoProvider = 'NO_PROVIDER',
  NetRegistry = 'NetRegistry',
  Ogone = 'Ogone',
  Omise = 'Omise',
  Openpay = 'Openpay',
  OptimalPayments = 'OptimalPayments',
  OrbitalPaymentech = 'OrbitalPaymentech',
  Paymill = 'PAYMILL',
  PslPaymentSolutions = 'PSLPaymentSolutions',
  Pagarme = 'Pagarme',
  PagoFacil = 'PagoFacil',
  PayConex = 'PayConex',
  PayGatePayXml = 'PayGatePayXML',
  PayHub = 'PayHub',
  PayJunction = 'PayJunction',
  PayPalExpressCheckout = 'PayPalExpressCheckout',
  PayPalExpressCheckoutUk = 'PayPalExpressCheckoutUK',
  PayPalExpressCheckoutforDigitalGoods = 'PayPalExpressCheckoutforDigitalGoods',
  PayPalPayflowPro = 'PayPalPayflowPro',
  PayPalPaymentsProUk = 'PayPalPaymentsProUK',
  PayPalPaymentsProUs = 'PayPalPaymentsProUS',
  PayPalWebsitePaymentsProCa = 'PayPalWebsitePaymentsProCA',
  PaySecure = 'PaySecure',
  PayUIndia = 'PayUIndia',
  PayWay = 'PayWay',
  PayboxDirect = 'PayboxDirect',
  Payeezy = 'Payeezy',
  Payex = 'Payex',
  PaymentExpress = 'PaymentExpress',
  Payscout = 'Payscout',
  Paystation = 'Paystation',
  PinPayments = 'PinPayments',
  PlugnPay = 'PlugnPay',
  Psigate = 'Psigate',
  QuantumGateway = 'QuantumGateway',
  QuickBooksMerchantServices = 'QuickBooksMerchantServices',
  QuickBooksPayments = 'QuickBooksPayments',
  QuickPay = 'QuickPay',
  Qvalent = 'Qvalent',
  Raven = 'Raven',
  Realex = 'Realex',
  Redsys = 'Redsys',
  S5 = 'S5',
  SagePay = 'SagePay',
  SagePaymentSolutions = 'SagePaymentSolutions',
  SallieMae = 'SallieMae',
  SecureNet = 'SecureNet',
  SecurePay = 'SecurePay',
  SecurePayTech = 'SecurePayTech',
  SecurionPay = 'SecurionPay',
  SkipJack = 'SkipJack',
  SoEasyPay = 'SoEasyPay',
  Spreedly = 'Spreedly',
  Stripe = 'Stripe',
  Swipe = 'Swipe',
  Tns = 'TNS',
  TransFirst = 'TransFirst',
  TransactPro = 'TransactPro',
  Transnational = 'Transnational',
  Trexle = 'Trexle',
  TrustCommerce = 'TrustCommerce',
  UsAePay = 'USAePay',
  VancoPaymentSolutions = 'VancoPaymentSolutions',
  Verifi = 'Verifi',
  ViaKlix = 'ViaKLIX',
  WePay = 'WePay',
  WebPay = 'WebPay',
  Wirecard = 'Wirecard',
  WorldpayGlobal = 'WorldpayGlobal',
  WorldpayOnline = 'WorldpayOnline',
  WorldpayUs = 'WorldpayUS',
  EPay = 'ePay',
  EWay = 'eWAY',
  EWayRapid = 'eWAYRapid',
  IAtsPayments = 'iATSPayments',
  ITransact = 'iTransact',
  MaxiPago = 'maxiPago',
  StPayGatewayNet = 'stPayGatewayNet',
}

export interface IoRestorecommercePaymentSetupPayload {
  __typename?: 'IoRestorecommercePaymentSetupPayload';
  confirmInitiationUrl?: Maybe<Scalars['String']>;
  initiatedOn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
}

export interface IoRestorecommercePaymentSetupPayloadStatus {
  __typename?: 'IoRestorecommercePaymentSetupPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentSetupPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommercePaymentSetupResponse {
  __typename?: 'IoRestorecommercePaymentSetupResponse';
  item?: Maybe<IoRestorecommercePaymentSetupPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
}

export interface IoRestorecommercePolicyPolicy {
  __typename?: 'IoRestorecommercePolicyPolicy';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['String'][]>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicyPolicyListResponse {
  __typename?: 'IoRestorecommercePolicyPolicyListResponse';
  items?: Maybe<IoRestorecommercePolicyPolicyResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommercePolicyPolicyRq {
  __typename?: 'IoRestorecommercePolicyPolicyRQ';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  hasRules?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  rules?: Maybe<IoRestorecommerceRuleRuleRq[]>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicyPolicyResponse {
  __typename?: 'IoRestorecommercePolicyPolicyResponse';
  payload?: Maybe<IoRestorecommercePolicyPolicy>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommercePolicySetPolicySet {
  __typename?: 'IoRestorecommercePolicySetPolicySet';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<Scalars['String'][]>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicySetPolicySetListResponse {
  __typename?: 'IoRestorecommercePolicySetPolicySetListResponse';
  items?: Maybe<IoRestorecommercePolicySetPolicySetResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommercePolicySetPolicySetRq {
  __typename?: 'IoRestorecommercePolicySetPolicySetRQ';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  id?: Maybe<Scalars['String']>;
  policies?: Maybe<IoRestorecommercePolicyPolicyRq[]>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicySetPolicySetResponse {
  __typename?: 'IoRestorecommercePolicySetPolicySetResponse';
  payload?: Maybe<IoRestorecommercePolicySetPolicySet>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommercePriceGroupPriceGroup {
  __typename?: 'IoRestorecommercePriceGroupPriceGroup';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommercePriceGroupPriceGroupListResponse {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
  items?: Maybe<IoRestorecommercePriceGroupPriceGroupResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommercePriceGroupPriceGroupResponse {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
  payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommercePricePrice {
  __typename?: 'IoRestorecommercePricePrice';
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  currencyId?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['Float']>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceProductAssociation {
  __typename?: 'IoRestorecommerceProductAssociation';
  data?: Maybe<GoogleProtobufAny>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String'][]>;
  type?: Maybe<IoRestorecommerceProductAssociationType>;
  variantId?: Maybe<Scalars['String']>;
}

export enum IoRestorecommerceProductAssociationType {
  Accessory = 'ACCESSORY',
  Miscellaneous = 'MISCELLANEOUS',
  Recommendation = 'RECOMMENDATION',
}

export interface IoRestorecommerceProductBundle {
  __typename?: 'IoRestorecommerceProductBundle';
  description?: Maybe<Scalars['String']>;
  images?: Maybe<IoRestorecommerceImageImage[]>;
  name?: Maybe<Scalars['String']>;
  prePackaged?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  products?: Maybe<IoRestorecommerceProductBundleProduct[]>;
}

export interface IoRestorecommerceProductBundleProduct {
  __typename?: 'IoRestorecommerceProductBundleProduct';
  priceRatio?: Maybe<Scalars['Float']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductCategoryParent {
  __typename?: 'IoRestorecommerceProductCategoryParent';
  parentId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductCategoryProductCategory {
  __typename?: 'IoRestorecommerceProductCategoryProductCategory';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceProductCategoryParent>;
  priceGroup?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  priceGroupId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductCategoryProductCategoryListResponse {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
  items?: Maybe<IoRestorecommerceProductCategoryProductCategoryResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceProductCategoryProductCategoryResponse {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
  payload?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceProductIndividualProduct {
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
  taricCode?: Maybe<Scalars['String']>;
  taxIds?: Maybe<Scalars['String'][]>;
  virtual?: Maybe<IoRestorecommerceProductVirtualProduct>;
}

export interface IoRestorecommerceProductPackage {
  __typename?: 'IoRestorecommerceProductPackage';
  rotatable?: Maybe<Scalars['Boolean']>;
  sizeInCm?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceProductPhysicalProduct {
  __typename?: 'IoRestorecommerceProductPhysicalProduct';
  variants?: Maybe<IoRestorecommerceProductPhysicalVariant[]>;
}

export interface IoRestorecommerceProductPhysicalVariant {
  __typename?: 'IoRestorecommerceProductPhysicalVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<IoRestorecommerceFileFile[]>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<IoRestorecommerceImageImage[]>;
  name?: Maybe<Scalars['String']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<IoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  taxIds?: Maybe<Scalars['String'][]>;
}

export interface IoRestorecommerceProductProduct {
  __typename?: 'IoRestorecommerceProductProduct';
  active?: Maybe<Scalars['Boolean']>;
  associations?: Maybe<IoRestorecommerceProductAssociation[]>;
  bundle?: Maybe<IoRestorecommerceProductBundle>;
  data?: Maybe<GoogleProtobufAny>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  product?: Maybe<IoRestorecommerceProductIndividualProduct>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String'][]>;
}

export interface IoRestorecommerceProductProductListResponse {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<IoRestorecommerceProductProductResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceProductProductResponse {
  __typename?: 'IoRestorecommerceProductProductResponse';
  payload?: Maybe<IoRestorecommerceProductProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceProductPrototypeProductPrototype {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
  category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductPrototypeProductPrototypeListResponse {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
  items?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceProductPrototypeProductPrototypeResponse {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
  payload?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceProductServiceProduct {
  __typename?: 'IoRestorecommerceProductServiceProduct';
  variants?: Maybe<IoRestorecommerceProductServiceVariant[]>;
}

export interface IoRestorecommerceProductServiceVariant {
  __typename?: 'IoRestorecommerceProductServiceVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<IoRestorecommerceFileFile[]>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<IoRestorecommerceImageImage[]>;
  name?: Maybe<Scalars['String']>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<IoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  taxIds?: Maybe<Scalars['String'][]>;
}

export interface IoRestorecommerceProductVirtualProduct {
  __typename?: 'IoRestorecommerceProductVirtualProduct';
  variants?: Maybe<IoRestorecommerceProductVirtualVariant[]>;
}

export interface IoRestorecommerceProductVirtualVariant {
  __typename?: 'IoRestorecommerceProductVirtualVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<IoRestorecommerceFileFile[]>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<IoRestorecommerceImageImage[]>;
  name?: Maybe<Scalars['String']>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<IoRestorecommercePropertyProperty[]>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  taxIds?: Maybe<Scalars['String'][]>;
}

export interface IoRestorecommercePropertyProperty {
  __typename?: 'IoRestorecommercePropertyProperty';
  id?: Maybe<Scalars['String']>;
  unitCode?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceReferenceReference {
  __typename?: 'IoRestorecommerceReferenceReference';
  instanceId?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceResourcebaseDeleteResponse {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  status?: Maybe<IoRestorecommerceStatusStatus[]>;
}

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 'and',
  Or = 'or',
}

export enum IoRestorecommerceResourcebaseFilterOperation {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  ILike = 'iLike',
  In = 'in',
  IsEmpty = 'isEmpty',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
}

export enum IoRestorecommerceResourcebaseFilterValueType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING',
}

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  Unsorted = 'UNSORTED',
}

export interface IoRestorecommerceRoleRole {
  __typename?: 'IoRestorecommerceRoleRole';
  assignableByRoles?: Maybe<Scalars['String'][]>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceRoleRoleListResponse {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<IoRestorecommerceRoleRoleResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceRoleRoleResponse {
  __typename?: 'IoRestorecommerceRoleRoleResponse';
  payload?: Maybe<IoRestorecommerceRoleRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceRuleContextQuery {
  __typename?: 'IoRestorecommerceRuleContextQuery';
  filters?: Maybe<IoRestorecommerceFilterFilterOp[]>;
  query?: Maybe<Scalars['String']>;
}

export enum IoRestorecommerceRuleEffect {
  Deny = 'DENY',
  Permit = 'PERMIT',
}

export interface IoRestorecommerceRuleRule {
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
}

export interface IoRestorecommerceRuleRuleListResponse {
  __typename?: 'IoRestorecommerceRuleRuleListResponse';
  items?: Maybe<IoRestorecommerceRuleRuleResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceRuleRuleRq {
  __typename?: 'IoRestorecommerceRuleRuleRQ';
  condition?: Maybe<Scalars['String']>;
  contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommerceRuleRuleResponse {
  __typename?: 'IoRestorecommerceRuleRuleResponse';
  payload?: Maybe<IoRestorecommerceRuleRule>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceRuleTarget {
  __typename?: 'IoRestorecommerceRuleTarget';
  actions?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  resources?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  subjects?: Maybe<IoRestorecommerceAttributeAttribute[]>;
}

export interface IoRestorecommerceShopShop {
  __typename?: 'IoRestorecommerceShopShop';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
  settings?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  shopNumber?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceShopShopListResponse {
  __typename?: 'IoRestorecommerceShopShopListResponse';
  items?: Maybe<IoRestorecommerceShopShopResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceShopShopResponse {
  __typename?: 'IoRestorecommerceShopShopResponse';
  payload?: Maybe<IoRestorecommerceShopShop>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceStatusOperationStatus {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceStatusOperationStatusObj {
  __typename?: 'IoRestorecommerceStatusOperationStatusObj';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
}

export interface IoRestorecommerceStatusStatus {
  __typename?: 'IoRestorecommerceStatusStatus';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceStatusStatusListResponse {
  __typename?: 'IoRestorecommerceStatusStatusListResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  status?: Maybe<IoRestorecommerceStatusStatus[]>;
}

export interface IoRestorecommerceTaxTax {
  __typename?: 'IoRestorecommerceTaxTax';
  abbreviation?: Maybe<Scalars['String']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  countryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  typeId?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceTaxTaxListResponse {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<IoRestorecommerceTaxTaxResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTaxTaxResponse {
  __typename?: 'IoRestorecommerceTaxTaxResponse';
  payload?: Maybe<IoRestorecommerceTaxTax>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceTaxTypeTaxType {
  __typename?: 'IoRestorecommerceTaxTypeTaxType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceTaxTypeTaxTypeListResponse {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
  items?: Maybe<IoRestorecommerceTaxTypeTaxTypeResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTaxTypeTaxTypeResponse {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
  payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceTemplateTemplate {
  __typename?: 'IoRestorecommerceTemplateTemplate';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  description?: Maybe<Scalars['String']>;
  files?: Maybe<IoRestorecommerceFileFile[]>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<IoRestorecommerceImageImage[]>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  reference?: Maybe<IoRestorecommerceReferenceReference>;
}

export interface IoRestorecommerceTemplateTemplateListResponse {
  __typename?: 'IoRestorecommerceTemplateTemplateListResponse';
  items?: Maybe<IoRestorecommerceTemplateTemplateResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTemplateTemplateResponse {
  __typename?: 'IoRestorecommerceTemplateTemplateResponse';
  payload?: Maybe<IoRestorecommerceTemplateTemplate>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceTimezoneTimezone {
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
}

export interface IoRestorecommerceTimezoneTimezoneListResponse {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<IoRestorecommerceTimezoneTimezoneResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTimezoneTimezoneOffset {
  __typename?: 'IoRestorecommerceTimezoneTimezoneOffset';
  hours?: Maybe<Scalars['Int']>;
  minutes?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTimezoneTimezoneResponse {
  __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
  payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export enum IoRestorecommerceUnitCodeSector {
  Acoustics = 'ACOUSTICS',
  AtomicAndNuclearPhysics = 'ATOMIC_AND_NUCLEAR_PHYSICS',
  CharacteristicNumbers = 'CHARACTERISTIC_NUMBERS',
  ElectricityAndMagnetism = 'ELECTRICITY_AND_MAGNETISM',
  Heat = 'HEAT',
  LightAndRelatedElectromagneticRadiations = 'LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS',
  Mechanics = 'MECHANICS',
  Miscellaneous = 'MISCELLANEOUS',
  NuclearReactionsAndIonizingRadiations = 'NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS',
  PeriodicAndRelatedPhases = 'PERIODIC_AND_RELATED_PHASES',
  PhysicalChemistryAndMolecularPhysics = 'PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS',
  SolidStatePhysics = 'SOLID_STATE_PHYSICS',
  SpaceAndTime = 'SPACE_AND_TIME',
  Unknown = 'UNKNOWN',
}

export enum IoRestorecommerceUnitCodeStatusCode {
  Added = 'ADDED',
  ChangedCharacteristic = 'CHANGED_CHARACTERISTIC',
  ChangedName = 'CHANGED_NAME',
  Deprecated = 'DEPRECATED',
  MarkedAsDeleted = 'MARKED_AS_DELETED',
  Reinstated = 'REINSTATED',
}

export interface IoRestorecommerceUnitCodeUnitCode {
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
}

export interface IoRestorecommerceUnitCodeUnitCodeListResponse {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeListResponse';
  items?: Maybe<IoRestorecommerceUnitCodeUnitCodeResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceUnitCodeUnitCodeResponse {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeResponse';
  payload?: Maybe<IoRestorecommerceUnitCodeUnitCode>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceUserDeleteUsersByOrgResponse {
  __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  userIds?: Maybe<Scalars['String'][]>;
}

export interface IoRestorecommerceUserTenantResponse {
  __typename?: 'IoRestorecommerceUserTenantResponse';
  token?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceUserUser {
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
  properties?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  roleAssociations?: Maybe<IoRestorecommerceAuthRoleAssociation[]>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<IoRestorecommerceAuthTokens[]>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
}

export interface IoRestorecommerceUserUserListResponse {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<IoRestorecommerceUserUserResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceUserUserListWithRoleResponse {
  __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
  items?: Maybe<IoRestorecommerceUserUserRoleResponse[]>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceUserUserResponse {
  __typename?: 'IoRestorecommerceUserUserResponse';
  payload?: Maybe<IoRestorecommerceUserUser>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceUserUserRole {
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
  properties?: Maybe<IoRestorecommerceAttributeAttribute[]>;
  roleAssociations?: Maybe<IoRestorecommerceAuthRoleAssociation[]>;
  roles?: Maybe<IoRestorecommerceRoleRole[]>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<IoRestorecommerceAuthTokens[]>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
}

export interface IoRestorecommerceUserUserRoleResponse {
  __typename?: 'IoRestorecommerceUserUserRoleResponse';
  payload?: Maybe<IoRestorecommerceUserUserRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export enum IoRestorecommerceUserUserType {
  Guest = 'GUEST',
  IndividualUser = 'INDIVIDUAL_USER',
  OrgUser = 'ORG_USER',
  TechnicalUser = 'TECHNICAL_USER',
}

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT',
}

export interface Mutation {
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
}

export interface NotificationMutation {
  __typename?: 'NotificationMutation';
  notification: NotificationNotificationMutation;
}

export interface NotificationNotificationMutation {
  __typename?: 'NotificationNotificationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
}

export interface NotificationNotificationMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface NotificationNotificationMutationMutateArgs {
  input: IIoRestorecommerceNotificationNotificationList;
}

export interface NotificationNotificationQuery {
  __typename?: 'NotificationNotificationQuery';
  Read?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
}

export interface NotificationNotificationQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface NotificationQuery {
  __typename?: 'NotificationQuery';
  notification: NotificationNotificationQuery;
}

export interface OrderingMutation {
  __typename?: 'OrderingMutation';
  order: OrderingOrderMutation;
}

export interface OrderingOrderMutation {
  __typename?: 'OrderingOrderMutation';
  Cancel?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  QueryPackingSolution?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceOrderOrderSubmitListResponse>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
}

export interface OrderingOrderMutationCancelArgs {
  input: IIoRestorecommerceOrderOrderIdList;
}

export interface OrderingOrderMutationCreateFulfillmentArgs {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
}

export interface OrderingOrderMutationCreateInvoiceArgs {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
}

export interface OrderingOrderMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface OrderingOrderMutationEvaluateArgs {
  input: IIoRestorecommerceOrderOrderList;
}

export interface OrderingOrderMutationMutateArgs {
  input: IIoRestorecommerceOrderOrderList;
}

export interface OrderingOrderMutationQueryPackingSolutionArgs {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
}

export interface OrderingOrderMutationSubmitArgs {
  input: IIoRestorecommerceOrderOrderList;
}

export interface OrderingOrderMutationTriggerFulfillmentArgs {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
}

export interface OrderingOrderMutationTriggerInvoiceArgs {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
}

export interface OrderingOrderMutationWithdrawArgs {
  input: IIoRestorecommerceOrderOrderIdList;
}

export interface OrderingOrderQuery {
  __typename?: 'OrderingOrderQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
}

export interface OrderingOrderQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface OrderingQuery {
  __typename?: 'OrderingQuery';
  order: OrderingOrderQuery;
}

export interface OstorageMutation {
  __typename?: 'OstorageMutation';
  object: OstorageObjectMutation;
}

export interface OstorageObjectMutation {
  __typename?: 'OstorageObjectMutation';
  Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Move?: Maybe<ProtoIoRestorecommerceOstorageMoveResponseList>;
  Put?: Maybe<ProtoIoRestorecommerceOstoragePutResponse>;
}

export interface OstorageObjectMutationCopyArgs {
  input: IIoRestorecommerceOstorageCopyRequestList;
}

export interface OstorageObjectMutationDeleteArgs {
  input: IIoRestorecommerceOstorageDeleteRequest;
}

export interface OstorageObjectMutationMoveArgs {
  input: IIoRestorecommerceOstorageMoveRequestList;
}

export interface OstorageObjectMutationPutArgs {
  input: IIoRestorecommerceOstorageObject;
}

export interface OstorageObjectQuery {
  __typename?: 'OstorageObjectQuery';
  Get?: Maybe<ProtoIoRestorecommerceOstorageObjectResponse>;
  List?: Maybe<ProtoIoRestorecommerceOstorageListResponse>;
}

export interface OstorageObjectQueryGetArgs {
  input: IIoRestorecommerceOstorageGetRequest;
}

export interface OstorageObjectQueryListArgs {
  input: IIoRestorecommerceOstorageListRequest;
}

export interface OstorageQuery {
  __typename?: 'OstorageQuery';
  object: OstorageObjectQuery;
}

export interface PaymentMutation {
  __typename?: 'PaymentMutation';
  payment: PaymentPaymentMutation;
}

export interface PaymentPaymentMutation {
  __typename?: 'PaymentPaymentMutation';
  Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
}

export interface PaymentPaymentMutationAuthorizeArgs {
  input: IIoRestorecommercePaymentPaymentRequest;
}

export interface PaymentPaymentMutationCaptureArgs {
  input: IIoRestorecommercePaymentCaptureRequest;
}

export interface PaymentPaymentMutationPurchaseArgs {
  input: IIoRestorecommercePaymentPaymentRequest;
}

export interface PaymentPaymentMutationSetupAuthorizationArgs {
  input: IIoRestorecommercePaymentSetupRequest;
}

export interface PaymentPaymentMutationSetupPurchaseArgs {
  input: IIoRestorecommercePaymentSetupRequest;
}

export interface ProtoGoogleProtobufAny {
  __typename?: 'ProtoGoogleProtobufAny';
  details?: Maybe<GoogleProtobufAny>;
}

export interface ProtoIoRestorecommerceAccessControlResponse {
  __typename?: 'ProtoIoRestorecommerceAccessControlResponse';
  details?: Maybe<IoRestorecommerceAccessControlResponse>;
}

export interface ProtoIoRestorecommerceAccessControlReverseQuery {
  __typename?: 'ProtoIoRestorecommerceAccessControlReverseQuery';
  details?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
}

export interface ProtoIoRestorecommerceAddressAddressListResponse {
  __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
  details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
}

export interface ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse {
  __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
}

export interface ProtoIoRestorecommerceCommandCommandListResponse {
  __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
  details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
}

export interface ProtoIoRestorecommerceContactPointContactPointListResponse {
  __typename?: 'ProtoIoRestorecommerceContactPointContactPointListResponse';
  details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
}

export interface ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
  details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
}

export interface ProtoIoRestorecommerceCountryCountryListResponse {
  __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
  details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
}

export interface ProtoIoRestorecommerceCredentialCredentialListResponse {
  __typename?: 'ProtoIoRestorecommerceCredentialCredentialListResponse';
  details?: Maybe<IoRestorecommerceCredentialCredentialListResponse>;
}

export interface ProtoIoRestorecommerceCustomerCustomerListResponse {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
  details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
}

export interface ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
}

export interface ProtoIoRestorecommerceFulfillmentFulfillmentListResponse {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentListResponse>;
}

export interface ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
}

export interface ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
}

export interface ProtoIoRestorecommerceInvoiceInvoiceListResponse {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceListResponse>;
}

export interface ProtoIoRestorecommerceInvoiceInvoiceNumberResponse {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceNumberResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceNumberResponse>;
}

export interface ProtoIoRestorecommerceJobJobListResponse {
  __typename?: 'ProtoIoRestorecommerceJobJobListResponse';
  details?: Maybe<IoRestorecommerceJobJobListResponse>;
}

export interface ProtoIoRestorecommerceLocaleLocaleListResponse {
  __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
  details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
}

export interface ProtoIoRestorecommerceLocationLocationListResponse {
  __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
  details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
}

export interface ProtoIoRestorecommerceManufacturerManufacturerListResponse {
  __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
  details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
}

export interface ProtoIoRestorecommerceNotificationNotificationListResponse {
  __typename?: 'ProtoIoRestorecommerceNotificationNotificationListResponse';
  details?: Maybe<IoRestorecommerceNotificationNotificationListResponse>;
}

export interface ProtoIoRestorecommerceOauthExchangeCodeResponse {
  __typename?: 'ProtoIoRestorecommerceOauthExchangeCodeResponse';
  details?: Maybe<IoRestorecommerceOauthExchangeCodeResponse>;
}

export interface ProtoIoRestorecommerceOauthGenerateLinksResponse {
  __typename?: 'ProtoIoRestorecommerceOauthGenerateLinksResponse';
  details?: Maybe<IoRestorecommerceOauthGenerateLinksResponse>;
}

export interface ProtoIoRestorecommerceOauthGetTokenResponse {
  __typename?: 'ProtoIoRestorecommerceOauthGetTokenResponse';
  details?: Maybe<IoRestorecommerceOauthGetTokenResponse>;
}

export interface ProtoIoRestorecommerceOauthServicesResponse {
  __typename?: 'ProtoIoRestorecommerceOauthServicesResponse';
  details?: Maybe<IoRestorecommerceOauthServicesResponse>;
}

export interface ProtoIoRestorecommerceOrderOrderListResponse {
  __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
}

export interface ProtoIoRestorecommerceOrderOrderSubmitListResponse {
  __typename?: 'ProtoIoRestorecommerceOrderOrderSubmitListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderSubmitListResponse>;
}

export interface ProtoIoRestorecommerceOrganizationOrganizationListResponse {
  __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
  details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
}

export interface ProtoIoRestorecommerceOstorageCopyResponseList {
  __typename?: 'ProtoIoRestorecommerceOstorageCopyResponseList';
  details?: Maybe<IoRestorecommerceOstorageCopyResponseList>;
}

export interface ProtoIoRestorecommerceOstorageListResponse {
  __typename?: 'ProtoIoRestorecommerceOstorageListResponse';
  details?: Maybe<IoRestorecommerceOstorageListResponse>;
}

export interface ProtoIoRestorecommerceOstorageMoveResponseList {
  __typename?: 'ProtoIoRestorecommerceOstorageMoveResponseList';
  details?: Maybe<IoRestorecommerceOstorageMoveResponseList>;
}

export interface ProtoIoRestorecommerceOstorageObjectResponse {
  __typename?: 'ProtoIoRestorecommerceOstorageObjectResponse';
  details?: Maybe<IoRestorecommerceOstorageObjectResponse>;
}

export interface ProtoIoRestorecommerceOstoragePutResponse {
  __typename?: 'ProtoIoRestorecommerceOstoragePutResponse';
  details?: Maybe<IoRestorecommerceOstoragePutResponse>;
}

export interface ProtoIoRestorecommercePaymentPaymentResponse {
  __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
  details?: Maybe<IoRestorecommercePaymentPaymentResponse>;
}

export interface ProtoIoRestorecommercePaymentSetupResponse {
  __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
  details?: Maybe<IoRestorecommercePaymentSetupResponse>;
}

export interface ProtoIoRestorecommercePolicyPolicyListResponse {
  __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
  details?: Maybe<IoRestorecommercePolicyPolicyListResponse>;
}

export interface ProtoIoRestorecommercePolicySetPolicySetListResponse {
  __typename?: 'ProtoIoRestorecommercePolicySetPolicySetListResponse';
  details?: Maybe<IoRestorecommercePolicySetPolicySetListResponse>;
}

export interface ProtoIoRestorecommercePriceGroupPriceGroupListResponse {
  __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
  details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
}

export interface ProtoIoRestorecommerceProductCategoryProductCategoryListResponse {
  __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
  details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
}

export interface ProtoIoRestorecommerceProductProductListResponse {
  __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
  details?: Maybe<IoRestorecommerceProductProductListResponse>;
}

export interface ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse {
  __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
  details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
}

export interface ProtoIoRestorecommerceResourcebaseDeleteResponse {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
}

export interface ProtoIoRestorecommerceRoleRoleListResponse {
  __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
  details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
}

export interface ProtoIoRestorecommerceRuleRuleListResponse {
  __typename?: 'ProtoIoRestorecommerceRuleRuleListResponse';
  details?: Maybe<IoRestorecommerceRuleRuleListResponse>;
}

export interface ProtoIoRestorecommerceShopShopListResponse {
  __typename?: 'ProtoIoRestorecommerceShopShopListResponse';
  details?: Maybe<IoRestorecommerceShopShopListResponse>;
}

export interface ProtoIoRestorecommerceStatusOperationStatusObj {
  __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
  details?: Maybe<IoRestorecommerceStatusOperationStatusObj>;
}

export interface ProtoIoRestorecommerceStatusStatusListResponse {
  __typename?: 'ProtoIoRestorecommerceStatusStatusListResponse';
  details?: Maybe<IoRestorecommerceStatusStatusListResponse>;
}

export interface ProtoIoRestorecommerceTaxTaxListResponse {
  __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
  details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
}

export interface ProtoIoRestorecommerceTaxTypeTaxTypeListResponse {
  __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeListResponse';
  details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
}

export interface ProtoIoRestorecommerceTemplateTemplateListResponse {
  __typename?: 'ProtoIoRestorecommerceTemplateTemplateListResponse';
  details?: Maybe<IoRestorecommerceTemplateTemplateListResponse>;
}

export interface ProtoIoRestorecommerceTimezoneTimezoneListResponse {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
}

export interface ProtoIoRestorecommerceUnitCodeUnitCodeListResponse {
  __typename?: 'ProtoIoRestorecommerceUnitCodeUnitCodeListResponse';
  details?: Maybe<IoRestorecommerceUnitCodeUnitCodeListResponse>;
}

export interface ProtoIoRestorecommerceUserDeleteUsersByOrgResponse {
  __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
  details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
}

export interface ProtoIoRestorecommerceUserTenantResponse {
  __typename?: 'ProtoIoRestorecommerceUserTenantResponse';
  details?: Maybe<IoRestorecommerceUserTenantResponse>;
}

export interface ProtoIoRestorecommerceUserUserListResponse {
  __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
  details?: Maybe<IoRestorecommerceUserUserListResponse>;
}

export interface ProtoIoRestorecommerceUserUserListWithRoleResponse {
  __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
  details?: Maybe<IoRestorecommerceUserUserListWithRoleResponse>;
}

export interface ProtoIoRestorecommerceUserUserResponse {
  __typename?: 'ProtoIoRestorecommerceUserUserResponse';
  details?: Maybe<IoRestorecommerceUserUserResponse>;
}

/** The root of all queries */
export interface Query {
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
}

export interface ResourceAddressMutation {
  __typename?: 'ResourceAddressMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
}

export interface ResourceAddressMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceAddressMutationMutateArgs {
  input: IIoRestorecommerceAddressAddressList;
}

export interface ResourceAddressQuery {
  __typename?: 'ResourceAddressQuery';
  Read?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
}

export interface ResourceAddressQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceCommandMutation {
  __typename?: 'ResourceCommandMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
}

export interface ResourceCommandMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceCommandMutationMutateArgs {
  input: IIoRestorecommerceCommandCommandList;
}

export interface ResourceCommandQuery {
  __typename?: 'ResourceCommandQuery';
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
}

export interface ResourceCommandQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceContactPointMutation {
  __typename?: 'ResourceContactPointMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
}

export interface ResourceContactPointMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceContactPointMutationMutateArgs {
  input: IIoRestorecommerceContactPointContactPointList;
}

export interface ResourceContactPointQuery {
  __typename?: 'ResourceContactPointQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
}

export interface ResourceContactPointQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceContactPointTypeMutation {
  __typename?: 'ResourceContactPointTypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
}

export interface ResourceContactPointTypeMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceContactPointTypeMutationMutateArgs {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
}

export interface ResourceContactPointTypeQuery {
  __typename?: 'ResourceContactPointTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
}

export interface ResourceContactPointTypeQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceCountryMutation {
  __typename?: 'ResourceCountryMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
}

export interface ResourceCountryMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceCountryMutationMutateArgs {
  input: IIoRestorecommerceCountryCountryList;
}

export interface ResourceCountryQuery {
  __typename?: 'ResourceCountryQuery';
  Read?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
}

export interface ResourceCountryQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceCredentialMutation {
  __typename?: 'ResourceCredentialMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCredentialCredentialListResponse>;
}

export interface ResourceCredentialMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceCredentialMutationMutateArgs {
  input: IIoRestorecommerceCredentialCredentialList;
}

export interface ResourceCredentialQuery {
  __typename?: 'ResourceCredentialQuery';
  Read?: Maybe<ProtoIoRestorecommerceCredentialCredentialListResponse>;
}

export interface ResourceCredentialQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceCustomerMutation {
  __typename?: 'ResourceCustomerMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
}

export interface ResourceCustomerMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceCustomerMutationMutateArgs {
  input: IIoRestorecommerceCustomerCustomerList;
}

export interface ResourceCustomerQuery {
  __typename?: 'ResourceCustomerQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
}

export interface ResourceCustomerQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceLocaleMutation {
  __typename?: 'ResourceLocaleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
}

export interface ResourceLocaleMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceLocaleMutationMutateArgs {
  input: IIoRestorecommerceLocaleLocaleList;
}

export interface ResourceLocaleQuery {
  __typename?: 'ResourceLocaleQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
}

export interface ResourceLocaleQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceLocationMutation {
  __typename?: 'ResourceLocationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
}

export interface ResourceLocationMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceLocationMutationMutateArgs {
  input: IIoRestorecommerceLocationLocationList;
}

export interface ResourceLocationQuery {
  __typename?: 'ResourceLocationQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
}

export interface ResourceLocationQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceMutation {
  __typename?: 'ResourceMutation';
  address: ResourceAddressMutation;
  command: ResourceCommandMutation;
  contact_point: ResourceContactPointMutation;
  contact_point_type: ResourceContactPointTypeMutation;
  country: ResourceCountryMutation;
  credential: ResourceCredentialMutation;
  customer: ResourceCustomerMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  shop: ResourceShopMutation;
  tax: ResourceTaxMutation;
  tax_type: ResourceTaxTypeMutation;
  template: ResourceTemplateMutation;
  timezone: ResourceTimezoneMutation;
  unit_code: ResourceUnitCodeMutation;
}

export interface ResourceOrganizationMutation {
  __typename?: 'ResourceOrganizationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
}

export interface ResourceOrganizationMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceOrganizationMutationMutateArgs {
  input: IIoRestorecommerceOrganizationOrganizationList;
}

export interface ResourceOrganizationQuery {
  __typename?: 'ResourceOrganizationQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
}

export interface ResourceOrganizationQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceQuery {
  __typename?: 'ResourceQuery';
  address: ResourceAddressQuery;
  command: ResourceCommandQuery;
  contact_point: ResourceContactPointQuery;
  contact_point_type: ResourceContactPointTypeQuery;
  country: ResourceCountryQuery;
  credential: ResourceCredentialQuery;
  customer: ResourceCustomerQuery;
  locale: ResourceLocaleQuery;
  location: ResourceLocationQuery;
  organization: ResourceOrganizationQuery;
  shop: ResourceShopQuery;
  tax: ResourceTaxQuery;
  tax_type: ResourceTaxTypeQuery;
  template: ResourceTemplateQuery;
  timezone: ResourceTimezoneQuery;
  unit_code: ResourceUnitCodeQuery;
}

export interface ResourceShopMutation {
  __typename?: 'ResourceShopMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceShopShopListResponse>;
}

export interface ResourceShopMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceShopMutationMutateArgs {
  input: IIoRestorecommerceShopShopList;
}

export interface ResourceShopQuery {
  __typename?: 'ResourceShopQuery';
  Read?: Maybe<ProtoIoRestorecommerceShopShopListResponse>;
}

export interface ResourceShopQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceTaxMutation {
  __typename?: 'ResourceTaxMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
}

export interface ResourceTaxMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceTaxMutationMutateArgs {
  input: IIoRestorecommerceTaxTaxList;
}

export interface ResourceTaxQuery {
  __typename?: 'ResourceTaxQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
}

export interface ResourceTaxQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceTaxTypeMutation {
  __typename?: 'ResourceTaxTypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
}

export interface ResourceTaxTypeMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceTaxTypeMutationMutateArgs {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
}

export interface ResourceTaxTypeQuery {
  __typename?: 'ResourceTaxTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
}

export interface ResourceTaxTypeQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceTemplateMutation {
  __typename?: 'ResourceTemplateMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTemplateTemplateListResponse>;
}

export interface ResourceTemplateMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceTemplateMutationMutateArgs {
  input: IIoRestorecommerceTemplateTemplateList;
}

export interface ResourceTemplateQuery {
  __typename?: 'ResourceTemplateQuery';
  Read?: Maybe<ProtoIoRestorecommerceTemplateTemplateListResponse>;
}

export interface ResourceTemplateQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceTimezoneMutation {
  __typename?: 'ResourceTimezoneMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
}

export interface ResourceTimezoneMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceTimezoneMutationMutateArgs {
  input: IIoRestorecommerceTimezoneTimezoneList;
}

export interface ResourceTimezoneQuery {
  __typename?: 'ResourceTimezoneQuery';
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
}

export interface ResourceTimezoneQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface ResourceUnitCodeMutation {
  __typename?: 'ResourceUnitCodeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
}

export interface ResourceUnitCodeMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceUnitCodeMutationMutateArgs {
  input: IIoRestorecommerceUnitCodeUnitCodeList;
}

export interface ResourceUnitCodeQuery {
  __typename?: 'ResourceUnitCodeQuery';
  Read?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
}

export interface ResourceUnitCodeQueryReadArgs {
  input: IIoRestorecommerceResourcebaseReadRequest;
}

export interface SchedulingJobMutation {
  __typename?: 'SchedulingJobMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
}

export interface SchedulingJobMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface SchedulingJobMutationMutateArgs {
  input: IIoRestorecommerceJobJobList;
}

export interface SchedulingJobQuery {
  __typename?: 'SchedulingJobQuery';
  Read?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
}

export interface SchedulingJobQueryReadArgs {
  input: IIoRestorecommerceJobJobReadRequest;
}

export interface SchedulingMutation {
  __typename?: 'SchedulingMutation';
  job: SchedulingJobMutation;
}

export interface SchedulingQuery {
  __typename?: 'SchedulingQuery';
  job: SchedulingJobQuery;
}

export interface Subscription {
  __typename?: 'Subscription';
  catalogProducts?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  identityUsers?: Maybe<SubscriptionOutput>;
  invoicingInvoices?: Maybe<SubscriptionOutput>;
  orderingOrders?: Maybe<SubscriptionOutput>;
}

export interface SubscriptionCatalogProductsArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionFulfillmentFulfillmentCouriersArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionFulfillmentFulfillment_ProductsArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionFulfillmentFulfillmentsArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionIdentityUsersArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionInvoicingInvoicesArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export interface SubscriptionOrderingOrdersArgs {
  action?: InputMaybe<SubscriptionAction>;
}

export enum SubscriptionAction {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export interface SubscriptionOutput {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']>;
}

export type CatalogProductDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface CatalogProductDeleteMutation {
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
}

export type CatalogProductMutateMutationVariables = Exact<{
  input: IIoRestorecommerceProductProductList;
}>;

export interface CatalogProductMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceProductProductResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceProductProduct';
                  id?: string | null;
                  tags?: string[] | null;
                  shop?: {
                    __typename?: 'IoRestorecommerceShopShop';
                    id?: string | null;
                    shopNumber?: string | null;
                    name?: string | null;
                    description?: string | null;
                    domain?: string | null;
                    organization?: {
                      __typename?: 'IoRestorecommerceOrganizationOrganization';
                      id?: string | null;
                      parentId?: string | null;
                      name?: string | null;
                      email?: string | null;
                      website?: string | null;
                      vatId?: string | null;
                      parent?: {
                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                        id?: string | null;
                        name?: string | null;
                        email?: string | null;
                        website?: string | null;
                        vatId?: string | null;
                      } | null;
                      logo?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        height?: number | null;
                        width?: number | null;
                        url?: string | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                      paymentMethods?:
                        | {
                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                            id?: string | null;
                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                          }[]
                        | null;
                      meta?: {
                        __typename?: 'IoRestorecommerceMetaMeta';
                        created?: unknown | null;
                        modified?: unknown | null;
                        createdBy?: string | null;
                        modifiedBy?: string | null;
                      } | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
                    } | null;
                  } | null;
                  product?: {
                    __typename?: 'IoRestorecommerceProductIndividualProduct';
                    name?: string | null;
                    description?: string | null;
                    taxIds?: string[] | null;
                    taricCode?: string | null;
                    category?: {
                      __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                      id?: string | null;
                      name?: string | null;
                      description?: string | null;
                    } | null;
                    physical?: {
                      __typename?: 'IoRestorecommerceProductPhysicalProduct';
                      variants?:
                        | {
                            __typename?: 'IoRestorecommerceProductPhysicalVariant';
                            id?: string | null;
                            name?: string | null;
                            stockLevel?: number | null;
                            parentVariantId?: string | null;
                            images?:
                              | {
                                  __typename?: 'IoRestorecommerceImageImage';
                                  id?: string | null;
                                  index?: number | null;
                                  filename?: string | null;
                                  caption?: string | null;
                                  contentType?: string | null;
                                  height?: number | null;
                                  width?: number | null;
                                  url?: string | null;
                                }[]
                              | null;
                            price?: {
                              __typename?: 'IoRestorecommercePricePrice';
                              currencyId?: string | null;
                              regularPrice?: number | null;
                              sale?: boolean | null;
                              salePrice?: number | null;
                            } | null;
                          }[]
                        | null;
                    } | null;
                  } | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type CatalogProductReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface CatalogProductReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceProductProductResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceProductProduct';
                  id?: string | null;
                  tags?: string[] | null;
                  shop?: {
                    __typename?: 'IoRestorecommerceShopShop';
                    id?: string | null;
                    shopNumber?: string | null;
                    name?: string | null;
                    description?: string | null;
                    domain?: string | null;
                    organization?: {
                      __typename?: 'IoRestorecommerceOrganizationOrganization';
                      id?: string | null;
                      parentId?: string | null;
                      name?: string | null;
                      email?: string | null;
                      website?: string | null;
                      vatId?: string | null;
                      parent?: {
                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                        id?: string | null;
                        name?: string | null;
                        email?: string | null;
                        website?: string | null;
                        vatId?: string | null;
                      } | null;
                      logo?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        height?: number | null;
                        width?: number | null;
                        url?: string | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                      paymentMethods?:
                        | {
                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                            id?: string | null;
                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                          }[]
                        | null;
                      meta?: {
                        __typename?: 'IoRestorecommerceMetaMeta';
                        created?: unknown | null;
                        modified?: unknown | null;
                        createdBy?: string | null;
                        modifiedBy?: string | null;
                      } | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
                    } | null;
                  } | null;
                  product?: {
                    __typename?: 'IoRestorecommerceProductIndividualProduct';
                    name?: string | null;
                    description?: string | null;
                    taxIds?: string[] | null;
                    taricCode?: string | null;
                    category?: {
                      __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                      id?: string | null;
                      name?: string | null;
                      description?: string | null;
                    } | null;
                    physical?: {
                      __typename?: 'IoRestorecommerceProductPhysicalProduct';
                      variants?:
                        | {
                            __typename?: 'IoRestorecommerceProductPhysicalVariant';
                            id?: string | null;
                            name?: string | null;
                            stockLevel?: number | null;
                            parentVariantId?: string | null;
                            images?:
                              | {
                                  __typename?: 'IoRestorecommerceImageImage';
                                  id?: string | null;
                                  index?: number | null;
                                  filename?: string | null;
                                  caption?: string | null;
                                  contentType?: string | null;
                                  height?: number | null;
                                  width?: number | null;
                                  url?: string | null;
                                }[]
                              | null;
                            price?: {
                              __typename?: 'IoRestorecommercePricePrice';
                              currencyId?: string | null;
                              regularPrice?: number | null;
                              sale?: boolean | null;
                              salePrice?: number | null;
                            } | null;
                          }[]
                        | null;
                    } | null;
                  } | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export interface AddressFragmentFragment {
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
  } | null;
}

export interface ContactPointFragmentFragment {
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
  } | null;
}

export interface CountryFragmentFragment {
  __typename?: 'IoRestorecommerceCountryCountry';
  id?: string | null;
  name?: string | null;
  countryCode?: string | null;
  geographicalName?: string | null;
  economicAreas?: string[] | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface CustomerFragmentFragment {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id?: string | null;
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
      parent?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        website?: string | null;
        vatId?: string | null;
      } | null;
      logo?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        height?: number | null;
        width?: number | null;
        url?: string | null;
      } | null;
      contactPoints?:
        | {
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
            } | null;
          }[]
        | null;
      paymentMethods?:
        | {
            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
            id?: string | null;
            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
          }[]
        | null;
      meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
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
      parent?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        website?: string | null;
        vatId?: string | null;
      } | null;
      logo?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        height?: number | null;
        width?: number | null;
        url?: string | null;
      } | null;
      contactPoints?:
        | {
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
            } | null;
          }[]
        | null;
      paymentMethods?:
        | {
            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
            id?: string | null;
            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
          }[]
        | null;
      meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
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
      defaultScope?: string | null;
      localeId?: string | null;
      timezoneId?: string | null;
      roleAssociations?:
        | {
            __typename?: 'IoRestorecommerceAuthRoleAssociation';
            id?: string | null;
            role?: string | null;
          }[]
        | null;
      meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
      } | null;
    } | null;
    contactPoints?:
      | {
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
          } | null;
        }[]
      | null;
  } | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface FulfillmentFragmentFragment {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  id?: string | null;
  customerId?: string | null;
  shopId?: string | null;
  userId?: string | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface InvoiceFragmentFragment {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  id?: string | null;
  customerId?: string | null;
  shopId?: string | null;
  userId?: string | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface LocaleFragmentFragment {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: string | null;
  description?: string | null;
  value?: string | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface LocationFragmentFragment {
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
  } | null;
}

export interface MetaFragmentFragment {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: unknown | null;
  modified?: unknown | null;
  createdBy?: string | null;
  modifiedBy?: string | null;
}

export interface OrderFragmentFragment {
  __typename?: 'IoRestorecommerceOrderOrder';
  id?: string | null;
  customerOrderNr?: string | null;
  notificationEmail?: string | null;
  orderState?: IoRestorecommerceOrderOrderState | null;
  items?:
    | {
        __typename?: 'IoRestorecommerceOrderItem';
        id?: string | null;
        quantity?: number | null;
        product?: {
          __typename?: 'IoRestorecommerceProductProduct';
          id?: string | null;
          tags?: string[] | null;
          shop?: {
            __typename?: 'IoRestorecommerceShopShop';
            id?: string | null;
            shopNumber?: string | null;
            name?: string | null;
            description?: string | null;
            domain?: string | null;
            organization?: {
              __typename?: 'IoRestorecommerceOrganizationOrganization';
              id?: string | null;
              parentId?: string | null;
              name?: string | null;
              email?: string | null;
              website?: string | null;
              vatId?: string | null;
              parent?: {
                __typename?: 'IoRestorecommerceOrganizationOrganization';
                id?: string | null;
                name?: string | null;
                email?: string | null;
                website?: string | null;
                vatId?: string | null;
              } | null;
              logo?: {
                __typename?: 'IoRestorecommerceImageImage';
                id?: string | null;
                index?: number | null;
                filename?: string | null;
                height?: number | null;
                width?: number | null;
                url?: string | null;
              } | null;
              contactPoints?:
                | {
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
                    } | null;
                  }[]
                | null;
              paymentMethods?:
                | {
                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                    id?: string | null;
                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                  }[]
                | null;
              meta?: {
                __typename?: 'IoRestorecommerceMetaMeta';
                created?: unknown | null;
                modified?: unknown | null;
                createdBy?: string | null;
                modifiedBy?: string | null;
              } | null;
            } | null;
            meta?: {
              __typename?: 'IoRestorecommerceMetaMeta';
              created?: unknown | null;
              modified?: unknown | null;
              createdBy?: string | null;
              modifiedBy?: string | null;
            } | null;
          } | null;
          product?: {
            __typename?: 'IoRestorecommerceProductIndividualProduct';
            name?: string | null;
            description?: string | null;
            taxIds?: string[] | null;
            taricCode?: string | null;
            category?: {
              __typename?: 'IoRestorecommerceProductCategoryProductCategory';
              id?: string | null;
              name?: string | null;
              description?: string | null;
            } | null;
            physical?: {
              __typename?: 'IoRestorecommerceProductPhysicalProduct';
              variants?:
                | {
                    __typename?: 'IoRestorecommerceProductPhysicalVariant';
                    id?: string | null;
                    name?: string | null;
                    stockLevel?: number | null;
                    parentVariantId?: string | null;
                    images?:
                      | {
                          __typename?: 'IoRestorecommerceImageImage';
                          id?: string | null;
                          index?: number | null;
                          filename?: string | null;
                          caption?: string | null;
                          contentType?: string | null;
                          height?: number | null;
                          width?: number | null;
                          url?: string | null;
                        }[]
                      | null;
                    price?: {
                      __typename?: 'IoRestorecommercePricePrice';
                      currencyId?: string | null;
                      regularPrice?: number | null;
                      sale?: boolean | null;
                      salePrice?: number | null;
                    } | null;
                  }[]
                | null;
            } | null;
          } | null;
          meta?: {
            __typename?: 'IoRestorecommerceMetaMeta';
            created?: unknown | null;
            modified?: unknown | null;
            createdBy?: string | null;
            modifiedBy?: string | null;
          } | null;
        } | null;
        unitPrice?: {
          __typename?: 'IoRestorecommercePricePrice';
          regularPrice?: number | null;
          sale?: boolean | null;
          salePrice?: number | null;
          currency?: {
            __typename?: 'IoRestorecommerceCurrencyCurrency';
            name?: string | null;
            symbol?: string | null;
          } | null;
        } | null;
      }[]
    | null;
  shop?: {
    __typename?: 'IoRestorecommerceShopShop';
    id?: string | null;
    shopNumber?: string | null;
    name?: string | null;
    description?: string | null;
    domain?: string | null;
    organization?: {
      __typename?: 'IoRestorecommerceOrganizationOrganization';
      id?: string | null;
      parentId?: string | null;
      name?: string | null;
      email?: string | null;
      website?: string | null;
      vatId?: string | null;
      parent?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        website?: string | null;
        vatId?: string | null;
      } | null;
      logo?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        height?: number | null;
        width?: number | null;
        url?: string | null;
      } | null;
      contactPoints?:
        | {
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
            } | null;
          }[]
        | null;
      paymentMethods?:
        | {
            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
            id?: string | null;
            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
          }[]
        | null;
      meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
      } | null;
    } | null;
    meta?: {
      __typename?: 'IoRestorecommerceMetaMeta';
      created?: unknown | null;
      modified?: unknown | null;
      createdBy?: string | null;
      modifiedBy?: string | null;
    } | null;
  } | null;
  customer?: {
    __typename?: 'IoRestorecommerceCustomerCustomer';
    id?: string | null;
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
        parent?: {
          __typename?: 'IoRestorecommerceOrganizationOrganization';
          id?: string | null;
          name?: string | null;
          email?: string | null;
          website?: string | null;
          vatId?: string | null;
        } | null;
        logo?: {
          __typename?: 'IoRestorecommerceImageImage';
          id?: string | null;
          index?: number | null;
          filename?: string | null;
          height?: number | null;
          width?: number | null;
          url?: string | null;
        } | null;
        contactPoints?:
          | {
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
              } | null;
            }[]
          | null;
        paymentMethods?:
          | {
              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
              id?: string | null;
              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
            }[]
          | null;
        meta?: {
          __typename?: 'IoRestorecommerceMetaMeta';
          created?: unknown | null;
          modified?: unknown | null;
          createdBy?: string | null;
          modifiedBy?: string | null;
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
        parent?: {
          __typename?: 'IoRestorecommerceOrganizationOrganization';
          id?: string | null;
          name?: string | null;
          email?: string | null;
          website?: string | null;
          vatId?: string | null;
        } | null;
        logo?: {
          __typename?: 'IoRestorecommerceImageImage';
          id?: string | null;
          index?: number | null;
          filename?: string | null;
          height?: number | null;
          width?: number | null;
          url?: string | null;
        } | null;
        contactPoints?:
          | {
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
              } | null;
            }[]
          | null;
        paymentMethods?:
          | {
              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
              id?: string | null;
              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
            }[]
          | null;
        meta?: {
          __typename?: 'IoRestorecommerceMetaMeta';
          created?: unknown | null;
          modified?: unknown | null;
          createdBy?: string | null;
          modifiedBy?: string | null;
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
        defaultScope?: string | null;
        localeId?: string | null;
        timezoneId?: string | null;
        roleAssociations?:
          | {
              __typename?: 'IoRestorecommerceAuthRoleAssociation';
              id?: string | null;
              role?: string | null;
            }[]
          | null;
        meta?: {
          __typename?: 'IoRestorecommerceMetaMeta';
          created?: unknown | null;
          modified?: unknown | null;
          createdBy?: string | null;
          modifiedBy?: string | null;
        } | null;
      } | null;
      contactPoints?:
        | {
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
            } | null;
          }[]
        | null;
    } | null;
    meta?: {
      __typename?: 'IoRestorecommerceMetaMeta';
      created?: unknown | null;
      modified?: unknown | null;
      createdBy?: string | null;
      modifiedBy?: string | null;
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
    defaultScope?: string | null;
    localeId?: string | null;
    timezoneId?: string | null;
    roleAssociations?:
      | {
          __typename?: 'IoRestorecommerceAuthRoleAssociation';
          id?: string | null;
          role?: string | null;
        }[]
      | null;
    meta?: {
      __typename?: 'IoRestorecommerceMetaMeta';
      created?: unknown | null;
      modified?: unknown | null;
      createdBy?: string | null;
      modifiedBy?: string | null;
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
      street?: string | null;
      buildingNumber?: string | null;
      postcode?: string | null;
      businessAddress?: {
        __typename?: 'IoRestorecommerceAddressBusinessAddress';
        name?: string | null;
      } | null;
      addressAddition?: {
        __typename?: 'IoRestorecommerceAddressAddressAddition';
        field1?: string | null;
        field2?: string | null;
      } | null;
      country?: {
        __typename?: 'IoRestorecommerceCountryCountry';
        id?: string | null;
        name?: string | null;
        countryCode?: string | null;
      } | null;
      residentialAddress?: {
        __typename?: 'IoRestorecommerceAddressResidentialAddress';
        title?: string | null;
        givenName?: string | null;
        midName?: string | null;
        familyName?: string | null;
      } | null;
    } | null;
  } | null;
  totalAmounts?:
    | {
        __typename?: 'IoRestorecommerceAmountAmount';
        gross?: number | null;
        net?: number | null;
        currency?: {
          __typename?: 'IoRestorecommerceCurrencyCurrency';
          name?: string | null;
          customExchangeRates?:
            | {
                __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                amount?: number | null;
                rate?: number | null;
                expenses?: number | null;
              }[]
            | null;
        } | null;
        vats?:
          | {
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
            }[]
          | null;
      }[]
    | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface OrganizationFragmentFragment {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: string | null;
  parentId?: string | null;
  name?: string | null;
  email?: string | null;
  website?: string | null;
  vatId?: string | null;
  parent?: {
    __typename?: 'IoRestorecommerceOrganizationOrganization';
    id?: string | null;
    name?: string | null;
    email?: string | null;
    website?: string | null;
    vatId?: string | null;
  } | null;
  logo?: {
    __typename?: 'IoRestorecommerceImageImage';
    id?: string | null;
    index?: number | null;
    filename?: string | null;
    height?: number | null;
    width?: number | null;
    url?: string | null;
  } | null;
  contactPoints?:
    | {
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
        } | null;
      }[]
    | null;
  paymentMethods?:
    | {
        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
        id?: string | null;
        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
      }[]
    | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface ProductFragmentFragment {
  __typename?: 'IoRestorecommerceProductProduct';
  id?: string | null;
  tags?: string[] | null;
  shop?: {
    __typename?: 'IoRestorecommerceShopShop';
    id?: string | null;
    shopNumber?: string | null;
    name?: string | null;
    description?: string | null;
    domain?: string | null;
    organization?: {
      __typename?: 'IoRestorecommerceOrganizationOrganization';
      id?: string | null;
      parentId?: string | null;
      name?: string | null;
      email?: string | null;
      website?: string | null;
      vatId?: string | null;
      parent?: {
        __typename?: 'IoRestorecommerceOrganizationOrganization';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        website?: string | null;
        vatId?: string | null;
      } | null;
      logo?: {
        __typename?: 'IoRestorecommerceImageImage';
        id?: string | null;
        index?: number | null;
        filename?: string | null;
        height?: number | null;
        width?: number | null;
        url?: string | null;
      } | null;
      contactPoints?:
        | {
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
            } | null;
          }[]
        | null;
      paymentMethods?:
        | {
            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
            id?: string | null;
            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
          }[]
        | null;
      meta?: {
        __typename?: 'IoRestorecommerceMetaMeta';
        created?: unknown | null;
        modified?: unknown | null;
        createdBy?: string | null;
        modifiedBy?: string | null;
      } | null;
    } | null;
    meta?: {
      __typename?: 'IoRestorecommerceMetaMeta';
      created?: unknown | null;
      modified?: unknown | null;
      createdBy?: string | null;
      modifiedBy?: string | null;
    } | null;
  } | null;
  product?: {
    __typename?: 'IoRestorecommerceProductIndividualProduct';
    name?: string | null;
    description?: string | null;
    taxIds?: string[] | null;
    taricCode?: string | null;
    category?: {
      __typename?: 'IoRestorecommerceProductCategoryProductCategory';
      id?: string | null;
      name?: string | null;
      description?: string | null;
    } | null;
    physical?: {
      __typename?: 'IoRestorecommerceProductPhysicalProduct';
      variants?:
        | {
            __typename?: 'IoRestorecommerceProductPhysicalVariant';
            id?: string | null;
            name?: string | null;
            stockLevel?: number | null;
            parentVariantId?: string | null;
            images?:
              | {
                  __typename?: 'IoRestorecommerceImageImage';
                  id?: string | null;
                  index?: number | null;
                  filename?: string | null;
                  caption?: string | null;
                  contentType?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url?: string | null;
                }[]
              | null;
            price?: {
              __typename?: 'IoRestorecommercePricePrice';
              currencyId?: string | null;
              regularPrice?: number | null;
              sale?: boolean | null;
              salePrice?: number | null;
            } | null;
          }[]
        | null;
    } | null;
  } | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface RoleFragmentFragment {
  __typename?: 'IoRestorecommerceRoleRole';
  id?: string | null;
  name?: string | null;
  description?: string | null;
  assignableByRoles?: string[] | null;
}

export interface ShopFragmentFragment {
  __typename?: 'IoRestorecommerceShopShop';
  id?: string | null;
  shopNumber?: string | null;
  name?: string | null;
  description?: string | null;
  domain?: string | null;
  organization?: {
    __typename?: 'IoRestorecommerceOrganizationOrganization';
    id?: string | null;
    parentId?: string | null;
    name?: string | null;
    email?: string | null;
    website?: string | null;
    vatId?: string | null;
    parent?: {
      __typename?: 'IoRestorecommerceOrganizationOrganization';
      id?: string | null;
      name?: string | null;
      email?: string | null;
      website?: string | null;
      vatId?: string | null;
    } | null;
    logo?: {
      __typename?: 'IoRestorecommerceImageImage';
      id?: string | null;
      index?: number | null;
      filename?: string | null;
      height?: number | null;
      width?: number | null;
      url?: string | null;
    } | null;
    contactPoints?:
      | {
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
          } | null;
        }[]
      | null;
    paymentMethods?:
      | {
          __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
          id?: string | null;
          transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
          paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
        }[]
      | null;
    meta?: {
      __typename?: 'IoRestorecommerceMetaMeta';
      created?: unknown | null;
      modified?: unknown | null;
      createdBy?: string | null;
      modifiedBy?: string | null;
    } | null;
  } | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface TimezoneFragmentFragment {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: string | null;
  value?: string | null;
  description?: string | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface UserRoleFragmentFragment {
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
  locale?: {
    __typename?: 'IoRestorecommerceLocaleLocale';
    id?: string | null;
    name?: string | null;
    value?: string | null;
    description?: string | null;
  } | null;
  timezone?: {
    __typename?: 'IoRestorecommerceTimezoneTimezone';
    id?: string | null;
    name?: string | null;
    value?: string | null;
    description?: string | null;
  } | null;
  roles?:
    | {
        __typename?: 'IoRestorecommerceRoleRole';
        id?: string | null;
        name?: string | null;
        description?: string | null;
        assignableByRoles?: string[] | null;
      }[]
    | null;
  roleAssociations?:
    | {
        __typename?: 'IoRestorecommerceAuthRoleAssociation';
        id?: string | null;
        role?: string | null;
      }[]
    | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export interface UserFragmentFragment {
  __typename?: 'IoRestorecommerceUserUser';
  id?: string | null;
  active?: boolean | null;
  activationCode?: string | null;
  email?: string | null;
  newEmail?: string | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  defaultScope?: string | null;
  localeId?: string | null;
  timezoneId?: string | null;
  roleAssociations?:
    | {
        __typename?: 'IoRestorecommerceAuthRoleAssociation';
        id?: string | null;
        role?: string | null;
      }[]
    | null;
  meta?: {
    __typename?: 'IoRestorecommerceMetaMeta';
    created?: unknown | null;
    modified?: unknown | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
  } | null;
}

export type FulfillmentFulfillmentDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface FulfillmentFulfillmentDeleteMutation {
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
}

export type FulfillmentFulfillmentMutateMutationVariables = Exact<{
  input: IIoRestorecommerceFulfillmentFulfillmentList;
}>;

export interface FulfillmentFulfillmentMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                  id?: string | null;
                  customerId?: string | null;
                  shopId?: string | null;
                  userId?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type FulfillmentFulfillmentReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface FulfillmentFulfillmentReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
                  id?: string | null;
                  customerId?: string | null;
                  shopId?: string | null;
                  userId?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityRoleDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface IdentityRoleDeleteMutation {
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
}

export type IdentityRoleMutateMutationVariables = Exact<{
  input: IIoRestorecommerceRoleRoleList;
}>;

export interface IdentityRoleMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceRoleRoleResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceRoleRole';
                  id?: string | null;
                  name?: string | null;
                  description?: string | null;
                  assignableByRoles?: string[] | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityRoleReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface IdentityRoleReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceRoleRoleResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceRoleRole';
                  id?: string | null;
                  name?: string | null;
                  description?: string | null;
                  assignableByRoles?: string[] | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserActivateMutationVariables = Exact<{
  input: IIoRestorecommerceUserActivateRequest;
}>;

export interface IdentityUserActivateMutation {
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
}

export type IdentityUserChangePasswordMutationVariables = Exact<{
  input: IIoRestorecommerceUserChangePasswordRequest;
}>;

export interface IdentityUserChangePasswordMutation {
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
}

export type IdentityUserConfirmEmailChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserConfirmEmailChangeRequest;
}>;

export interface IdentityUserConfirmEmailChangeMutation {
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
}

export type IdentityUserConfirmPasswordChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
}>;

export interface IdentityUserConfirmPasswordChangeMutation {
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
}

export type IdentityUserDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface IdentityUserDeleteMutation {
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
}

export type IdentityUserFindByTokenQueryVariables = Exact<{
  input: IIoRestorecommerceUserFindByTokenRequest;
}>;

export interface IdentityUserFindByTokenQuery {
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
            defaultScope?: string | null;
            localeId?: string | null;
            timezoneId?: string | null;
            roleAssociations?:
              | {
                  __typename?: 'IoRestorecommerceAuthRoleAssociation';
                  id?: string | null;
                  role?: string | null;
                }[]
              | null;
            meta?: {
              __typename?: 'IoRestorecommerceMetaMeta';
              created?: unknown | null;
              modified?: unknown | null;
              createdBy?: string | null;
              modifiedBy?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserFindQueryVariables = Exact<{
  input: IIoRestorecommerceUserFindRequest;
}>;

export interface IdentityUserFindQuery {
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
          items?:
            | {
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
                  defaultScope?: string | null;
                  localeId?: string | null;
                  timezoneId?: string | null;
                  roleAssociations?:
                    | {
                        __typename?: 'IoRestorecommerceAuthRoleAssociation';
                        id?: string | null;
                        role?: string | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserMutateMutationVariables = Exact<{
  input: IIoRestorecommerceUserUserList;
}>;

export interface IdentityUserMutateMutation {
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
          items?:
            | {
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
                  defaultScope?: string | null;
                  localeId?: string | null;
                  timezoneId?: string | null;
                  roleAssociations?:
                    | {
                        __typename?: 'IoRestorecommerceAuthRoleAssociation';
                        id?: string | null;
                        role?: string | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface IdentityUserReadQuery {
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
          items?:
            | {
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
                  locale?: {
                    __typename?: 'IoRestorecommerceLocaleLocale';
                    id?: string | null;
                    name?: string | null;
                    value?: string | null;
                    description?: string | null;
                  } | null;
                  timezone?: {
                    __typename?: 'IoRestorecommerceTimezoneTimezone';
                    id?: string | null;
                    name?: string | null;
                    value?: string | null;
                    description?: string | null;
                  } | null;
                  roles?:
                    | {
                        __typename?: 'IoRestorecommerceRoleRole';
                        id?: string | null;
                        name?: string | null;
                        description?: string | null;
                        assignableByRoles?: string[] | null;
                      }[]
                    | null;
                  roleAssociations?:
                    | {
                        __typename?: 'IoRestorecommerceAuthRoleAssociation';
                        id?: string | null;
                        role?: string | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserRegisterMutationVariables = Exact<{
  input: IIoRestorecommerceUserRegisterRequest;
}>;

export interface IdentityUserRegisterMutation {
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
            defaultScope?: string | null;
            localeId?: string | null;
            timezoneId?: string | null;
            roleAssociations?:
              | {
                  __typename?: 'IoRestorecommerceAuthRoleAssociation';
                  id?: string | null;
                  role?: string | null;
                }[]
              | null;
            meta?: {
              __typename?: 'IoRestorecommerceMetaMeta';
              created?: unknown | null;
              modified?: unknown | null;
              createdBy?: string | null;
              modifiedBy?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    };
  };
}

export type IdentityUserRequestEmailChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserChangeEmailRequest;
}>;

export interface IdentityUserRequestEmailChangeMutation {
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
}

export type IdentityUserRequestPasswordChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
}>;

export interface IdentityUserRequestPasswordChangeMutation {
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
}

export type InvoicingInvoiceDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface InvoicingInvoiceDeleteMutation {
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
}

export type InvoicingInvoiceMutateMutationVariables = Exact<{
  input: IIoRestorecommerceInvoiceInvoiceList;
}>;

export interface InvoicingInvoiceMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceInvoiceInvoice';
                  id?: string | null;
                  customerId?: string | null;
                  shopId?: string | null;
                  userId?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type InvoicingInvoiceReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface InvoicingInvoiceReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceInvoiceInvoice';
                  id?: string | null;
                  customerId?: string | null;
                  shopId?: string | null;
                  userId?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataAddressReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataAddressReadQuery {
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
          items?:
            | {
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
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataCountryDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface MasterDataCountryDeleteMutation {
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
          status?:
            | {
                __typename?: 'IoRestorecommerceStatusStatus';
                id?: string | null;
                code?: number | null;
                message?: string | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataCountryMutateMutationVariables = Exact<{
  input: IIoRestorecommerceCountryCountryList;
}>;

export interface MasterDataCountryMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceCountryCountryResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceCountryCountry';
                  id?: string | null;
                  name?: string | null;
                  countryCode?: string | null;
                  geographicalName?: string | null;
                  economicAreas?: string[] | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataCountryReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataCountryReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceCountryCountryResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceCountryCountry';
                  id?: string | null;
                  name?: string | null;
                  countryCode?: string | null;
                  geographicalName?: string | null;
                  economicAreas?: string[] | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataLocaleReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataLocaleReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceLocaleLocaleResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceLocaleLocale';
                  id?: string | null;
                  description?: string | null;
                  value?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataLocationReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataLocationReadQuery {
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
          items?:
            | {
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
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataOrganizationDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface MasterDataOrganizationDeleteMutation {
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
}

export type MasterDataOrganizationMutateMutationVariables = Exact<{
  input: IIoRestorecommerceOrganizationOrganizationList;
}>;

export interface MasterDataOrganizationMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceOrganizationOrganization';
                  id?: string | null;
                  parentId?: string | null;
                  name?: string | null;
                  email?: string | null;
                  website?: string | null;
                  vatId?: string | null;
                  parent?: {
                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                    id?: string | null;
                    name?: string | null;
                    email?: string | null;
                    website?: string | null;
                    vatId?: string | null;
                  } | null;
                  logo?: {
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url?: string | null;
                  } | null;
                  contactPoints?:
                    | {
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
                        } | null;
                      }[]
                    | null;
                  paymentMethods?:
                    | {
                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                        id?: string | null;
                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataOrganizationReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataOrganizationReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceOrganizationOrganization';
                  id?: string | null;
                  parentId?: string | null;
                  name?: string | null;
                  email?: string | null;
                  website?: string | null;
                  vatId?: string | null;
                  parent?: {
                    __typename?: 'IoRestorecommerceOrganizationOrganization';
                    id?: string | null;
                    name?: string | null;
                    email?: string | null;
                    website?: string | null;
                    vatId?: string | null;
                  } | null;
                  logo?: {
                    __typename?: 'IoRestorecommerceImageImage';
                    id?: string | null;
                    index?: number | null;
                    filename?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url?: string | null;
                  } | null;
                  contactPoints?:
                    | {
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
                        } | null;
                      }[]
                    | null;
                  paymentMethods?:
                    | {
                        __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                        id?: string | null;
                        transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                        paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type MasterDataTimezoneReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface MasterDataTimezoneReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceTimezoneTimezone';
                  id?: string | null;
                  value?: string | null;
                  description?: string | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type OrderingOrderDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export interface OrderingOrderDeleteMutation {
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
          status?:
            | {
                __typename?: 'IoRestorecommerceStatusStatus';
                id?: string | null;
                code?: number | null;
                message?: string | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type OrderingOrderMutateMutationVariables = Exact<{
  input: IIoRestorecommerceOrderOrderList;
}>;

export interface OrderingOrderMutateMutation {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceOrderOrderResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceOrderOrder';
                  id?: string | null;
                  customerOrderNr?: string | null;
                  notificationEmail?: string | null;
                  orderState?: IoRestorecommerceOrderOrderState | null;
                  items?:
                    | {
                        __typename?: 'IoRestorecommerceOrderItem';
                        id?: string | null;
                        quantity?: number | null;
                        product?: {
                          __typename?: 'IoRestorecommerceProductProduct';
                          id?: string | null;
                          tags?: string[] | null;
                          shop?: {
                            __typename?: 'IoRestorecommerceShopShop';
                            id?: string | null;
                            shopNumber?: string | null;
                            name?: string | null;
                            description?: string | null;
                            domain?: string | null;
                            organization?: {
                              __typename?: 'IoRestorecommerceOrganizationOrganization';
                              id?: string | null;
                              parentId?: string | null;
                              name?: string | null;
                              email?: string | null;
                              website?: string | null;
                              vatId?: string | null;
                              parent?: {
                                __typename?: 'IoRestorecommerceOrganizationOrganization';
                                id?: string | null;
                                name?: string | null;
                                email?: string | null;
                                website?: string | null;
                                vatId?: string | null;
                              } | null;
                              logo?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                height?: number | null;
                                width?: number | null;
                                url?: string | null;
                              } | null;
                              contactPoints?:
                                | {
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
                                    } | null;
                                  }[]
                                | null;
                              paymentMethods?:
                                | {
                                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                    id?: string | null;
                                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                  }[]
                                | null;
                              meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                              } | null;
                            } | null;
                            meta?: {
                              __typename?: 'IoRestorecommerceMetaMeta';
                              created?: unknown | null;
                              modified?: unknown | null;
                              createdBy?: string | null;
                              modifiedBy?: string | null;
                            } | null;
                          } | null;
                          product?: {
                            __typename?: 'IoRestorecommerceProductIndividualProduct';
                            name?: string | null;
                            description?: string | null;
                            taxIds?: string[] | null;
                            taricCode?: string | null;
                            category?: {
                              __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                              id?: string | null;
                              name?: string | null;
                              description?: string | null;
                            } | null;
                            physical?: {
                              __typename?: 'IoRestorecommerceProductPhysicalProduct';
                              variants?:
                                | {
                                    __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                    id?: string | null;
                                    name?: string | null;
                                    stockLevel?: number | null;
                                    parentVariantId?: string | null;
                                    images?:
                                      | {
                                          __typename?: 'IoRestorecommerceImageImage';
                                          id?: string | null;
                                          index?: number | null;
                                          filename?: string | null;
                                          caption?: string | null;
                                          contentType?: string | null;
                                          height?: number | null;
                                          width?: number | null;
                                          url?: string | null;
                                        }[]
                                      | null;
                                    price?: {
                                      __typename?: 'IoRestorecommercePricePrice';
                                      currencyId?: string | null;
                                      regularPrice?: number | null;
                                      sale?: boolean | null;
                                      salePrice?: number | null;
                                    } | null;
                                  }[]
                                | null;
                            } | null;
                          } | null;
                          meta?: {
                            __typename?: 'IoRestorecommerceMetaMeta';
                            created?: unknown | null;
                            modified?: unknown | null;
                            createdBy?: string | null;
                            modifiedBy?: string | null;
                          } | null;
                        } | null;
                        unitPrice?: {
                          __typename?: 'IoRestorecommercePricePrice';
                          regularPrice?: number | null;
                          sale?: boolean | null;
                          salePrice?: number | null;
                          currency?: {
                            __typename?: 'IoRestorecommerceCurrencyCurrency';
                            name?: string | null;
                            symbol?: string | null;
                          } | null;
                        } | null;
                      }[]
                    | null;
                  shop?: {
                    __typename?: 'IoRestorecommerceShopShop';
                    id?: string | null;
                    shopNumber?: string | null;
                    name?: string | null;
                    description?: string | null;
                    domain?: string | null;
                    organization?: {
                      __typename?: 'IoRestorecommerceOrganizationOrganization';
                      id?: string | null;
                      parentId?: string | null;
                      name?: string | null;
                      email?: string | null;
                      website?: string | null;
                      vatId?: string | null;
                      parent?: {
                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                        id?: string | null;
                        name?: string | null;
                        email?: string | null;
                        website?: string | null;
                        vatId?: string | null;
                      } | null;
                      logo?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        height?: number | null;
                        width?: number | null;
                        url?: string | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                      paymentMethods?:
                        | {
                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                            id?: string | null;
                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                          }[]
                        | null;
                      meta?: {
                        __typename?: 'IoRestorecommerceMetaMeta';
                        created?: unknown | null;
                        modified?: unknown | null;
                        createdBy?: string | null;
                        modifiedBy?: string | null;
                      } | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
                    } | null;
                  } | null;
                  customer?: {
                    __typename?: 'IoRestorecommerceCustomerCustomer';
                    id?: string | null;
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
                        parent?: {
                          __typename?: 'IoRestorecommerceOrganizationOrganization';
                          id?: string | null;
                          name?: string | null;
                          email?: string | null;
                          website?: string | null;
                          vatId?: string | null;
                        } | null;
                        logo?: {
                          __typename?: 'IoRestorecommerceImageImage';
                          id?: string | null;
                          index?: number | null;
                          filename?: string | null;
                          height?: number | null;
                          width?: number | null;
                          url?: string | null;
                        } | null;
                        contactPoints?:
                          | {
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
                              } | null;
                            }[]
                          | null;
                        paymentMethods?:
                          | {
                              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                              id?: string | null;
                              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
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
                        parent?: {
                          __typename?: 'IoRestorecommerceOrganizationOrganization';
                          id?: string | null;
                          name?: string | null;
                          email?: string | null;
                          website?: string | null;
                          vatId?: string | null;
                        } | null;
                        logo?: {
                          __typename?: 'IoRestorecommerceImageImage';
                          id?: string | null;
                          index?: number | null;
                          filename?: string | null;
                          height?: number | null;
                          width?: number | null;
                          url?: string | null;
                        } | null;
                        contactPoints?:
                          | {
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
                              } | null;
                            }[]
                          | null;
                        paymentMethods?:
                          | {
                              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                              id?: string | null;
                              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
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
                        defaultScope?: string | null;
                        localeId?: string | null;
                        timezoneId?: string | null;
                        roleAssociations?:
                          | {
                              __typename?: 'IoRestorecommerceAuthRoleAssociation';
                              id?: string | null;
                              role?: string | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
                        } | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
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
                    defaultScope?: string | null;
                    localeId?: string | null;
                    timezoneId?: string | null;
                    roleAssociations?:
                      | {
                          __typename?: 'IoRestorecommerceAuthRoleAssociation';
                          id?: string | null;
                          role?: string | null;
                        }[]
                      | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
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
                      street?: string | null;
                      buildingNumber?: string | null;
                      postcode?: string | null;
                      businessAddress?: {
                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                        name?: string | null;
                      } | null;
                      addressAddition?: {
                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                        field1?: string | null;
                        field2?: string | null;
                      } | null;
                      country?: {
                        __typename?: 'IoRestorecommerceCountryCountry';
                        id?: string | null;
                        name?: string | null;
                        countryCode?: string | null;
                      } | null;
                      residentialAddress?: {
                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                        title?: string | null;
                        givenName?: string | null;
                        midName?: string | null;
                        familyName?: string | null;
                      } | null;
                    } | null;
                  } | null;
                  totalAmounts?:
                    | {
                        __typename?: 'IoRestorecommerceAmountAmount';
                        gross?: number | null;
                        net?: number | null;
                        currency?: {
                          __typename?: 'IoRestorecommerceCurrencyCurrency';
                          name?: string | null;
                          customExchangeRates?:
                            | {
                                __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                                amount?: number | null;
                                rate?: number | null;
                                expenses?: number | null;
                              }[]
                            | null;
                        } | null;
                        vats?:
                          | {
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
                            }[]
                          | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export type OrderingOrderReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export interface OrderingOrderReadQuery {
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
          items?:
            | {
                __typename?: 'IoRestorecommerceOrderOrderResponse';
                payload?: {
                  __typename?: 'IoRestorecommerceOrderOrder';
                  id?: string | null;
                  customerOrderNr?: string | null;
                  notificationEmail?: string | null;
                  orderState?: IoRestorecommerceOrderOrderState | null;
                  items?:
                    | {
                        __typename?: 'IoRestorecommerceOrderItem';
                        id?: string | null;
                        quantity?: number | null;
                        product?: {
                          __typename?: 'IoRestorecommerceProductProduct';
                          id?: string | null;
                          tags?: string[] | null;
                          shop?: {
                            __typename?: 'IoRestorecommerceShopShop';
                            id?: string | null;
                            shopNumber?: string | null;
                            name?: string | null;
                            description?: string | null;
                            domain?: string | null;
                            organization?: {
                              __typename?: 'IoRestorecommerceOrganizationOrganization';
                              id?: string | null;
                              parentId?: string | null;
                              name?: string | null;
                              email?: string | null;
                              website?: string | null;
                              vatId?: string | null;
                              parent?: {
                                __typename?: 'IoRestorecommerceOrganizationOrganization';
                                id?: string | null;
                                name?: string | null;
                                email?: string | null;
                                website?: string | null;
                                vatId?: string | null;
                              } | null;
                              logo?: {
                                __typename?: 'IoRestorecommerceImageImage';
                                id?: string | null;
                                index?: number | null;
                                filename?: string | null;
                                height?: number | null;
                                width?: number | null;
                                url?: string | null;
                              } | null;
                              contactPoints?:
                                | {
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
                                    } | null;
                                  }[]
                                | null;
                              paymentMethods?:
                                | {
                                    __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                                    id?: string | null;
                                    transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                                    paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                                  }[]
                                | null;
                              meta?: {
                                __typename?: 'IoRestorecommerceMetaMeta';
                                created?: unknown | null;
                                modified?: unknown | null;
                                createdBy?: string | null;
                                modifiedBy?: string | null;
                              } | null;
                            } | null;
                            meta?: {
                              __typename?: 'IoRestorecommerceMetaMeta';
                              created?: unknown | null;
                              modified?: unknown | null;
                              createdBy?: string | null;
                              modifiedBy?: string | null;
                            } | null;
                          } | null;
                          product?: {
                            __typename?: 'IoRestorecommerceProductIndividualProduct';
                            name?: string | null;
                            description?: string | null;
                            taxIds?: string[] | null;
                            taricCode?: string | null;
                            category?: {
                              __typename?: 'IoRestorecommerceProductCategoryProductCategory';
                              id?: string | null;
                              name?: string | null;
                              description?: string | null;
                            } | null;
                            physical?: {
                              __typename?: 'IoRestorecommerceProductPhysicalProduct';
                              variants?:
                                | {
                                    __typename?: 'IoRestorecommerceProductPhysicalVariant';
                                    id?: string | null;
                                    name?: string | null;
                                    stockLevel?: number | null;
                                    parentVariantId?: string | null;
                                    images?:
                                      | {
                                          __typename?: 'IoRestorecommerceImageImage';
                                          id?: string | null;
                                          index?: number | null;
                                          filename?: string | null;
                                          caption?: string | null;
                                          contentType?: string | null;
                                          height?: number | null;
                                          width?: number | null;
                                          url?: string | null;
                                        }[]
                                      | null;
                                    price?: {
                                      __typename?: 'IoRestorecommercePricePrice';
                                      currencyId?: string | null;
                                      regularPrice?: number | null;
                                      sale?: boolean | null;
                                      salePrice?: number | null;
                                    } | null;
                                  }[]
                                | null;
                            } | null;
                          } | null;
                          meta?: {
                            __typename?: 'IoRestorecommerceMetaMeta';
                            created?: unknown | null;
                            modified?: unknown | null;
                            createdBy?: string | null;
                            modifiedBy?: string | null;
                          } | null;
                        } | null;
                        unitPrice?: {
                          __typename?: 'IoRestorecommercePricePrice';
                          regularPrice?: number | null;
                          sale?: boolean | null;
                          salePrice?: number | null;
                          currency?: {
                            __typename?: 'IoRestorecommerceCurrencyCurrency';
                            name?: string | null;
                            symbol?: string | null;
                          } | null;
                        } | null;
                      }[]
                    | null;
                  shop?: {
                    __typename?: 'IoRestorecommerceShopShop';
                    id?: string | null;
                    shopNumber?: string | null;
                    name?: string | null;
                    description?: string | null;
                    domain?: string | null;
                    organization?: {
                      __typename?: 'IoRestorecommerceOrganizationOrganization';
                      id?: string | null;
                      parentId?: string | null;
                      name?: string | null;
                      email?: string | null;
                      website?: string | null;
                      vatId?: string | null;
                      parent?: {
                        __typename?: 'IoRestorecommerceOrganizationOrganization';
                        id?: string | null;
                        name?: string | null;
                        email?: string | null;
                        website?: string | null;
                        vatId?: string | null;
                      } | null;
                      logo?: {
                        __typename?: 'IoRestorecommerceImageImage';
                        id?: string | null;
                        index?: number | null;
                        filename?: string | null;
                        height?: number | null;
                        width?: number | null;
                        url?: string | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                      paymentMethods?:
                        | {
                            __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                            id?: string | null;
                            transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                            paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                          }[]
                        | null;
                      meta?: {
                        __typename?: 'IoRestorecommerceMetaMeta';
                        created?: unknown | null;
                        modified?: unknown | null;
                        createdBy?: string | null;
                        modifiedBy?: string | null;
                      } | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
                    } | null;
                  } | null;
                  customer?: {
                    __typename?: 'IoRestorecommerceCustomerCustomer';
                    id?: string | null;
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
                        parent?: {
                          __typename?: 'IoRestorecommerceOrganizationOrganization';
                          id?: string | null;
                          name?: string | null;
                          email?: string | null;
                          website?: string | null;
                          vatId?: string | null;
                        } | null;
                        logo?: {
                          __typename?: 'IoRestorecommerceImageImage';
                          id?: string | null;
                          index?: number | null;
                          filename?: string | null;
                          height?: number | null;
                          width?: number | null;
                          url?: string | null;
                        } | null;
                        contactPoints?:
                          | {
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
                              } | null;
                            }[]
                          | null;
                        paymentMethods?:
                          | {
                              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                              id?: string | null;
                              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
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
                        parent?: {
                          __typename?: 'IoRestorecommerceOrganizationOrganization';
                          id?: string | null;
                          name?: string | null;
                          email?: string | null;
                          website?: string | null;
                          vatId?: string | null;
                        } | null;
                        logo?: {
                          __typename?: 'IoRestorecommerceImageImage';
                          id?: string | null;
                          index?: number | null;
                          filename?: string | null;
                          height?: number | null;
                          width?: number | null;
                          url?: string | null;
                        } | null;
                        contactPoints?:
                          | {
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
                              } | null;
                            }[]
                          | null;
                        paymentMethods?:
                          | {
                              __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
                              id?: string | null;
                              transferType?: IoRestorecommercePaymentMethodTransferTypeEnum | null;
                              paymentMethod?: IoRestorecommercePaymentMethodPaymentMethodEnum | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
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
                        defaultScope?: string | null;
                        localeId?: string | null;
                        timezoneId?: string | null;
                        roleAssociations?:
                          | {
                              __typename?: 'IoRestorecommerceAuthRoleAssociation';
                              id?: string | null;
                              role?: string | null;
                            }[]
                          | null;
                        meta?: {
                          __typename?: 'IoRestorecommerceMetaMeta';
                          created?: unknown | null;
                          modified?: unknown | null;
                          createdBy?: string | null;
                          modifiedBy?: string | null;
                        } | null;
                      } | null;
                      contactPoints?:
                        | {
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
                            } | null;
                          }[]
                        | null;
                    } | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
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
                    defaultScope?: string | null;
                    localeId?: string | null;
                    timezoneId?: string | null;
                    roleAssociations?:
                      | {
                          __typename?: 'IoRestorecommerceAuthRoleAssociation';
                          id?: string | null;
                          role?: string | null;
                        }[]
                      | null;
                    meta?: {
                      __typename?: 'IoRestorecommerceMetaMeta';
                      created?: unknown | null;
                      modified?: unknown | null;
                      createdBy?: string | null;
                      modifiedBy?: string | null;
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
                      street?: string | null;
                      buildingNumber?: string | null;
                      postcode?: string | null;
                      businessAddress?: {
                        __typename?: 'IoRestorecommerceAddressBusinessAddress';
                        name?: string | null;
                      } | null;
                      addressAddition?: {
                        __typename?: 'IoRestorecommerceAddressAddressAddition';
                        field1?: string | null;
                        field2?: string | null;
                      } | null;
                      country?: {
                        __typename?: 'IoRestorecommerceCountryCountry';
                        id?: string | null;
                        name?: string | null;
                        countryCode?: string | null;
                      } | null;
                      residentialAddress?: {
                        __typename?: 'IoRestorecommerceAddressResidentialAddress';
                        title?: string | null;
                        givenName?: string | null;
                        midName?: string | null;
                        familyName?: string | null;
                      } | null;
                    } | null;
                  } | null;
                  totalAmounts?:
                    | {
                        __typename?: 'IoRestorecommerceAmountAmount';
                        gross?: number | null;
                        net?: number | null;
                        currency?: {
                          __typename?: 'IoRestorecommerceCurrencyCurrency';
                          name?: string | null;
                          customExchangeRates?:
                            | {
                                __typename?: 'IoRestorecommerceCurrencyExchangeRate';
                                amount?: number | null;
                                rate?: number | null;
                                expenses?: number | null;
                              }[]
                            | null;
                        } | null;
                        vats?:
                          | {
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
                            }[]
                          | null;
                      }[]
                    | null;
                  meta?: {
                    __typename?: 'IoRestorecommerceMetaMeta';
                    created?: unknown | null;
                    modified?: unknown | null;
                    createdBy?: string | null;
                    modifiedBy?: string | null;
                  } | null;
                } | null;
              }[]
            | null;
        } | null;
      } | null;
    };
  };
}

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on IoRestorecommerceMetaMeta {
    created
    modified
    createdBy
    modifiedBy
  }
`;
export const AddressFragmentFragmentDoc = gql`
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
export const CountryFragmentFragmentDoc = gql`
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
export const FulfillmentFragmentFragmentDoc = gql`
  fragment FulfillmentFragment on IoRestorecommerceFulfillmentFulfillment {
    id
    customerId
    shopId
    userId
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
export const InvoiceFragmentFragmentDoc = gql`
  fragment InvoiceFragment on IoRestorecommerceInvoiceInvoice {
    id
    customerId
    shopId
    userId
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
export const LocaleFragmentFragmentDoc = gql`
  fragment LocaleFragment on IoRestorecommerceLocaleLocale {
    id
    description
    value
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
export const LocationFragmentFragmentDoc = gql`
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
export const ContactPointFragmentFragmentDoc = gql`
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
export const OrganizationFragmentFragmentDoc = gql`
  fragment OrganizationFragment on IoRestorecommerceOrganizationOrganization {
    id
    parentId
    parent {
      id
      name
      email
      website
      vatId
    }
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
    contactPoints {
      ...ContactPointFragment
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
  ${ContactPointFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
export const ShopFragmentFragmentDoc = gql`
  fragment ShopFragment on IoRestorecommerceShopShop {
    id
    shopNumber
    name
    description
    domain
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
export const ProductFragmentFragmentDoc = gql`
  fragment ProductFragment on IoRestorecommerceProductProduct {
    id
    shop {
      ...ShopFragment
    }
    tags
    product {
      name
      description
      taxIds
      taricCode
      category {
        id
        name
        description
      }
      physical {
        variants {
          id
          name
          images {
            id
            index
            filename
            caption
            contentType
            height
            width
            url
          }
          stockLevel
          parentVariantId
          price {
            currencyId
            regularPrice
            sale
            salePrice
          }
        }
      }
    }
    meta {
      ...MetaFragment
    }
  }
  ${ShopFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on IoRestorecommerceUserUser {
    id
    active
    activationCode
    email
    newEmail
    name
    firstName
    lastName
    defaultScope
    localeId
    timezoneId
    roleAssociations {
      id
      role
    }
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
export const CustomerFragmentFragmentDoc = gql`
  fragment CustomerFragment on IoRestorecommerceCustomerCustomer {
    id
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
export const OrderFragmentFragmentDoc = gql`
  fragment OrderFragment on IoRestorecommerceOrderOrder {
    id
    customerOrderNr
    notificationEmail
    orderState
    items {
      id
      quantity
      product {
        ...ProductFragment
      }
      unitPrice {
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
        id
        street
        buildingNumber
        businessAddress {
          name
        }
        addressAddition {
          field1
          field2
        }
        country {
          id
          name
          countryCode
        }
        postcode
        residentialAddress {
          title
          givenName
          midName
          familyName
        }
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
  ${MetaFragmentFragmentDoc}
`;
export const TimezoneFragmentFragmentDoc = gql`
  fragment TimezoneFragment on IoRestorecommerceTimezoneTimezone {
    id
    value
    description
    meta {
      ...MetaFragment
    }
  }
  ${MetaFragmentFragmentDoc}
`;
export const RoleFragmentFragmentDoc = gql`
  fragment RoleFragment on IoRestorecommerceRoleRole {
    id
    name
    description
    assignableByRoles
  }
`;
export const UserRoleFragmentFragmentDoc = gql`
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
    locale {
      id
      name
      value
      description
    }
    timezoneId
    timezone {
      id
      name
      value
      description
    }
    roles {
      ...RoleFragment
    }
    roleAssociations {
      id
      role
    }
    meta {
      ...MetaFragment
    }
  }
  ${RoleFragmentFragmentDoc}
  ${MetaFragmentFragmentDoc}
`;
export const CatalogProductDeleteDocument = gql`
  mutation CatalogProductDelete(
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

@Injectable({
  providedIn: 'root',
})
export class CatalogProductDeleteGQL extends Apollo.Mutation<
  CatalogProductDeleteMutation,
  CatalogProductDeleteMutationVariables
> {
  override document = CatalogProductDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CatalogProductMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class CatalogProductMutateGQL extends Apollo.Mutation<
  CatalogProductMutateMutation,
  CatalogProductMutateMutationVariables
> {
  override document = CatalogProductMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CatalogProductReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class CatalogProductReadGQL extends Apollo.Query<
  CatalogProductReadQuery,
  CatalogProductReadQueryVariables
> {
  override document = CatalogProductReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const FulfillmentFulfillmentDeleteDocument = gql`
  mutation FulfillmentFulfillmentDelete(
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

@Injectable({
  providedIn: 'root',
})
export class FulfillmentFulfillmentDeleteGQL extends Apollo.Mutation<
  FulfillmentFulfillmentDeleteMutation,
  FulfillmentFulfillmentDeleteMutationVariables
> {
  override document = FulfillmentFulfillmentDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const FulfillmentFulfillmentMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class FulfillmentFulfillmentMutateGQL extends Apollo.Mutation<
  FulfillmentFulfillmentMutateMutation,
  FulfillmentFulfillmentMutateMutationVariables
> {
  override document = FulfillmentFulfillmentMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const FulfillmentFulfillmentReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class FulfillmentFulfillmentReadGQL extends Apollo.Query<
  FulfillmentFulfillmentReadQuery,
  FulfillmentFulfillmentReadQueryVariables
> {
  override document = FulfillmentFulfillmentReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityRoleDeleteDocument = gql`
  mutation IdentityRoleDelete(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityRoleDeleteGQL extends Apollo.Mutation<
  IdentityRoleDeleteMutation,
  IdentityRoleDeleteMutationVariables
> {
  override document = IdentityRoleDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityRoleMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityRoleMutateGQL extends Apollo.Mutation<
  IdentityRoleMutateMutation,
  IdentityRoleMutateMutationVariables
> {
  override document = IdentityRoleMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityRoleReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityRoleReadGQL extends Apollo.Query<
  IdentityRoleReadQuery,
  IdentityRoleReadQueryVariables
> {
  override document = IdentityRoleReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserActivateDocument = gql`
  mutation IdentityUserActivate(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserActivateGQL extends Apollo.Mutation<
  IdentityUserActivateMutation,
  IdentityUserActivateMutationVariables
> {
  override document = IdentityUserActivateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserChangePasswordDocument = gql`
  mutation IdentityUserChangePassword(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserChangePasswordGQL extends Apollo.Mutation<
  IdentityUserChangePasswordMutation,
  IdentityUserChangePasswordMutationVariables
> {
  override document = IdentityUserChangePasswordDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserConfirmEmailChangeDocument = gql`
  mutation IdentityUserConfirmEmailChange(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserConfirmEmailChangeGQL extends Apollo.Mutation<
  IdentityUserConfirmEmailChangeMutation,
  IdentityUserConfirmEmailChangeMutationVariables
> {
  override document = IdentityUserConfirmEmailChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserConfirmPasswordChangeDocument = gql`
  mutation IdentityUserConfirmPasswordChange(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserConfirmPasswordChangeGQL extends Apollo.Mutation<
  IdentityUserConfirmPasswordChangeMutation,
  IdentityUserConfirmPasswordChangeMutationVariables
> {
  override document = IdentityUserConfirmPasswordChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserDeleteDocument = gql`
  mutation IdentityUserDelete(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserDeleteGQL extends Apollo.Mutation<
  IdentityUserDeleteMutation,
  IdentityUserDeleteMutationVariables
> {
  override document = IdentityUserDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserFindByTokenDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserFindByTokenGQL extends Apollo.Query<
  IdentityUserFindByTokenQuery,
  IdentityUserFindByTokenQueryVariables
> {
  override document = IdentityUserFindByTokenDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserFindDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserFindGQL extends Apollo.Query<
  IdentityUserFindQuery,
  IdentityUserFindQueryVariables
> {
  override document = IdentityUserFindDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserMutateGQL extends Apollo.Mutation<
  IdentityUserMutateMutation,
  IdentityUserMutateMutationVariables
> {
  override document = IdentityUserMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserReadGQL extends Apollo.Query<
  IdentityUserReadQuery,
  IdentityUserReadQueryVariables
> {
  override document = IdentityUserReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserRegisterDocument = gql`
  mutation IdentityUserRegister(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserRegisterGQL extends Apollo.Mutation<
  IdentityUserRegisterMutation,
  IdentityUserRegisterMutationVariables
> {
  override document = IdentityUserRegisterDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserRequestEmailChangeDocument = gql`
  mutation IdentityUserRequestEmailChange(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserRequestEmailChangeGQL extends Apollo.Mutation<
  IdentityUserRequestEmailChangeMutation,
  IdentityUserRequestEmailChangeMutationVariables
> {
  override document = IdentityUserRequestEmailChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const IdentityUserRequestPasswordChangeDocument = gql`
  mutation IdentityUserRequestPasswordChange(
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

@Injectable({
  providedIn: 'root',
})
export class IdentityUserRequestPasswordChangeGQL extends Apollo.Mutation<
  IdentityUserRequestPasswordChangeMutation,
  IdentityUserRequestPasswordChangeMutationVariables
> {
  override document = IdentityUserRequestPasswordChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const InvoicingInvoiceDeleteDocument = gql`
  mutation InvoicingInvoiceDelete(
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

@Injectable({
  providedIn: 'root',
})
export class InvoicingInvoiceDeleteGQL extends Apollo.Mutation<
  InvoicingInvoiceDeleteMutation,
  InvoicingInvoiceDeleteMutationVariables
> {
  override document = InvoicingInvoiceDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const InvoicingInvoiceMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class InvoicingInvoiceMutateGQL extends Apollo.Mutation<
  InvoicingInvoiceMutateMutation,
  InvoicingInvoiceMutateMutationVariables
> {
  override document = InvoicingInvoiceMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const InvoicingInvoiceReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class InvoicingInvoiceReadGQL extends Apollo.Query<
  InvoicingInvoiceReadQuery,
  InvoicingInvoiceReadQueryVariables
> {
  override document = InvoicingInvoiceReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataAddressReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataAddressReadGQL extends Apollo.Query<
  MasterDataAddressReadQuery,
  MasterDataAddressReadQueryVariables
> {
  override document = MasterDataAddressReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataCountryDeleteDocument = gql`
  mutation MasterDataCountryDelete(
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataCountryDeleteGQL extends Apollo.Mutation<
  MasterDataCountryDeleteMutation,
  MasterDataCountryDeleteMutationVariables
> {
  override document = MasterDataCountryDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataCountryMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataCountryMutateGQL extends Apollo.Mutation<
  MasterDataCountryMutateMutation,
  MasterDataCountryMutateMutationVariables
> {
  override document = MasterDataCountryMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataCountryReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataCountryReadGQL extends Apollo.Query<
  MasterDataCountryReadQuery,
  MasterDataCountryReadQueryVariables
> {
  override document = MasterDataCountryReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataLocaleReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataLocaleReadGQL extends Apollo.Query<
  MasterDataLocaleReadQuery,
  MasterDataLocaleReadQueryVariables
> {
  override document = MasterDataLocaleReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataLocationReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataLocationReadGQL extends Apollo.Query<
  MasterDataLocationReadQuery,
  MasterDataLocationReadQueryVariables
> {
  override document = MasterDataLocationReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataOrganizationDeleteDocument = gql`
  mutation MasterDataOrganizationDelete(
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataOrganizationDeleteGQL extends Apollo.Mutation<
  MasterDataOrganizationDeleteMutation,
  MasterDataOrganizationDeleteMutationVariables
> {
  override document = MasterDataOrganizationDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataOrganizationMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataOrganizationMutateGQL extends Apollo.Mutation<
  MasterDataOrganizationMutateMutation,
  MasterDataOrganizationMutateMutationVariables
> {
  override document = MasterDataOrganizationMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataOrganizationReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataOrganizationReadGQL extends Apollo.Query<
  MasterDataOrganizationReadQuery,
  MasterDataOrganizationReadQueryVariables
> {
  override document = MasterDataOrganizationReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MasterDataTimezoneReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class MasterDataTimezoneReadGQL extends Apollo.Query<
  MasterDataTimezoneReadQuery,
  MasterDataTimezoneReadQueryVariables
> {
  override document = MasterDataTimezoneReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const OrderingOrderDeleteDocument = gql`
  mutation OrderingOrderDelete(
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

@Injectable({
  providedIn: 'root',
})
export class OrderingOrderDeleteGQL extends Apollo.Mutation<
  OrderingOrderDeleteMutation,
  OrderingOrderDeleteMutationVariables
> {
  override document = OrderingOrderDeleteDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const OrderingOrderMutateDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class OrderingOrderMutateGQL extends Apollo.Mutation<
  OrderingOrderMutateMutation,
  OrderingOrderMutateMutationVariables
> {
  override document = OrderingOrderMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const OrderingOrderReadDocument = gql`
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

@Injectable({
  providedIn: 'root',
})
export class OrderingOrderReadGQL extends Apollo.Query<
  OrderingOrderReadQuery,
  OrderingOrderReadQueryVariables
> {
  override document = OrderingOrderReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
