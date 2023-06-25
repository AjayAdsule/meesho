import React from "react";
import styled from "styled-components";
const Essential = () => {
  const Div = styled.div`
    margin-top: 40px;
    background-image: url("https://images.meesho.com/images/marketing/1678691743015_1200.webp");
    background-repeat: no-repeat;
    background-size: 90rem;
  `;
  return (
    <React.Fragment>
      <Div className="container  h-[550px] relative flex">
        <div className="buttons w-[35%] ">
          <button
            className="secondary-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 absolute
        top-[20rem]
        left-[8rem]
        duration-300"
          >
            View All
          </button>
        </div>
        <div className="products flex w-[60%]  mx-[30px] justify-evenly items-center">
            <div className="images  w-[250px]">
                <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp" alt="product" className="w-[240px]" />
            </div>
            <div className="images w-[250px]">
                <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" alt="product"className="w-[240px]"  />
            </div>
            <div className="images w-[250px]">
                <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" alt="product" className="w-[240px]" />
            </div>
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Essential;
