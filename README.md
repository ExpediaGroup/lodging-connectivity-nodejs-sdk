# Expedia Group<sup>TM</sup> Lodging Connectivity Node.js SDK

Designed to simplify Lodging Connectivity API integration, handles the technical complexities, empowering partners to
focus on their core business needs.

With robust features and seamless integration, it enhances developer productivity, providing all necessary tools to efficiently query and mutate data from GraphQL APIs.

## Key Features
1. Pre-Built Operations for Lodging Connectivity GraphQL APIs
2. Strongly Typed Responses
3. Authentication & Automatic Token Renewal
4. Logging & Sensitive Data Masking
5. Error Handling

## Installation

**NPM**
```bash
npm install @expediagroup/lodging-connectivity-sdk
```

**Yarn**
```bash
yarn add @expediagroup/lodging-connectivity-sdk
```

## Quick Start
Once you have the SDK dependency installed, you can start using its capabilities. The SDK contains three different clients, each linked to a separate endpoint

1. Supply Client
2. Payment Client
3. Sandbox  Client

### Typical Usage Flow
Follow these three simple steps to start using any client in the SDK:

1. Build the client configuration object.

   ```ts
   const config: ClientConfiguration = {
       key: 'YOUR_API_KEY',
       secret: 'YOUR_API_SECRET'
   };
   ```

2. Initialize a client.
   ```ts
   const supplyClient = new SupplyClient(config); // Taking SupplyClient as an example
   ```
3. Execute operations
   ```ts
   supplyClient.query(/* GraphQL Query */);
   // OR
   supplyClient.mutate(/* GraphQL Mutation*/);
   ```

## Documentation
The list below lists detailed documentation files for some components of the SDK. Whether you're looking to configure the SDK, explore the pre-built GraphQL operations, or learn how to use specific clients, the following resources will guide you through all the necessary steps.

1. [Supply Client Documentation](docs/supply-client.md)
2. [Payment Client Documentation](docs/payment-client.md)
3. [Sandbox Client Documentation](docs/sandbox-client.md)
4. [Configuration](docs/configuration.md)
5. [Exception Handling](docs/exception-handling.md)

## Related Resources
- [EG Connectivity Hub](https://developers.expediagroup.com/supply/lodging)
- [EG Lodging Connectivity SDK GraphQL Operations Definitions](https://github.com/ExpediaGroup/lodging-connectivity-graphql-operations)
- [EG Lodging Connectivity Java SDK](https://github.com/ExpediaGroup/lodging-connectivity-java-sdk)
