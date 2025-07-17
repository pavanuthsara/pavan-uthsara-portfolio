import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-5 mt-4 pt-16">
      <div className=" w-1/2 place-items-end">
        <ProjectCard title={"Freshly.lk"} image={"/img/github-logo.svg"} />
        <ProjectCard title={"Spare parts selling"} image={"/img/github-logo.svg"} />
      </div>
      <div className="w-1/2 pr-8">
        <ProjectCard title={"Expenses tracker - Android app"} image={"/img/github-logo.svg"} />
        <ProjectCard title={"Pavan Uthsara - Youtube channel"} image={"/img/github-logo.svg"} />
      </div>
    </div>
  );
};

export default Projects;
