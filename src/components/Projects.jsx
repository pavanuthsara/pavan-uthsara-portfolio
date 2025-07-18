import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="mt-4 pt-16">
      <div className="text-center my-3">
        <p className="pl-12 text-2xl font-medium">
          The projects
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 py-4 ">
        <div className=" w-1/2 place-items-end">
          <ProjectCard
            title={"Freshly LK - Farming site"}
            image={"/img/github-logo.svg"}
          />
          <ProjectCard
            title={"Spare parts selling"}
            image={"/img/github-logo.svg"}
          />
        </div>
        <div className="w-1/2 pr-8">
          <ProjectCard
            title={"Expenses tracker - Android app"}
            image={"/img/github-logo.svg"}
          />
          <ProjectCard
            title={"Pavan Uthsara - Youtube channel"}
            image={"/img/youtube-logo.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
