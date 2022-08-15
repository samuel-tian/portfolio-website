import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, page }) => {
  return (
    <div className="w-full">
      <Link href={page}>
        <div className="p-2 hover:bg-gray-50 shadow-sm rounded-xl cursor-pointer">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
