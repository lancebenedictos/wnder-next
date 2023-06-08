import Image from "next/image";
import React from "react";

interface props {
  feature: {
    imageName: String;
    header: String;
    subtext: String;
  };
}

function FeatureCard({ feature }: props) {
  return (
    <div className="bg-white border-2 border-black flex-1 p-4 rounded-sm flex justify-center items-center gap-2 flex-col">
      <span className="flex gap-2">
        <Image
          src={`./${feature.imageName}`}
          alt="feature image"
          width={20}
          height={20}
        />
        <h2 className=" font-semibold mb-auto">{feature.header}</h2>
      </span>

      <p>{feature.subtext}</p>
    </div>
  );
}

export default FeatureCard;
