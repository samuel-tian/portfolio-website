import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineProfile } from "react-icons/ai";

const Publications = () => {
  return (
    <div id="publications" className="w-full mb-6">
      <h2>Publications</h2>
      <p>
        J. Kuepper, A. Erbsen, J. Gross, O. Conoly, C. Sun, S. Tian, D. Wu, A.
        Chlipala, C. Chuengsatiansup, D. Genkin, M. Wagner, and Y. Yarom,&nbsp;
        <a
          href="https://arxiv.org/abs/2211.10665"
          target="_blank"
          rel="noreferrer"
          className="underline text-gray-700 hover:text-gray-400"
        >
          CryptOpt: Verified Compilation with Random Program Search for
          Cryptographic Primitives
        </a>
        , arXiv e-prints , arXiv:2211.10665 (2022), arXiv:2211.10665 [cs.CR].
      </p>
    </div>
  );
};

export default Publications;
