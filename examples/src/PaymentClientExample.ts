import { PaymentClient, PaymentInstrumentDocument } from '@expediagroup/lodging-connectivity-sdk/payment';

export class PaymentClientExample {

  private static readonly paymentClient = new PaymentClient({
    key: '',
    secret: '',
    endpoint: 'https://test-api.sandbox.expediagroup.com/',
    authEndpoint: 'https://test-api.expediagroup.com/identity/oauth2/v3/token'
  });

  public static async run() {

    const paymentInstrumentResponse = await this.paymentClient.query({
      query: PaymentInstrumentDocument,
      variables: { token: 'some-token' }
    });

    console.log(paymentInstrumentResponse.data);
  }

}
