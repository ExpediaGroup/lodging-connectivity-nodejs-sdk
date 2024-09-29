# Supply Client
`SupplyClient` gives you access to the reservations capabilities in lodging connectivity APIs.

> [!NOTE]
> Supporting more capabilities like Promotions, Messaging, Reviews, etc... is work-in-progress at the moment and will be added soon to this client.


### API Endpoint
This client is connected with https://api.expediagroup.com/supply/lodging/graphql endpoint by default.

You can refer to the [configuration](configuration.md) document to explore the full configuration options.

### Initialize the Client
```ts
const config: ClientConfiguration = {
   key: 'YOUR_API_KEY',
   secret: 'YOUR_API_SECRET'
};

const supplyClient = new SupplyClient(config);
```

### Set the Environment (Optional)
`SupplyClient` can be configured to work in different environments, below is a list of the supported environments by this client:

| Environment                      | Corresponding API Endpoint                                       |
|----------------------------------|------------------------------------------------------------------|
| `ClientEnvironment.PROD`         | https://api.expediagroup.com/supply/lodging/graphql              |
| `ClientEnvironment.TEST`         | https://test-api.expediagroup.com/supply/lodging/graphql         |
| `ClientEnvironment.SANDBOX_PROD` | https://api.sandbox.expediagroup.com/supply/lodging/graphql      |
| `ClientEnvironment.SANDBOX_TEST` | https://test-api.sandbox.expediagroup.com/supply/lodging/graphql |

**Configuration with Environment Example**
```ts
const config: ClientConfiguration = {
   key: 'YOUR_API_KEY',
   secret: 'YOUR_API_SECRET',
   environment: ClientEnvironment.SANDBOX_PROD
};
```

### Execute the operation
```ts
const propertyReservationsResponse = await supplyClient.query({
    query: PropertyReservationsDocument,
    variables: {
      propertyId: 'your_property_id',
      pageSize: 10
    }
});
```

## Available Operations
The SDK offers a set of queries & mutations you can execute using the `SupplyClient`. Below is an overview list of the available operations.

<br />

### SupplyClient - Queries

<hr />

<details>
   <summary>PropertyReservations</summary>

<br />

**Operation Name:** `PropertyReservationsDocument`

**Operation Inputs:**

| Name                            | Type                     | Required              |
|---------------------------------|--------------------------|-----------------------|
| `propertyId`                    | `String!`                | Yes                   |
| `idSource`                      | `IdSource`               | No (default: EXPEDIA) |
| `pageSize`                      | `Int!`                   | Yes                   |
| `cursor`                        | `String`                 | No                    |
| `filter`                        | `ReservationFilterInput` | No                    |
| `checkOutDate`                  | `CheckOutDateFilter`     | No                    |
| `includePaymentInstrumentToken` | `Boolean`                | No (default: false)   |
| `includeSupplierAmount`         | `Boolean`                | No (default: false)   |

<br />

**Resources**
- [Documentation](https://developers.expediagroup.com/supply/lodging/docs/booking_apis/reservations/reference/reservations_query/)
- [Query Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/queries/PropertyReservations.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>PropertyReservationsSummary</summary>

<br />

**Operation Name:** `PropertyReservationsSummaryDocument`

**Operation Inputs:**

| Name           | Type                     | Required              |
|----------------|--------------------------|-----------------------|
| `propertyId`   | `String!`                | Yes                   |
| `idSource`     | `IdSource`               | No (default: EXPEDIA) |
| `pageSize`     | `Int!`                   | Yes                   |
| `cursor`       | `String`                 | No                    |
| `filter`       | `ReservationFilterInput` | No                    |
| `checkOutDate` | `CheckOutDateFilter`     | No                    |

<br />

**Resources**
- [Documentation](https://developers.expediagroup.com/supply/lodging/docs/booking_apis/reservations/reference/reservations_query/)
- [Query Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/queries/PropertyReservationsSummary.graphql)
- [Reference]()

</details>

<hr />

<br /><br />

### SupplyClient - Mutations

<hr />


<details>
   <summary>CancelReservation</summary>

<br />

**Operation Name:** `CancelReservationDocument`

**Operation Inputs:**

| Name    | Type                      | Required |
|---------|---------------------------|----------|
| `input` | `CancelReservationInput!` | Yes      |

<br />

**Resources**
- [Documentation](https://developers.expediagroup.com/supply/lodging/docs/booking_apis/reservations/reference/cancelReservation/)
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/CancelReservation.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>CancelReservationReconciliation</summary>

<br />

**Operation Name:** `CancelReservationReconciliationDocument`

**Operation Inputs:**

| Name    | Type                                    | Required |
|---------|-----------------------------------------|----------|
| `input` | `CancelReservationReconciliationInput!` | Yes      |

<br />

**Resources**
- [Documentation](https://developers.expediagroup.com/supply/lodging/docs/booking_apis/reservations/reference/cancelReservationReconciliation/)
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/CancelReservationReconciliation.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>CancelVrboReservation</summary>

<br />

**Operation Name:** `CancelVrboReservationDocument`

**Operation Inputs:**

| Name    | Type                          | Required |
|---------|-------------------------------|----------|
| `input` | `CancelVrboReservationInput!` | Yes      |

<br />

**Resources**
- ⚠️ Documentation is unavailable at the moment
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/CancelVrboReservation.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>ChangeReservationReconciliation</summary>

<br />

**Operation Name:** `ChangeReservationReconciliationDocument`

**Operation Inputs:**

| Name    | Type                                    | Required |
|---------|-----------------------------------------|----------|
| `input` | `ChangeReservationReconciliationInput!` | Yes      |

<br />

**Resources**
- [Documentation](https://developers.expediagroup.com/supply/lodging/docs/booking_apis/reservations/reference/changeReservationReconciliation/)
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/ChangeReservationReconciliation.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>ConfirmReservationNotification</summary>

<br />

**Operation Name:** `ConfirmReservationNotificationDocument`

**Operation Inputs:**

| Name    | Type                                   | Required |
|---------|----------------------------------------|----------|
| `input` | `ConfirmReservationNotificationInput!` | Yes      |

<br />

**Resources**
- ⚠️ Documentation is unavailable at the moment
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/ConfirmReservationNotification.graphql)
- [Reference]()

</details>

<hr />

<details>
   <summary>RefundReservation</summary>

<br />

**Operation Name:** `RefundReservationDocument`

**Operation Inputs:**

| Name    | Type                      | Required |
|---------|---------------------------|----------|
| `input` | `RefundReservationInput!` | Yes      |

<br />

**Resources**
- ⚠️ Documentation is unavailable at the moment
- [Mutation Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/supply/operations/mutations/RefundReservation.graphql)
- [Reference]()

</details>

<hr />
