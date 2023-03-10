import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Transmission = ({ car }) => {
  const [showData, setShowData] = useState(false);

  const handleToggle = () => {
    setShowData((prevState) => !prevState);
  };

  return (
    <div className="min-w-[300px] w-[90vw] mt-6 lg:w-[60vw] pt-2 border-t-4 ">
      <div className="flex justify-between w-full h-[10vh]">
        <h1 className="text-2xl font-bold">Transmission</h1>
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
                <h3 className="text-lg font-semibold ">Drive Type</h3>
              </div>
              <div className="h-full">
                {car.driveCode ? car.driveCode : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Number of Gears</h3>
              </div>
              <div className="h-full">{car.gearNum ? car.gearNum : "NA"}</div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Transmission Type</h3>
              </div>
              <div className="h-full">
                {car.gearTypeDescription ? car.gearTypeDescription : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Gear Location</h3>
              </div>
              <div className="h-full">
                {car.gearLocationDescription
                  ? car.gearLocationDescription
                  : "NA"}
              </div>
            </div>
            <div className="flex w-full h-[13vh] pl-6">
              <div className="w-[50%] md:w-[30%] h-full font">
                <h3 className="text-lg font-semibold ">Acceleration</h3>
              </div>
              <div className="h-full">
                {car.acceleration ? car.acceleration : "NA"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transmission;
