import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    a {
      line-height: 55px;
      color: rgb(97, 97, 115);
      font-weight: 600;
      font-size: 18px;
    }
    h6 {
      font-weight: 700;
      font-size: 20px;
      color: rgb(53, 53, 67);
      margin-top: 12px;
    }
  `;
  return (
    <React.Fragment>
      <Footer className="footer flex h-[500px] w-[100%] bg-[rgb(248,248,255)] pt-[80px] p-[20px]">
        <div className="app r w-[30%]">
          <h2 className="text-[34px]">Shop Non-Stop on Meesho</h2>
          <p className="mt-[22px] text-[20px] font-medium text-[rgb(97,97,115)]">
            Trusted by more than 1 Crore Indians{" "}
            <p>Cash on Delivery | Free Delivery</p>
          </p>
          <div className="app-logo flex justify-between mt-[20px]">
            <div className="google-play w-[45%]">
              <img
                src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
                alt="google-play"
                loading="lazy"
              />
            </div>
            <div className="apple w-[45%] ">
              <img
                src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
                alt="apple"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="career  w-[15%]  pl-[22px]">
          <a href="/">Career</a>
          <p>
            <a href="/">Became a supplier</a>
          </p>
          <p>
            <a href="/">Hall of Fame</a>
          </p>
          <p>
            <a href="/">Site Map</a>
          </p>
        </div>
        <div className="policy  w-[15%]">
          <p>
            <a href="/">Legal and Policies</a>
          </p>
          <p>
            <a href="/">Meesho Tech Blog</a>
          </p>
          <p>
            <a href="/">Notices and Returns</a>
          </p>
        </div>
        <div className="social-media  w-[20%]">
          <h6>Reach out to us</h6>
          <div className="flex">
            <a href="/">
              <img
                src="https://images.meesho.com/images/pow/facebook.png"
                alt="facebook"
                loading="lazy"
                className="w-[40px] h-[35px] mt-[22px]"
              />
            </a>
            <a href="/">
              <img
                src="https://images.meesho.com/images/pow/instagram.png"
                alt="instagram"
                loading="lazy"
                className="w-[40px] h-[35px] mt-[22px] ml-[22px]"
              />
            </a>
            <a href="/">
              <img
                src="https://images.meesho.com/images/pow/youtube.png"
                alt="youtube"
                loading="lazy"
                className="w-[40px] h-[35px] mt-[22px] ml-[22px]"
              />
            </a>
            <a href="/">
              <img
                src="https://images.meesho.com/images/pow/linkedin.png"
                alt="linkedin"
                loading="lazy"
                className="w-[40px] h-[35px] mt-[22px] ml-[22px]"
              />
            </a>
            <a href="/">
              <img
                src="https://images.meesho.com/images/pow/twitter.png"
                alt="twitter"
                loading="lazy"
                className="w-[40px] h-[35px] mt-[22px] ml-[22px]"
              />
            </a>
           
          </div>
        </div>
        <div className="contact-us  w-[20%]"></div>
      </Footer>
    </React.Fragment>
  );
};

export default Footer;
