import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineProfile } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="w-full">
      <h1>Sam Tian</h1>
      <p>
        Hi! My name is Sam, and I am a sophomore studying computer science at
        MIT.
      </p>
      <ul className="mt-2 mb-6 flex gap-5">
        <li>
          <a href="https://github.com/samuel-tian" target="_blank" rel="noreferrer">
            <div className="btn">
              <AiFillGithub />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/samuel-tian/" target="_blank" rel="noreferrer">
            <div className="btn">
              <AiFillLinkedin />
            </div>
          </a>
        </li>
        <li>
          <a href="/assets/Resume_SamuelTian.pdf" target="_blank" rel="noreferrer">
            <div className="btn">
              <AiOutlineProfile />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
