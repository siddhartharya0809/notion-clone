import React from "react";

import Image from "next/image";
import HomeHeroImg from "../../public/assets/home-hero.png";

function LandingText(props) {
  return (
    <header className="flex flex-col relative box-border pb-8">
      <h1 className="text-zinc-950 text-center font-bold text-6xl leading-[65px] tracking-normal self-center whitespace-nowrap mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
        Write, plan, share. <br />
        With AI at your side.
      </h1>
      <div className="relative box-border h-auto mt-5 mx-auto">
        <p
          style={{
            color: "black",
            fontFamily: "Segoe UI, sans-serif",
            fontWeight: "500",
            fontSize: "28px",
            letterSpacing: "0.42px",
            textAlign: "center",
          }}
        >
          Notion is the connected workspace where better, faster work happens.
        </p>
      </div>
      <a
        href="https://www.notion.so/signup"
        className="relative box-border appearance-none font-bold bg-black text-white rounded text-center cursor-pointer mt-5 mx-auto px-6 py-4"
      >
        Get Notion Free
      </a>

      <div className="flex flex-col relative shrink-0 box-border h-auto bg-transparent w-full self-center max-w-[800px] mx-auto">
        <header className="header">
          <Image
            alt="header-img"
            src={HomeHeroImg}
            className="object-cover object-center w-full h-full box-border min-w-[20px] overflow-hidden max-w-[700px] mt-5 mx-auto"
            width={800}
            height={200}
            priority={true}
          />
        </header>
      </div>
    </header>
  );
}

export default LandingText;
