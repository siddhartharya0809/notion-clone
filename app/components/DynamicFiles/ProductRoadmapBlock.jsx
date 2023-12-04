import React from "react";
import Image from "next/image"

function ProductRoadmapBlock({ imageUrl, title, templateLink }) {
  return (
    <form
      className="bg-stone-100 flex w-full grow flex-col items-start mx-3 p-6 rounded-xl border-2 border-solid border-stone-100 max-md:mt-6 max-md:px-5"
      aria-label={title}
    >
      <Image
        src={imageUrl}
        className="aspect-[5.73] w-[149px] overflow-hidden"
        alt={title}
        width={20}
        height={20}
      />
      <header className="text-zinc-950 text-xl font-bold leading-6 tracking-normal self-stretch mt-5">
        {title}
      </header>
      <div className="self-stretch flex items-stretch justify-between gap-1 mt-9 mb-2">
        <a
          href={templateLink}
          className="text-sky-600 text-base font-semibold leading-6 whitespace-nowrap"
        >
          Get template →
        </a>
        
      </div>
    </form>
  );
}

export default ProductRoadmapBlock;
