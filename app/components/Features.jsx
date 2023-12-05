// MyFeatures.jsx

import React from "react";
import FeatureBlock from "./FeatureBlock";


const MyFeatures = () => {
  const features = [
    {
      id: 1,
      imageUrl: "../../public/Icons/ai-img.png",
      title: "AI",
      subtitle: "Now ith Q&A",
      details: "Ask literally anything. Notion will answer",
      learnMoreLink: "https://www.notion.so/product/ai", 
    },
    {
      id: 2,
      title: "Wikis",
      subtitle: "Personal Wiki",
      details: "Centralize your knowledge. No more hunting for answers.",
      learnMoreLink: "https://notion.so/product/wikis", 
    },
    {
      id: 3,
      title: "Projects",
      details: "Manage complex projects without the chaos.",
      subtitle: "Manage",
      learnMoreLink: "https://www.notion.so/product/projects", 
    },
    {
      id: 4,
      title: "Docs",
      details: "Simple, Powerful, beautiful. Next-gen notes & docs.",
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
                title={feature.title}
                subtitle={feature.subtitle}
                details={feature.details}
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
