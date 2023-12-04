import React from "react";
import Image from "next/image";
import NotionParadeImg from "../../public/assets/notion-parade.png";

function DownloadNotion(props) {
  return (
    <div className="flex flex-col relative shrink-0 box-border h-auto mt-5 pb-8">
      <header className="text-neutral-900 text-center text-6xl leading-[65px] font-bold self-center max-w-[600px] mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-[50px] max-md:mt-10">
        Get started for free
      </header>
      <p className="text-neutral-900 text-center text-base leading-6 tracking-normal self-center max-w-[430px] mt-3">
        Play around with it first. Pay and add your team later.
      </p>
      <div className="self-center flex items-stretch justify-between gap-3 mt-6 max-md:justify-center">
        <button className="text-white text-center text-base leading-6 tracking-normal shadow-sm bg-neutral-900 grow justify-center items-stretch px-3 py-2 rounded-md hover:bg-neutral-600">
          Try Notion free
        </button>
        <a
          href="https://www.notion.so/contact-sales"
          className="text-sky-600 text-center text-base leading-6 my-auto hover:cursor-pointer hover:underline"
        >
          Request a demo →
        </a>
      </div>
      <Image
        src={NotionParadeImg}
        alt="notion-parade"
        className="self-center flex w-[670px] shrink-0 max-w-full h-[330px] flex-col mt-8"
      />
      <div class="relative flex py-5 justify-center items-center">
        <div class="flex-grow flex border-t border-gray-400 max-w-[1600px]"></div>
        
      </div>
    </div>
  );
}

export default DownloadNotion;
