import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

const fiatcrypto = () => {
  return (
    <div className="w-full">
      <h2>Fiat Cryptography</h2>
      <div className="flex gap-2">
        <div className="tag">Formal Verification</div>
        <div className="tag">Coq</div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/mit-plv/fiat-crypto"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-block">
            <div className="btn">
              <AiFillGithub />
            </div>
          </div>
        </a>
        <a
          href="https://cs.adelaide.edu.au/~yval/pdfs/KuepperEGSWCCGWY23.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-block">
            <div className="btn">
              <IoIosPaper />
            </div>
          </div>
        </a>
      </div>

      <p>
        fiat-crypto is a library of cryptographic arithmetic implementations,
        compiled from short, high-level code templates. The templates are proven
        correct using the interactive theorem prover Coq, and a verified
        compiler generates low-level code in languages such as C, Golang, and
        even JSON.
      </p>
      <p>
        I implemented and proved functional correctness of saturated field
        arithmetic algorithms, including Solinas reduction and squaring, which
        is necessary for implementations of Curve25519-based encryption schemes.
        Previously, the library only supported unsaturated arithmetic in this
        prime field due to a limitation in the bounds inference pipeline, but
        through some clever workarounds my template was able to synthesize
        succesfully! My contributions can be viewed in fiat-crypto&apos;s open
        source repository on Github, linked above.
      </p>
      <p>
        We also collaborated with researchers from the University of Adelaide
        who developed CryptOpt, a compilation pipeline that takes the output of
        the fiat-crypto pipeline as input. CryptOpt compiles high-level
        functional implementations of the arithmetic algorithms down to
        assembly, producing output that is significantly faster than gcc/clang
        output. The platform then applies genetic improvement, which makes
        slight random changes in the assembly to improve runtime. With these
        strategies, CryptOpt is able to optimize my template to outperform
        industry-standard OpenSSL implementations of Curve25519 field arithmetic
        on newer Intel machines! The OpenSSL implementations are manually
        written and optimized, while generation of assembly produced from the
        fiat-crypto + CryptOpt pipeline is automated and comes with the
        additional benefit of formal proofs of correctness.
      </p>
      <p>
        More information about CryptOpt and fiat-crypto can be found in the
        paper linked above. The paper has been submitted to the 2023 Conference
        on Programming Language Design and Implementation (PLDI).
      </p>
    </div>
  );
};

export default fiatcrypto;
