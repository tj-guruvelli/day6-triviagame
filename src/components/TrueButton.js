import React from "react";

const TrueButton = ({ onClick, children }) => {
  

  return (
    <div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110
    text-white rounded-full
    border-2
    py-2 px-4
    text-center font-bold" onClick={onClick}>
      {children}
    </div>
  );
};

export default TrueButton;