# Payment Client
`PaymentClient` deals with payment instruments and PCI data.

### API Endpoint
This client is connected with https://api.expediagroup.com/supply/payments/graphql endpoint by default.

You can refer to the [configuration]() document to explore the full configuration options.

### Initialize the Client
```ts
const config: ClientConfiguration = {
   key: 'YOUR_API_KEY',
   secret: 'YOUR_API_SECRET'
};

const paymentClient = new PaymentClient(config);
```

### Execute the operation
```ts
const paymentInstrumentResponse = await paymentClient.query({
    query: PaymentInstrumentDocument,
    variables: { token: 'some-token' }
});
```

## Available Operations
At the moment, there is only one query called `PaymentInstrument` you can execute using the `PaymentClient`.

<hr />
<details>
   <summary>PaymentInstrument</summary>

<br />

**Summary:** Retrieve Payment instrument from external payment instrument token

**Operation Document Name:** `PaymentInstrumentDocument`

**Operation Inputs:**

| Name    | Type      | Description    | Required |
|---------|-----------|----------------|----------|
| `token` | `String!` | External token | Yes      |

<br />

**Resources**
- ⚠️ Documentation is unavailable at the moment
- [Query Definition](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations/blob/main/payment/operations/mutations/PaymentInstrument.query.graphql)
- [Reference]()

</details>

<hr />
