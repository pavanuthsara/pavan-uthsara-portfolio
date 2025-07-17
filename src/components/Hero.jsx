import React from "react";

const Hero = () => {
  return (
    <div className="flex center justify-center items-center gap-5">
      <div className="w-1/2 place-items-end">
        <img src="/img/pavan_picture.svg" alt="Picute of pavan"  />
      </div>
      <div className="w-1/2 pr-8 ">
        <p className="text-4xl my-4 font-bold">Let's Build & Solve</p>
        <p className="pr-44">Undergraduate Software Engineering student <br />
            Driven by a passion for problem-solving and sharing knowledge <br /> 
            Tech content creator at Youtube
        </p>
      </div>
    </div>
  );
};

export default Hero;
