import {
  SandboxClient,
  SandboxCancelReservationDocument,
  SandboxChangeReservationStayDatesDocument,
  SandboxCreatePropertyDocument,
  SandboxCreateReservationDocument,
  SandboxDeletePropertyDocument,
  SandboxDeleteReservationDocument,
  SandboxPropertiesDocument,
  SandboxUpdatePropertyDocument,
  SandboxUpdateReservationDocument
} from '@expediagroup/lodging-connectivity-sdk';

export class SandboxClientExample {

  private static readonly sandboxClient = new SandboxClient({
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

    if (!createPropertyResponse.data || createPropertyResponse.errors) {
      throw new Error('Could not create property');
    }

    const propertyId = createPropertyResponse.data.createProperty.property.id;

    console.log(`Property with id "${propertyId}" was Created`);

    const updatePropertyResponse = await this.sandboxClient.mutate({
      mutation: SandboxUpdatePropertyDocument,
      variables: {
        input: {
          id: propertyId,
          name: this.UPDATED_PROPERTY_NAME
        }
      }
    });

    if (!updatePropertyResponse.data || updatePropertyResponse.errors) {
      throw new Error('Could not update property');
    }

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

    if (!createReservationResponse.data || createReservationResponse.errors) {
      throw new Error('Could not create reservation on property');
    }

    const reservationId = createReservationResponse.data.createReservation.reservation.id;

    console.log(`Reservation with id "${reservationId}" was Created`);

    const updateReservationResponse = await this.sandboxClient.mutate({
      mutation: SandboxUpdateReservationDocument,
      variables: {
        input: {
          id: reservationId,
          childAges: [3, 5, 7]
        }
      }
    });

    if (!updateReservationResponse.data || updateReservationResponse.errors) {
      throw new Error(`Could not update reservation ${reservationId}`);
    }

    console.log(`Reservation with id "${reservationId}" was Updated`);

    const changeStayDatesResponse = await this.sandboxClient.mutate({
      mutation: SandboxChangeReservationStayDatesDocument,
      variables: {
        input: {
          id: reservationId,
          checkInDate: '2024-02-01',
          checkOutDate: '2024-02-04'
        }
      }
    });

    if (!changeStayDatesResponse.data || changeStayDatesResponse.errors) {
      throw new Error(`Could not update reservation ${reservationId}`);
    }

    console.log(`Reservation with id "${reservationId}" stay dates were Updated`);

    const cancelReservationResponse = await this.sandboxClient.mutate({
      mutation: SandboxCancelReservationDocument,
      variables: {
        input: {
          id: reservationId
        }
      }
    });

    if (!cancelReservationResponse.data || cancelReservationResponse.errors) {
      throw new Error(`Could not cancel reservation ${reservationId}`);
    }

    console.log(`Reservation with id "${reservationId}" was Canceled`);

    const deleteReservationResponse = await this.sandboxClient.mutate({
      mutation: SandboxDeleteReservationDocument,
      variables: {
        input: {
          id: reservationId
        }
      }
    });

    if (!deleteReservationResponse.data || deleteReservationResponse.errors) {
      throw new Error(`Could not delete reservation ${reservationId}`);
    }

    console.log(`Reservation with id "${reservationId}" was deleted`);

    const deletePropertyResponse = await this.sandboxClient.mutate({
      mutation: SandboxDeletePropertyDocument,
      variables: {
        input: {
          id: propertyId
        }
      }
    });

    if (!deletePropertyResponse.data || deletePropertyResponse.errors) {
      throw new Error(`Could not property ${propertyId}`);
    }

    console.log(`Property with id "${propertyId}" was Deleted`);
  }

  private static async deletePropertyIfExists() {
    const { data, error } = await this.sandboxClient.query({
      query: SandboxPropertiesDocument,
      variables: {
        skipReservations: true
      }
    });

    if (error || !data) {
      throw new Error('Failed to get existing properties');
    }

    data.properties.elements.forEach(property => {
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
