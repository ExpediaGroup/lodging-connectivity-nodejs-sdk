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
