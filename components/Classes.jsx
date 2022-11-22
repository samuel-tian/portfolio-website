import React from "react";
import ClassItem from "./ClassItem";

const Classes = () => {
  return (
    <div id="classes" className="w-full mb-6">
      <h2>Classes</h2>
      <div className="grid grid-cols-1 gap-2">
        <ClassItem
          title="6.8611: Quantitative Methods for Natural Language Processing"
          page="/6861"
        />
        <ClassItem title="6.1910: Computation Structures" page="/6004" />
      </div>
    </div>
  );
};

export default Classes;
