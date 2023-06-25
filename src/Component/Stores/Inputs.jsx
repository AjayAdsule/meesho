import React from 'react'

const Inputs = (prpps) => {
  return (
    <React.Fragment>
      <input type="checkbox" className="h-[22px] w-[25px]" />
        <label className="ml-[12px] text-[1.3rem]">
          {prpps.product}
        </label>
        <br />
    </React.Fragment>
  )
}

export default Inputs
