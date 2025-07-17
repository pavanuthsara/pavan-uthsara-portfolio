import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="w-1/2">
        <div>
        <img src="/img/pavan_picture.svg" alt="Picute of pavan"  />
        </div>
      </div>
      <div className="w-1/2 pr-8">
        <p className=" text-4xl my-4 font-bold">Let's Build & Solve</p>
        <p>I'm an undergraduate Software Engineering student from SLIIT, 
            eager to tackle complex problems and bring innovative solutions 
            to life. Beyond the classroom, I'm sharing my journey and 
            insights on my programming and academic YouTube channel.</p>
      </div>
    </div>
  );
};

export default Hero;
