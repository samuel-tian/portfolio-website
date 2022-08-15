import React from "react";
import { AiFillGithub } from "react-icons/ai";

const portfolio = () => {
  return (
    <div className="w-full">
      <h2>My Portfolio Website</h2>
	  <div className="flex gap-2">
        <div class='tag'>Next.js</div>
        <div class='tag'>Tailwind CSS</div>
      </div>
      <a href="https://github.com/samuel-tian/samuel-tian.github.io" target="_blank">
        <div className="inline-block">
          <div class="btn">
            <AiFillGithub />
          </div>
        </div>
      </a>
      <p>
        This was my first venture into front-end development. I'm still figuring
        things out as I go along, but I hope you like what you see!
      </p>
    </div>
  );
};

export default portfolio;
