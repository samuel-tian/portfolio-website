import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";

const compprog = () => {
  return (
    <div className="w-full">
      <h2>Competitive Programming</h2>
      <div className="flex gap-2">
        <div class="tag">Algorithms</div>
        <div class="tag">Data Structures</div>
        <div class="tag">C++</div>
        <div class="tag">Python</div>
        <div class="tag">Java</div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/samuel-tian/programming-competitions"
          target="_blank"
        >
          <div className="inline-block">
            <div class="btn">
              <AiFillGithub />
            </div>
          </div>
        </a>
        <a href="https://codeforces.com/profile/ricefarmer" target="_blank">
          <div className="inline-block">
            <div class="btn">
              <SiCodeforces />
            </div>
          </div>
        </a>
      </div>
      <p>
        In high school, I was heavily involved in programming competitions and
        developed a passion for algorithmic programming. Nowadays, I don't
        participate in programming competitions that often, but I still enjoy
        the pleasure of solving algorithmic tasks every now and then.
      </p>
    </div>
  );
};

export default compprog;
