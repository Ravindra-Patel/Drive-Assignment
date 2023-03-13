import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Car from "../../components/Car";
import HeadMeta from "../../components/HeadMeta";

const CarsForSale = ({ cars }) => {
  const loadMore = () => {};

  return (
    <>
      <HeadMeta title="Cars For Sale" />
      <div className="min-h-[77vh] items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => (
            <div key={car.id} className="m-auto md:m-2 w-full">
              <Car car={car} />
            </div>
          ))}
        </div>
        {/* <div class="flex justify-between">
          <button
            class="bg-blue-500 mx-auto my-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
            onClick={loadMore}
          >
            Load More
          </button>
        </div> */}
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
