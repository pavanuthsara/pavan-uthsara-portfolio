import React from "react";
import { Youtube, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, techstack, source }) => {
  return (
    <div className="flex w-80 h-auto justify-start mb-4">
      <div className="mr-4">
        <img
          src={image}
          href={source}
          alt={title}
          className="w-16 h-auto"
        ></img>
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{techstack}</p>
        <p>{source}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
