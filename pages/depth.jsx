import React from "react";

const depth = () => {
  return (
    <div className="w-full">
      <h2>Monocular Depth Perception</h2>
      <div className="flex gap-2">
        <div className="tag">Computer Vision</div>
        <div className="tag">Keras</div>
        <div className="tag">Tensorflow</div>
        <div className="tag">Python</div>
      </div>
      <p>
        As a personal project, I followed the famous{" "}
        <a
          href="https://arxiv.org/pdf/1406.2283.pdf"
          target="_blank" rel="noreferrer"
          className="underline underline-offset-1"
        >
          paper
        </a>{" "}
        to predict the depth of pixels in an indoor scene. This project served
        as my introduction to the field of machine learning. Through
        implementation, I familiarized myself with the Tensorflow API and
        learned about many key ideas in computer vision.
      </p>
      <p>Code will be pushed to Github soon!</p>
    </div>
  );
};

export default depth;
