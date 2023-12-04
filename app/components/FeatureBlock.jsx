import React from "react";
import Image from "next/image";

import aiImg from "../../public/svg/ai.svg"

const FeatureBlock = ({ imageUrl, title, subtitle, learnMoreLink }) => {
  return (
    <div className="flex items-stretch justify-between gap-2.5 w-50 max-md:justify-center">
      <div className="bg-purple-100 flex aspect-square flex-col justify-center items-center w-8 h-8 px-1.5 rounded-md">
        <Image
          loading="lazy"
          src={imageUrl}
          className="aspect-[1.05] object-contain object-center w-full overflow-hidden"
          alt="Image"
        />
      </div>
      <div className="text-zinc-950 text-2xl leading-8 tracking-wide self-center my-auto">
        {title}
      </div>
      {subtitle && (
        <div className="text-purple-600 text-xs leading-4 tracking-normal whitespace-nowrap bg-purple-100 self-center grow justify-center items-stretch my-auto px-2 py-1 rounded-[100px]">
          {subtitle}
        </div>
      )}
    </div>
  );
};

function MyUpdatedComponent(props) {
  return (
    <div className="flex justify-center items-center w-50">
      <form className="border shadow-lg bg-white flex w-full grow flex-col mx-auto pt-2.5 pb-6 rounded-xl border-solid border-black border-opacity-10 items-start max-md:mt-5">
        <div className="self-stretch flex flex-col items-stretch pl-5 pr-5 max-md:pr-5">
          <FeatureBlock
            imageUrl={aiImg}
            title="AI"
            subtitle="Now with Q&A"
          />
          <div className="text-zinc-950 text-sm leading-5 tracking-normal mt-5">
            Ask literally anything. Notion will answer.
          </div>
          <div className="flex items-stretch justify-between gap-1 mt-2">
            <a href="#" className="text-purple-600 text-sm leading-5 tracking-normal whitespace-nowrap hover:underline hover:cursor-pointer">
              Learn more →
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}


export default MyUpdatedComponent;
