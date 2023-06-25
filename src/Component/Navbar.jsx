import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='h-[85px]  flex justify-between '>
        <div className="left lg:w-[50%]      flex ">
            <div className="image w-[105px]">
                <img src="https://etimg.etb2bimg.com/photo/87203105.cms" alt="" />
            </div>
            <div className="search h-[50px] w-[400px] my-4 mx-6 rounded-md">
            <i className="fa-solid fa-magnifying-glass fa-lg mx-[10px]" ></i>
            <input type="text"placeholder='Try Saree,Kurti or Search By Product Code' className='text-[16px] indent-4 w-[80%] h-[100%] border-none'/>
            </div>
        </div>
        <div className="right lg:w-[40%]  flex ">
            <p className='text-[20px] mx-[22px] my-[20px]'>Download App</p>
            <p className='text-[20px] mx-[28px] my-[20px]'>Become A Supplier</p>
            <div className="account my-[15px] mx-8">
            <i className="fa-solid fa-user fa-xl mx-[5px]"></i>
            <p className='my-[5px]'>Profile</p>
            </div>
            <div className="cart my-[15px] mx-12">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            <p className='my-[5px]'>Cart</p>
            </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
