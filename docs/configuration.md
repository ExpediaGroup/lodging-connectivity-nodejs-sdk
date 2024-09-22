# SDK Configuration

The `ClientConfiguration` object is used to configure the different clients provided by the SDK to interact with various endpoints and services. This section provides a detailed breakdown of how to configure these SDK clients and customize various settings.

## Basic Configuration

The essential configuration parameters are the `key` and `secret`. These are required for authenticating requests to the API.

### Example:
```ts
const config: ClientConfiguration = {
   key: 'YOUR_API_KEY',
   secret: 'YOUR_API_SECRET'
};
```

## Optional Configuration Parameters

In addition to the basic configuration, the SDK offers several optional parameters to customize various aspects of the connection and request handling.

### 1. **Client Environment (Optional)**
```ts
{
  environment: ClientEnvironment.PROD
}
```
- **Description**: This parameter allows you to run the client in different environments (PROD, TEST, SANDBOX_PROD, SANDBOX_TEST)
- **Default**: If not provided, the SDK uses the default environment `PROD` which maps to https://api.expediagroup.com endpoint.

### 2. **Request Timeout (Optional)**

```ts
{
  requestTimeout: 1000 // in milliseconds
}
```
- **Description**: Sets the maximum time (in milliseconds) the SDK should wait for a response after a request is sent.
- **Default**: Defaults to an internal value but can be adjusted for long-running operations.

## Full Example Configuration

Here’s an example that uses all the available configuration options:

```ts
const config: ClientConfiguration = {
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
  environment: ClientEnvironment.PROD,
  requestTimeout: 1000
};
```

## Summary of Configuration Options

| Parameter                 | Required | Description                                                               |
|---------------------------|----------|---------------------------------------------------------------------------|
| `key`                     | Yes      | Your API key for authentication.                                          |
| `secret`                  | Yes      | Your API secret for authentication.                                       |
| `environment`             | No       | Specifies the client environment (PROD, TEST, SANDBOX_PROD, SANDBOX_TEST) |
| `requestTimeout`          | No       | Time to wait for a response after sending a request.                      |
