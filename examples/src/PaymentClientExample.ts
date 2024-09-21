import { PaymentClient, PaymentInstrumentDocument } from '@expediagroup/lodging-connectivity-sdk/payment';

export class PaymentClientExample {

  private static readonly paymentClient = new PaymentClient({
    key: 'KEY',
    secret: 'SECRET',
  });

  public static async run() {

    const paymentInstrumentResponse = await this.paymentClient.query({
      query: PaymentInstrumentDocument,
      variables: { token: 'some-token' }
    });

    console.log(paymentInstrumentResponse.data);
  }

}
