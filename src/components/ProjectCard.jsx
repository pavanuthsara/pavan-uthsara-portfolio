import React from "react";
import { Youtube, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, techstack, source }) => {
  return (
    <div className="flex w-2/3 h-auto justify-start mb-4 bg-slate-50 p-4 rounded-2xl">
      <div className="mr-4">
        <img
          src={image}
          href={source}
          alt={title}
          className="w-16 h-auto"
        ></img>
      </div>
      <div>
        <p className="font-medium text-lg">{title}</p>
        <p className="text-sm">{techstack}</p>
        <p className="text-sm text-slate-600">{description}</p>
        <button><a href={source} target="_blank">Source Code</a></button>
      </div>
    </div>
  );
};

export default ProjectCard;
