import { gql } from "@apollo/client";

const GET_CARS = gql`
  {
    DealerListings {
      results {
        id
        colour
        vehicleKey: vehicle_key
        listType: list_type
        year
        price: price_excluding_government_charges
        kms: odometer
        variant
        fuelType: fuel_type
        transmission
        engineSize: engine_size
        seat_capacity
        image: main_image
        state: location_state
        makeName: make
        modelName: model
        region: Region {
          regionName: region_name
        }
      }
    }
  }
`;

export { GET_CARS };
