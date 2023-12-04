import React from "react";
import Image from "next/image";
import ProductRoadmapBlock from "./DynamicFiles/ProductRoadmapBlock";

import HomeImg from "../../public/svg/Home.svg";
import FlagImg from "../../public/svg/flag.svg"
import OKRImg from "../../public/svg/okr.svg"
import MeetingNotesImg from "../../public/svg/meeting-notes.svg"
import AirplaneImg from "../../public/svg/airplane.svg"
import CalenderImg from "../../public/svg/calender.svg"
import HabitTrackingImg from "../../public/svg/tracker.svg"


function HowToNotion(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="self-center z-[1] w-[715px] max-w-full ml-32 mt-28 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-5 max-md:max-w-full max-md:mt-10">
              <header className="text-neutral-900 text-center text-5xl leading-[49px] tracking-normal whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Endless ways to use it
              </header>
              <div className="self-center flex items-stretch gap-3.5 mt-6">
                <a
                  href="#"
                  className="text-sky-600 text-center text-base leading-6"
                >
                  Browse all templates
                </a>
                <span className="text-sky-600 text-center text-base leading-6 self-center whitespace-nowrap my-auto">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-centers mt-5">
        <div className="bg-stone-100 flex grow flex-col w-[350px] mx-5 pl-8 pr-1 pt-7 pb-0.5 rounded-xl border-2 border-solid border-stone-100 items-start max-md:max-w-full max-md:mt-6 max-md:pl-5">
          <Image
            loading="lazy"
            src={HomeImg}
            className="aspect-[0.69] object-contain object-center w-[25px] overflow-hidden max-w-full"
            alt="Company Logo"
          />
          <header className="text-zinc-950 text-xl leading-6 font-bold self-stretch max-md:max-w-full">
            Company wiki
          </header>
          <div className="flex items-stretch gap-1 mt-2">
            <a
              href="#"
              className="text-sky-600 text-s leading-6 whitespace-nowrap hover:cursor-pointer hover:underline"
            >
              Get template →
              </a>
            
          </div>
          <div className="bg-zinc-300 self-stretch flex shrink-0 h-[371px] flex-col mt-32 rounded-xl max-md:max-w-full max-md:mt-10" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* Example usage of the ProductRoadmapBlock component */}
          <ProductRoadmapBlock
            imageUrl={FlagImg}
            title="Product Roadmap"
            templateLink="https://www.notion.so/templates/roadmap"
          />

          <ProductRoadmapBlock
            imageUrl={OKRImg}
            title="OKRs"
            templateLink="https://www.notion.so/templates/notions-company-goals"
          />
          <ProductRoadmapBlock
            imageUrl={MeetingNotesImg}
            title="Meeting notes"
            templateLink="https://www.notion.so/templates/meeting-notes-startup"
          />
          <ProductRoadmapBlock
            imageUrl={AirplaneImg}
            title="Vacation planner"
            templateLink="https://www.notion.so/templates/travel-planning"
          />
          <ProductRoadmapBlock
            imageUrl={CalenderImg}
            title="Editorial calender"
            templateLink="https://www.notion.so/templates/notions-editorial-calendar"
          />
          <ProductRoadmapBlock
            imageUrl={HabitTrackingImg}
            title="Habit Tracker"
            templateLink="https://www.notion.so/templates/notion-habit-tracker"
          />

          
        </div>
      </div>
    </div>
  );
}

export default HowToNotion;
