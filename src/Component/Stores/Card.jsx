import React from "react";

const Card = () => {
  return (
    <React.Fragment>
      <div className="card  h-[450px]  w-[300px] mt-[80px]">
        <div className="card-image">
          <img
            src="https://images.meesho.com/images/products/270957245/whjzx_400.webp"
            alt="rain-coat"
            className="max-h-[300px]"
          />
        </div>
        <div className="card-body">
          <p className="text-[19px] mt-[15px] text-[rgb(139,139,163)]">
            Stylish Fashionista Men...{" "}
          </p>
          <h4 className="text-[22px] ml-[8px] font-semibold">
            ₹ 268
            <span className="text-[14px] text-[rgb(139,139,163)]">onward</span>
          </h4>
          <p className="mt-[8px] ml-[8px]  bg-[rgb(248,248,255)]">Free Delivery</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
