import {
  SandboxCancelReservationDocument,
  SandboxChangeReservationStayDatesDocument,
  SandboxCreatePropertyDocument,
  SandboxCreateReservationDocument,
  SandboxDataManagementClient,
  SandboxDeletePropertyDocument,
  SandboxDeleteReservationDocument,
  SandboxPropertiesDocument,
  SandboxUpdatePropertyDocument,
  SandboxUpdateReservationDocument
} from '@expediagroup/lodging-connectivity-sdk';

export class SandboxDataManagementClientExample {
  private static readonly sandboxClient = new SandboxDataManagementClient({
    key: 'KEY',
    secret: 'SECRET'
  });

  private static readonly PROPERTY_NAME = 'Lodging SDK Test Property';
  private static readonly UPDATED_PROPERTY_NAME = 'New Lodging SDK Test Property';

  public static async run() {
    await this.deletePropertyIfExists();

    const createPropertyResponse = await this.sandboxClient.mutate({
      mutation: SandboxCreatePropertyDocument,
      variables: { input: { name: this.PROPERTY_NAME } }
    });

    const propertyId = createPropertyResponse.createProperty.property.id;

    console.log(`Property with id "${propertyId}" was Created`);

    await this.sandboxClient.mutate({
      mutation: SandboxUpdatePropertyDocument,
      variables: {
        input: {
          id: propertyId,
          name: this.UPDATED_PROPERTY_NAME
        }
      }
    });

    console.log(`Property with id "${propertyId}" was Updated`);

    const createReservationResponse = await this.sandboxClient.mutate({
      mutation: SandboxCreateReservationDocument,
      variables: {
        input: {
          propertyId,
          childCount: 4,
          adultCount: 2
        }
      }
    });

    const reservationId = createReservationResponse.createReservation.reservation.id;

    console.log(`Reservation with id "${reservationId}" was Created`);

    await this.sandboxClient.mutate({
      mutation: SandboxUpdateReservationDocument,
      variables: {
        input: {
          id: reservationId,
          childAges: [3, 5, 7]
        }
      }
    });

    console.log(`Reservation with id "${reservationId}" was Updated`);

    await this.sandboxClient.mutate({
      mutation: SandboxChangeReservationStayDatesDocument,
      variables: {
        input: {
          id: reservationId,
          checkInDate: '2024-02-01',
          checkOutDate: '2024-02-04'
        }
      }
    });

    console.log(`Reservation with id "${reservationId}" stay dates were Updated`);

    await this.sandboxClient.mutate({
      mutation: SandboxCancelReservationDocument,
      variables: {
        input: {
          id: reservationId
        }
      }
    });

    console.log(`Reservation with id "${reservationId}" was Canceled`);

    await this.sandboxClient.mutate({
      mutation: SandboxDeleteReservationDocument,
      variables: {
        input: {
          id: reservationId
        }
      }
    });

    console.log(`Reservation with id "${reservationId}" was deleted`);

    await this.sandboxClient.mutate({
      mutation: SandboxDeletePropertyDocument,
      variables: {
        input: {
          id: propertyId
        }
      }
    });

    console.log(`Property with id "${propertyId}" was Deleted`);
  }

  private static async deletePropertyIfExists() {
    const { properties } = await this.sandboxClient.query({
      query: SandboxPropertiesDocument,
      variables: {
        skipReservations: true
      }
    });

    properties.elements.forEach(property => {
      if (property.name === this.PROPERTY_NAME || property.name === this.UPDATED_PROPERTY_NAME) {
        console.log('Deleting existing property: ID: ' + property.id + ', Name: ' + property.name);
        this.sandboxClient.mutate({
          mutation: SandboxDeletePropertyDocument,
          variables: { input: { id: property.id } }
        });
      }
    });
  }
}
