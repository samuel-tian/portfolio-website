import React from "react";

const depth = () => {
  return (
    <div className="w-full">
      <h2>Monocular Depth Perception</h2>
      <div className="flex gap-2">
        <div class="tag">Computer Vision</div>
        <div class="tag">Keras</div>
        <div class="tag">Tensorflow</div>
        <div class="tag">Python</div>
      </div>
      <p>
        As a personal project, I followed the famous{" "}
        <a
          href="https://arxiv.org/pdf/1406.2283.pdf"
          target="_blank"
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
