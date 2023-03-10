import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Car = ({ car }) => {
  const router = useRouter();

  const toSingleCar = () => {
    router.push(`/cars-for-sale/cars/${car.id}`);
  };
  return (
    <div className="min-w-[300px] mx-2 mt-5 w-[90vw] h-[75vh] md:h-[75vh] md:w-[45vw] lg:w-[30vw] shadow container">
      {/* Image of the Car */}
      <Link href={`/cars-for-sale/cars/${car.id}`}>
        <div className="w-full h-[50%] relative">
          {car.image ? (
            <Image
              src={car.image}
              alt="/drive_logo.jpg"
              fill
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                zIndex: -3,
              }}
            />
          ) : (
            <Image
              src="/drive_logo.jpg"
              alt="/drive_logo.jpg"
              fill
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          )}
        </div>
      </Link>

      {/* Name and Price Section */}
      <div className="w-full h-[18%]  flex justify-between pt-4">
        <div className="text-2xl font-bold mr-2 pl-4">
          <Link href={`/cars-for-sale/cars/${car.id}`}>
            <h1>
              {car.year} {car.makeName} {car.modelName}
            </h1>
          </Link>
        </div>
        <div className="text-xl font-bold mr-2 flex">
          {car.price ? "$ " + car.price : "NA"}
        </div>
      </div>

      {/* Information Section */}
      <div className="w-full h-[18%] pb-2">
        {/* First Row */}
        <div className="w-full flex mt-3">
          <div className="w-[40%] pl-10">
            <ul className="list-disc">
              <li>{car.colour ? car.colour : "NA"}</li>
            </ul>
          </div>
          <div className="w-[60%] pl-6">
            <ul className="list-disc">
              <li>{car.transmission ? car.transmission : "NA"}</li>
            </ul>
          </div>
        </div>
        {/* Second Row */}
        <div className="w-full flex mt-2">
          <div className="w-[40%] pl-10">
            <ul className="list-disc">
              <li>{car.kms ? car.kms : "NA"} kms</li>
            </ul>
          </div>
          <div className="w-[60%] pl-6">
            <ul className="list-disc">
              <li>{car.seat_capacity ? car.seat_capacity : "NA"} Seater</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buttons Div */}
      <div className="w-full h-[15%] flex items-center justify-between">
        <button className="bg-blue-500 w-[40%] ml-5 text-sm md:text-lg sm:py-0 h-10 hover:bg-blue-700 text-white font-bold md:px-1 md:py-1 rounded">
          Enquire Now
        </button>
        <button
          className="bg-white w-[40%] mr-5 text-sm md:text-lg sm:py-0 h-10 hover:bg-blue-700 hover:text-white text-blue-500 font-bold md:px-1 md:py-1 rounded border-2 border-blue-500"
          onClick={toSingleCar}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Car;
