import React from "react";
import Image from "next/image";

import pencilImg from "../../public/assets/giant-pencil-illustration.png";
import strikethroughImg from "../../public/assets/strikethrough-illustration.png";
import MetaLab from "../../public/companies-logo/metalab.png";
import topPeekImg from "../../public/assets/topPeek.png";

function ToolConsolidation(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="self-center w-[591px] max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <header className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
            <h1 className="text-neutral-900 text-center text-5xl font-bold  leading-[49px] tracking-normal my-auto max-md:text-4xl max-md:leading-10 max-md:mt-10">
              Consolidate tools. Cut costs.
            </h1>
          </header>
          <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              src={pencilImg}
              alt="Your Image Alt Text"
              className="w-[217px] h-[183px] mx-auto"
            />
          </div>
        </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Image src={strikethroughImg} alt="strikthrough-image" />
        </div>
      </div>
      <div className="self-center w-[591px] max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <span>
            We got rid of nearly a dozen different tools because of what Notion
            does for us.
          </span>
        </div>
        <div className="flex justify-center items-center gap[9px]">
          <div className="mr-5">
            <Image src={MetaLab} alt="msssetlab-logo" width={150} height={150} />
          </div>
          <div className="align-start">
            <p className="font-bold">Justin Watt</p>
            <p>Director of Ops & Marketing, MetaLab</p>
          </div>
        </div>
      </div>

      <div className="self-center z-[1] w-[741px] max-w-full mt-24 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <header className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
            <Image src={topPeekImg} alt="img" width={200} height={200} />
          </header>
          <section className="flex flex-col items-stretch w-[75%] ml-5 max-md:w-full max-md:ml-0">
            <h1 className="text-neutral-900 text-center text-5xl leading-[49px] tracking-normal font-bold my-auto max-md:max-w-full max-md:mt-10">
              Powerful building blocks
            </h1>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ToolConsolidation;
