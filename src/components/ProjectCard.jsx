import React from "react";

const ProjectCard = ({ title, description, image, techstack, source, source_name = "Source Code" }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-full sm:max-w-none h-auto justify-start mb-4 bg-slate-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Section */}
      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 text-center sm:text-left">
        <p className="font-medium text-lg mb-1">{title}</p>
        <p className="text-sm text-blue-600 font-medium mb-2">{techstack}</p>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">{description}</p>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <button className="inline-block px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-all duration-300 ease-out hover:shadow-md text-gray-700 font-medium">
            {source_name}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;