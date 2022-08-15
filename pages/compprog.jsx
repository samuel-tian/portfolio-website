import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";

const compprog = () => {
  return (
    <div className="w-full">
      <h2>Competitive Programming</h2>
      <div className="flex gap-2">
        <div className="tag">Algorithms</div>
        <div className="tag">Data Structures</div>
        <div className="tag">C++</div>
        <div className="tag">Python</div>
        <div className="tag">Java</div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/samuel-tian/programming-competitions"
          target="_blank" rel="noreferrer"
        >
          <div className="inline-block">
            <div className="btn">
              <AiFillGithub />
            </div>
          </div>
        </a>
        <a href="https://codeforces.com/profile/ricefarmer" target="_blank" rel="noreferrer">
          <div className="inline-block">
            <div className="btn">
              <SiCodeforces />
            </div>
          </div>
        </a>
      </div>
      <p>
        In high school, I was heavily involved in programming competitions and
        developed a passion for algorithmic programming. Nowadays, I don&apos;t
        participate in programming competitions that often, but I still enjoy
        the pleasure of solving algorithmic tasks every now and then.
      </p>
    </div>
  );
};

export default compprog;
