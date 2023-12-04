import React from "react";
import Image from "next/image";

import eyeImg from "../../public/svg/eye.svg"
import paintImg from "../../public/svg/paint.svg"
import img1 from "../../public/images/build-any-page-communicate-any-idea.png"
import img2 from "../../public/images/customize-info.png"

const InfoSection = ({ imageSrc, title, description, mainImg }) => (
  
  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
    <div className="bg-stone-100 flex grow flex-col w-full pl-8 pr-1 pt-7 pb-0.5 rounded-xl border-2 border-solid border-stone-100 max-md:max-w-full max-md:mt-6 max-md:pl-5">
      <Image
        loading="lazy"
        src={imageSrc}
        className="aspect-[0.69] object-contain object-center w-[25px] overflow-hidden max-w-full self-start"
        alt={`Image for ${title}`}
      />
      <div className="text-zinc-950 text-lg leading-6 tracking-normal self-stretch mt-5 max-md:max-w-full">
        {title}
      </div>
      <div className="text-neutral-900 text-base leading-6 tracking-normal self-stretch mt-3.5 max-md:max-w-full">
        {description}
      </div>
      <Image
        className="self-stretch flex shrink-0 h-[360px] flex-col mt-9 rounded-xl max-md:max-w-full"
        src={mainImg}
        alt="img"
       />
    </div>
  </div>
 
);

function InfoComponent(props) {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="self-center w-[1024px] max-w-full mt-6">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <InfoSection
          imageSrc={eyeImg}
          title="Customize the info you track"
          description="Create your own labels, tags, owners, and more, so everyone has context and everything stays organized."
          mainImg={img1}
        />
        <InfoSection
          imageSrc={paintImg}
          title="Build any page, communicate any idea"
          description="Everything is drag and drop in Notion - images, toggles, to-do’s, even embedded databases."
          mainImg={img2}
        />
      </div>
    </div>
     </div>
  );
}

export default InfoComponent;
