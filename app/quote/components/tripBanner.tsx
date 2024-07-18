import Image from "next/image";
import React from "react";

const TripBanner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <Image
          src="https://placehold.co/840x343/PNG"
          width={840}
          height={343}
          alt="Banner Image"
          className="w-840 h-343"
        />
        <Image
          src="https://placehold.co/840x343/PNG"
          width={840}
          height={343}
          alt="Banner Image"
          className="w-840 h-343"
        />
      </div>
    </div>
  );
};

export default TripBanner;
