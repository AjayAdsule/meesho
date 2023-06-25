import React,{useState} from 'react'
import { CloseButton, OpenButton } from './Button'
import Inputs from './Inputs'

const Color = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <React.Fragment>
      <div className="color flex justify-between mt-[22px]">
        <h3>Color</h3>
        <OpenButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        <CloseButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <div className={`checkboxes mt-[22px] ${isOpen ? `` :`hidden`}`}>
        <Inputs product="pink"/>
        <Inputs product="maroon"/>
        <Inputs product="red"/>
        <Inputs product="blue"/>
        <Inputs product="yellow"/>
        <Inputs product="green"/>
      </div>
      <div className="line"></div>
    </React.Fragment>
  )
}

export default Color
