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
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
};

/** Source of the reservation booking. */
export enum BookingSource {
  /** Reservation was booked through one of Expedia brands. */
  Expedia = 'EXPEDIA',
  /** Reservation was booked through Vrbo. */
  Vrbo = 'VRBO'
}

/** Entity that collects payment for the reservation. */
export enum BusinessModel {
  /** Expedia collects payment for the reservation. */
  ExpediaCollect = 'EXPEDIA_COLLECT',
  /** Property collects payment for the reservation. */
  HotelCollect = 'HOTEL_COLLECT'
}

/** Entity that collects payment. */
export enum BusinessModelInput {
  /** Expedia collects payment. */
  ExpediaCollect = 'EXPEDIA_COLLECT',
  /** Property collects payment. */
  HotelCollect = 'HOTEL_COLLECT'
}

/** Input to cancel a reservation. */
export type CancelReservationInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the reservation to cancel. */
  id: Scalars['ID']['input'];
  /** Whether to send a notification upon the cancellation of the reservation. */
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Response payload for the cancelReservation mutation. */
export type CancelReservationPayload = {
  __typename?: 'CancelReservationPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The reservation that was cancelled. */
  reservation: Reservation;
};

/** Input to change the stay dates of a reservation. */
export type ChangeReservationStayDatesInput = {
  /** New check-in date of the reservation. */
  checkInDate: Scalars['Date']['input'];
  /** New check-out date of the reservation. */
  checkOutDate: Scalars['Date']['input'];
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the reservation to change. */
  id: Scalars['ID']['input'];
  /** Whether to send a notification upon the change of the reservation dates. */
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
};

/** REsponse payload for the changeReservationStayDates mutation. */
export type ChangeReservationStayDatesPayload = {
  __typename?: 'ChangeReservationStayDatesPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The reservation that was updated. */
  reservation: Reservation;
};

export type CreateDatasetPayload = {
  __typename?: 'CreateDatasetPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  propertyId: Scalars['String']['output'];
  result: Array<Scalars['String']['output']>;
};

/** Input object for creating a property. */
export type CreatePropertyInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Optional name for the property. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload to the createProperty mutation. */
export type CreatePropertyPayload = {
  __typename?: 'CreatePropertyPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The created property. */
  property: Property;
};

/** Input to create a reservation */
export type CreateReservationInput = {
  /** Accessibility requests made by the guest for the reservation. Defaults to a single accessibility text with value "In-room accessibility (in select rooms)". */
  accessibilityText?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Adult count. Defaults to 2. */
  adultCount?: InputMaybe<Scalars['Int']['input']>;
  /** Bed types of the reservation. Defaults to "2 Queen Beds". */
  bedTypes?: InputMaybe<Scalars['String']['input']>;
  /** Entity that collects payment for the reservation. Defaults to EXPEDIA_COLLECT. */
  businessModel?: InputMaybe<BusinessModelInput>;
  /** Check-in date (format: YYYY-MM-DD) of the reservation. Defaults to a date in a near future. */
  checkInDate?: InputMaybe<Scalars['Date']['input']>;
  /** Check-out date (format: YYYY-MM-DD) of the reservation. Defaults to a random date in the month after the check-in date. */
  checkOutDate?: InputMaybe<Scalars['Date']['input']>;
  /** Ages of children associated with the reservation. If not specified, defaults to a list of 1 or 2 random child ages. */
  childAges?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Child count. If not specified, defaults to the number of child ages provided (or its default). */
  childCount?: InputMaybe<Scalars['Int']['input']>;
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Text that is displayed to guests if there are multiple rooms associated with the reservation. */
  multiRoomText?: InputMaybe<Scalars['String']['input']>;
  /** Type of payment instrument. Defaults to EXPEDIA_VIRTUAL_CARD in case of EXPEDIA_COLLECT else GUEST_CREDIT_CARD. */
  paymentInstrumentType?: InputMaybe<PaymentInstrumentTypeInput>;
  /** Guest who made the reservation. Guest personal information cannot be set and is automatically generated. */
  primaryGuest?: InputMaybe<GuestInput>;
  /** Property id on which to associate the reservation. */
  propertyId: Scalars['ID']['input'];
  /** Reconciliation type of the reservation, either MODIFY, CANCEL, NO_SHOW, or null. Defaults to non-reconciled (null). */
  reconciliationType?: InputMaybe<ReconciliationTypeInput>;
  /** Remittance type of the reservation. Defaults to NET. */
  remittanceType?: InputMaybe<RemittanceTypeInput>;
  /** Whether to send a notification upon the creation of the reservation. Defaults to false. */
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether smoking is allowed for the reservation. Defaults to "NONSMOKING". */
  smokingType?: InputMaybe<Scalars['String']['input']>;
  /** Text that is displayed to guests if there is a special request associated with the reservation. Defaults to "Expedia test reservation. This is a free-text comment from the traveler.". */
  specialRequest?: InputMaybe<Scalars['String']['input']>;
  /** Current status of the reservation. Defaults to BOOKED. */
  status?: InputMaybe<ReservationStatusInput>;
  /** Value add promotion(s) used to book the reservation. Defaults to a single "Free full breakfast for 2 per day" value added promotion. */
  valueAddedPromotions?: InputMaybe<Array<ReservationValueAddedPromotionInput>>;
};

