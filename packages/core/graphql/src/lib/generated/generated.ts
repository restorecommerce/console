import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
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
  input: IIoRestorecommerceFulfillmentInvoiceRequestList;
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
  input: IIoRestorecommerceFulfillmentInvoiceRequestList;
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
  input: IIoRestorecommerceFulfillmentProductProductQueryList;
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
  resources?: InputMaybe<Array<IGoogleProtobufAny>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceAddressAddress>>;
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
  vats?: InputMaybe<Array<IIoRestorecommerceAmountVat>>;
}

export interface IIoRestorecommerceAmountVat {
  taxId?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceAttributeAttribute {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAuthRoleAssociation {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  created?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceAuthTokens {
  expiresIn?: InputMaybe<Scalars['Float']>;
  interactive?: InputMaybe<Scalars['Boolean']>;
  lastLogin?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Array<Scalars['String']>>;
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
  items?: InputMaybe<
    Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>
  >;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCodeCode {
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
  sector?: InputMaybe<IoRestorecommerceCodeSector>;
  status?: InputMaybe<IoRestorecommerceCodeStatusCode>;
  symbol?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCodeCodeList {
  items?: InputMaybe<Array<IIoRestorecommerceCodeCode>>;
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
  parameters?: InputMaybe<Array<IIoRestorecommerceCommandCommandParameter>>;
}

export interface IIoRestorecommerceCommandCommandList {
  items?: InputMaybe<Array<IIoRestorecommerceCommandCommand>>;
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
}

export interface IIoRestorecommerceContactPointContactPointList {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointContactPoint>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCountryCountry {
  countryCode?: InputMaybe<Scalars['String']>;
  economicAreas?: InputMaybe<Array<Scalars['String']>>;
  geographicalName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceCountryCountryList {
  items?: InputMaybe<Array<IIoRestorecommerceCountryCountry>>;
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
}

export interface IIoRestorecommerceCustomerCustomerList {
  items?: InputMaybe<Array<IIoRestorecommerceCustomerCustomer>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceCustomerPrivate {
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
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
  tags?: InputMaybe<Array<Scalars['String']>>;
  thumbnail?: InputMaybe<IIoRestorecommerceImageImage>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFilterFilter {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFilterFilterOp {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
}

export interface IIoRestorecommerceFulfillmentCourierFulfillmentCourier {
  configuration?: InputMaybe<IGoogleProtobufAny>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  stubType?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentCourierFulfillmentCourierList {
  items?: InputMaybe<
    Array<IIoRestorecommerceFulfillmentCourierFulfillmentCourier>
  >;
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
  id?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<IIoRestorecommerceFulfillmentLabel>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  packaging?: InputMaybe<IIoRestorecommerceFulfillmentPackaging>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  trackings?: InputMaybe<Array<IIoRestorecommerceFulfillmentTracking>>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentId {
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
  shipmentNumbers?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentIdList {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentId>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentFulfillmentList {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillment>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentInvoiceRequest {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  sections?: InputMaybe<Array<IIoRestorecommerceFulfillmentInvoiceSection>>;
}

export interface IIoRestorecommerceFulfillmentInvoiceRequestList {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentInvoiceRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentInvoiceSection {
  fulfillmentId?: InputMaybe<Scalars['String']>;
  selectedParcels?: InputMaybe<Array<Scalars['String']>>;
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
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentPackaging {
  exportDescription?: InputMaybe<Scalars['String']>;
  exportType?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  notify?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
  recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  reference?: InputMaybe<IIoRestorecommerceReferenceReference>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
}

export interface IIoRestorecommerceFulfillmentParcel {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceFulfillmentProductFulfillmentProduct {
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
}

export interface IIoRestorecommerceFulfillmentProductFulfillmentProductList {
  items?: InputMaybe<
    Array<IIoRestorecommerceFulfillmentProductFulfillmentProduct>
  >;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentProductPreferences {
  couriers?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  options?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
}

export interface IIoRestorecommerceFulfillmentProductProductQuery {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  receiver?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  referenceId?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
}

export interface IIoRestorecommerceFulfillmentProductProductQueryList {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductProductQuery>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceFulfillmentProductVariant {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxSize?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
}

export interface IIoRestorecommerceFulfillmentTracking {
  details?: InputMaybe<IGoogleProtobufAny>;
  events?: InputMaybe<Array<IIoRestorecommerceFulfillmentEvent>>;
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
  tags?: InputMaybe<Array<Scalars['String']>>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceInvoiceFulfillmentItem {
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoiceInvoice {
  customerId?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  fromDate?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
  sections?: InputMaybe<Array<IIoRestorecommerceInvoiceSection>>;
  sender?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  sent?: InputMaybe<Scalars['Boolean']>;
  shopId?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['IDateTime']>;
  toDate?: InputMaybe<Scalars['IDateTime']>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  userId?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['Boolean']>;
}

export interface IIoRestorecommerceInvoiceInvoiceId {
  channelIds?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
}

export interface IIoRestorecommerceInvoiceInvoiceIdList {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoiceId>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceInvoiceInvoiceList {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceInvoiceManualItem {
  descritpion?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceInvoicePosition {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
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
  amounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  customerRemark?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<IIoRestorecommerceInvoicePosition>>;
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
  type?: InputMaybe<Scalars['String']>;
  when?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceJobJobFilter {
  jobIds?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceJobJobList {
  items?: InputMaybe<Array<IIoRestorecommerceJobJob>>;
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
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
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
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceLocaleLocaleList {
  items?: InputMaybe<Array<IIoRestorecommerceLocaleLocale>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceLocationLocation>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceMetaMeta {
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  created?: InputMaybe<Scalars['IDateTime']>;
  modified?: InputMaybe<Scalars['IDateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
}

export interface IIoRestorecommerceNotificationNotification {
  bodyTemplate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  notificationChannelIds?: InputMaybe<Array<Scalars['String']>>;
  subjectTemplate?: InputMaybe<Scalars['String']>;
  telephoneNumber?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceNotificationNotificationList {
  items?: InputMaybe<Array<IIoRestorecommerceNotificationNotification>>;
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
  selectedItems?: InputMaybe<Array<Scalars['String']>>;
  senderAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
}

export interface IIoRestorecommerceOrderFulfillmentRequestList {
  items?: InputMaybe<Array<IIoRestorecommerceOrderFulfillmentRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrderInvoiceRequest {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  sections?: InputMaybe<Array<IIoRestorecommerceOrderInvoiceSection>>;
}

export interface IIoRestorecommerceOrderInvoiceRequestList {
  items?: InputMaybe<Array<IIoRestorecommerceOrderInvoiceRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrderInvoiceSection {
  fulfillmentMode?: InputMaybe<IoRestorecommerceOrderFulfillmentInvoiceMode>;
  orderId?: InputMaybe<Scalars['String']>;
  selectedFulfillments?: InputMaybe<
    Array<IIoRestorecommerceFulfillmentInvoiceSection>
  >;
  selectedItems?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceOrderItem {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
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
  fulfillmentState?: InputMaybe<IoRestorecommerceFulfillmentState>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceOrderItem>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  notificationEmail?: InputMaybe<Scalars['String']>;
  orderState?: InputMaybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  shippingAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  shopId?: InputMaybe<Scalars['String']>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  userId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceOrderOrderIdList {
  ids?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceOrderOrderList {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrder>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceOrganizationOrganization {
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
}

export interface IIoRestorecommerceOrganizationOrganizationList {
  items?: InputMaybe<Array<IIoRestorecommerceOrganizationOrganization>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceOstorageCopyRequestItem>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceOstorageMoveRequestItem>>;
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
  tags?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
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
  items?: InputMaybe<Array<IIoRestorecommercePaymentItem>>;
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
  rules?: InputMaybe<Array<Scalars['String']>>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommercePolicyPolicyList {
  items?: InputMaybe<Array<IIoRestorecommercePolicyPolicy>>;
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
  policies?: InputMaybe<Array<Scalars['String']>>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
}

export interface IIoRestorecommercePolicySetPolicySetList {
  items?: InputMaybe<Array<IIoRestorecommercePolicySetPolicySet>>;
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
  items?: InputMaybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
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
  taxIds?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceProductAssociation {
  data?: InputMaybe<IGoogleProtobufAny>;
  productId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<IoRestorecommerceProductAssociationType>;
}

export interface IIoRestorecommerceProductBundle {
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  prePackaged?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  products?: InputMaybe<Array<IIoRestorecommerceProductBundleProduct>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
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
  taxIds?: InputMaybe<Array<Scalars['String']>>;
  virtual?: InputMaybe<IIoRestorecommerceProductVirtualProduct>;
}

export interface IIoRestorecommerceProductPackage {
  rotatable?: InputMaybe<Scalars['Boolean']>;
  sizeInCm?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: InputMaybe<Scalars['Float']>;
}

export interface IIoRestorecommerceProductPhysicalProduct {
  variants?: InputMaybe<Array<IIoRestorecommerceProductPhysicalVariant>>;
}

export interface IIoRestorecommerceProductPhysicalVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  templateVariant?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductProduct {
  active?: InputMaybe<Scalars['Boolean']>;
  associations?: InputMaybe<Array<IIoRestorecommerceProductAssociation>>;
  bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
  data?: InputMaybe<IGoogleProtobufAny>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  product?: InputMaybe<IIoRestorecommerceProductIndividualProduct>;
  shopId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceProductProductList {
  items?: InputMaybe<Array<IIoRestorecommerceProductProduct>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceProductServiceProduct {
  variants?: InputMaybe<Array<IIoRestorecommerceProductServiceVariant>>;
}

export interface IIoRestorecommerceProductServiceVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  templateVariant?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceProductVirtualProduct {
  variants?: InputMaybe<Array<IIoRestorecommerceProductVirtualVariant>>;
}

export interface IIoRestorecommerceProductVirtualVariant {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  templateVariant?: InputMaybe<Scalars['String']>;
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
  analyzers?: InputMaybe<Array<Scalars['String']>>;
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceResourcebaseFieldFilter {
  include?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseFilter {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseFilterOp {
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
}

export interface IIoRestorecommerceResourcebaseReadRequest {
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
}

export interface IIoRestorecommerceResourcebaseSearch {
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceResourcebaseSort {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
}

export interface IIoRestorecommerceRoleRole {
  assignableByRoles?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceRoleRoleList {
  items?: InputMaybe<Array<IIoRestorecommerceRoleRole>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceRuleContextQuery {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceRuleRule>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceRuleTarget {
  actions?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  resources?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  subjects?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
}

export interface IIoRestorecommerceSearchSearchRequest {
  acls?: InputMaybe<Array<Scalars['String']>>;
  collection?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceStatusStatus {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTaxTax {
  countryId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  rate?: InputMaybe<Scalars['Float']>;
  typeId?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTaxTaxList {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTax>>;
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
  items?: InputMaybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTimezoneTimezone {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
}

export interface IIoRestorecommerceTimezoneTimezoneList {
  items?: InputMaybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
}

export interface IIoRestorecommerceTokenGrantId {
  grantId?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTokenIdentifier {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

export interface IIoRestorecommerceTokenTokenData {
  expiresIn?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  type?: InputMaybe<Scalars['String']>;
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
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
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
  orgIds?: InputMaybe<Array<Scalars['String']>>;
}

export interface IIoRestorecommerceUserRegisterRequest {
  captchaCode?: InputMaybe<Scalars['String']>;
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
  lastAccess?: InputMaybe<Scalars['Float']>;
  lastName?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  roleAssociations?: InputMaybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: InputMaybe<Scalars['String']>;
  tokens?: InputMaybe<Array<IIoRestorecommerceAuthTokens>>;
  unauthenticated?: InputMaybe<Scalars['Boolean']>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
}

export interface IIoRestorecommerceUserUserList {
  items?: InputMaybe<Array<IIoRestorecommerceUserUser>>;
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

export interface IndexingMutation {
  __typename?: 'IndexingMutation';
  search: IndexingSearchMutation;
}

export interface IndexingSearchMutation {
  __typename?: 'IndexingSearchMutation';
  Search?: Maybe<ProtoIoRestorecommerceSearchSearchResponse>;
}

export interface IndexingSearchMutationSearchArgs {
  input: IIoRestorecommerceSearchSearchRequest;
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
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
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
  items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
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
  vats?: Maybe<Array<IoRestorecommerceAmountVat>>;
}

export interface IoRestorecommerceAmountVat {
  __typename?: 'IoRestorecommerceAmountVAT';
  tax?: Maybe<IoRestorecommerceTaxTax>;
  taxId?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceAttributeAttribute {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAuthRoleAssociation {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceAuthTokens {
  __typename?: 'IoRestorecommerceAuthTokens';
  expiresIn?: Maybe<Scalars['Float']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
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
  items?: Maybe<
    Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>
  >;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceAuthenticationLogAuthenticationLogResponse {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCodeCode {
  __typename?: 'IoRestorecommerceCodeCode';
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
  sector?: Maybe<IoRestorecommerceCodeSector>;
  status?: Maybe<IoRestorecommerceCodeStatusCode>;
  symbol?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCodeCodeListResponse {
  __typename?: 'IoRestorecommerceCodeCodeListResponse';
  items?: Maybe<Array<IoRestorecommerceCodeCodeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCodeCodeResponse {
  __typename?: 'IoRestorecommerceCodeCodeResponse';
  payload?: Maybe<IoRestorecommerceCodeCode>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export enum IoRestorecommerceCodeSector {
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

export enum IoRestorecommerceCodeStatusCode {
  Added = 'ADDED',
  ChangedCharacteristic = 'CHANGED_CHARACTERISTIC',
  ChangedName = 'CHANGED_NAME',
  Deprecated = 'DEPRECATED',
  MarkedAsDeleted = 'MARKED_AS_DELETED',
  Reinstated = 'REINSTATED',
}

export interface IoRestorecommerceCommandCommand {
  __typename?: 'IoRestorecommerceCommandCommand';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<IoRestorecommerceCommandCommandParameter>>;
}

export interface IoRestorecommerceCommandCommandListResponse {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
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
  contactPointType?: Maybe<
    Array<IoRestorecommerceContactPointTypeContactPointType>
  >;
  contactPointTypeIds?: Maybe<Array<Scalars['String']>>;
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
  items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
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
  items?: Maybe<
    Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>
  >;
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
  economicAreas?: Maybe<Array<Scalars['String']>>;
  geographicalName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceCountryCountryListResponse {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceCountryCountryResponse {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceCurrencyCurrency {
  __typename?: 'IoRestorecommerceCurrencyCurrency';
  countryId?: Maybe<Scalars['String']>;
  customExchangeRates?: Maybe<Array<IoRestorecommerceCurrencyExchangeRate>>;
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
}

export interface IoRestorecommerceCustomerCustomerListResponse {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
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
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
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
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<IoRestorecommerceImageImage>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFilterFilter {
  __typename?: 'IoRestorecommerceFilterFilter';
  field?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFilterFilterOp {
  __typename?: 'IoRestorecommerceFilterFilterOp';
  filters?: Maybe<Array<IoRestorecommerceFilterFilter>>;
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
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  stubType?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  items?: Maybe<
    Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>
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
  id?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  trackings?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
}

export interface IoRestorecommerceFulfillmentFulfillmentListResponse {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentFulfillmentResponse {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
  url?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentPackaging {
  __typename?: 'IoRestorecommerceFulfillmentPackaging';
  exportDescription?: Maybe<Scalars['String']>;
  exportType?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  notify?: Maybe<Scalars['String']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
}

export interface IoRestorecommerceFulfillmentParcel {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceFulfillmentItem>>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceFulfillmentProductFulfillmentProduct {
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
}

export interface IoRestorecommerceFulfillmentProductFulfillmentProductListResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  items?: Maybe<
    Array<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>
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
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  compactness?: Maybe<Scalars['Float']>;
  homogeneity?: Maybe<Scalars['Float']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  score?: Maybe<Scalars['Float']>;
}

export interface IoRestorecommerceFulfillmentProductPackingSolutionListResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  items?: Maybe<
    Array<IoRestorecommerceFulfillmentProductPackingSolutionResponse>
  >;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceFulfillmentProductPackingSolutionResponse {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponse';
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolution>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceFulfillmentProductPreferences {
  __typename?: 'IoRestorecommerceFulfillmentProductPreferences';
  couriers?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  options?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
}

export interface IoRestorecommerceFulfillmentProductVariant {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
}

export enum IoRestorecommerceFulfillmentState {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Fulfilled = 'FULFILLED',
  Invalid = 'INVALID',
  InTransit = 'IN_TRANSIT',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN',
}

export interface IoRestorecommerceFulfillmentTracking {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  details?: Maybe<GoogleProtobufAny>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
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
  tags?: Maybe<Array<Scalars['String']>>;
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
  documents?: Maybe<Array<IoRestorecommerceFileFile>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentHints?: Maybe<Array<Scalars['String']>>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: Maybe<IoRestorecommerceAddressBillingAddress>;
  references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
  sections?: Maybe<Array<IoRestorecommerceInvoiceSection>>;
  sender?: Maybe<IoRestorecommerceAddressBillingAddress>;
  sent?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  toDate?: Maybe<Scalars['DateTime']>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
  withdrawn?: Maybe<Scalars['Boolean']>;
}

export interface IoRestorecommerceInvoiceInvoiceListResponse {
  __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
  items?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceInvoiceInvoiceNumberResponse {
  __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
  invoiceNumber?: Maybe<Scalars['String']>;
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
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
}

export enum IoRestorecommerceInvoicePaymentState {
  Payed = 'PAYED',
  Unpayed = 'UNPAYED',
}

export interface IoRestorecommerceInvoicePosition {
  __typename?: 'IoRestorecommerceInvoicePosition';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  customerRemark?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<IoRestorecommerceInvoicePosition>>;
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
  type?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceJobJobListResponse {
  __typename?: 'IoRestorecommerceJobJobListResponse';
  items?: Maybe<Array<IoRestorecommerceJobJobResponse>>;
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
  value?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceLocaleLocaleListResponse {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
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
  items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
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
  items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
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
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  created?: Maybe<Scalars['DateTime']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
}

export interface IoRestorecommerceNotificationNotification {
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
}

export interface IoRestorecommerceNotificationNotificationListResponse {
  __typename?: 'IoRestorecommerceNotificationNotificationListResponse';
  items?: Maybe<Array<IoRestorecommerceNotificationNotificationResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceNotificationNotificationResponse {
  __typename?: 'IoRestorecommerceNotificationNotificationResponse';
  items?: Maybe<IoRestorecommerceNotificationNotification>;
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
  services?: Maybe<Array<Scalars['String']>>;
}

export enum IoRestorecommerceOrderFulfillmentInvoiceMode {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE',
}

export interface IoRestorecommerceOrderItem {
  __typename?: 'IoRestorecommerceOrderItem';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
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
  fulfillmentState?: Maybe<IoRestorecommerceFulfillmentState>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceOrderItem>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  notificationEmail?: Maybe<Scalars['String']>;
  orderState?: Maybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: Maybe<IoRestorecommerceFulfillmentProductPreferences>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  shippingAddress?: Maybe<IoRestorecommerceAddressShippingAddress>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  userId?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceOrderOrderListResponse {
  __typename?: 'IoRestorecommerceOrderOrderListResponse';
  items?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
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
  Created = 'CREATED',
  Done = 'DONE',
  Failed = 'FAILED',
  Invalid = 'INVALID',
  InProcess = 'IN_PROCESS',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN',
}

export interface IoRestorecommerceOrganizationOrganization {
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
}

export interface IoRestorecommerceOrganizationOrganizationListResponse {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
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
  responses?: Maybe<
    Array<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>
  >;
}

export interface IoRestorecommerceOstorageCopyResponsePayloadWithStatus {
  __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceOstorageListResponse {
  __typename?: 'IoRestorecommerceOstorageListResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<
    Array<IoRestorecommerceOstorageObjectsDataWithPayloadStatus>
  >;
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
  responses?: Maybe<
    Array<IoRestorecommerceOstorageMoveResponsePayloadWithStatus>
  >;
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
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  rules?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicyPolicyListResponse {
  __typename?: 'IoRestorecommercePolicyPolicyListResponse';
  items?: Maybe<Array<IoRestorecommercePolicyPolicyResponse>>;
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
  rules?: Maybe<Array<IoRestorecommerceRuleRuleRq>>;
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
  policies?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
}

export interface IoRestorecommercePolicySetPolicySetListResponse {
  __typename?: 'IoRestorecommercePolicySetPolicySetListResponse';
  items?: Maybe<Array<IoRestorecommercePolicySetPolicySetResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommercePolicySetPolicySetRq {
  __typename?: 'IoRestorecommercePolicySetPolicySetRQ';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  id?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<IoRestorecommercePolicyPolicyRq>>;
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
  items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
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
  taxIds?: Maybe<Array<Scalars['String']>>;
  taxes?: Maybe<Array<IoRestorecommerceTaxTax>>;
}

export interface IoRestorecommerceProductAssociation {
  __typename?: 'IoRestorecommerceProductAssociation';
  data?: Maybe<GoogleProtobufAny>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<IoRestorecommerceProductAssociationType>;
}

export enum IoRestorecommerceProductAssociationType {
  Accessory = 'Accessory',
  Miscellaneous = 'Miscellaneous',
  Recommendation = 'Recommendation',
}

export interface IoRestorecommerceProductBundle {
  __typename?: 'IoRestorecommerceProductBundle';
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  prePackaged?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  products?: Maybe<Array<IoRestorecommerceProductBundleProduct>>;
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
  items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
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
  taxIds?: Maybe<Array<Scalars['String']>>;
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
  variants?: Maybe<Array<IoRestorecommerceProductPhysicalVariant>>;
}

export interface IoRestorecommerceProductPhysicalVariant {
  __typename?: 'IoRestorecommerceProductPhysicalVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  templateVariant?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductProduct {
  __typename?: 'IoRestorecommerceProductProduct';
  active?: Maybe<Scalars['Boolean']>;
  associations?: Maybe<Array<IoRestorecommerceProductAssociation>>;
  bundle?: Maybe<IoRestorecommerceProductBundle>;
  data?: Maybe<GoogleProtobufAny>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  product?: Maybe<IoRestorecommerceProductIndividualProduct>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
}

export interface IoRestorecommerceProductProductListResponse {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
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
  items?: Maybe<
    Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>
  >;
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
  variants?: Maybe<Array<IoRestorecommerceProductServiceVariant>>;
}

export interface IoRestorecommerceProductServiceVariant {
  __typename?: 'IoRestorecommerceProductServiceVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  templateVariant?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceProductVirtualProduct {
  __typename?: 'IoRestorecommerceProductVirtualProduct';
  variants?: Maybe<Array<IoRestorecommerceProductVirtualVariant>>;
}

export interface IoRestorecommerceProductVirtualVariant {
  __typename?: 'IoRestorecommerceProductVirtualVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  templateVariant?: Maybe<Scalars['String']>;
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
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
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
  assignableByRoles?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceRoleRoleListResponse {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
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
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
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
  items?: Maybe<Array<IoRestorecommerceRuleRuleResponse>>;
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
  actions?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  resources?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  subjects?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
}

export interface IoRestorecommerceSearchSearchResponse {
  __typename?: 'IoRestorecommerceSearchSearchResponse';
  data?: Maybe<Array<GoogleProtobufAny>>;
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
  shopNumber?: Maybe<Scalars['String']>;
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
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
}

export interface IoRestorecommerceTaxTax {
  __typename?: 'IoRestorecommerceTaxTax';
  country?: Maybe<IoRestorecommerceCountryCountry>;
  countryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  rate?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  typeId?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
}

export interface IoRestorecommerceTaxTaxListResponse {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
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
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTaxTypeTaxTypeResponse {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
  payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceTimezoneTimezone {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
}

export interface IoRestorecommerceTimezoneTimezoneListResponse {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceTimezoneTimezoneResponse {
  __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
  payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
}

export interface IoRestorecommerceUserDeleteUsersByOrgResponse {
  __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  userIds?: Maybe<Array<Scalars['String']>>;
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
  lastAccess?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  localeId?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
}

export interface IoRestorecommerceUserUserListResponse {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface IoRestorecommerceUserUserListWithRoleResponse {
  __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserRoleResponse>>;
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
  lastAccess?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  localeId?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  roles?: Maybe<Array<IoRestorecommerceRoleRole>>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
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
  indexing: IndexingMutation;
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
  Submit?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
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
  input: IIoRestorecommerceOrderInvoiceRequestList;
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
  input: IIoRestorecommerceOrderInvoiceRequestList;
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

export interface ProtoIoRestorecommerceCodeCodeListResponse {
  __typename?: 'ProtoIoRestorecommerceCodeCodeListResponse';
  details?: Maybe<IoRestorecommerceCodeCodeListResponse>;
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

export interface ProtoIoRestorecommerceSearchSearchResponse {
  __typename?: 'ProtoIoRestorecommerceSearchSearchResponse';
  details?: Maybe<IoRestorecommerceSearchSearchResponse>;
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

export interface ProtoIoRestorecommerceTimezoneTimezoneListResponse {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
}

export interface ProtoIoRestorecommerceUserDeleteUsersByOrgResponse {
  __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
  details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
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

export interface ResourceCodeMutation {
  __typename?: 'ResourceCodeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCodeCodeListResponse>;
}

export interface ResourceCodeMutationDeleteArgs {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}

export interface ResourceCodeMutationMutateArgs {
  input: IIoRestorecommerceCodeCodeList;
}

export interface ResourceCodeQuery {
  __typename?: 'ResourceCodeQuery';
  Read?: Maybe<ProtoIoRestorecommerceCodeCodeListResponse>;
}

export interface ResourceCodeQueryReadArgs {
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
  code: ResourceCodeMutation;
  command: ResourceCommandMutation;
  contact_point: ResourceContactPointMutation;
  contact_point_type: ResourceContactPointTypeMutation;
  country: ResourceCountryMutation;
  customer: ResourceCustomerMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  tax: ResourceTaxMutation;
  tax_type: ResourceTaxTypeMutation;
  timezone: ResourceTimezoneMutation;
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
  code: ResourceCodeQuery;
  command: ResourceCommandQuery;
  contact_point: ResourceContactPointQuery;
  contact_point_type: ResourceContactPointTypeQuery;
  country: ResourceCountryQuery;
  customer: ResourceCustomerQuery;
  locale: ResourceLocaleQuery;
  location: ResourceLocationQuery;
  organization: ResourceOrganizationQuery;
  tax: ResourceTaxQuery;
  tax_type: ResourceTaxTypeQuery;
  timezone: ResourceTimezoneQuery;
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

export type IdentityUserDeleteMutationVariables = Exact<{
  input: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export type IdentityUserDeleteMutation = {
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

export type IdentityUserFindByTokenQueryVariables = Exact<{
  input: IIoRestorecommerceUserFindByTokenRequest;
}>;

export type IdentityUserFindByTokenQuery = {
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
            name?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            defaultScope?: string | null;
            localeId?: string | null;
            timezoneId?: string | null;
            userType?: IoRestorecommerceUserUserType | null;
            roleAssociations?: Array<{
              __typename?: 'IoRestorecommerceAuthRoleAssociation';
              role?: string | null;
            }> | null;
          } | null;
        } | null;
      } | null;
    };
  };
};

export type IdentityUserFindQueryVariables = Exact<{
  input: IIoRestorecommerceUserFindRequest;
}>;

export type IdentityUserFindQuery = {
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
              name?: string | null;
              firstName?: string | null;
              lastName?: string | null;
              defaultScope?: string | null;
              localeId?: string | null;
              timezoneId?: string | null;
              userType?: IoRestorecommerceUserUserType | null;
              roleAssociations?: Array<{
                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                role?: string | null;
              }> | null;
            } | null;
          }> | null;
        } | null;
      } | null;
    };
  };
};

export type IdentityUserMutateMutationVariables = Exact<{
  input: IIoRestorecommerceUserUserList;
}>;

export type IdentityUserMutateMutation = {
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
              name?: string | null;
              firstName?: string | null;
              lastName?: string | null;
              defaultScope?: string | null;
              localeId?: string | null;
              timezoneId?: string | null;
              userType?: IoRestorecommerceUserUserType | null;
              roleAssociations?: Array<{
                __typename?: 'IoRestorecommerceAuthRoleAssociation';
                role?: string | null;
              }> | null;
            } | null;
          }> | null;
        } | null;
      } | null;
    };
  };
};

export type ActivateMutationVariables = Exact<{
  input: IIoRestorecommerceUserActivateRequest;
}>;

export type ActivateMutation = {
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

export type ConfirmPasswordChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
}>;

export type ConfirmPasswordChangeMutation = {
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

export type RegisterMutationVariables = Exact<{
  input: IIoRestorecommerceUserRegisterRequest;
}>;

export type RegisterMutation = {
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
            name?: string | null;
            email?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            userType?: IoRestorecommerceUserUserType | null;
            activationCode?: string | null;
            active?: boolean | null;
            roleAssociations?: Array<{
              __typename?: 'IoRestorecommerceAuthRoleAssociation';
              id?: string | null;
              role?: string | null;
            }> | null;
          } | null;
        } | null;
      } | null;
    };
  };
};

export type RequestPasswordChangeMutationVariables = Exact<{
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
}>;

export type RequestPasswordChangeMutation = {
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

export type MasterDataLocaleReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export type MasterDataLocaleReadQuery = {
  __typename?: 'Query';
  master_data: {
    __typename?: 'ResourceQuery';
    locale: {
      __typename?: 'ResourceLocaleQuery';
      Read?: {
        __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
        details?: {
          __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
          items?: Array<{
            __typename?: 'IoRestorecommerceLocaleLocaleResponse';
            payload?: {
              __typename?: 'IoRestorecommerceLocaleLocale';
              id?: string | null;
              description?: string | null;
              value?: string | null;
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

export type MasterDataTimezoneReadQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;

export type MasterDataTimezoneReadQuery = {
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
              description?: string | null;
            } | null;
          }> | null;
        } | null;
      } | null;
    };
  };
};

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
              id
              active
              activationCode
              email
              name
              firstName
              lastName
              defaultScope
              localeId
              timezoneId
              userType
              roleAssociations {
                role
              }
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
                id
                active
                activationCode
                email
                name
                firstName
                lastName
                defaultScope
                localeId
                timezoneId
                userType
                roleAssociations {
                  role
                }
              }
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
                id
                active
                activationCode
                email
                name
                firstName
                lastName
                defaultScope
                localeId
                timezoneId
                userType
                roleAssociations {
                  role
                }
              }
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
export class IdentityUserMutateGQL extends Apollo.Mutation<
  IdentityUserMutateMutation,
  IdentityUserMutateMutationVariables
> {
  override document = IdentityUserMutateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ActivateDocument = gql`
  mutation Activate($input: IIoRestorecommerceUserActivateRequest!) {
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
export class ActivateGQL extends Apollo.Mutation<
  ActivateMutation,
  ActivateMutationVariables
> {
  override document = ActivateDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ConfirmPasswordChangeDocument = gql`
  mutation ConfirmPasswordChange(
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
export class ConfirmPasswordChangeGQL extends Apollo.Mutation<
  ConfirmPasswordChangeMutation,
  ConfirmPasswordChangeMutationVariables
> {
  override document = ConfirmPasswordChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RegisterDocument = gql`
  mutation Register($input: IIoRestorecommerceUserRegisterRequest!) {
    identity {
      user {
        Register(input: $input) {
          details {
            status {
              code
              message
            }
            payload {
              id
              name
              email
              firstName
              lastName
              userType
              activationCode
              active
              roleAssociations {
                id
                role
              }
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
export class RegisterGQL extends Apollo.Mutation<
  RegisterMutation,
  RegisterMutationVariables
> {
  override document = RegisterDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RequestPasswordChangeDocument = gql`
  mutation RequestPasswordChange(
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
export class RequestPasswordChangeGQL extends Apollo.Mutation<
  RequestPasswordChangeMutation,
  RequestPasswordChangeMutationVariables
> {
  override document = RequestPasswordChangeDocument;

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
            items {
              payload {
                id
                description
                value
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
                id
                description
              }
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
export class MasterDataTimezoneReadGQL extends Apollo.Query<
  MasterDataTimezoneReadQuery,
  MasterDataTimezoneReadQueryVariables
> {
  override document = MasterDataTimezoneReadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
