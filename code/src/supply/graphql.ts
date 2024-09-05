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
  /** An ISO 3166-1 alpha-3 CountryCode Scalar */
  CountryCode: { input: any; output: any; }
  /** A 3-letter currency code defined in ISO 4217 scalar */
  CurrencyCode: { input: any; output: any; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
  /** A slightly refined version of RFC-3339 compliant DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** An arbitrary-precision and scale decimal number, serialized as a string. */
  Decimal: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A type representing a date with no timezone in YYYY-MM-DD. ex: 2007-12-03 */
  LocalDate: { input: any; output: any; }
  /** A type representing a date time with no timezone in format YYYY-MM-DDTHH:mm:ss. ex: 2007-12-03T10:15:30 */
  LocalDateTime: { input: any; output: any; }
  /** A type representing a time with no time zone in format HH:mm:ss or HH:mm. ex: 10:15:30, 10:15 */
  LocalTime: { input: any; output: any; }
  /** A IETF BCP 47 language tag */
  Locale: { input: any; output: any; }
  /** Represents a Uniform Resource Locator (URL), as defined by RFC 3986, serialized as a JSON string. */
  Url: { input: any; output: any; }
  /** A type representing a date time with a timezone in format YYYY-MM-DDTHH:mm:ssTZD, TZD is a time zone designator in the form +/-hh:mm) */
  ZoneDateTime: { input: any; output: any; }
};

export type AcceptedPaymentForms = {
  __typename?: 'AcceptedPaymentForms';
  paymentCardDescriptors: Array<PaymentCardDescriptor>;
  paymentInvoiceDescriptors: Array<PaymentInvoiceDescriptor>;
};

export type AcceptedPaymentFormsInput = {
  paymentCardDescriptors?: InputMaybe<Array<PaymentCardDescriptorInput>>;
  paymentInvoiceDescriptors?: InputMaybe<Array<PaymentInvoiceDescriptorInput>>;
};

export type AcceptedPaymentFormsMetadata = {
  __typename?: 'AcceptedPaymentFormsMetadata';
  paymentCardDescriptors: PaymentCardDescriptorMetadata;
  paymentInvoiceDescriptors: PaymentInvoiceDescriptorMetadata;
};

/** Acknowledgement record for a bookable unit. */
export type AcknowledgementRecord = {
  __typename?: 'AcknowledgementRecord';
  /** Type of acknowledgement record. */
  acknowledgementType?: Maybe<AcknowledgementType>;
  /** ID of the acknowledgement record. */
  id?: Maybe<Scalars['String']['output']>;
  /** Date when the acknowledgment record was last updated. */
  lastUpdated?: Maybe<Scalars['String']['output']>;
};

/** Acknowledgement record information for a bookable unit. */
export type AcknowledgementRecordInput = {
  /** Type of acknowledgement record. */
  acknowledgementType?: InputMaybe<AcknowledgementType>;
  /** ID of the acknowledgement record. */
  id: Scalars['String']['input'];
};

/** Acknowledgement type values. */
export enum AcknowledgementType {
  LtrPolicy = 'LTR_POLICY',
  Platform = 'PLATFORM',
  PlatformAck = 'PLATFORM_ACK',
  PlatformAckStatement = 'PLATFORM_ACK_STATEMENT',
  PlatformAttestation = 'PLATFORM_ATTESTATION',
  PlatformAttestationDsa = 'PLATFORM_ATTESTATION_DSA',
  PlatformAttestationLegal = 'PLATFORM_ATTESTATION_LEGAL',
  PlatformAttestationLink = 'PLATFORM_ATTESTATION_LINK',
  PlatformAttestationNevada = 'PLATFORM_ATTESTATION_NEVADA',
  PlatformAttestationVer = 'PLATFORM_ATTESTATION_VER',
  PlatformCertify = 'PLATFORM_CERTIFY',
  PlatformComply = 'PLATFORM_COMPLY',
  PlatformJapan = 'PLATFORM_JAPAN',
  PlatformLegal = 'PLATFORM_LEGAL',
  PlatformRead = 'PLATFORM_READ'
}

export type ActiveStatus = {
  __typename?: 'ActiveStatus';
  /** Whether the property or unit is live in the Expedia Group system */
  active: Scalars['Boolean']['output'];
  /** Top-level property or unit status derived from supporting checkpoints */
  statusCheckpoint: StatusCheckpoint;
};

export type AddMessageThreadMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  body?: InputMaybe<MessageThreadLocalizedStringInput>;
};

/** Additional parameters to meet onboarding requirements. */
export type AdditionalDataRequirement = {
  __typename?: 'AdditionalDataRequirement';
  /** Grouping to which the field belongs, for UI layout purposes. */
  group?: Maybe<Scalars['String']['output']>;
  /** Description of the group, to be localized. */
  groupLocalized?: Maybe<Scalars['String']['output']>;
  /** Whether the data is optional. */
  isOptional?: Maybe<Scalars['String']['output']>;
  /** Field name for the information to be captured. */
  key: Scalars['String']['output'];
  /** Description of the key, to be localized. */
  keyLocalized?: Maybe<Scalars['String']['output']>;
  /** Subtype of data. */
  subtype?: Maybe<Scalars['String']['output']>;
  /** Description of subtype, to be localized. */
  subtypeLocalized?: Maybe<Scalars['String']['output']>;
  /** Type of data. */
  type?: Maybe<Scalars['String']['output']>;
  /** Description of type, to be localized. */
  typeLocalized?: Maybe<Scalars['String']['output']>;
};

export type Address = {
  __typename?: 'Address';
  addressLines: Array<Scalars['String']['output']>;
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** @deprecated deprecated, replace with locality */
  city: Scalars['String']['output'];
  /** @deprecated deprecated, replace with countryCode */
  country: Scalars['CountryCode']['output'];
  countryCode: Scalars['CountryCode']['output'];
  /** @deprecated deprecated, replace with addressLines */
  line1: Scalars['String']['output'];
  /** @deprecated deprecated, replace with addressLines */
  line2: Scalars['String']['output'];
  /** @deprecated deprecated, replace with addressLines */
  line3: Scalars['String']['output'];
  locality: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  /** @deprecated deprecated, replace with administrativeArea */
  province?: Maybe<Scalars['String']['output']>;
};

export enum AdoptionType {
  All = 'ALL',
  List = 'LIST',
  Unrecognized = 'UNRECOGNIZED'
}

export type AgeRange = {
  __typename?: 'AgeRange';
  maxAge?: Maybe<Scalars['Int']['output']>;
  minAge?: Maybe<Scalars['Int']['output']>;
};

export type AgeRangeInput = {
  maxAge: Scalars['Int']['input'];
  minAge: Scalars['Int']['input'];
};

export type AgeRangeMetadata = {
  __typename?: 'AgeRangeMetadata';
  maxAge: Scalars['Int']['output'];
  minAge: Scalars['Int']['output'];
};

export type AggregatedReviewBrandScore = {
  __typename?: 'AggregatedReviewBrandScore';
  /** Brand name to which the aggregated score belong to */
  brandName: ReviewBrand;
  /** Score for each category of Review */
  categoriesWithScore: Array<ReviewCategoryScore>;
  /** total number of reviews for that brand name */
  totalReviewsCount: Scalars['Int']['output'];
};

export type AggregatedReviewsFiltersInput = {
  brandNames: Array<ReviewBrand>;
};

export type AggregatedReviewsResponse = {
  __typename?: 'AggregatedReviewsResponse';
  /** all the brands and their respective aggregated score  for the property */
  brandsWithScores: Array<AggregatedReviewBrandScore>;
};

export type AllowedEvents = {
  __typename?: 'AllowedEvents';
  maxAttendees?: Maybe<Scalars['Int']['output']>;
  types: Array<Scalars['String']['output']>;
};

export type AllowedEventsInput = {
  maxAttendees?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AllowedEventsMetadata = {
  __typename?: 'AllowedEventsMetadata';
  types: Array<Scalars['String']['output']>;
};

export type AllowedPets = {
  __typename?: 'AllowedPets';
  maxAllowed?: Maybe<Scalars['Int']['output']>;
  maxWeight?: Maybe<Weight>;
  types: Array<Scalars['String']['output']>;
};

export type AllowedPetsInput = {
  maxAllowed?: InputMaybe<Scalars['Int']['input']>;
  maxWeight?: InputMaybe<WeightInput>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AllowedPetsMetadata = {
  __typename?: 'AllowedPetsMetadata';
  types: Array<Scalars['String']['output']>;
};

export type AmenitiesFiltersInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  keys?: InputMaybe<OneOfStringFilterInput>;
};

export type Amenity = {
  __typename?: 'Amenity';
  key: Scalars['String']['output'];
  value: AmenityValue;
};

export type AmenityField = {
  __typename?: 'AmenityField';
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: AmenityFieldValue;
};

export type AmenityFieldEnumTypeDetails = {
  __typename?: 'AmenityFieldEnumTypeDetails';
  multipleValuesAllowed: Scalars['Boolean']['output'];
  values: Array<Scalars['String']['output']>;
};

export enum AmenityFieldFeeType {
  Free = 'FREE',
  SpecificAmount = 'SPECIFIC_AMOUNT',
  UnspecifiedAmount = 'UNSPECIFIED_AMOUNT'
}

export type AmenityFieldFeeTypeDetails = {
  __typename?: 'AmenityFieldFeeTypeDetails';
  values: Array<AmenityFieldFeeType>;
};

export type AmenityFieldFeeValue = {
  __typename?: 'AmenityFieldFeeValue';
  type: AmenityFieldFeeType;
};

export type AmenityFieldFeeValueInput = {
  type: AmenityFieldFeeType;
};

export type AmenityFieldInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<AmenityFieldValueInput>;
};

export type AmenityFieldMeasurementTypeDetails = {
  __typename?: 'AmenityFieldMeasurementTypeDetails';
  decimalsValuesAllowed: Scalars['Boolean']['output'];
  values: Array<Scalars['String']['output']>;
};

