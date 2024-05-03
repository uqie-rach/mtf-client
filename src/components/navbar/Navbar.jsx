import { useEffect, useState } from "react";
import { navList } from "@services/constants/navbar.js";
import { MTFLogo, IClose, IMenu } from "@assets";
import { Button } from "@components";
import "./navbar.css";
import { handleRegistration } from "@services/constants/globalUtils.js";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [active, setActive] = useState("home");
  const [onTop, setOnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onTop]);

  const handleMenuToggle = () => {
    setIsOpened(!isOpened);
  };

  const handleClickedNav = (e) => {
    setActive(e.target.innerText.toLowerCase());
  };

  return (
    <nav className={`nav-container ${onTop ? "" : "bg-white/10"}`}>
      <div
        className={`nav-wrapper flex-between ${
          onTop ? "py-3 md:py-4" : "py-6 md:py-8"
        }`}
      >
        {/* NAV LOGO */}
        <div className="logo-container flex flex-center">
          <img
            src={MTFLogo}
            alt="Maliki Tech Festivals Logo"
            className="logo"
          />
          <p className="font-body-2 uppercase font-semibold">
            MTF {new Date().getUTCFullYear()}
          </p>
        </div>

        {/* DESKTOP NAV LIST */}
        <ul className="desktop-navlist">
          {navList.map((nav, index) => (
            <NavList
              key={index}
              path={nav.path}
              text={nav.name[0].toUpperCase() + nav.name.slice(1)}
              onClick={handleClickedNav}
              active={active === nav.name}
            />
          ))}
        </ul>

        {/* MOBILE NAV LIST */}
        <ul
          className={`mobile-navlist ${
            !isOpened ? "-left-full opacity-0" : "left-0 opacity-100"
          } ${onTop ? "duration-500 ease-in-out" : "bg-white/10 ease-linear"}`}
        >
          {navList.map((nav, index) => (
            <NavList
              key={index}
              path={nav.path}
              text={nav.name[0].toUpperCase() + nav.name.slice(1)}
              onClick={() => setIsOpened(false)}
            />
          ))}
        </ul>

        <div className="mobile-menu flex-1" onClick={handleMenuToggle}>
          {!isOpened ? (
            <img src={IMenu} alt="Open navbar" className="w-8" />
          ) : (
            <img src={IClose} alt="Close navbar" className="w-8" />
          )}
        </div>

        {/* NAV BUTTONS */}
        <div className="button-container">
          <Button
            text={"register"}
            variant={"btn-primary"}
            onClick={handleRegistration}
          />
        </div>
      </div>
    </nav>
  );
};

function NavList({ index, path, text, onClick = () => {}, active }) {
  return (
    <a
      href={path}
      className={`list font-body-1 ${active ? "text-white" : "text-white/40"}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Navbar;
