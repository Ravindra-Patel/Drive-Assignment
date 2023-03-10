import React from "react";
import {
  AiFillEnvironment,
  AiOutlineApartment,
  AiFillDashboard,
  AiTwotoneCar,
} from "react-icons/ai";

import {
  BsFillShieldFill,
  BsFillBookmarkFill,
  BsFillBinocularsFill,
  BsFillDropletFill,
} from "react-icons/bs";

const BasicSpecs = ({ car }) => {
  console.log(car);
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col w-[90vw] h-[20vh] mt-6 lg:w-[60vw] lg:h-[18vh] pl-4 bg-veryLightGray">
        {/* Row 1 */}
        <div className="flex  md:w-[100%] justify-between pt-4">
          {/* Item 1 */}
          <div className="flex w-[25%]">
            <AiFillEnvironment style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.buildCountryOriginDescription
                ? car.buildCountryOriginDescription
                : "NA"}
            </h3>
          </div>
          {/* Item 2 */}
          <div className="flex w-[25%]">
            <AiOutlineApartment style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.cylinders ? car.cylinders : "NA"}</h3>
          </div>
          {/* Item 3 */}
          <div className="flex w-[25%]">
            <AiFillDashboard style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.frontRimDesc ? car.frontRimDesc : "NA"}
            </h3>
          </div>
          {/* Item 4 */}
          <div className="flex w-[25%]">
            <AiTwotoneCar style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.makeCode ? car.makeCode : "NA"}</h3>
          </div>
        </div>
        {/* Row 2*/}
        <div className="flex  md:w-[100%] justify-between mt-10">
          {/* Item 5 */}
          <div className="flex w-[25%]">
            <BsFillShieldFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.manufacturerBodyStyle ? car.manufacturerBodyStyle : "NA"}
            </h3>
          </div>
          {/* Item 6 */}
          <div className="flex w-[25%]">
            <BsFillBookmarkFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.seriesModelYear ? car.seriesModelYear : "NA"}
            </h3>
          </div>
          {/* Item 7 */}
          <div className="flex w-[25%]">
            <BsFillBinocularsFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.seriesPublic ? car.seriesPublic : "NA"}
            </h3>
          </div>
          {/* Item 8 */}
          <div className="flex w-[25%]">
            <BsFillDropletFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.modelCode ? car.modelCode : "NA"}</h3>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="min-w-[320px] flex justify-between md:hidden w-[90vw] h-[20vh] mt-6 lg:w-[60vw] lg:h-[18vh] pl-4 bg-veryLightGray">
        {/* Row 1 */}
        <div>
          {/* Item 1 */}
          <div className="flex w-[100%]">
            <AiFillEnvironment style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.buildCountryOriginDescription
                ? car.buildCountryOriginDescription
                : "NA"}
            </h3>
          </div>
          {/* Item 2 */}
          <div className="flex w-[100%] pt-2">
            <AiOutlineApartment style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.cylinders ? car.cylinders : "NA"}</h3>
          </div>
          {/* Item 3 */}
          <div className="flex w-[100%] pt-2">
            <AiFillDashboard style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.frontRimDesc ? car.frontRimDesc : "NA"}
            </h3>
          </div>
          {/* Item 4 */}
          <div className="flex w-[100%] pt-2">
            <AiTwotoneCar style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.makeCode ? car.makeCode : "NA"}</h3>
          </div>
        </div>
        {/* Row 2*/}
        <div>
          {/* Item 5 */}
          <div className="flex w-[100%]">
            <BsFillShieldFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.manufacturerBodyStyle ? car.manufacturerBodyStyle : "NA"}
            </h3>
          </div>
          {/* Item 6 */}
          <div className="flex w-[100%] pt-2">
            <BsFillBookmarkFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.seriesModelYear ? car.seriesModelYear : "NA"}
            </h3>
          </div>
          {/* Item 7 */}
          <div className="flex w-[100%] pt-2">
            <BsFillBinocularsFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">
              {car.seriesPublic ? car.seriesPublic : "NA"}
            </h3>
          </div>
          {/* Item 8 */}
          <div className="flex w-[100%] pt-2">
            <BsFillDropletFill style={{ marginTop: "4px" }} />
            <h3 className="pl-2">{car.modelCode ? car.modelCode : "NA"}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSpecs;
