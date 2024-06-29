import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import logo3 from "../../images/logo3.png";

const NavBarItem = ({ title, classprops, onClick, to }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`} onClick={onClick}>
    <Link to={to} smooth={true} duration={500} className="cursor-pointer">
      {title}
    </Link>
  </li>
);

const Navbar = ({ onLogout }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleLogout = () => {
    onLogout();
    setToggleMenu(false);  
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo3} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "Services", "Transaction History", "Market"].map((item, index) => (
          <NavBarItem key={item + index} title={item} to={item.toLowerCase().replace(/ /g, "")} />
        ))}
        <NavBarItem
          title="Logout"
          classprops="bg-[#6DA5C0] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#86A8CF]"
          onClick={handleLogout} />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Home", "Services", "Transaction History", "Market"].map(
              (item, index) => (
                <NavBarItem key={item + index} title={item} to={item.toLowerCase().replace(/ /g, "")} classprops="my-2 text-lg" />
              ),
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
