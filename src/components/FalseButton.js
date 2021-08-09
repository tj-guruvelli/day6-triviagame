import React from "react";

const FalseButton = ({ children, onClick }) => {
  const classes = [
    "transition duration-500 ease-in-out bg-red-700 hover:bg-black transform hover:-translate-y-1 hover:scale-110",
    "text-white rounded-full border-2",
    "py-2 px-4",
    "text-center font-bold",
  ].join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default FalseButton;