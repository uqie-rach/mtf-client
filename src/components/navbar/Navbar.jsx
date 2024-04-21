import { navList } from "@services/constants/navbar.js";

const Navbar = () => {
  return (
    <nav className="text-white">
      {navList.map((nav, index) => (
        <a key={index} href={nav.path}>
          {nav.name[0].toUpperCase() + nav.name.slice(1)}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
