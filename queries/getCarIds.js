import { gql } from "@apollo/client";

const GET_CAR_IDS = gql`
  {
    DealerListings {
      results {
        id
      }
    }
  }
`;

export { GET_CAR_IDS };
