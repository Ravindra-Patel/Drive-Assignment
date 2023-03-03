import HeadMeta from "../components/HeadMeta";
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";

const CarsForSale = ({ cars }) => {
  console.log(cars);
  return (
    <>
      <HeadMeta title="Cars For Sale" />
      <div class="min-h-[77vh] flex item-center justify-center space-x-5">
        <div>Cars For Sale</div>
      </div>
    </>
  );
};

export default CarsForSale;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      cars: data.DealerListings.results,
    },
  };
}
