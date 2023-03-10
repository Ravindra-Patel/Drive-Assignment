import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dimension = ({ car }) => {
  const [showData, setShowData] = useState(false);

  const handleToggle = () => {
    setShowData((prevState) => !prevState);
  };

  return (
    <div className="min-w-[300px] w-[90vw] mt-6 lg:w-[60vw] pt-2 border-t-4 ">
      <div className="flex justify-between w-full h-[10vh]">
        <h1 className="text-2xl font-bold">Dimensions</h1>
        {showData ? (
          <div className="pt-2">
            <FaChevronUp size="30px" onClick={handleToggle} />
          </div>
        ) : (
          <div className="pt-2">
            <FaChevronDown size="30px" onClick={handleToggle} />
          </div>
        )}
      </div>
      <div>
        {showData && (
          <div className="w-full">
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Height</h3>
              </div>
              <div className="h-full">
                {car.vehicle_height ? car.vehicle_height : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Length</h3>
              </div>
              <div className="h-full">
                {car.vehicle_length ? car.vehicle_length : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Width</h3>
              </div>
              <div className="h-full">
                {car.vehicle_width ? car.vehicle_width : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Front Wheels</h3>
              </div>
              <div className="h-full">
                {car.frontTyreSize ? car.frontTyreSize : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Rare Wheels</h3>
              </div>
              <div className="h-full">
                {car.rearTyreSize ? car.rearTyreSize : "NA"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dimension;
