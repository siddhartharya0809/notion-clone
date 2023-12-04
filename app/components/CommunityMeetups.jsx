import React from "react";
import Image from "next/image"
import SliderComponent from "./SliderComponent"

import twtAvatar1 from "../../public/assets/twitter-avatar-andre.png"
import twtAvatar2 from "../../public/assets/twitter-avatar-oliver.png"
import twtAvatar3 from "../../public/assets/twitter-avatar-oliver.png"



function CommunityMeetup() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">

    <div className="self-center w-[1024px] max-w-full mt-6">
      <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <SliderComponent />
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <section className="flex grow flex-col items-stretch max-md:mt-6">
            <div className="bg-stone-100 flex w-full flex-col items-stretch pl-4 pr-6 pt-4 pb-8 rounded-xl border-2 border-solid border-stone-100 max-md:pr-5">
              <div className="flex items-stretch justify-between gap-2">
                <Image src={twtAvatar1} alt="pfp" className="flex w-12 shrink-0 h-12 flex-col" />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <h3 className="text-zinc-950 text-base tracking-normal">
                    Deborah Mecca
                  </h3>
                  <p className="text-black text-opacity-60 text-base leading-6 tracking-normal whitespace-nowrap">
                    @DebMecca
                  </p>
                </div>
              </div>
              <p className="text-neutral-900 text-base leading-6 tracking-normal mt-3 max-md:mt-10">
                and I document a lot. A LOT A LOT. Now I just realize that it wasnt that I hated documenting, I just hated Google Docs.
              </p>
            </div>
            <div className="bg-stone-100 flex w-full flex-col items-stretch mt-6 pl-4 pr-6 pt-4 pb-8 rounded-xl border-2 border-solid border-stone-100 max-md:pr-5">
              <div className="flex items-stretch justify-between gap-2">
              <Image src={twtAvatar2} alt="pfp" className="flex w-12 shrink-0 h-12 flex-col" />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <h3 className="text-zinc-950 text-base leading-6 tracking-normal">
                    André Blackman
                  </h3>
                  <p className="text-black text-opacity-60 text-base leading-6 tracking-normal whitespace-nowrap">
                    @mindofandre
                  </p>
                </div>
              </div>
              <p className="text-neutral-900 text-base leading-6 tracking-normal mt-6">
                One of the most incredible things about <span className="text-blue-500 hover:cursor-pointer">@notionHQ</span> is the dynamic community being built - creating and sharing at its best.
              </p>
            </div>
            <div className="bg-stone-100 flex w-full flex-col items-stretch mt-6 pl-4 pr-6 pt-4 pb-8 rounded-xl border-2 border-solid border-stone-100 max-md:pr-5">
              <div className="flex items-stretch justify-between gap-2">
              <Image src={twtAvatar3} alt="pfp" className="flex w-12 shrink-0 h-12 flex-col" />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <h3 className="text-zinc-950 text-base leading-6 tracking-normal">
                    Oliver Peyre
                  </h3>
                  <p className="text-black text-opacity-60 text-base leading-6 tracking-normal whitespace-nowrap">
                    @opeyre
                  </p>
                </div>
              </div>
              <p className="text-neutral-900 text-base leading-6 tracking-normal mt-2">
                Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!
              </p>
            </div>
          </section>
        </div>
      </header>
    </div>
    </div>
  );
}

export default CommunityMeetup;