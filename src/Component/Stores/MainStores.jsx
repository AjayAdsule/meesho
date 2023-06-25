import React from 'react'
import './store.css'
import Category from '../Filter/Category'
import Fabric from '../Filter/Fabric'
import Color from '../Filter/Color'
import Card from './Card'
const Mainstores = () => {
  return (
    <React.Fragment>
      <section className='main-container  flex'>
        <div className="main-left w-[25%]  h-[100%] p-[16px]">
          <h2>All Products</h2>
          <div className="filters  rounded-[10px] mt-[20px] p-[20px]">
              <p className='text-[14px]'>FILTERS</p>
              <p className='text-[14px]'>1000 Products</p>
              <div className="line"></div>  
              <Category/>
              <Fabric/>
              <Color/>
          </div>
        </div>
        <div className="main-right w-[75%]  h-[100%]">
          <Card/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Mainstores