export type AmenityFieldMeasurementValue = {
  __typename?: 'AmenityFieldMeasurementValue';
  unitOfMeasure: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AmenityFieldMeasurementValueInput = {
  unitOfMeasure: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AmenityFieldMetadata = {
  __typename?: 'AmenityFieldMetadata';
  key: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  typeDetails?: Maybe<AmenityFieldTypeDetails>;
};

export type AmenityFieldTypeDetails = AmenityFieldEnumTypeDetails | AmenityFieldFeeTypeDetails | AmenityFieldMeasurementTypeDetails;

export type AmenityFieldValue = {
  __typename?: 'AmenityFieldValue';
  /** Used for field type: fee. */
  feeValue?: Maybe<AmenityFieldFeeValue>;
  /** Used for field type: measurement. */
  measurementValue?: Maybe<AmenityFieldMeasurementValue>;
  /** Used for field type: text. */
  textValue?: Maybe<Array<LocalizedString>>;
  /** Used for field types: enum, string, trilean, int, and decimal. */
  value?: Maybe<Scalars['String']['output']>;
};

/** All fields are nullable, send only the one relevant field value for each amenity field key. */
export type AmenityFieldValueInput = {
  /** Used for field type: fee. */
  feeValue?: InputMaybe<AmenityFieldFeeValueInput>;
  /** Used for field type: measurement. */
  measurementValue?: InputMaybe<AmenityFieldMeasurementValueInput>;
  /** Used for field type: text. */
  textValue?: InputMaybe<Array<LocalizedStringInput>>;
  /** Used for field types: enum, string, trilean, int, and decimal. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AmenityInput = {
  key: Scalars['String']['input'];
  value: AmenityValueInput;
};

export type AmenityMetadata = {
  __typename?: 'AmenityMetadata';
  /** Indicates whether AmenityInput.fields for a given amenity requires at least one AmenityFieldInput for the amenity to be available */
  fieldsRequired: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  value: AmenityValueMetadata;
};

export type AmenityValue = {
  __typename?: 'AmenityValue';
  available: Scalars['Boolean']['output'];
  fields: Array<AmenityField>;
};

export type AmenityValueInput = {
  available: Scalars['Boolean']['input'];
  fields?: InputMaybe<Array<AmenityFieldInput>>;
};

export type AmenityValueMetadata = {
  __typename?: 'AmenityValueMetadata';
  fields: Array<AmenityFieldMetadata>;
};

/** Additional registration information required by some districts. */
export type ApplicableRegulations = {
  __typename?: 'ApplicableRegulations';
  /** Identifier for additional information required by the district. */
  key?: Maybe<ApplicableRegulationsKey>;
  /** Value of the key required by the district. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Additional property registration information required by certain districts */
export type ApplicableRegulationsInput = {
  /** Identifier for additional information required by the district. */
  key?: InputMaybe<ApplicableRegulationsKey>;
  /** Value of the key required by the district. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Regulation key values. */
export enum ApplicableRegulationsKey {
  IsVacationRental = 'IS_VACATION_RENTAL',
  LicenseDepartmentName = 'LICENSE_DEPARTMENT_NAME',
  LicenseGovernmentName = 'LICENSE_GOVERNMENT_NAME',
  LicenseHolderCity = 'LICENSE_HOLDER_CITY',
  LicenseHolderCountry = 'LICENSE_HOLDER_COUNTRY',
  LicenseHolderName = 'LICENSE_HOLDER_NAME',
  LicenseHolderPostal = 'LICENSE_HOLDER_POSTAL',
  LicenseHolderPrefecture = 'LICENSE_HOLDER_PREFECTURE',
  LicenseHolderStreetAddress_1 = 'LICENSE_HOLDER_STREET_ADDRESS_1',
  LicenseHolderStreetAddress_2 = 'LICENSE_HOLDER_STREET_ADDRESS_2',
  RegistrationNumber = 'REGISTRATION_NUMBER',
  RegistrationNumberType = 'REGISTRATION_NUMBER_TYPE'
}

/** Payload for indicating that the submitted Property IDs should be archived. */
export type ArchivePropertyIdsInput = {
  /** The Advertiser ID associated with the property IDs that will be archived. */
  advertiserId: Scalars['ID']['input'];
  /** A list of EG Property IDs that the Partner wishes to archive. */
  propertyIdsToArchive: Array<Scalars['ID']['input']>;
};

/** Response object after successful submission of Property IDs to archive. */
export type ArchivePropertyIdsPayload = {
  __typename?: 'ArchivePropertyIdsPayload';
  /** The Advertiser ID associated with the property IDs that will be archived. */
  advertiserId: Scalars['ID']['output'];
  /** A playback of the EG Property IDs that the Partner indicated to archive. */
  propertyIdsToArchive: Array<Scalars['ID']['output']>;
};

export enum AreaUnit {
  SquareFeet = 'SQUARE_FEET',
  SquareMeters = 'SQUARE_METERS'
}

/** Attachment types. */
export enum AttachmentType {
  DriversLicense = 'DRIVERS_LICENSE'
}

/** Registration document information. */
export type AttachmentUrl = {
  __typename?: 'AttachmentUrl';
  /** Type of document referenced. */
  key?: Maybe<AttachmentType>;
  /** URL of the registration document file. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Information about the registration document file. */
export type AttachmentUrlInput = {
  /** Type of document referenced. */
  key: AttachmentType;
  /** URL of the registration document file. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum BaseWeightUnit {
  Kilograms = 'KILOGRAMS',
  Pounds = 'POUNDS'
}

export type Bathroom = {
  __typename?: 'Bathroom';
  amenities?: Maybe<Array<Amenity>>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  text?: Maybe<Array<Text>>;
  type: Scalars['String']['output'];
};

export type BathroomsMetadata = {
  __typename?: 'BathroomsMetadata';
  amenities: Array<AmenityMetadata>;
  text: Array<TextMetadata>;
};

/**
 * Represents bed types groups.
 * VRs will be always limited to single bed group with multiple bed types
 * CLs may use 2 bed groups to represent alternatives. For example, a hotel might have a room type with 1 king bed or 2 full beds
 */
export type BedGroup = {
  __typename?: 'BedGroup';
  beds: Array<BedType>;
};

export type BedGroupInput = {
  beds: Array<BedTypeInput>;
};

export type BedGroupsMetadata = {
  __typename?: 'BedGroupsMetadata';
  beds: Array<BedTypeMetadata>;
};

export type BedType = {
  __typename?: 'BedType';
  quantity: Scalars['Int']['output'];
  size?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BedTypeInput = {
  quantity: Scalars['Int']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type BedTypeMetadata = {
  __typename?: 'BedTypeMetadata';
  size: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Bedroom = {
  __typename?: 'Bedroom';
  bedGroups: Array<BedGroup>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  text?: Maybe<Array<Text>>;
};

export type BedroomsMetadata = {
  __typename?: 'BedroomsMetadata';
  bedGroups: BedGroupsMetadata;
  text: Array<TextMetadata>;
};

export type BlackoutDateRange = {
  __typename?: 'BlackoutDateRange';
  /** The travel start date for the exception window. */
  travelDateFrom: Scalars['LocalDate']['output'];
  /** The travel end date for the exception window. */
  travelDateTo: Scalars['LocalDate']['output'];
};

export type BlackoutDateRangeInput = {
  /** The travel start date for the exception window. */
  travelDateFrom: Scalars['LocalDate']['input'];
  /** The travel end date for the exception window. */
  travelDateTo: Scalars['LocalDate']['input'];
};

export type BookingLocalDateTimeInput = {
  from?: InputMaybe<Scalars['LocalDateTime']['input']>;
  to?: InputMaybe<Scalars['LocalDateTime']['input']>;
};

export type BookingPolicy = {
  __typename?: 'BookingPolicy';
  acceptedPaymentForms?: Maybe<AcceptedPaymentForms>;
  bookingType?: Maybe<Scalars['String']['output']>;
};

export type BookingPolicyInput = {
  acceptedPaymentForms?: InputMaybe<AcceptedPaymentFormsInput>;
  bookingType?: InputMaybe<Scalars['String']['input']>;
};

export type BookingPolicyMetadata = {
  __typename?: 'BookingPolicyMetadata';
  acceptedPaymentForms: AcceptedPaymentFormsMetadata;
  bookingTypes: Array<Scalars['String']['output']>;
};

/** Entity that collects payment. */
export enum BusinessModel {
  /** Expedia collects payment. */
  ExpediaCollect = 'EXPEDIA_COLLECT',
  /** Property collects payment. */
  HotelCollect = 'HOTEL_COLLECT'
}

export type CancelReservationInput = {
  /** the ID of the property where a cancellation has been requested */
  propertyId: Scalars['ID']['input'];
  /** Reason for cancelling the reservation. Values: GUEST_REQUESTED_CANCEL */
  reason: ReservationPreStayCancellationReason;
  /** Identifier associated with the reservation to be cancelled. */
  reservationId: Scalars['ID']['input'];
};

/** Response for cancel pre-stay reservation */
export type CancelReservationPayload = {
  __typename?: 'CancelReservationPayload';
  /** Identifier associated with the reservation cancelled */
  reservation?: Maybe<Reservation>;
};

export type CancelReservationReconciliationInput = {
  /** Currency in which the amount is shown. */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Amount of money to charge for cancelling this reservation. */
  penaltyAmount?: InputMaybe<Scalars['Float']['input']>;
  /** the ID of the property where the cancellation has been requested */
  propertyId: Scalars['ID']['input'];
  /** Reason for cancelling the reservation. Values: GUEST_REQUESTED_CANCEL, NO_SHOW */
  reason: ReservationCancellationReason;
  /** Identifier associated with the reservation to be cancelled. */
  reservationId: Scalars['ID']['input'];
};

export type CancelReservationReconciliationPayload = {
  __typename?: 'CancelReservationReconciliationPayload';
  /** Identifier associated with the reservation cancelled */
  reservation?: Maybe<Reservation>;
};

export type CancelVrboReservationInput = {
  /** Cancel Action to be taken */
  cancellationPolicyAction: VrboCancellationPolicyAction;
  /** Cancellation Policy Override - Only valid when cancellationPolicyAction is OVERRIDE_WITH_PENALTY */
  cancellationPolicyOverride?: InputMaybe<VrboCancellationPolicyOverride>;
  /** Partner supplied Unique mutation identifier */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Primary reason for cancellation */
  primaryReason: VrboCancellationReason;
  /** Property ID with which this reservation is associated */
  propertyId: Scalars['ID']['input'];
  /** Reservation identifier */
  reservationId: Scalars['ID']['input'];
  /** Secondary reason for cancellation - Only valid when reason is GUEST_REQUESTED_CANCEL */
  secondaryReason?: InputMaybe<VrboCancellationSecondaryReason>;
};

export type CancelVrboReservationPayload = {
  __typename?: 'CancelVrboReservationPayload';
  /** Partner supplied unique mutation identifier */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reference to reservation that was cancelled */
  reservation?: Maybe<Reservation>;
};

/** Exactly one of the fields percentage, flatAmount, and numberOfNights must be defined, and it must correlate to the CancellationPenaltyRuleType field */
export type CancellationPenaltyRule = {
  __typename?: 'CancellationPenaltyRule';
  applicability: CancellationPenaltyRuleApplicability;
  flatAmount?: Maybe<Money>;
  numberOfNights?: Maybe<Scalars['Int']['output']>;
  /** Represented as a fraction of 1. Example: 15% should be represented as 0.15 and 100% as 1.0 */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  type: CancellationPenaltyRuleType;
};

export enum CancellationPenaltyRuleApplicability {
  BookingTotal = 'BOOKING_TOTAL',
  CleaningFee = 'CLEANING_FEE',
  Deposit = 'DEPOSIT'
}

/** Exactly one of the fields percentage, flatAmount, and numberOfNights must be defined, and it must correlate to the CancellationPenaltyRuleType field */
export type CancellationPenaltyRuleInput = {
  applicability: CancellationPenaltyRuleApplicability;
  flatAmount?: InputMaybe<MoneyInput>;
  numberOfNights?: InputMaybe<Scalars['Int']['input']>;
  /** Represented as a fraction of 1. Example: 15% should be represented as 0.15 and 100% as 1.0 */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  type: CancellationPenaltyRuleType;
};

export enum CancellationPenaltyRuleType {
  FlatAmount = 'FLAT_AMOUNT',
  NumberOfNights = 'NUMBER_OF_NIGHTS',
  Percentage = 'PERCENTAGE'
}

export type CancellationPolicy = {
  __typename?: 'CancellationPolicy';
  tiers?: Maybe<Array<CancellationPolicyTier>>;
  type: CancellationPolicyType;
};

export type CancellationPolicyCancellationWindow = {
  __typename?: 'CancellationPolicyCancellationWindow';
  cutoff: Scalars['Int']['output'];
  temporalUnit: CancellationWindowTemporalUnit;
};

export type CancellationPolicyCancellationWindowInput = {
  cutoff: Scalars['Int']['input'];
  temporalUnit: CancellationWindowTemporalUnit;
};

export type CancellationPolicyConfig = {
  __typename?: 'CancellationPolicyConfig';
  additionalCancellationFee?: Maybe<Money>;
  defaultPolicies: Array<CancellationPolicy>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  overridePolicies: Array<CancellationPolicyOverride>;
  property?: Maybe<Property>;
};

/** Each date range is a closed and inclusive interval. */
export type CancellationPolicyDateRange = {
  __typename?: 'CancellationPolicyDateRange';
  from: Scalars['Date']['output'];
  to: Scalars['Date']['output'];
};

/** Each date range is a closed and inclusive interval. */
export type CancellationPolicyDateRangeInput = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};

export type CancellationPolicyInput = {
  tiers?: InputMaybe<Array<CancellationPolicyTierInput>>;
  type: CancellationPolicyType;
};

export type CancellationPolicyOverride = {
  __typename?: 'CancellationPolicyOverride';
  cancellationPolicy: CancellationPolicy;
  dateRanges: Array<CancellationPolicyDateRange>;
};

export type CancellationPolicyOverrideInput = {
  cancellationPolicy: CancellationPolicyInput;
  dateRanges: Array<CancellationPolicyDateRangeInput>;
};

export type CancellationPolicyTier = {
  __typename?: 'CancellationPolicyTier';
  cancellationWindow: CancellationPolicyCancellationWindow;
  penaltyRules: Array<CancellationPenaltyRule>;
};

export type CancellationPolicyTierInput = {
  cancellationWindow: CancellationPolicyCancellationWindowInput;
  penaltyRules: Array<CancellationPenaltyRuleInput>;
};

export enum CancellationPolicyType {
  Custom = 'CUSTOM',
  Firm = 'FIRM',
  Moderate = 'MODERATE',
  NoRefund = 'NO_REFUND',
  Relaxed = 'RELAXED',
  Strict = 'STRICT'
}

/** Time frame to which the cancellation policy is applied. */
export enum CancellationWindowTemporalUnit {
  Day = 'DAY',
  Hour = 'HOUR',
  Week = 'WEEK'
}

export type ChangeReservationReconciliationInput = {
  /** The reconciled check-in date. */
  checkInDate: Scalars['LocalDate']['input'];
  /** The reconciled check-out date. */
  checkOutDate: Scalars['LocalDate']['input'];
  /** The ID of the property where the change has been requested. */
  propertyId: Scalars['ID']['input'];
  /** The reason for modifying the reservation. */
  reason?: InputMaybe<ReservationChangeReason>;
  /** Identifier associated with the reservation to be changed. */
  reservationId: Scalars['ID']['input'];
  /** Updated supplier amount of the reservation. */
  supplierAmount?: InputMaybe<SupplierAmountInput>;
};

export type ChangeReservationReconciliationPayload = {
  __typename?: 'ChangeReservationReconciliationPayload';
  /** Identifier associated with the reservation changed */
  reservation?: Maybe<Reservation>;
};

/** facilitates filtering reservations by when their arrival date occurs */
export type CheckInDateFilter = {
  /** the date defining the start of the arrival date window (format: YYYY-MM-DD) */
  from: Scalars['LocalDate']['input'];
  /**
   * the date defining the end of the arrival date window (format: YYYY-MM-DD)
   * Note: if to date is not specified, all reservations with arrival date after the from date will be included in the response
   */
  to?: InputMaybe<Scalars['LocalDate']['input']>;
};

export type CheckInPolicy = {
  __typename?: 'CheckInPolicy';
  checkInPeriods: Array<ExactOrApproximateTimeRange>;
  minAge?: Maybe<CheckInPolicyMinAge>;
};

export type CheckInPolicyMetadata = {
  __typename?: 'CheckInPolicyMetadata';
  checkInPeriods: Array<ExactOrApproximateTimeRangeMetadata>;
};

export type CheckInPolicyMinAge = {
  __typename?: 'CheckInPolicyMinAge';
  note: Array<LocalizedString>;
  value: Scalars['Int']['output'];
};

export type CheckInPolicyMinAgeInput = {
  note?: InputMaybe<Array<LocalizedStringInput>>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** facilitates filtering reservations by when their departure date occurs */
export type CheckOutDateFilter = {
  /** the date defining the start of the departure date window (format: YYYY-MM-DD) */
  from: Scalars['LocalDate']['input'];
  /** the date defining the end of the departure date window (format: YYYY-MM-DD) */
  to: Scalars['LocalDate']['input'];
};

export type CheckOutPolicy = {
  __typename?: 'CheckOutPolicy';
  checkOutTime: ExactOrApproximateTime;
};

export type CheckOutPolicyMetadata = {
  __typename?: 'CheckOutPolicyMetadata';
  checkOutTime: ExactOrApproximateTimeMetadata;
};

export type CheckpointFilterInput = {
  /** Filter checkpoints by resolution status */
  result?: InputMaybe<Array<ResultFilter>>;
};

export type ChildrenPolicy = {
  __typename?: 'ChildrenPolicy';
  allowed: Scalars['Boolean']['output'];
  allowedAges: Array<AgeRange>;
  childrenAllowedNote: Array<LocalizedString>;
  childrenNotAllowedNote: Array<LocalizedString>;
};

export type ChildrenPolicyMetadata = {
  __typename?: 'ChildrenPolicyMetadata';
  allowedAges: Array<AgeRangeMetadata>;
};

/** Payload for indicating that the Partner has completed their task of Property and Reservation ID mapping. */
export type CommitVrboSupplierIdMappingsInput = {
  /** The intended Advertiser ID for which to indicate ID mapping is complete. */
  advertiserId: Scalars['ID']['input'];
};

/** Response object after successful commission of submitted ID mappings. */
export type CommitVrboSupplierIdMappingsPayload = {
  __typename?: 'CommitVrboSupplierIdMappingsPayload';
  /** Current system status of ID mapping processing. */
  vrboMappingStatus: VrboMappingStatus;
};

/** Whether the unit is compliant with the local jurisdiction's regulatory requirements. */
export type Compliant = {
  __typename?: 'Compliant';
  /** Reason why the unit is in or out of compliance. */
  reason: Scalars['String']['output'];
  /** Whether the property is compliant or not. */
  status: RegulatoryStatus;
};

export type ConfirmReservationNotificationInput = {
  /** Reservation action type (BOOKED, CANCELLED, MODIFIED) */
  actionType: Scalars['String']['input'];
  /** Partner supplied Unique mutation identifier */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Partner supplied reservation confirmation code */
  confirmationCode: Scalars['String']['input'];
  /** Webhook supplied reservation confirmation token */
  confirmationToken: Scalars['String']['input'];
  /** Property ID with which this reservation is associated */
  propertyId: Scalars['ID']['input'];
  /** Reservation identifier */
  reservationId: Scalars['ID']['input'];
};

export type ConfirmReservationNotificationPayload = {
  __typename?: 'ConfirmReservationNotificationPayload';
  /** Partner supplied Unique mutation identifier */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reference to reservation that was confirmed */
  reservation?: Maybe<Reservation>;
};

export type Contact = {
  __typename?: 'Contact';
  emailAddresses?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumbers?: Maybe<Array<PhoneNumber>>;
  type: ContactType;
};

export enum ContactType {
  Property = 'PROPERTY'
}

export type ContactTypeFilterInput = {
  operator?: InputMaybe<OneOfOperator>;
  values: Array<ContactType>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type CoordinatesInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateAddressInput = {
  addressLines: Array<Scalars['String']['input']>;
  administrativeArea?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['CountryCode']['input'];
  locality: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
};

export type CreateCancellationPolicyConfigInput = {
  additionalCancellationFee?: InputMaybe<MoneyInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  defaultPolicies: Array<CancellationPolicyInput>;
  name: Scalars['String']['input'];
  overridePolicies?: InputMaybe<Array<CancellationPolicyOverrideInput>>;
  propertyId: Scalars['ID']['input'];
};

export type CreateCancellationPolicyConfigPayload = {
  __typename?: 'CreateCancellationPolicyConfigPayload';
  cancellationPolicyConfig?: Maybe<CancellationPolicyConfig>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCheckInPolicyInput = {
  checkInPeriods: Array<ExactOrApproximateTimeRangeInput>;
  minAge?: InputMaybe<CheckInPolicyMinAgeInput>;
};

export type CreateCheckOutPolicyInput = {
  checkOutTime: ExactOrApproximateTimeInput;
};

export type CreateChildrenPolicyInput = {
  allowed: Scalars['Boolean']['input'];
  allowedAges?: InputMaybe<Array<AgeRangeInput>>;
  childrenAllowedNote?: InputMaybe<Array<LocalizedStringInput>>;
  childrenNotAllowedNote?: InputMaybe<Array<LocalizedStringInput>>;
};

export type CreateCustomStayPolicyInput = {
  description: Array<LocalizedStringInput>;
  key: Scalars['String']['input'];
};

export type CreateEventsPolicyInput = {
  allowed: Scalars['Boolean']['input'];
  allowedEvents?: InputMaybe<AllowedEventsInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
};

export type CreateMaxOccupancyPolicyInput = {
  adultCount?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
  totalGuestCount: Scalars['Int']['input'];
};

export type CreateNotificationCallbackConfigInput = {
  /** api key of callback configuration */
  apiKey: Scalars['String']['input'];
  /** Callback url of callback configuration */
  callbackUrl: Scalars['Url']['input'];
  /** Email address for correspondence */
  contactEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Request timeout in seconds of callback configuration */
  requestTimeoutSeconds?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateNotificationCallbackConfigPayload = {
  __typename?: 'CreateNotificationCallbackConfigPayload';
  /** Information about the created Callback configuration */
  callbackConfig: NotificationCallbackConfig;
  /** Callback Configuration secret string */
  secret: Scalars['String']['output'];
};

export type CreatePetsPolicyInput = {
  allowed: Scalars['Boolean']['input'];
  allowedPets?: InputMaybe<AllowedPetsInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
};

export type CreatePoliciesInput = {
  bookingPolicy?: InputMaybe<BookingPolicyInput>;
  stayPolicy?: InputMaybe<CreateStayPolicyInput>;
};

export type CreatePropertyImageInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  captions?: InputMaybe<Array<LocalizedStringInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Original file name of the image. If the file name is not provided, one will be automatically generated. */
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileUrl: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  propertyId: Scalars['ID']['input'];
  rotation?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePropertyImagePayload = {
  __typename?: 'CreatePropertyImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
};

export type CreatePropertyInput = {
  address: CreateAddressInput;
  amenities?: InputMaybe<Array<AmenityInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<SavePropertyContactInput>;
  location: CreatePropertyLocationInput;
  name: Scalars['String']['input'];
  names?: InputMaybe<Array<LocalizedStringInput>>;
  policies?: InputMaybe<CreatePoliciesInput>;
  referenceName?: InputMaybe<Scalars['String']['input']>;
  supplierPropertyId: Scalars['String']['input'];
  supplierUnitId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Array<TextInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyLocationInput = {
  coordinates: CoordinatesInput;
  hideExactLocation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreatePropertyPayload = {
  __typename?: 'CreatePropertyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
};

export type CreateRatePlanInput = {
  baseRateGuestCount?: InputMaybe<Scalars['Int']['input']>;
  cancellationPolicyConfigId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['ID']['input']>;
  distributionRules: Array<RatePlanDistributionRuleInput>;
  feeSet?: InputMaybe<FeeSetInput>;
  name: Scalars['String']['input'];
  paymentScheduleApplicable?: InputMaybe<Scalars['Boolean']['input']>;
  pricingModel: PricingModel;
  propertyId: Scalars['ID']['input'];
  restrictions?: InputMaybe<CreateRatePlanRestrictionsInput>;
  taxInclusive?: InputMaybe<Scalars['Boolean']['input']>;
  type: RatePlanType;
  unitId: Scalars['ID']['input'];
};

export type CreateRatePlanPayload = {
  __typename?: 'CreateRatePlanPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ratePlan?: Maybe<RatePlan>;
};

export type CreateRatePlanRestrictionsInput = {
  advanceBookingDays?: InputMaybe<IntRangeInput>;
  lengthOfStay?: InputMaybe<IntRangeInput>;
  mobileOnly?: InputMaybe<Scalars['Boolean']['input']>;
  reservationDates?: InputMaybe<DateRangeInput>;
  travelDates?: InputMaybe<DateRangeInput>;
};

export type CreateSmokingLocationPolicyInput = {
  allowed: Scalars['Boolean']['input'];
  allowedNote?: InputMaybe<Array<LocalizedStringInput>>;
};

export type CreateSmokingPolicyInput = {
  allowed: Scalars['Boolean']['input'];
  indoorPolicy?: InputMaybe<CreateSmokingLocationPolicyInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
  outdoorPolicy?: InputMaybe<CreateSmokingLocationPolicyInput>;
};

export type CreateStayPolicyInput = {
  checkInPolicy: CreateCheckInPolicyInput;
  checkOutPolicy: CreateCheckOutPolicyInput;
  childrenPolicy?: InputMaybe<CreateChildrenPolicyInput>;
  customPolicies?: InputMaybe<Array<CreateCustomStayPolicyInput>>;
  eventsPolicy?: InputMaybe<CreateEventsPolicyInput>;
  maxOccupancyPolicy: CreateMaxOccupancyPolicyInput;
  petsPolicy?: InputMaybe<CreatePetsPolicyInput>;
  rentalAgreementUrl?: InputMaybe<Scalars['Url']['input']>;
  smokingPolicy?: InputMaybe<CreateSmokingPolicyInput>;
};

export type CreateUnitSpacesBathroomInput = {
  amenities?: InputMaybe<Array<AmenityInput>>;
  order: Scalars['Int']['input'];
  text: Array<TextInput>;
  type: Scalars['String']['input'];
};

export type CreateUnitSpacesBedroomInput = {
  bedGroups: Array<BedGroupInput>;
  order: Scalars['Int']['input'];
  text: Array<TextInput>;
};

export type CreateUnitSpacesDiningRoomInput = {
  capacity: Scalars['Int']['input'];
  order: Scalars['Int']['input'];
};

export type CreateUnitSpacesInput = {
  bathrooms?: InputMaybe<Array<CreateUnitSpacesBathroomInput>>;
  bedrooms?: InputMaybe<Array<CreateUnitSpacesBedroomInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  diningRooms?: InputMaybe<Array<CreateUnitSpacesDiningRoomInput>>;
  livingRooms?: InputMaybe<Array<CreateUnitSpacesLivingRoomInput>>;
  offices?: InputMaybe<Array<CreateUnitSpacesOfficeInput>>;
  propertyId: Scalars['ID']['input'];
  unitId: Scalars['ID']['input'];
};

export type CreateUnitSpacesLivingRoomInput = {
  bedGroups: Array<BedGroupInput>;
  order: Scalars['Int']['input'];
  text: Array<TextInput>;
};

export type CreateUnitSpacesOfficeInput = {
  bedGroups: Array<BedGroupInput>;
  order: Scalars['Int']['input'];
  text: Array<TextInput>;
};

export type CreateUnitSpacesPayload = {
  __typename?: 'CreateUnitSpacesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  spaces: UnitSpaces;
};

export type CursorBasedPageInfo = {
  __typename?: 'CursorBasedPageInfo';
  /** Value of the cursor of the last promotion in the current page. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** It indicates if there are additional pages to retrieve. */
  hasNextPage: Scalars['Boolean']['output'];
};

export type CustomStayPolicy = {
  __typename?: 'CustomStayPolicy';
  description: Array<LocalizedString>;
  key: Scalars['String']['output'];
};

export type CustomStayPolicyMetadata = {
  __typename?: 'CustomStayPolicyMetadata';
  key: Scalars['String']['output'];
};

export type DateInput = {
  /** begin date */
  from: Scalars['LocalDate']['input'];
  /**  end date */
  to: Scalars['LocalDate']['input'];
};

export type DateRange = {
  __typename?: 'DateRange';
  from: Scalars['Date']['output'];
  to: Scalars['Date']['output'];
};

export type DateRangeInput = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};

export type DateTimeRangeFilterInput = {
  from: Scalars['DateTime']['input'];
  operator?: InputMaybe<RangeOperator>;
  to: Scalars['DateTime']['input'];
};

/**
 * Day of Week discounts facilitate partners to set discount percentages for specific days of the week.
 * The days pertain to the days of the week the discount is applicable for the travel dates (e.g. Mondays at 15%, Tuesdays at 10% discount).
 */
export type DayOfWeekDiscount = Discount & {
  __typename?: 'DayOfWeekDiscount';
  friday: Scalars['Float']['output'];
  monday: Scalars['Float']['output'];
  saturday: Scalars['Float']['output'];
  sunday: Scalars['Float']['output'];
  thursday: Scalars['Float']['output'];
  tuesday: Scalars['Float']['output'];
  /** Type of the discount. */
  type: DiscountType;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  wednesday: Scalars['Float']['output'];
};

export type DayOfWeekDiscountCreateInput = {
  friday: Scalars['Float']['input'];
  monday: Scalars['Float']['input'];
  saturday: Scalars['Float']['input'];
  sunday: Scalars['Float']['input'];
  thursday: Scalars['Float']['input'];
  tuesday: Scalars['Float']['input'];
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  wednesday: Scalars['Float']['input'];
};

export type DayOfWeekDiscountPromotionCreateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates: Array<BlackoutDateRangeInput>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category: PromotionCategory;
  /** Name of the promotion as the partner wants to call it. */
  code: Scalars['String']['input'];
  /** Detail of the actual discount being applied on the promotion. */
  discount: DayOfWeekDiscountCreateInput;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans: Array<EligibleRatePlanInput>;
  /** Name of the promotion. Values: BASIC or EARLY_BOOKING_PROMOTION. */
  name: PromotionName;
  /** List of restrictions that can be applied to these promotions. */
  restrictions: RestrictionsCreateInput;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status: PromotionStatus;
};

export type DayOfWeekDiscountPromotionUpdateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates?: InputMaybe<Array<BlackoutDateRangeInput>>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category?: InputMaybe<PromotionCategory>;
  /** Name of the promotion as the partner wants to call it. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Detail of the actual discount being applied on the promotion. */
  discount?: InputMaybe<DayOfWeekDiscountUpdateInput>;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans?: InputMaybe<Array<EligibleRatePlanInput>>;
  /** Id of the Promotion as stored in the Expedia platform. */
  id: Scalars['ID']['input'];
  /** Name of the promotion. Values: BASIC or EARLY_BOOKING_PROMOTION. */
  name?: InputMaybe<PromotionName>;
  /** List of restrictions that can be applied to these promotions. */
  restrictions?: InputMaybe<RestrictionsUpdateInput>;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status?: InputMaybe<PromotionStatus>;
};

export type DayOfWeekDiscountUpdateInput = {
  friday?: InputMaybe<Scalars['Float']['input']>;
  monday?: InputMaybe<Scalars['Float']['input']>;
  saturday?: InputMaybe<Scalars['Float']['input']>;
  sunday?: InputMaybe<Scalars['Float']['input']>;
  thursday?: InputMaybe<Scalars['Float']['input']>;
  tuesday?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit?: InputMaybe<DiscountUnit>;
  wednesday?: InputMaybe<Scalars['Float']['input']>;
};

export type DeleteImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteImagePayload = {
  __typename?: 'DeleteImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type DeleteNotificationCallbackConfigInput = {
  /** Id of callback configuration to be deleted */
  callbackConfigId: Scalars['ID']['input'];
};

export type DeleteNotificationCallbackConfigPayload = {
  __typename?: 'DeleteNotificationCallbackConfigPayload';
  /** Id of callback configuration deleted */
  callbackConfigId: Scalars['ID']['output'];
};

export type DeleteUnitSpaceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
  unitId: Scalars['ID']['input'];
};

export type DeleteUnitSpacePayload = {
  __typename?: 'DeleteUnitSpacePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DiningRoom = {
  __typename?: 'DiningRoom';
  capacity: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
};

export type DisablePropertyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DisablePropertyPayload = {
  __typename?: 'DisablePropertyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Discount = {
  /** Type of the discount. */
  type: DiscountType;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
};

export type DiscountPromotion = Promotion & {
  __typename?: 'DiscountPromotion';
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates?: Maybe<Array<BlackoutDateRange>>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category: PromotionCategory;
  /** Name of the promotion as the partner wants to call it. */
  code: Scalars['String']['output'];
  /** Detail of the actual discount being applied on the promotion. */
  discount?: Maybe<Discount>;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans: Array<EligibleRatePlan>;
  /** Id of the Promotion as stored in the Expedia platform. */
  id: Scalars['ID']['output'];
  /** It indicates if the promotion is negotiated. */
  isContractedPromotion?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the promotion. Values: BASIC, EARLY_BOOKING_PROMOTION or SAME_DAY_PROMOTION. */
  name: PromotionName;
  /** List of restrictions that can be applied to these promotions. */
  restrictions?: Maybe<Restrictions>;
  /** Sell status of the promotion. Values: EXPIRED, CURRENT or FUTURE. For retrieval only. */
  sellStatus?: Maybe<PromotionSellStatus>;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status: PromotionStatus;
};

export enum DiscountType {
  DayOfWeekDiscount = 'DAY_OF_WEEK_DISCOUNT',
  MultiNightDiscount = 'MULTI_NIGHT_DISCOUNT',
  SingleDiscount = 'SINGLE_DISCOUNT'
}

export enum DiscountUnit {
  Amount = 'AMOUNT',
  Percent = 'PERCENT'
}

/** Helps partners distinguish between a booking made on a vrbo platform vs all the other Expedia brands */
export enum DistributionChannel {
  ExpediaIntegrated = 'EXPEDIA_INTEGRATED',
  Vrbo = 'VRBO'
}

/** District regulatory information. */
export type District = {
  __typename?: 'District';
  /** Description of the district regulation. */
  description?: Maybe<Scalars['String']['output']>;
  /** District ID (such as Miami Beach). */
  id: Scalars['String']['output'];
  /** List of legal property types. */
  legalPropertyTypes: Array<Maybe<LegalPropertyType>>;
  /** Localized district name that can be used for display. */
  localizedName?: Maybe<Scalars['String']['output']>;
  /** Four-character locale code (language and country codes) of property's local district (such as ja-JP for a property in Japan). */
  nativeLocale?: Maybe<Scalars['String']['output']>;
  /** URL to jurisdiction regulation information. */
  referenceUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Whether registration is required by the jurisdiction. */
  registrationRequired: Scalars['Boolean']['output'];
  /** Jurisdiction regulations that the partner needs to meet to comply with onboarding. */
  requirements?: Maybe<Array<Maybe<JurisdictionRequirement>>>;
};

/** The effective cancellation policy for the reservation */
export type EffectivePolicy = {
  __typename?: 'EffectivePolicy';
  /** The end date and time of the policy in UTC */
  endDateTimeUtc: Scalars['DateTime']['output'];
  /** The type of policy being applied. One of: REGULATORY_WAIVER */
  policyType: Scalars['String']['output'];
  /** The start date and time of the policy in UTC */
  startDateTimeUtc: Scalars['DateTime']['output'];
};

export type EligibleRatePlan = {
  __typename?: 'EligibleRatePlan';
  /** Id of the rate plan as stored in the Expedia platform. */
  id: Scalars['ID']['output'];
};

export type EligibleRatePlanInput = {
  /** Id of the rate plan as stored in the Expedia platform. */
  id: Scalars['ID']['input'];
};

export type EnablePropertyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type EnablePropertyPayload = {
  __typename?: 'EnablePropertyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type EventsPolicy = {
  __typename?: 'EventsPolicy';
  allowed: Scalars['Boolean']['output'];
  allowedEvents?: Maybe<AllowedEvents>;
  note: Array<LocalizedString>;
};

export type EventsPolicyMetadata = {
  __typename?: 'EventsPolicyMetadata';
  allowedEvents: AllowedEventsMetadata;
};

export type ExactOrApproximateTime = {
  __typename?: 'ExactOrApproximateTime';
  approximateTime?: Maybe<Scalars['String']['output']>;
  exactTime?: Maybe<Scalars['LocalTime']['output']>;
};

export type ExactOrApproximateTimeInput = {
  approximateTime?: InputMaybe<Scalars['String']['input']>;
  exactTime?: InputMaybe<Scalars['LocalTime']['input']>;
};

export type ExactOrApproximateTimeMetadata = {
  __typename?: 'ExactOrApproximateTimeMetadata';
  approximateTimes: Array<Scalars['String']['output']>;
};

export type ExactOrApproximateTimeRange = {
  __typename?: 'ExactOrApproximateTimeRange';
  end?: Maybe<ExactOrApproximateTime>;
  start: ExactOrApproximateTime;
};

export type ExactOrApproximateTimeRangeInput = {
  end?: InputMaybe<ExactOrApproximateTimeInput>;
  start: ExactOrApproximateTimeInput;
};

export type ExactOrApproximateTimeRangeMetadata = {
  __typename?: 'ExactOrApproximateTimeRangeMetadata';
  end: ExactOrApproximateTimeMetadata;
  start: ExactOrApproximateTimeMetadata;
};

/** Exemption to jurisdiction requirements. */
export type Exemption = {
  __typename?: 'Exemption';
  /** Exemption type. */
  category?: Maybe<ExemptionCategory>;
  /** Description of the exemption. */
  description?: Maybe<Scalars['String']['output']>;
};

/** Exemption categories. */
export enum ExemptionCategory {
  MaxNightCap = 'MAX_NIGHT_CAP'
}

export type ExpediaSupplierAmount = SupplierAmount & {
  __typename?: 'ExpediaSupplierAmount';
  /** Currency in which the amount is shown. */
  currencyCode: Scalars['String']['output'];
  /** Rate type: NET for Expedia Collect or SELL for Hotel Collect. */
  rateType: RateType;
  /** Daily rates for the reservation. */
  rates: Array<SupplierRate>;
  /** Total rates for the reservation. */
  total: SupplierTotal;
};

export type FeeSet = {
  __typename?: 'FeeSet';
  id: Scalars['ID']['output'];
};

export type FeeSetInput = {
  id: Scalars['ID']['input'];
};

export type FiltersInput = {
  /**
   * The Booking Window being queried for in Date Time format.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTime?: InputMaybe<BookingLocalDateTimeInput>;
  /** List of discount types. */
  discountTypes?: InputMaybe<Array<DiscountType>>;
  /** Id of the Promotion as stored in the Expedia platform. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Status of the promotions. */
  status?: InputMaybe<PromotionStatus>;
  /** The Travel date window being queried for in Date format YYYY-MM-DD */
  travelDate?: InputMaybe<TravelDateInput>;
};

export type Guest = {
  __typename?: 'Guest';
  /** Email address */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** Guest loyalty tier. Values include MEMBER, VIP, PREMIUMVIP and null. */
  loyaltyTier?: Maybe<Scalars['String']['output']>;
  /** The phone numbers of the guest */
  phoneNumbers?: Maybe<Array<GuestContactPhoneNumber>>;
  /** identifies the frequent customer reward program and (optionally) indicates points awarded for stay activity */
  supplierLoyaltyPlanInfo?: Maybe<SupplierLoyaltyPlanInfo>;
  /** Purpose of the reservation */
  travelPurpose?: Maybe<TravelPurpose>;
};

/** Contact of the guest who made the reservation */
export type GuestContact = {
  __typename?: 'GuestContact';
  /** The phone numbers of the guest */
  phoneNumbers?: Maybe<Array<GuestContactPhoneNumber>>;
};

/** Phone Number */
export type GuestContactPhoneNumber = {
  __typename?: 'GuestContactPhoneNumber';
  /** Area Code (format: 074) */
  areaCode: Scalars['String']['output'];
  /** Country code (format: 44) */
  countryCode: Scalars['String']['output'];
  /** Phone number (format: 3737059) */
  number: Scalars['String']['output'];
};

export type GuestRating = {
  __typename?: 'GuestRating';
  /**  will consider Guest for future reservations  */
  recommendGuest?: Maybe<Scalars['Boolean']['output']>;
  /**  categorized ratings  */
  starRatings: Array<Maybe<Rating>>;
};

export type IdNode = {
  __typename?: 'IdNode';
  id?: Maybe<Scalars['ID']['output']>;
  idSource: IdSource;
};

export type IdNodeInput = {
  id: Scalars['ID']['input'];
  idSource: ReservationIdSource;
};

/** describes the source of a given property ID */
export enum IdSource {
  /** the source of the ID is the Expedia platform */
  Expedia = 'EXPEDIA',
  /** the source of the ID is the Supplier's platform */
  Supplier = 'SUPPLIER',
  /** the source of the ID is VRBOs Legacy system */
  Vrbo = 'VRBO'
}

export type Image = MediaAsset & {
  __typename?: 'Image';
  active: Scalars['Boolean']['output'];
  captions: Array<LocalizedString>;
  featured: Scalars['Boolean']['output'];
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  publishedUrl?: Maybe<Scalars['String']['output']>;
  /** Clockwise rotation to be applied to the image. Accepted values are 0, 90, 180 and 270. Defaults to 0 when not provided. */
  rotation: Scalars['Int']['output'];
  source: ImageSource;
  status: Status;
  updatedDate: Scalars['DateTime']['output'];
};

export enum ImageSource {
  Api = 'API',
  Ui = 'UI'
}

export type ImagesFiltersInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  sources?: InputMaybe<OneOfImageSourceFilterInput>;
  statuses?: InputMaybe<OneOfMediaStatusFilterInput>;
};

export type ImagesResponse = MediaResponse & {
  __typename?: 'ImagesResponse';
  elements: Array<Image>;
  totalCount: Scalars['Int']['output'];
};

export type InputLocalizedString = {
  /**  locale of the text  */
  locale: Scalars['String']['input'];
  /**  value of the text  */
  value: Scalars['String']['input'];
};

export type Installment = {
  __typename?: 'Installment';
  amount: Money;
  /** VRBO reservation specific installment distribution details */
  distributions: Array<InstallmentDistribution>;
  dueDate: Scalars['LocalDate']['output'];
  installmentId?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<InstallmentPaymentStatus>;
};

/** VRBO reservation specific distribution */
export type InstallmentDistribution = {
  __typename?: 'InstallmentDistribution';
  /** amount value for installment distribution item */
  amount: Money;
  /** type of installment distribution item (PARTNER_PAYMENT, COMMISSION, TRAVELER_SERVICE_FEE, etc) */
  type: Scalars['String']['output'];
};

/** Payment Status of the specific Installment */
export enum InstallmentPaymentStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  NotStarted = 'NOT_STARTED',
  Paid = 'PAID',
  PartialRefunded = 'PARTIAL_REFUNDED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Reversed = 'REVERSED',
  Scheduled = 'SCHEDULED',
  Sent = 'SENT'
}

export type IntRange = {
  __typename?: 'IntRange';
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
};

export type IntRangeInput = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

/** Collection of irreconcilable scenarios */
export type InvalidScenario = {
  __typename?: 'InvalidScenario';
  /** Scenario reason in detail */
  reason: Scalars['String']['output'];
  /** Scenario name string */
  scenario: Scalars['String']['output'];
};

/** Inventory Type */
export enum InventoryType {
  /** VRBO only supported Inventory Type */
  Ipm = 'IPM',
  /** VRBO only supported Inventory Type */
  Platform = 'PLATFORM'
}

/** Jurisdiction regulations that the partner needs to meet to comply with onboarding. */
export type JurisdictionRequirement = {
  __typename?: 'JurisdictionRequirement';
  /** Additional required regulation data by jurisdiction, such as license holder name or property address. */
  additionalDataRequirements?: Maybe<Array<Maybe<AdditionalDataRequirement>>>;
  /** Exemptions of a requirement under certain conditions. */
  exemptions?: Maybe<Array<Maybe<Exemption>>>;
  /** Whether this regulatory category is a vacation rental. */
  isVacationRental?: Maybe<Scalars['Boolean']['output']>;
  /** Maximum number of nights allowed by the jurisdiction. null means no requirement. */
  maxNightCap?: Maybe<MaxNightCap>;
  /** Minimum number of stay nights for this category (default is 1). */
  minStayNights: Scalars['Int']['output'];
  /** Regulation requirement that EG supports. */
  qualifiedPropertyTypes?: Maybe<Array<Maybe<LegalPropertyType>>>;
  /** List of registration number requirements. */
  registrationNumberRequirements?: Maybe<Array<RegistrationNumberRequirement>>;
  /** Property regulatory category where the registration number requirements apply. */
  regulatoryCategory?: Maybe<RegulatoryCategory>;
  /** Localized string of the regulatory category. */
  regulatoryCategoryLabel?: Maybe<Scalars['String']['output']>;
};

/** facilitates filtering reservations by when their last updated date time occurs */
export type LastUpdatedDateTimeFilter = {
  /** the date defining the start of the last updated date window (format: YYYY-MM-DDTHH:mm:ssTZD, TZD is a time zone designator in the form +/-hh:mm) */
  from: Scalars['ZoneDateTime']['input'];
  /** the date defining the end of the last updated date window (format: YYYY-MM-DDTHH:mm:ssTZD, TZD is a time zone designator in the form +/-hh:mm) */
  to: Scalars['ZoneDateTime']['input'];
};

/** Legacy property type for the district. */
export type LegalPropertyType = {
  __typename?: 'LegalPropertyType';
  /** Legal property subtype, applicable for residences, such as primary home or secondary home. */
  subtype?: Maybe<Scalars['String']['output']>;
  /** Legal property type, such as hotel, bed and breakfast, residence, etc. */
  type?: Maybe<Scalars['String']['output']>;
};

export type ListingBundleAdoptionPayload = {
  __typename?: 'ListingBundleAdoptionPayload';
  adoptionList: Array<Scalars['String']['output']>;
  adoptionType: UpdatePropertyListingBundleAdoptionType;
};

export type LivingRoom = {
  __typename?: 'LivingRoom';
  bedGroups: Array<BedGroup>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  text?: Maybe<Array<Text>>;
};

export type LivingRoomsMetadata = {
  __typename?: 'LivingRoomsMetadata';
  bedGroups: BedGroupsMetadata;
  text: Array<TextMetadata>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  /**  value of the text  */
  locale: Scalars['Locale']['output'];
  /**  locale of the text  */
  value: Scalars['String']['output'];
};

export type LocalizedStringInput = {
  locale: Scalars['Locale']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Maximum night cap parameters for the jurisdiction. */
export type MaxNightCap = {
  __typename?: 'MaxNightCap';
  /** Annual night cap. */
  annualLimit?: Maybe<Scalars['Int']['output']>;
  /** Whether the cap is enforced (or just educational). */
  isEnforced?: Maybe<Scalars['Boolean']['output']>;
};

export type MaxOccupancyPolicy = {
  __typename?: 'MaxOccupancyPolicy';
  adultCount?: Maybe<Scalars['Int']['output']>;
  note: Array<LocalizedString>;
  totalGuestCount: Scalars['Int']['output'];
};

export type Media = {
  __typename?: 'Media';
  images?: Maybe<ImagesResponse>;
};


export type MediaImagesArgs = {
  filters?: InputMaybe<ImagesFiltersInput>;
};

export type MediaAsset = {
  active: Scalars['Boolean']['output'];
  captions: Array<LocalizedString>;
  id: Scalars['ID']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  publishedUrl?: Maybe<Scalars['String']['output']>;
  status: Status;
  updatedDate: Scalars['DateTime']['output'];
};

export type MediaResponse = {
  elements: Array<MediaAsset>;
  totalCount: Scalars['Int']['output'];
};

/** Indicates who the merchant of record for the reservation is. In other words, who collects the money from the traveler. */
export enum MerchantOfRecord {
  /** Indicates Expedia Group is the Merchant for this Reservation. Expedia Group Collects payment */
  Eg = 'EG',
  /** Indicates Suppliers are the Merchant for this Reservation */
  Supplier = 'SUPPLIER'
}

export enum MessageReviewStatus {
  Accepted = 'ACCEPTED',
  Blocked = 'BLOCKED',
  InReview = 'IN_REVIEW'
}

export type MessageThread = {
  __typename?: 'MessageThread';
  /**  Booking Inquiry associated to MessageThread  */
  bookingInquiry?: Maybe<MessageThreadBookingInquiry>;
  /**
   *  Message created date time in ISO format
   * @deprecated This field was meant to represent datetime values in UTC timezone. It has been replaced by `creationDateTimeUtc`
   */
  createdDateTime?: Maybe<Scalars['DateTime']['output']>;
  /**  Message creation date time in ISO format and UTC timezone */
  creationDateTimeUtc?: Maybe<Scalars['DateTime']['output']>;
  /**  The message thread id  */
  id: Scalars['ID']['output'];
  /**  List of messages  */
  messages: MessageThreadMessagesResponse;
  /**  Primary Traveler  */
  primaryTraveler?: Maybe<MessageThreadTraveler>;
  /**  Property Details  */
  property: Property;
  /**  Reservation associated to MessageThread  */
  reservationSummary?: Maybe<MessageThreadReservationSummary>;
};


export type MessageThreadMessagesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MessageThreadMessagesOrderByInput>;
};

export type MessageThreadAddMessageResponse = {
  __typename?: 'MessageThreadAddMessageResponse';
  /**  The message Id */
  id: Scalars['ID']['output'];
};

export type MessageThreadAttachment = {
  __typename?: 'MessageThreadAttachment';
  /**  The attachment Id */
  id: Scalars['ID']['output'];
  /**  attachment name  */
  name: Scalars['String']['output'];
  /**  attachment upload date time in ISO format and UTC timezone */
  uploadDateTimeUtc: Scalars['DateTime']['output'];
  /**
   *  attachment uploaded date time in ISO format
   * @deprecated This field was meant to represent datetime values in UTC timezone. It has been replaced by `uploadDateTimeUtc`
   */
  uploadedDateTime: Scalars['DateTime']['output'];
  /**  The attachment location  */
  url: Scalars['Url']['output'];
};

export type MessageThreadBookingInquiry = {
  __typename?: 'MessageThreadBookingInquiry';
  adultCount: Scalars['Int']['output'];
  checkInDate?: Maybe<Scalars['LocalDate']['output']>;
  checkOutDate?: Maybe<Scalars['LocalDate']['output']>;
  childCount: Scalars['Int']['output'];
  hasPets: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
};

export type MessageThreadLocalizedString = {
  __typename?: 'MessageThreadLocalizedString';
  value: Scalars['String']['output'];
};

export type MessageThreadLocalizedStringInput = {
  value: Scalars['String']['input'];
};

export type MessageThreadMessage = {
  __typename?: 'MessageThreadMessage';
  /**  List of attachments associated with this message  */
  attachments: Array<MessageThreadAttachment>;
  /**  Message body (only plaintext allowed; should not contain any HTML tags) */
  body?: Maybe<MessageThreadLocalizedString>;
  /**
   *  Time at which the message was created. ISO format (yyyy-MM-dd'T'HH:mm:ss.SSSZ)
   * @deprecated This field was meant to represent datetime values in UTC timezone. It has been replaced by `creationDateTimeUtc`
   */
  createdDateTime?: Maybe<Scalars['DateTime']['output']>;
  /**  Time at which the message was created. ISO format (yyyy-MM-dd'T'HH:mm:ss.SSSZ) and UTC timezone */
  creationDateTimeUtc?: Maybe<Scalars['DateTime']['output']>;
  /**  Message identifier from the client perspective. This value is set by the client in addMessage mutation. */
  fromRole?: Maybe<MessageThreadParticipantRole>;
  /**  The message id */
  id: Scalars['ID']['output'];
  /**  The associated message thread for the message  */
  messageThread: MessageThread;
  /**  Review status of a Message.  */
  reviewStatus?: Maybe<MessageReviewStatus>;
  /**  Message type  */
  type?: Maybe<Scalars['String']['output']>;
};

export type MessageThreadMessagesOrderByInput = {
  field?: InputMaybe<MessageThreadMessagesSortField>;
  order?: InputMaybe<SortOrder>;
};

export type MessageThreadMessagesResponse = {
  __typename?: 'MessageThreadMessagesResponse';
  /**  Represents the next page cursor in the list, Empty if no more pages available */
  cursor?: Maybe<Scalars['String']['output']>;
  /**  list of messages  */
  elements: Array<MessageThreadMessage>;
  /**  Total number of message returned that meet the search criteria  */
  totalCount: Scalars['Int']['output'];
};

export enum MessageThreadMessagesSortField {
  CreationDateTimeUtc = 'CREATION_DATE_TIME_UTC'
}

export enum MessageThreadParticipantRole {
  Supplier = 'SUPPLIER',
  Traveler = 'TRAVELER'
}

export type MessageThreadReservationSummary = {
  __typename?: 'MessageThreadReservationSummary';
  adultCount: Scalars['Int']['output'];
  alternativeIds: ReservationAlternativeIds;
  checkInDate: Scalars['LocalDate']['output'];
  checkOutDate: Scalars['LocalDate']['output'];
  childCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  petCount: Scalars['Int']['output'];
};

export enum MessageThreadSpamStatus {
  NotSpam = 'NOT_SPAM',
  Spam = 'SPAM'
}

export type MessageThreadTraveler = {
  __typename?: 'MessageThreadTraveler';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type MessageThreadsResponse = {
  __typename?: 'MessageThreadsResponse';
  /**  Represents the next page cursor in the list, Empty if no more pages available */
  cursor?: Maybe<Scalars['String']['output']>;
  /**  List of message threads  */
  elements: Array<MessageThread>;
  /**  Total number of message threads returned that meet the search criteria */
  totalCount: Scalars['Int']['output'];
};

export type Metadata = {
  __typename?: 'Metadata';
  locales: Array<Scalars['Locale']['output']>;
  property: PropertyMetadata;
};

/** A Reservation mapping type containing an EG Property ID and a missing Reservation ID. */
export type MissingVrboIdReservationMapping = {
  __typename?: 'MissingVrboIdReservationMapping';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** The EG Reservation ID which failed mapping validation. */
  egReservationId: Scalars['ID']['output'];
};

/** Represents a monetary amount value along with its currency. */
export type Money = {
  __typename?: 'Money';
  /** The actual monetary amount value. The scale of the amount will vary according to the currency or any rate conversion that may have been applied. */
  amount: Scalars['Decimal']['output'];
  /** The code of the currency of the amount. */
  currencyCode: Scalars['CurrencyCode']['output'];
};

/** Represents a monetary amount value along with its currency. */
export type MoneyInput = {
  /** The actual monetary amount value. The scale of the amount will vary according to the currency or any rate conversion that may have been applied. */
  amount: Scalars['Decimal']['input'];
  /** The code of the currency of the amount. */
  currencyCode: Scalars['CurrencyCode']['input'];
};

/** Multi night discounts are ones that have a flat discount percentage for applicable nights (for eg: 15% off on 3rd night). */
export type MultiNightDiscount = Discount & {
  __typename?: 'MultiNightDiscount';
  /** Value of the applicable night on which the discount will be applied. Values permitted: 2 to 28 */
  applicableNight: Scalars['Int']['output'];
  /** Whether the discount applied on the applicable night is recurring */
  isRecurring?: Maybe<Scalars['Boolean']['output']>;
  /** Member only discount value applied */
  memberOnlyAdditionalValue?: Maybe<Scalars['Float']['output']>;
  /** Type of the discount. */
  type: DiscountType;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  /** Value of the discount applied. */
  value: Scalars['Float']['output'];
};

export type MultiNightDiscountCreateInput = {
  /** Value of the applicable night on which the discount will be applied. Values permitted: 2 to 28. */
  applicableNight: Scalars['Int']['input'];
  /** Whether this discount will be applied every consecutive applicable night. */
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  /** Member only discount value applied. */
  memberOnlyAdditionalValue?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  /** Value of the discount applied. */
  value: Scalars['Float']['input'];
};

export type MultiNightDiscountPromotionCreateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates: Array<BlackoutDateRangeInput>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category: PromotionCategory;
  /** Name of the promotion as the partner wants to call it. */
  code: Scalars['String']['input'];
  /** Detail of the actual discount being applied on the promotion. */
  discount: MultiNightDiscountCreateInput;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans: Array<EligibleRatePlanInput>;
  /** Name of the promotion. Values: MULTI_NIGHT_PROMOTION */
  name: PromotionName;
  /** List of restrictions that can be applied to these promotions. */
  restrictions: RestrictionsCreateInput;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status: PromotionStatus;
};

export type MultiNightDiscountPromotionUpdateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates?: InputMaybe<Array<BlackoutDateRangeInput>>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category?: InputMaybe<PromotionCategory>;
  /** Name of the promotion as the partner wants to call it. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Detail of the actual discount being applied on the promotion. */
  discount?: InputMaybe<MultiNightDiscountUpdateInput>;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans?: InputMaybe<Array<EligibleRatePlanInput>>;
  /** Id of the Promotion as stored in the Expedia platform. */
  id: Scalars['ID']['input'];
  /** Name of the promotion. Values: MULTI_NIGHT_PROMOTION */
  name?: InputMaybe<PromotionName>;
  /** List of restrictions that can be applied to these promotions. */
  restrictions?: InputMaybe<RestrictionsUpdateInput>;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status?: InputMaybe<PromotionStatus>;
};

export type MultiNightDiscountUpdateInput = {
  /** Value of the applicable night on which the discount will be applied. Values permitted: 2 to 28. */
  applicableNight: Scalars['Int']['input'];
  /** Whether the discount applied on the applicable night is recurring. */
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  /** Member only discount value applied. */
  memberOnlyAdditionalValue?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit?: InputMaybe<DiscountUnit>;
  /** Value of the discount applied. */
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Add message to message thread  */
  addMessage: MessageThreadAddMessageResponse;
  /** Provide a list of Property IDs that should be archived during the Property ID mapping process. */
  archivePropertyIds?: Maybe<ArchivePropertyIdsPayload>;
  /** Mutation to cancel a pre-stay reservation */
  cancelReservation: CancelReservationPayload;
  /** Cancel reservation reconciliation */
  cancelReservationReconciliation: CancelReservationReconciliationPayload;
  /** Mutation for suppliers to cancel a VRBO reservation - pre & post arrival */
  cancelVrboReservation: CancelVrboReservationPayload;
  /** Update reservation reconciliation */
  changeReservationReconciliation: ChangeReservationReconciliationPayload;
  /** Finalize ID mapping submissions, initiate mapping processing, and prevent further mapping update submissions. */
  commitVrboSupplierIdMappings?: Maybe<CommitVrboSupplierIdMappingsPayload>;
  /** Confirm Reservation sent via Webhook */
  confirmReservationNotification: ConfirmReservationNotificationPayload;
  createCancellationPolicyConfig?: Maybe<CreateCancellationPolicyConfigPayload>;
  /** Create day of week discount promotion */
  createDayOfWeekDiscountPromotion: Promotion;
  /** Create multi night discount promotion. */
  createMultiNightDiscountPromotion: Promotion;
  /** Create callback configuration for notification profile. */
  createNotificationCallbackConfig?: Maybe<CreateNotificationCallbackConfigPayload>;
  createProperty?: Maybe<CreatePropertyPayload>;
  createPropertyImage?: Maybe<CreatePropertyImagePayload>;
  createRatePlan?: Maybe<CreateRatePlanPayload>;
  /** Create single discount promotion. */
  createSingleDiscountPromotion: Promotion;
  createUnitSpaces?: Maybe<CreateUnitSpacesPayload>;
  deleteImage?: Maybe<DeleteImagePayload>;
  /** Delete callback configuration from notification profile. */
  deleteNotificationCallbackConfig?: Maybe<DeleteNotificationCallbackConfigPayload>;
  deleteUnitSpace?: Maybe<DeleteUnitSpacePayload>;
  disableProperty?: Maybe<DisablePropertyPayload>;
  enableProperty?: Maybe<EnablePropertyPayload>;
  /** Add new listing discount */
  joinNewListingDiscount?: Maybe<Scalars['Boolean']['output']>;
  /** Partner/Owner submits a traveler/guest rating */
  rateGuest?: Maybe<GuestRating>;
  /** Refresh secret for callback configuration based on callbackConfigId. */
  refreshNotificationCallbackConfigSecret?: Maybe<RefreshNotificationCallbackConfigSecretPayload>;
  /** Update reservation with good will refund */
  refundReservation: RefundReservationPayload;
  replaceCancellationPolicyConfig?: Maybe<ReplaceCancellationPolicyConfigPayload>;
  savePropertyContact?: Maybe<Contact>;
  /**  Send a new message to a message thread */
  sendMessage?: Maybe<SendMessagePayload>;
  /** Send test notification using a given eventType and Payload */
  sendTestNotification?: Maybe<SendTestNotificationPayload>;
  /** Set spam status for a message thread */
  setMessageThreadSpamStatus?: Maybe<SetMessageThreadSpamStatusPayload>;
  /** Partner/Owner submits a response to a traveler review */
  setReviewResponse: UpdatedReviewResponse;
  /** Subscribe to notification event type for a given notification subscription profile. */
  subscribeNotificationEventType?: Maybe<SubscribeNotificationEventTypePayload>;
  /** Unsubscribe from notification event type for a given notification subscription profile. */
  unsubscribeNotificationEventType?: Maybe<UnsubscribeNotificationEventTypePayload>;
  /** Update day of week discount promotion */
  updateDayOfWeekDiscountPromotion: Promotion;
  updateImage?: Maybe<UpdateImagePayload>;
  /** Update multi night discount promotion. */
  updateMultiNightDiscountPromotion: Promotion;
  /** Update notification callback configuration profile attributes (callbackUrl, apiKey, requestTimeout) based on callbackConfigId. */
  updateNotificationCallbackConfig?: Maybe<UpdateNotificationCallbackConfigPayload>;
  /** Update notification callback configuration for a subscribed notification event type */
  updateNotificationEventTypeSubscription?: Maybe<UpdateNotificationEventTypeSubscriptionPayload>;
  updateProperty?: Maybe<UpdatePropertyPayload>;
  updatePropertyListingBundleAdoption: ListingBundleAdoptionPayload;
  /** Update single discount promotion. */
  updateSingleDiscountPromotion: Promotion;
  updateUnit?: Maybe<UpdatePropertyUnitPayload>;
  /** Update unit registration of property using property associated attributes id/idSource */
  updateUnitRegistration: PropertyRegistration;
  updateUnitSpaces?: Maybe<UpdateUnitSpacesPayload>;
  /** Submit one or many Property ID mapping updates. */
  updateVrboSupplierPropertyIds?: Maybe<UpdateVrboSupplierPropertyIdsPayload>;
  /** Submit one or many Reservation ID mapping updates. */
  updateVrboSupplierReservationIds?: Maybe<UpdateVrboSupplierReservationIdsPayload>;
  /** Remove new listing discount */
  withdrawNewListingDiscount?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddMessageArgs = {
  message: AddMessageThreadMessageInput;
  messageThreadId: Scalars['ID']['input'];
};


export type MutationArchivePropertyIdsArgs = {
  input: ArchivePropertyIdsInput;
};


export type MutationCancelReservationArgs = {
  input: CancelReservationInput;
};


export type MutationCancelReservationReconciliationArgs = {
  input: CancelReservationReconciliationInput;
};


export type MutationCancelVrboReservationArgs = {
  input: CancelVrboReservationInput;
};


export type MutationChangeReservationReconciliationArgs = {
  input: ChangeReservationReconciliationInput;
};


export type MutationCommitVrboSupplierIdMappingsArgs = {
  input: CommitVrboSupplierIdMappingsInput;
};


export type MutationConfirmReservationNotificationArgs = {
  input: ConfirmReservationNotificationInput;
};


export type MutationCreateCancellationPolicyConfigArgs = {
  input: CreateCancellationPolicyConfigInput;
};


export type MutationCreateDayOfWeekDiscountPromotionArgs = {
  promotion: DayOfWeekDiscountPromotionCreateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationCreateMultiNightDiscountPromotionArgs = {
  promotion: MultiNightDiscountPromotionCreateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationCreateNotificationCallbackConfigArgs = {
  input: CreateNotificationCallbackConfigInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreatePropertyImageArgs = {
  input: CreatePropertyImageInput;
};


export type MutationCreateRatePlanArgs = {
  input: CreateRatePlanInput;
};


export type MutationCreateSingleDiscountPromotionArgs = {
  promotion: SingleDiscountPromotionCreateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationCreateUnitSpacesArgs = {
  input: CreateUnitSpacesInput;
};


export type MutationDeleteImageArgs = {
  input: DeleteImageInput;
};


export type MutationDeleteNotificationCallbackConfigArgs = {
  input: DeleteNotificationCallbackConfigInput;
};


export type MutationDeleteUnitSpaceArgs = {
  input: DeleteUnitSpaceInput;
};


export type MutationDisablePropertyArgs = {
  input: DisablePropertyInput;
};


export type MutationEnablePropertyArgs = {
  input: EnablePropertyInput;
};


export type MutationJoinNewListingDiscountArgs = {
  id: Scalars['String']['input'];
  idSource: IdSource;
};


export type MutationRateGuestArgs = {
  input: RateGuestInput;
  propertyId: Scalars['ID']['input'];
  propertyIdSource: IdSource;
};


export type MutationRefreshNotificationCallbackConfigSecretArgs = {
  input: RefreshNotificationCallbackConfigSecretInput;
};


export type MutationRefundReservationArgs = {
  input: RefundReservationInput;
};


export type MutationReplaceCancellationPolicyConfigArgs = {
  input: ReplaceCancellationPolicyConfigInput;
};


export type MutationSavePropertyContactArgs = {
  contact: SavePropertyContactInput;
  propertyId: Scalars['ID']['input'];
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationSendTestNotificationArgs = {
  input: SendTestNotificationInput;
};


export type MutationSetMessageThreadSpamStatusArgs = {
  input: SetMessageThreadSpamStatusInput;
};


export type MutationSetReviewResponseArgs = {
  body: InputLocalizedString;
  propertyId: Scalars['ID']['input'];
  propertyIdSource: IdSource;
  reviewId: Scalars['ID']['input'];
};


export type MutationSubscribeNotificationEventTypeArgs = {
  input: SubscribeNotificationEventTypeInput;
};


export type MutationUnsubscribeNotificationEventTypeArgs = {
  input: UnsubscribeNotificationEventTypeInput;
};


export type MutationUpdateDayOfWeekDiscountPromotionArgs = {
  promotion: DayOfWeekDiscountPromotionUpdateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateMultiNightDiscountPromotionArgs = {
  promotion: MultiNightDiscountPromotionUpdateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationUpdateNotificationCallbackConfigArgs = {
  input: UpdateNotificationCallbackConfigInput;
};


export type MutationUpdateNotificationEventTypeSubscriptionArgs = {
  input: UpdateNotificationEventTypeSubscriptionInput;
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


export type MutationUpdatePropertyListingBundleAdoptionArgs = {
  input: PropertyListingBundleAdoptionInput;
};


export type MutationUpdateSingleDiscountPromotionArgs = {
  promotion: SingleDiscountPromotionUpdateInput;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
};


export type MutationUpdateUnitArgs = {
  input: UpdatePropertyUnitInput;
};


export type MutationUpdateUnitRegistrationArgs = {
  forceSave?: InputMaybe<Scalars['Boolean']['input']>;
  propertyId: Scalars['String']['input'];
  propertyIdSource: IdSource;
  registration: UpdateUnitRegistrationInput;
};


export type MutationUpdateUnitSpacesArgs = {
  input: UpdateUnitSpacesInput;
};


export type MutationUpdateVrboSupplierPropertyIdsArgs = {
  input: UpdateVrboSupplierPropertyIdsInput;
};


export type MutationUpdateVrboSupplierReservationIdsArgs = {
  input: UpdateVrboSupplierReservationIdsInput;
};


export type MutationWithdrawNewListingDiscountArgs = {
  id: Scalars['String']['input'];
  idSource: IdSource;
};

export type Notification = {
  __typename?: 'Notification';
  /**  creation date time of the notification  */
  creationDateTime: Scalars['DateTime']['output'];
  /**  The event type  */
  eventType: Scalars['String']['output'];
  /**  notification identifier  */
  notificationId: Scalars['String']['output'];
  /**  notification payload  */
  payload: Scalars['JSON']['output'];
};

export type NotificationCallbackConfig = {
  __typename?: 'NotificationCallbackConfig';
  /** Callback url where the notification will be delivered */
  callbackUrl: Scalars['Url']['output'];
  /** Email address for correspondence */
  contactEmail?: Maybe<Scalars['EmailAddress']['output']>;
  /** Id of the callback configuration object */
  id: Scalars['ID']['output'];
  /** Request timeout when sending a notification on the callback url */
  requestTimeoutSeconds: Scalars['Int']['output'];
  /** Secret expiration date time */
  secretExpirationDateTime: Scalars['LocalDateTime']['output'];
};

export type NotificationError = {
  __typename?: 'NotificationError';
  /** Code that reflects the specific error encountered during the test */
  code: Scalars['String']['output'];
  /** Human readable message describing the error encountered */
  message: Scalars['String']['output'];
};

export type NotificationEventType = {
  __typename?: 'NotificationEventType';
  /** Description of the event type */
  description: Scalars['String']['output'];
  /** Event type name */
  name: Scalars['String']['output'];
};

export type NotificationEventTypeSubscription = {
  __typename?: 'NotificationEventTypeSubscription';
  /** Callback configuration information for the event type subscription */
  callbackConfig: NotificationCallbackConfig;
  /** Name of the event type */
  eventType: Scalars['String']['output'];
};

export type NotificationProfile = {
  __typename?: 'NotificationProfile';
  /** Retrieve callback configurations of notification profile */
  callbackConfigs: Array<NotificationCallbackConfig>;
  /** Retrieve subscriptions of notification profile */
  subscriptions: Array<NotificationSubscription>;
};

export type NotificationSubscription = {
  __typename?: 'NotificationSubscription';
  /** List of event type subscriptions */
  eventTypeSubscriptions: Array<NotificationEventTypeSubscription>;
  /** Product name for the subscription */
  product: Scalars['String']['output'];
};

export type Office = {
  __typename?: 'Office';
  bedGroups: Array<BedGroup>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  text?: Maybe<Array<Text>>;
};

export type OfficesMetadata = {
  __typename?: 'OfficesMetadata';
  bedGroups: BedGroupsMetadata;
  text: Array<TextMetadata>;
};

export type OneOfImageSourceFilterInput = {
  operator?: InputMaybe<OneOfOperator>;
  values: Array<ImageSource>;
};

export type OneOfLocaleFilterInput = {
  operator?: InputMaybe<OneOfOperator>;
  values: Array<Scalars['Locale']['input']>;
};

export type OneOfMediaStatusFilterInput = {
  operator?: InputMaybe<OneOfOperator>;
  values: Array<StatusInput>;
};

export enum OneOfOperator {
  In = 'IN',
  NotIn = 'NOT_IN'
}

export type OneOfStringFilterInput = {
  operator?: InputMaybe<OneOfOperator>;
  values: Array<Scalars['String']['input']>;
};

export type OwnerResponse = {
  __typename?: 'OwnerResponse';
  /**  review response text  */
  body: LocalizedString;
  /**  review create time in ISO format  */
  createdDateTime: Scalars['String']['output'];
  /**  review updated time in ISO format  */
  lastUpdatedDateTime: Scalars['String']['output'];
  /**  status of the management response  */
  status: Scalars['String']['output'];
};

/** provides information about the current page of results for a given ReservationsConnection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** the value of the cursor of the last reservation in the current page */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** indicates if there are additional pages to retrieve */
  hasNextPage: Scalars['Boolean']['output'];
};

/** Payment Details */
export type Payment = {
  __typename?: 'Payment';
  /** Schedule and details of the Payment */
  installments: Array<Installment>;
  /** Text that is displayed to travelers if a payment type is associated with the reservation. */
  instructions: Scalars['String']['output'];
  instrument?: Maybe<PaymentInstrument>;
  /** Reservation payment status associated with the reservation. */
  status?: Maybe<ReservationPaymentStatus>;
};

export type PaymentCardDescriptor = {
  __typename?: 'PaymentCardDescriptor';
  /** Specifies the code associated with the provider of this card: AFFIRM, VISA, MASTERCARD, etc. */
  code: Scalars['String']['output'];
  /** Specifies the type of the card: ALTERNATIVE (for Affirm payments), CREDIT, or DEBIT (debit cards used as credit cards). */
  type: Scalars['String']['output'];
};

export type PaymentCardDescriptorInput = {
  /** Specifies the code associated with the provider of this card: AFFIRM, VISA, MASTERCARD, etc. */
  code: Scalars['String']['input'];
  /** Specifies the type of the card: ALTERNATIVE (for Affirm payments), CREDIT, or DEBIT (debit cards used as credit cards). */
  type: Scalars['String']['input'];
};

export type PaymentCardDescriptorMetadata = {
  __typename?: 'PaymentCardDescriptorMetadata';
  codes: Array<Scalars['String']['output']>;
  types: Array<Scalars['String']['output']>;
};

/** Payment Instrument Details */
export type PaymentInstrument = {
  __typename?: 'PaymentInstrument';
  /** Payment Token and its expiration date time */
  token: PaymentToken;
  /** Type for Payment Instrument */
  type: PaymentInstrumentType;
};

/** Type for Payment Reservation */
export enum PaymentInstrumentType {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  ExpediaVirtualCard = 'EXPEDIA_VIRTUAL_CARD',
  GuestCreditCard = 'GUEST_CREDIT_CARD',
  None = 'NONE'
}

export type PaymentInvoiceDescriptor = {
  __typename?: 'PaymentInvoiceDescriptor';
  /** Represents the acceptable invoice payment method: AMEX, CASH, CHECK, PAYPAL, etc. */
  type: Scalars['String']['output'];
};

export type PaymentInvoiceDescriptorInput = {
  /** Represents the acceptable invoice payment method: AMEX, CASH, CHECK, PAYPAL, etc. */
  type: Scalars['String']['input'];
};

export type PaymentInvoiceDescriptorMetadata = {
  __typename?: 'PaymentInvoiceDescriptorMetadata';
  types: Array<Scalars['String']['output']>;
};

export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** Expiration of the token */
  expirationDateTime?: Maybe<Scalars['String']['output']>;
  /** Value of the token */
  value?: Maybe<Scalars['String']['output']>;
};

export type PetsPolicy = {
  __typename?: 'PetsPolicy';
  allowed: Scalars['Boolean']['output'];
  allowedPets?: Maybe<AllowedPets>;
  note: Array<LocalizedString>;
};

export type PetsPolicyMetadata = {
  __typename?: 'PetsPolicyMetadata';
  allowedPets: AllowedPetsMetadata;
};

export type PhoneNumber = {
  __typename?: 'PhoneNumber';
  areaCode?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  phoneNumberType: PhoneNumberType;
};

export type PhoneNumberInput = {
  areaCode?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  extension?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  phoneNumberType: PhoneNumberType;
};

export enum PhoneNumberType {
  Business = 'BUSINESS'
}

export type Policies = {
  __typename?: 'Policies';
  bookingPolicy?: Maybe<BookingPolicy>;
  cancellationPolicyConfigs?: Maybe<Array<CancellationPolicyConfig>>;
  stayPolicy?: Maybe<StayPolicy>;
};

export type PolicyMetadata = {
  __typename?: 'PolicyMetadata';
  bookingPolicies: BookingPolicyMetadata;
  stayPolicies: StayPolicyMetadata;
};

export enum PricingModel {
  OccupancyBasedPricing = 'OCCUPANCY_BASED_PRICING',
  OccupancyBasedPricingByDayOfArrival = 'OCCUPANCY_BASED_PRICING_BY_DAY_OF_ARRIVAL',
  OccupancyBasedPricingByLengthOfStay = 'OCCUPANCY_BASED_PRICING_BY_LENGTH_OF_STAY',
  PerDayPricing = 'PER_DAY_PRICING',
  PerDayPricingByDayOfArrival = 'PER_DAY_PRICING_BY_DAY_OF_ARRIVAL',
  PerDayPricingByLengthOfStay = 'PER_DAY_PRICING_BY_LENGTH_OF_STAY'
}

export type Promotion = {
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category: PromotionCategory;
  /** Id of the Promotion as stored in the Expedia platform. */
  id: Scalars['ID']['output'];
  /** It indicates if the promotion is negotiated. */
  isContractedPromotion?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the promotion. Values: BASIC, EARLY_BOOKING_PROMOTION or SAME_DAY_PROMOTION. */
  name: PromotionName;
  /** Sell status of the promotion. Values: EXPIRED, CURRENT or FUTURE. For retrieval only. */
  sellStatus?: Maybe<PromotionSellStatus>;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status: PromotionStatus;
};

export enum PromotionCategory {
  DiscountPromotion = 'DISCOUNT_PROMOTION'
}

export type PromotionEnrollment = {
  __typename?: 'PromotionEnrollment';
  enrolled?: Maybe<Scalars['Boolean']['output']>;
  ineligibilityReasons?: Maybe<Array<Scalars['String']['output']>>;
  name: PromotionEnrollmentName;
  status: PromotionStatus;
};

export enum PromotionEnrollmentName {
  NewListingDiscount = 'NEW_LISTING_DISCOUNT'
}

export enum PromotionName {
  BasicPromotion = 'BASIC_PROMOTION',
  EarlyBookingPromotion = 'EARLY_BOOKING_PROMOTION',
  MultiNightPromotion = 'MULTI_NIGHT_PROMOTION',
  SameDayPromotion = 'SAME_DAY_PROMOTION'
}

export type PromotionNode = {
  __typename?: 'PromotionNode';
  /** Cursor value for this edge. */
  cursor: Scalars['String']['output'];
  /** node points to the actual promotion data. */
  node: Promotion;
};

export enum PromotionSellStatus {
  Current = 'CURRENT',
  Expired = 'EXPIRED',
  Future = 'FUTURE'
}

export enum PromotionStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Promotions = {
  __typename?: 'Promotions';
  /** Edges in the connection to traverse, each contain a cursor and node. */
  edges: Array<PromotionNode>;
  /** Information about the current page of results. */
  pageInfo: CursorBasedPageInfo;
  /** Total number of promotions returned that meet the search criteria. */
  totalCount: Scalars['Int']['output'];
};

/** A list of Properties associated with a given Advertiser account. */
export type PropertiesByAdvertiserResponse = {
  __typename?: 'PropertiesByAdvertiserResponse';
  cursor?: Maybe<Scalars['String']['output']>;
  elements: Array<Property>;
  totalCount: Scalars['Int']['output'];
};

/** Property content by EG Property ID, as defined in product-listing subgraph */
export type Property = {
  __typename?: 'Property';
  /** Whether a property + associated units or unit is live in the EG system. */
  activeStatus?: Maybe<ActiveStatus>;
  address: Address;
  /** aggregated review scores for property */
  aggregatedReviews?: Maybe<AggregatedReviewsResponse>;
  amenities?: Maybe<Array<Amenity>>;
  contacts?: Maybe<Array<Contact>>;
  /** @deprecated Coordinates are now nested under `location`. Use the sibling `location.coordinates` field instead. */
  coordinates: Coordinates;
  /** The default locale is used as a fallback when no other locale is specified.  IETF BCP 47 language tag, defaulting to en-US. */
  defaultLocale: Scalars['Locale']['output'];
  /** Jurisdiction regulatory requirements/parameters that apply to this property's rental conditions. */
  district?: Maybe<District>;
  /** @deprecated deprecated, replace with coordinates */
  geoLocation: Coordinates;
  /** Known IDs for the property on the source system */
  id: Scalars['ID']['output'];
  /** Known IDs for the property. */
  ids: Array<IdNode>;
  /** Listings of the property on the requested domains, supported domains: [expedia.com, vrbo.com] */
  listings?: Maybe<Array<Maybe<PropertyListing>>>;
  location: PropertyLocation;
  media: Media;
  /**  Retrieves multiple message threads for a property  */
  messageThreads: MessageThreadsResponse;
  messages?: Maybe<MessageThreadMessagesResponse>;
  /** Name/headline of the property for the default locale. */
  name: Scalars['String']['output'];
  /** List of all the names for the property, which therefore also contains the above 'name' as well. */
  names?: Maybe<Array<LocalizedString>>;
  policies: Policies;
  promotions: Promotions;
  /** Internal reference name for the property for the default locale. */
  referenceName?: Maybe<Scalars['String']['output']>;
  /** retrieve reservation data by property ID */
  reservations: ReservationsConnection;
  /** paginated traveler review data */
  reviews: ReviewResponse;
  text?: Maybe<Array<Text>>;
  type: PropertyType;
  /** A collection of Unit configurations for the Property */
  units?: Maybe<Array<Maybe<Unit>>>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyAggregatedReviewsArgs = {
  filters: AggregatedReviewsFiltersInput;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyAmenitiesArgs = {
  filters?: InputMaybe<AmenitiesFiltersInput>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyContactsArgs = {
  filters?: InputMaybe<PropertyContactsFiltersInput>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyDistrictArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyListingsArgs = {
  domains: Array<Scalars['String']['input']>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyMessageThreadsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters: PropertyMessageThreadsFiltersInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PropertyMessageThreadsOrderByInput>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyMessagesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters: PropertyMessagesFiltersInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FiltersInput>;
  pageSize: Scalars['Int']['input'];
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyReservationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  checkOutDate?: InputMaybe<CheckOutDateFilter>;
  filter?: InputMaybe<ReservationFilterInput>;
  pageSize: Scalars['Int']['input'];
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewFilter>;
  orderBy?: InputMaybe<ReviewsOrderBy>;
  pageSize: Scalars['Int']['input'];
};


/** Property content by EG Property ID, as defined in product-listing subgraph */
export type PropertyTextArgs = {
  filters?: InputMaybe<TextFiltersInput>;
};

export type PropertyContactsFiltersInput = {
  contactType?: InputMaybe<ContactTypeFilterInput>;
};

export type PropertyListing = {
  __typename?: 'PropertyListing';
  /** Locale for the property listing on the requested domain */
  locale?: Maybe<Scalars['String']['output']>;
  /** URL listing the property when the property is enabled and distributed on the requested domain */
  url?: Maybe<Scalars['String']['output']>;
};

export type PropertyListingBundleAdoption = {
  __typename?: 'PropertyListingBundleAdoption';
  adoptionList: Array<Scalars['String']['output']>;
  adoptionType: AdoptionType;
};

export type PropertyListingBundleAdoptionInput = {
  adoptionList?: InputMaybe<Array<Scalars['String']['input']>>;
  adoptionTypes: UpdatePropertyListingBundleAdoptionType;
};

export type PropertyLocation = {
  __typename?: 'PropertyLocation';
  coordinates?: Maybe<Coordinates>;
  hideExactLocation: Scalars['Boolean']['output'];
};

/** A Property ID mapping type containing the mapped IDs and status info. */
export type PropertyMapping = {
  __typename?: 'PropertyMapping';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** An Error type containing the Error Code and Error message info. */
  error?: Maybe<VrboIdMappingError>;
  /** Status for processing this mapping. */
  mappingProcessingStatus: VrboMappingProcessingStatus;
  /** The new Supplier Property ID to associate. */
  supplierPropertyId: Scalars['ID']['output'];
  /** The new Supplier Unit ID to associate. */
  supplierUnitId: Scalars['ID']['output'];
};

/** A Property Error mapping type containing the Property IDs and Error message info. */
export type PropertyMappingError = {
  __typename?: 'PropertyMappingError';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** An Error type containing the Error Code and Error message info. */
  error: VrboIdMappingError;
};

export type PropertyMessageThreadsFiltersInput = {
  /** createdDate field is deprecated, please use `creationDateTime` */
  createdDate?: InputMaybe<DateTimeRangeFilterInput>;
  creationDateTime?: InputMaybe<DateTimeRangeFilterInput>;
};

export type PropertyMessageThreadsOrderByInput = {
  field?: InputMaybe<PropertyMessageThreadsSortField>;
  order?: InputMaybe<SortOrder>;
};

export enum PropertyMessageThreadsSortField {
  CreationDateTimeUtc = 'CREATION_DATE_TIME_UTC'
}

export type PropertyMessagesFiltersInput = {
  /** createdDate field is deprecated, please use `creationDateTime` */
  createdDate?: InputMaybe<DateTimeRangeFilterInput>;
  creationDateTime?: InputMaybe<DateTimeRangeFilterInput>;
};

export type PropertyMetadata = {
  __typename?: 'PropertyMetadata';
  amenities: Array<AmenityMetadata>;
  policies: PolicyMetadata;
  text: Array<TextMetadata>;
  type: Array<PropertyTypeMetadata>;
  units: UnitsMetadata;
};

/** Government registration information for a given property and details on the property units. */
export type PropertyRegistration = {
  __typename?: 'PropertyRegistration';
  /** Additional property registration information required by certain districts. */
  applicableRegulations?: Maybe<Array<ApplicableRegulations>>;
  /** Whether the property registration information is sufficient to fulfill the requirements of the property's district. */
  complete: Scalars['Boolean']['output'];
  /** List of registration information for each bookable unit of a multi-unit property. */
  details: Array<UnitRegistrationDetail>;
  /** Geographical jurisdiction identifier. For non-configured districts, this is null. */
  district?: Maybe<Scalars['String']['output']>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  code: Scalars['String']['output'];
};

export type PropertyTypeMetadata = {
  __typename?: 'PropertyTypeMetadata';
  code: Scalars['String']['output'];
};

export type PropertyUnitArea = {
  __typename?: 'PropertyUnitArea';
  unit: AreaUnit;
  value: Scalars['Int']['output'];
};

/** Purpose of the requirement. */
export enum Purpose {
  DataSharing = 'DATA_SHARING'
}

export type Query = {
  __typename?: 'Query';
  cancellationPolicyConfig?: Maybe<CancellationPolicyConfig>;
  /** retrieve District information by latitude/longitude coordinates and optionally locale */
  districtByCoordinates?: Maybe<District>;
  /** Get Property Listing Bundle Adoption */
  getPropertyListingBundleAdoption: PropertyListingBundleAdoption;
  /** Retrieves a single message using its unique identifier. */
  message?: Maybe<MessageThreadMessage>;
  /** Retrieves a single message thread using its unique identifier. */
  messageThread?: Maybe<MessageThread>;
  metadata?: Maybe<Metadata>;
  /** Retrieves available event types to subscribe to */
  notificationEventTypes?: Maybe<Array<NotificationEventType>>;
  /** Retrieves configurations on notification platform */
  notificationProfile?: Maybe<NotificationProfile>;
  /** Get the list of promotions that match the filters specified. */
  promotions: Promotions;
  /** Retrieve a list of Properties associated for a given Advertiser. */
  propertiesByAdvertiser?: Maybe<PropertiesByAdvertiserResponse>;
  property?: Maybe<Property>;
  ratePlan?: Maybe<RatePlan>;
  /** Retrieves failed notifications */
  undeliveredNotifications?: Maybe<UndeliveredNotificationsResponse>;
  /** Retrieve the current status of ID Mapping progress for a given Advertiser. */
  vrboIdMappingProgress?: Maybe<VrboIdMappingProgress>;
};


export type QueryCancellationPolicyConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDistrictByCoordinatesArgs = {
  latitude: Scalars['Float']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  longitude: Scalars['Float']['input'];
};


export type QueryMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMessageThreadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FiltersInput>;
  pageSize: Scalars['Int']['input'];
  propertyId: Scalars['String']['input'];
};


export type QueryPropertiesByAdvertiserArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  idSource: IdSource;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPropertyArgs = {
  id: Scalars['String']['input'];
  idSource?: InputMaybe<IdSource>;
};


export type QueryRatePlanArgs = {
  propertyId: Scalars['ID']['input'];
  ratePlanId: Scalars['ID']['input'];
};


export type QueryUndeliveredNotificationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters: UndeliveredNotificationsFiltersInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVrboIdMappingProgressArgs = {
  advertiserId: Scalars['ID']['input'];
};

export enum RangeOperator {
  Exclusive = 'EXCLUSIVE',
  Inclusive = 'INCLUSIVE'
}

export type RateGuestInput = {
  /**  will consider Guest for future reservations  */
  recommendGuest: Scalars['Boolean']['input'];
  /** reservation ID. */
  reservationId: Scalars['ID']['input'];
  /** Source of the reservation ID. */
  reservationIdSource: IdSource;
  /**  categorized ratings  */
  starRatings: Array<RatingInput>;
};

export type RatePlan = {
  __typename?: 'RatePlan';
  baseRateGuestCount?: Maybe<Scalars['Int']['output']>;
  cancellationPolicyConfig?: Maybe<CancellationPolicyConfig>;
  creationDateTime: Scalars['DateTime']['output'];
  distributionRules: Array<RatePlanDistributionRule>;
  feeSet?: Maybe<FeeSet>;
  id: Scalars['ID']['output'];
  lastUpdateDateTime: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  paymentScheduleApplicable?: Maybe<Scalars['Boolean']['output']>;
  pricingModel: PricingModel;
  propertyId: Scalars['ID']['output'];
  restrictions: RatePlanRestrictions;
  status: RatePlanStatus;
  taxInclusive?: Maybe<Scalars['Boolean']['output']>;
  type: RatePlanType;
  unitId: Scalars['ID']['output'];
};

export type RatePlanDistributionRule = {
  __typename?: 'RatePlanDistributionRule';
  merchantOfRecord: MerchantOfRecord;
  ratePlanCode: Scalars['String']['output'];
};

export type RatePlanDistributionRuleInput = {
  merchantOfRecord: MerchantOfRecord;
  ratePlanCode: Scalars['String']['input'];
};

export type RatePlanRestrictions = {
  __typename?: 'RatePlanRestrictions';
  advanceBookingDays?: Maybe<IntRange>;
  lengthOfStay?: Maybe<IntRange>;
  mobileOnly?: Maybe<Scalars['Boolean']['output']>;
  reservationDates?: Maybe<DateRange>;
  travelDates?: Maybe<DateRange>;
};

export enum RatePlanStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum RatePlanType {
  B2BDistribution = 'B2B_DISTRIBUTION',
  Business = 'BUSINESS',
  Package = 'PACKAGE',
  PackageDistribution = 'PACKAGE_DISTRIBUTION',
  Standalone = 'STANDALONE'
}

/** Time frame to which the rate is applied. */
export enum RateTimeUnit {
  PerDay = 'PER_DAY',
  PerStay = 'PER_STAY',
  PerWeek = 'PER_WEEK'
}

export enum RateType {
  /** net amount: gross amount - commission */
  Net = 'NET',
  /** gross amount */
  Sell = 'SELL'
}

export type Rating = {
  __typename?: 'Rating';
  /**  rating category  */
  category: Scalars['String']['output'];
  /**  value of the rating  */
  value: Scalars['String']['output'];
};

export type RatingInput = {
  /**  rating category  */
  category: Scalars['String']['input'];
  /**  value of the rating  */
  value: Scalars['String']['input'];
};

/** Reconciliation eligibility collection */
export type ReconEligibility = {
  __typename?: 'ReconEligibility';
  /** irreconcilable scenarios collection */
  invalidScenarios?: Maybe<Array<InvalidScenario>>;
  /** Reconcilable scenarios */
  validScenarios?: Maybe<Array<Scalars['String']['output']>>;
};

/** Type of fee in reconciliation. */
export enum ReconciliationFeeType {
  ReconciledAmount = 'RECONCILED_AMOUNT'
}

export type RefreshNotificationCallbackConfigSecretInput = {
  /** Id of callback configuration to update */
  callbackConfigId: Scalars['ID']['input'];
};

export type RefreshNotificationCallbackConfigSecretPayload = {
  __typename?: 'RefreshNotificationCallbackConfigSecretPayload';
  /** Id of callback configuration whose secret is updated */
  callbackConfigId: Scalars['ID']['output'];
  /** Callback Configuration secret string */
  secret: Scalars['String']['output'];
  /** Secret expiration date time */
  secretExpirationDateTime: Scalars['LocalDateTime']['output'];
};

export type RefundReservationInput = {
  /** The ID of the property where the change has been requested. */
  propertyId: Scalars['ID']['input'];
  /** Reason for cancelling the reservation */
  reason: ReservationRefundReason;
  /** Amount & currencyCode */
  refund: MoneyInput;
  /** Identifier associated with the reservation to be changed. */
  reservationId: Scalars['ID']['input'];
};

export type RefundReservationPayload = {
  __typename?: 'RefundReservationPayload';
  /** Identifier associated with the reservation changed */
  reservation?: Maybe<Reservation>;
};

/** Government registration information for a given property. */
export type Registration = {
  __typename?: 'Registration';
  /** Additional property registration information required by certain districts. */
  applicableRegulations?: Maybe<Array<ApplicableRegulations>>;
  /** Whether the property registration information is sufficient to fulfill the requirements of the property's district. */
  complete: Scalars['Boolean']['output'];
  /** List of registration information for the specified unit of a multi-unit property. */
  detail: RegistrationDetail;
  /** Geographical jurisdiction identifier. For non-configured districts, this is null. */
  district?: Maybe<Scalars['String']['output']>;
};

/** Registration information for each bookable unit of a multi-unit property. */
export type RegistrationDetail = {
  __typename?: 'RegistrationDetail';
  /** Acknowledgement records for the bookable unit. */
  acknowledgementRecords: Array<AcknowledgementRecord>;
  /** Additional information about the bookable unit required by certain districts. */
  applicableRegulations: Array<ApplicableRegulations>;
  /** Links for registration documentation files (if required). */
  attachmentUrls?: Maybe<Array<AttachmentUrl>>;
  /** Describes whether the unit is compliant with the local jurisdiction's regulatory requirements. */
  compliant?: Maybe<Compliant>;
  /** Registration number displayed to the traveler. */
  displayRegistrationNumber?: Maybe<Scalars['String']['output']>;
  /** List of exemptions for the property, such as maximum night cap. */
  exemptionCategories?: Maybe<Array<ExemptionCategory>>;
  /** Number of rooms in the bookable unit. */
  numberOfPhysicalRooms?: Maybe<Scalars['Int']['output']>;
  /** Registration records for the bookable unit filed with the governing jurisdiction. */
  registrationRecords: Array<RegistrationRecord>;
  /** Property classification category as maintained by the governing jurisdiction. */
  regulatoryCategory: RegulatoryCategory;
  /** Regulatory category in the specified locale. */
  regulatoryCategoryLabel: Scalars['String']['output'];
  /** Property subtype, such as primary or secondary, or null if not applicable. */
  regulatorySubType?: Maybe<Scalars['String']['output']>;
  /** Property type, such as boat, trailer, residence, etc. */
  regulatoryType?: Maybe<Scalars['String']['output']>;
  /** Unit ID assigned by Expedia Group. */
  unitId: Scalars['ID']['output'];
};

/** Registration information for each bookable unit of a multi-unit property. */
export type RegistrationDetailInput = {
  /** Acknowledgement records for the bookable unit. */
  acknowledgementRecords?: InputMaybe<Array<AcknowledgementRecordInput>>;
  /** Additional information about the bookable unit required by certain districts. */
  applicableRegulations?: InputMaybe<Array<ApplicableRegulationsInput>>;
  /** Links for registration documentation files (if required). */
  attachmentUrls?: InputMaybe<Array<AttachmentUrlInput>>;
  /** Registration number displayed to the traveler. */
  displayRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** List of exemptions for the property, such as maximum night cap. */
  exemptionCategories?: InputMaybe<Array<ExemptionCategory>>;
  /** Number of rooms in the bookable unit. */
  numberOfPhysicalRooms?: InputMaybe<Scalars['Int']['input']>;
  /** Registration records for the bookable unit filed with the governing jurisdiction. */
  registrationRecords: Array<RegistrationRecordInput>;
  /** Property classification category as maintained by the governing jurisdiction. */
  regulatoryCategory: RegulatoryCategory;
  /** Property subtype, such as primary or secondary, or null if not applicable. */
  regulatorySubType?: InputMaybe<Scalars['String']['input']>;
  /** Property type, such as boat, trailer, residence, etc. */
  regulatoryType: Scalars['String']['input'];
  /** Unit ID assigned by Expedia Group. */
  unitId: Scalars['String']['input'];
};

/** Registration number requirements. */
export type RegistrationNumberRequirement = {
  __typename?: 'RegistrationNumberRequirement';
  /** Whether pending applications are allowed to list. */
  allowPendingRegistrations: Scalars['Boolean']['output'];
  /** Sample format string to use as an example for partners. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether the registration expiration date is required. */
  isExpirationDateRequired: Scalars['Boolean']['output'];
  /** Whether the registration number is optional. */
  isOptional: Scalars['Boolean']['output'];
  /** Localized display name (such as みんぱく for Japan Minpaku). */
  localName?: Maybe<Scalars['String']['output']>;
  /** Registration number type. */
  numberType?: Maybe<RegistrationNumberType>;
  /** Label of the registration number. */
  numberTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Purpose of this requirement if other besides common regulatory validations. */
  purpose?: Maybe<Purpose>;
  /** Regex used to validate the syntax of the registration number. */
  regex?: Maybe<Scalars['String']['output']>;
  /** Information about external validation parameters, if required for the registration number. */
  thirdPartyValidation?: Maybe<ThirdPartyValidation>;
  /** URL of a page that provides information about the number requirement. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Types of registration numbers (licenses). */
export enum RegistrationNumberType {
  ApplicationNumber = 'APPLICATION_NUMBER',
  AustralianBusinessNumber = 'AUSTRALIAN_BUSINESS_NUMBER',
  BirthDate = 'BIRTH_DATE',
  BostonRegistrationNumber = 'BOSTON_REGISTRATION_NUMBER',
  BusinessIssuingRegistry = 'BUSINESS_ISSUING_REGISTRY',
  BusinessLicenseNumber = 'BUSINESS_LICENSE_NUMBER',
  BusinessRegistrationNumber = 'BUSINESS_REGISTRATION_NUMBER',
  BusinessTaxId = 'BUSINESS_TAX_ID',
  BusinessTaxReceiptNumber = 'BUSINESS_TAX_RECEIPT_NUMBER',
  CadastralReference = 'CADASTRAL_REFERENCE',
  CertificateOfUseNumber = 'CERTIFICATE_OF_USE_NUMBER',
  CitizenId = 'CITIZEN_ID',
  CountyCode = 'COUNTY_CODE',
  Date = 'DATE',
  EntityType = 'ENTITY_TYPE',
  FloorSystemNumber = 'FLOOR_SYSTEM_NUMBER',
  ForeignId = 'FOREIGN_ID',
  GeneralExciseTaxId = 'GENERAL_EXCISE_TAX_ID',
  HasAustralianBusinessNumber = 'HAS_AUSTRALIAN_BUSINESS_NUMBER',
  HomeSharingNumber = 'HOME_SHARING_NUMBER',
  HomeSharingPermitNumber = 'HOME_SHARING_PERMIT_NUMBER',
  HotelLicense = 'HOTEL_LICENSE',
  HouseNumber = 'HOUSE_NUMBER',
  IssuanceDate = 'ISSUANCE_DATE',
  IssuedTaxId = 'ISSUED_TAX_ID',
  IsAddressInEu = 'IS_ADDRESS_IN_EU',
  IsCondition = 'IS_CONDITION',
  IsGovernmentEntity = 'IS_GOVERNMENT_ENTITY',
  IsInZoningPlan = 'IS_IN_ZONING_PLAN',
  IsProfessionalHost = 'IS_PROFESSIONAL_HOST',
  IsResidenceInEu = 'IS_RESIDENCE_IN_EU',
  IsTraded = 'IS_TRADED',
  IsVatRegistered = 'IS_VAT_REGISTERED',
  IsZoningLawApplied = 'IS_ZONING_LAW_APPLIED',
  JournalNumber = 'JOURNAL_NUMBER',
  LandRegistrationNumber = 'LAND_REGISTRATION_NUMBER',
  LegalAddress = 'LEGAL_ADDRESS',
  LicenseId = 'LICENSE_ID',
  LicenseNumber = 'LICENSE_NUMBER',
  MaRegistrationCertificateNumber = 'MA_REGISTRATION_CERTIFICATE_NUMBER',
  NationalAddressNumber = 'NATIONAL_ADDRESS_NUMBER',
  NeighborhoodName = 'NEIGHBORHOOD_NAME',
  OperatorLicenceId = 'OPERATOR_LICENCE_ID',
  OperatorLicenseId = 'OPERATOR_LICENSE_ID',
  OperatorLicenseNumber = 'OPERATOR_LICENSE_NUMBER',
  OperatorPermit = 'OPERATOR_PERMIT',
  OwnerId = 'OWNER_ID',
  OwnerIsCitizen = 'OWNER_IS_CITIZEN',
  OwnerName = 'OWNER_NAME',
  OwnerPermit = 'OWNER_PERMIT',
  ParcelNumberTaxMapKey = 'PARCEL_NUMBER_TAX_MAP_KEY',
  PartialTaxId = 'PARTIAL_TAX_ID',
  PermanentEstablishmentCountry = 'PERMANENT_ESTABLISHMENT_COUNTRY',
  PermitNumber = 'PERMIT_NUMBER',
  PlanningNumber = 'PLANNING_NUMBER',
  PropertyRegistryNumber = 'PROPERTY_REGISTRY_NUMBER',
  ProvincialTouristIdentificationCode = 'PROVINCIAL_TOURIST_IDENTIFICATION_CODE',
  RegistrationCertificateNumber = 'REGISTRATION_CERTIFICATE_NUMBER',
  RegistrationNumber = 'REGISTRATION_NUMBER',
  ResortTaxId = 'RESORT_TAX_ID',
  ShortTermRentalLicense = 'SHORT_TERM_RENTAL_LICENSE',
  SpecialOperationSign = 'SPECIAL_OPERATION_SIGN',
  TaxIdentificationNumber = 'TAX_IDENTIFICATION_NUMBER',
  TouristDevelopmentTaxAccountNumber = 'TOURIST_DEVELOPMENT_TAX_ACCOUNT_NUMBER',
  TransientAccommodationsTaxId = 'TRANSIENT_ACCOMMODATIONS_TAX_ID',
  TransientRegistrationNumber = 'TRANSIENT_REGISTRATION_NUMBER',
  VatId = 'VAT_ID',
  Zipcode = 'ZIPCODE'
}

/** Registration record for the bookable unit that has been filed with the jurisdiction. */
export type RegistrationRecord = {
  __typename?: 'RegistrationRecord';
  /** Registration record expiration date in this format: yyyy-mm-dd. */
  expiry?: Maybe<Scalars['String']['output']>;
  /** Registration record ID. */
  registrationNumber: Scalars['String']['output'];
  /** Type of registration/license. */
  registrationNumberType?: Maybe<RegistrationNumberType>;
  /** Localized registration number type. */
  registrationNumberTypeLabel?: Maybe<Scalars['String']['output']>;
};

/** Registration record for the bookable unit that has been filed with the governing jurisdiction. */
export type RegistrationRecordInput = {
  /** Registration record expiration date in this format: yyyy-mm-dd */
  expiry?: InputMaybe<Scalars['String']['input']>;
  /** Registration record ID. */
  registrationNumber: Scalars['String']['input'];
  /** Type of registration/license. */
  registrationNumberType?: InputMaybe<RegistrationNumberType>;
};

/** Category values for regulatory categories. */
export enum RegulatoryCategory {
  ApartmentHotel = 'APARTMENT_HOTEL',
  BedAndBreakfast = 'BED_AND_BREAKFAST',
  CampingSites = 'CAMPING_SITES',
  Event = 'EVENT',
  HomeSharingNumber = 'HOME_SHARING_NUMBER',
  Hostel = 'HOSTEL',
  Hotel = 'HOTEL',
  HotelOrBnb = 'HOTEL_OR_BNB',
  HotelRyokan = 'HOTEL_RYOKAN',
  LongTermOnly = 'LONG_TERM_ONLY',
  Minpaku = 'MINPAKU',
  Motel = 'MOTEL',
  NoLicense = 'NO_LICENSE',
  PrimaryHome = 'PRIMARY_HOME',
  PrimaryHomeWithException = 'PRIMARY_HOME_WITH_EXCEPTION',
  PrimaryOrSecondary = 'PRIMARY_OR_SECONDARY',
  RuralLodging = 'RURAL_LODGING',
  Ryokan = 'RYOKAN',
  SecondaryHome = 'SECONDARY_HOME',
  ShortTermRental = 'SHORT_TERM_RENTAL',
  SimpleLodging = 'SIMPLE_LODGING',
  Special = 'SPECIAL',
  TransientOccupancyResidentialStructure = 'TRANSIENT_OCCUPANCY_RESIDENTIAL_STRUCTURE',
  VacationRental = 'VACATION_RENTAL',
  VacationRentalOther = 'VACATION_RENTAL_OTHER'
}

/** Values for regulatory status. */
export enum RegulatoryStatus {
  /** Listing meets all regulatory requirements. */
  Compliant = 'COMPLIANT',
  /** Listing meets requirements to remain listed, but will need to provide additional information (or other action) in order to not be delisted. */
  CompliantActionNeeded = 'COMPLIANT_ACTION_NEEDED',
  /** Listing's status cannot be determined */
  None = 'NONE',
  /** Platform does not allow listings in this jurisdiction; no actions from partner can affect status. */
  NotAllowed = 'NOT_ALLOWED',
  /** Listing does not meet all regulatory requirements and cannot be shown. */
  NotCompliant = 'NOT_COMPLIANT',
  /** Listing is not compliant, but enforcement hasn't started yet. Action should be taken for the listing to be compliant after enforcement date. */
  NotCompliantActionNeeded = 'NOT_COMPLIANT_ACTION_NEEDED'
}

/** Remittance Type */
export enum RemittanceType {
  Gross = 'GROSS',
  Net = 'NET'
}

export type ReplaceCancellationPolicyConfigInput = {
  additionalCancellationFee?: InputMaybe<MoneyInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  defaultPolicies: Array<CancellationPolicyInput>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  overridePolicies?: InputMaybe<Array<CancellationPolicyOverrideInput>>;
};

export type ReplaceCancellationPolicyConfigPayload = {
  __typename?: 'ReplaceCancellationPolicyConfigPayload';
  cancellationPolicyConfig?: Maybe<CancellationPolicyConfig>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Reservation details. */
export type Reservation = {
  __typename?: 'Reservation';
  /** Accessibility requests made by the guest for the reservation. */
  accessibilityText?: Maybe<Array<Scalars['String']['output']>>;
  /** Count for all adult guests associated with the reservation. */
  adultCount: Scalars['Int']['output'];
  /** Alternative IDs for the Reservation */
  alternativeIds: ReservationAlternativeIds;
  /** the amounts for Core-OTA reservation */
  amounts?: Maybe<ReservationAmounts>;
  /** Time stamp details for audit trails on the reservation */
  audit: ReservationAudit;
  /** Bed type of the reservation. */
  bedTypes?: Maybe<Scalars['String']['output']>;
  /** Entity that collects payment for the reservation. */
  businessModel: BusinessModel;
  /** Details on the cancellations if the reservation has been canceled */
  cancellation?: Maybe<ReservationCancellation>;
  /** Policy applied for cancelling the reservation */
  cancellationPolicy?: Maybe<ReservationCancellationPolicy>;
  /** the reservation's arrival date (format: YYYY-MM-DD) */
  checkInDate: Scalars['LocalDate']['output'];
  /** the reservation's departure date (format: YYYY-MM-DD) */
  checkOutDate: Scalars['LocalDate']['output'];
  /** Count for all children associated with the reservation. */
  childAges?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Count for all children associated with the reservation. */
  childCount: Scalars['Int']['output'];
  /** a timestamp for when the reservation was created (format: YYYY-MM-DDThh:mm:ssTZD, TZD is a time zone designator in the form +/-hh:mm) */
  creationDateTime: Scalars['String']['output'];
  /** Information about the distribution details of the reservation */
  distribution: ReservationDistribution;
  /**
   * The contact of the guest who made the reservation
   * @deprecated Use primaryGuest field
   */
  guestContact?: Maybe<GuestContact>;
  /** Details of the guests in the reservation */
  guests: ReservationGuests;
  /** Expedia id of the reservation */
  id: Scalars['ID']['output'];
  /** Inventory type used for this Reservation */
  inventoryType?: Maybe<InventoryType>;
  /** Is the reservation reconciled */
  isReconciled?: Maybe<Scalars['Boolean']['output']>;
  /** last updated Date Time */
  lastUpdatedDateTime: Scalars['String']['output'];
  /**
   * Guest loyalty tier. Values include MEMBER, VIP, PREMIUMVIP and null.
   * @deprecated Use primaryGuest field
   */
  loyaltyTier?: Maybe<Scalars['String']['output']>;
  /** Indicates who the merchant of record for the reservation is. In other words, who collects the money from the traveler. */
  merchantOfRecord: MerchantOfRecord;
  /** the ID of the message thread associated with the reservation */
  messageThreadId?: Maybe<Scalars['ID']['output']>;
  /** Text that is displayed to travelers if there is a multi-room booking associated with the reservation. */
  multiRoomText?: Maybe<Scalars['String']['output']>;
  /** Text that is displayed to travelers if a payment type is associated with the reservation. */
  payment: Payment;
  /** Text that is displayed to travelers if a payment type is associated with the reservation. */
  paymentInstructions: Scalars['String']['output'];
  /** VRBO only, Count for all pets associated with the reservation. */
  petCount?: Maybe<Scalars['Int']['output']>;
  /** Policies attached to the Reservation */
  policies: ReservationPolicies;
  /** the Guest who made the booking */
  primaryGuest: Guest;
  /** ID of the rate/rate plan and the source of the ID. */
  rateIds: Array<IdNode>;
  /** Eligibility of reconciling current reservation */
  reconciliationEligibility?: Maybe<ReconEligibility>;
  /** The reconciliation type of the reservation */
  reconciliationType?: Maybe<Scalars['String']['output']>;
  /** Remittance Type of the Reservation */
  remittanceType?: Maybe<RemittanceType>;
  /** an array of IDs associated with the reservation */
  reservationIds: Array<IdNode>;
  /** Whether smoking is allowed for the reservation. */
  smokingType: Scalars['String']['output'];
  /** Source of the reservation. */
  source: Scalars['String']['output'];
  /** Text that is displayed to travelers if there is a special request associated with the reservation. */
  specialRequest?: Maybe<Scalars['String']['output']>;
  /** Current status of the reservation. */
  status: ReservationStatus;
  /** Information on the statuses of the reservation */
  statuses: ReservationStatuses;
  /** Relevant dates for the reservation */
  stayDates: ReservationStayDates;
  /** Current sub status of the reservation, it is applicable for vrbo reservations only. */
  subStatus?: Maybe<Scalars['String']['output']>;
  /** the supplier amount for the reservation */
  supplierAmount?: Maybe<SupplierAmount>;
  /** Operating Model of the Supplier for this Reservation */
  supplierOperatingModel?: Maybe<SupplierOperatingModel>;
  /** Travel Industry Designator Service is a unique code that allows a bookings to be recognized by industry suppliers */
  tidsCode?: Maybe<Scalars['Int']['output']>;
  /** Total number of guests associated with the reservation. */
  totalGuestCount: Scalars['Int']['output'];
  /** ID associated with the unit/room and source of the ID. */
  unitIds: Array<IdNode>;
  /** Value added Promotions */
  valueAddedPromotions: Array<ReservationValueAddedPromotion>;
  /** the amounts for VRBO reservation */
  vrboAmounts?: Maybe<VrboReservationAmounts>;
};

/** Alternative Ids for the Reservation */
export type ReservationAlternativeIds = {
  __typename?: 'ReservationAlternativeIds';
  /** Supplier Id for the Reservation */
  supplierId: Scalars['ID']['output'];
};

/** Amounts for Core-OTA reservation */
export type ReservationAmounts = {
  __typename?: 'ReservationAmounts';
  /** Detailed (per-day) list of the reservation amounts */
  nightlyPayments: ReservationNightlyPayments;
  /** Summary list of the reservation amounts */
  summary: Array<ReservationPerStayAmount>;
};

/** Time stamp details for audit trails on the reservation */
export type ReservationAudit = {
  __typename?: 'ReservationAudit';
  /** A timestamp for when the reservation was created in UTC. (format: YYYY-MM-DDThh:mm:ssZ, with a time zone designator in the form +/-hh:mm) */
  creationDateTimeUtc: Scalars['String']['output'];
  /** A timestamp for when there was a last update on this reservation in UTC. (format: YYYY-MM-DDThh:mm:ssZ, with a time zone designator in the form +/-hh:mm) */
  lastUpdateDateTimeUtc: Scalars['String']['output'];
};

/** Details on the Cancellation if the reservation has been canceled. */
export type ReservationCancellation = {
  __typename?: 'ReservationCancellation';
  /** Helps partners identify if a reservation is in a pending cancel request state */
  pendingCancellation: Scalars['Boolean']['output'];
  /** Indicates the point of sale of the booking */
  vrboPrimaryReason?: Maybe<VrboCancellationReason>;
};

/**  Only one of the fields percentage, flatAmount, and numberOfNights may be defined and correlate to the CancellationPenaltyRuleType field */
export type ReservationCancellationPenaltyRule = {
  __typename?: 'ReservationCancellationPenaltyRule';
  /**  cancellation penalty amount for the reservation paid by the customer, minus the Expedia commission */
  costFlatAmount?: Maybe<Money>;
  numberOfNights?: Maybe<Scalars['Int']['output']>;
  /**  Represented as a fraction of 1. Example: 15% should be represented as 0.15 */
  percentage?: Maybe<Scalars['Float']['output']>;
  /**  total cancellation penalty amount for the reservation paid by the customer, including the Expedia commission */
  priceAmount?: Maybe<Money>;
  /**
   *  total cancellation penalty amount for the reservation paid by the customer, including the Expedia commission
   * @deprecated Use priceAmount field
   */
  priceFlatAmount?: Maybe<Money>;
  type: CancellationPenaltyRuleType;
};

export type ReservationCancellationPolicy = {
  __typename?: 'ReservationCancellationPolicy';
  /** The effective policy for the reservation */
  effectivePolicy?: Maybe<EffectivePolicy>;
  tiers?: Maybe<Array<ReservationCancellationPolicyTier>>;
};

export type ReservationCancellationPolicyTier = {
  __typename?: 'ReservationCancellationPolicyTier';
  cancellationWindow: CancellationPolicyCancellationWindow;
  penaltyRule: ReservationCancellationPenaltyRule;
};

export enum ReservationCancellationReason {
  ExtenuatingCircumstance = 'EXTENUATING_CIRCUMSTANCE',
  GuestRequestedCancel = 'GUEST_REQUESTED_CANCEL',
  NaturalDisaster = 'NATURAL_DISASTER',
  NoShow = 'NO_SHOW'
}

/** Reason for updating post stay the reservation. */
export enum ReservationChangeReason {
  ExtenuatingCircumstance = 'EXTENUATING_CIRCUMSTANCE',
  GuestRequestedChange = 'GUEST_REQUESTED_CHANGE',
  NaturalDisaster = 'NATURAL_DISASTER',
  QualityIssue = 'QUALITY_ISSUE'
}

/** Reservation amount that applies to the a specific stay date */
export type ReservationDailyAmount = {
  __typename?: 'ReservationDailyAmount';
  /** Amount value */
  amount: Money;
  /** Amount date */
  date: Scalars['LocalDate']['output'];
  /** Description associated to the amount */
  description?: Maybe<Scalars['String']['output']>;
  /** Percentage of amount (when applicable) */
  percent?: Maybe<Scalars['Float']['output']>;
  /** Amount type (BASE, DISCOUNT, TAX, GUESS_PAYMENT, PAYOUT, ...) */
  type: Scalars['String']['output'];
};

/** Distribution data on the Reservation */
export type ReservationDistribution = {
  __typename?: 'ReservationDistribution';
  /** Helps partners distinguish between a booking made on a vrbo platform vs all the other Expedia brands */
  distributionChannel: DistributionChannel;
  /** Indicates the point of sale of the booking */
  reservationSource?: Maybe<Scalars['String']['output']>;
};

export type ReservationEdge = {
  __typename?: 'ReservationEdge';
  /** the cursor value for this edge */
  cursor: Scalars['String']['output'];
  /** node points to the actual Reservation data */
  node: Reservation;
};

/** facilitates filtering reservations */
export type ReservationFilterInput = {
  /** limit results to reservations with arrival date within the window defined by CheckInDateFilter */
  checkInDate?: InputMaybe<CheckInDateFilter>;
  /** limit results to reservations with departure date within the window defined by CheckOutDateFilter */
  checkOutDate?: InputMaybe<CheckOutDateFilter>;
  /** list results with provided reservation ids */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** limit results to reservations with updated date time from the date defined by LastUpdatedDateTimeFilter */
  lastUpdatedDateTime?: InputMaybe<LastUpdatedDateTimeFilter>;
  /** list results with provided reservation ids */
  reservationIds?: InputMaybe<Array<IdNodeInput>>;
  /** limit results to reservations with status defined by ReservationStatus's */
  status?: InputMaybe<Array<InputMaybe<ReservationStatus>>>;
  /** limit results to reservations with sub status of a reservation */
  subStatus?: InputMaybe<Scalars['String']['input']>;
};

/** Details of the primary guest associated with the reservation */
export type ReservationGuest = {
  __typename?: 'ReservationGuest';
  /** email address of the Primary Guest */
  emailAddress: Scalars['EmailAddress']['output'];
  /** First Name of the Primary Guest */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Full phone number of the Primary Guest as entered on the point of sale */
  fullPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** Last Name of the Primary Guest */
  lastName?: Maybe<Scalars['String']['output']>;
};

/** Details of the Guests */
export type ReservationGuests = {
  __typename?: 'ReservationGuests';
  /** Count for all adult guests associated with the reservation. */
  adultCount: Scalars['Int']['output'];
  /** Count for all children associated with the reservation. */
  childCount: Scalars['Int']['output'];
  /** Details of pets associated with the reservation. */
  pets?: Maybe<ReservationPets>;
  /** Details of the Primary Guest */
  primaryGuest: ReservationGuest;
};

/** Source of a given reservation ID. */
export enum ReservationIdSource {
  Expedia = 'EXPEDIA',
  Supplier = 'SUPPLIER',
  Vrbo = 'VRBO'
}

/** A Reservation ID mapping type containing the mapped IDs and status info. */
export type ReservationMapping = {
  __typename?: 'ReservationMapping';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** An Error type containing the Error Code and Error message info. */
  error?: Maybe<VrboIdMappingError>;
  /** Status for processing this mapping. */
  mappingProcessingStatus: VrboMappingProcessingStatus;
  /** An array of IDs containing the EG Reservation ID and the new Supplier Reservation ID. */
  reservationIds: Array<IdNode>;
};

/** A Reservation Error mapping type containing the reservation IDs and Error message info. */
export type ReservationMappingError = {
  __typename?: 'ReservationMappingError';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** The EG Reservation ID which failed mapping validation. */
  egReservationId: Scalars['ID']['output'];
  /** An Error type containing the Error Code and Error message info. */
  error: VrboIdMappingError;
};

/** Detailed (per-day) list of the reservation amounts */
export type ReservationNightlyPayments = {
  __typename?: 'ReservationNightlyPayments';
  /** Cancellation amounts for the reservation */
  cancellationAmounts: Array<ReservationPerStayAmount>;
  /** Reservation amounts for a specific stay date */
  dailyAmounts: Array<ReservationDailyAmount>;
  /** Reservation amounts that apply to the whole stay */
  perStayAmounts: Array<ReservationPerStayAmount>;
};

/** Reservation Payment Status */
export enum ReservationPaymentStatus {
  ExternalSor = 'EXTERNAL_SOR',
  Overpaid = 'OVERPAID',
  Paid = 'PAID',
  PartialPaid = 'PARTIAL_PAID',
  Unpaid = 'UNPAID'
}

/** Reservation amount that applies to the whole stay */
export type ReservationPerStayAmount = {
  __typename?: 'ReservationPerStayAmount';
  /** Amount value */
  amount: Money;
  /** Description associated to the amount */
  description?: Maybe<Scalars['String']['output']>;
  /** Percentage of amount (when applicable) */
  percent?: Maybe<Scalars['Float']['output']>;
  /** Amount type (BASE, DISCOUNT, TAX, GUESS_PAYMENT, PAYOUT, ...) */
  type: Scalars['String']['output'];
};

/** Details of the pets associated with the reservation */
export type ReservationPets = {
  __typename?: 'ReservationPets';
  /** Boolean indicating if pets are included in the reservation */
  travelingWithPets: Scalars['Boolean']['output'];
};

/** Details of the Policies associated with the reservation */
export type ReservationPolicies = {
  __typename?: 'ReservationPolicies';
  /** Penalty for cancelling the reservation */
  cancellationPolicy: ReservationCancellationPolicy;
};

/** Reason for cancelling pre stay reservation. */
export enum ReservationPreStayCancellationReason {
  GuestRequestedCancel = 'GUEST_REQUESTED_CANCEL',
  InvalidPaymentMethod = 'INVALID_PAYMENT_METHOD'
}

/** Valid reasons for a good will refund. */
export enum ReservationRefundReason {
  AccessibilityIssue = 'ACCESSIBILITY_ISSUE',
  AmenityIssue = 'AMENITY_ISSUE',
  GuestSatisfactionRefund = 'GUEST_SATISFACTION_REFUND',
  LoyaltyPerkNotFulfilled = 'LOYALTY_PERK_NOT_FULFILLED',
  RoomTypeIssue = 'ROOM_TYPE_ISSUE',
  ServiceIssue = 'SERVICE_ISSUE',
  SpecialRequestNotMet = 'SPECIAL_REQUEST_NOT_MET'
}

/** Status of the reservation. */
export enum ReservationStatus {
  Booked = 'BOOKED',
  /** Added because defined in LSGC */
  Building = 'BUILDING',
  Cancelled = 'CANCELLED',
  CancelledByHomeaway = 'CANCELLED_BY_HOMEAWAY',
  CancelledByOwner = 'CANCELLED_BY_OWNER',
  CancelledBySystem = 'CANCELLED_BY_SYSTEM',
  CancelledByTraveler = 'CANCELLED_BY_TRAVELER',
  Complete = 'COMPLETE',
  Confirmed = 'CONFIRMED',
  Created = 'CREATED',
  Declined = 'DECLINED',
  DeclinedByOwner = 'DECLINED_BY_OWNER',
  DeclinedBySystem = 'DECLINED_BY_SYSTEM',
  DeclinedByTravelerPayFailure = 'DECLINED_BY_TRAVELER_PAY_FAILURE',
  Invalid = 'INVALID',
  InProgress = 'IN_PROGRESS',
  RavelerCancelPendingBooking = 'RAVELER_CANCEL_PENDING_BOOKING',
  Reserved = 'RESERVED',
  StayInProgress = 'STAY_IN_PROGRESS',
  Unconfirmed = 'UNCONFIRMED',
  UnconfirmedByOwner = 'UNCONFIRMED_BY_OWNER',
  UnconfirmedByTraveler = 'UNCONFIRMED_BY_TRAVELER'
}

/** Details of the Statuses on the reservation */
export type ReservationStatuses = {
  __typename?: 'ReservationStatuses';
  /** Status of the Reservation */
  status: ReservationStatus;
};

/** Relevant dates associated with the reservation */
export type ReservationStayDates = {
  __typename?: 'ReservationStayDates';
  /** the reservation's arrival date (format: YYYY-MM-DD) */
  checkInDate: Scalars['LocalDate']['output'];
  /** the reservation's departure date (format: YYYY-MM-DD) */
  checkOutDate: Scalars['LocalDate']['output'];
};

export type ReservationValueAddedPromotion = {
  __typename?: 'ReservationValueAddedPromotion';
  /** describes the promotion */
  description: Scalars['String']['output'];
  /** id of the promotion */
  id: Scalars['String']['output'];
};

/** represents a logical connection to reservations data */
export type ReservationsConnection = {
  __typename?: 'ReservationsConnection';
  /** the edges in the connection to traverse, each contain a cursor and node */
  edges: Array<Maybe<ReservationEdge>>;
  /** information about the current page of results */
  pageInfo?: Maybe<PageInfo>;
  /** the total number of reservations */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export enum ResolutionStatus {
  Resolved = 'RESOLVED',
  UnresolvedCheckpointSystemUnavailable = 'UNRESOLVED_CHECKPOINT_SYSTEM_UNAVAILABLE',
  UnresolvedPropertyNotProvisioned = 'UNRESOLVED_PROPERTY_NOT_PROVISIONED'
}

export type Restrictions = {
  __typename?: 'Restrictions';
  /**
   * The Booking Date Time from which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeFrom?: Maybe<Scalars['LocalDateTime']['output']>;
  /**
   * The Booking Date Time until which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeTo?: Maybe<Scalars['LocalDateTime']['output']>;
  /** Setting this to true indicates that the promotion is targeted exclusively towards Expedia Group members whose loyalty drives bookings. */
  isMemberOnly?: Maybe<Scalars['Boolean']['output']>;
  /**
   * It indicates if this promotion is applicable only for travelers booking on the mobile device.
   * This field will be null in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  isMobileUserOnly?: Maybe<Scalars['Boolean']['output']>;
  /** The maximum number of days in advance the reservation must be made for the promotion to be applicable. */
  maxAdvanceBookingDays?: Maybe<Scalars['Int']['output']>;
  /** The maximum duration of stay for which the promotion can be applicable. The maximum value possible here is 28. */
  maxLengthOfStay?: Maybe<Scalars['Int']['output']>;
  /** The minimum number of days in advance the reservation must be made for the promotion to be applicable. */
  minAdvanceBookingDays?: Maybe<Scalars['Int']['output']>;
  /** The minimum duration of stay for which the promotion can be applicable. */
  minLengthOfStay?: Maybe<Scalars['Int']['output']>;
  /**
   * Applicable only for SAME_DAY_PROMOTION. The start time for the same day from which the promotion is applicable.
   * The timezone in consideration will be the local time for the property the promotion is applied for.
   */
  sameDayBookingStartTime?: Maybe<Scalars['LocalTime']['output']>;
  /** The Travel date from which this promotion is applicable in YYYY-MM-DD format. */
  travelDateFrom?: Maybe<Scalars['LocalDate']['output']>;
  /** The Travel date until which this promotion is applicable in YYYY-MM-DD format. */
  travelDateTo?: Maybe<Scalars['LocalDate']['output']>;
};

export type RestrictionsCreateInput = {
  /**
   * The Booking Date Time from which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeFrom: Scalars['LocalDateTime']['input'];
  /**
   * The Booking Date Time until which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeTo: Scalars['LocalDateTime']['input'];
  /** Setting this to true indicates that the promotion is targeted exclusively towards Expedia Group members whose loyalty drives bookings. */
  isMemberOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * It indicates if this promotion is applicable only for travelers booking on the mobile device.
   * This field will be null in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  isMobileUserOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The maximum number of days in advance the reservation must be made for the promotion to be applicable. */
  maxAdvanceBookingDays?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum duration of stay for which the promotion can be applicable. The maximum value possible here is 28. */
  maxLengthOfStay?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum number of days in advance the reservation must be made for the promotion to be applicable. */
  minAdvanceBookingDays?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum duration of stay for which the promotion can be applicable. */
  minLengthOfStay?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Applicable only for SAME_DAY_PROMOTION. The start time for the same day from which the promotion is applicable.
   * The timezone in consideration will be the local time for the property the promotion is applied for.
   */
  sameDayBookingStartTime?: InputMaybe<Scalars['LocalTime']['input']>;
  /** The Travel date from which this promotion is applicable in YYYY-MM-DD format. */
  travelDateFrom: Scalars['LocalDate']['input'];
  /** The Travel date until which this promotion is applicable in YYYY-MM-DD format. */
  travelDateTo: Scalars['LocalDate']['input'];
};

export type RestrictionsUpdateInput = {
  /**
   * The Booking Date Time from which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeFrom?: InputMaybe<Scalars['LocalDateTime']['input']>;
  /**
   * The Booking Date Time until which this promotion is applicable.
   * YYYY-MM-DDThh:mm:ss . Timezone is the time with respect to the property location.
   */
  bookingLocalDateTimeTo?: InputMaybe<Scalars['LocalDateTime']['input']>;
  /** Setting this to true indicates that the promotion is targeted exclusively towards Expedia Group members whose loyalty drives bookings. */
  isMemberOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * It indicates if this promotion is applicable only for travelers booking on the mobile device.
   * This field will be null in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  isMobileUserOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The maximum number of days in advance the reservation must be made for the promotion to be applicable. */
  maxAdvanceBookingDays?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum duration of stay for which the promotion can be applicable. The maximum value possible here is 28. */
  maxLengthOfStay?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum number of days in advance the reservation must be made for the promotion to be applicable. */
  minAdvanceBookingDays?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum duration of stay for which the promotion can be applicable. */
  minLengthOfStay?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Applicable only for SAME_DAY_PROMOTION. The start time for the same day from which the promotion is applicable.
   * The timezone in consideration will be the local time for the property the promotion is applied for.
   */
  sameDayBookingStartTime?: InputMaybe<Scalars['LocalTime']['input']>;
  /** The Travel date from which this promotion is applicable in YYYY-MM-DD format. */
  travelDateFrom?: InputMaybe<Scalars['LocalDate']['input']>;
  /** The Travel date until which this promotion is applicable in YYYY-MM-DD format. */
  travelDateTo?: InputMaybe<Scalars['LocalDate']['input']>;
};

export enum ResultFilter {
  Failed = 'FAILED',
  Passed = 'PASSED',
  Unresolved = 'UNRESOLVED'
}

export type Review = {
  __typename?: 'Review';
  /**  review text  */
  body: LocalizedString;
  /**
   * brand to which review belongs
   * @deprecated Use the new `brandNameV2` field instead. It contains the value from `ReviewBrand` enum.
   */
  brandName?: Maybe<Scalars['String']['output']>;
  /**  brandName to which review belong  */
  brandNameV2?: Maybe<ReviewBrand>;
  /**  review create time in ISO format  */
  createdDateTime: Scalars['String']['output'];
  /**  The review id form the domain reviews api  */
  id: Scalars['ID']['output'];
  /**  flag to determine if partner would be able to respond to this review  */
  isEligibleForResponse?: Maybe<Scalars['Boolean']['output']>;
  /**  review updated time in ISO format  */
  lastUpdatedDateTime: Scalars['String']['output'];
  /**  review media content  */
  media?: Maybe<ReviewMedia>;
  /**  the property Ids  */
  propertyId?: Maybe<Array<Maybe<IdNode>>>;
  /**  Reservation Details. The reservation details are from a cached source. This is not live reservation */
  reservation?: Maybe<ReviewReservation>;
  /**  The owner submitted review response  */
  response?: Maybe<OwnerResponse>;
  /**  source of the review. PLATFORM or IMPORTED  */
  source?: Maybe<Scalars['String']['output']>;
  /**  categorized ratings  */
  starRatings: Array<Maybe<Rating>>;
  /**  status of the review  */
  status: Scalars['String']['output'];
  /**  title of the review  */
  title?: Maybe<LocalizedString>;
};

export type ReviewAggregatedScore = {
  __typename?: 'ReviewAggregatedScore';
  /** number of reviews for a particular category */
  reviewsCount: Scalars['Int']['output'];
  /** aggregated score for a particular category */
  score: Scalars['Float']['output'];
};

export enum ReviewBrand {
  CheapTickets = 'CHEAP_TICKETS',
  Ebookers = 'EBOOKERS',
  Expedia = 'EXPEDIA',
  Hotels = 'HOTELS',
  Hotwire = 'HOTWIRE',
  Lastminute = 'LASTMINUTE',
  MrJet = 'MR_JET',
  Orbitz = 'ORBITZ',
  Other = 'OTHER',
  Travelocity = 'TRAVELOCITY',
  Vrbo = 'VRBO',
  Wotif = 'WOTIF'
}

/** Score for each category of Review */
export type ReviewCategoryScore = {
  __typename?: 'ReviewCategoryScore';
  /** Category to which rating is given; For example cleanliness, overall */
  category: Scalars['String']['output'];
  value: ReviewAggregatedScore;
};

export type ReviewFilter = {
  /** filter by brandNames */
  brandNames?: InputMaybe<Array<ReviewBrand>>;
  /** filter reviews within created date range */
  createdDate?: InputMaybe<DateInput>;
  /** filter by owner response exist or not */
  hasOwnerResponse?: InputMaybe<Scalars['Boolean']['input']>;
  /** filter by Reservation */
  reservation?: InputMaybe<ReviewReservationFilterInput>;
  /** Id of the review as in the Expedia review platform. */
  reviewId?: InputMaybe<Scalars['String']['input']>;
  /** filter by source eg: PLATFORM or IMPORTED */
  source?: InputMaybe<Scalars['String']['input']>;
  /** filter reviews within updated date range */
  updatedDate?: InputMaybe<DateInput>;
};

export type ReviewGuest = {
  __typename?: 'ReviewGuest';
  /**  first name or nickname of the traveler  */
  firstName: Scalars['String']['output'];
  /**  last name of the traveler  */
  lastName: Scalars['String']['output'];
};

export type ReviewMedia = {
  __typename?: 'ReviewMedia';
  /**  caption of image  */
  caption?: Maybe<LocalizedString>;
  highResolutionUrl?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type ReviewReservation = {
  __typename?: 'ReviewReservation';
  /**  checkIn date for the reservation  */
  checkInDate?: Maybe<Scalars['LocalDate']['output']>;
  /**  checkout date for the reservation  */
  checkOutDate?: Maybe<Scalars['LocalDate']['output']>;
  /**  guest information  */
  primaryGuest?: Maybe<ReviewGuest>;
  reservationIds: Array<IdNode>;
  /**  status of the reservation  */
  status?: Maybe<Scalars['String']['output']>;
};

export type ReviewReservationFilterInput = {
  /** list reviews of provided reservation ids */
  reservationIds?: InputMaybe<Array<ReviewReservationIdNodeInput>>;
};

export type ReviewReservationIdNodeInput = {
  id: Scalars['ID']['input'];
  idSource: IdSource;
};

export type ReviewResponse = {
  __typename?: 'ReviewResponse';
  /**  Represents the next page cursor in the list, Empty if no more pages available */
  cursor?: Maybe<Scalars['String']['output']>;
  reviews: Array<Maybe<Review>>;
  /**  Total number of reviews returned that meet the search criteria  */
  totalCount: Scalars['Int']['output'];
};

export type ReviewsOrderBy = {
  /** Sort based on review created dateTime */
  createdDateTime?: InputMaybe<SortOrder>;
  /** Sort based on review updated dateTime */
  lastUpdatedDateTime?: InputMaybe<SortOrder>;
  /** Sort based on owner response created dateTime */
  ownerResponseCreatedDateTime?: InputMaybe<SortOrder>;
  /** Sort based on owner response updated dateTime */
  ownerResponseLastUpdatedDateTime?: InputMaybe<SortOrder>;
  /** Sort based on reservation checkIn date */
  reservationCheckInDate?: InputMaybe<SortOrder>;
  /** Sort based on reservation checkOut date */
  reservationCheckOutDate?: InputMaybe<SortOrder>;
};

export type SavePropertyContactInput = {
  emailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<PhoneNumberInput>>;
  type: ContactType;
};

export type SendMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  body?: InputMaybe<Scalars['String']['input']>;
  /**  UUID that uniquely identifies client's request  */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  messageThreadId: Scalars['ID']['input'];
};

export type SendMessagePayload = {
  __typename?: 'SendMessagePayload';
  /**  UUID that uniquely identifies client's request  */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /**  ID of the sent message  */
  messageId: Scalars['ID']['output'];
};

export type SendTestNotificationInput = {
  /** Event type name for testing notifications */
  eventType: Scalars['String']['input'];
  /**  Payload for testing notifications */
  payload: Scalars['JSON']['input'];
};

export type SendTestNotificationPayload = {
  __typename?: 'SendTestNotificationPayload';
  /** In the case of a failed test, this contains human readable description of any errors encountered when attempting to deliver the notification. */
  error?: Maybe<TestNotificationError>;
  /** The HTTP status code returned by the endpoint to which the notification was delivered to. */
  httpStatusCode?: Maybe<Scalars['Int']['output']>;
  /** Outcome of the test payload sent */
  outcome: TestNotificationOutcome;
};

export type SetMessageThreadSpamStatusInput = {
  /**  UUID that uniquely identifies client's request  */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**  ID of the message thread to be marked as spam */
  id: Scalars['ID']['input'];
  /**  Status of the message thread to be marked either spam or not spam */
  status: MessageThreadSpamStatus;
};

export type SetMessageThreadSpamStatusPayload = {
  __typename?: 'SetMessageThreadSpamStatusPayload';
  /**  UUID that uniquely identifies client's request  */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /**  ID of the message thread marked as spam */
  id: Scalars['ID']['output'];
};

/** Single discounts are ones that have a flat discount percentage (for eg: 15% off). */
export type SingleDiscount = Discount & {
  __typename?: 'SingleDiscount';
  /** Member only discount value applied */
  memberOnlyAdditionalValue?: Maybe<Scalars['Float']['output']>;
  /** Type of the discount. */
  type: DiscountType;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  /** Value of the discount applied. */
  value: Scalars['Float']['output'];
};

export type SingleDiscountCreateInput = {
  /** Member only discount value applied */
  memberOnlyAdditionalValue?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit: DiscountUnit;
  /** Value of the discount applied. */
  value: Scalars['Float']['input'];
};

export type SingleDiscountPromotionCreateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates: Array<BlackoutDateRangeInput>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category: PromotionCategory;
  /** Name of the promotion as the partner wants to call it. */
  code: Scalars['String']['input'];
  /** Detail of the actual discount being applied on the promotion. */
  discount: SingleDiscountCreateInput;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans: Array<EligibleRatePlanInput>;
  /** Name of the promotion. Values: BASIC, EARLY_BOOKING_PROMOTION or SAME_DAY_PROMOTION. */
  name: PromotionName;
  /** List of restrictions that can be applied to these promotions. */
  restrictions: RestrictionsCreateInput;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status: PromotionStatus;
};

export type SingleDiscountPromotionUpdateInput = {
  /**
   * The 'exception' dates for which the promotion should NOT apply.
   * This field will not be returned in the Query All promotions functionality and will ONLY be returned when querying for a Single Promotion (by specifying the promotion Id).
   */
  blackoutDates?: InputMaybe<Array<BlackoutDateRangeInput>>;
  /** Category of the promotion. Currently only DISCOUNT_PROMOTION is supported (i.e Priced Promotions). */
  category?: InputMaybe<PromotionCategory>;
  /** Name of the promotion as the partner wants to call it. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Detail of the actual discount being applied on the promotion. */
  discount?: InputMaybe<SingleDiscountUpdateInput>;
  /** The rate plans for which this promotion is applicable for. */
  eligibleRatePlans?: InputMaybe<Array<EligibleRatePlanInput>>;
  /** Id of the Promotion as stored in the Expedia platform. */
  id: Scalars['ID']['input'];
  /** Name of the promotion. Values: BASIC, EARLY_BOOKING_PROMOTION or SAME_DAY_PROMOTION. */
  name?: InputMaybe<PromotionName>;
  /** List of restrictions that can be applied to these promotions. */
  restrictions?: InputMaybe<RestrictionsUpdateInput>;
  /** Status of the promotion. Values: ACTIVE or INACTIVE. */
  status?: InputMaybe<PromotionStatus>;
};

export type SingleDiscountUpdateInput = {
  /** Member only discount value applied */
  memberOnlyAdditionalValue?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of the discount. Currently only PERCENT is supported for MVP for Create and Update. AMOUNT promotions are supported only for Read. */
  unit?: InputMaybe<DiscountUnit>;
  /** Value of the discount applied. */
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type SmokingLocationPolicy = {
  __typename?: 'SmokingLocationPolicy';
  allowed: Scalars['Boolean']['output'];
  allowedNote: Array<LocalizedString>;
};

export type SmokingPolicy = {
  __typename?: 'SmokingPolicy';
  allowed: Scalars['Boolean']['output'];
  indoorPolicy?: Maybe<SmokingLocationPolicy>;
  note: Array<LocalizedString>;
  outdoorPolicy?: Maybe<SmokingLocationPolicy>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpacesMetadata = {
  __typename?: 'SpacesMetadata';
  bathrooms: BathroomsMetadata;
  bedrooms: BedroomsMetadata;
  livingRooms: LivingRoomsMetadata;
  offices: OfficesMetadata;
};

export type Status = {
  __typename?: 'Status';
  reason?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type StatusCheckpoint = {
  __typename?: 'StatusCheckpoint';
  checkpointByName?: Maybe<StatusCheckpoint>;
  checkpoints?: Maybe<Array<StatusCheckpoint>>;
  /** The number of checkpoint items associated with the property or unit if quantifiable */
  foundCount?: Maybe<Scalars['Int']['output']>;
  /** Denotes if checkpoint conditions are satisfied */
  fulfilled: Scalars['Boolean']['output'];
  /** UTC time when checkpoint was last evaluated */
  lastEvaluated: Scalars['String']['output'];
  /** Maximum threshold allowed for checkpoint to be satisfied */
  maxCount?: Maybe<Scalars['Int']['output']>;
  /** Minimum threshold required for checkpoint to be satisfied */
  minCount?: Maybe<Scalars['Int']['output']>;
  /** Checkpoint name */
  name: Scalars['String']['output'];
  /** Ordered list of ancestor checkpoint nodes in the status calculation tree */
  path: Array<Scalars['String']['output']>;
  /** Denotes if the checkpoint status could be retrieved */
  resolutionStatus: ResolutionStatus;
};


export type StatusCheckpointCheckpointByNameArgs = {
  name: Scalars['String']['input'];
};


export type StatusCheckpointCheckpointsArgs = {
  filter?: InputMaybe<CheckpointFilterInput>;
};

export type StatusInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type StayPolicy = {
  __typename?: 'StayPolicy';
  checkInPolicy?: Maybe<CheckInPolicy>;
  checkOutPolicy?: Maybe<CheckOutPolicy>;
  childrenPolicy?: Maybe<ChildrenPolicy>;
  customPolicies: Array<CustomStayPolicy>;
  eventsPolicy?: Maybe<EventsPolicy>;
  maxOccupancyPolicy?: Maybe<MaxOccupancyPolicy>;
  petsPolicy?: Maybe<PetsPolicy>;
  rentalAgreementUrl?: Maybe<Scalars['Url']['output']>;
  smokingPolicy?: Maybe<SmokingPolicy>;
};

export type StayPolicyMetadata = {
  __typename?: 'StayPolicyMetadata';
  checkInPolicy: CheckInPolicyMetadata;
  checkOutPolicy: CheckOutPolicyMetadata;
  childrenPolicy: ChildrenPolicyMetadata;
  customPolicies: Array<CustomStayPolicyMetadata>;
  eventsPolicy: EventsPolicyMetadata;
  petsPolicy: PetsPolicyMetadata;
};

export type SubscribeNotificationEventTypeInput = {
  /** Id of callback configuration to associate the subscription */
  callbackConfigId: Scalars['ID']['input'];
  /** Event type name to subscribe */
  eventType: Scalars['String']['input'];
};

export type SubscribeNotificationEventTypePayload = {
  __typename?: 'SubscribeNotificationEventTypePayload';
  /** Callback configuration information for the event type subscription */
  callbackConfig: NotificationCallbackConfig;
  /** Name of the event type */
  eventType: Scalars['String']['output'];
};

export type SupplierAmount = {
  /** the currency in which the amount is shown */
  currencyCode: Scalars['String']['output'];
  /** the rate type: NET for Expedia Collect and SELL for Hotel Collect */
  rateType: RateType;
};

export type SupplierAmountCompensation = {
  __typename?: 'SupplierAmountCompensation';
  /** Accelerator percentage, expressed as a fraction of 1 (so, for example, 0.25) */
  acceleratorPercent?: Maybe<Scalars['Float']['output']>;
  /** Compensation base percentage, expressed as a fraction of 1 (so, for example, 0.25) */
  basePercent?: Maybe<Scalars['Float']['output']>;
};

/** Updated supplier amount of the reservation */
export type SupplierAmountInput = {
  /** map to currency in domain */
  currencyCode: Scalars['String']['input'];
  /** the updated daily rates */
  rates: Array<SupplierRateInput>;
};

/** Type of fee charged by the supplier. */
export enum SupplierFeeType {
  BaseRate = 'BASE_RATE',
  ExtraGuestFees = 'EXTRA_GUEST_FEES',
  ReconciledAmount = 'RECONCILED_AMOUNT',
  ServiceFees = 'SERVICE_FEES'
}

export type SupplierLoyaltyPlanInfo = {
  __typename?: 'SupplierLoyaltyPlanInfo';
  /** membership number of the customer */
  membershipNumber?: Maybe<Scalars['Int']['output']>;
  /** identifies the customer reward program */
  planCode?: Maybe<Scalars['String']['output']>;
};

/** Operation Model of the Supplier */
export enum SupplierOperatingModel {
  Agency = 'AGENCY',
  Merchant = 'MERCHANT'
}

export type SupplierRate = {
  __typename?: 'SupplierRate';
  /** Compensation information associated to the reservation for this date range */
  compensation: SupplierAmountCompensation;
  /** Date when the rate becomes effective (format: YYYY-MM-DD). */
  fromDate: Scalars['LocalDate']['output'];
  /** Itemized list of fees. */
  rateItems: Array<SupplierRateItem>;
  /** Time unit of the rate. */
  rateTimeUnit: RateTimeUnit;
  /** Date when the rate expires (format: YYYY-MM-DD). */
  toDate: Scalars['LocalDate']['output'];
};

/** Updated rate for an existing stay date/Rate for an extended stay date */
export type SupplierRateInput = {
  /** inclusive. Map to reconciliationAmount.stayDate in domain */
  fromDate: Scalars['LocalDate']['input'];
  /** the updated fee */
  rateItems: Array<SupplierRateItemInput>;
  /** only PER_DAY is currently supported */
  rateTimeUnit: RateTimeUnit;
  /** exclusive. Since we only support PER_DAY, toDate should always be fromDate + 1 */
  toDate: Scalars['LocalDate']['input'];
};

export type SupplierRateItem = {
  __typename?: 'SupplierRateItem';
  /** Amount of the fee. */
  amount: Scalars['Float']['output'];
  /** Type of fee for this itemized rate. */
  feeType: SupplierFeeType;
};

/** Updated fee */
export type SupplierRateItemInput = {
  /** map to reconciliationAmount.amount in domain */
  amount: Scalars['Float']['input'];
  /** map to reconciliationAmount.type in domain. Map to RECONCILED_AMOUNT in domain. */
  feeType: ReconciliationFeeType;
};

export type SupplierTotal = {
  __typename?: 'SupplierTotal';
  /** Total amount of the fee after tax is applied. */
  amountAfterTax: Scalars['Float']['output'];
  /** Total amount of the fee before tax is applied. */
  amountBeforeTax: Scalars['Float']['output'];
  /** Compensation information associated to the reservation */
  compensation: SupplierAmountCompensation;
};

export type TestNotificationError = {
  __typename?: 'TestNotificationError';
  /** Code that reflects the specific error encountered during the test */
  code: Scalars['String']['output'];
  /** Human readable message describing the error encountered */
  message: Scalars['String']['output'];
};

export enum TestNotificationOutcome {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export type Text = {
  __typename?: 'Text';
  key: Scalars['String']['output'];
  values: Array<LocalizedString>;
};

export type TextFiltersInput = {
  keys?: InputMaybe<OneOfStringFilterInput>;
  locales?: InputMaybe<OneOfLocaleFilterInput>;
};

export type TextInput = {
  key: Scalars['String']['input'];
  values: Array<LocalizedStringInput>;
};

export type TextMetadata = {
  __typename?: 'TextMetadata';
  key: Scalars['String']['output'];
};

/** Third-party validation information. */
export type ThirdPartyValidation = {
  __typename?: 'ThirdPartyValidation';
  /** Attributes used to validate the registration number as provided by the third-party. */
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Whether third-party validation is required. */
  required: Scalars['Boolean']['output'];
};

export type TravelDateInput = {
  from?: InputMaybe<Scalars['LocalDate']['input']>;
  to?: InputMaybe<Scalars['LocalDate']['input']>;
};

/** Travel Purpose type, used to identify business bookings. */
export enum TravelPurpose {
  KnownBusinessVisit = 'KNOWN_BUSINESS_VISIT',
  KnownPersonalVisit = 'KNOWN_PERSONAL_VISIT',
  None = 'NONE',
  SuspectedBusinessVisit = 'SUSPECTED_BUSINESS_VISIT',
  SuspectedPersonalVisit = 'SUSPECTED_PERSONAL_VISIT'
}

export type UndeliveredNotification = {
  __typename?: 'UndeliveredNotification';
  /** This contains human readable description of any errors encountered when attempting to deliver the notification. */
  error?: Maybe<NotificationError>;
  /** Payload of the notification */
  notification: Notification;
};

export type UndeliveredNotificationsFiltersInput = {
  creationDateTime?: InputMaybe<DateTimeRangeFilterInput>;
  /**  The event type  */
  eventType?: InputMaybe<Scalars['String']['input']>;
};

export type UndeliveredNotificationsResponse = {
  __typename?: 'UndeliveredNotificationsResponse';
  /**  Represents the next page cursor in the list, Empty if no more pages available */
  cursor?: Maybe<Scalars['String']['output']>;
  /**  List of undelivered notifications  */
  elements: Array<Maybe<UndeliveredNotification>>;
  /**  Total number of notifications failed to deliver  */
  totalCount: Scalars['Int']['output'];
};

/** Defines a Unit configuration. */
export type Unit = {
  __typename?: 'Unit';
  /** Whether associated units are live in the EG system. */
  activeStatus?: Maybe<ActiveStatus>;
  amenities?: Maybe<Array<Amenity>>;
  area?: Maybe<PropertyUnitArea>;
  /** The cardinality of this Unit configuration on the Property */
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ids?: Maybe<Array<Maybe<IdNode>>>;
  /** new listing discount */
  newListingDiscount?: Maybe<Array<Maybe<PromotionEnrollment>>>;
  propertyId: Scalars['ID']['output'];
  /** Unit regulatory registration information. */
  registration?: Maybe<Registration>;
  /** Represents container to group all available unit spaces. */
  spaces?: Maybe<UnitSpaces>;
};


/** Defines a Unit configuration. */
export type UnitAmenitiesArgs = {
  filters?: InputMaybe<AmenitiesFiltersInput>;
};


/** Defines a Unit configuration. */
export type UnitRegistrationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Registration information for each bookable unit of a multi-unit property. */
export type UnitRegistrationDetail = {
  __typename?: 'UnitRegistrationDetail';
  /** Acknowledgement records for the bookable unit. */
  acknowledgementRecords: Array<AcknowledgementRecord>;
  /** Additional information about the bookable unit required by certain districts. */
  applicableRegulations: Array<ApplicableRegulations>;
  /** Links for registration documentation files (if required). */
  attachmentUrls?: Maybe<Array<AttachmentUrl>>;
  /** Describes whether the unit is compliant with the local jurisdiction's regulatory requirements. */
  compliant?: Maybe<Compliant>;
  /** Registration number displayed to the traveler. */
  displayRegistrationNumber?: Maybe<Scalars['String']['output']>;
  /** List of exemptions for the property, such as maximum night cap. */
  exemptionCategories?: Maybe<Array<ExemptionCategory>>;
  /** Number of rooms in the bookable unit. */
  numberOfPhysicalRooms: Scalars['Int']['output'];
  /** Registration records for the bookable unit filed with the governing jurisdiction. */
  registrationRecords: Array<RegistrationRecord>;
  /** Property classification category as maintained by the governing jurisdiction. */
  regulatoryCategory: RegulatoryCategory;
  /** Regulatory category in the specified locale. */
  regulatoryCategoryLabel: Scalars['String']['output'];
  /** Property subtype, such as primary or secondary, or null if not applicable. */
  regulatorySubType?: Maybe<Scalars['String']['output']>;
  /** Property type, such as boat, trailer, residence, etc. */
  regulatoryType?: Maybe<Scalars['String']['output']>;
  /** Unit ID assigned by Expedia Group. */
  unitId: Scalars['ID']['output'];
  /** Describes the warning status */
  warningStatus?: Maybe<WarningStatus>;
};

/** Represents container to group all available unit spaces. */
export type UnitSpaces = {
  __typename?: 'UnitSpaces';
  bathrooms?: Maybe<Array<Bathroom>>;
  bedrooms?: Maybe<Array<Bedroom>>;
  diningRooms?: Maybe<Array<DiningRoom>>;
  livingRooms?: Maybe<Array<LivingRoom>>;
  offices?: Maybe<Array<Office>>;
};

export type UnitsMetadata = {
  __typename?: 'UnitsMetadata';
  amenities: Array<AmenityMetadata>;
  spaces: SpacesMetadata;
};

export type UnsubscribeNotificationEventTypeInput = {
  /** Event type name to unsubscribe from */
  eventType: Scalars['String']['input'];
};

export type UnsubscribeNotificationEventTypePayload = {
  __typename?: 'UnsubscribeNotificationEventTypePayload';
  /** Name of the event type unsubscribed */
  eventType: Scalars['String']['output'];
};

export type UpdateAddressInput = {
  addressLines?: InputMaybe<Array<Scalars['String']['input']>>;
  administrativeArea?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['CountryCode']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAreaInput = {
  unit?: InputMaybe<AreaUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCheckInPolicyInput = {
  checkInPeriods?: InputMaybe<Array<ExactOrApproximateTimeRangeInput>>;
  minAge?: InputMaybe<CheckInPolicyMinAgeInput>;
};

export type UpdateCheckOutPolicyInput = {
  checkOutTime?: InputMaybe<ExactOrApproximateTimeInput>;
};

export type UpdateChildrenPolicyInput = {
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  allowedAges?: InputMaybe<Array<AgeRangeInput>>;
  childrenAllowedNote?: InputMaybe<Array<LocalizedStringInput>>;
  childrenNotAllowedNote?: InputMaybe<Array<LocalizedStringInput>>;
};

export type UpdateCustomStayPolicyInput = {
  description: Array<LocalizedStringInput>;
  key: Scalars['String']['input'];
};

export type UpdateEventsPolicyInput = {
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  allowedEvents?: InputMaybe<AllowedEventsInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
};

export type UpdateImageInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  captions?: InputMaybe<Array<LocalizedStringInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  rotation?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateImagePayload = {
  __typename?: 'UpdateImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
};

export type UpdateMaxOccupancyPolicyInput = {
  adultCount?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
  totalGuestCount?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateNotificationCallbackConfigInput = {
  /** Updated api key of callback configuration */
  apiKey?: InputMaybe<Scalars['String']['input']>;
  /** Id of callback configuration to update */
  callbackConfigId: Scalars['ID']['input'];
  /** Updated callback url of callback configuration */
  callbackUrl?: InputMaybe<Scalars['Url']['input']>;
  /** Email address for correspondence */
  contactEmail?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Updated request timeout in seconds of callback configuration */
  requestTimeoutSeconds?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateNotificationCallbackConfigPayload = {
  __typename?: 'UpdateNotificationCallbackConfigPayload';
  /** Information about the updated Callback configuration */
  callbackConfig: NotificationCallbackConfig;
};

export type UpdateNotificationEventTypeSubscriptionInput = {
  /** Id of callback configuration to associate the subscription */
  callbackConfigId: Scalars['ID']['input'];
  /** Event type name */
  eventType: Scalars['String']['input'];
};

export type UpdateNotificationEventTypeSubscriptionPayload = {
  __typename?: 'UpdateNotificationEventTypeSubscriptionPayload';
  /** Callback configuration information for the event type subscription */
  callbackConfig: NotificationCallbackConfig;
  /** Name of the event type */
  eventType: Scalars['String']['output'];
};

export type UpdatePetsPolicyInput = {
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  allowedPets?: InputMaybe<AllowedPetsInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
};

export type UpdatePoliciesInput = {
  bookingPolicy?: InputMaybe<BookingPolicyInput>;
  stayPolicy?: InputMaybe<UpdateStayPolicyInput>;
};

export type UpdatePropertyInput = {
  address?: InputMaybe<UpdateAddressInput>;
  amenities?: InputMaybe<Array<AmenityInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<UpdatePropertyLocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<LocalizedStringInput>>;
  policies?: InputMaybe<UpdatePoliciesInput>;
  referenceName?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Array<TextInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export enum UpdatePropertyListingBundleAdoptionType {
  All = 'ALL',
  List = 'LIST'
}

export type UpdatePropertyLocationInput = {
  coordinates?: InputMaybe<CoordinatesInput>;
  hideExactLocation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePropertyPayload = {
  __typename?: 'UpdatePropertyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
};

export type UpdatePropertyUnitInput = {
  amenities?: InputMaybe<Array<AmenityInput>>;
  area?: InputMaybe<UpdateAreaInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  unitId: Scalars['ID']['input'];
};

export type UpdatePropertyUnitPayload = {
  __typename?: 'UpdatePropertyUnitPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  unit: Unit;
};

export type UpdateSmokingLocationPolicyInput = {
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  allowedNote?: InputMaybe<Array<LocalizedStringInput>>;
};

export type UpdateSmokingPolicyInput = {
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  indoorPolicy?: InputMaybe<UpdateSmokingLocationPolicyInput>;
  note?: InputMaybe<Array<LocalizedStringInput>>;
  outdoorPolicy?: InputMaybe<UpdateSmokingLocationPolicyInput>;
};

export type UpdateStayPolicyInput = {
  checkInPolicy?: InputMaybe<UpdateCheckInPolicyInput>;
  checkOutPolicy?: InputMaybe<UpdateCheckOutPolicyInput>;
  childrenPolicy?: InputMaybe<UpdateChildrenPolicyInput>;
  customPolicies?: InputMaybe<Array<UpdateCustomStayPolicyInput>>;
  eventsPolicy?: InputMaybe<UpdateEventsPolicyInput>;
  maxOccupancyPolicy?: InputMaybe<UpdateMaxOccupancyPolicyInput>;
  petsPolicy?: InputMaybe<UpdatePetsPolicyInput>;
  rentalAgreementUrl?: InputMaybe<Scalars['Url']['input']>;
  smokingPolicy?: InputMaybe<UpdateSmokingPolicyInput>;
};

/** Government registration information for a given property */
export type UpdateUnitRegistrationInput = {
  /** Additional property registration information required by certain districts */
  applicableRegulations?: InputMaybe<Array<ApplicableRegulationsInput>>;
  /** List of registration information for each bookable unit of a multi-unit property */
  details: Array<RegistrationDetailInput>;
};

export type UpdateUnitSpacesBathroomInput = {
  amenities?: InputMaybe<Array<AmenityInput>>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<TextInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUnitSpacesBedroomInput = {
  bedGroups?: InputMaybe<Array<BedGroupInput>>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<TextInput>>;
};

export type UpdateUnitSpacesDiningRoomInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUnitSpacesInput = {
  bathrooms?: InputMaybe<Array<UpdateUnitSpacesBathroomInput>>;
  bedrooms?: InputMaybe<Array<UpdateUnitSpacesBedroomInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  diningRooms?: InputMaybe<Array<UpdateUnitSpacesDiningRoomInput>>;
  livingRooms?: InputMaybe<Array<UpdateUnitSpacesLivingRoomInput>>;
  offices?: InputMaybe<Array<UpdateUnitSpacesOfficeInput>>;
  propertyId: Scalars['ID']['input'];
  unitId: Scalars['ID']['input'];
};

export type UpdateUnitSpacesLivingRoomInput = {
  bedGroups?: InputMaybe<Array<BedGroupInput>>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<TextInput>>;
};

export type UpdateUnitSpacesOfficeInput = {
  bedGroups?: InputMaybe<Array<BedGroupInput>>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<TextInput>>;
};

export type UpdateUnitSpacesPayload = {
  __typename?: 'UpdateUnitSpacesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  spaces: UnitSpaces;
};

/** Payload for sending one or many Property ID mappings. */
export type UpdateVrboSupplierPropertyIdsInput = {
  /** The intended Advertiser ID associated with these updates. */
  advertiserId: Scalars['ID']['input'];
  /** A list of one or many Property ID mappings. */
  vrboSupplierPropertyIdMappings: Array<VrboSupplierPropertyIdMappingInput>;
};

/** Response object after successful Property ID mapping submission. */
export type UpdateVrboSupplierPropertyIdsPayload = {
  __typename?: 'UpdateVrboSupplierPropertyIdsPayload';
  /** The applicable Advertiser ID for the submitted mappings. */
  advertiserId: Scalars['ID']['output'];
  /** list of properties with error messages that errored while mapping */
  propertyMappingErrors: Array<PropertyMappingError>;
  /** A playback of submitted Property ID mappings. */
  vrboSupplierPropertyIdMappings: Array<VrboSupplierPropertyIdMapping>;
};

/** Payload for sending one or many Reservation ID mappings. */
export type UpdateVrboSupplierReservationIdsInput = {
  /** The intended Advertiser ID associated with these updates. */
  advertiserId: Scalars['ID']['input'];
  /** A list of one or many Reservation ID mappings. */
  vrboSupplierReservationIdMappings: Array<VrboSupplierReservationIdMappingInput>;
};

/** Response object after successful Reservation ID mapping submission. */
export type UpdateVrboSupplierReservationIdsPayload = {
  __typename?: 'UpdateVrboSupplierReservationIdsPayload';
  /** The applicable Advertiser ID for the submitted mappings. */
  advertiserId: Scalars['ID']['output'];
  /** list of reservations with error messages that errored while mapping */
  reservationMappingErrors: Array<ReservationMappingError>;
  /** A playback of submitted Reservation ID mappings. */
  vrboSupplierReservationIdMappings: Array<VrboSupplierReservationIdMapping>;
};

export type UpdatedReviewResponse = {
  __typename?: 'UpdatedReviewResponse';
  /**  review response text  */
  body: LocalizedString;
  /**  review create time in ISO format  */
  createdDateTime: Scalars['String']['output'];
  /**  status of the management response  */
  status: Scalars['String']['output'];
};

/** Possible actions for vrbo cancellation */
export enum VrboCancellationPolicyAction {
  Apply = 'APPLY',
  FullWaiver = 'FULL_WAIVER',
  OverrideWithPenalty = 'OVERRIDE_WITH_PENALTY'
}

/** Cancel Policy Override for vrbo cancellation */
export type VrboCancellationPolicyOverride = {
  percent?: InputMaybe<Scalars['Float']['input']>;
  type: VrboCancellationPolicyOverrideType;
};

/** Possible override types on the vrbo cancellation */
export enum VrboCancellationPolicyOverrideType {
  Percent = 'PERCENT'
}

/** Primary reasons for vrbo cancellation */
export enum VrboCancellationReason {
  DatesBookedAnotherPlatform = 'DATES_BOOKED_ANOTHER_PLATFORM',
  ExtenuatingCircumstance = 'EXTENUATING_CIRCUMSTANCE',
  GuestRequestedCancel = 'GUEST_REQUESTED_CANCEL',
  HouseRulesConflict = 'HOUSE_RULES_CONFLICT',
  PaymentNotReceived = 'PAYMENT_NOT_RECEIVED',
  PropertySoldOwnershipChange = 'PROPERTY_SOLD_OWNERSHIP_CHANGE'
}

/** Secondary reasons for vrbo cancellation. Only valid if CancellationReason is GUEST_REQUESTED_CANCEL */
export enum VrboCancellationSecondaryReason {
  AmenityNotAvailable = 'AMENITY_NOT_AVAILABLE',
  BookingMistake = 'BOOKING_MISTAKE',
  ChangedDestination = 'CHANGED_DESTINATION',
  ChangeDates = 'CHANGE_DATES',
  ChangeGuests = 'CHANGE_GUESTS',
  ChangeOfPlans = 'CHANGE_OF_PLANS',
  Other = 'OTHER',
  OwnerDisagree = 'OWNER_DISAGREE',
  OwnerRequest = 'OWNER_REQUEST',
  Payment = 'PAYMENT'
}

/** An Error type containing the Error Code and Error message info. */
export type VrboIdMappingError = {
  __typename?: 'VrboIdMappingError';
  /** An error code to identify error */
  code: Scalars['String']['output'];
  /** An error message associated with mapping ERROR to provide more details. */
  message: Scalars['String']['output'];
};

/** A status type for returning current ID Mapping progress. This type is only applicable to Vrbo IPM Onboarding Software Switch and PPM --> IPM workflows. */
export type VrboIdMappingProgress = {
  __typename?: 'VrboIdMappingProgress';
  /** The Advertiser ID an IPM is switching to. */
  advertiserId: Scalars['ID']['output'];
  /** A Property mappings type containing the Property Mapping Details */
  vrboIdPropertyMappings: VrboIdPropertyMappings;
  /** A Reservation mappings type containing the Reservation Mapping Details */
  vrboIdReservationMappings: VrboIdReservationMappings;
};

/** A Property mappings type containing the Property Mapping Details */
export type VrboIdPropertyMappings = {
  __typename?: 'VrboIdPropertyMappings';
  /** The timestamp for when this status record was created. */
  createDateTime: Scalars['String']['output'];
  /** A list of Property IDs without mappings, discovered during mapping validation. */
  missingVrboIdMappingProperties: Array<Scalars['ID']['output']>;
  /** A list of EG Property IDs that the Partner wishes to archive. */
  propertyIdsToArchive: Array<Scalars['ID']['output']>;
  /** The overall processing status for committed Property ID mappings. */
  propertyMappingUpdateStatus: VrboOnboardingIdMappingStatus;
  /** A list of individual Property ID mappings. */
  propertyMappings: Array<PropertyMapping>;
  /** The timestamp for when this status record was updated. */
  updateDateTime: Scalars['String']['output'];
};

/** A Reservation mappings type containing the Reservation Mapping Details */
export type VrboIdReservationMappings = {
  __typename?: 'VrboIdReservationMappings';
  /** The timestamp for when this status record was created. */
  createDateTime: Scalars['String']['output'];
  /** A list of Reservation IDs without mappings, discovered during mapping validation. */
  missingVrboIdReservationMappings: Array<MissingVrboIdReservationMapping>;
  /** The overall processing status for committed Reservation ID mappings. */
  reservationMappingUpdateStatus: VrboOnboardingIdMappingStatus;
  /** A list of individual Reservation ID mappings. */
  reservationMappings: Array<ReservationMapping>;
  /** The timestamp for when this status record was updated. */
  updateDateTime: Scalars['String']['output'];
};

/** Available processing statuses for an individual ID Mapping submission. */
export enum VrboMappingProcessingStatus {
  /** Mapping processing is complete for this individual ID Mapping. */
  Mapped = 'MAPPED',
  /** There was a problem encountered during the processing of this individual ID Mapping. See the accompanying error message for details. */
  MappingError = 'MAPPING_ERROR',
  /** The default status upon submitting an ID Mapping. */
  Unprocessed = 'UNPROCESSED',
  /** After committing mappings by partner, this individual ID Mapping is validated by Expedia. */
  Validated = 'VALIDATED',
  /** After committing mappings by partner, this individual ID Mapping has validation Errors. See the accompanying error message for details. */
  ValidationError = 'VALIDATION_ERROR'
}

/** The current processing status for an ID mapping submission. */
export type VrboMappingStatus = {
  __typename?: 'VrboMappingStatus';
  /** Advertiser ID for mapping submission. */
  advertiserId: Scalars['ID']['output'];
  /** The current status of ID mapping processing. */
  vrboOnboardingIdMappingStatus: VrboOnboardingIdMappingStatus;
};

/** Status values for ID mapping processing stages. */
export enum VrboOnboardingIdMappingStatus {
  /** System has finished processing ID mappings. */
  Complete = 'COMPLETE',
  /** There was a problem encountered during ID Mapping processing. See the accompanying error message for details. */
  Error = 'ERROR',
  /** System is processing ID mappings. */
  InProgressWithExpediaGroup = 'IN_PROGRESS_WITH_EXPEDIA_GROUP',
  /** Partner is submitting mappings for Property and Reservation IDs. */
  InProgressWithPartner = 'IN_PROGRESS_WITH_PARTNER',
  /** Expedia is validating mappings for Property and Reservation IDs. */
  ValidationInProgress = 'VALIDATION_IN_PROGRESS'
}

/** VRBO reservation amount details */
export type VrboReservationAmount = {
  __typename?: 'VrboReservationAmount';
  /** amount value for reservation */
  amount: Money;
  /** product code for reservation amount */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Amount type (RENT, PARTNER_FEE, TRAVELER_SERVICE_FEE, PROPERTY_DAMAGE_PROTECTION, VRBO_REMITTED_LODGING_TAX, ...) */
  type: Scalars['String']['output'];
};

/** Amounts for VRBO reservation */
export type VrboReservationAmounts = {
  __typename?: 'VrboReservationAmounts';
  /** Summary list of the reservation amounts */
  summary: Array<VrboReservationAmount>;
};

/** A mapping of an EG Property ID to a current Supplier Property ID. */
export type VrboSupplierPropertyIdMapping = {
  __typename?: 'VrboSupplierPropertyIdMapping';
  /** The EG Property ID for a given Property. */
  egPropertyId: Scalars['ID']['output'];
  /** The Supplier Property ID for a given Property. */
  vrboSupplierPropertyId: Scalars['ID']['output'];
  /** The Supplier Unit ID for this Property. */
  vrboSupplierUnitId: Scalars['ID']['output'];
};

/** A mapping of an EG Property ID to a current Supplier Property ID. */
export type VrboSupplierPropertyIdMappingInput = {
  /** The EG Property ID for a given Property. */
  egPropertyId: Scalars['ID']['input'];
  /** The Supplier Property ID for a given Property. */
  vrboSupplierPropertyId?: InputMaybe<Scalars['String']['input']>;
  /** The Supplier Unit ID for this Property. */
  vrboSupplierUnitId?: InputMaybe<Scalars['String']['input']>;
};

/** A mapping object to return reservation IDs with EG Property ID. */
export type VrboSupplierReservationIdMapping = {
  __typename?: 'VrboSupplierReservationIdMapping';
  /** The applicable EG Property ID. */
  egPropertyId: Scalars['ID']['output'];
  /** An array of IDs containing the EG Reservation ID and the new Supplier Reservation ID. */
  reservationIds: Array<IdNode>;
};

/** A mapping of an EG Reservation ID to a current Supplier Reservation ID. */
export type VrboSupplierReservationIdMappingInput = {
  /** The EG Property ID for a given Reservation. */
  egPropertyId: Scalars['ID']['input'];
  /** The EG Reservation ID for a given Reservation. */
  egReservationId: Scalars['ID']['input'];
  /** The current Reservation Supplier ID for a given Reservation. */
  vrboSupplierReservationId?: InputMaybe<Scalars['String']['input']>;
};

/** Describes the warning codes */
export type WarningStatus = {
  __typename?: 'WarningStatus';
  /** Warning code. */
  code: Scalars['String']['output'];
  /** Description of the warning. */
  description: Scalars['String']['output'];
};

export type Weight = {
  __typename?: 'Weight';
  amount: Scalars['Int']['output'];
  weightUnit: BaseWeightUnit;
};

export type WeightInput = {
  amount: Scalars['Int']['input'];
  weightUnit: BaseWeightUnit;
};

export type NotificationCallbackConfigFragmentFragment = { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number };

export type ReservationFragmentFragment = { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> };

export type CancelReservationMutationVariables = Exact<{
  input: CancelReservationInput;
}>;


export type CancelReservationMutation = { __typename?: 'Mutation', cancelReservation: { __typename?: 'CancelReservationPayload', reservation?: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } | null } };

export type CancelReservationReconciliationMutationVariables = Exact<{
  input: CancelReservationReconciliationInput;
}>;


export type CancelReservationReconciliationMutation = { __typename?: 'Mutation', cancelReservationReconciliation: { __typename?: 'CancelReservationReconciliationPayload', reservation?: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } | null } };

export type ChangeReservationReconciliationMutationVariables = Exact<{
  input: ChangeReservationReconciliationInput;
}>;


export type ChangeReservationReconciliationMutation = { __typename?: 'Mutation', changeReservationReconciliation: { __typename?: 'ChangeReservationReconciliationPayload', reservation?: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } | null } };

export type ConfirmReservationNotificationMutationVariables = Exact<{
  input: ConfirmReservationNotificationInput;
}>;


export type ConfirmReservationNotificationMutation = { __typename?: 'Mutation', confirmReservationNotification: { __typename?: 'ConfirmReservationNotificationPayload', clientMutationId?: string | null, reservation?: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } | null } };

export type CreateNotificationCallbackConfigMutationVariables = Exact<{
  input: CreateNotificationCallbackConfigInput;
}>;


export type CreateNotificationCallbackConfigMutation = { __typename?: 'Mutation', createNotificationCallbackConfig?: { __typename?: 'CreateNotificationCallbackConfigPayload', secret: string, callbackConfig: { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number } } | null };

export type DeleteNotificationCallbackConfigMutationVariables = Exact<{
  input: DeleteNotificationCallbackConfigInput;
}>;


export type DeleteNotificationCallbackConfigMutation = { __typename?: 'Mutation', deleteNotificationCallbackConfig?: { __typename?: 'DeleteNotificationCallbackConfigPayload', callbackConfigId: string } | null };

export type RefreshNotificationCallbackConfigSecretMutationVariables = Exact<{
  input: RefreshNotificationCallbackConfigSecretInput;
}>;


export type RefreshNotificationCallbackConfigSecretMutation = { __typename?: 'Mutation', refreshNotificationCallbackConfigSecret?: { __typename?: 'RefreshNotificationCallbackConfigSecretPayload', callbackConfigId: string, secret: string, secretExpirationDateTime: any } | null };

export type RefundReservationMutationVariables = Exact<{
  input: RefundReservationInput;
}>;


export type RefundReservationMutation = { __typename?: 'Mutation', refundReservation: { __typename?: 'RefundReservationPayload', reservation?: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } | null } };

export type SendTestNotificationMutationVariables = Exact<{
  input: SendTestNotificationInput;
}>;


export type SendTestNotificationMutation = { __typename?: 'Mutation', sendTestNotification?: { __typename?: 'SendTestNotificationPayload', httpStatusCode?: number | null, outcome: TestNotificationOutcome, error?: { __typename?: 'TestNotificationError', code: string, message: string } | null } | null };

export type SubscribeNotificationEventTypeMutationVariables = Exact<{
  input: SubscribeNotificationEventTypeInput;
}>;


export type SubscribeNotificationEventTypeMutation = { __typename?: 'Mutation', subscribeNotificationEventType?: { __typename?: 'SubscribeNotificationEventTypePayload', eventType: string, callbackConfig: { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number } } | null };

export type UnsubscribeNotificationEventTypeMutationVariables = Exact<{
  input: UnsubscribeNotificationEventTypeInput;
}>;


export type UnsubscribeNotificationEventTypeMutation = { __typename?: 'Mutation', unsubscribeNotificationEventType?: { __typename?: 'UnsubscribeNotificationEventTypePayload', eventType: string } | null };

export type UpdateNotificationCallbackConfigMutationVariables = Exact<{
  input: UpdateNotificationCallbackConfigInput;
}>;


export type UpdateNotificationCallbackConfigMutation = { __typename?: 'Mutation', updateNotificationCallbackConfig?: { __typename?: 'UpdateNotificationCallbackConfigPayload', callbackConfig: { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number } } | null };

export type UpdateNotificationEventTypeSubscriptionMutationVariables = Exact<{
  input: UpdateNotificationEventTypeSubscriptionInput;
}>;


export type UpdateNotificationEventTypeSubscriptionMutation = { __typename?: 'Mutation', updateNotificationEventTypeSubscription?: { __typename?: 'UpdateNotificationEventTypeSubscriptionPayload', eventType: string, callbackConfig: { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number } } | null };

export type MessageQueryVariables = Exact<{
  messageId: Scalars['ID']['input'];
}>;


export type MessageQuery = { __typename?: 'Query', message?: { __typename?: 'MessageThreadMessage', type?: string | null } | null };

export type NotificationEventTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationEventTypesQuery = { __typename?: 'Query', notificationEventTypes?: Array<{ __typename?: 'NotificationEventType', name: string, description: string }> | null };

export type NotificationProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationProfileQuery = { __typename?: 'Query', notificationProfile?: { __typename?: 'NotificationProfile', callbackConfigs: Array<{ __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number }>, subscriptions: Array<{ __typename?: 'NotificationSubscription', product: string, eventTypeSubscriptions: Array<{ __typename?: 'NotificationEventTypeSubscription', eventType: string, callbackConfig: { __typename?: 'NotificationCallbackConfig', id: string, callbackUrl: any, secretExpirationDateTime: any, requestTimeoutSeconds: number } }> }> } | null };

export type PropertyQueryVariables = Exact<{
  propertyId: Scalars['String']['input'];
  idSource?: InputMaybe<IdSource>;
  checkOutDate?: InputMaybe<CheckOutDateFilter>;
  filter?: InputMaybe<ReservationFilterInput>;
  pageSize: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'Property', id: string, name: string, reservations: { __typename?: 'ReservationsConnection', totalCount?: number | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } | null, edges: Array<{ __typename?: 'ReservationEdge', cursor: string, node: { __typename?: 'Reservation', id: string, checkInDate: any, checkOutDate: any, creationDateTime: string, status: ReservationStatus, subStatus?: string | null, isReconciled?: boolean | null, reconciliationType?: string | null, tidsCode?: number | null, messageThreadId?: string | null, supplierOperatingModel?: SupplierOperatingModel | null, inventoryType?: InventoryType | null, remittanceType?: RemittanceType | null, adultCount: number, childCount: number, childAges?: Array<number | null> | null, totalGuestCount: number, petCount?: number | null, specialRequest?: string | null, paymentInstructions: string, payment: { __typename?: 'Payment', instructions: string, status?: ReservationPaymentStatus | null, instrument?: { __typename?: 'PaymentInstrument', type: PaymentInstrumentType, token: { __typename?: 'PaymentToken', value?: string | null, expirationDateTime?: string | null } } | null, installments: Array<{ __typename?: 'Installment', dueDate: any, amount: { __typename?: 'Money', currencyCode: any, amount: any }, distributions: Array<{ __typename?: 'InstallmentDistribution', type: string, amount: { __typename?: 'Money', currencyCode: any, amount: any } }> }> }, primaryGuest: { __typename?: 'Guest', firstName: string, lastName: string, loyaltyTier?: string | null, emailAddress?: any | null, travelPurpose?: TravelPurpose | null, phoneNumbers?: Array<{ __typename?: 'GuestContactPhoneNumber', countryCode: string, areaCode: string, number: string }> | null, supplierLoyaltyPlanInfo?: { __typename?: 'SupplierLoyaltyPlanInfo', planCode?: string | null, membershipNumber?: number | null } | null }, supplierAmount?: { __typename?: 'ExpediaSupplierAmount', rateType: RateType, currencyCode: string } | null, reservationIds: Array<{ __typename?: 'IdNode', id?: string | null, idSource: IdSource }> } } | null> } } | null };

export const NotificationCallbackConfigFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCallbackConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]} as unknown as DocumentNode<NotificationCallbackConfigFragmentFragment, unknown>;
export const ReservationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<ReservationFragmentFragment, unknown>;
export const CancelReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelReservationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<CancelReservationMutation, CancelReservationMutationVariables>;
export const CancelReservationReconciliationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelReservationReconciliation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelReservationReconciliationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelReservationReconciliation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<CancelReservationReconciliationMutation, CancelReservationReconciliationMutationVariables>;
export const ChangeReservationReconciliationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeReservationReconciliation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeReservationReconciliationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeReservationReconciliation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<ChangeReservationReconciliationMutation, ChangeReservationReconciliationMutationVariables>;
export const ConfirmReservationNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmReservationNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmReservationNotificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmReservationNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}},{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<ConfirmReservationNotificationMutation, ConfirmReservationNotificationMutationVariables>;
export const CreateNotificationCallbackConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotificationCallbackConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNotificationCallbackConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNotificationCallbackConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"secret"}},{"kind":"Field","name":{"kind":"Name","value":"callbackConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCallbackConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]} as unknown as DocumentNode<CreateNotificationCallbackConfigMutation, CreateNotificationCallbackConfigMutationVariables>;
export const DeleteNotificationCallbackConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotificationCallbackConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteNotificationCallbackConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotificationCallbackConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callbackConfigId"}}]}}]}}]} as unknown as DocumentNode<DeleteNotificationCallbackConfigMutation, DeleteNotificationCallbackConfigMutationVariables>;
export const RefreshNotificationCallbackConfigSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshNotificationCallbackConfigSecret"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshNotificationCallbackConfigSecretInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshNotificationCallbackConfigSecret"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callbackConfigId"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}}]}}]}}]} as unknown as DocumentNode<RefreshNotificationCallbackConfigSecretMutation, RefreshNotificationCallbackConfigSecretMutationVariables>;
export const RefundReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefundReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefundReservationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refundReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<RefundReservationMutation, RefundReservationMutationVariables>;
export const SendTestNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendTestNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendTestNotificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendTestNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"httpStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"outcome"}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SendTestNotificationMutation, SendTestNotificationMutationVariables>;
export const SubscribeNotificationEventTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeNotificationEventType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeNotificationEventTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeNotificationEventType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"callbackConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCallbackConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]} as unknown as DocumentNode<SubscribeNotificationEventTypeMutation, SubscribeNotificationEventTypeMutationVariables>;
export const UnsubscribeNotificationEventTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnsubscribeNotificationEventType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnsubscribeNotificationEventTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsubscribeNotificationEventType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}}]}}]} as unknown as DocumentNode<UnsubscribeNotificationEventTypeMutation, UnsubscribeNotificationEventTypeMutationVariables>;
export const UpdateNotificationCallbackConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotificationCallbackConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateNotificationCallbackConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotificationCallbackConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callbackConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCallbackConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]} as unknown as DocumentNode<UpdateNotificationCallbackConfigMutation, UpdateNotificationCallbackConfigMutationVariables>;
export const UpdateNotificationEventTypeSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotificationEventTypeSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateNotificationEventTypeSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotificationEventTypeSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"callbackConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCallbackConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCallbackConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]} as unknown as DocumentNode<UpdateNotificationEventTypeSubscriptionMutation, UpdateNotificationEventTypeSubscriptionMutationVariables>;
export const MessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Message"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MessageQuery, MessageQueryVariables>;
export const NotificationEventTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotificationEventTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationEventTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<NotificationEventTypesQuery, NotificationEventTypesQueryVariables>;
export const NotificationProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotificationProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callbackConfigs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypeSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"callbackConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secretExpirationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"requestTimeoutSeconds"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NotificationProfileQuery, NotificationProfileQueryVariables>;
export const PropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Property"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idSource"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IdSource"}},"defaultValue":{"kind":"EnumValue","value":"EXPEDIA"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkOutDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckOutDateFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReservationFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idSource"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idSource"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"reservations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"checkOutDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkOutDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkInDate"}},{"kind":"Field","name":{"kind":"Name","value":"checkOutDate"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isReconciled"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationType"}},{"kind":"Field","name":{"kind":"Name","value":"tidsCode"}},{"kind":"Field","name":{"kind":"Name","value":"messageThreadId"}},{"kind":"Field","name":{"kind":"Name","value":"supplierOperatingModel"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryType"}},{"kind":"Field","name":{"kind":"Name","value":"remittanceType"}},{"kind":"Field","name":{"kind":"Name","value":"adultCount"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"childAges"}},{"kind":"Field","name":{"kind":"Name","value":"totalGuestCount"}},{"kind":"Field","name":{"kind":"Name","value":"petCount"}},{"kind":"Field","name":{"kind":"Name","value":"specialRequest"}},{"kind":"Field","name":{"kind":"Name","value":"paymentInstructions"}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"installments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryGuest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"loyaltyTier"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"supplierLoyaltyPlanInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planCode"}},{"kind":"Field","name":{"kind":"Name","value":"membershipNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelPurpose"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supplierAmount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateType"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reservationIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idSource"}}]}}]}}]} as unknown as DocumentNode<PropertyQuery, PropertyQueryVariables>;