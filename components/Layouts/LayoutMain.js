import React from "react";

const LayoutMain = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="   px-10 py-50  md:max-w-[860px] ">{children}</div>
      </div>
      ;
    </>
  );
};

export default LayoutMain;
