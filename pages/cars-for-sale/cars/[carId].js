import React from "react";
import Image from "next/image";
import client from "../../../apollo/apollo-client";
import { gql } from "@apollo/client";
import CarCarousel from "../../../components/CarCarousel";
import BasicSpecs from "../../../components/BasicSpecs";
import PerformanceEngine from "../../../components/PerformanceEngine";
import Transmission from "../../../components/Transmission";
import Dimension from "../../../components/Dimension";
import { GET_CAR_IDS } from "../../../queries/getCarIds";
import { GET_SINGLE_CAR } from "../../../queries/getSingleCar";

const SingleCarPage = ({ car }) => {
  return (
    <div className="w-full min-h-[82vh] grid justify-center">
      {!car && (
        <div className="w-full flex items-center justify-center">
          <h1 className="text-3xl font-bold">No Data Available!</h1>
        </div>
      )}
      {car && (
        <div>
          <CarCarousel carImages={car?.DealerListingImages}></CarCarousel>
          <BasicSpecs car={car?.RedbookVehicle} />
          <PerformanceEngine car={car?.RedbookVehicle} />
          <Transmission car={car?.RedbookVehicle} />
          <Dimension car={car?.RedbookVehicle} />
        </div>
      )}
    </div>
  );
};

export default SingleCarPage;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_CAR_IDS,
  });

  // Restrict the number of pages in getStaticPaths to a limited number, to avoid build fail.
  // Because if the npm run build fails then we will not be able to deploy the project

  const paths = data.DealerListings.results.slice(0, 20).map((car) => ({
    params: { carId: car.id.toString() }, //imp to convert the car id to string
  }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  // const { data } = await client.query({
  //   query: GET_SINGLE_CAR,
  //   variables: { id: context.params.carId },
  // });

  const { data } = await client.query({
    query: gql`
        {
          DealerListing(id: ${context.params.carId}) {
            id
            DealerListingImages {
              image_location
            }
            RedbookVehicle {
              RedbookMake {
                make: make_description
              }
              RedbookFamily {
                model: family_description
              }
              makeCode: vehicle_make_code
              makeName: vehicle_make_code
              familyCode: vehicle_family_code
              modelCode: vehicle_model_code
              modelName: vehicle_model_code
              yearGroup: vehicle_year_group
              seriesModelYear: vehicle_series_model_year
              badgeDescription: vehicle_badge_description
              badgeSecondaryDescription: vehicle_badge_secondary_description
              badgeCode: vehicle_badge_code
              manufacturerBodyStyle: vehicle_manufacturer_body_style
              bodyStyleDescription: vehicle_body_style_description
              manufacturerBodyConfig: vehicle_manufacturer_body_config
              bodyConfigDescription: vehicle_body_config_description
              limitedEdition: vehicle_limited_edition
              buildCountryOriginDescription: vehicle_build_country_origin_description
              seriesPublic: vehicle_series_public

              #Engine & Performace Section
              engineDescription: vehicle_engine_description
              inductionDescription: vehicle_induction_description
              engineConfigurationDescription: vehicle_engine_configuration_description
              cylinders: vehicle_cylinders
              camDescription: vehicle_cam_description
              fuelDeliveryDescription: vehicle_fuel_delivery_description
              power: vehicle_power
              powerRpmFrom: vehicle_power_rpmfrom
              powerRpmTo: vehicle_power_rpmto
              acceleration: vehicle_acceleration
              altEngTorque: vehicle_alt_eng_torque
              engineLocation: vehicle_engine_location
              torqueRpmFrom: vehicle_torque_rpmfrom

              # Transmission
              driveCode: vehicle_drive_code
              gearNum: vehicle_gear_num
              gearTypeDescription: vehicle_gear_type_description
              gearLocationDescription: vehicle_gear_location_description

              # Dimenssions
              manufacturerWheelBaseConfig: vehicle_manufacturer_wheel_base_config
              wheelBaseConfig: vehicle_wheel_base_config
              wheelBase: vehicle_wheel_base
              vehicle_roofline
              vehicle_height
              vehicle_length
              vehicle_width
              frontRimDesc: vehicle_front_rim_desc
              frontTyreSize: vehicle_front_tyre_size
              rearRimDesc: vehicle_rear_rim_desc
              rearTyreSize: vehicle_rear_tyre_size
              kerbWeight: vehicle_kerb_weight
              tareMass: vehicle_tare_mass
              grossVehicleMass: vehicle_gross_vehicle_mass
              grossCombinationMass: vehicle_gross_combination_mass
            }
          }

        }
      `,
  });

  return {
    props: {
      car: data.DealerListing,
    },
  };
}
