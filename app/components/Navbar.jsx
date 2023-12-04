import Image from "next/image";
import React from "react";

import NotionLogo from "../../public/svg/notion-logo.svg";

function Navbar(props) {
  return (
    <header className="bg-white flex items-center justify-between px-4 py-4 max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-center gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <Image
          loading="lazy"
          src={NotionLogo}
          className="aspect-[2.91]"
          alt="Logo"
        />
        Notion
        <div className="flex items-center gap-5">
          <div className="text-zinc-950 text-base leading-8">Product</div>
          <div className="text-zinc-950 text-base leading-8">Download</div>
          <div className="text-zinc-950 text-base leading-8">Solutions</div>
          <div className="text-zinc-950 text-base leading-8">Resources</div>
          <div className="text-zinc-950 text-base leading-8">Pricing</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <a href="#" className="text-zinc-950 mx-0 text-base leading-8">
          Request a demo
        </a>
        <div className="bg-black bg-opacity-10 w-px h-5" />
        <div className="text-zinc-950 text-base leading-8">Log in</div>
        <button className="text-white text-sm leading-5 tracking-normal shadow-sm bg-neutral-900 px-3 py-2.5 rounded-md">
          Get Notion free
        </button>
      </div>
    </header>
  );
}

export default Navbar;
