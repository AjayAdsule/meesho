import React from "react";
import styled from "styled-components";

const MainBanner = () => {
  const Main = styled.main`
    .left {
      background-color: #f8f9fe;
    }
    .line{
        border: 1px solid black;
        margin-top: 5px;
        height: 45px;
        margin-left: 10px;
    }
  `;
  return (
    <React.Fragment>
      <Main className="container border h-[500px] flex">
        <div className="left p-[35px] w-[50%]">
          <h1 className="text-[48px] font-semibold">
            <span>Lowest Price</span>
            <br />
            <span>Best Quality Shopping</span>
          </h1>
          <div className="card flex bg-white h-[65px] my-8">
            <div className="delivery flex">
              <img
                src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                alt="truck"
                className="mx-4 w-[40px]"
              />
              <p className="mx-4 text-[18px]">
                <p>Free</p>
                <p>Delivery</p>
              </p>
              <div className="line h-[10px] "></div>
            </div>
            <div className="cod"></div>
            <div className="return"></div>
          </div>
        </div>
        <div className="right"></div>
      </Main>
    </React.Fragment>
  );
};

export default MainBanner;
