import React from "react";
import { Youtube, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, techstack, source, source_name="Source Code" }) => {
  return (
    <div className="flex w-2/3 h-auto justify-start mb-4 bg-slate-50 p-4 rounded-2xl">
      <div className="mr-4 ">
        <img
          src={image}
          href={source}
          alt={title}
          className="w-16 h-auto rounded-full"
        ></img>
      </div>
      <div>
        <p className="font-medium text-lg">{title}</p>
        <p className="text-sm">{techstack}</p>
        <p className="text-sm text-slate-600">{description}</p>
        <a href={source} target="_blank" ><button className="btn bg-base-100 mt-2">{source_name}</button></a>
      </div>
    </div>
  );
};

export default ProjectCard;
