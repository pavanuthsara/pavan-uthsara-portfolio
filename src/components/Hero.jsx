import React from "react";

const Hero = () => {
  return (
    <div className="flex center justify-center items-center gap-5">
      <div className="w-1/2 place-items-end">
        <img src="/img/pavan_picture.webp" alt="Picute of pavan" className="w-3/4" />
      </div>
      <div className="w-1/2 pr-8 ">
        <p className="text-4xl my-4 font-bold">Let's Build & Solve</p>
        {/* <p className="pr-44">Undergraduate Software Engineering student <br />
            Driven by a passion for problem-solving and sharing knowledge <br /> 
            Tech content creator at Youtube
        </p> */}
        <p className="pr-44">
          Undergraduate Software Engineering Student | Problem-Solving
          Enthusiast | Tech Content Creator
        </p>
        <p className="pr-44 mt-2 text-sm text-slate-600">
          Transforming complex challenges into elegant software solutions while
          empowering the next generation of developers through engaging YouTube
          content. Currently pursuing Software Engineering degree at SLIIT with a
          relentless curiosity for emerging technologies and a commitment to
          building meaningful digital experiences.
        </p>
        <a className="btn btn-ghost mt-4 bg-base-200 shadow-sm" href="https://www.linkedin.com/in/pavanuthsara/" target="_blank">LinkedIn</a>
      </div>
    </div>
  );
};

export default Hero;
