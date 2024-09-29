// Define enums for different endpoints
import { ClientEnvironment } from './ClientEnvironment';

enum SupplyClientEndpoint {
  PROD = 'https://api.expediagroup.com/supply/lodging/graphql',
  TEST = 'https://test-api.expediagroup.com/supply/lodging/graphql',
  SANDBOX_PROD = 'https://api.sandbox.expediagroup.com/supply/lodging/graphql',
  SANDBOX_TEST = 'https://test-api.sandbox.expediagroup.com/supply/lodging/graphql'
}

enum PaymentClientEndpoint {
  PROD = 'https://api.expediagroup.com/supply/payments/graphql',
  TEST = 'https://test-api.expediagroup.com/supply/payments/graphql'
}

enum SandboxClientEndpoint {
  SANDBOX_PROD = 'https://api.sandbox.expediagroup.com/supply/lodging-sandbox/graphql',
  SANDBOX_TEST = 'https://test-api.sandbox.expediagroup.com/supply/lodging-sandbox/graphql'
}

enum AuthEndpoint {
  PROD = 'https://api.expediagroup.com/identity/oauth2/v3/token/',
  TEST = 'https://test-api.expediagroup.com/identity/oauth2/v3/token/',

  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  SANDBOX_PROD = 'https://api.expediagroup.com/identity/oauth2/v3/token/',

  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  SANDBOX_TEST = 'https://test-api.expediagroup.com/identity/oauth2/v3/token/'
}

// Utility class for providing API endpoints based on environment
export class EndpointProvider {
  static getSupplyClientEndpoint(environment: ClientEnvironment): string {
    const endpoint = SupplyClientEndpoint[ClientEnvironment[environment]];

    if (endpoint) {
      return endpoint;
    }

    throw new Error(`
      Unsupported environment [${ClientEnvironment[environment]}] for SupplyClient.
      Supported environments are [${Object.keys(SupplyClientEndpoint)}]
    `);
  }

  static getPaymentClientEndpoint(environment: ClientEnvironment): string {
    const endpoint = PaymentClientEndpoint[ClientEnvironment[environment]];

    if (endpoint) {
      return endpoint;
    }

    throw new Error(`
      Unsupported environment [${ClientEnvironment[environment]}] for PaymentClient.
      Supported environments are [${Object.keys(PaymentClientEndpoint)}]
    `);
  }

  static getSandboxClientEndpoint(environment: ClientEnvironment): string {
    const endpoint = SandboxClientEndpoint[ClientEnvironment[environment]];

    if (endpoint) {
      return endpoint;
    }

    throw new Error(`
      Unsupported environment [${ClientEnvironment[environment]}] for SandboxClient
      Supported environments are [${Object.keys(SandboxClientEndpoint)}]
    `);
  }

  static getAuthEndpoint(environment: ClientEnvironment): string {
    const endpoint = AuthEndpoint[ClientEnvironment[environment]];

    if (endpoint) {
      return endpoint;
    }

    throw new Error(`
      Unsupported environment [${ClientEnvironment[environment]}] for Authentication
      Supported environments are [${Object.keys(AuthEndpoint)}]
    `);
  }
}
