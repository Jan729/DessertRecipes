import React from "react";

const About = () => {
  const intro =
    "Welcome. Are you tired of googling recipes, only to scroll through endless blog posts and ads to find the recipe you wanted? Well scroll no more! This site contains tried and true recipes that will be sure to please even the pickiest of family members.*";
  const promise =
    "No ads. No irrelevant blog content. All recipes tested on humans, not animals.";
  const disclaimer =
    "*All recipes have been tested and approved by my brother, who ";
  const veryPicky = " is extremely picky";
  const refinedTastebuds = " has extremely refined tastebuds.";
  const sideNote =
    "Vegans, if you are looking for baked goods that do not contain butter, please look elsewhere.";

  return (
    <div className="container">
      <h1 className="display-4">About</h1>
      <p>{intro}</p>
      <p>{promise}</p>

      <p>{sideNote}</p>
      <h5>
        {disclaimer}
        <del>{veryPicky}</del>
        {refinedTastebuds}
      </h5>
    </div>
  );
};

export default About;
