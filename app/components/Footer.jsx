import Image from "next/image";
import React from "react";
import dropdownBtn from "./DynamicFiles/dropdownBtn";

import NotionLogo from "../../public/svg/notion-logo.svg";
import InstagramLogo from "../../public/svg/instagram.svg";
import TwitterLogo from "../../public/svg/twitter.svg";
import FacebookLogo from "../../public/svg/facebook.svg";
import YoutubeLogo from "../../public/svg/youtube.svg";
import LinkedinLogo from "../../public/svg/linkedin.svg";

function ProductMenu(props) {
  return (
    <div className="flex items-start justify-center ">
      {/* Logo and Socials */}
      <div className="flex items-start flex-col mx-5">
        <div className="flex items-center pl-5">
          <Image
            src={NotionLogo}
            alt="notion-logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-semibold text-xl mr-3">Notion</span>
        </div>
        <div className="flex justify-center items-center pl-5">
          <Image
            src={InstagramLogo}
            alt="insta-logo"
            width={25}
            height={25}
            className="mr-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded m-2 "
          />
          <Image
            src={TwitterLogo}
            alt="twitter-logo"
            width={25}
            height={25}
            className="mr-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded m-2 "
          />
          <Image
            src={FacebookLogo}
            alt="facebook-logo"
            width={25}
            height={25}
            className="mr-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded m-2 "
          />
          <Image
            src={YoutubeLogo}
            alt="youtube-logo"
            width={25}
            height={25}
            className="mr-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded m-2 "
          />
          <Image
            src={LinkedinLogo}
            alt="linkedin-logo"
            width={25}
            height={25}
            className="mr-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded m-2 "
          />
        </div>
        <dropdownBtn />
      </div>
      {/* Product and Solutions */}
      <div className="flex items-start flex-col mx-5">
        <div className="mx-5 ">
          <h1 className="text-xl font-semibold pb-2">Products</h1>
          <ul className="pb-5">
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>What’s new</li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Solutions</h1>
          <ul className="pb-5">
            <li>Enterprise</li>
            <li>Small Buisness</li>
            <li>Personal Use</li>
            <li>Remote Work</li>
            <li>Startups</li>
            <li>Education</li>
            <li>Nonprofits</li>
            <li>Engineering</li>
            <li>Product</li>
            <li>Design</li>
            <li>Managers</li>
          </ul>
        </div>
      </div>
      {/* Download, Build, Learn */}
      <div className="flex items-start flex-col mx-5">
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Download</h1>
          <ul className="pb-5">
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
            <li>Web Clipper</li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Build</h1>
          <ul className="pb-5">
            <li>Integration</li>
            <li>Templates</li>
            <li>API docs</li>
            <li>Guides & Tutorial</li>
            <li>Hire a consultant</li>
            <li>Become an affiliate</li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Learn</h1>
          <ul className="pb-5">
            <li>Cutomer & Service</li>
            <li>Help center</li>
            <li>Webinar</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      {/* Get Started, and Resources */}
      <div className="flex items-start flex-col mx-5">
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Get Started</h1>
          <ul className="pb-5">
            <li>Switch from Confluence</li>
            <li>Switch from Asana</li>
            <li>Switch from Evernote</li>
            <li>Compare vs Monday</li>
            <li>Compare vs Clickup</li>
            <li>Compare vs Jira</li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="text-xl font-semibold pb-2">Resources</h1>
          <ul>
            <li>Pricing</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Media Kit</li>
            <li>Email us</li>
            <li>Security</li>
            <li>Cookie Setting</li>
            <li>Terms & Privacy</li>
            <li>California Privacy Notice</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
