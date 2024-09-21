import { PropertyDocument, SupplyClient } from '@expediagroup/lodging-connectivity-sdk/supply';

export class SupplyClientExample {

  private static readonly supplyClient = new SupplyClient({
    key: 'KEY',
    secret: 'SECRET',
  });

  public static async run() {

    const propertyResponse = await this.supplyClient.query({
      query: PropertyDocument,
      variables: { propertyId: '100000015' }
    });

    console.log(propertyResponse.data);
  }
}
