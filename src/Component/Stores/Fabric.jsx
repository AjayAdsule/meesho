import React ,{useState}from "react";
import { CloseButton, OpenButton } from "./Button";
import Inputs from "./Inputs";

const Fabric = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <React.Fragment>
      <div className="fabric flex justify-between mt-[22px]">
        <h3>Fabric</h3>
        <OpenButton  isOpen={isOpen} setIsOpen={setIsOpen}/>
        <CloseButton  isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <div className={`checkboxes  mt-[22px] ${isOpen ? '':'hidden'} `}>
        <Inputs product="Acrylic"/>
        <Inputs product="Art Silk"/>
        <Inputs product="Bamboo"/>
        <Inputs product="Chambray"/>
        <Inputs product="Chiffon"/>
        <Inputs product="Combed Cotton"/>
        <Inputs product="Cotton"/>
        <Inputs product="Cotton Blend"/>
        <Inputs product="Cotton Linen"/>
        <Inputs product="Crepe"/>
        <Inputs product="Denim"/>
      </div>
      <div className="line"></div>
    </React.Fragment>
  );
};

export default Fabric;
