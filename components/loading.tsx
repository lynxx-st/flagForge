import React from "react";
import Spinner from "./ui/spinner";
import Navbar from "./Navbar";

const Loading = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
