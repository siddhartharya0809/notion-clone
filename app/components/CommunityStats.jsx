import Image from "next/image";
import React from "react";
import AvatarImg from "../../public/images/avatars.png"
import CommunityIconsImg from "../../public/images/community-icons-V2.png"
import NotionDiffLang from "../../public/images/welcome-to-notion.png"

function CommunityStats(props) {
  return (
    <div className="flex flex-col relative shrink-0 box-border h-auto mt-5 pb-8">
    <div className="flex justify-center items-center">
      <Image src={AvatarImg} alt="avatar img" />
    </div>
      <header className="self-center w-[1024px] max-w-full  max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-stone-100 flex grow flex-col w-full pl-8 pr-20 py-8 rounded-xl border-2 border-solid border-stone-100 items-start max-md:mt-6 max-md:px-5">
              <h1 className="text-sky-600 text-5xl leading-[58px] tracking-widest max-md:text-4xl max-md:leading-[55px]">
                1M+
              </h1>
              <div className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap mt-5">
                community members
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-stone-100 flex grow flex-col w-full pl-8 pr-20 py-8 rounded-xl border-2 border-solid border-stone-100 items-start max-md:mt-6 max-md:px-5">
              <h1 className="text-sky-600 text-5xl leading-[58px] tracking-widest max-md:text-4xl max-md:leading-[49px]">
                150+
              </h1>
              <div className="text-neutral-900 text-sm leading-5 tracking-normal whitespace-nowrap mt-3.5">
                community groups
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-stone-100 flex grow flex-col w-full pl-8 pr-20 py-8 rounded-xl border-2 border-solid border-stone-100 items-start max-md:mt-6 max-md:px-5">
              <h1 className="text-sky-600 text-5xl leading-[58px] tracking-widest max-md:text-4xl max-md:leading-10">
                50+
              </h1>
              <div className="text-neutral-900 text-sm leading-5 tracking-normal mt-3.5">
                countries represented
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="self-center w-[1024px] max-w-full mt-6">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="bg-stone-100 flex grow flex-col w-full pl-8 pr-20 pt-12 pb-7 rounded-xl border-2 border-solid border-stone-100 items-start max-md:max-w-full max-md:mt-6 max-md:px-5">
              <h2 className="text-zinc-950 text-lg leading-6 tracking-normal">
                An always-on support network
              </h2>
              <div className="text-neutral-900 text-base leading-6 tracking-normal mt-3.5">
                Swap setups and share tips in over 149 online communities.
              </div>
              <div className="flex w-[346px] shrink-0 max-w-full h-[277px] flex-col mt-10">
                <Image src={CommunityIconsImg} alt="comunity-img" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-stone-100 flex grow flex-col items-stretch w-full pl-8 pr-1 pt-12 pb-0.5 rounded-xl border-2 border-solid border-stone-100 max-md:max-w-full max-md:mt-6 max-md:pl-5">
              <h2 className="text-zinc-950 text-lg leading-6 tracking-normal max-md:max-w-full">
                Choose your language
              </h2>
              <div className="text-neutral-900 text-base leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                Notion currently supports English, Korean, Japanese, French,
                German, Spanish, and Portuguese. With more to come!
              </div>
              <div className="flex w-[346px] shrink-0 max-w-full h-[277px] flex-col mt-10">
                <Image src={NotionDiffLang} alt="comunity-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommunityStats;
