import React from "react";
import styled from "styled-components";

const Fashion = () => {
  const Div = styled.div`
    margin-top: 50px;
    background-image: url("https://images.meesho.com/images/marketing/1678691670429_1200.webp");
    background-position-x: 80px;
  `;
  return (
    <React.Fragment>
      <Div className="container h-[550px] flex relative ">
        <div className="cards h-[400px]  absolute top-[85px] left-[100px]">
          <img
            src="https://images.meesho.com/images/marketing/1678691686252_400.webp"
            alt="card-image"
          />
        </div>
        <div className="cards h-[400px]  absolute top-[222px] left-[600px]">
          <img
            src="https://images.meesho.com/images/marketing/1678691699680_300.webp"
            alt="card-image"
          />
        </div>
        <div className="cards h-[400px]  absolute top-[222px] left-[981px]">
          <img
            src="https://images.meesho.com/images/marketing/1678691712594_300.webp"
            alt="card-image"
          />
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Fashion;
