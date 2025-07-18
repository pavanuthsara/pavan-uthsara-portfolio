import { Hash } from "lucide-react";
import React from "react";

import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/pavan_resume.pdf";
    link.download = "pavan_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>
                  <HashLink to="#home">Home</HashLink>
                </a>
              </li>
              <li>
                <a>
                  <HashLink to="#projects">Projects</HashLink>
                </a>
              </li>
              <li>
                <a>
                  <HashLink to="#contactme">Contact Me</HashLink>
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Pavan Uthsara</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <HashLink to="#home">Home</HashLink>
              </a>
            </li>
            <li>
              <summary>
                <HashLink to="#projects">Projects</HashLink>
              </summary>
            </li>
            <li>
              <a>
                <HashLink to="#contactme">Contact Me</HashLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={handleCvDownload}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
