import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Car from "../../components/Car";
import HeadMeta from "../../components/HeadMeta";
import { GET_CARS } from "../../queries/getAllCars";
import { useState } from "react";

const CarsForSale = ({ cars }) => {
  let totalCars = cars?.length;

  const [showCars, setShowCars] = useState(12);

  const loadMore = () => {
    setShowCars((prevState) => prevState + 12);
  };

  return (
    <>
      <HeadMeta title="Cars For Sale" />
      <div className="min-h-[82vh] items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.slice(0,showCars).map((car) => (
            <div key={car.id}>
              <Car car={car} />
            </div>
          ))}
        </div>
        {totalCars > showCars && (
          <div class="flex justify-between">
            <button
              class="bg-blue-500 mx-auto my-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CarsForSale;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CARS,
  });

  return {
    props: {
      cars: data.DealerListings.results,
    },
  };
}
