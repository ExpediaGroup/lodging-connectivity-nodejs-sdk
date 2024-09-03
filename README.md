# Expedia Group<sup>TM</sup> Lodging Connectivity Node.js SDK

Designed to simplify Lodging Connectivity API integration, handles the technical complexities, empowering partners to focus on their core business needs.

## Overview

The SDK exports multiple clients, where each client communicate with one API endpoint. So far there are three different clients available:

1. `SupplyClient`: Connected to [lodging supply **GraphQL** API](https://test-api.expediagroup.com/supply/lodging/graphql)


2. `PaymentClient`: Connected to [lodging supply payments **GraphQL** API](https://test-api.expediagroup.com/supply/payments/graphql)


3. `SandboxClient`: Connected to [lodging supply sandbox **GraphQL** API](https://test-api.expediagroup.com/supply/lodging-sandbox/graphql)

In addition, the SDK offers a set of useful features to facilitate the communication with the APIs. Below are some highlighted features and capabilities:
1. Authentication and automatic token renewal.
2. Logging and sensitive data masking.
3. Schema and operation validation *(for GraphQL APIs)*.
4. Apollo Client integration *(for GraphQL APIs)*.

## Installation
**NOTE: You can use the `/examples` module included in this repo as a quick start. Simply run `pnpm run examples`.**

This SDK is currently available as a `SNAPSHOT` version from our internal artifactory:

```npm
npm i @expediagroup/lodging-connectivity-sdk
```
## Basic Usage Example

*Please refer to these usage [exmaples](https://github.expedia.biz/eg-control-plane/lodging-connectivity-nodejs-sdk/tree/mdwairi/repo-polish/examples/src/usage-examples) for more complete usage overview*

In general, you should follow these three steps to get the client up and running:
<details>
   <summary>Create Client Configuration Instance</summary>

To start using the SDK, you need to create a configuration object of type `ClientConfigurations`, then pass it as a parameter to your client. The same object can be used to instantiate any of the available clients in this SDK.

```ts
 const config: ClientConfigurations = {
  key: '',
  secret: '',
  endpoint: 'https://test-api.sandbox.expediagroup.com/', // Optional, prod endpoint is the default
  authEndpoint: 'https://test-api.expediagroup.com/identity/oauth2/v3/token' // Optional, prod endpoint is the default
 };
```

</details>

<details>
   <summary>Instantiate the Client</summary>
   You can either initialize all clients using the same configuration object, or create other configurations for any client if needed.

   ```ts
   const supplyClient = new SupplyClient(config);
   ```

   ```ts
   const sandboxClient = new SandboxClient(config);
   ```

   ```ts
   const paymentClient = new PaymentClient(config);
   ```

</details>

<details>
   <summary>Make Calls</summary>

   ```ts
    supplyClient.query({ query: /*APOLLO QUERY DOCUMENT*/, ...options});
    supplyClient.mutate({ mutation: /*APOLLO MUTATION DOCUMENT*/, ...options});
    supplyClient.subscribe({ query: /*APOLLO Subscription DOCUMENT*/, ...options});
   ```
   ```ts
    paymentClient.query({ query: /*APOLLO QUERY DOCUMENT*/, ...options});
    paymentClient.mutate({ mutation: /*APOLLO MUTATION DOCUMENT*/, ...options});
    paymentClient.subscribe({ query: /*APOLLO Subscription DOCUMENT*/, ...options});
   ```

   ```ts
    sandboxClient.query({ query: /*APOLLO QUERY DOCUMENT*/, ...options});
    sandboxClient.mutate({ mutation: /*APOLLO MUTATION DOCUMENT*/, ...options});
    sandboxClient.subscribe({ query: /*APOLLO Subscription DOCUMENT*/, ...options});
   ```

</details>

## Capabilities & Available Clients

### Supply - GraphQL Client

*This client calls https://api.expediagroup.com/supply/lodging/graphql endpoint by default.*

```ts
const client = new SupplyClient(config);

const propertyResponse = await client.query({ query: PropertyDocument, variables: { id: '100000015'} })

console.log(propertyResponse.data);
```

**Available Operations:**

| Name                                               | Operation Type                                    | Input Variables                                                                                                                                                     | Type     |
|----------------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Property                                           | `PropertyDocument`                                | `propertyId: String!`<br/>`idSource: IdSource`<br/>`checkOutDate: CheckOutDateFilter`<br/>`filter: ReservationFilterInput`<br/>`pageSize: Int!`<br/>`after: String` | Query    |
| Notification Profile                               | `NotificationProfileDocument`                     | -                                                                                                                                                                   | Query    |
| Notification Event Types                           | `NotificationEventTypesDocument`                  | -                                                                                                                                                                   | Query    |
| Subscribe Notification Event Type                  | `SubscribeNotificationEventTypeDocument`          | `input: SubscribeNotificationEventTypeInput!`                                                                                                                       | Mutation |
| Unsubscribe Notification Event Type                | `UnsubscribeNotificationEventTypeDocument`        | `input: UnsubscribeNotificationEventTypeInput!`                                                                                                                     | Mutation |
| Update Notification Event Type Subscription        | `UpdateNotificationEventTypeSubscriptionDocument` | `input: UpdateNotificationEventTypeSubscriptionInput!`                                                                                                              | Mutation |
| Send Test Notification                             | `SendTestNotificationDocument`                    | `input: SendTestNotificationInput!`                                                                                                                                 | Mutation |
| Create Notification Callback Configuration         | `CreateNotificationCallbackConfigDocument`        | `input: CreateNotificationCallbackConfigInput!`                                                                                                                     | Mutation |
| Update Notification Callback Configuration         | `UpdateNotificationCallbackConfigDocument`        | `input: UpdateNotificationCallbackConfigInput!`                                                                                                                     | Mutation |
| Delete Notification Callback Configuration         | `DeleteNotificationCallbackConfigDocument`        | `input: DeleteNotificationCallbackConfig!`                                                                                                                          | Mutation |
| Refresh Notification Callback Configuration Secret | `RefreshNotificationCallbackConfigSecretDocument` | `input: RefreshNotificationCallbackConfigSecretInput!`                                                                                                              | Mutation |
| Refund Reservation                                 | `RefundReservationDocument`                       | `input: RefundReservationInput!`                                                                                                                                    | Mutation |
| Cancel Reservation                                 | `CancelReservationDocument`                       | `input: CancelReservationInput!`                                                                                                                                    | Mutation |
| Confirm Reservation Notification                   | `ConfirmReservationNotificationDocument`          | `input: ConfirmReservationNotificationInput!`                                                                                                                       | Mutation |
| Change Reservation Reconciliation                  | `ChangeReservationReconciliationDocument`         | `input: ChangeReservationReconciliationInput!`                                                                                                                      | Mutation |
| Cancel Reservation Reconciliation                  | `CancelReservationReconciliationDocument`         | `input: CancelReservationReconciliationInput!`                                                                                                                      | Mutation |


### Payments - GraphQL Client

*This client calls https://api.expediagroup.com/supply/payments/graphql endpoint by default.*

```ts
const client = new SupplyClient(config);

const payementInstrumentResponse = await client.query({ query: PaymentInstrumentDocument, variables: { token: 'token'} })

console.log(payementInstrumentResponse.data);
```

**Available Operations:**

| Name               | Operation Type              | Input Variables  | Type  |
|--------------------|-----------------------------|------------------|-------|
| Payment Instrument | `PaymentInstrumentDocument` | `token: String!` | Query |


### Sandbox - GraphQL Client
A special client connected to the Lodging Supply sandbox environment, allowing users to create and consume test data. This makes integration and testing easier without the risk of corrupting live data.

This client calls https://api.expediagroup.com/supply/lodging-sandbox/graphql endpoint by default.

```ts
const client = new SandboxClient(config);

const createPropertyResponse = await client.mutate({ mutation: SandboxCreatePropertyDocument, variables: { name: 'My Test Property' } });

console.log(createPropertyResponse.data);
```

Check out the example code [here](https://github.expedia.biz/eg-control-plane/lodging-connectivity-nodejs-sdk/blob/main/examples/src/usage-examples/sandbox-examples.ts), when you run it, it will:
1. Create a Property
2. Update the Property
3. Create a Reservation
4. Update the Reservation
5. Update the Reservation's Stay Dates
6. Cancel the Reservation
7. Delete the Reservation
8. Delete the Property

**Available Operations:**

| Name                          | Operation Type                              | Input Variables                                                                                          | Type     |
|-------------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------|----------|
| Properties                    | `SandboxPropertiesDocument`                 | `cursor: String`<br/>`limit: Int`<br/>`skipReservations: Boolean!`                                       | Query    |
| Property                      | `SandboxPropertyDocument`                   | `id: ID!`<br/>`reservationsCursor: String`<br/>`reservationsLimit: Int`<br/>`skipReservations: Boolean!` | Query    |
| Reservation                   | `SandboxReservationDocument`                | `id: ID!`                                                                                                | Query    |
| Create Property               | `SandboxCreatePropertyDocument`             | `input: CreatePropertyInput!`                                                                            | Mutation |
| Update Property               | `SandboxUpdatePropertyDocument`             | `input: UpdatePropertyInput!`                                                                            | Mutation |
| Delete Property Reservations  | `SandboxDeletePropertyReservationsDocument` | `input: DeletePropertyReservationsInput!`                                                                | Mutation |
| Delete Property               | `SandboxDeletePropertyDocument`             | `input: DeletePropertyInput!`                                                                            | Mutation |
| Create Reservation            | `SandboxCreateReservationDocument`          | `input: CreateReservationInput!`                                                                         | Mutation |
| Update Reservation            | `SandboxUpdateReservationDocument`          | `input: UpdateReservationInput!`                                                                         | Mutation |
| Change Reservation Stay Dates | `SandboxChangeReservationStayDatesDocument` | `input: ChangeReservationStayDatesInput!`                                                                | Mutation |
| Cancel Reservation            | `SandboxCancelReservationDocument`          | `input: CancelReservationInput!`                                                                         | Mutation |
| Delete Reservation            | `SandboxDeleteReservationDocument`          | `input: DeleteReservationInput!`                                                                         | Mutation |
