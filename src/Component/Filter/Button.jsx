import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const OpenButton = (props) => {
  const {setIsOpen,isOpen} = props;
  const handleOpenClick = () => {
    setIsOpen(true);
    console.log("btn");
  };
  return (
    <React.Fragment>
      <button
        onClick={handleOpenClick}
        className={`border-2 border-red-500 ${isOpen ? "hidden" : ""}`}
        // className="  open-button"
      >
        <FaAngleDown className="w-[50px] h-[22px]" />
      </button>
    </React.Fragment>
  );
};

const CloseButton = (props) => {
  const {setIsOpen,isOpen} = props;
  
  const handleCloseClick=()=>{
    setIsOpen(false)
  }
  return (
    <React.Fragment>
      <button 
      
       onClick={handleCloseClick} className={`${isOpen? "":"hidden"}`}>
        <FaAngleUp className="w-[50px] h-[22px] " />
      </button>
    </React.Fragment>
  );
};

export { OpenButton, CloseButton };
