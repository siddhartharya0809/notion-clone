// MyFeatures.jsx

import React from "react";
import FeatureBlock from "./FeatureBlock"; // Assuming FeatureBlock is in the same directory

import aiImg from "../../public/svg/ai.svg"
import arrowImg from "../../public/svg/arrow.svg"
import docsImg from "../../public/svg/docs.svg"
import booksImg from "../../public/svg/books.svg"

const MyFeatures = () => {
  // Define your features here
  const features = [
    {
      id: 1,
      imageUrl: {aiImg},
      title: "AI",
      subtitle: "Now ith Q&A",
      learnMoreLink: "https://www.notion.so/product/ai", 
    },
    {
      id: 2,
      imageUrl: {booksImg},
      title: "Wikis",
      subtitle: "Your Personal Wiki",
      learnMoreLink: "https://notion.so/product/wikis", 
    },
    {
      id: 3,
      imageUrl: {arrowImg},
      title: "Projects",
      subtitle: "Manage your projects",
      learnMoreLink: "https://www.notion.so/product/projects", 
    },
    {
      id: 4,
      imageUrl: {docsImg},
      title: "Docs",
      subtitle: "Docs & more",
      learnMoreLink: "https://www.notion.so/product/docs",
    },
  ];

  return (
    <div className="flex flex-row justify-center relative box-border pb-8">
      <div className="flex flex-between justify-center place-items-center w-60">
        {features.map((feature) => (
          <div key={feature.id} className="border shadow-lg bg-white w-auto grow mx-5 rounded-xl border-solid border-black border-opacity-10 items-start max-md:mt-5">
            <div className="self-stretch flex flex-col items-stretch w-25 max-md:pr-5">
              <FeatureBlock
                imageUrl={feature.imageUrl}
                title={feature.title}
                subtitle={feature.subtitle}
                learnMoreLink={feature.learnMoreLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeatures;
