import React from "react";

const LayoutPost = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex mx-auto px-10 py-50  md:max-w-3xl leading-8">{children}</div>
      </div>
      ;
    </>
  );
};

export default LayoutPost;
