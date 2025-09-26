import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="mt-4 pt-16 px-4 lg:px-8" id="projects">
        {/* Section Header */}
        <div className="text-center my-6 lg:my-8">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
            The most recent projects
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 py-4 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-4">
            <ProjectCard
              title={"Freshly LK - Web for farmers"}
              image={"/img/freshly.svg"}
              description={
                "A webapp for new farmers who entered into the market, this system bypasses the middlemen."
              }
              techstack={"MERN stack | JWT authentication"}
              source={"https://github.com/pavanuthsara/freshly-project2"}
            />
            <ProjectCard
              title={"Spare parts selling web"}
              image={"/img/github_logo.svg"}
              description={
                "A sparepart selling system, sellers can list their products and buyers can buy them."
              }
              techstack={"Java | JSP | MySQL | Tailwind CSS"}
              source={"https://github.com/pavanuthsara/SparePartsSellingApp"}
            />
          </div>
          
          {/* Right Column */}
          <div className="w-full lg:w-1/2 space-y-4">
            <ProjectCard
              title={"Pavan Uthsara - Youtube channel"}
              image={"/img/youtube_logo_v2.svg"}
              description={
                "I support my colleagues by creating helpful videos. Most of them are related to DSA, Java, SQL. [6200+ subscribers]"
              }
              techstack={"Tech | Programming | Content Creation"}
              source={"https://www.youtube.com/pavanuthsara"}
              source_name="View Channel"
            />
            <ProjectCard
              title={"Spend Wise - Android App"}
              image={"/img/spend_wise.svg"}
              description={
                "An android app for manage daily expenses and income. Have backup option for user data."
              }
              techstack={"Kotlin | XML | Android Studio | Shared Preferences"}
              source={
                "https://github.com/pavanuthsara/Personal_Finance_Tracker_v3"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;