import React from "react";
import { Link } from "react-scroll";
import logo3 from "../../images/logo3.png";

const FooterNavItem = ({ title, to }) => (
  <p className="text-white text-base text-center mx-2 cursor-pointer">
    <Link to={to} smooth={true} duration={500} className="cursor-pointer">
      {title}
    </Link>
  </p>
);

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo3} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <FooterNavItem title="Home" to="welcome-section" />
        <FooterNavItem title="Services" to="services" />
        <FooterNavItem title="Transaction History" to="transactionhistory" />
        <FooterNavItem title="Market" to="market" />
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Developed By Pramit Kumar Kar and Ankan Santra</p>
      <p className="text-white text-sm text-center font-medium mt-2">Team Ankan and Pramit</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Ankan and Pramit</p>
      <p className="text-white text-right text-xs">Final Year Project</p>
    </div>
    <p className="text-white text-center text-xs mt-4">© {new Date().getFullYear()} All rights reserved</p>
  </div>
);

export default Footer;
