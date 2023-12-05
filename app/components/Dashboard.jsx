"use client"

import { useState } from "react";

import Image from "next/image";

import Calender from "../../public/images/calendar.png";
import Gallery from "../../public/images/gallery.png";
import Kanban from "../../public/images/kanban.png";
import List from "../../public/images/list.png";
import Table from "../../public/images/table.png";
import Timeline from "../../public/images/timeline.png";
import ShuffleSVG from "../../public/svg/shuffle.svg";
const imageMap = {
  board: Kanban,
  table: Table,
  timeline: Timeline,
  list: List,
  gallery: Gallery,
  calender: Calender,
};

export default function DashboardComponent() {
  const [selectedImage, setSelectedImage] = useState(Kanban);

  const handleClickBtn = (event, imgName) => {
    event.preventDefault();
    setSelectedImage(imageMap[imgName]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="bg-stone-100 self-center flex w-[1024px] max-w-full flex-col px-9 py-7 rounded-xl border-2 border-solid border-stone-100 max-md:px-5">
      <Image
        loading="lazy"
        src={ShuffleSVG}
        className="aspect-[0.69] object-contain object-center w-[25px] overflow-hidden max-w-full self-start"
        alt="Logo"
      />
      <header className="text-zinc-950 text-lg leading-6 tracking-normal font-bold self-stretch mt-5 max-md:max-w-full">
        Visualize, filter &amp; sort any way you want
      </header>
      <div className="text-neutral-900 text-base leading-6 tracking-normal w-[600px] font-semibold self-stretch mt-3.5 max-md:max-w-full">
        Show only tasks assigned to you, or items marked as urgent. Break down
        any project in the way that’s most helpful to you.
      </div>
      {/* Image Container for each button */}
    
        {selectedImage && (
          <div className="border shadow-sm bg-white self-stretch flex flex-col justify-center items-stretch mt-9 p-px rounded-xl border-solid border-black border-opacity-10 max-md:max-w-full">
            <Image
              src={selectedImage}
              alt="selected-img"
              className="flex shrink-0 h-[596px] flex-col max-md:max-w-full"
            />
          </div>
        )}
      <div className="self-center flex gap-2 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        {/* Use button elements and add onClick handlers */}
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border aspect-[2.185185185185185] justify-center items-stretch pl-2.5 pr-4 py-2.5 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "board")}
        >
          Board
        </button>
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border aspect-[2.111111111111111] justify-center items-stretch pl-2.5 pr-5 py-2.5 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "table")}
        >
          Table
        </button>
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border grow justify-center items-stretch px-3 py-2.5 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "timeline")}
        >
          Timeline
        </button>
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border grow justify-center items-stretch px-3 py-2.5 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "calender")}
        >
          Calender
        </button>
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border aspect-[2.4814814814814814] justify-center items-stretch px-3 py-2 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "gallery")}
        >
          Gallery
        </button>
        <button
          className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap border aspect-[1.6666666666666667] justify-center items-stretch pl-2.5 pr-5 py-2.5 rounded-lg border-solid border-black border-opacity-10"
          onClick={(e) => handleClickBtn(e, "list")}
        >
          List
        </button>
      </div>
    </div>
    </div>
  );
}
