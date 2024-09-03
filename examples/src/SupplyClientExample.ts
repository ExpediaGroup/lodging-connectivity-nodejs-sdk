import { PropertyDocument, SupplyClient } from '@expediagroup/lodging-connectivity-sdk/supply';

export class SupplyClientExample {

  private static readonly supplyClient = new SupplyClient({
    key: '',
    secret: '',
    endpoint: 'https://test-api.sandbox.expediagroup.com/',
    authEndpoint: 'https://test-api.expediagroup.com/identity/oauth2/v3/token'
  });

  public static async run() {

    const propertyResponse = await this.supplyClient.query({
      query: PropertyDocument,
      variables: { propertyId: '100000015', pageSize: 2 }
    });

    console.log(propertyResponse.data);
  }
}
