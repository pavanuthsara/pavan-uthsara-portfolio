import React from "react";

const ProjectCard = ({ title, description, image, techstack, source }) => {
  return (
    <div className="flex w-80 h-auto justify-start bg-zinc-100 ">
      <div>
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
