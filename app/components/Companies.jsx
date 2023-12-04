import React from "react";
import amazonLogo from "../../public/companies-logo/amazon.png";
import angelListLogo from "../../public/companies-logo/angel-list.png";
import doordashLogo from "../../public/companies-logo/doordash.png";
import figmaLogo from "../../public/companies-logo/figma-logo.png";
import generalElectricLogo from "../../public/companies-logo/general-electric.png";
import headspaceLogo from "../../public/companies-logo/headspace.png";
import nikeLogo from "../../public/companies-logo/nike.png";
import pinterestLogo from "../../public/companies-logo/pinterest.png";
import pixarLogo from "../../public/companies-logo/pixar.png";
import plaidLogo from "../../public/companies-logo/plaid.png";
import robinhoodLogo from "../../public/companies-logo/robinhood_logo.png";
import snowflakeLogo from "../../public/companies-logo/snowflake.png";
import toyotaLogo from "../../public/companies-logo/toyota.png";
import uberLogo from "../../public/companies-logo/uber.png";
import Image from "next/image";

const VisualElement = ({ width, height }) => (
  <div className="bg-zinc-300 flex flex-col" style={{ width, height }} />
);

function TopCompaniesComponent(props) {
  return (
    <div className="flex flex-col relative shrink-0 box-border h-auto mt-10 pb-8">
      <header className="text-neutral-900 text-center text-5xl leading-[49px] tracking-normal font-bold self-center whitespace-nowrap p-2 max-md:max-w-full max-md:mt-10">
        Millions run on Notion every day
      </header>
      <p className="text-neutral-900 p-2 text-center text-base leading-6 tracking-normal self-center max-w-[485px] mt-4 max-md:max-w-full">
        Powering the world’s best teams, from next-generation startups to
        established enterprises.
      </p>
      <a
        href="https://www.notion.so/customers"
        className="text-sky-600 text-center p-2 text-base leading-6 hover:underline"
      >
        Read customer stories →
      </a>
      {/* Single container div with three rows */}
      <div className="self-center flex flex-wrap justify-center items-center gap-5 mt-9 w-[65rem] max-md:max-w-full">
        <Image
          src={figmaLogo}
          alt="Figma Logo"
          style={{ width: "150px", height: "45px", margin: "10px" }}
        />
        <Image
          src={pixarLogo}
          alt="Pixar Logo"
          style={{ width: "106px", height: "30px", margin: "10px" }}
        />
        <Image
          src={doordashLogo}
          alt="DoorDash Logo"
          style={{ width: "135px", height: "19px", margin: "10px" }}
        />
        <Image
          src={nikeLogo}
          alt="Nike Logo"
          style={{ width: "80px", height: "26px", margin: "10px" }}
        />
        <Image
          src={amazonLogo}
          alt="Amazon Logo"
          style={{ width: "100px", height: "35px", margin: "10px" }}
        />
        <Image
          src={pinterestLogo}
          alt="Pinterest Logo"
          style={{ width: "150px", height: "40px", margin: "10px" }}
        />
        <Image
          src={generalElectricLogo}
          alt="General Electric Logo"
          style={{ width: "84px", height: "80px", margin: "10px" }}
        />
        <Image
          src={uberLogo}
          alt="Uber Logo"
          style={{ width: "100px", height: "35px", margin: "10px" }}
        />
        <Image
          src={plaidLogo}
          alt="Plaid Logo"
          style={{ width: "120px", height: "45px", margin: "10px" }}
        />
        <Image
          src={toyotaLogo}
          alt="Toyota Logo"
          style={{ width: "120px", height: "40px", margin: "10px" }}
        />
        <Image
          src={snowflakeLogo}
          alt="Snowflake Logo"
          style={{ width: "130px", height: "35px", margin: "10px" }}
        />
        <Image
          src={headspaceLogo}
          alt="Headspace Logo"
          style={{ width: "130px", height: "31px", margin: "10px" }}
        />
        <Image
          src={angelListLogo}
          alt="Angel List Logo"
          style={{ width: "120px", height: "28px", margin: "10px" }}
        />
        <Image
          src={robinhoodLogo}
          alt="Robinhood Logo"
          style={{ width: "150px", height: "40px", margin: "10px" }}
        />
      </div>
    </div>
  );
}

export default TopCompaniesComponent;
