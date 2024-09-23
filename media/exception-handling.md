## GraphQL Errors Handling
Conventionally, GraphQL APIs always return `200` HTTP status and rely on `GraphQLErros` response object to hold the occurred errors. However, The SDK handles these `GraphQLErrors` by throwing a new `ExpediaGroupServiceException` if the response has any errors. So, users are expected to properly catch and handle these errors.

