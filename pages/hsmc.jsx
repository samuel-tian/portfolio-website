import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

const hsmc = () => {
  return (
    <div className="w-full">
      <h2>Honors Summer Math Camp</h2>
      <p className="mb-4">
        Honors Summer Math Camp is a summer research program hosted by Texas
        State University. I attended HSMC for four summers in high school (the
        last as a counselor). During my time there, I completed three research
        projects.
      </p>
      <h3>Maritime Threat Detection</h3>
      <div className="flex gap-2">
        <div class="tag">Machine Learning</div>
        <div class="tag">Signal Processing</div>
        <div class="tag">C++</div>
        <div class="tag">Python</div>
      </div>
      <a href="https://github.com/samuel-tian/threat_detection" target="_blank">
        <div className="inline-block">
          <div class="btn">
            <AiFillGithub />
          </div>
        </div>
      </a>
      <p>
        Using Hidden Markov Models, we were able to determine the maliciousness
        of boat trajectories to identify maritime piracy. Before trajectories
        were fed into the HMM for classification, they were first preprocessed
        using techniques such as vector quantization and Fourier transformations
        to reduce their dimensionality.
      </p>

      <h3>Lossless Data Compression</h3>
      <div className="flex gap-2">
        <div class="tag">Data Compression</div>
        <div class="tag">C++</div>
      </div>
      <a href="/assets/delta_sfe.pdf" target="_blank">
        <div className="inline-block">
          <div class="btn">
            <IoIosPaper />
          </div>
        </div>
      </a>
      <p>
        We developed a lossless data compression algorithm called Delta-SFE that
        operated over the domain of unbounded integers. Unfortunately, the code
        is not open source, but the paper that accompanied our code is.
      </p>

      <h3>Integrity Validation using DLTs</h3>
      <div className="flex gap-2">
        <div class="tag">Blockchain</div>
      </div>
      <p></p>
    </div>
  );
};

export default hsmc;
