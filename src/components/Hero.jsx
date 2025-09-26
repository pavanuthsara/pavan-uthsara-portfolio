import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 p-4 lg:p-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-1">
        <img 
          src="/img/pavan_picture.webp" 
          alt="Picture of pavan" 
          className="w-2/3 sm:w-1/2 lg:w-3/4 max-w-sm lg:max-w-none" 
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 order-2 lg:order-2">
        <p className="text-2xl sm:text-3xl lg:text-4xl my-4 font-bold">
          Let's Build & Solve
        </p>
        
        <p className="mb-4 px-4 lg:px-0 lg:pr-44">
          Undergraduate Software Engineering Student | Software Engineer Intern at{" "}
          <a 
            href="https://www.verdentra.com/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            @Verdentra
          </a>{" "}
          | Tech Content Creator
        </p>
        
        <p className="mt-2 text-sm text-slate-600 px-4 lg:px-0 lg:pr-44 leading-relaxed">
          Transforming complex challenges into elegant software solutions while
          empowering the next generation of developers through engaging YouTube
          content. Currently pursuing Software Engineering degree at SLIIT with a
          relentless curiosity for emerging technologies and a commitment to
          building meaningful digital experiences.
        </p>
        
        <a 
          className="inline-block mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors duration-200 text-gray-800 font-medium" 
          href="https://www.linkedin.com/in/pavanuthsara/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;