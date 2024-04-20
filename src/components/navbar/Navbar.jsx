import { Link } from "react-router-dom";
import { navList } from "../../services/constants/navbar.js";

const Navbar = () => {
  return (
    <nav>
      {navList.map((nav, index) => (
        <Link key={index} to={nav.path}>
          {nav.name[0].toUpperCase() + nav.name.slice(1)}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
