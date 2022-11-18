import React from "react";
import { AiFillGithub } from "react-icons/ai";

const surgeryrl = () => {
  return (
    <div className="w-full">
      <h2>Surgical Reinforcement Learning</h2>
      <div className="flex gap-2">
        <div className="tag">Reinforcement Learning</div>
        <div className="tag">Pytorch</div>
        <div className="tag">Python</div>
      </div>
      <a
        href="https://github.com/samuel-tian/IsaacGymEnvs"
        target="_blank"
        rel="noreferrer"
      >
        <div className="inline-block">
          <div className="btn">
            <AiFillGithub />
          </div>
        </div>
      </a>
      <p>
        Laparoscopic cholecystectomy is a minimally invasive surgical removal of
        the gallbladder. Multiple small incisions are made in the abdomen of the
        patient, and several tools along with a video camera are inserted to
        perform the surgery via a robotic control system.
      </p>
      <p>
        Currently, research related to reinforcement learning applications in
        surgical settings is surprisingly sparse (although understandable, given
        the risk of such surgeries), so I am working on designing a RL
        environment that simulates a patient side manipulator interacting with a
        deformable liver-gallbladder compound mesh.
      </p>
      <p>
        Note that the Github repository above is out of date, as I had to make
        several of the mesh asset files that we are using private. Sorry for the
        inconvenience!
      </p>
    </div>
  );
};

export default surgeryrl;