/** Response payload to the createReservation mutation. */
export type CreateReservationPayload = {
  __typename?: 'CreateReservationPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The reservation that was created. */
  reservation: Reservation;
};

/** Input object for deleting a property. */
export type DeletePropertyInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the property to delete. */
  id: Scalars['ID']['input'];
};

/** Response payload to the deleteProperty mutation. */
export type DeletePropertyPayload = {
  __typename?: 'DeletePropertyPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Input to delete all reservations for a specified property. */
export type DeletePropertyReservationsInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the property for which to delete all reservations. */
  propertyId: Scalars['ID']['input'];
};

/** Response payload to the deletePropertyReservations mutation. */
export type DeletePropertyReservationsPayload = {
  __typename?: 'DeletePropertyReservationsPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Input to delete a reservation. */
export type DeleteReservationInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the reservation to delete. */
  id: Scalars['ID']['input'];
};

/** Response payload to the deleteReservation mutation. */
export type DeleteReservationPayload = {
  __typename?: 'DeleteReservationPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Guest who made the reservation. */
export type Guest = {
  __typename?: 'Guest';
  /** Email address of the guest. */
  emailAddress: Scalars['String']['output'];
  /** First (given) name of the guest. */
  firstName: Scalars['String']['output'];
  /** Last name (surname) of the guest. */
  lastName: Scalars['String']['output'];
  /** Guest loyalty tier. Values include MEMBER, VIP, PREMIUMVIP, and NONE. */
  loyaltyTier: Scalars['String']['output'];
  /** Phone numbers associated with the guest. */
  phoneNumbers: Array<GuestContactPhoneNumber>;
  /** Details about the frequent traveler reward program. */
  supplierLoyaltyPlanInfo?: Maybe<SupplierLoyaltyPlanInfo>;
};

/** Guest phone number. */
export type GuestContactPhoneNumber = {
  __typename?: 'GuestContactPhoneNumber';
  /** Area code (three digits). */
  areaCode: Scalars['String']['output'];
  /** Country code (two digits). */
  countryCode: Scalars['String']['output'];
  /** Phone number (seven digits, no hyphen). */
  number: Scalars['String']['output'];
};

/** Guest who made the reservation. Guest personal information cannot be set and is automatically generated. */
export type GuestInput = {
  /** Loyalty tier of the guest. Defaults to "MEMBER". */
  loyaltyTier?: InputMaybe<Scalars['String']['input']>;
  /** Details about the frequent traveler reward program. Defaults to null. */
  supplierLoyaltyPlanInfo?: InputMaybe<SupplierLoyaltyPlanInfoInput>;
};

/** Known IDs in the source system. */
export type IdNode = {
  __typename?: 'IdNode';
  /** The ID in the source system. */
  id: Scalars['String']['output'];
  /** The source of the ID. */
  idSource: IdSource;
};

/** Source of a given ID. */
export enum IdSource {
  /** Expedia is the source of the ID. */
  Expedia = 'EXPEDIA',
  /** Connectivity provider or lodging partner is the source of the ID. This value is not supported for use in promotions. */
  Supplier = 'SUPPLIER',
  /** Unsupported. */
  Vrbo = 'VRBO'
}

/** Represents a monetary amount value along with its currency. */
export type Money = {
  __typename?: 'Money';
  /** The actual monetary amount value. The scale of the amount will vary according to the currency or any rate conversion that may have been applied. */
  amount: Scalars['String']['output'];
  /** The code of the currency of the amount. */
  currencyCode: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Cancels an existing reservation.
   *
   * The mutation accepts the reservation ID to cancel as input.
   * An optional parameter is provided to send a notification upon the cancellation of the reservation.
   * The mutation returns the updated reservation details.
   */
  cancelReservation: CancelReservationPayload;
  /**
   * Changes the stay dates of an existing reservation.
   *
   * The mutation accepts the reservation ID, new check-in date, and new check-out date as parameters.
   * The check-out date must be after the check-in date.
   * An optional parameter is provided to send a notification upon the change of the reservation dates.
   * The mutation returns the updated reservation details.
   */
  changeReservationStayDates: ChangeReservationStayDatesPayload;
  /**
   * Creates a property in the sandbox environment.
   *
   * The mutation accepts an optional name for the property. Unspecified
   * fields will default to logical test data.
   */
  createProperty: CreatePropertyPayload;
  /**
   * Creates a reservation in the sandbox environment.
   * The mutation accepts various parameters such as property ID, check-in and
   * check-out dates, adult and child counts, business model, remittance type,
   * and more. Except for the property ID, all other parameters are optional.
   * If not specified, these parameters will default to logical test data.
   *
   * The mutation also supports sending a notification upon the creation of a
   * reservation via the sendNotification field.
   */
  createReservation: CreateReservationPayload;
  /** Deletes a property in the sandbox environment. */
  deleteProperty: DeletePropertyPayload;
  /**
   * Deletes all reservations for a specified sandbox property.
   *
   * The mutation accepts the property ID on which to delete all reservations as input.
   *
   * This operation is irreversible and will permanently delete the property reservations.
   */
  deletePropertyReservations: DeletePropertyReservationsPayload;
  /**
   * Deletes a sandbox reservation.
   *
   * The mutation accepts the reservation ID to delete as input.
   *
   * This operation is irreversible and will permanently delete the reservation.
   */
  deleteReservation: DeleteReservationPayload;
  /**
   * Creates test data for a given capability and scenario.
   * The mutation is currently setup to setup reservation specific test data but this can be extended to other capabilities.
   */
  setupTestData: CreateDatasetPayload;
  /**
   * Updates a property in the sandbox environment.
   *
   * The mutation accepts an optional name for the property. Unspecified
   * fields will not be updated.
   */
  updateProperty: UpdatePropertyPayload;
  /**
   * Updates a reservation in the sandbox environment.
   *
   * The mutation accepts the reservation ID, new check-in date, new check-out date,
   * new status, new special request text, new adult count, and new child count as parameters.
   * The check-out date must be after the check-in date.
   * An optional parameter is provided to send a notification upon the change of the reservation dates.
   * The mutation returns the updated reservation details.
   */
  updateReservation: UpdateReservationPayload;
};


export type MutationCancelReservationArgs = {
  input: CancelReservationInput;
};


export type MutationChangeReservationStayDatesArgs = {
  input: ChangeReservationStayDatesInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateReservationArgs = {
  input: CreateReservationInput;
};


export type MutationDeletePropertyArgs = {
  input: DeletePropertyInput;
};


export type MutationDeletePropertyReservationsArgs = {
  input: DeletePropertyReservationsInput;
};


export type MutationDeleteReservationArgs = {
  input: DeleteReservationInput;
};


export type MutationSetupTestDataArgs = {
  input: SetupTestDataInput;
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


export type MutationUpdateReservationArgs = {
  input: UpdateReservationInput;
};

/** Payment details. */
export type Payment = {
  __typename?: 'Payment';
  /** Card number. Sandbox value is always be "4111111111111111". */
  cardNumber: Scalars['String']['output'];
  /** Name of the issuer associated with the card. Sandbox value is "VISA" for HOTEL_COLLECT reservations and "MasterCard" for EXPEDIA_COLLECT reservations. */
  issuerName: Scalars['String']['output'];
  /** Type of payment instrument. Sandbox value is "GUEST_CREDIT_CARD" for HOTEL_COLLECT reservations and "EXPEDIA_VIRTUAL_CARD" for EXPEDIA_COLLECT reservations. */
  paymentInstrumentType: Scalars['String']['output'];
  /** Randomly generated 3-digits verification number associated with the card. */
  verificationNumber?: Maybe<Scalars['String']['output']>;
};

/** Type of payment instrument. */
export enum PaymentInstrumentTypeInput {
  /** Expedia collects payment via Bank Transfer. */
  BankTransfer = 'BANK_TRANSFER',
  /** Property collects payment via Cash. */
  Cash = 'CASH',
  /** Expedia collects payment via Expedia Virtual card. */
  ExpediaVirtualCard = 'EXPEDIA_VIRTUAL_CARD',
  /** Property collects payment via Guest credit card. */
  GuestCreditCard = 'GUEST_CREDIT_CARD',
  /** No payment instrument. */
  None = 'NONE'
}

/** Response object for property query. */
export type PropertiesResponse = {
  __typename?: 'PropertiesResponse';
  /** Cursor for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** List of properties. */
  elements: Array<Property>;
  /** Total count of properties. */
  totalCount: Scalars['Int']['output'];
};

/** A property in the sandbox. */
export type Property = {
  __typename?: 'Property';
  /** The ID of the property. */
  id: Scalars['ID']['output'];
  /** The name of the property. */
  name: Scalars['String']['output'];
  /**
   * Reservation details for this sandbox property.
   *
   * This query uses pagination to manage the amount of data returned in each request. By default, it returns 25 results at a time.
   *
   * To control the number of results returned, you can use the limit input field. If you want to fetch more or less than 25 results,
   * you can set the limit to the desired number.
   *
   * To fetch all results, you need to use the cursor input field. For the first request, you can leave the cursor as null.
   * For subsequent requests, set the cursor to the value from the previous response. This will return the next set of results
   * starting from the reservation after the cursor.
   */
  reservations: ReservationsResponse;
};


/** A property in the sandbox. */
export type PropertyReservationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Retrieves information about all sandbox properties connected partner has access to.
   *
   * This query uses pagination to manage the amount of data returned in each request. By default, it returns 25 results at a time.
   *
   * To control the number of results returned, you can use the limit input field. If you want to fetch more or less than 25 results,
   * you can set the limit to the desired number.
   *
   * To fetch all results, you need to use the cursor input field. For the first request, you can leave the cursor as null.
   * For subsequent requests, set the cursor to the value from the previous response. This will return the next set of results
   * starting from the property after the cursor.
   */
  properties: PropertiesResponse;
  /** Retrieves information about a single sandbox property using its unique identifier. */
  property: Property;
  /** Retrieve information about a single sandbox reservation by its unique identifier. */
  reservation: Reservation;
};


export type QueryPropertiesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPropertyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReservationArgs = {
  id: Scalars['ID']['input'];
};

/** Type of reconciliation that has been performed on the reservation. */
export enum ReconciliationType {
  /** Reservation was cancelled. */
  Cancel = 'CANCEL',
  /** Reservation was modified. */
  Modify = 'MODIFY',
  /** Reservation was marked as a no-show. */
  NoShow = 'NO_SHOW',
  /** Reservation was refunded. */
  Refund = 'REFUND'
}

/** Reconciliation type for the reservation. */
export enum ReconciliationTypeInput {
  /** The reservation was reconciled as cancelled. */
  Cancel = 'CANCEL',
  /** The reservation was reconciled as modified. */
  Modify = 'MODIFY',
  /** The reservation was reconciled as no-show. */
  NoShow = 'NO_SHOW'
}

/** Remittance type of the reservation. */
export enum RemittanceTypeInput {
  /** Gross remittance type. */
  Gross = 'GROSS',
  /** Net remittance type. */
  Net = 'NET'
}

/** Reservation details. */
export type Reservation = {
  __typename?: 'Reservation';
  /** Accessibility requests made by the guest for the reservation. */
  accessibilityText: Array<Scalars['String']['output']>;
  /** Count for all adult guests associated with the reservation. */
  adultCount: Scalars['Int']['output'];
  /** Amounts associated with the reservation. */
  amounts?: Maybe<ReservationAmounts>;
  /** Bed type of the reservation. */
  bedTypes?: Maybe<Scalars['String']['output']>;
  /**
   * Source of the reservation booking.
   * @deprecated Use source field instead.
   */
  bookingSource: BookingSource;
  /** Entity that collects payment for the reservation. */
  businessModel: BusinessModel;
  /** Check-in date (format: YYYY-MM-DD) of the reservation. */
  checkInDate: Scalars['Date']['output'];
  /** Check-out date (format: YYYY-MM-DD) of the reservation. */
  checkOutDate: Scalars['Date']['output'];
  /** Ages of children associated with the reservation. */
  childAges?: Maybe<Array<Scalars['Int']['output']>>;
  /** Count for all child guests associated with the reservation. */
  childCount: Scalars['Int']['output'];
  /** Date/time when the reservation was created (format: yyyy-MM-dd'T'HH:mm:ss.SSSX, will always be in UTC timezone). */
  creationDateTime: Scalars['String']['output'];
  /** Unique identifier for the reservation. */
  id: Scalars['ID']['output'];
  /** Whether the reservation has been reconciled or not. */
  isReconciled: Scalars['Boolean']['output'];
  /** Date/time when the reservation was last updated (format: yyyy-MM-dd'T'HH:mm:ss.SSSX, will always be in UTC timezone). */
  lastUpdatedDateTime: Scalars['String']['output'];
  /** Text that is displayed to guests if there is a multi-room booking associated with the reservation. */
  multiRoomText?: Maybe<Scalars['String']['output']>;
  /** Payment details associated with the reservation. */
  payment: Payment;
  /** Count of pets associated with the reservation. */
  petCount?: Maybe<Scalars['Int']['output']>;
  /** Guest who made the reservation. */
  primaryGuest: Guest;
  /** Unique identifier for the property. */
  propertyId: Scalars['ID']['output'];
  /** Unique identifiers for the rates associated with the reservation. */
  rateIds?: Maybe<Array<IdNode>>;
  /** Type of reconciliation that has been performed on the reservation, if any. */
  reconciliationType?: Maybe<ReconciliationType>;
  /** Unique identifiers for the reservation, each corresponding to a different source associated with the reservation. */
  reservationIds: Array<IdNode>;
  /** Whether smoking is allowed for the reservation. */
  smokingType: Scalars['String']['output'];
  /** Source of the reservation booking. */
  source: Scalars['String']['output'];
  /** ext that is displayed to guests if there is a special request associated with the reservation. */
  specialRequest?: Maybe<Scalars['String']['output']>;
  /** Current status of the reservation. */
  status: ReservationStatus;
  /** Current substatus of the reservation. Applicable for Vrbo reservations only. */
  subStatus?: Maybe<Scalars['String']['output']>;
  /** Travel Industry Designator Service (TIDS) code that allows a reservation to be recognized by industry suppliers. */
  tidsCode?: Maybe<Scalars['Int']['output']>;
  /** Total number of guests associated with the reservation. */
  totalGuestCount: Scalars['Int']['output'];
  /**
   * Known IDs for the unit/room in the source system(s). IDs that are returned depend on where the property was onboarded:
   * - If the property was onboarded onto Vrbo, three IDs are returned: the partnerâ€™s (external ID), Vrboâ€™s (Vrbo internal ID), and Expedia's (EID).
   * - If the property was onboarded onto Expedia, only the Expedia ID is included in the response.
   */
  unitIds?: Maybe<Array<IdNode>>;
  /** Value add promotion(s) used to book the reservation. */
  valueAddedPromotions?: Maybe<Array<ReservationValueAddedPromotion>>;
};

/** Amounts associated with the reservation. */
export type ReservationAmounts = {
  __typename?: 'ReservationAmounts';
  /** Detailed list of payments associated with the reservation. */
  nightlyPayments?: Maybe<ReservationNightlyPayments>;
};

/** Reservation amount that applies to a specific stay date. */
export type ReservationDailyAmount = {
  __typename?: 'ReservationDailyAmount';
  /** Amount value. */
  amount: Money;
  /** Amount date, in the "yyyy-MM-dd" format (e.g. 2023-01-30). */
  date: Scalars['Date']['output'];
  /** Description associated to the amount. */
  description: Scalars['String']['output'];
  /** Percentage of amount (when applicable), expressed as a fraction of 1 (e.g., 0.12 for 12%). */
  percent?: Maybe<Scalars['Float']['output']>;
  /** Amount type (BASE, DISCOUNT, TAX, GUESS_PAYMENT, PAYOUT, ...). */
  type: Scalars['String']['output'];
};

/** Nightly payments associated with the reservation. */
export type ReservationNightlyPayments = {
  __typename?: 'ReservationNightlyPayments';
  /** Cancellation amounts for the reservation. */
  cancellationAmounts: Array<ReservationPerStayAmount>;
  /** Reservation amounts for a specific stay date. */
  dailyAmounts: Array<ReservationDailyAmount>;
  /** Reservation amounts that apply to the whole stay. */
  perStayAmounts: Array<ReservationPerStayAmount>;
};

/** Reservation amount that applies to the whole stay. */
export type ReservationPerStayAmount = {
  __typename?: 'ReservationPerStayAmount';
  /** Amount value. */
  amount: Money;
  /** Description associated to the amount. */
  description: Scalars['String']['output'];
  /** Percentage of amount (when applicable), expressed as a fraction of 1 (e.g., 0.12 for 12%). */
  percent?: Maybe<Scalars['Float']['output']>;
  /** Amount type (BASE, DISCOUNT, TAX, GUESS_PAYMENT, PAYOUT, ...). */
  type: Scalars['String']['output'];
};

/** Current status of the reservation. */
export enum ReservationStatus {
  /** Reservation is booked. */
  Booked = 'BOOKED',
  /** Reservation is cancelled. */
  Cancelled = 'CANCELLED'
}

/** Status of the reservation. */
export enum ReservationStatusInput {
  /** The reservation is booked. */
  Booked = 'BOOKED',
  /** The reservation is cancelled. */
  Cancelled = 'CANCELLED'
}

/** Value add promotion(s) used to book the reservation. */
export type ReservationValueAddedPromotion = {
  __typename?: 'ReservationValueAddedPromotion';
  /** Description of the value add promotion. */
  description: Scalars['String']['output'];
  /** ID of the value added promotion. */
  id: Scalars['String']['output'];
};

/** Value added promotion(s) used to book the reservation. */
export type ReservationValueAddedPromotionInput = {
  /** Description of the promotion. */
  description: Scalars['String']['input'];
  /** ID of the promotion. */
  id: Scalars['String']['input'];
};

/** Response object for reservations query. */
export type ReservationsResponse = {
  __typename?: 'ReservationsResponse';
  /** Cursor for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** List of reservations. */
  elements: Array<Reservation>;
  /** Total count of reservations. */
  totalCount: Scalars['Int']['output'];
};

export type SetupTestDataInput = {
  capability: TestDataCapability;
  clientMutationIds?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['String']['input']>;
  scenario: TestDataScenario;
};

/** Details about the frequent traveler reward program. */
export type SupplierLoyaltyPlanInfo = {
  __typename?: 'SupplierLoyaltyPlanInfo';
  /** Traveler's membership number. */
  membershipNumber: Scalars['Int']['output'];
  /** Reward program code. */
  planCode: Scalars['String']['output'];
};

/** Details about the frequent traveler reward program. */
export type SupplierLoyaltyPlanInfoInput = {
  /** Traveler's membership number. */
  membershipNumber: Scalars['Int']['input'];
  /** Reward program code. */
  planCode: Scalars['String']['input'];
};

export enum TestDataCapability {
  ReservationCoreOta = 'RESERVATION_CORE_OTA'
}

export enum TestDataScenario {
  Step_01ResCreateAndCancelRecon = 'STEP_01_RES_CREATE_AND_CANCEL_RECON',
  Step_02SoftHardModAndCreateRes = 'STEP_02_SOFT_HARD_MOD_AND_CREATE_RES',
  Step_03SoftHardMod = 'STEP_03_SOFT_HARD_MOD'
}

/** Input object for updating a property. */
export type UpdatePropertyInput = {
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the property to update. */
  id: Scalars['ID']['input'];
  /** The new name for the property. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload to the updateProperty mutation. */
export type UpdatePropertyPayload = {
  __typename?: 'UpdatePropertyPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The updated property. */
  property: Property;
};

/** Input to update a reservation */
export type UpdateReservationInput = {
  /** New adult count of the reservation. */
  adultCount?: InputMaybe<Scalars['Int']['input']>;
  /** New check-in date of the reservation. */
  checkInDate?: InputMaybe<Scalars['Date']['input']>;
  /** New check-out date of the reservation. */
  checkOutDate?: InputMaybe<Scalars['Date']['input']>;
  /** Ages of children as per new child counts. If not specified, defaults to a list of random child ages. */
  childAges?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** New child count of the reservation. */
  childCount?: InputMaybe<Scalars['Int']['input']>;
  /** Client mutation ID. Optional value that is echoed back in the response. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the reservation to update. */
  id: Scalars['ID']['input'];
  /** Whether to send a notification upon the change of the reservation dates. */
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** New special request text of the reservation. */
  specialRequest?: InputMaybe<Scalars['String']['input']>;
  /** New status of the reservation. */
  status?: InputMaybe<ReservationStatusInput>;
};

/** Response payload for the updateReservation mutation. */
export type UpdateReservationPayload = {
  __typename?: 'UpdateReservationPayload';
  /** Client mutation ID. Optional value in the input that is echoed back in the response. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The reservation that was updated. */
  reservation: Reservation;
};
