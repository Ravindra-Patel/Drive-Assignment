import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CarCarousel = ({ carImages }) => {
  const totalImages = carImages.length;
  console.log(totalImages);

  const [imageNumber, setImageNumber] = useState(0);

  const decrease = () => {
    if (imageNumber > 0) {
      setImageNumber((prevState) => prevState - 1);
    }
  };

  const increase = () => {
    if (imageNumber < totalImages) {
      setImageNumber((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <div className="min-w-[300px] w-[90vw] h-[50vh] mt-6 relative lg:w-[60vw] lg:h-[60vh]">
        <div className="flex w-full h-full justify-between">
          {/* Left Button */}
          <div className="flex items-center h-full">
            {imageNumber > 0 ? (
              <BiChevronLeft
                onClick={decrease}
                size="60px"
                style={{ color: "white", cursor: "pointer"}}
              />
            ) : (
              <BiChevronLeft
                size="60px"
                style={{ color: "#d4d4d4", opacity: "0.2"}}
              />
            )}
          </div>
          {/* Right Button */}
          <div className="flex items-center h-full">
            {imageNumber < totalImages - 1 ? (
              <BiChevronRight
                onClick={increase}
                size="60px"
                style={{ color: "white", cursor: "pointer"}}
              />
            ) : (
              <BiChevronRight
                size="60px"
                style={{ color: "#d4d4d4", opacity: "0.2" }}
              />
            )}
          </div>
        </div>

        {/* Images for Carousels */}
        <div>
          <Image
            src={carImages[imageNumber]?.image_location}
            alt="/drive_logo.jpg"
            fill
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              //   objectPosition:"bottom",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CarCarousel;
