import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer flex border h-[500px] w-[100%] bg-[rgb(248,248,255)] pt-[80px] p-[20px]">
        <div className="app border w-[30%]">
          <h2 className="text-[34px]">Shop Non-Stop on Meesho</h2>
          <p className="mt-[22px] text-[20px] font-medium text-[rgb(97,97,115)]">
            Trusted by more than 1 Crore Indians <p>Cash on Delivery | Free
            Delivery</p>
          </p>
          <div className="app-logo flex justify-between mt-[20px]">
            <div className="google-play border w-[45%]">
                <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="google-play" loading="lazy"/>
            </div>
            <div className="apple w-[45%] border">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="apple" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="career border w-[15%]"></div>
        <div className="policy border w-[15%]"></div>
        <div className="social-media border w-[20%]"></div>
        <div className="contact-us border w-[20%]"></div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
