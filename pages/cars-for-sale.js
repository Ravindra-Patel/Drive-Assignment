import HeadMeta from "../components/HeadMeta";
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";
import Car from "../components/Car";

const CarsForSale = ({ cars }) => {
  console.log(cars);
  return (
    <>
      <HeadMeta title="Cars For Sale" />
      <div class="min-h-[77vh] flex item-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {cars.map((car) => (
            <div key={car.id} class="m-auto md:m-2 w-full">
              <Car car={car} />
            </div>
          ))}
        </div>
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
