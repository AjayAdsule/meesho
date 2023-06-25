import React from "react";
import styled from "styled-components";

const MainBanner = () => {
  const Main = styled.main`
    .left {
      background-color: #f8f9fe;
    }
    .line {
      border: 1px solid black;
      margin-top: 5px;
      height: 45px;
      margin-left: 25px;
    }
  `;
  return (
    <React.Fragment>
      <Main className="container  h-[500px] border flex">
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
            <div className="cod flex">
              <img
                src="https://images.meesho.com/images/pow/cod_jamun.svg"
                alt="COD"
                className="mx-4 w-[40px]"
              />
              <p className="mx-4 text-[18px]">
                <p>Cash on</p>
                <p>Delivery</p>
              </p>
              <div className="line h-[10px] "></div>
            </div>
            <div className="return flex">
              <img
                src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                alt="Return"
                className="mx-4 w-[40px]"
              />
              <p className="mx-4 text-[18px]">
                <p>Easy</p>
                <p>Return</p>
              </p>
            </div>
          </div>
          <div className="button w-[400px] h-[60px] bg-purple border flex justify-items-center ">
            <div className="playstore-icon mx-[50px] my-[15px]">
          <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" alt="playstore" />
            </div>
            <p className="text-[20px] text-white  my-[12px]">Download the Meesho App</p>
          </div>
         
        </div>
        <div className="right w-[50%] ">
          <img src="https://images.meesho.com/images/marketing/1686234459500_512.webp" className="h-[100%]" alt="banner" />
        </div>
      </Main>
    </React.Fragment>
  );
};

export default MainBanner;
