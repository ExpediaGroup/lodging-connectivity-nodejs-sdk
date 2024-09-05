import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CountryCode: { input: any; output: any; }
  CurrencyCode: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

/** Address detail. */
export type Address = {
  __typename?: 'Address';
  /** Each line represents one physical or logical line of the address, typically containing undifferentiated portions such as street name and number, post box numbers, building numbers, etc. They are called "lines" and declared as an array because addresses are frequently divided onto multiple lines and this encoding allows that fact to be preserved. */
  addressLines: Array<Scalars['String']['output']>;
  /** The name of the state, province, or region. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** The short code for the administrative area. */
  administrativeAreaCode?: Maybe<Scalars['String']['output']>;
  /** The country code. */
  countryCode: Scalars['CountryCode']['output'];
  /** The name of the city, town or commune. */
  locality: Scalars['String']['output'];
  /** The postal code. */
  postalCode: Scalars['String']['output'];
  /** The name of the neighborhood, borough, or district. */
  subLocality?: Maybe<Scalars['String']['output']>;
};

/** Bank Issued card. */
export type BankIssuedCard = {
  __typename?: 'BankIssuedCard';
  /** DateTime when the EVC card is active. */
  activationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Customer information. */
  customer: PaymentInstrumentCustomer;
  /** Expedia virtual card activity. */
  expediaVirtualCardActivity?: Maybe<ExpediaVirtualCardActivity>;
  /** Card expiration date. */
  expirationDate: Scalars['String']['output'];
  /** Credit Card brand issuer name. i.e Visa, Mastercard... */
  issuerName: Scalars['String']['output'];
  /** Card number. */
  number: Scalars['String']['output'];
  /** Card type. */
  type: PaymentType;
  /** CVV/CSV code. */
  verificationNumber?: Maybe<Scalars['String']['output']>;
};

/** Expedia virtual card. */
export type ExpediaVirtualCardActivity = {
  __typename?: 'ExpediaVirtualCardActivity';
  availableBalance?: Maybe<Money>;
  chargeStatus?: Maybe<ExpediaVirtualCardChargeStatus>;
  chargedAmount?: Maybe<Money>;
};

export enum ExpediaVirtualCardChargeStatus {
  ChargeComplete = 'CHARGE_COMPLETE',
  Deactivated = 'DEACTIVATED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  ReadyToCharge = 'READY_TO_CHARGE',
  ReadyToChargeOnCheckInDate = 'READY_TO_CHARGE_ON_CHECK_IN_DATE'
}

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float']['output'];
  currency: Scalars['CurrencyCode']['output'];
};

/** Payment instrument detail. */
export type PaymentInstrument = BankIssuedCard;

/** Customer info detail. */
export type PaymentInstrumentCustomer = {
  __typename?: 'PaymentInstrumentCustomer';
  /** Address of the customer. */
  address?: Maybe<Address>;
  /** Full name of the customer */
  fullName: Scalars['String']['output'];
};

/** Payment method one of EXPEDIA_VIRTUAL_CARD | GUEST_CREDIT_CARD. */
export enum PaymentType {
  ExpediaVirtualCard = 'EXPEDIA_VIRTUAL_CARD',
  GuestCreditCard = 'GUEST_CREDIT_CARD'
}

export type Query = {
  __typename?: 'Query';
  /** Retrieve Payment instrument from external payment instrument token */
  paymentInstrument?: Maybe<PaymentInstrument>;
};


export type QueryPaymentInstrumentArgs = {
  token: Scalars['String']['input'];
};

export type PaymentInstrumentQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type PaymentInstrumentQuery = { __typename?: 'Query', paymentInstrument?: { __typename?: 'BankIssuedCard', activationDate?: any | null, expirationDate: string, issuerName: string, number: string, type: PaymentType, verificationNumber?: string | null, customer: { __typename?: 'PaymentInstrumentCustomer', fullName: string, address?: { __typename?: 'Address', addressLines: Array<string>, administrativeArea?: string | null, administrativeAreaCode?: string | null, countryCode: any, locality: string, postalCode: string, subLocality?: string | null } | null }, expediaVirtualCardActivity?: { __typename?: 'ExpediaVirtualCardActivity', chargeStatus?: ExpediaVirtualCardChargeStatus | null, availableBalance?: { __typename?: 'Money', amount: number, currency: any } | null, chargedAmount?: { __typename?: 'Money', amount: number, currency: any } | null } | null } | null };


export const PaymentInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaymentInstrument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentInstrument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BankIssuedCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activationDate"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLines"}},{"kind":"Field","name":{"kind":"Name","value":"administrativeArea"}},{"kind":"Field","name":{"kind":"Name","value":"administrativeAreaCode"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"locality"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"subLocality"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expediaVirtualCardActivity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chargeStatus"}},{"kind":"Field","name":{"kind":"Name","value":"chargedAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"issuerName"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"verificationNumber"}}]}}]}}]}}]} as unknown as DocumentNode<PaymentInstrumentQuery, PaymentInstrumentQueryVariables>;