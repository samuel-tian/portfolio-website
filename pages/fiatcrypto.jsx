import React from "react";
import { AiFillGithub } from "react-icons/ai";

const fiatcrypto = () => {
  return (
    <div className="w-full">
      <h2>Fiat Cryptography</h2>
      <div className="flex gap-2">
        <div className='tag'>Formal Verification</div>
        <div className='tag'>Coq</div>
      </div>
      <a href="https://github.com/mit-plv/fiat-crypto" target="_blank" rel="noreferrer">
        <div className="inline-block">
          <div className="btn">
            <AiFillGithub />
          </div>
        </div>
      </a>

      <p>
        fiat-crypto is a library of cryptographic arithmetic implementations,
        compiled from short, high-level code templates. The templates are proven
        correct using the interactive theorem prover Coq, and a verified
        compiler generates low-level code that is competitive with manually
        optimized assembly.
      </p>
      <p>
        I implemented and proved functional correctness of the Solinas reduction
        algorithm, which is necessary for implementations of Curve25519 and
        other popular elliptic curves. Recent developments in the fiat-crypto
        compiler infrastructure would enable this algorithm to be faster than
        the library&apos;s existing reduction algorithm.
      </p>
    </div>
  );
};

export default fiatcrypto;
