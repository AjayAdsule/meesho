import React, { useState } from "react";
import { OpenButton, CloseButton } from "./Button";
import Inputs from "./Inputs";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen, " setIsOpen");

  return (
    <React.Fragment>
      <div className="mt-[22px] category flex justify-between">
        <h3>Category</h3>
        <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`checkboxes mt-[22px] ${isOpen ? "" : "hidden"}`}>
        <Inputs product="Capes, Shrugs & Ponchos" />
        <Inputs product="Panty" />
        <Inputs product="Shaving Razors & Cartridges" />
        <Inputs product="T-shirts" />
        <Inputs product="Vests" />
      </div>
      <div className="line"></div>
    </React.Fragment>
  );
};

export default Category;
