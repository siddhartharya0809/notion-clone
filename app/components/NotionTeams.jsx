"use client";

import Image from "next/image";
import React, { useState } from "react";

// Logo For the blocks
import EngineeringTeam from "../../public/Icons/engineering.png";
import DesignTeam from "../../public/Icons/design.png";
import MarketingTeam from "../../public/Icons/marketing.png";
import OperationsTeam from "../../public/Icons/operations.png";
import ProductTeam from "../../public/Icons/product.png";
import HrTeam from "../../public/Icons/hr.png";

// Images Which are dispayed after the user clicks on the buttons
import EngineeringBigImg from "../../public/images/engineering-image.png";
import DesignBigImg from "../../public/images/design-image.png";
import MarketingBigImg from "../../public/images/marketing-image.png";
import OperationsBigImg from "../../public/images/operations-image.png";
import ProductBigImg from "../../public/images/product-image.png";
import HrBigImg from "../../public/images/hr-image.png";

const logo = {
  engineering: EngineeringTeam,
  design: DesignTeam,
  marketing: MarketingTeam,
  operations: OperationsTeam,
  product: ProductTeam,
  hr: HrTeam,
};

const images = {
  engineering: EngineeringBigImg,
  design: DesignBigImg,
  marketing: MarketingBigImg,
  operations: OperationsBigImg,
  product: ProductBigImg,
  hr: HrBigImg,
};

const TeamComponent = () => {
  const [selectedImage, setSelectedImage] = useState(images.engineering);

  const handleButtonClick = (imageKey) => {
    setSelectedImage(images[imageKey]);
  };

  return (
    <div className="flex flex-col relative shrink-0 box-border h-auto mt-5 mx-auto pb-8">
      <header className="text-neutral-900 text-center text-5xl leading-[49px] tracking-normal font-bold self-center max-w-[521px] mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
        Every team, side-by-side
      </header>
      <div className="self-center flex w-[1024px] max-w-full items-stretch gap-2 mt-7 max-md:flex-wrap max-md:justify-center">
        {Object.keys(images).map((team) => (
          <div
            key={team}
            className="bg-stone-100 flex grow basis-[0%] flex-col items-stretch pl-10 pr-12 py-3.5 rounded-2xl border-2 border-solid border-stone-100 max-md:px-5"
          >
            <div
              onClick={() => handleButtonClick(team)}
              className="flex shrink-0 h-[70px] bg-no-repeat bg-center bg-cover cursor-pointer"
              aria-label={team}
              role="img"
            >
              <Image
                loading="lazy"
                src={logo[team]}
                alt={`${team} Logo`}
                width={70}
                height={70}
              />
            </div>
            <div className="text-neutral-900 text-center text-base leading-6 tracking-normal whitespace-nowrap mt-3">
              {team.charAt(0).toUpperCase() + team.slice(1)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col relative shrink-0 box-border max-w-screen-lg mt-5 mx-auto pb-8">
        <Image
          loading="lazy"
          src={selectedImage}
          className="aspect-[1.42] object-cover object-center w-[1024px] shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden self-center h-[640px] -ml-1 mt-5"
          alt="Team"
        />
      </div>

      <div className="flex flex-col relative shrink-0 box-border h-auto mt-5 pb-8">
      <header className="text-neutral-900 text-center text-5xl leading-[49px] tracking-normal font-bold self-center max-w-[600px] mt-32 max-md:max-w-full max-md:mt-10">
        Join a global movement. Unleash your creativity.
      </header>
      <section className="text-neutral-900 text-center text-base leading-6 tracking-normal font-semibold self-center max-w-[644px] mt-6 max-md:max-w-full">
        Our vibrant community produces content, teaches courses, and leads events all over the world.
      </section>
      <a href="#" className="text-sky-600 text-center text-base leading-6 whitespace-nowrap mx-auto">
        Learn more →
      </a>
    </div>
    </div>
  );
};

export default TeamComponent;
