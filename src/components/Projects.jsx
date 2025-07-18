import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="mt-4 pt-16">
      <div className="text-center my-3">
        <p className="pl-12 text-2xl font-medium ">The most recent projects</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 py-4 ">
        <div className=" w-1/2 place-items-end">
          <ProjectCard
            title={"Freshly LK - Farming site"}
            image={"/img/freshly.svg"}
            description={
              "A webapp for new entered farmers into the market, this system bypasses the middlemen."
            }
            techstack={"MERN stack | JWT authentication"}
            source={"google.com"}
          />
          <ProjectCard
            title={"Spare parts selling web"}
            image={"/img/github_logo.svg"}
            description={
              "A sparepart selling system, sellers can list their products and buyers can buy them."
            }
            techstack={"Java | JSP | MySQL | Tailwind CSS"}
            source={"google.com"}
          />
        </div>
        <div className="w-1/2 pr-8">
          <ProjectCard
            title={"Pavan Uthsara - Youtube channel"}
            image={"/img/youtube_logo_v2.svg"}
            description={
              "I support my colleuges by creating helpful videos. Most of them are related to DSA, Java, Sql. [5000+ subscribers]"
            }
            techstack={"Tech | Programming | Content Creation"}
            source={"google.com"}
          />
          <ProjectCard
            title={"Sepend Wise - Android App"}
            image={"/img/spend_wise.svg"}
            description={
              "An android app for manage daily expenses and income. Have backup option for user data."
            }
            techstack={"Kotlin | xml | Android Studio | Shared Preferences"}
            source={"google.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
